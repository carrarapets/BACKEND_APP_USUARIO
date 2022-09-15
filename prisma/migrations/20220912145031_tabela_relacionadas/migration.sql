/*
  Warnings:

  - A unique constraint covering the columns `[motoristaId]` on the table `Carro` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[motoristaId]` on the table `Convite` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[motoristaId]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Pet` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pedidoId]` on the table `Viagem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `motoristaId` to the `Carro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motoristaId` to the `Convite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motoristaId` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pedidoId` to the `Viagem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carro" ADD COLUMN     "motoristaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Convite" ADD COLUMN     "motoristaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "motoristaId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Viagem" ADD COLUMN     "pedidoId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Carro_motoristaId_key" ON "Carro"("motoristaId");

-- CreateIndex
CREATE UNIQUE INDEX "Convite_motoristaId_key" ON "Convite"("motoristaId");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_motoristaId_key" ON "Pedido"("motoristaId");

-- CreateIndex
CREATE UNIQUE INDEX "Pet_userId_key" ON "Pet"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Viagem_pedidoId_key" ON "Viagem"("pedidoId");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viagem" ADD CONSTRAINT "Viagem_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Motorista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Convite" ADD CONSTRAINT "Convite_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Motorista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carro" ADD CONSTRAINT "Carro_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Motorista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
