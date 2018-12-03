import React from 'react'
import { Card,Tabs,message,Icon} from "antd"
import './ui.less'
const TabPane = Tabs.TabPane;
export default class Buttons extends React.Component{

    newTabIndex= 0

    handleCallback = (key)=>{
        message.info("Hi,您选择了标签：" + key);
    }
    onChange = (activeKey) =>{
        this.setState({
            activeKey
        })
    }

    onEdit=(targetKey,action)=>{
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      }
    
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
      }

    componentWillMount(){
        const panes = [
            {
                title:'tab 1',
                content:'1',
                key:'1'
            },
            {
                title:'tab 2',
                content:'2',
                key:'2'
            },
            {
                title:'tab 3',
                content:'3',
                key:'3'
            }
        ]
        this.setState({
            activeKey:panes[0].key,
            panes 
        })
    }

    render(){
        return(
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>2</TabPane>
                        <TabPane tab="Tab 3" key="3">3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus"/>"Tab 1"</span>} key="1">1</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>"Tab 2"</span>} key="2">2</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>"Tab 3"</span>} key="3">3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs 
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        defaultActiveKey="1" 
                        onEdit={this.onEdit}
                        // onChange={this.handleCallback}
                        type="editable-card">
                            {
                                this.state.panes.map((panel)=>{
                                    return <TabPane
                                        tab={panel.title}
                                        key={panel.key}
                                    />
                                })
                            }
                    </Tabs>
                </Card>
            </div>
        )

    }
}