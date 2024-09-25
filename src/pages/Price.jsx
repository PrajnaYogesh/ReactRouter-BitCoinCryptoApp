import { useState,React, useEffect } from 'react'
import { useParams } from 'react-router-dom'



function Price() {
  const apiKey="A1F38392-8DF1-4D88-8EC6-172C36E19EBC"

  const params = useParams();
  const symbol = params.symbol;

  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin,setCoin]=useState(null)


const getCoin =  async() =>{
  try {
    const response = await fetch(url);
    const data= await response.json();
    console.log(data);
setCoin(data)
  } catch (error) {
    
  }
}

const loaded= ()=>{
  return(
    <>
    <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
    
    </>
  )
}

const loading = ()=>{
  return <h1> Not yet</h1>
}

useEffect(()=>{
  getCoin()
},[])

  return  coin && coin.rate ? loaded(): loading();
}

export default Price