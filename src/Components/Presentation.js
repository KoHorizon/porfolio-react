import { useContext } from 'react'
import { GarbageContext } from '../Providers/GarbageProvider'
import './Styles/Presentation.css'




export default function Presentation() {


    const { changeLangage } = useContext(GarbageContext);


    return (
        <>
            <div className="presentation">
                <img className='img' src="/img/rinoshan.png" alt="author" />
                { changeLangage === false ? 
                    <p> Welcome to my portfolio, I am Rinoshan Vijayakumar. Actually a second year 
                        at Epitech Digital to obtain my Bachelor in Manager of Web Project, with 
                        a specialization in Web Development. I have been working on my Development
                        Skill for the past 3 years now. Starting with self-taught skills, followed by
                        joining a School that is specialized in the domain to learn even more. I am at the moment
                        searching for an internship to gain experience in a professional settiing. You'll find below more
                        information on me and my projects.
                    </p>
                : 
                    <p> Bienvenue sur mon portfolio, je suis Rinoshan Vijayakumar. Je suis actuellement étudiant à Epitech Digital en
                        Bachelor manager de projet web, spécialiser en Web
                        développement, et Web développeur en autodidacte
                        depuis plus de trois ans, je suis aujourd’hui à la
                        recherche d’un stage afin de mettre en pratique mes
                        compétences acquises jusqu’à ce jour au sein du
                        monde professionnel.
                    </p>
                }
            </div>
        </>
    )
}