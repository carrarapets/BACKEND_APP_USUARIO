-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "peso" DOUBLE PRECISION NOT NULL,
    "comportamento" TEXT,
    "foto" TEXT,
    "sexo" TEXT,
    "raca" TEXT,
    "especia" TEXT,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Viagem" (
    "id" SERIAL NOT NULL,
    "chat" TEXT,
    "update_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pontuacao" TEXT,

    CONSTRAINT "Viagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "preco" DOUBLE PRECISION NOT NULL,
    "final" TIMESTAMP(3) NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "cancelpass" BOOLEAN NOT NULL,
    "cancelmoto" BOOLEAN NOT NULL,
    "destino" DOUBLE PRECISION NOT NULL,
    "localizacao_atual" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motorista" (
    "id" SERIAL NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CNH" TEXT,
    "ant_criminal" TEXT,
    "avaliacao" TEXT,
    "validade_cnh" TIMESTAMP(3) NOT NULL,
    "detalhes_corridas" TEXT,

    CONSTRAINT "Motorista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Convite" (
    "id" SERIAL NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "Convite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carro" (
    "id" SERIAL NOT NULL,
    "placa" TEXT,
    "modelo" TEXT,
    "marca" TEXT,
    "renavam" TEXT,
    "cor" TEXT,

    CONSTRAINT "Carro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Motorista_CNH_key" ON "Motorista"("CNH");

-- CreateIndex
CREATE UNIQUE INDEX "Motorista_validade_cnh_key" ON "Motorista"("validade_cnh");

-- CreateIndex
CREATE UNIQUE INDEX "Carro_placa_key" ON "Carro"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Carro_marca_key" ON "Carro"("marca");

-- CreateIndex
CREATE UNIQUE INDEX "Carro_renavam_key" ON "Carro"("renavam");
