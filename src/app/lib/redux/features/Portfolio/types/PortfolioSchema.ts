export interface Portfolio {
  id: string;
  account_id: string;
  name: string;
  holdings: number;
  change_24h: number;
  profit_loss: number;
}

export interface PortfoliosApiResponse {
  portfolios: Portfolio[];
}

export interface PortfolioSchema {
  data: Portfolio[];
  isLoading: boolean;
  error: string | null;
  lastFetched: number | null;
}
