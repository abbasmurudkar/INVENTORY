import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import NewsItem from './StocksNews/NewsItem';
import { Button } from 'react-bootstrap';
import NewsSpinner from './StocksNews/NewsSpinner';
function StocksNews({ pageSize }) {
  const [article, setarticle] = useState([])
  const [Loading, setisLoading] = useState(true)
  const [Page, setPage] = useState(1)
  const [TotalResult, setTotalResult] = useState()
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=stocks&apiKey=8320b093c2e44f0eb28a6e02ffa677b0&page=${Page}&pageSize=${pageSize}`)
    .then(res=>res.json())
    .then((data)=> {
      const articles = data.articles
      const total = data.totalResults
      setarticle(articles)
      console.log(data)
      setisLoading(false)
      setTotalResult(total)
    })
  }, [Page, pageSize])
  const onHandleNextClick = async () => {
    if (Page > Math.ceil(TotalResult / pageSize)) {

    }
    else {
      setPage(Page + 1)
      setisLoading(true)
    }
  }
  const onHandlePreviousClick = async () => {
    setPage(Page - 1)
    setisLoading(true)
  }
  return (
    <News>
      <div className='row'>
        {Loading && <NewsSpinner />}
     
        {!Loading && article.map((item, index) => {
          return (
            <div key={index} className='col-md-4'>
              <NewsItem title={item.title ? item.title : "No Title"} desc={item.description ? item.description.slice(0, 180) : ""} publishedAt={item.publishedAt} author={item.author ? item.author : "Unknown"} image={item.urlToImage ? item.urlToImage : "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"} UrlLink={item.url} />
            </div>
          )
        })}
      
      </div>
      <div className='container d-flex justify-content-between'>
        <Button variant='dark' disabled={Page <= 1} onClick={onHandlePreviousClick}>&larr; Previous</Button>
        <Button variant='dark' onClick={onHandleNextClick}>Next &rarr;</Button>

      </div>
    </News>
  )
}

export default StocksNews

const News = styled.div`
margin-top:100px;
height:100% ;
padding:10px ;

`;