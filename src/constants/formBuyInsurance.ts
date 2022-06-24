import { FormBuyInsuranceType } from "src/types/formBuyInsurance";

export const formBuyInsurance: Array<FormBuyInsuranceType> = [
  {
    id: 1,
    label: "Insurance value: ",
    placeHolder: "Input value insurance",
    name: "value",
    type: "number",
  },
  {
    id: 2,
    label: "Coin/token: ",
    placeHolder: "Choose token",
    name: "token",
    type: "number",
    options: [
      {
        label: "ETH",
        value: "eth",
      },
    ],
  },
  {
    id: 3,
    label: "P-claim ",
    placeHolder: "Input p-claim",
    name: "p_claim",
    type: "number",
  },
  {
    id: 4,
    label: "Expired: ",
    placeHolder: "Input expired",
    name: "expired",
    type: "date",
  },
];
