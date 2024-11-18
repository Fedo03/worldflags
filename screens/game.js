import React, 
       {useState,
        useEffect} from "react";

import { SafeAreaView,
    Image,
    View,
    Text,
    TouchableOpacity,
    FlatList
 } from "react-native";

 import {countries} from "../media/js/all"; 

function Game(){
        
    const [count, setCount] = useState([...countries[5]]);
    const [List,setList] = useState()
    const [selectedId,setSelectedId] = useState()
    

    var [answ, setAnsw] = useState([])

    
  
  useEffect(()=> {
    var incrementalList = [] 
 
    for(var i = 0 ; i < count.length; i++){
     incrementalList[i] = {
      id: i,
      letter : count[i]
     }      

    }

    setList(incrementalList)
    console.log(List)
           
  },[])



    


        const Item = ({txt,onPress})=>{
         return(

            <TouchableOpacity onPress={onPress}>
              <View style={{margin: 10}}>
                <Text style={{color: "black"}}>
                  {txt}
                </Text>
              </View>
            </TouchableOpacity>
        )
        }


        const renderItem = ({item})=>(
         <Item txt={item.letter} onPress={()=>{
          setSelectedId(item.id) 
         console.log(selectedId)
        
        }}/>



        )

        


  

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


            <View>
              <FlatList
               horizontal={true}
               data={List}
              renderItem={renderItem}
              extraData={selectedId}
              keyExtractor={item => item.id}
              />
            </View>

           

        </SafeAreaView>
    )
}

export default Game;