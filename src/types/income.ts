export interface IncomeData {
  id: string;
  source: string;
  amount: number;
  date: string;
  frequency: string;
  status: 'Pending' | 'Received';
  notes: string;
}
