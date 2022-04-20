import type { PrismaClient } from "@prisma/client";

// Prisma global definition
declare global {
  var prisma: PrismaClient;
}
