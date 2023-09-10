import React, {useEffect} from "react";
import { TAXI_LIST, COLOR_NAME } from "../../contants";
import { useDispatch, useSelector } from "react-redux";
import { setTaxiAC } from "../../redux/actions/reducerAC";
import TaxiItem from "../TaxiItem/TaxiItem"
import { selectTaxiList } from "../../redux/selectors/taxi";
import listStyle from "./TaxiList.module.scss"
import { ITaxiItem } from "../../types/type";

const TaxiList = () => {
  const dispatch = useDispatch();
  const taxiList = useSelector(selectTaxiList)

  useEffect(() => {
    dispatch(setTaxiAC([...TAXI_LIST].sort((a: ITaxiItem, b: ITaxiItem) => a.distance - b.distance)))
  }, [dispatch])

  return (
    <div className={listStyle.list}>
      {taxiList.map((item) => <TaxiItem key={item.crew_id} {...item} hex_color={COLOR_NAME[item.car_color] ?? COLOR_NAME["белый"]}/>)}
    </div>
  );
};

export default TaxiList;
