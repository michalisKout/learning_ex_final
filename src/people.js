import { appendListOfElements } from "./common";
import profileSrc from './assets/profile.svg';

// 🔨6. build a function to retrieve each person 🔨
export const Person = ({ name, height, mass, homeworld, eye_color }) => {
  return ` <article class="card">
    <img src="${profileSrc}" alt="person-image"/>
    <h3>Hero Name: ${name}</h2>
    <div>Body: <strong style="margin-right: 10px;">${height}</strong>cm | <strong>${mass}</strong> kg/ft</div>
    <div class="eyes_color">Eye Color: <div class="eye_color--container" style="background: ${eye_color} "></div>
    </div>
    <div>Home world: <button id="open-planet" data-planeturl=${homeworld}> Show planet info </button></div>
</article>`;
};

// ⚠️ Person Element ⚠️
// <article class="card">
//     <img src="/src/assets/profile.svg" alt="person-image"/>
//     <h3>Hero Name: </h2>
//     <div>Body: <strong style="margin-right: 10px;">height</strong>cm | <strong>mass</strong> kg/ft</div>
//     <div class="eyes_color">Eye Color: <div class="eye_color--container" style="background: "></div>
//     </div>
//     <div>Homeworld: <button id="open-planet" ✅ 10. add data attribute to transfer info with click event ✅> Show planet info </button></div>
// </article>


export const People = ({ data }) => {
  // ✅ 9. get a list of planet elements ✅
  const peopleList = data.map(Person);

  // ✅ 5. render People content ✅
  return `
     <h2>People List</h2>
      ${appendListOfElements(peopleList)}
     `;
};
