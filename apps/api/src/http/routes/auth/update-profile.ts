import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

export async function updateProfile(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().put(
    '/users/:userId/details',
    {
      schema: {
        tags: ['auth'],
        summary: 'Update a profile',
        params: z.object({
          userId: z.string(),
        }),
        body: z.object({
          name: z.string().optional(),
          email: z.string().email(),
        }),
        response: {
          204: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body
      const { userId } = request.params

      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          name,
          email,
        },
      })

      return reply.status(204).send()
    },
  )
}
