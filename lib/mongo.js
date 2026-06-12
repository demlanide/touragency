import { MongoClient } from 'mongodb';

// Cache the connection promise across invocations. On Vercel this keeps the
// same client warm between serverless calls instead of reconnecting each time.
let clientPromise;

export function getClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set');
  if (!clientPromise) clientPromise = new MongoClient(uri).connect();
  return clientPromise;
}

export async function getLeadsCollection() {
  const client = await getClient();
  const db = client.db(process.env.MONGODB_DB || 'centralasia');
  return db.collection('leads');
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate an incoming request body and shape it into a lead document.
// Returns { doc } on success or { error } with a user-facing message.
export function buildLeadDoc(body = {}, userAgent = '') {
  const str = (v) => (typeof v === 'string' ? v.trim() : '');

  const name   = str(body.name);
  const email  = str(body.email);
  const phone  = str(body.phone);
  const dates  = str(body.dates);
  const tour   = str(body.tour);
  const notes  = str(body.notes);
  const source = str(body.source) || 'website';

  if (!name || (!email && !phone)) {
    return { error: 'Please provide a name and an email or phone.' };
  }
  if (email && !EMAIL_RE.test(email)) {
    return { error: 'Invalid email address.' };
  }

  return {
    doc: {
      name, email, phone, dates, tour, notes, source,
      userAgent: str(userAgent).slice(0, 300),
      createdAt: new Date(),
    },
  };
}
