export interface INews {
  feature: string;
  subfeature: Array<Sub>;
  main: string;
}
export interface Sub {
  title: string;
  date: string;
  category: string;
  details: string;
  status: string;
  url: string;
}