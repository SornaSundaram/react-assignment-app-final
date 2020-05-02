import React from 'react';
import { Layout, Menu, Button} from 'antd';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const navigation = () => {

    return (
        <div>
            
            <Header>
                <Menu mode="horizontal">
                    <Menu.Item><a>How it works</a></Menu.Item>
                    <SubMenu title={ <span>BROWSE</span>}>
                            <MenuItemGroup title="Item 1">
                                <Menu.Item key="ONE">ONE</Menu.Item>
                                <Menu.Item key="TWO">TWO</Menu.Item>
                            </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="SEARCH">SEARCH</Menu.Item>
                    <SubMenu title={<span>My Account</span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="THREE">THREE</Menu.Item>
                                    <Menu.Item key="FOUR">FOUR</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                </Menu>
            </Header>
        </div>
    );
};

export default navigation;