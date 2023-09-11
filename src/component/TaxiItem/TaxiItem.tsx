import React from "react"
import { ITaxiItem } from "../../types/type"
import CarIcon from "../CarIcon";
import itemStyle from "./TaxiItem.module.scss"
import cn from "classnames"
import { COLOR_NAME } from "../../contants";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedTaxi } from "../../redux/selectors/taxi";
import { selectTaxiAC } from "../../redux/actions/reducerAC";
import { selectPosition } from "../../redux/selectors/mapState";

interface IProps extends ITaxiItem {
  hex_color: string,
  is_suitable_crew?: boolean,
}

const TaxiItem = ({car_mark, car_model, car_color, distance, car_number, hex_color, is_suitable_crew, crew_id}: IProps) => {
  const selectedTaxi = useSelector(getSelectedTaxi);
  const position = useSelector(selectPosition);
  const dispatch = useDispatch();

  const receivingTheCrew = () => {
    dispatch(selectTaxiAC(crew_id))
  }

  return (
    <div className={cn(itemStyle.parent)} onClick={() => receivingTheCrew()}>
      <span className={cn(itemStyle.button_line, itemStyle.button_line_top)}/>
      <span className={cn(itemStyle.button_line, itemStyle.button_line_right)}/>
      <span className={cn(itemStyle.button_line, itemStyle.button_line_bottom)}/>
      <span className={cn(itemStyle.button_line, itemStyle.button_line_left)}/>
      <div className={itemStyle.brand}>
        <CarIcon className={cn({[itemStyle.iconShadow]: hex_color === COLOR_NAME["белый"]})} fill={hex_color} />
        <p>{car_mark + ' ' + car_model}</p>
      </div>
      <div className={itemStyle.color}>
        {is_suitable_crew && position &&
          <p>Ближайший экипаж</p>
        }
        <p>{car_color}</p>
        {is_suitable_crew ? <p>{car_number}</p> : <p>{distance + ' м'}</p>}
      </div>
    </div>
  );
};

export default TaxiItem;
