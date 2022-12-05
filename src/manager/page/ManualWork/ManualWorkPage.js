import React from "react";
import "../ManualWork/css/ManualWorkPage.css";
import TopHeader from "../../../etc/Manager_Components/TopHeader";
import SideMenu from "../../../etc/Manager_Components/SideMenu";
import Header from "../../../etc/Manager_Components/Header";
import ManualWorkSession from "./components/ManualWorkSession";

function ManualWorkPage() {
  return (
    <div className="ManualWorkPage">
      {/* 최상위 상단 */}
      <header>
        <TopHeader />
      </header>
      <div className="manualwork_session">
        {/* 사이드 메뉴 */}
        <div className="SideMenu">
          <SideMenu />
        </div>
        <div className="ManualWorkSession">
          {/* 상단 */}
          <Header />
          {/* 관리자 메인 영역 */}
          <ManualWorkSession />
        </div>
      </div>
    </div>
  );
}

export default ManualWorkPage;
