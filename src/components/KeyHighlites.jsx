import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { fetchGetResponse } from '../actions';
import NaxaData from './NaxaData';
import "./NaxaData.css"


function KeyHighlites(props) {

  useEffect(() =>{
    props.fetchGetResponse()
  },[])

  console.log("naxa ", props.naxaData.naxaData)
  
  return (
    <div className='grid-container'>
      {props.naxaData !== null?( props.naxaData.naxaData.map(({subtitle,start_date,end_date,photo}) => (
        <div className='grid-item'>
          <NaxaData
          subtitle={subtitle}
          start_date={start_date}
          end_date={end_date}
          photo={photo}
          />
        </div>
      ))):
      <div><h2>Data could not be fetch</h2></div>
      }
    </div>
  )
}

const mapStateToProps = ({ naxa }) => ({
    naxaData:naxa
});

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchGetResponse: () => dispatch(fetchGetResponse()),
  };
};

// export default KeyHighlites

export default connect(mapStateToProps, mapDispatchtoProps)(KeyHighlites)