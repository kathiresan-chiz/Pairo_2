/**
 * Netlify Function: POST /api/contact
 * Production replacement for the Express route in server/src/routes/contact.ts.
 * Uses the same validation rules (server/src/enquiry.ts).
 */
import { parseEnquiry } from '../../server/src/enquiry.ts'

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } })

export default async (req: Request) => {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed' })

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return json(400, { error: 'Invalid JSON' })
  }

  const result = parseEnquiry(body)
  if (!result.ok) return json(400, { error: 'Invalid enquiry', issues: result.issues })

  // TODO: deliver the enquiry (email / CRM / database) once the destination is decided.
  // Until then it is visible in the Netlify dashboard: Logs → Functions → contact.
  console.log('New enquiry:', result.data)
  return json(201, { ok: true })
}

// Serve this function at the same URL the website already calls.
export const config = { path: '/api/contact' }
