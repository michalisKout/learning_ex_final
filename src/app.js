
// 🆘 Lack of Reconciliation 🆘 what changes have been made in the dom? 🤷‍

const App = ({ tabs }) => {

  // Do you remember event bubbling ? 🎈🎈
  // 🔨 2. attach and event listener to element with id 🔸app🔸 and use appEventListener every time a users clicks on it🔨
  document.getElementById("app")

  // ✅ 3. get a list of Button elements from tabs✅
  // const buttonsList = ???;
  return `<h1 class="title">SWAPP</h1>
    <img width="100%" height="500" src="/src/assets/space.svg" alt="space"/> 
    <nav> ♻️ use appendListOfElements helper function to display planetList ♻️ </nav>`;
};

// ⚠️ Did you forget something? ⚠️
