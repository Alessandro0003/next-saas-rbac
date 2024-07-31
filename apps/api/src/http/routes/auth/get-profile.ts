import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

export async function getProfile(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/profile',
    {
      schema: {
        tags: ['profile'],
        summary: 'Get authenticated user profile',
        response: {
          200: z.object({
            user: z.object({
              id: z.string().uuid(),
              name: z.string().nullable(),
              email: z.string().email(),
              avatarUtl: z.string().url().nullable(),
            }),
          }),
        },
      },
    },
    async (request, reply) => {
      const { sub } = await request.jwtVerify<{ sub: string }>()

      const user = await prisma.user.findFirst({
        select: {
          id: true,
          name: true,
          email: true,
          avatarUtl: true,
        },
        where: {
          id: sub,
        },
      })

      if (!user) {
        throw new Error('User not found!')
      }

      return reply.status(200).send({ user })
    },
  )
}
