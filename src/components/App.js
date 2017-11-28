import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './Login/index.js';
import Home from './Home';
import Portal from './Portal';
export default class App extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/portal" exact component={Portal} />
            </Switch>
        )
    }
}