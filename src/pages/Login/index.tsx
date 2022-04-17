import react from 'react';
import "./style.css";
import {useNavigate} from 'react-router-dom';
import {Input, Checkbox, Button} from 'antd';
import { profileRoute } from '../../routes/routes';
const image = require("../../images/Main-login.png");
const logo = require("../../images/logo.png");

export const Login: react.FC = () => {

  const navigate = useNavigate();

  return (
    <div className='login-img__container'>
      <img src={image} alt="" />
      <div className="form">
        <div className="form__sized">
          <img src={logo} height={48} width={217} alt="" />
          <Input />
          <Input />
          <div className="check-b">
            <Checkbox />
            <Button type='link'>Забыли пароль?</Button>
          </div>
          <Button type='primary' onClick={() => {
            navigate(profileRoute);
          }}>Войти</Button>
        </div>

      </div>
    </div>
  );
}