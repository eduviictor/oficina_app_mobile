import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native'
import Modal from "react-native-modal"

export default class Item extends Component {

    state = {
        modalVisible: false
    }

    showAlert = () => {
        Alert.alert(
            'Descrição do orçamento:', 
            this.props.item.description,  
            [,
                {text: 'OK', onPress: () => {}},
            ],
            {cancelable: false})
    }

    render() {
        return (
            <TouchableOpacity onPress={this.showAlert}>
                <View style={styles.itemContainer}>
                    <View style={styles.viewItem}>
                        <Text>Cliente: </Text>
                        <Text >{this.props.item.customer}</Text>
                    </View>
                    <View style={styles.viewItem}>
                        <Text>Valor: </Text>
                        <Text >{this.props.item.value}</Text>
                    </View>
                    <View style={styles.viewItem}>
                        <Text>Vendedor: </Text>
                        <Text >{this.props.item.seller}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'column',
        color: '#FFF',
        borderWidth: 1,
        borderColor: '#8a2be2',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
	},
	viewItem: {
		flex: 1,
        flexDirection: 'row'
	},	
	itemCliente: {
		
	}
})