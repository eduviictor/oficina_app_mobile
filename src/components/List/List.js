import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Item from './Item/Item';

export default class List extends Component {

    renderItem = ({ item }) => (
		<Item item={item}/>
	)

    render() {
        return (
            <View style={styles.container}>
				<FlatList 
					data={this.props.data}
					keyExtractor={item => item.id}
					renderItem={this.renderItem}
					contentContainerStyle={styles.list} 
                />
			</View>
        )
    }
}

// const AppNavigator = createStackNavigator({
// 	Home: List,
// });

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa'
	},
	list: {
		padding: 10
	},
});

// export default createAppContainer(AppNavigator);