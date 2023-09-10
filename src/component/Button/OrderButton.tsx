import React from "react";
import { Button, Space } from "antd";
import buttonStyle from "./OrderButton.module.scss"
import { useSelector } from "react-redux";
import {selectPosition} from "../../redux/selectors/mapState";

interface IProps {
  setErrorOrder: (state: boolean) => void,
}

const OrderButton = ({setErrorOrder}: IProps) => {
  const position = useSelector(selectPosition)

  return (
    <Space wrap>
      <Button onClick={() => {
        setErrorOrder(!position)
      }} className={buttonStyle.button}>Заказать</Button>
    </Space>
)}

export default OrderButton;
