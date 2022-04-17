import react from 'react';
import {UserOutlined, SearchOutlined, QuestionCircleOutlined, BellOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
const logo = require("../../images/logo.png");

export const AppBar: react.FC = () => {
  return (
    <div className='appbar__container'>
      <div className="appbar__left">
        <img src={logo} />
      </div>
      <div className="appbar__right">
        <div className="icons">
          <SearchOutlined />
          <QuestionCircleOutlined />
          <BellOutlined />
        </div>
        <div className="profile">
          <Avatar icon={<UserOutlined></UserOutlined>} />
          <span></span>
        </div>
      </div>
    </div>
  );
}