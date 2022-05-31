import React from 'react'
import { Loader } from 'rsuite'
import styled from 'styled-components';

function NewsSpinner() {
  return (
      <Load>
          <Loader vertical  size="md" content="Loading"  speed='slow' />
      </Load>
  )
}

export default NewsSpinner
const Load = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
width:100% ;
height:650px;
position:relative ;
`;