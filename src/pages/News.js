import Header from '../components/Header'
import '../css/news.css'
import binary from '../video/Binary-29078.mp4'
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';
import Tilt from 'react-vanilla-tilt'

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
    max: 10,
    perspective: 1000
  };

    return (
        <>
        <Header />
        <video autoPlay loop muted className="video">
            <source src={binary} type="video/mp4" />
        </video>
  

<Tilt options={{ scale: 1.2, max: 5 }}>
    <div className='boxy'>
  <div className='box'>
    <h1 style={{color: "white"}}>In next days here will be some news</h1>
  </div>
  </div>
</Tilt>
        </>
    )
}

export default News