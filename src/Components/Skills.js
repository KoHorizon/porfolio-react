import { useContext } from "react";
import { skillsDataFr, skillsDataEng } from "../Data/SkillsData"
import { GarbageContext } from "../Providers/GarbageProvider";
import './Styles/Skills.css'




export default function Skills () {

    const { setChangeLanguage , changeLangage } = useContext(GarbageContext);



    return (
        <div className="Skills" id="skills">
            <div>
                <div>
                    { changeLangage === false ? <h2 id="title-project-skill">Here are the  technos i use</h2> : <h2 id="title-project-skill">Voici les technos que j'utilise</h2> }
                </div>
                <div className="content-projects-skills">
                { changeLangage === false ? // if Eng
                        skillsDataEng.map(({img, name, content, alt, css}) => {
                            return (
                                    <div className="skill-box">
                                        <div className={`skill-metadata ${css}`}>
                                            <img src={img} alt={alt} />
                                            <span>{name}</span>
                                        </div>
                                        <div className="content-skills">
                                            <p className="content-skills-para">{content}</p>
                                        </div>
                                    </div>
                            )
                        }) : //else if French
                        skillsDataFr.map(({img, name,content,alt, css}) => {
                            return (
                                    <div className="skill-box">
                                        <div className={`skill-metadata ${css}`}>
                                            <img src={img} alt={alt} />
                                            <span>{name}</span>
                                        </div>
                                        <div className="content-skills">
                                            <p className="content-skills-para">{content}</p>
                                        </div>
                                    </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}