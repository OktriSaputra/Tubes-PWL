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
    <SubMenu title={<span><h2>Contact</h2></span>}>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu