import React from "react";
import {connect} from "react-redux";
import {SafeAreaView,Text,View,TextInput,TouchableOpacity} from 'react-native';

class secondScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        inputText:''
    };

    this.isAttempting = false;
}
  onChangeText(text){
    this.setState({inputText:text})
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Profile</Text>
        <Text>Detail</Text>
      </SafeAreaView>
    );
  }
}


export default connect(null, null)(secondScreen);
