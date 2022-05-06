import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function ShowSymbol() {
    const PARAMS = useParams()
console.log(PARAMS)


  return (
    <div>ShowSymbol</div>
  )
}

export default ShowSymbol