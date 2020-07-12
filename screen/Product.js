import React, { Component } from 'react'
import {ActivityIndicator, Text, View,StyleSheet,Alert } from 'react-native'
import axios from 'axios'

export default class Product extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            products:[]
        }
    }

    async componentDidMount(){
       
            const SERVER_URL = 'http://192.168.1.103:8000/api/product'
            const products = await axios.get(SERVER_URL)
            console.log(products.data);
            this.setState({
                products: products.data
            })
        
    }
    render() {
        return (
            <View>
                {
                    this.state.products.map((product,i) =>{
                        console.log(product.name);
                        if(i<0){
                           return ( <ActivityIndicator/> )
                        }
                        else{ 
                            return(
                            
                            <Text style={styles.text} key={i}>{product.product_name}</Text>
                            
                            )
                        }
                    })
                }
            
            </View>
        )
    }
}
const styles = StyleSheet.create({
  text:{
      fontSize:15,
      color:'black',
  }
});