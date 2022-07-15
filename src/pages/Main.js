import React from 'react';
import {
    MAIN_ROUTE,
    RESULT_ROUTE,
    TEST_ROUTE
} from "../utils/consts";
import {useHistory, useLocation} from "react-router-dom";
import {Ul, Li} from "../components/Styles/StyledMain"


const Main = () => {
    const location = useLocation()
    const history = useHistory()
    return(
        <Ul>
            <Li>
                <div>
                    <h1>TEST 1</h1>
                    <p>Пройди простой тест, и узнай, <br/> какое направление тебе подходит</p>
                    <button onClick={() => history.push(TEST_ROUTE)}>Пройти</button>
                </div>
            </Li>

            <Li>
                <div>
                    <h1>TEST 2</h1>
                    <p>Пройди простой тест, и узнай, <br/> какое направление тебе подходит</p>
                    <button onClick={() => history.push(TEST_ROUTE)}>Пройти</button>
                </div>
            </Li>

            <Li>
                <div>
                    <h1>TEST 3</h1>
                    <p>Пройди простой тест, и узнай, <br/> какое направление тебе подходит</p>
                    <button onClick={() => history.push(TEST_ROUTE)}>Пройти</button>
                </div>
            </Li>
        </Ul>
    );
};

export default Main;