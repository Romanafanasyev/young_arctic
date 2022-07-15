import Main from "./pages/Main";
import Result from "./pages/Result";
import Test from "./pages/Test";
import {
    MAIN_ROUTE,
    RESULT_ROUTE,
    TEST_ROUTE
} from "./utils/consts";

export const publicRoutes = [
    {
        path:MAIN_ROUTE,
        Component: Main
    },
    {
        path:TEST_ROUTE,
        Component: Test
    },
    {
        path:RESULT_ROUTE,
        Component: Result
    },

]