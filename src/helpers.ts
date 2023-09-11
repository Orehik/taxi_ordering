import { TCoords } from "./types/type";

export function calculateDistance(coord1: TCoords, coord2: TCoords): number {
  // Радиус Земли (приблизительно в километрах)
  const earthRadius = 6371.0;

  // Переводим градусы в радианы
  const lat1 = toRadians(coord1[0]);
  const lon1 = toRadians(coord1[1]);
  const lat2 = toRadians(coord2[0]);
  const lon2 = toRadians(coord2[1]);

  // Разница в долготе и широте
  const dlon = lon2 - lon1;
  const dlat = lat2 - lat1;

  // Вычисляем расстояние с использованием формулы гаверсинуса
  const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c; // возвращает расстояние в км
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

