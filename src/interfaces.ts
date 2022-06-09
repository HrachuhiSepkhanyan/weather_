export interface ICity {
  name: string;
}
export interface IWeatherbyday {
  onAdd(name: string): void;
}

export interface IWeaderbydayProps {
  onAdd(name: string): void;
}
export interface CityListProps {
  cities: ICity[];
}

export interface IStorage {
  name: string | null;
}
