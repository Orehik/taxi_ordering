import { YMaps, Map } from "react-yandex-maps";
import mapStile from "./App.module.scss"
import Form from './Form'

function App() {

  return (
    <YMaps query={{ apikey: import.meta.env.VITE_YA_MAPS_API_KEY }}>
        <Form />
        <Map className={mapStile.map} defaultState={{ center: [55.75, 37.57], zoom: 11 }} />
    </YMaps>

)
}

export default App
