import React from "react"
import { ITaxiItem } from "../../types/type"
import CarIcon from "../CarIcon";
import itemStyle from "./TaxiItem.module.scss"
import cl from "classnames"
import {COLOR_NAME} from "../../contants";

interface IProps extends ITaxiItem {
  hex_color: string,
  is_suitable_crew?: boolean,
}

const TaxiItem = ({car_mark, car_model, car_color, distance, hex_color, car_number, is_suitable_crew}: IProps) => {
  return (
    <div className={itemStyle.parent}>
      <div className={itemStyle.brand}>
        <CarIcon className={cl({
          [itemStyle.iconShadow]: hex_color === COLOR_NAME["белый"]
        })} fill={hex_color} />
        <p>{car_mark + ' ' + car_model}</p>
      </div>
      <div className={itemStyle.color}>
        <p>{car_color}</p>
        {is_suitable_crew ? <p>{car_number}</p> : <p>{distance + ' м'}</p>}
      </div>
    </div>
  );
};

export default TaxiItem;
