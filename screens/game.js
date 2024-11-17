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
   console.log(console.log);
    
  
  useEffect(()=> {
    var oldarr = []
    setAnsw([])
    for(var i = 0 ; i < count.length; i++){
       
       oldarr.push("")
      setAnsw(oldarr)
      

    }

  },[])


useEffect(() => {
    console.log(answ)
},[answ])


  function exchange (index, type) {
    
    if (type == "letters") {
   var oldarr = answ 
    var oldcount = count
   
       oldarr[index] = count[index]
       setAnsw(oldarr)
       oldcount.splice(index,1)
       setCount(oldcount)

    }


  }


    function Letter(props){
        return(
            <TouchableOpacity onPress={props.onClick}>
            <View style={{backgroundColor:"blue",
               width : 10,
                height: 20,
                margin: 4}}>
                <Text style={{color: "black"}}>  
                    {props.letter}
                </Text>
                
            </View>
            </TouchableOpacity>
        )
    }


    console.log(answ)

  
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
            answ.map( (item, index) => {
              console.log(index)
       return  (
            <View >
            <Letter letter={item} />
            
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
           onClick={() => {exchange(index, "letters")}}
           />
            </View> 
              )
           }) 

         }
          </View>

          

        </SafeAreaView>
    )
}

export default Game;