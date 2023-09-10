import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputValueAC, setPositionAC } from "../../redux/actions/reduserAC";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import mapStyle from "./Map.module.scss";
import { selectCenter, selectPosition } from "../../redux/selectors/mapState";

const YandexMap = () => {
  const center = useSelector(selectCenter)
  const position = useSelector(selectPosition)
  const dispatch = useDispatch();
  const mapRef = useRef<unknown>(null);

  return (
    <YMaps query={{ apikey: import.meta.env.VITE_YA_MAPS_API_KEY, load: 'package.search', lang: 'ru_RU'
    }}>
      <Map
        id="map"
        className={mapStyle.map}
        state={{ center, zoom: 15 }}
        onClick={(event) => {
          const coords = event.get('coords').map((item) => parseFloat(item))

          mapRef.current.geocode(coords).then(result => {
            const firstGeoObject = result.geoObjects.get(0);
            const newAddress = [
              firstGeoObject.getLocalities().length
                ? firstGeoObject.getLocalities()
                : firstGeoObject.getAdministrativeAreas(),
              firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
              firstGeoObject.getPremiseNumber()
            ]
              .filter(Boolean)
              .join(", ");
            dispatch(setInputValueAC(newAddress));
            dispatch(setPositionAC(coords))
          })
            .catch((error) => console.log(error))
        }}
        onLoad={(event) => {
          mapRef.current = event
        }}
      >
        { position && <Placemark geometry={position} options={{preset: 'islands#yellowDotIcon'}}/> }
      </Map>
    </YMaps>
  );
};

export default YandexMap;
