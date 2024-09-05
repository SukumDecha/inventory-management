import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getExpenseByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expenseByCategoryRaw = await prisma.expenseByCategory.findMany({
      orderBy: {
        date: "desc",
      },
    });

    const expenseByCategorySummary = expenseByCategoryRaw.map((item) => ({
      ...item,
      amount: item.amount.toString(),
    }));

    res.json(expenseByCategorySummary);
  } catch (error) {
    console.error("Failed to fetch expenses by category", error);
    res.status(500).json({ error: "Error retrieving expenses by category" });
  }
};
