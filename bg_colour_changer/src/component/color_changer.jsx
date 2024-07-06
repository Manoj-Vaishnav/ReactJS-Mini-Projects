import { useState } from 'react'

 function Color_changer(Props){
   let [colour,setcolor]=useState("white");
   const new_colour=(event)=>{
       if(event.target.className=="red"){
         setcolor("red");
       }else if(event.target.className=="blue"){
         setcolor("blue");
       }else if(event.target.className=="orange"){
         setcolor("orange");
       }else if(event.target.className=="green"){
         setcolor("green");
       }else if(event.target.className=="yellow"){
        setcolor("yellow")
       }
   }
return(
     <div id="box" style={{backgroundColor:colour, width:'100vw', height:'100vh'}}>
         <div className="top" >
            <h1>{Props.title}</h1>
         </div>
         <div id="header">
            <button className="red" onClick={new_colour}>Red</button>
            <button className="blue" onClick={new_colour}>Blue</button>
            <button className="orange" onClick={new_colour}>Orange</button>
            <button className="green" onClick={new_colour}>Green</button>
            <button className="yellow" onClick={new_colour}>Yellow</button>
         </div> 
     </div>
      )   
}
export default Color_changer