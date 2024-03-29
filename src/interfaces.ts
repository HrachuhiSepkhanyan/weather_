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
  onDelete(name: String): void;
}

export interface IStorage {
  name: string | null;
}
export interface ICityState {
  names: string[];
}
export interface ILocation {
  lat: number;
  lon: number;
}
export interface ICityState {
  cities: string[];
}
