export type BorderWithFlag = {
  name: string;
  flag: string;
  code: string;
  population: number;
};

export type Country = {
  name: {
    common: string;
    official: string;
  };
  bordersWithFlag: BorderWithFlag[];
  population: number;
  cca3: string;
  region: string;
  subregion: string;
  capital: string[];
  borders: string[];
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [code: string]: string;
  };
  flag: string;
  area: number;
};
