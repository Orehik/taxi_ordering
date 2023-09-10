import React from "react"
import { ITaxiItem } from "../../types/type"
import CarIcon from "../CarIcon";

interface IProps extends ITaxiItem {
  hex_color: string,
  is_suitable_crew?: boolean,
}

const TaxiItem = ({car_mark, car_model, car_color, distance, hex_color, car_number, is_suitable_crew}: IProps) => {
  return (
    <div>
      <CarIcon />
      <p>{car_mark + ' ' + car_model}</p>
      <p>{car_color}</p>
      { is_suitable_crew ? <p>{car_number}</p> : <p>{distance + ' м' + '>'}</p>}
    </div>
  );
};

export default TaxiItem;
