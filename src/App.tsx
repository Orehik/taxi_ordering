import Autocomplete from "./component/Form/Autocomplete";
import YandexMap from "./component/Map/YandexMap"
import TaxiList from "./component/TaxiList/TaxiList";

function App() {

  return (
    <>
    <h1>Детали заказа</h1>
      <div>Откуда <Autocomplete /></div>
      <YandexMap />
      <TaxiList/>
    </>
)
}

export default App;
