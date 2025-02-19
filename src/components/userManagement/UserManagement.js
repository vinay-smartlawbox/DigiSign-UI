import React, { useRef, useState, useMemo } from "react";
import InclineGraph from "../../assets/svg/InclineGraph";
import Billable from "../../assets/svg/Billable";
import NonBillable from "../../assets/svg/NonBillable";
import Beneficiaries from "../../assets/svg/Beneficiaries";
import Options from "../../assets/svg/Options";
import "../../styles/UserManagement.scss";
import TableComponent from "../common/table/TableComponent";

const UserManagement = () => {
  const menuRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOptionsClick = (event) => {
    debugger;
    const { top, left } = event.currentTarget.getBoundingClientRect();
    menuRef.current.style.top = `${top - 35}px`;
    menuRef.current.style.left = `${left - 100}px`;
    toggleMenu();
  };

  const toggleMenu = () => {
    menuRef.current.style.display = !openMenu ? "flex" : "none";
    setOpenMenu(!openMenu);
  };

  const sendSignRequest = () => {
    alert("sending sign request");
    toggleMenu();
  };

  const getStatus = (status) => {
    let statusClass = "status-box ";
    switch (status) {
      case "Signed":
        statusClass += "green-bg";
        break;
      case "Unsigned":
        statusClass += "red-bg";
        break;
      case "Signing":
        statusClass += "orange-bg";
        break;
      default:
        statusClass += "";
    }
    return <div className={statusClass}>{status}</div>;
  };

  const getActions = () => {
    return (
      <div className="action-button">
        <button className="icon-button" onClick={handleOptionsClick}>
          <Options />
        </button>
      </div>
    );
  };
  const rowData = useMemo(
    () => [
      {
        firstName: "Srinavas",
        lastName: "Patel",
        email: "SrinivasParsi64@gmail.com",
        company: "NTTData",
        status: "Signed",
      },
      {
        firstName: "Srinavas",
        lastName: "Patel",
        email: "SrinivasParsi64@gmail.com",
        company: "NTTData",
        status: "Unsigned",
      },
      {
        firstName: "Srinavas",
        lastName: "Patel",
        email: "SrinivasParsi64@gmail.com",
        company: "NTTData",
        status: "Signing",
      },
      {
        firstName: "Srinavas",
        lastName: "Patel",
        email: "SrinivasParsi64@gmail.com",
        company: "NTTData",
        status: "Signed",
      },
      {
        firstName: "Srinavas",
        lastName: "Patel",
        email: "SrinivasParsi64@gmail.com",
        company: "NTTData",
        status: "Signed",
      },
      {
        firstName: "Srinavas",
        lastName: "Patel",
        email: "SrinivasParsi64@gmail.com",
        company: "NTTData",
        status: "Signed",
      },
      {
        firstName: "Srinavas",
        lastName: "Patel",
        email: "SrinivasParsi64@gmail.com",
        company: "NTTData",
        status: "Signed",
      },
      {
        firstName: "Srinavas",
        lastName: "Patel",
        email: "SrinivasParsi64@gmail.com",
        company: "NTTData",
        status: "Signed",
      },
    ],
    []
  );
  const colDefs = useMemo(
    () => [
      {
        headerName: "First Name",
        field: "firstName",
        minWidth: 150,
        flex: 1,
        filter: true,
      },
      {
        headerName: "Last Name",
        field: "lastName",
        minWidth: 150,
        flex: 1,
        filter: true,
      },
      { headerName: "Email", field: "email", minWidth: 200, flex: 2 },
      { headerName: "Company", field: "company", minWidth: 150, flex: 1 },
      {
        field: "status",
        minWidth: 110,
        cellRenderer: (params) => getStatus(params.value),
        flex: 1,
      },
      {
        headerName: "",
        field: "actions",
        cellRenderer: () => getActions(),
        minWidth: 100,
        flex: 1,
      },
    ],
    [openMenu]
  );

  return (
    <div className="page-block">
      <div className="page-main-header">Dashboard</div>
      <div className="card-block">
        <div className="data-card">
          <div className="card-title">Signed Users</div>
          <div className="card-info">10</div>
          <div className="card-desc">
            <div className="card-icon">
              <InclineGraph />
              8.7%
            </div>
            up from last month
          </div>
          <div className="card-logo">
            <Billable />
          </div>
        </div>
        <div className="data-card">
          <div className="card-title">Unsigned Users</div>
          <div className="card-info">8</div>
          <div className="card-desc">
            <div className="card-icon">
              <InclineGraph />
              8.7%
            </div>
            up from last month
          </div>
          <div className="card-logo-glow">
            <div className="card-logo">
              <NonBillable />
            </div>
          </div>
        </div>
        <div className="data-card">
          <div className="card-title">Signing Users</div>
          <div className="card-info">5</div>
          <div className="card-desc">
            <div className="card-icon">
              <InclineGraph />
              8.7%
            </div>
            up from last month
          </div>
          <div className="card-logo-glow">
            <div className="card-logo">
              <Beneficiaries />
            </div>
          </div>
        </div>
      </div>
      <TableComponent
        rowData={rowData}
        columnDefs={colDefs}
        pagination={true}
      />
      <div ref={menuRef} className="menu-card">
        <button className="menu-card-item" onClick={sendSignRequest}>
          Send document for signature
        </button>
        <button className="menu-card-item">Download</button>
        <button className="menu-card-item">Void</button>
        <button className="menu-card-item">Delete</button>
      </div>
      {openMenu && (
        <div className="menu-toggle-container" onClick={toggleMenu}></div>
      )}
    </div>
  );
};

export default UserManagement;
