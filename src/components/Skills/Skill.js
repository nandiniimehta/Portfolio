import React from 'react';
import './Skill.css';
import { SkillData } from '../../Data/Data';


const Skill = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>My Skills</span>
            <span className='skillDesc'>Following are my skills.</span>
            <div className='skillBars'>
                <ul style={{ "listStyleType": "square" }} >
                    <div className='skillBar'>
                        <div className='skillBarText'>
                            <li><h2>{SkillData.title1}</h2></li>
                            <p>{SkillData.skills1}</p>
                        </div>

                    </div>
                    <div className='skillBar'>
                        <div className='skillBarText'>
                            <li>   <h2>{SkillData.title2}</h2></li>
                            <p>{SkillData.skills2}</p>
                        </div>
                    </div>
                    <div className='skillBar'>
                        <div className='skillBarText'>
                            <li>   <h2>{SkillData.title3}</h2></li>
                            <p>{SkillData.skills3}</p>
                        </div>

                    </div>
                </ul>
            </div>

        </section>
    )
}

export default Skill
