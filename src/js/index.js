var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import Bodyindex from './components/bodyindex';

import 'antd/dist/antd.css';

class Index extends React.Component {
    componentWillMount(){
        //定义你的逻辑即可
        console.log("Index - componentWillMount");
    }

    componentDidMount(){
        console.log("Index - componentDidMount");
    }
	
	render() {
		let component = <ComponentHeader/>;

		return (
			<div>
				{component}
				<Bodyindex userid={1223}/>
				<ComponentFooter/>
			</div>
		);
	}
}
ReactDOM.render(
	<Index/>, document.getElementById('example'));
