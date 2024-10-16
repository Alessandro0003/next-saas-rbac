import { roleSchema } from '@saas/auth'
import { z } from 'zod'

export const inviteSchema = z.object({
  email: z.string().email({ message: 'Invalid e-mail address.' }),
  role: roleSchema,
})
