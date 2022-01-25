import { useContext, useEffect, useState } from "react";
import { GarbageContext } from "../Providers/GarbageProvider";
import LangageSwitcher from "./LangageSwitcher";
import './Styles/Navbar.css'


export default function Navbar () {

    const { setChangeLanguage , changeLangage } = useContext(GarbageContext);
    const [ stockage, setStockage ] = useState('')





    const [activeLink, setActiveLink] = useState('')
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true)

        } else {
            setShow(false)

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    
    return(
        <div className={`nav ${show && 'nav__color'}`} >
            {changeLangage === false ? 
                <div className="nav-option">
                    <a href="#projects" className={`${activeLink === 'projects'  && 'active'}`} onClick={() => setActiveLink('projects')}>Projects</a>
                    <a href="#skills" className={`${activeLink === 'skills'  && 'active'}`} onClick={() => setActiveLink('skills')}>Skills </a>
                </div>
            :  
                <div className="nav-option">
                    <a href="#projects" className={`${activeLink === 'projects'  && 'active'}`} onClick={() => setActiveLink('projects')}>Projet</a>
                    <a href="#skills" className={`${activeLink === 'skills'  && 'active'}`} onClick={() => setActiveLink('skills')}>Compétence </a>
                </div>
            }
            <div className="switcher">
                <LangageSwitcher/>
            </div>
        </div>
    )
}