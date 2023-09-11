import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AutoComplete } from "antd";
import debounce from "lodash/debounce";
import axios from "axios";
import {
  setInputValueAC,
  setCenterAC,
  setPositionAC,
  setTaxiAC,
  selectTaxiAC,
  setAddressErrorAC, setTaxiErrorAC
} from "../../redux/actions/reducerAC";
import formStyle from "./Autocomplete.module.scss"
import { selectInputValue } from "../../redux/selectors/mapState";
import { TCoords } from "../../types/type";
import { selectAddressError } from "../../redux/selectors/errors";

interface IOption {
  value: string,
  coords: TCoords
  key: number,
}

const Autocomplete = () => {
  const [options, setOptions] = useState<IOption[]>([]);
  const dispatch = useDispatch();
  const inputValue = useSelector(selectInputValue);
  const addressError = useSelector(selectAddressError);

  const handleSearch = (value) => {
    if (!value) return
    debouncedSearch(value);
  };

  const search = async (value) => {
    try {
      const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${import.meta.env.VITE_YA_MAPS_API_KEY}&geocode=${value}&format=json`)
      const data = response?.data?.response?.GeoObjectCollection?.featureMember
      const transformedOptions: IOption[] = data.map((item, index) => ({
        value: item.GeoObject.name,
        coords: item.GeoObject.Point.pos.split(' ').reverse().map((item) => parseFloat(item)),
        key: index,
      }));

      setOptions(transformedOptions);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };
  const debouncedSearch = debounce(search, 300);
  return (
    <div className={formStyle.parent}>
      <AutoComplete
        allowClear={true}
        onClear={() => {
          dispatch(setAddressErrorAC(false))
          dispatch(setTaxiErrorAC(false))
          dispatch(setPositionAC(null))
          dispatch(setInputValueAC(''))
          dispatch(setTaxiAC([]))
          dispatch(selectTaxiAC(null))
        }}
        value={inputValue}
        status={addressError ? 'error' : undefined}
        className={formStyle.input}
        options={options}
        onSearch={handleSearch}
        placeholder='Введите адрес'
        onSelect={(value, { coords }: IOption) => {
          dispatch(setAddressErrorAC(false))
          dispatch(setCenterAC(coords))
          dispatch(setPositionAC(coords))
          dispatch(setInputValueAC(value))
        }}
        onChange={(event) => {
          dispatch(setInputValueAC(event))
        }}
      />
      {addressError && <span className={formStyle.error}>Некорректный адрес</span>}
    </div>
  );
}

export default Autocomplete;
