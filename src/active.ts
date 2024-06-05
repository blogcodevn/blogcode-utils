export enum Active {
  YES = "Y",
  NO = "N",
}

export const isActive = (state: string) => state?.toUpperCase() === Active.YES;
