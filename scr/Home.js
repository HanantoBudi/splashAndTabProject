import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: 'Home Screen',
    }
    constructor() {
        super();
        this.state={
            showMe:true
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Example of splash screen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#F5FCFF',
        flex: 1,
        justifyContent:'center'
    },
    instruction:{
        color:'#333333',
        marginBottom:5,
        textAlign:'center'
    },
    welcome:{
        fontSize:20,
        margin:10,
        textAlign:'center'
    }
});