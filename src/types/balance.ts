export type MonthlyBalance = {
  id: number;
  userId: number;
  accrualMonth: string;
  amount: number;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};
