import React from 'react'
import { HashRouter as Router , Route } from 'react-router-dom'
import About from './../router1/About'
import Topic from './../router1/Topic'
import Home from './Home'
import Main from './Main'
export default class IRouter extends React.Component{

    render(){
        return(
            <Router>
                <Home>
                    {/* <Route exact = {true} path="/" component={Main} ></Route> */}
                    {/* exact = {true}  */}
                    <Route path="/main" render = {()=>
                        <Main>
                            {/* <div>
                                this is a sub child element
                            </div> */}
                            <Route path="/main/a" component={About}></Route>
                        </Main> 
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        );
    }
}