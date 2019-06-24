import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import api from './components/services/api';

import List from './components/List/List';

class App extends Component {

	state = {
		data: [],
	}

	static navigationOptions = {
		title: 'App Oficina',
		headerStyle: {
			backgroundColor: '#8a2be2'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		}
    };

	componentDidMount(){
		this.loadProjects();
	}

	loadProjects = async () => {
		const response = await api.get();
		this.setState({
			data: response.data
		});
	}

	render() {
		return (
			<List data={this.state.data}/>
		);
	}
}

const AppNavigator = createStackNavigator({
	Home: App,
});

export default createAppContainer(AppNavigator);