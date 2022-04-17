import react, { useState } from 'react';
import {Typography} from 'antd';

const {Text} = Typography;

interface ITimeField {
  currentTime: number;
}

function formatDate(date: number) {
  var res = date.toString();  
  if (res.length == 1) {
    res = '0' + res;
  }
  return res;
}

export const TimeField: react.FC<ITimeField> = (props) => {
  
  var currentTime = -props.currentTime +Date.now();

  const [days, setDays] = useState(Math.floor(currentTime/(1000*60*60*24)));
  currentTime -= days * 1000 * 60 * 60 * 24;
  const [hours, setHours] = useState(Math.floor(currentTime/(1000*60*60)));
  currentTime -= hours * 1000 * 60 * 60;
  const [minutes, setMinutes] = useState(Math.floor(currentTime/( 1000 * 60)));
  currentTime -= minutes * 1000 * 60;
  const [seconds, setSeconds] = useState(Math.floor(currentTime/1000));

  setTimeout(() => {
    if (seconds - 1 < 0) {
      if (minutes - 1 < 0) {
        if (hours - 1 < 0) {
          if (days - 1 < 0) {
            //handle end
          }
          else {
            setDays(days-1);
            setHours(23);
          }
        } else {
          setHours(hours-1);
          setMinutes(59);
        }
      } else {
        setMinutes(minutes-1);
        setSeconds(59);
      }
    } else {
      setSeconds(seconds-1);
    }
  }, 1000);
  
  return (
    <div className="time">
              <div className="time__container">
                <div className="time__container-content">{formatDate(days)}</div>
                <Text className="time__container-name" type={'secondary'}>дней</Text>
              </div>
              <div className="time__container">
                <div className="time__container-content">{formatDate(hours)}</div>
                <Text className="time__container-name" type={'secondary'}>часов</Text>
              </div>
              <div className="time__container">
                <div className="time__container-content">{formatDate(minutes)}</div>
                <Text className="time__container-name" type={'secondary'}>минут</Text>
              </div>
              <div className="time__container">
                <div className="time__container-content">{formatDate(seconds)}</div>
                <Text className="time__container-name" type={'secondary'}>секунд</Text>
              </div>
            </div>
  );
}