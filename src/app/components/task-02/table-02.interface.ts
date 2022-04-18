export interface Route {
  uuid?: string;
  address: string;
  mask: string;
  gateway: string;
  interface: string;
}

export enum SortingTypes {
  address = 1,
  gateway = 2,
  interface = 3
}

export interface resp {
  message: string;
  code: number,
  successful: boolean,
  payload: any
}