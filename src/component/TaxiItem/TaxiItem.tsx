import React from "react"
import { ITaxiItem } from "../../types/type"
import CarIcon from "../CarIcon";

interface IProps extends ITaxiItem {
  hex_color: string
}

const TaxiItem = ({car_mark, car_model, car_color, distance, hex_color}: IProps) => {
  return (
    <CarIcon />
  );
};

export default TaxiItem;
