import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {checkIndexAuthorization,checkPortalAuthorization} from '../lib/check-auth';

export default restricted=(BaseComponent) =>{
    class Restricted extends Component{
        componentWillMount(){
            checkPortalAuthorization(this.props.store)
        }
        componentWillReceiveProps(nextProps){
            if(nextProps.location!==this.props.location){
                checkPortalAuthorization(nextProps);
            }
        }
        render(){
            return <BaseComponent {...this.props} />
        }
    }
    return withRouter(Restricted);
}