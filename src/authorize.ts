export enum AuthorizeType {
  BEARER = 'bearer',
  BASIC = 'basic',
}

export const isBearer = (type: string) => type?.toLowerCase() === AuthorizeType.BEARER;
export const isBasic = (type: string) => type?.toLowerCase() === AuthorizeType.BASIC;
