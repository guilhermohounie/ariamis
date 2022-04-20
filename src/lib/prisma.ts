import { PrismaClient } from "@prisma/client";

// prisma library
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export { prisma };
