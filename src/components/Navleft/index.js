import React from 'react'
// import { Menu, Icon } from 'antd';
import { Menu} from 'antd';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { switchMenu } from './../../redux/action'

import './index.less';
import MenuConfig from './../../config/menuConfig';
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// import MenuItem from 'antd/lib/menu/MenuItem';
class Navleft extends React.Component{

    state = {
        currentKey:''
    }
    
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        let currentKey = window.location.hash.replace(/#|\?.*$/g,'');
        this.setState({
            currentKey,
            menuTreeNode
        });
    }

    handleClick= ({item,key})=>{
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title))
        this.setState({

            currentKey:key
        })
    }

    //菜单渲染
    renderMenu = (data) =>{
        return data.map((item) =>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                ) 
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    render(){
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>MySelf MS</h1>
                </div>
                <Menu 
                    onClick={this.handleClick}
                    selectedKeys={[this.state.currentKey]}
                    theme="dark"> 
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
export default connect()(Navleft);