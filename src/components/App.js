import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from './Login/index.js';
import {connect} from 'react-redux';
import {restricted} from 'restricted.js';
//import Register from './Register/index.js';
import Home from './Home';
import Portal from './Portal';
import {checkIndexAuthorization,checkPortalAuthorization} from '../lib/check-auth';
 class App extends Component{
    render(){
        const self=this;
        return(
            <Switch>
                <Route exact path="/"  render={()=>checkIndexAuthorization(self.props.store)?(<Portal />):(<Home />)} />
        
                <Route exact path="/portal"  render={()=>checkPortalAuthorization(self.props.store)?(<Portal />):(<Redirect exact push from='/portal' to='/login' key="from-portal"/>)} />
                <Route exact path="/login"  component={Login} />
            </Switch>
        )
    }
}
const mapStateToProps=(state)=>(
    {
        state:state
    })
export default connect(mapStateToProps)(App);