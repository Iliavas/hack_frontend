import react, { useState } from 'react';
import {Typography, Switch, Input, Button} from 'antd';
const {Text} = Typography;

export const AIBotForm: react.FC = () => {

  const [isAI, setIsAI] = useState(false);
  const [minCost, setMinCost] = useState(220);

  return (
    <div className="automation">
          <Text className='automation-main__text'>Установка параметров автоматической торговли</Text>
          <div className="toggle__container">
            <Text>Автоматическая AI ставка</Text>
            <Switch onChange={() => {
              setIsAI(!isAI);
            }} defaultChecked={true}></Switch>
          </div>
          <div className="minimal-in-price">
            <Text type="secondary">Минимальный порог вхождения в сделку:</Text>
            <Input style={{width: 270}} value={minCost} onChange={(e) => {
              setMinCost(parseInt(e.target.value));
            }}></Input>
            <Button type="primary" style={{width: 270}} onClick={() => {

            }}>Подтвердить</Button>
          </div>
        </div>
  );
}