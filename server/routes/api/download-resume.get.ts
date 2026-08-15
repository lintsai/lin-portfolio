import { createReadStream, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineEventHandler, setHeader, createError } from 'h3'

export default defineEventHandler((event) => {
  const filePath = resolve(process.cwd(), 'public', 'Lin_Tsai_Resume.pdf')
  
  if (!existsSync(filePath)) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Resume PDF file not found'
    })
  }

  // Set headers for forced download and preview compatibility
  setHeader(event, 'Content-Type', 'application/pdf')
  setHeader(event, 'Content-Disposition', 'attachment; filename="Lin_Tsai_Resume_2026.pdf"')
  setHeader(event, 'Cache-Control', 'no-cache')

  return createReadStream(filePath)
})
