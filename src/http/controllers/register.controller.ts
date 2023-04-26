import { type FastifyRequest, type FastifyReply } from 'fastify'
import { z } from 'zod'
import { registerUseCase } from '@/use-cases/register'

export async function register (
  request: FastifyRequest, reply: FastifyReply): Promise<void> {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    await registerUseCase({
      name, email, password
    })
  } catch (err) {
    return await reply.status(409).send({
      message: err
    })
  }

  return await reply.status(201).send()
}
