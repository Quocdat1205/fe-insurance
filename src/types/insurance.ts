export type LogIntype = {
  walletAddress: string;
  signature: string | undefined;
};

export type BuyInsuranceType = {
  owner: string;
  current_price: number;
  p_claim: bigint;
  value: number | bigint;
  expired: number;
};

export type InsuranceType = {
  _id: string;
  owner: string;
  current_price: number;
  liquidation_price: number;
  deposit: number;
  expired: number;
  state: string;
  createdAt: string;
  updatedAt: string;
};

export type InsuranceProvider = {
  insurance: Array<InsuranceType> | undefined;
};
