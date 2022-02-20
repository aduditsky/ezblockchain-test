interface ILinks {
  firstCol: string[];
  secondCol: string[];
}

interface Idata {
  title: string;
  allLinks: ILinks;
}

export interface ILinksGrid {
  data: Idata;
}
