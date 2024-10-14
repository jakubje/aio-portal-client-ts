export interface Transaction {
  id: string;
  portfolio_id: string;
  symbol: string;
  type: number;
  amount: number;
  price_per_coin: number;
  quantity: number;
}

export interface TransactionsApiResponse {
  total: string;
  transactions: Transaction[];
}

export interface TransactionsSchema {
  data: Transaction[];
  total: number;
  isLoading: boolean;
  error: string | null;
  lastFetched: number | null;
}
