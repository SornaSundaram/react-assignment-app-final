import React from 'react';
import { Layout, Menu} from 'antd';
import logo from '../images/hubstaff_talent_logo.png';
import Icon from '@ant-design/icons';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;

const MenuItemGroup = Menu.ItemGroup;

const navigation = () => {

    return (
        <Header >
        <div >
            <div className="logo">
                <a href='https://talent.hubstaff.com/' target="">
                    <img src={logo} className='logoApp' alt='hubbStaff_logoImage' />
                </a> </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px', float: 'right' }}
            >
                <Menu.Item key="1"><a className="ant-menu-dark.ant-menu-horizontal ant-menu-item ant-menu-dark.ant-menu-horizontal ant-menu-submenu" href="https://talent.hubstaff.com/how_it_works" target="" rel="noopener noreferrer">HOW IT WORKS</a></Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper">BROWSE<Icon type="down" /></span>} trigger={['click']}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="Link1">Link 1</Menu.Item>
                        <Menu.Item key="Link2">Link 2</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="Search">SEARCH</Menu.Item>
                
                <SubMenu title={<span className="submenu-title-wrapper">My Account<Icon type="down" /></span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="Profile">Profile</Menu.Item>
                        <Menu.Item key="Logout">Logout</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        </div>
    </Header>
    );
};

export default navigation;