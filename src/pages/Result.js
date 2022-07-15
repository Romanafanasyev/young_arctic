import React, {useState} from 'react';
import types from './Test'
import {Div, Ul, Li, Button, A} from '../components/Styles/StyledResult'
import {DATA_answers, DATA_jobs, DATA_questions} from "../dataStorage/questionaire";
import {MAIN_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import {getJobsList} from "../http/hhApi";

const Result = () => {
    var res_type = localStorage.getItem("type")
    var res_desc = localStorage.getItem("description")
    var res_jobs = localStorage.getItem("jobs")
    var res_id = localStorage.getItem("id")
    const [dataArray, setDataArray] = useState({items: [{name: "Нажми Посмотреть вакансию", snippet:{requirement: "Здесь будет описание вакансии"}, salary:{to:"Зарплата"}, alternate_url:"google.com"}]})

    const getUnitArray = async () => {
        let data
        data = await getJobsList(res_jobs[0]).then(data => setDataArray(data))
    }


    console.log(dataArray)
    const renderJobItems = () => {
        if(dataArray !== []){
            return(
                <Ul className="jobs">
                    {dataArray.items.map( item =>
                        (item)?
                            <Li classname="job_item">
                                <div>
                                    <h1>{item.name}</h1>
                                    <p>{item.snippet.requirement}</p>
                                    <p className="salary">{item.salary.to ? item.salary.to :" З/П не указана"}</p>
                                    <button><A href={item.alternate_url} target="_blank">Откликнуться</A></button>
                                </div>

                            </Li>
                            :
                            ""
                    )}
                </Ul>
            );
        } else{
            return(
                <p>Empty</p>
            );
        }

    };

    const history = useHistory()

    return(
        <Div>
            <Div className="Header">
                <h1> Ваш тип: {res_type}</h1>
                <p>Описание: {res_desc}</p>
            </Div>
            {renderJobItems()}
            <Button className="btnDiv_jobs" onClick={() =>  getUnitArray()}>Посмотреть вакансии</Button>
            <Button className="btnDiv"  onClick={() => history.push(MAIN_ROUTE)}> Назад</Button>
        </Div>
    );
};

export default Result;