export type MassageListTypes= {
  id: string;
  name: string;
  time: string;
  price: string;
};

export type MassageType = {
  id: string;
  name: string;
  types: MassageListTypes;
};
