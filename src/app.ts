import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

void prisma.user.create({
  data: {
    name: 'Roger Oliveira',
    email: 'rogerpolvr@gmail.com'
  }
})
