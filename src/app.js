import { appEventListener } from "./eventListeners";
import { Button, appendListOfElements } from "./common";
import spaceSrc from './assets/space.svg';

// 🆘 Lack of Reconciliation 🆘 what changes have been made in the dom? 🤷‍

const App = ({ tabs }) => {
  // Do you remember event bubbling ? 🎈🎈
  // 🔨 2. attach and event listener to element with id 🔸app🔸 and use appEventListener every time a users clicks on it🔨
  document.getElementById("app").addEventListener("click", appEventListener);

  // ✅ 3. get a list of Button elements from tabs✅
  const buttonsList = tabs.map((tab) => Button({ name: tab }));

  return `<h1 class="title">SWAPP</h1>
    <img width="100%" height="500" src="${spaceSrc}" alt="space"/> 
    <nav>${appendListOfElements(buttonsList)}</nav>
    `;
};

// ⚠️ Did you forget something? ⚠️
export default App;
