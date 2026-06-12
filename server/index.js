import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { getClient, getLeadsCollection, buildLeadDoc } from '../lib/mongo.js';

// Local development server. On Vercel the same /api/leads route is served by
// the serverless function in api/leads.js — this Express app is for `npm run
// dev:all` / `npm run server` so you can collect leads while developing.

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

if (!process.env.MONGODB_URI) {
  console.error('✗ MONGODB_URI is not set. Add it to touragency/.env');
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/leads', async (req, res) => {
  try {
    const { doc, error } = buildLeadDoc(req.body, req.headers['user-agent']);
    if (error) return res.status(400).json({ ok: false, error });

    const leads = await getLeadsCollection();
    const { insertedId } = await leads.insertOne(doc);
    return res.status(201).json({ ok: true, id: insertedId });
  } catch (err) {
    console.error('POST /api/leads failed:', err);
    return res.status(500).json({ ok: false, error: 'Server error.' });
  }
});

app.get('/api/leads', async (req, res) => {
  if (ADMIN_TOKEN && req.headers['x-admin-token'] !== ADMIN_TOKEN) {
    return res.status(401).json({ ok: false, error: 'Unauthorized.' });
  }
  const leads = await getLeadsCollection();
  const items = await leads.find().sort({ createdAt: -1 }).limit(200).toArray();
  res.json({ ok: true, count: items.length, items });
});

// In production you can also run this single server to serve the built
// frontend from /dist (not used on Vercel, which serves dist statically).
const distDir = path.join(__dirname, '..', 'dist');
if (existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get(/^(?!\/api).*/, (_req, res) => res.sendFile(path.join(distDir, 'index.html')));
}

// Warm the connection, then listen.
getClient()
  .then(() => app.listen(PORT, () => console.log(`✓ API listening on http://localhost:${PORT}`)))
  .catch((err) => {
    console.error('✗ Failed to connect to MongoDB:', err);
    process.exit(1);
  });
