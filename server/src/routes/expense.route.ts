import { Router } from "express";
import { getExpenseByCategory } from "../controllers/expense.controller";

const router = Router();

router.get("/", getExpenseByCategory);

export default router;
