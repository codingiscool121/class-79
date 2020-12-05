import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Keyboard, TextInput, Modal, ScrollView, Alert, FlatList } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { render } from 'react-dom';
import MyHeader from '../Components/MyHeader';
import {ListItem} from 'react-native-elements';
export default class BookDonateScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            requestedBookList: [],
        }
        this.requestref = null;
    }
    getrequestedbook=()=>{
        this.requestref = db.collection('Request_Books').onSnapshot((snapshot)=>{
            var books = snapshot.docs.map(document=>{
            document.data()
            })
            console.log(books)
            this.setState({
                requestedBookList: books
            })
        })
    }
    componentDidMount(){
        this.getrequestedbook()
    }
    componentWillUnmount(){
        this.requestref;
    }
    keyExtractor=(item,index)=>{
    index.toString()
    }
    renderItem=({item,i})=>{
    console.log(item)
    return(
        <ListItem
        key={i}
        title={item.BookName}
        subtitle={item.ReasonForRequest}
        titleStyle={{color:"turquoise"}}
        rightElement={
        <TouchableOpacity style={{width:30, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius:10, shadowColor:'black', shadowOffset:{width:30,height:30}}}>
        <Text style={{color:"orange"}}>
            View
        </Text>
        </TouchableOpacity>
        }    
        bottomDivider
        >
        </ListItem>
    )
    }
    render(){
        return(
            <View style={{flex:1}}>
            <MyHeader title="Donate Books:"></MyHeader>
            <View style={{flex:1}}>
            {
              this.state.requestedBookList.length===0
              ?
              (<View style={{flex:1, fontSize: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text>{"List of Books Requested By Our Users  would be here."}</Text>
              </View>)  
              :
              (
              <FlatList keyExtractor={this.keyExtractor} 
              data={this.state.requestedBookList}
              renderItem={
                  this.renderItem
              }
              >
              </FlatList>
              )
            }    
            </View></View>
        )
    }
}
