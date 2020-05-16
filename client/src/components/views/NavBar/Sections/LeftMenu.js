import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
  <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/"><h2>Home</h2></a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="product"><h2>Product</h2></a>
        </Menu.Item>
      </Menu>
  )
}

export default LeftMenu