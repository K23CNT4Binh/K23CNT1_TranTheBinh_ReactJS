import TtbClassComp from "./components/TtbClassComp";
import TtbFuncComp1 from "./components/TtbFuncComp1";
import TtbFuncCompo from "./components/TtbFuncCompo";


function TtbApp() {
  //object
  const users ={
    fullName:"Kim Bình Mai",
    Age:20,
    Phone:"0978381287",
    Address:"195 Quang Trung"
  }
  return (
    <div className="container border mt-3">
      <h1>Demo Componen - Props - State</h1>
      <hr/>
      <div className="alert alert-danger">
        <TtbFuncCompo name="Bình Gold" address="195 Quang Trung" age="20" />
        <hr/>
        <TtbFuncCompo name="King" address="K23CNT1" age="25" />
      </div>
      <div className="alert alert-info">
        <TtbFuncComp1 renderInfo={users}/>
      </div>
      <TtbClassComp />
      {/*chuyen du lieu tu TtbApp -> xuong TtbClassComp*/}
      <TtbClassComp renderName="K23CNT1" renderUsers={users} />
    </div>
  );
}

export default TtbApp;
