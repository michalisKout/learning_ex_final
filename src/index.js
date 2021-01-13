import "./styles.css";
import App from './app';

const TABS = ["people", "planets"];
const props = { tabs: TABS}
/* ✅ 1. init our app here ✅ */
document
  .getElementById("app")
  .insertAdjacentHTML("afterbegin", App(props));
