import React, { useEffect } from "react";
import { TAXI_LIST, COLOR_NAME } from "../../contants";
import { useDispatch, useSelector } from "react-redux";
import { setTaxiAC } from "../../redux/actions/reducerAC";
import TaxiItem from "../TaxiItem/TaxiItem"
import { selectTaxiList } from "../../redux/selectors/taxi";
import listStyle from "./TaxiList.module.scss"
import { ITaxiItem } from "../../types/type";
import formStyle from "../Form/Autocomplete.module.scss";
import { selectTaxiError } from "../../redux/selectors/errors";

const TaxiList = () => {
  const dispatch = useDispatch();
  const taxiList = useSelector(selectTaxiList);
  const taxiError = useSelector(selectTaxiError);

  useEffect(() => {
    dispatch(setTaxiAC([...TAXI_LIST].sort((a: ITaxiItem, b: ITaxiItem) => a.distance - b.distance)))
  }, [dispatch])

  return (
    <div className={listStyle.parent}>
      <div className={listStyle.list}>
        {taxiList.map((item, index) => <TaxiItem
          key={item.crew_id} {...item}
          is_suitable_crew={!index}
          is_side_menu={true}
          hex_color={COLOR_NAME[item.car_color] ?? COLOR_NAME["белый"]}/>
        )}
      </div>
      {taxiError && <span className={formStyle.error}>Не выбран экипаж</span>}
    </div>
  );
};

export default TaxiList;
