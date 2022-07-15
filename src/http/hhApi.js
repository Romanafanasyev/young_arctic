import {$host} from "./index";

export const getJobsList = async (text_var_1) => {
    const {data} = await $host.get('vacancies?area=64&order_by=relevance&page=0&per_page=6&text='+text_var_1)
    return data
}