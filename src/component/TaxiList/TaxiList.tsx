import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TaxiItem from "../TaxiItem/TaxiItem"
import formStyle from "../Form/Autocomplete.module.scss";
import { setTaxiAC } from "../../redux/actions/reducerAC";
import { selectTaxiList } from "../../redux/selectors/taxi";
import { selectTaxiError } from "../../redux/selectors/errors";
import { ITaxiItem } from "../../types/type";
import { TAXI_LIST, COLOR_NAME } from "../../contants";
import listStyle from "./TaxiList.module.scss"

const TaxiList = () => {
  const dispatch = useDispatch();
  const taxiList = useSelector(selectTaxiList);
  const taxiError = useSelector(selectTaxiError);

  useEffect(() => {
    dispatch(setTaxiAC([...TAXI_LIST].sort((a: ITaxiItem, b: ITaxiItem) => a.distance - b.distance)));
  }, [dispatch]);

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
