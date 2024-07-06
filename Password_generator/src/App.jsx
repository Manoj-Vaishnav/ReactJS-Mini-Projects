import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [password,setpassword]=useState("");
  const [checknum,setchecknum]=useState(false);
  const [checkchar,setcheckchar]=useState(false);
  

  const passwordgenerator=useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvqxyz";
    let pass="";
    // let num="123456789"
    // let char="!@#$%^&*"
    if(checknum) str+="123456789";
    if(checkchar) str+="!@#$%^&*";
    
    for (let index = 0; index <= length; index++) {
        let number=Math.round(Math.random() * str.length +1);
        pass+=str.charAt(number);    
    }
    setpassword(pass);
  },[length,checknum,checkchar,setpassword])

  useEffect(()=>{
    passwordgenerator();
  },[length,checknum,checkchar,passwordgenerator])

  const passwordRef=useRef("");

  const copytoclipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <div id="box">
        <h1>Password generator</h1>
        <div id="middle">
          <input type="text" value={password} id="text" placeholder='Password' ref={passwordRef} readOnly />
          <button className="copy" onClick={copytoclipboard}>Copy</button>
        </div>
        <div id="last">
          <input type="range" min="6" max="100" value={length} className="slider" id="myRange" onChange={(e)=>{setlength(e.target.value)}}/>
          <label>Length : {length}</label>
          <input type="checkbox" id="Numbers" defaultChecked={checknum} onChange={()=>setchecknum((prev)=>!prev)}/>
          <label htmlFor="Numbers">Numbers</label>
          <input type="checkbox" id="Characters" defaultChecked={checkchar} onChange={()=>setcheckchar((prev)=>!prev)} />
          <label htmlFor="Characters">Character</label>
        </div>
    </div>
  )
}

export default App
