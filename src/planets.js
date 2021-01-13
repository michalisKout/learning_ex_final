import { appendListOfElements } from "./common";
import planetSrc from './assets/planet.svg';

// 🔨6. build a function to retrieve each planet 🔨
export const Planet = ({ name, climate, population }) => {
  return `<article class="card">
   <img src="${planetSrc}" alt="planet" />
   <h3>Planet Name: ${name}</h2>
   <div>Climate: <strong style="margin-right: 10px;">${climate}</strong></div>
   <div>Population: ${population}</div>
  </article>`;
};

// ⚠️ Planet Element ⚠️
// <article className="card">
//     <img src="/src/assets/planet.svg" alt="planet"/>
//     <h3>Planet Name: </h2>
//     <div>Climate: <strong style="margin-right: 10px;"></strong></div>
//     <div>Population: </div>
// </article>

export const Planets = ({ data }) => {
  // ✅ 9. get a list of planet elements ✅
  const planetList = data.map(Planet);

  // ✅ 5. render Planets content ✅
  return `
     <h2>Planets List</h2>
     ${appendListOfElements(planetList)}
  `;
};
