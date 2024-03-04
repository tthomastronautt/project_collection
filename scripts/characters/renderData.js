import { gridTemplate, listTemplate } from "./templates.js";
import { toggleView, modal, accordion, grid, list } from "./functions.js";
import charactersData from "./fetchData.js";

const renderData = {};

renderData.init = async () => {

    const data = await charactersData.fetchData ();

    data.forEach((key) => {
        grid.insertAdjacentHTML('beforeend', gridTemplate(key));
        list.insertAdjacentHTML('beforeend', listTemplate(key));
    });

    toggleView();
    modal();
    accordion();
};

export default renderData