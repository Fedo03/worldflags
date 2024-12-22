import React from "react";
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native"


const Home = ({navigation}) => {

    function nav(){
        navigation.navigate("Game")

    }

    function Button() {
        return(
            <TouchableOpacity onPress={nav}>
                <View style={stl.container}>
                    <Text style={stl.txt}>
                        Play
                    </Text>
                </View>
            </TouchableOpacity>
        )
    
    }



    return(
        <SafeAreaView style={stl.body}>
           <Button />
        </SafeAreaView>
    )
}


const stl = StyleSheet.create(
    {
        container :{
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: "blue",
            width: 100,
            borderRadius: 10,
           top: Dimensions.get("screen").height/2

        },
        txt : {
            color: "black",
            fontSize: 40  ,
            alignSelf: "center",  
        },
        body : {
 
           
        }

    }
)

export default Home;