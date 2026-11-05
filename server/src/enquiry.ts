import { z } from 'zod'

/**
 * Contact-form enquiry rules, shared by the Express server (local dev)
 * and the Netlify Function (production), so both validate identically.
 */
export const enquirySchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  email: z.email().max(200),
  company: z.string().trim().min(1).max(200),
  phone: z.string().trim().max(40).optional().default(''),
  industry: z.string().trim().max(80).optional().default(''),
  contactMethod: z.enum(['Email', 'Phone']).default('Email'),
  requirements: z.string().trim().max(5000).optional().default(''),
  intent: z.enum(['demo', 'sales', 'pricing', 'general']).catch('general'),
})

export type Enquiry = z.infer<typeof enquirySchema>

/** Validate a submitted body. Returns the clean enquiry, or the per-field errors. */
export function parseEnquiry(body: unknown) {
  const parsed = enquirySchema.safeParse(body)
  return parsed.success
    ? ({ ok: true, data: parsed.data } as const)
    : ({ ok: false, issues: z.flattenError(parsed.error).fieldErrors } as const)
}
