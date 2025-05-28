import { PrismaClient } from '@/generated/prisma'

const prisma: PrismaClient = new PrismaClient()

const globalForPrisma = global as unknown as { prisma: typeof prisma }

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma