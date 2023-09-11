import { useDispatch, useSelector } from "react-redux";
import { Button, Space } from "antd";

import { selectInputValue, selectPosition } from "../../redux/selectors/mapState";
import { setAddressErrorAC, setTaxiErrorAC } from "../../redux/actions/reducerAC";
import { getSelectedTaxi } from "../../redux/selectors/taxi";
import { TCoords } from "../../types/type";
import buttonStyle from "./OrderButton.module.scss"

interface IAddress {
  address: string,
  lat: number,
  lon: number,
}

type TAnswers = {
  source_time: Date,
  addresses: IAddress[],
  crew_id: number | null,
}

const OrderButton = () => {
  const dispatch = useDispatch();
  const position = useSelector(selectPosition);
  const inputValue = useSelector(selectInputValue);
  const selectedTaxi = useSelector(getSelectedTaxi);

  const answer = (coords: TCoords): TAnswers  => {
    return {
      "source_time": new Date(),
      "addresses": [{
        "address": inputValue,
        "lat": coords[0],
        "lon": coords[1],
      }],
      "crew_id": selectedTaxi,
    }
  };

  return (
    <Space wrap>
      <Button onClick={() => {
        dispatch(setTaxiErrorAC(!selectedTaxi))
        dispatch(setAddressErrorAC(!position))
        if (position && selectedTaxi) {
          console.log(answer(position))
        }
      }} className={buttonStyle.button}>Заказать</Button>
    </Space>
)}

export default OrderButton;
