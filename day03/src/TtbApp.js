import TtbClassComp from "./components/TtbClassComp";
import TtbFuncComp from "./components/TtbFuncComp";
import TtbJsxExpression from "./components/TtbJsxExpression";


function TtbAppApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson03 - Trần Thế Bình</h1>
      <TtbJsxExpression/>

      <hr/>
      {/*su dung function component*/}
      <TtbFuncComp/>

      {/*sử dụng class componnent8*/}
      <TtbClassComp/>
    </div>
  );
}

export default TtbAppApp;
