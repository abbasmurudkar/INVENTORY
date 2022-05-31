import React from 'react'
// import { Badge } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import { Badge, Button, Panel } from 'rsuite';
import styled from 'styled-components';

function NewsItem({ title, desc, image, UrlLink, author, publishedAt }) {
  return (
    <Cards>
       
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300, height: 600 }}>
        <img src={image} height="240" alt='loading' />

        <Panel header={<div>{title} <Badge  content="99+"/> </div>} >


          <p style={{ fontSize: "15px", marginBottom: "10px" }}>
            {desc}..
          </p>
          <p style={{ fontSize: "13px", fontWeight: "Bolder", color: "grey", marginBottom: "10px" }}>
            By {author} on {publishedAt}
          </p>
          <a href={UrlLink} rel="noopener noreferrer" target="_blank">
            <Button size='lg' color='blue' appearance='ghost'>Read More </Button>
          </a>
        </Panel>
      </Panel>
    </Cards>
  )
}

export default NewsItem

const Cards = styled.div`
user-select:none ;
.rs-panel-heading{
  font-size:20px ;


}
.rs-panel-heading, .rs-pannel-body{


}
img{
  max-width:100% ;
  min-height:100% ;
}
button{
/* border:2px solid red   */
margin-top:5px ;
}
`;