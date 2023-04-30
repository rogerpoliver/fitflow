import { type FastifyRequest, type FastifyReply } from 'fastify'
import { z } from 'zod'
import { RegisterUseCase } from '@/use-cases/register'
import { PrismaUsersRepository } from '@/repositories/prisma-user-repository'

export async function register(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    const registerUseCase = new RegisterUseCase(PrismaUsersRepository)
    await registerUseCase.execute({
      name,
      email,
      password,
    })
  } catch (err) {
    console.log(err)
    return await reply.status(409).send(err)
  }

  return await reply.status(201).send()
}
