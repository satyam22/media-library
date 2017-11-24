import React,{Component} from 'react';
import '../stylesheets/style.css'
import axios from 'axios';
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };
    }
    handleClick(event){
        console.log("inside handle event");
        var apiBaseURl="http://localhost:3100/api/";
       // var self=this;
        var payload={
            "username":this.state.username,
            "pasword":this.state.password
        };
        console.log("======payload===");
        console.log(payload);
        axios.post(apiBaseURl+'login',payload).then(function(response){
            console.log(response);
        })
    }
    render(){
        return(
            <div className="container-fluid login-body">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Please Sign In</h3>
                        </div>
                        <div className="panel-body">
                            <form >
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="USER NAME" type="email" required autoFocus 
                                        onChange={(event,newValue)=>this.setState({username:newValue})}/>
                                    </div>
                                    <div className="form-group">
                                    <input className="form-control" placeholder="Password"  type="password" required
                                    onChange={(event,newValue)=>this.setState({password:newValue})} />
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input name="remember" type="checkbox" />Remember Me
                                        </label>
                                    </div>
                                    <div>
                                    <a href="register.html">Don't have an account.Register Here</a>
                                    
                                    </div>
                                    
                                    <button type="submit" className="btn btn-block btn-success"
                                    onClick={(event)=>this.handleClick(event)}>Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        )
    }
}