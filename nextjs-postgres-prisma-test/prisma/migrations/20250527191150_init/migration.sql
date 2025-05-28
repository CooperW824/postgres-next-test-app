-- CreateTable
CREATE TABLE "TodoItem" (
    "id" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 5,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TodoItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TodoItem_id_key" ON "TodoItem"("id");
