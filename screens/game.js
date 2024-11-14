import React, 
       {useState,
        useEffect} from "react";
import { SafeAreaView,
    Image,
    View,
    Text,
    TouchableOpacity
 } from "react-native";

 import {countries} from "../media/js/all"; 

function Game(){
        
    var [count, setCount] = useState([...countries[1]]);

    var [answ, setAnsw] = useState([])
   console.log(count[0]);
    
  useEffect(()=> {
    var oldarr = answ

    for(var i = 0 ; i < count.length; i++){
       
       oldarr.push("")
      setAnsw(oldarr)
      

    }

    console.log(answ)

  },[])


  const exchange = (index, type) => {
    if (type == "letters") {
   var oldarr = answ 
       oldarr[index] = count[index]
       setAnsw(oldarr)

    }



  }


    function Letter(props){
        return(
            <TouchableOpacity onPress={props.onClick}>
            <View>
                <Text>  
                    {props.letter}
                </Text>
            </View>
            </TouchableOpacity>
        )
    }

 
    return(
        <SafeAreaView>
            <View>
           <Image
           source={require("../media/worldFlags/Afghanistan.png")}
           style={{
            width:300,
            height:180
           }} />
            </View>



            <View style={{flexDirection : "row"}} >
          {
            count.map( (item, index) => {
       return  (
        <View >
            <Letter />
            </View> 
              )
           }) 

         }
          </View>

            <View style={{flexDirection : "row"}}>
          {
            count.map( (item, index) => {
       return  (
        <View>
            <Letter letter={item}
            onClick={exchange(index, "letters")}/>
            </View> 
              )
           }) 

         }
          </View>

          

        </SafeAreaView>
    )
}

export default Game;