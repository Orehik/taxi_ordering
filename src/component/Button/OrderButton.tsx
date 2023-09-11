import { Button, Space } from "antd";
import buttonStyle from "./OrderButton.module.scss"
import { useSelector } from "react-redux";
import { selectInputValue, selectPosition } from "../../redux/selectors/mapState";
import { TCoords } from "../../types/type";
import { getSelectedTaxi } from "../../redux/selectors/taxi";

interface IProps {
  setErrorOrder: (state: boolean) => void,
}

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

const OrderButton = ({setErrorOrder}: IProps) => {
  const position = useSelector(selectPosition);
  const inputValue = useSelector(selectInputValue);
  const selectedTaxi = useSelector(getSelectedTaxi)

  const answer = (coords: TCoords): TAnswers  => {
    return {
      "source_time": new Date(),
      "addresses": [{
        "address": inputValue,
        "lat": coords[0],
        "lon": coords[1]
      }],
      "crew_id": selectedTaxi,
    }
  };

  return (
    <Space wrap>
      <Button onClick={() => {
        setErrorOrder(!position)
        if (position) {
          console.log(answer(position))
        }
      }} className={buttonStyle.button}>Заказать</Button>
    </Space>
)}

export default OrderButton;
