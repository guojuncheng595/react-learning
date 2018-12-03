import React from 'react'
import { Card } from 'antd'
import echartsTheme from './../echartTheme'
// import echarts from 'echarts'//导入所有图表
import echarts from 'echarts/lib/echarts'   //按需加载
//导入饼图
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'


export default class Line extends React.Component {


    componentWillMount() {
        echarts.registerTheme('GJC', echartsTheme);
    }

    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis:{
                data:[
                    '周一','周二','周三','周四','周五','周六','周日'
                ]
            },
            yAxis:{
                type:'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [
                       1000,
                       700,
                       3000,
                       1150,
                       3000,
                       1200,
                       800
                    ]
                }
            ]
        }
        return option;
    }

    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis',
            },
            legend:{
                data:['张三订单量','李四订单量']
            },
            xAxis:{
                data:[
                    '周一','周二','周三','周四','周五','周六','周日'
                ]
            },
            yAxis:{
                type:'value'
            },
            series: [
                {
                    name: '张三订单量',
                    type: 'line',
                    data: [
                       1500,
                       1700,
                       3800,
                       2150,
                       2000,
                       1800,
                       1800
                    ]
                },
                {
                    name: '李四订单量',
                    type: 'line',
                    data: [
                       1000,
                       700,
                       3000,
                       1150,
                       3000,
                       1200,
                       800
                    ]
                }
            ]
        }
        return option;
    }


    getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis:{
                boundaryGap:false,
                data:[
                    '周一','周二','周三','周四','周五','周六','周日'
                ]
            },
            yAxis:{
                type:'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    areaStyle:{},
                    data: [
                       1000,
                       700,
                       3000,
                       1150,
                       3000,
                       1200,
                       800
                    ]
                }
            ]
        }
        return option;
    }

    render() {
        return (
            <div>
                <Card title="折线图表之一">
                    <ReactEcharts option={this.getOption()} theme="GJC" style={{ height: 500 }} />
                </Card>
                <Card title="折线图表之二" style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption2()} theme="GJC" style={{ height: 500 }} />
                </Card>
                <Card title="折线图表之三" style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption3()} theme="GJC" style={{ height: 500 }} />
                </Card>

            </div>
        );
    }

}