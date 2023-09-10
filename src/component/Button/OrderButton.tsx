import React from "react";
import { Button, Space } from "antd";
import buttonStyle from "./OrderButton.module.scss"

const OrderButton: React.FC = () => (
  <Space wrap>
    <Button className={buttonStyle.button}>Заказать</Button>
  </Space>
);

export default OrderButton;
