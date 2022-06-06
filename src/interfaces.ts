export interface ICity {
  id: number;
  name: string;
}

export interface IItemProps {
  name: string;
  lat: string;
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
