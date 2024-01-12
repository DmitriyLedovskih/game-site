export type NavigationItemType = {
  id: number;
  title: string;
  icon: any;
  href: string;
  counter?: number;
};

export type NavigationType = {
  list: NavigationItemType[];
};
