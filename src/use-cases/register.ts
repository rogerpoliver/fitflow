import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { PrismaUsersRepository } from '@/repositories/prisma-user-repository'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export async function registerUseCase (
  { name, email, password }: RegisterUseCaseRequest): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const password_hash = await hash(password, 6)

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (userWithSameEmail) {
    throw new Error('Email already exist')
  }

  const prismaUsersRepository = new PrismaUsersRepository()
  void prismaUsersRepository.create({
    name,
    email,
    password_hash
  })
}
