import React, { useState, useEffect } from 'react'
import './style.less'
import { Layout, Menu, Breadcrumb } from 'antd'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { Quan } from '@/router/assembly'
import { connect } from 'react-redux'

const { Header, Content, Sider } = Layout
const { SubMenu } = Menu


function Home () {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
};
  return (
    <div className="pages-home">
      <Layout
        className="layout"   //容器 className
        style={{background:"#FFF"}}  //指定样式
        >
        <Header style={{background:"black",color:"white",fontSize:"18px"}}>
          <p >
              <span style={{float:'left'}}>恒久商城-后台管理系统 v3.1</span>
              <span style={{float:'right'}}>超级管理员 admin</span>
          </p>
        </Header>
        <Layout>
          <Sider style={{height:"300px",background:"#f1f1f1"}}>
            <Menu
              defaultSelectedKeys={['2']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              Collapsed={collapsed}
              >
              
              <SubMenu
                  key="sub1"
                  title={
                  <span>
                      {/* <MailOutlined /> */}
                      <span>系统管理</span>
                  </span>
                  }
              >
                  
                  <Menu.Item key="1"><NavLink to="/home/quan">系统监控</NavLink></Menu.Item>
                  <Menu.Item key="2">角色管理</Menu.Item>
                  <Menu.Item key="3">菜单管理</Menu.Item>
                  <Menu.Item key="4">部门管理</Menu.Item>
                  <Menu.Item key="5">单位管理</Menu.Item>
                  <Menu.Item key="6">参数管理</Menu.Item>
                  <Menu.Item key="7">通知广告</Menu.Item>
                  <Menu.Item key="8">日志管理</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                      {/* <AppstoreOutlined /> */}
                      <span>系统监控</span>
                  </span>
                }
              >
                <Menu.Item key="5"><NavLink to="/jichu">商品管理</NavLink></Menu.Item>
                <Menu.Item key="6">商品管理</Menu.Item>
                <Menu.Item key="7">商品管理</Menu.Item>
                  
              </SubMenu>
              
            </Menu>
          </Sider>
          <Content style={{background:"white"}}>
              <Switch>
                <Route path="/home/quan" component={Quan}/>
                <Redirect to="/home/quan"  />
              </Switch>
           
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default connect(state => {

},{

})(Home)