import { getLeadsCollection, buildLeadDoc } from '../lib/mongo.js';

// Vercel Serverless Function — handles /api/leads in production.
// (Locally, server/index.js serves the same route via Express.)
export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      // Vercel parses JSON bodies automatically; fall back just in case.
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const { doc, error } = buildLeadDoc(body, req.headers['user-agent']);
      if (error) return res.status(400).json({ ok: false, error });

      const leads = await getLeadsCollection();
      const { insertedId } = await leads.insertOne(doc);
      return res.status(201).json({ ok: true, id: insertedId });
    }

    if (req.method === 'GET') {
      const token = process.env.ADMIN_TOKEN;
      if (token && req.headers['x-admin-token'] !== token) {
        return res.status(401).json({ ok: false, error: 'Unauthorized.' });
      }
      const leads = await getLeadsCollection();
      const items = await leads.find().sort({ createdAt: -1 }).limit(200).toArray();
      return res.status(200).json({ ok: true, count: items.length, items });
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  } catch (err) {
    console.error('/api/leads failed:', err);
    return res.status(500).json({ ok: false, error: 'Server error.' });
  }
}
