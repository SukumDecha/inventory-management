import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const [
      popularProducts,
      saleSummary,
      purchaseSummary,
      expenseSummary,
      expenseByCategorySummaryRaw,
    ] = await Promise.all([
      prisma.products.findMany({
        take: 15,
        orderBy: {
          stockQuantity: "desc",
        },
      }),
      prisma.salesSummary.findMany({
        take: 5,
        orderBy: {
          date: "desc",
        },
      }),
      prisma.purchaseSummary.findMany({
        take: 5,
        orderBy: {
          date: "desc",
        },
      }),
      prisma.expenseSummary.findMany({
        take: 5,
        orderBy: {
          date: "desc",
        },
      }),
      prisma.expenseByCategory.findMany({
        take: 5,
        orderBy: {
          date: "desc",
        },
      }),
    ]);

    const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
      (item) => ({
        ...item,
        amount: item.amount.toString(),
      })
    );

    res
      .json({
        popularProducts,
        saleSummary,
        purchaseSummary,
        expenseSummary,
        expenseByCategorySummary,
      })
      .status(200);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving dashboard metrics", error });
  }
};
