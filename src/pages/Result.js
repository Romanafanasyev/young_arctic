import React from 'react';
import types from './Test'
import {Div, Ul, Li} from '../components/Styles/StyledResult'
import {DATA_jobs} from "../dataStorage/questionaire";

const Result = () => {
    var res_type = localStorage.getItem("type")
    var res_desc = localStorage.getItem("description")
    var res_jobs = localStorage.getItem("jobs")
    var res_id = localStorage.getItem("id")

    return(
        <Div>
            <Div className="Header">
                <h1> Ваш тип: {res_type}</h1>
                <p>Описание: {res_desc}</p>
            </Div>
            <Ul className="jobs">
                <Li classname="job_item">
                    <div>
                        <h1>{DATA_jobs[res_id][0].name}</h1>
                        <p>{DATA_jobs[res_id][0].description}</p>
                        <p className="salary">{DATA_jobs[res_id][0].salary}</p>
                        <button>Откликнуться</button>
                    </div>

                </Li>
                <Li classname="job_item">
                    <div>
                        <h1>Job 2</h1>
                        <p>Job description 2</p>
                        <button>Откликнуться</button>
                    </div>
                </Li>
            </Ul>
        </Div>
    );
};

export default Result;