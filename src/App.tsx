import Autocomplete from "./component/Form/Autocomplete";
import YandexMap from "./component/Map/YandexMap"
import TaxiList from "./component/TaxiList/TaxiList";
import divStyle from "./App.module.scss"
import OrderButton from "./component/Button/OrderButton";
import TaxiItem from "./component/TaxiItem/TaxiItem";
import { useSelector } from "react-redux";
import { selectTaxiList } from "./redux/selectors/taxi";
import { selectPosition } from "./redux/selectors/mapState";

function App() {
    const taxiList = useSelector(selectTaxiList);
    const position = useSelector(selectPosition);

  return (
    <div className={divStyle.parent}>
      <div className={divStyle.orderBlock}>
      <h1>Детали заказа</h1>
      <div>Откуда <Autocomplete /></div>
      {position && <TaxiItem {...taxiList[0]} is_suitable_crew={true}/>}
      </div>
      <div className={divStyle.cardBlock}>
      <YandexMap />
      <TaxiList/>
      </div>
      <OrderButton/>
    </div>
)
}

export default App;
