import Autocomplete from "./component/Form/Autocomplete";
import YandexMap from "./component/Map/YandexMap"
import TaxiList from "./component/TaxiList/TaxiList";
import divStyle from "./App.module.scss"
import OrderButton from "./component/Button/OrderButton";
import TaxiItem from "./component/TaxiItem/TaxiItem";
import { useSelector } from "react-redux";
import { selectTaxiList } from "./redux/selectors/taxi";
import { selectPosition } from "./redux/selectors/mapState";
import { useState } from "react";
import {ITaxiItem} from "./types/type";

function App() {
    const [errorOrder, setErrorOrder] = useState<boolean>(false)
    const taxiList = useSelector(selectTaxiList);
    const position = useSelector(selectPosition);

  return (
    <div className={divStyle.parent}>
      <div className={divStyle.orderBlock}>
        <h1>Детали заказа</h1>
        <div>Откуда
        </div>
          <Autocomplete errorOrder={errorOrder} setErrorOrder={setErrorOrder}/>
        {position &&
          <>
        <p>Выбранный экипаж</p>
        <div className={divStyle.item}>
          <TaxiItem {...taxiList[0]} is_suitable_crew={true}/>
        </div>
          </>
        }
      </div>
      <div className={divStyle.cardBlock}>
        <YandexMap setErrorOrder={setErrorOrder} />
        <TaxiList/>
      </div>
      <OrderButton setErrorOrder={setErrorOrder}/>
    </div>
)
}

export default App;
