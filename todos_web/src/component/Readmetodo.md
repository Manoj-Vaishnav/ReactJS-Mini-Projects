<!-- const [completetodos,setcompleteTodos]=useState([]);
let fin=useRef(false); -->
<!-- function handleFinished() -->
/*     second way */
        //  if(e.target.defaultChecked==true){
        //     await setcompleteTodos(todos);
        //     let newtodo=todos.filter((value)=>{
        //         if(value.isFinished==true){
        //             return value;
        //         }
        //      })
        //      await setTodos(newtodo);
        //  }else{
        //     await setTodos(completetodos);
        //  }      
/*third ways using ref*/
    // const handleFinished=()=>{
    //     fin.current=!fin.current;
    //      if(fin.current==true){
    //         setcompleteTodos(todos);
    //         let newtodo=todos.filter((value)=>{
    //             if(value.isFinished==true){
    //                 return value;
    //             }
    //          })
    //          setTodos(newtodo);
    //      }else{
    //         console.log(fin.current);
    //         setTodos(completetodos);
    //      }      
    // }