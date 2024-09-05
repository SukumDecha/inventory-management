export interface IBaseComponentProps {
  children: React.ReactNode;
  className?: string;
}

export interface IUser {
  userId: string;
  name: string;
  email: string;
}

export interface IProduct {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

export interface INewProduct {
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

export interface IProductFormData {
  productId: string;
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
}

export interface ISalesSummary {
  salesSummaryId: string;
  totalValue: number;
  changePercentage?: number;
  date: string;
}

export interface IPurchaseSummary {
  purchaseSummaryId: string;
  totalPurchased: number;
  changePercentage?: number;
  date: string;
}

export interface IExpenseSummary {
  expenseSummarId: string;
  totalExpenses: number;
  date: string;
}

export interface IExpenseByCategorySummary {
  expenseByCategorySummaryId: string;
  category: string;
  amount: string;
  date: string;
}

export interface IDashboardMetrics {
  popularProducts: IProduct[];
  saleSummary: ISalesSummary[];
  purchaseSummary: IPurchaseSummary[];
  expenseSummary: IExpenseSummary[];
  expenseByCategorySummary: IExpenseByCategorySummary[];
}
