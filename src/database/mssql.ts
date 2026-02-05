import { PrismaClient as PrismaClient01 } from '../../prisma_01/generated/prisma/client'
import { PrismaClient as PrismaClient02 } from '../../prisma_02/generated/prisma/client'

const globalForPrisma01 = globalThis as unknown as { prisma: PrismaClient01 }
const globalForPrisma02 = globalThis as unknown as { prisma: PrismaClient02 }

export const prisma01 =
  globalForPrisma01.prisma || new PrismaClient01({
    log: ['info'],
  });
export const prisma02 =
  globalForPrisma02.prisma || new PrismaClient02({
    log: ['info'],
  });




if (process.env.NODE_ENV !== 'production') {
    globalForPrisma01.prisma = prisma01
    globalForPrisma02.prisma = prisma02
}