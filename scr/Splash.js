import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation'

export default class Splash extends Component {
    static navigationOptions = {
        headerTitle: 'Splash Screen',
    }
    componentWillMount() {
        setTimeout(()=>{
            this.props.navigation.navigate('main');
        }, 10000)
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
                    Welcome to Splash Screen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'skyblue',
        flex: 1,
        justifyContent:'center'
    },
    welcome:{
        fontSize:20,
        margin:10,
        textAlign:'center'
    }
});