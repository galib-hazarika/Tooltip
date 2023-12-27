// import "./styles.css";
//importing tooltip component here
import { Tooltip } from "./Tooltip";
import "./App.css";
export default function App() {
  return (
    <div className='App'>
      <Tooltip text={"Thanks for hovering! I'm a tooltip"}>
        <button className='hover'>Hover over me</button>
      </Tooltip>
    </div>
  );
}
