import React from 'react'
import {Card} from 'antd'
import echartsTheme from './../echartTheme'
// import echarts from 'echarts'//导入所有图表
import echarts from 'echarts/lib/echarts'   //按需加载
//导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'


export default class Bar extends React.Component{


    componentWillMount(){
        echarts.registerTheme('GJC',echartsTheme);
    }

    getOption = () =>{
        let option = {
            title:{
                text:'用户骑行订单'
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'订单量',
                    type:'bar',
                    data:[1000,2000,1500,3000,2500,3500,4000]
                }
            ] 
        }
        return option;
    }

    getOption2 = () =>{
        let option = {
            title:{
                text:'用户骑行订单'
            },
            legend:{
                data:['张三','李四','王五']
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'张三',
                    type:'bar',
                    data:[1000,2000,1500,3000,2500,3500,4000]
                },
                {
                    name:'李四',
                    type:'bar',
                    data:[500,2500,1000,3500,2000,3000,4500]
                },
                {
                    name:'王五',
                    type:'bar',
                    data:[800,2900,1700,3300,2100,3300,3000]
                }
            ]
        }
        return option;
    }

    render(){
        return (
            <div>
                <Card title="柱形图表之一">
                    <ReactEcharts option={this.getOption()} theme="GJC" style={{height:500}}/>
                </Card>
                <Card title="柱形图表之二" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption2()} theme="GJC" style={{height:500}}/>
                </Card>

            </div>
        );
    }

}