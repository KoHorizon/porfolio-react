import { useContext, useState } from "react"
import { projectsDataFr , projectsDataEng } from "../Data/ProjectDatas"
import { GarbageContext } from "../Providers/GarbageProvider";
import './Styles/Projects.css'


export default function Projects () {

    const { setChangeLanguage , changeLangage } = useContext(GarbageContext);


    return (
        <>
            <div className="projects" id="projects">
                <div>
                { changeLangage === false ? <h2 id="title-project">Here are my projects</h2> : <h2 id="title-project">Voici mes projets</h2> }
                </div>
                <div className="content-projects">
                    { changeLangage === false ? // if Eng
                    projectsDataEng.map(({img, name,content,link, alt}) => {
                        return (
                            <a className="link" href={link}  target='_blank' rel="noreferrer">
                                <div className="projects-box">
                                    <div className="project-metadata">
                                        <img src={img} alt={alt} />
                                        <span>{name}</span>
                                    </div>
                                    <div className="content">
                                        <p className="content-para">{content}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    }) : //else if French
                    projectsDataFr.map(({img, name,content,link,alt}) => {
                        return (
                            <a className="link" href={link} target='_blank' rel="noreferrer">
                                <div className="projects-box">
                                    <div className="project-metadata">
                                        <img src={img} alt={alt} />
                                        <span>{name}</span>
                                    </div>
                                    <div className="content">
                                        <p className="content-para">{content}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        
        </>
    )
}