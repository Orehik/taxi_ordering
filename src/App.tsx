import Autocomplete from "./component/Form/Autocomplete";
import YandexMap from "./component/Map/YandexMap"
import TaxiList from "./component/TaxiList/TaxiList";
import divStyle from "./App.module.scss"

function App() {

  return (
    <div className={divStyle.parent}>
      <div className={divStyle.orderBlock}>
      <h1>Детали заказа</h1>
      <div>Откуда <Autocomplete /></div>
      </div>
      <div className={divStyle.cardBlock}>
      <YandexMap />
      <TaxiList/>
      </div>
    </div>
)
}

export default App;
