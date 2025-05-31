import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPython,faFiv} from '../utils/icons'

function Experience(){
    return(
        <div className="Experience-div">
            <h3>Experience</h3>
            <div className="Experience-component">
                <ul>
                    <li><FontAwesomeIcon icon={faPython} /></li>
                </ul>

            </div>
        </div>
    )
}

export default Experience