import { Router } from 'express'
import { parseEnquiry } from '../enquiry.js'

export const contactRouter = Router()

contactRouter.post('/', (req, res) => {
  const result = parseEnquiry(req.body)
  if (!result.ok) {
    res.status(400).json({ error: 'Invalid enquiry', issues: result.issues })
    return
  }

  // TODO: deliver the enquiry (email / CRM / database) once the destination is decided.
  console.log('New enquiry:', result.data)
  res.status(201).json({ ok: true })
})
