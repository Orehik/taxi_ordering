import Autocomplete from "./component/Form/Autocomplete";
import YandexMap from "./component/Map/YandexMap"
import TaxiList from "./component/TaxiList/TaxiList";
import divStyle from "./App.module.scss"
import OrderButton from "./component/Button/OrderButton";
import TaxiItem from "./component/TaxiItem/TaxiItem";
import { useSelector } from "react-redux";
import {getSelectedTaxi, selectTaxiList} from "./redux/selectors/taxi";
import { selectPosition } from "./redux/selectors/mapState";
import { COLOR_NAME } from "./contants";

function App() {
  const taxiList = useSelector(selectTaxiList);
  const position = useSelector(selectPosition);
  const selectedTaxi = useSelector(getSelectedTaxi);
  const taxiInfo = taxiList?.find((item) => item.crew_id === selectedTaxi);

  return (
    <div className={divStyle.parent}>
      <div className={divStyle.orderBlock}>
        <h1>Детали заказа</h1>
        <div>Откуда
        </div>
          <Autocomplete />
        {selectedTaxi && position &&
          <>
        <p>Выбранный экипаж</p>
        <div className={divStyle.item}>
          <TaxiItem {...taxiInfo} hex_color={COLOR_NAME[taxiInfo?.car_color] ?? COLOR_NAME["белый"]}/>
        </div>
          </>
        }
      </div>
      <div className={divStyle.cardBlock}>
        <YandexMap />
        {position && <TaxiList />}
      </div>
      <OrderButton />
    </div>
)
}

export default App;
