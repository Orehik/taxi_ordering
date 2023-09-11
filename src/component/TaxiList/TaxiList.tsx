import React, { useEffect } from "react";
import { TAXI_LIST, COLOR_NAME } from "../../contants";
import { useDispatch, useSelector } from "react-redux";
import { setTaxiAC } from "../../redux/actions/reducerAC";
import TaxiItem from "../TaxiItem/TaxiItem"
import { selectTaxiList } from "../../redux/selectors/taxi";
import listStyle from "./TaxiList.module.scss"
import { ITaxiItem } from "../../types/type";

const TaxiList = () => {
  const dispatch = useDispatch();
  const taxiList = useSelector(selectTaxiList);

//   interface Coordinate {
//     latitude: number;
//     longitude: number;
//   }
//
//   function calculateDistance(coord1: Coordinate, coord2: Coordinate): number {
//     // Радиус Земли (приблизительно в километрах)
//     const earthRadius = 6371.0;
//
//     // Переводим градусы в радианы
//     const lat1 = toRadians(coord1.latitude);
//     const lon1 = toRadians(coord1.longitude);
//     const lat2 = toRadians(coord2.latitude);
//     const lon2 = toRadians(coord2.longitude);
//
//     // Разница в долготе и широте
//     const dlon = lon2 - lon1;
//     const dlat = lat2 - lat1;
//
//     // Вычисляем расстояние с использованием формулы гаверсинуса
//     const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = earthRadius * c;
//
//     return distance;
//   }
//
//   function toRadians(degrees: number): number {
//     return degrees * (Math.PI / 180);
//   }
//
//   function sortCoordinatesByDistance(existingCoords: Coordinate[], newCoords: Coordinate): Coordinate[] {
//     // Вычисляем расстояние между новыми координатами и каждой из существующих координат
//     const distances = existingCoords.map(coord => ({ coord, distance: calculateDistance(newCoords, coord) }));
//
//     // Сортируем координаты по расстоянию
//     distances.sort((a, b) => a.distance - b.distance);
//
//     // Возвращаем отсортированный массив координат
//     return distances.map(item => item.coord);
//   }
//
// // Пример использования
//   const existingCoordinates: Coordinate[] = [
//     { latitude: 40.7128, longitude: -74.0060 },
//     { latitude: 34.0522, longitude: -118.2437 },
//     { latitude: 51.5074, longitude: -0.1278 },
//   ];
//   const newCoordinates: Coordinate = { latitude: 37.7749, longitude: -122.4194 };
//
//   const sortedCoords = sortCoordinatesByDistance(existingCoordinates, newCoordinates);
//   console.log(sortedCoords);

  useEffect(() => {
    dispatch(setTaxiAC([...TAXI_LIST].sort((a: ITaxiItem, b: ITaxiItem) => a.distance - b.distance)))
  }, [dispatch])

  return (
    <div className={listStyle.list}>
      {taxiList.map((item, index) => <TaxiItem
        key={item.crew_id} {...item}
        is_suitable_crew={!index}
        hex_color={COLOR_NAME[item.car_color] ?? COLOR_NAME["белый"]}/>
      )}
    </div>
  );
};

export default TaxiList;
