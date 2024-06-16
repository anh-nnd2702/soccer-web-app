import { useState, useMemo } from "react";
import Icon from "../../components/common/sIcon/Icon";
import "./sidebar.scss";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__head"></div>
      <div className="sidebar__nav">
        <nav>
          <ul>
            <li>
              <Icon name={"house"} type={"solid"} size={"lg"} />
              <a href="/" className="ms-2">
                All teams
              </a>
            </li>
            <li>
              <a href="/league-stats">League Stats</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
