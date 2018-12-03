react 学习项目
安装node:https://www.cnblogs.com/zhouyu2017/p/6485265.html (需要重启cmd)
npm config list 查看node配置
npm config set prefix "C:\Users\xxx\AppData\Roaming\npm" 设置node配置

配置cnpm:npm install -g cnpm --registry=https://registry.npm.taobao.org

//安装create-react-app
npm install -g create-react-app

//查看create-react-app版本
create-react-app --version

//初始化代码
create-react-app gjc-manager

//关联相关依赖
yarn add react-router

//移除相关依赖
yarn remove react-router

React生命周期
getDefaultProps:通过这个方法初始化一个属性，来自于父主键
getInitialState:初始化当前主键的状态，贯穿于这个项目当中，主键的编号/界面的跳转，都会影响state变化来完成的
componentWillMount:组键在加载之前调用这个方法(dom插入之前)
render：渲染
componentDidMount: 组键dom插入完，调用的方法(dom插入之后)
componentWillReceiveProps父组键的属性的传递
shouldComponentUpdate:主键的更新：调用getInitialState，就会调用这个方法
componentWillUpdate:主键更新之前
componentDidUpdate:更新之后
componentWillUnmount：主键销毁


