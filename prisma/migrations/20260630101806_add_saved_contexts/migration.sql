-- CreateTable
CREATE TABLE "SavedContext" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "website" TEXT,
    "industry" TEXT,
    "analysis" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedContext_pkey" PRIMARY KEY ("id")
);
