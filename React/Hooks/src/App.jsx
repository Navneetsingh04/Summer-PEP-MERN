import "./App.css";
import UseStateDemo from "./components/UseStateDemo";
import UseEffectDemo from "./components/UseEffectDemo";
import UseRefDemo from "./components/UseRefDemo";
import UseMemoDemo from "./components/UseMemoDemo";
import UseCallbackDemo from "./components/UseCallbackDemo";
import UseContextDemo from "./components/UseContextDemo";
import UseReducerDemo from "./components/UseReducerDemo";
import UseLayoutEffect from "./components/UseLayoutEffect";
import CustomHook from "./components/CustomHook";
import ClassComponent from "./LifeCycle/ClassComponent";
import Listner from "./LifeCycle/Listner";
import GithubSearch from "./LifeCycle/GithubSearch";
import StopWatch from "./LifeCycle/StopWatch";
import Watch from "./LifeCycle/Watch";
import CheatingMessage from "./LifeCycle/CheatingMessage";
import Draft from "./LifeCycle/Draft";
import CheckOnline from "./LifeCycle/CheckOnline";
import MemoComp from "./components/MemoComp";
import { useState } from "react";
import CallBackMemo from "./components/CallBackMemo";
import ContextComp from "./context/ContextComp";
import Count from "./Store/Count";
import MultiCounter from "./Store/MultiCounter";
import MultiReducer from "./Store/MultiReducer"
import MultiReducerPayload from "./Store/MultiReducerPayload"
// import Parent from "./hooks/Parent";
import Products from "./hooks/Products";
import Parent from "./globalState/Parent";
function App() {
  const [is,setIs] = useState(false)
  return (
    <>
      {/* <UseStateDemo/> */}
      {/* <UseEffectDemo/> */}
      {/* <UseRefDemo/> */}
      {/* <UseMemoDemo/> */}
      {/* <UseCallbackDemo/> */}
      {/* <UseContextDemo/> */}
      {/* <UseReducerDemo /> */}
      {/* <UseLayoutEffect /> */}
      {/* <CustomHook /> */}
      {/* <ClassComponent /> */}
      {/* <Listner /> */}
      {/* <GithubSearch /> */}
      {/* <StopWatch /> */}
      {/* <Watch /> */}
      {/* <CheatingMessage /> */}
      {/* <Draft /> */}
      {/* <CheckOnline /> */}
      {/* <div>
      <MemoComp is={is}/>      
      <button onClick={() => setIs((prev) => !prev)}>App.js Render</button>
      </div> */}

      {/* <CallBackMemo /> */}
      {/* <ContextComp /> */}
        {/* <Count /> */}
        {/* <MultiCounter />  */}
        {/* <MultiReducer/> */}
      {/* <MultiReducerPayload /> */}

      {/* <Parent/> */}
      {/* <Parent/> */}
      <Products />
    </>
  );
}

export default App;
