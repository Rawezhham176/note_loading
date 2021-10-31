import Header from '../components/Header'
import '../css/news.css'
import binary from '../video/Binary-29078.mp4'
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef, useState } from 'react';
import Tilt from 'react-vanilla-tilt'
import { Route } from 'react-router-dom';
import NewsItem from '../components/News_item';

const News = () => {



function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

 const options = {
    scale: 1.1,
    speed: 10000,
    perspective: 10
  };


 

    /** 
     *    const [news, setNews] = useState([])
  useEffect(() => {
    const getNews = async () => {
      const newsFromServer = await fetchNews()
      setNews(newsFromServer)
    }

    getNews()
  }, [])

  // Fetch Tasks
  const fetchNews = async () => {
    const res = await fetch('http://localhost:8000/newses')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchNewses = async (id) => {
    const res = await fetch(`http://localhost:8000/newses/${id}`)
    const data = await res.json()
    return data
  }
  */

    return (
        <>
        <Header />
        <video autoPlay loop muted className="video">
            <source src={binary} type="video/mp4" />
        </video>
  

       <Tilt options={{ scale: 1.1, max: 5 }}>
    <div className='boxy'>
  <div className='box'>
        <NewsItem />
          </div>
  </div>
  </Tilt>
        

        <div className='someSpace'></div>
        </>

    )
}

export default News

//         