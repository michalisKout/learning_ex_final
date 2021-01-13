import api from "./api";
import { People } from "./people";
import { Planet, Planets } from "./planets";

export const appEventListener = (event) => {
    //🔨 4. verify that tabs are working 🔨
    // console.log(event.target.id);

    //🔨 8. render people elements by clicking on people's tab 🔨
    if (event.target.id === "people") {
        api.addEntities(People, "people");
    }
    //🔨 8. render planets elements by clicking on planets' tab🔨
    if (event.target.id === "planets") {
        api.addEntities(Planets, "planets");
    }

    //🔨 11. render planet info element by clicking on show planet info button🔨
    if (event.target.id === "open-planet") {
        api.addPlanetInfo(Planet, event.target.dataset.planeturl);
    }
};
