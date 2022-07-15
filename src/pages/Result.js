import React from 'react';
import types from './Test'
import {Div, Ul, Li, Button} from '../components/Styles/StyledResult'
import {DATA_jobs} from "../dataStorage/questionaire";
import {MAIN_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const Result = () => {
    var res_type = localStorage.getItem("type")
    var res_desc = localStorage.getItem("description")
    var res_jobs = localStorage.getItem("jobs")
    var res_id = localStorage.getItem("id")

    const history = useHistory()

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
                        <h1>{DATA_jobs[res_id][1].name}</h1>
                        <p>{DATA_jobs[res_id][1].description}</p>
                        <p className="salary">{DATA_jobs[res_id][1].salary}</p>
                        <button>Откликнуться</button>
                    </div>
                </Li>
            </Ul>
            <Button className="btnDiv"  onClick={() => history.push(MAIN_ROUTE)}> Назад</Button>
        </Div>
    );
};

export default Result;