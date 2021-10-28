import cava from '../video/Cave-45340.mp4'
import people from '../video/People-84973.mp4'
import bike from '../video/Bike-72566.mp4'

const Background = ({onChose}) => {

    return (
        <>
 <video autoPlay loop muted className="video">
            <source src={(onChose) => {
                if(onChose == 'cava'){
                    return cava
                }
            }} type="video/mp4" />
        </video>
        </>
    )
}

export default Background