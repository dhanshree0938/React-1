import React from 'react'
import './Errorpage.css'
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  // const mystyle = {"color":"red", "backgroundColor" : "pink"};
  const error = useRouteError();
  
  return (
    <div>
      {/* <h1 className='error'> The Requested url is not found</h1> */}
      {/* <h2 style={mystyle}> wrong url</h1>*/}
      {/* <h2 style={{"color":"red", "backgroundColor" : "pink"}}</h1>*/}
      <h2 style={{"color":"red", "backgroundColor" : "pink"}}>Error</h2>
      <h2 style={{"color" : "pink"}}> Meassage : {error.data}</h2>
      <h2 style={{"color" : "red"}}> Status code : {error.status}</h2>
    </div>
  )
}

// export default ErrorPage
