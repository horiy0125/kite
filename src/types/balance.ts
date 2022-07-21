export type Receipt = {
  id: number;
  userId: number;
  accrualDate: string;
  title: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
};

export type Expense = {
  id: number;
  userId: number;
  accrualDate: string;
  title: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
};

export type MonthlyBalance = {
  id: number;
  userId: number;
  accrualMonth: string;
  amount: number;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Balance = {
  balance: number;
  changes: number;
  monthlyBalance: MonthlyBalance;
  expenses: Expense[];
  totalExpenses: number;
  receipts: Receipt[];
  totalReceipts: number;
};
