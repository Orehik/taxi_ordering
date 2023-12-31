import React from "react"
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames"

import CarIcon from "../CarIcon";
import { selectTaxiAC } from "../../redux/actions/reducerAC";
import { selectPosition } from "../../redux/selectors/mapState";
import { ITaxiItem } from "../../types/type"
import { COLOR_NAME } from "../../contants";
import itemStyle from "./TaxiItem.module.scss"

interface IProps extends ITaxiItem {
  hex_color: string,
  is_suitable_crew?: boolean,
  is_side_menu?: boolean,
}

const prettifyDistance = (distance: number): string => {
  return (distance * 1000).toFixed(0)
}

const TaxiItem = ({car_mark, car_model, car_color, distance, car_number, hex_color, is_suitable_crew, crew_id, is_side_menu}: IProps) => {
  const position = useSelector(selectPosition);
  const dispatch = useDispatch();

  const receivingTheCrew = () => {
    dispatch(selectTaxiAC(crew_id));
  }

  return (
    <div className={itemStyle.parent} onClick={() => receivingTheCrew()}>
      <span className={cn(itemStyle.button_line, itemStyle.button_line_top)}/>
      <span className={cn(itemStyle.button_line, itemStyle.button_line_right)}/>
      <span className={cn(itemStyle.button_line, itemStyle.button_line_bottom)}/>
      <span className={cn(itemStyle.button_line, itemStyle.button_line_left)}/>
      <div className={itemStyle.brand}>
        <CarIcon className={cn({[itemStyle.iconShadow]: hex_color === COLOR_NAME["белый"]})} fill={hex_color} />
        <p>{car_mark + ' ' + car_model}</p>
      </div>
      <div className={itemStyle.color}>
        {is_suitable_crew && position && <p>Ближайший экипаж</p>}
        <p>{car_color}</p>
        {is_side_menu && distance ? <p>{prettifyDistance(distance) + ' м'}</p> : <p>{car_number}</p>}
      </div>
    </div>
  );
};

export default TaxiItem;
