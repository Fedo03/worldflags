
class RanList {

    random(list){
        var order = []
        var t = 0 ;
        for(var i = 0; i < list.length; i++){
          
          var rand = Math.floor(Math.random() * list.length);
        
          if(i == 0 ){
           order.push(rand)
          } else {
            
    
            while(t < order.length){
              
              if(rand == order[t]){
               
                rand = Math.floor(Math.random() * list.length)
                t = 0;
                if(order.length == list.length ){
                  break
                }
              
              } else {
               
                if(t == (order.length -1)){
                  order.push(rand)
                }
              
                t++
              }
            }
    
          }
        }
    
        return order;
      }
    }
    export default RanList