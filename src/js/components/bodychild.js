import React from 'react';

export default class BodyChild extends React.Component{
    
    render(){
        return(
            <div>
                <p>这是子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
                <p>{this.props.userid} {this.props.id} {this.props.age}</p>
            </div>
        )
    }
}