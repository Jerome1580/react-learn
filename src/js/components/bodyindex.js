import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins'

import { Input } from 'antd';

const defaultProps = {
    username:'这是一个默认的用户名'
}

export default class BodyIndex extends React.Component {
    constructor(){
        super();
        this.state = {username:'Parry',age:20};
    }

    componentWillMount() {
        console.log("组件将要加载");

    }

    componentDidMount() {
        console.log("组件加载完后");

    }

    changeUserInfo(age){

        this.setState({age:age});
        // 第一种原生操作DOM
        var submitButton = document.querySelector('#submitButton');
        ReactDOM.findDOMNode(submitButton).style.color ='red';

        // 第二种refs
        console.log(this.refs.submitButton);

        MixinLog.log()
    }

    handleChildValueChange(event){
        this.setState({age:event.target.value})
    }

    render() {

        /*setTimeout(()=>{
            this.setState({username:"Babery"})
        },4000)*/

        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{this.state.age} { this.props.userid } { this.props.username}</p>
                <Input placeholder="Basic usage" />
                <input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this,99)}/>
                <BodyChild {...this.props} age={this.state.age} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}

BodyIndex.propTypes = {
    userid:React.PropTypes.number.isRequired
}

BodyIndex.defaultProps = defaultProps;

ReactMixin(BodyIndex.propTypes,MixinLog);