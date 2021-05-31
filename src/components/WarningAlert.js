import React, { useState } from "react";
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function WarningAlert({mode,  style, ...props }) {
  const [warning, setWarning] = useState({ show:false, title: '',message:'' })
  const closeAlert = () => {
    console.log('test')
    console.log('warning',warning)
    return setWarning({show:false,title:'',message:''})
  }

    console.log('WArning Alert',mode)
    if(mode.show)
    {
      return (
        <View style={{backgroundColor:'red',position:'absolute',width:100,height:100,justifyContent:'center',alignSelf:'center',zIndex:1000}}>
            <Text>
                {mode.title}
            </Text>
            <TouchableOpacity onPress={closeAlert}>
              <Text>X</Text>
            </TouchableOpacity>
        </View>
      )
    }
    else
    {
      return null
    }
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
