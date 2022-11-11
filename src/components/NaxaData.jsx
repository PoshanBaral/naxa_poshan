import React from 'react'
import "./NaxaData.css";

function NaxaData({subtitle,start_date,end_date,photo}) {
  return (
    <div>
        <h4>{subtitle}</h4>
          <p>Time Duration :{start_date} {end_date}</p>
          <img src={photo} width="600px" height="auto"/>
    </div>
  )
}

export default NaxaData