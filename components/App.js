import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import api from './services/api';

import Item from './Item/Item';

export default class App extends Component {

	state = {
		data: [],
	}

	componentDidMount(){
		this.loadProjects();
	}

	loadProjects = async () => {
		const response = await api.get();
		this.setState({
			data: response.data
		});
	}

	renderItem = ({ item }) => (
		<Item item={item}/>
	)

	render() {
		console.log(this.state.data);
		return (
			<View style={styles.container}>
				<FlatList 
					data={this.state.data}
					keyExtractor={item => item.id}
					renderItem={this.renderItem}
					contentContainerStyle={styles.list} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa'
	},
	list: {
		padding: 10
	},
    // productTitle: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     color: '#333'
    // },
    // productDescription: {
    //     fontSize: 16,
    //     color: '#999',
    //     marginTop: 5,
    //     lineHeight: 24
    // },
    // productButton: {
    //     height: 42,
    //     borderRadius: 5,
    //     borderWidth: 2,
    //     borderColor: '#DA552F',
    //     backgroundColor: 'transparent',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 10
    // },
    // productButtonText: {
    //     color: '#DA552F',
    //     fontSize: 16,
    //     fontWeight: 'bold'
    // }
});