import React, 
       {useState,
        useEffect} from "react";

import { SafeAreaView,
    Image,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet
 } from "react-native";

 import {countries} from "../media/js/all"; 
 import Button from "../comps/button";

function Game(){
        
    const [count, setCount] = useState([...countries[5]]);
    const [List,setList] = useState()
    const [selectedId,setSelectedId] = useState()
    const [Answ, setAnsw] = useState([])
    const [sAnsw, setSAnsw] = useState()
    const [i_a, setI_a] = useState(0)
    const [len, setLen] = useState(count.length)
    const [img, setImg] = useState(require("../media/worldFlags/Brazil.png"))
    
    
  
  useEffect(()=> {
    
   
    
    var incrementalList = [] 
    var blanks =[]
 
    for(var i = 0 ; i < len; i++){
     incrementalList[i] = {
      id: i,
      letter : count[i]
     } 
     
     blanks[i] = {
      id: len + i,
      letter: ""
     }

    }
    
    setAnsw(blanks)
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
         <Button 
         txt={item.letter} 
         sty={stl.lett}
         st={stl.txt}
         onPress={()=>{
        
         // console.log(item.id)
          var oldarr = List
          var a_oldarr = Answ
          
          for(var i = 0; i < oldarr.length ; i++){

          if(item.id === oldarr[i].id){

           //console.log(i_a)

            if(i_a > len - 1){

              for(var t = 0; t < a_oldarr.length; t++ ){

                if(a_oldarr[t].letter == ""){

                  oldarr.splice(i,1)
                  a_oldarr[t] = item
                   console.log(t)
                 break;
                }
              }

              console.log("overboard")
            } else {

           oldarr.splice(i,1)
            a_oldarr[i_a] = item

            }
            console.log(oldarr)

            setI_a(i_a + 1)
            

            setAnsw(a_oldarr)
            setList(oldarr)

          }
        }  }}/>
      )


      const render = ({item})=> {
        return( 
          <Button
          sty={ stl.butt}
         st={stl.txt}
          txt={item.letter} 
          onPress={()=> { 

            setSelectedId(item.id)

            if(item.letter){

              var newList = List

              newList.push(item)
              setList(newList)
              newList = Answ
              for(var i = 0 ; i < newList.length; i++){
                   if(newList[i].letter == item.letter){
                    setI_a(i)
                    newList[i]= {
                      id : newList.length + i ,
                      letter : ""
                    }
                     
                   }
              }
              setAnsw(Answ)
              console.log(List)
              console.log(Answ)

            } else {
              
              for(var i = 0; i < len; i++) {
                if(item.id == len + i){
                  setI_a(i)
                }
              }
            }

          }}
          />
        )
      }

    return(
        <SafeAreaView>
            <View>
           <Image
           source={img}
           style={{
            width:300,
            height:180
           }} />
            </View>

            <View>
              <FlatList 
              horizontal={true}
              data={Answ}
              renderItem={render}
              keyExtractor={item => item.id}
              extraData={sAnsw}
              />
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


const stl = StyleSheet.create({
  butt : {
    backgroundColor: "gray",
    margin: 10,
    width: 20,
    height: 30,
    alignContent:"center"

  },
  txt :{
    textAlign : "center",
    fontSize: 20,
    fontWeight: "bold"
  },

  lett : {
    backgroundColor: "yellow",
    margin: 10,
    width: 20,
    height: 30


  }
})


export default Game;