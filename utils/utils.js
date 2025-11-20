import { PrismaClient } from "@prisma/client";

const isProduction = process.env.NODE_ENV === "production";

const dataBaseUrl = isProduction
  ? process.env.DATABASE_PRODUCTION
  : process.env.DATABASE_URL;

if (!dataBaseUrl) {
  throw new Error(
    "❌ Database URL tidak ditemukan! Pastikan .env berisi POSTGRES_PRISMA_URL dan POSTGRES_URL_NON_POOLING"
  );
}

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: { db: dataBaseUrl },
    log : isProduction ? ["error"] : ["info", "query", "warn"]
  });
};

if (!globalThis.prismaGlobal) {
  globalThis.prismaGlobal = prismaClientSingleton();
}

export const prisma = globalThis.prismaGlobal()

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

export default prisma;