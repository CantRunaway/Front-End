import React from "react";
import "../Main/css/ManagerMainPage.css";
import TopHeader from "../../../etc/Manager_Components/TopHeader";
import Header from "../../../etc/Manager_Components/Header";
import SideMenu from "../../../etc/Manager_Components/SideMenu";
import ManagerSession from "../../../manager/page/Main/components/ManagerMainSession";

function ManagerMainPage() {
  return (
    <div className="ManagerMainPage">
      <header>
        <TopHeader />
      </header>
      <div className="managermain_session">
        <div className="SideMenu">
          <SideMenu />
        </div>
        <div className="ManagerMainSession">
          <Header />
          <ManagerSession />
        </div>
      </div>
    </div>
  );
}

export default ManagerMainPage;
