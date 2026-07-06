/*
  Warnings:

  - You are about to drop the column `analysis` on the `SavedContext` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `SavedContext` table. All the data in the column will be lost.
  - You are about to drop the column `industry` on the `SavedContext` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `SavedContext` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[normalizedUrl]` on the table `Analysis` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[analysisId]` on the table `SavedContext` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `normalizedUrl` to the `Analysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `analysisId` to the `SavedContext` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analysis" ADD COLUMN     "normalizedUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SavedContext" DROP COLUMN "analysis",
DROP COLUMN "company",
DROP COLUMN "industry",
DROP COLUMN "website",
ADD COLUMN     "analysisId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Analysis_normalizedUrl_key" ON "Analysis"("normalizedUrl");

-- CreateIndex
CREATE UNIQUE INDEX "SavedContext_analysisId_key" ON "SavedContext"("analysisId");

-- AddForeignKey
ALTER TABLE "SavedContext" ADD CONSTRAINT "SavedContext_analysisId_fkey" FOREIGN KEY ("analysisId") REFERENCES "Analysis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
