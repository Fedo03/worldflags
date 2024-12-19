import React, 
       {useState,
        useEffect} from "react";

import { SafeAreaView,
    Image,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ScrollView
 } from "react-native";

 import {countries} from "../media/js/all"; 
 import Button from "../comps/button";
 import RanList from "../fun/ran";
 
 var ran = new RanList;

function Game(){
        
    const [count, setCount] = useState([...countries[0].name]);
    const [List,setList] = useState()
    const [num, setNum] = useState(0)
    const [selectedId,setSelectedId] = useState()
    const [Answ, setAnsw] = useState([{
      id: "start",
      letter : "placeholder"

    }])
    const [sAnsw, setSAnsw] = useState()
    const [i_a, setI_a] = useState(0)
    const [len, setLen] = useState(count.length)
    const [img, setImg] = useState(countries[0].path)
    console.log(countries[num].path)
    
    
  
  useEffect(()=> {
    
   
    var order =  ran.random(count)
    var incrementalList = [] 
    var blanks =[]
   
 
    for(var i = 0 ; i < len; i++){

    

     incrementalList[order[i]] = {
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
    console.log(count)

           
  },[])




  useEffect(()=> {


    
    console.log("correct")

      
    for(var i = 0 ; i < len; i++) {
      if(Answ[i].letter == count[i]) {
        if(i == len - 1) {
          console.log("true name")
          setNum(num+1)
          break
        }
      } else {
        break;
      }

  }

  },[])






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
                 if(a_oldarr[i_a].letter){

                  for(var t = 0; t < a_oldarr.length; t++ ){

                    if(a_oldarr[t].letter == ""){
    
                      oldarr.splice(i,1)
                      a_oldarr[t] = item
                       console.log(t)
                     break;
                    }
                  }
    
                  
                  
                 } else {
                 
           oldarr.splice(i,1)
            a_oldarr[i_a] = item
                 }
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
                   if(newList[i].id == item.id){
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
            <ScrollView horizontal={true}>
             
              <FlatList 
              horizontal={true}
              data={Answ}
              renderItem={render}
              keyExtractor={item => item.id}
              extraData={sAnsw}
              />
              
            </ScrollView>
            </View> 
            <View>
            <ScrollView horizontal={true}>
            
              <FlatList
               horizontal={true}
               data={List}
              renderItem={renderItem}
              extraData={selectedId}
              keyExtractor={item => item.id}
              />
            
            </ScrollView>
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