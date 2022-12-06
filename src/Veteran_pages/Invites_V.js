import React,{useEffect,useState} from 'react'

export const Invites_V = () => {
  const {val,setVal} = useState(0);

  useEffect(()=>{
    console.log(val)
  },[val])

  const submitButton = (event)=>{
    setVal((e)=>e+1)
  }

  console.log("dd",val)
  return (
    <div>
    <div>Invites_V</div>
    <p>{val}</p>
    <button onChange={submitButton}>nie</button>
    </div>
  )
}
