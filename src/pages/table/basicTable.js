import React from 'react';
import {Card,Table,Modal,message,Button} from 'antd';
import axios from './../../axios/index'
// import { Record } from 'immutable';
import Utils from './../../utils/util';
export default class BasicTable extends React.Component{

    state = {
        dataSource2:[]
    }

    params = {
        page:1
    }

    componentDidMount(){
        const data = [
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市梦想小镇',
                time:'09:00'
            },
            {
                id:'1',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市梦想小镇',
                time:'09:00'
            },
            {
                id:'2',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市梦想小镇',
                time:'09:00'
            },
            {
                id:'3',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市梦想小镇',
                time:'09:00'
            },
            {
                id:'4',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市梦想小镇',
                time:'09:00'
            }
        ]

        data.map((item,index)=>{
            item.key = index;
        })

        this.setState({
            dataSource:data
        })
        this.request();
    }

    //动态获取moke数据
    request = () =>{
        let _this = this;
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                }
                // isShowLoading:true
            }
        }).then((res)=>{
            if(res.code == 0){
                res.result.list.map((item,index) =>{
                    item.key = index;
                })
                this.setState({
                    dataSource2:res.result.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination:Utils.pagination(res,(current)=>{
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    }

    onRowClick = (record,index) =>{
        let selectKey = [index];
        //打印
        Modal.info({
            title:'信息',
            content:`用户名:${record.userName},用户爱好：${record.interest}`
        })

        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })
    } 

    // add = () =>{
    //     let item = this.state.selectedItem;
    //     if(item.id){

    //     }
    // }

    //多选执行删除动作
    handleDelete = (()=>{
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item)=>{
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content:`您确定要删除这些数据吗？${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    })

    render(){
        const columns = [
            {
                title:'ID',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                render(state){
                    let config = {
                        '1' : '咸鱼一条',
                        '2' : '风华才子',
                        '3' : '北大才子',
                        '4' : '百度FE',
                        '5' : '创业者'
                    }
                    return config[state];
                }
            },
            {
                title:'爱好',
                dataIndex:'interest',
                render(interest){
                    let config = {
                        '1' : '游泳',
                        '2' : '打篮球',
                        '3' : '跑步',
                        '4' : '爬山',
                        '5' : '骑行',
                        '6' : '做球',
                        '7' : 'lol',
                        '8' : '吃鸡',
                        '9' : '健身'
                    }
                    return config[interest];
                }
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },
            {
                title:'地址',
                dataIndex:'address'
            },
            {
                title:'早起时间',
                dataIndex:'time'
            }
        ]

        const selectedRowKeys  = this.state.selectedRowKeys;
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        }

        // const 
        const rowCheckSelection = {
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                // let ids = [];
                // selectedRows.map((item)=>{
                //     ids.push(item.id)
                // })
                this.setState({
                    selectedRowKeys,
                    // selectedIds:ids//不是必须的，更具业务需求使用
                    selectedRows
                })
            }

        }

        return (
            <div>
                <Card title="基础表格">
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格-Moke" style={{margin:'10px 0'}}>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-单选" style={{margin:'10px 0'}}>
                    <Table 
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record,index) => {
                            return {
                                //点击行
                                onClick: () =>{
                                    this.onRowClick(record,index);
                                }      
                                // onMouseEnter: () =>{ }, //鼠标移入行
                            }
                        }
                        }
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-复选" style={{margin:'10px 0'}}>
                        <div style={{marginBottom:10}}>
                            <Button onClick={this.handleDelete}>删除</Button>
                        </div>
                    <Table 
                        bordered
                        rowSelection={rowCheckSelection}
                        onRow={(record,index) => {
                            return {
                                //点击行
                                onClick: () =>{
                                    this.onRowClick(record,index);
                                }      
                                // onMouseEnter: () =>{ }, //鼠标移入行
                            }
                        }
                        }
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-表格分页" style={{margin:'10px 0'}}>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}
