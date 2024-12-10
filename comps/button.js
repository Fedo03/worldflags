import React from "react";
import { SafeAreaView,
    TouchableOpacity,
    View,
    Text

 } from "react-native";



 const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
        <View style={props.sty}>
          <Text style={props.st}>
            {props.txt}
          </Text>

        </View>


      </TouchableOpacity>

    )
 }

export default Button