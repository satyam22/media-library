import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';

export default class App extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
            </Switch>
        )
    }
}