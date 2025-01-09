export interface ExpenseData {
  id: string;
  category: string;
  amount: number;
  date: string;
  paymentMethod: string;
  description: string;
}

export interface ExpenseCategory {
  name: string;
  percentage: number;
  amount: number;
  color: string;
}
