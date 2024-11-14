import React from "react";
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text
} from "react-native"


const Home = ({navigation}) => {

    function nav(){
        navigation.navigate("Game")

    }

    function Button() {
        return(
            <TouchableOpacity onPress={nav}>
                <View>
                    <Text>
                        Play
                    </Text>
                </View>
            </TouchableOpacity>
        )
    
    }



    return(
        <SafeAreaView>
           <Button />
        </SafeAreaView>
    )
}

export default Home;