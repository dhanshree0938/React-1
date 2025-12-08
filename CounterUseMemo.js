import React, { useMemo, useState } from 'react'

export default function () {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // const getStatus = () => {
    // console.log("getStatus() called");
    //     let i=1;
    //     while(i<=40000000){
    //         i++;
    //     }
    //     if(count1 % 2 === 0)
    //         return "Even No";
    //     else
    //         return "Odd No";
    // }

    // const responseValue =  useMemo(()=>{}, [DL]);
    const status = useMemo(() => {
        console.log("Checking Status");
        let i=1;
        while(i<=40000000){
            i++;
        }
        if(count1 % 2 === 0)
            return "Even No";
        else
            return "Odd No";
    },[count1]);

  return (
    <div>
        <button onClick={()=>setCount1(count1 + 1)} className='btn btn-warning m-2'>{count1}</button> 
        {/* <span>{getStatus()}</span> */}
        <span>{status}</span>
        <br />
        <button onClick={()=>setCount2(count2 + 1)} className='btn btn-warning m-2'>{count2}</button> 
    </div>
  )
}
