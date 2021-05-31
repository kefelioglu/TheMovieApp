import React, { useState } from "react";
import { connect } from "react-redux";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { getPopularMovies } from "../redux/actions/Movies";

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
    this.isAttempting = false;
  } 
  login(){
    this.props.getPopularMovies() 
    this.props.navigation.navigate('LoginScreen')
  }
   
  render(){
    return (
      <Background>
              <Logo />
              <Header>MOVIES</Header>
              <Paragraph>
                 The Movies Databases
              </Paragraph>
              <Button
                  mode="contained"
                  onPress={()=>this.login()}>
                  Login
              </Button>
      </Background>

  )
  }
    
}
  
  const mapDispatchToProps = dispatch =>{
    return{
      getPopularMovies:()=>{
        dispatch(getPopularMovies());
      },
    };
  };
  
  export default connect(null, mapDispatchToProps)(StartScreen);
