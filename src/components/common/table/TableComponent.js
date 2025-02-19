import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "../../../styles/Table.scss";

const TableComponent = ({ rowData, columnDefs }) => {
  ModuleRegistry.registerModules([AllCommunityModule]);
  const defaultColDef = {
    cellStyle: {
      padding: "5px 0 5px 10px",
      display: "flex",
      alignItems: "center",
    },
    headerStyle: { padding: "0px 10px 0px 10px" },
    autoHeight: true,
    autoHeaderHeight: true,
  };
  return (
    <div className="table-block">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default React.memo(TableComponent);
