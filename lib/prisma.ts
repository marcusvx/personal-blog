// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = (() => {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient();
  }

  return global.prisma || (global.prisma = new PrismaClient());
})();

export default prisma;
