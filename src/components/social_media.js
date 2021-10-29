import { Link } from "react-router-dom"
import '../css/social_media.css' 

const Social = () => {

    return (
        <>
        <link rel="stylesheet" 
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
        crossorigin="anonymous"/>
        <ul className="menuListSocial">
            <li><h3 classNasme="listItem" style={{color: "white", fontSize: "30px"}}><a href="https://www.facebook.com/ambert.klay" ><i class="fab fa-facebook-square"></i></a> /rawezh ham</h3></li>
            <li><h3 className="" style={{color: "white", fontSize: "30px"}}><a href="https://www.instagram.com/rawezh_ham" ><i class="fab fa-instagram"></i></a> /rawezh_ham</h3></li>
            <li><h3 className="" style={{color: "white", fontSize: "30px"}}><a href="https://de.linkedin.com/in/rawezh-hama-404778211" ><i class="fab fa-linkedin"></i></a> /rawezh hama</h3></li>
            <li><h3 className="" style={{color: "white", fontSize: "30px"}}><a href="https://www.xing.com/profile/Rawezh_Hama2" ><i class="fab fa-xing"></i></a> /rawezh hama</h3></li>
            <li onClick={() => { alert("rawezhhame@gmail.com")}}><h3 className=""><i class="fas fa-at"></i></h3></li>
        </ul>
        </>
        
    )
}

export default Social    
    