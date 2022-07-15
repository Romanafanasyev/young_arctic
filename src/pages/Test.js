import React, {useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {Div, Li, Ul} from "../components/Styles/StyledTest"
import {
    MAIN_ROUTE,
    RESULT_ROUTE,
    TEST_ROUTE
} from "../utils/consts";
import {DATA_questions, DATA_answers, DATA_types} from "../dataStorage/questionaire";
import {observer} from "mobx-react-lite";


const Test =() => {
    const location = useLocation()
    const history = useHistory()
    const [quiz, setQuiz] = useState('yo');

    const [questions, setQuestions] = useState('yo')
    const [indicator, setIndicator] = useState('yo')
    const btnNext = document.getElementById('btnNext');
    const btnResult = document.getElementById('btnResult');
    const btnStart = document.getElementById('btnStart');


    let types = [0,0,0,0,0];
    let localAnswer = 0;



    const start_test = () =>{
        setQuiz(document.getElementById('quiz'))
        setQuestions(document.getElementById('questions'))
        setIndicator(document.getElementById('indicator'))

        renderQuestions(0);
    }

    const finish_test = () =>{
        history.push(RESULT_ROUTE)
    }

    const renderQuestions = (index) => {

        if(questions !== 'yo'){
            btnStart.hidden = true;
            btnNext.hidden = false;
            renderIndicator(index + 1);

            questions.dataset.currentStep = index;

            const renderAnswers = () => DATA_answers
                .map((answer) => `
                    <li>
                        <label >
                            <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                            ${answer.name}
                            
                        </label>
                    </li>
            `
                ).join('');

            questions.innerHTML = `
                <Div class="quiz-question-item">
                    <Div class="quiz-questions-item_question" style="font-size: 25px">${DATA_questions[index].name}</Div>
                    <Ul class="quiz-questions-item_answers" style="list-style: none">${renderAnswers()}</Ul>
                </Div>
            `;
        } else{
            console.log('Try again')
        }
    };

    const renderIndicator = (currentStep) => {
        if(indicator !== 'yo') {
            indicator.innerHTML = `${(currentStep+1)/2}/${(DATA_questions.length+1)/2}`
        }
    };

    if (quiz !== 'yo') {
        quiz.addEventListener('change', (event) => {
            //Логика нажатия
            if (event.target.classList.contains('answer-input')) {

                localAnswer = DATA_answers[event.target.value].value
                console.log(DATA_answers[event.target.value].name);
                btnNext.disabled = false;
                btnResult.disabled = false;
            }
        });

        quiz.addEventListener('click', (event) => {
            //Далее, начать заново
            if (event.target.classList.contains('btn-next') ){

                if (Number.isInteger((Number(questions.dataset.currentStep)+1)/2)){
                    types[DATA_questions[(Number(questions.dataset.currentStep))-1].worker_type] += localAnswer
                    let max_ind = types.indexOf(Math.max.apply(null, types));
                    localStorage.setItem("id", DATA_types[max_ind].id)
                    localStorage.setItem("type", DATA_types[max_ind].name)
                    localStorage.setItem("description", DATA_types[max_ind].description)
                    localStorage.setItem("jobs", DATA_types[max_ind].jobs)
                }

                const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

                if(DATA_questions.length === nextQuestionIndex){
                    btnResult.hidden = false
                    btnNext.hidden = true
                } else {
                    renderQuestions(nextQuestionIndex);
                }

                btnNext.disabled = true;
                console.log('Далее')
            }

            if (event.target.classList.contains('btn-start')){
                console.log('Pressed')
            }

        });
    }
    return(
        <Div className="quiz" id="quiz">
            <Div className="quiz-questions" id="questions">
            </Div>
            <Div className="quiz-indicator" id="indicator">{(DATA_questions.length+1)/2} вопросов</Div>
            <Div className="quiz-controls">
                <button className="btn-next" id="btnNext" disabled hidden={true} >Далее</button>
                <button hidden={true} className="btn-result" id="btnResult" onClick={finish_test}>Узнать результат</button>

                <button className="btn-start" id="btnStart" onClick={start_test}>Начать</button>
            </Div>
            <button onClick={() => history.push(MAIN_ROUTE)}>Назад</button>
        </Div>
    );
};



export default Test;