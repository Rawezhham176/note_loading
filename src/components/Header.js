import { useState } from "react"
import { Link } from "react-router-dom"
import List from "./List"
import Home from "../pages/Home"
import '../css/header.css'

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [menuBack, setMenuBack] = useState("none")

    const clas = openMenu == true ? "open" : ""
    const MenuBack = openMenu ? true : false



    return (
        <>
 <div>
             <div style={{
            display: MenuBack ? "block" : menuBack,
            width: "100%",
            position: "absolute",
            height: "100%",
            float: "right",
            left: "50",
            right: "80",
            zIndex: "100",
            backgroundColor: "rgba(0,0,0,0.8)",
            transitionTimingFunction: "3s"
            }} onClick={() => {
                if(MenuBack){
                    setOpenMenu(false)
                }
            } }> 
                  <ul className="menuList">
                    
                    <li><List /></li>
                    
                </ul>
            </div>
            
        </div>
        <header>
            <h1 className="headline"><Link to={'/'}
            style={{ textDecoration: 'none', color: 'white' }}>Future</Link></h1>
            <div className={`${clas} menu_btn`} onClick={() => {
                if(openMenu){
                    setOpenMenu(false)
                } else {
                    setOpenMenu(true)
                }
            }}>
                <div className="menu_burge"></div>
            </div>
        </header>
        </>
        
    )
}

export default Header