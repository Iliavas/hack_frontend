import react, { useEffect, useState } from 'react';
import useArray from 'react-use-array'

import './style.css';
import { Breadcrumb, Typography, Switch, Input, Button, notification } from 'antd';
import { Chart } from '../../components/Chart';
import { AppBar } from '../../components/AppBar';
import { TimeField } from '../../components/TimeField';
import axios from 'axios';
const {Text} = Typography;

const betImg = require("../../images/bet.png");

function formatMoney(money: number) {
  var magenta = ((money%1) * 100).toString();
  if (magenta.length == 1) {
    magenta += '0';
  }
  magenta = magenta.slice(0, 2);

  return `${Math.floor(money)},${magenta} ₽`;
}

var socket = new WebSocket("ws://10.10.117.135:8001/ws/chat/5/");

export const SessionDetail: react.FC = () => {


  const [currentCost, setCurrentCost] = useState(400);
  const [isListenerLoad, setIsListenersLoad] = useState(false);
  const [hasData, setHasData] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isActiveLot, setIsActiveLot] = useState(true)
  const [chartStamps, {push}] = useArray([
    {
      value: 400,
      label: Date.now()
    },
  ]);
  useEffect(() => {
    if (currentTime == 0) {
      axios.get("http://10.10.117.135:8001/api/quotations/5").then((data) => {
        // console.log(data.data[0].time);
        // console.log(data.data[0].start_price);  
        setHasData(true);
        const date = new Date(data.data[0].time);
        //console.log(date.getTime(), date);
        setCurrentTime(date.getTime());
        localStorage.setItem("date", date.getTime().toString());
      })
    }
  });
  var ddate = new Date();
  ddate.setHours(6);
  console.log(ddate.getHours());
  const mockData = {
    id: 5,
    persent: 1,
    time: Date.now() + ddate.getHours() * 60 * 60 * 1000
  }
  
  if (!isListenerLoad) {
    setIsListenersLoad(true);
    socket.addEventListener("open", (e) => {
      console.log(e);
    });
    socket.addEventListener("message", (e) => {
      console.log(e.data);
      var lot = JSON.parse(e.data).lot;
      push({value: lot[0], label: (Date.now())});
      var company_id = (JSON.parse(e.data).company);
      if (lot.length == 2) {
        push({value: lot[1], label: (Date.now()+6)});
        var company_bot_id = JSON.parse(e.data).company3;
        console.log(company_bot_id, "bot id");
        if (company_bot_id == localStorage.getItem("id")) {
          notification.success({message: "Ваш бот сделал ставку", duration: 1});
        }
      }
      if (company_id == localStorage.getItem("id")!) {
        setIsActiveLot(false);
      }
      else {
        setIsActiveLot(true);
      }
      setCurrentCost(lot[lot.length-1]);
    })
    socket.addEventListener("error", (e) => {
      console.error(e.cancelable);
    });
    socket.addEventListener("close", (e) => {
    });

  }
  
  
  return (
    <>
    <div className='pad'>
      <Breadcrumb routes={[
        {
          path: "/",
          breadcrumbName:"Главная"
        },
        {
          path: "/",
          breadcrumbName:"Личный кабинет"
        },
        {
          path: "/",
          breadcrumbName:"Профиль"
        },
        {
          path: "/",
          breadcrumbName:"Котировочные сессии "
        },
      ]} />
      <div className="flat">
        <div className="first">
          <div className='text-block__container'>
            <div className="text-block">
              <Text>Закупка офисной бумаги</Text>
              <Text type='secondary'>Сессия №1322345</Text>
              <div className="green-circle"></div>
              <Text type='secondary'>активна</Text>
            </div>
          </div>
          <div className="text__info first-text__info">
            <Text type='secondary' className='text-info__text'>заказчик</Text>
            <Text className='text-info__main-text'>ГБУ МоС «Академия»</Text>
          </div>
          <div className="text__info">
            <Text type='secondary' className='text-info__text'>Заключение происходит в соответствии с законом</Text>
            <Text className='text-info__main-text'>44-ФЗ</Text>
          </div>
          <div className="text__info">
            <Text type='secondary' className='text-info__text'>Основание для заключения</Text>
            <Text className='text-info__main-text'>п. 4 ч. 1 ст. 93 Закупка объемом до 600 тысяч рублей</Text>
          </div>
          <div className="text__info">
            <Text type='secondary' className='text-info__text'>Даты проведения</Text>
            <Text className='text-info__main-text'>c 16.04.2022 11:34:21 по 17.04.2022 11:34:21</Text>
          </div>
          <div className="text__info">
            <Text type='secondary' className='text-info__text'>Шаг цены</Text>
            <Text className='text-info__main-text'>1%</Text>
          </div>
          <div className="text__info">
            <Text type='secondary' className='text-info__text'>Начальная цена</Text>
            <Text className='text-info__main-text'>400.00 ₽</Text>
          </div>
          <div className="text__info">
            <Text type='secondary' className='text-info__text'>Снижение в ходе сессии</Text>
            <Text className='text-info__main-text'>{formatMoney(currentCost * mockData.persent/100)}</Text>
          </div>
          <div className="automation">
          <Text className='automation-main__text'>Установка параметров автоматической торговли</Text>
          <div className="toggle__container">
            <Text>Автоматическая AI ставка</Text>
            <Switch></Switch>
          </div>
          <div className="minimal-in-price">
            <Text type="secondary">Минимальный порог вхождения в сделку:</Text>
            <Input style={{width: 270}} value={220}></Input>
            <Button type="primary" style={{width: 270}}>Подтвердить</Button>
          </div>
        </div>
        </div>
        <div className="second">
        <div className="cost-and-time__container">
            <div className="current__cost">
              <span className="current-cost__head">текущая цена сессии</span>
              <br />
              <span className="current-cost">{formatMoney(currentCost)}</span>
            </div>
            {
              hasData ? <TimeField currentTime={currentTime} /> : <></>
            }
            
          </div>
          <Chart values={chartStamps.map((e) => {
           return {y: e.value, x: e.label}})}></Chart>
          <div className="bet__block">
            <div className="pred-bet">
              <img src={betImg} width={36} height={36} alt="" />
              <Text className='pred-bet__text' type='secondary'>Возможная ставка</Text>
            </div>
            <div className="cost">
              {formatMoney(currentCost - (currentCost * mockData.persent/100))}
            </div>
            <Button disabled={!isActiveLot} type='primary' onClick={() => {
              socket.send(localStorage.getItem("id")!.toString() + " " + (currentCost - (currentCost * mockData.persent/100)).toString() + " " + localStorage.getItem("id"))
            }}>сделать ставку</Button>
          </div>
          <div className="low-cost">
            <Text type="secondary">Cнижение от текущей цены: </Text>
            <Text type="secondary" style={{fontWeight: "bold"}}>{formatMoney(currentCost - (currentCost * mockData.persent/100))}</Text>
            <Text type="secondary">{mockData.persent}%</Text>
          </div>
        </div>
      </div>   
    </div>
    </>
    
  );
}