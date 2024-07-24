import { z } from 'zod'

import { roleSchema } from '../role'

export const userSchema = z.object({
  role: roleSchema,
})

export type User = z.infer<typeof userSchema>
