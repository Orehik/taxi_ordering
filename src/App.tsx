import { YMaps, Map } from "react-yandex-maps";

function App() {

  return (
    <YMaps query={{ apikey: import.meta.env.VITE_YA_MAPS_API_KEY }}>
      <div>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </div>
    </YMaps>
  )
}

export default App
