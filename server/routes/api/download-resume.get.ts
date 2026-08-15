import { defineEventHandler, sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  // Direct 302 redirect to static PDF served by CDN
  return sendRedirect(event, '/Lin_Tsai_Resume.pdf', 302)
})
