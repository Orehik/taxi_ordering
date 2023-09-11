import { ITaxiItem } from "./types/type";

export const COLOR_NAME = {
  "синий": "#071ff7",
  "белый": "#ffffff",
  "песок": "#A09873",
  "василек": "#6D81B3",
}

export const TAXI_LIST: ITaxiItem[] = [
  {
    crew_id: 1,
    car_mark: "Chevrolet",
    car_model: "Lacetti",
    car_color: "синий",
    car_number: "Е234КУ",
    driver_name: "Деточкин",
    driver_phone: "7788",
    lat: 56.84343473406359,
    lon: 53.216821687866165,
    distance: 300,
  }, {
    crew_id: 2,
    car_mark: "Hyundai",
    car_model: "Solaris",
    car_color: "белый",
    car_number: "Ф567АС",
    driver_name: "Петров",
    driver_phone: "8899",
    lat: 56.84804416396406,
    lon: 53.20390416925046,
    distance: 600,
  }, {
    crew_id: 3,
    car_mark: "Daewoo",
    car_model: "Nexia",
    car_color: "песок",
    car_number: "О134ДУ",
    driver_name: "Пупкин",
    driver_phone: "3589",
    lat: 56.84223524814054,
    lon: 53.21484758203123,
    distance: 400,
  }, {
    crew_id: 4,
    car_mark: "Daewoo",
    car_model: "Nexia",
    car_color: "василек",
    car_number: "Д228ОТ",
    driver_name: "Пашечкин",
    driver_phone: "3365",
    lat: 56.84381103542013,
    lon: 53.210727708984365,
    distance: 500,
  },
];
