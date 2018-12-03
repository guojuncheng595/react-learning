import React from 'react'
import { Card,Button } from "antd"
export default class Buttons extends React.Component{

    render(){
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">gjc</Button>
                    <Button>gjc</Button>
                    <Button type="dashed">gjc</Button>
                    <Button type="danger">gjc</Button>
                    <Button disabled>gjc</Button>
                </Card>
            </div>
        )
    }
}