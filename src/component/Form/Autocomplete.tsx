import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AutoComplete } from "antd";
import debounce from "lodash/debounce";
import axios from "axios";
import {setInputValueAC, setCenterAC, setPositionAC} from "../../redux/actions/reducerAC";
import formStyle from "./Autocomplete.module.scss"
import { selectInputValue } from "../../redux/selectors/mapState";
import { TCoords } from "../../types/type";

interface IOption {
  value: string,
  coords: TCoords
  key: number,
}

const Autocomplete = () => {
  const [options, setOptions] = useState<IOption[]>([]);
  const dispatch = useDispatch();
  const inputValue = useSelector(selectInputValue);

  const handleSearch = (value) => {
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
    <AutoComplete
      value={inputValue}
      className={formStyle.input}
      options={options}
      onSearch={handleSearch}
      placeholder='Введите адрес'
      onSelect={(value, { coords }: IOption) => {
        dispatch(setCenterAC(coords))
        dispatch(setPositionAC(coords))
        dispatch(setInputValueAC(value))
      }}
      onChange={(event) => {
        dispatch(setInputValueAC(event))
      }}
    />
  );
}

export default Autocomplete;
