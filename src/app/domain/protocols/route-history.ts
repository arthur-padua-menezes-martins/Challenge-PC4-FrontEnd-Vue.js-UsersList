export interface RouteHistory {
  travels: Array<{ location: string, to:string, timestamps: number }>
  location: string
  push(to: string, data?: any): void;
  replace(to: string, data?: any): void;
  go(travel: number): void;
}
