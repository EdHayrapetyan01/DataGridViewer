import React, { useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { handleFileUpload } from '../utils/fileUtils';

function DataGridContainer() {
  const [data, setData] = useState({
    rows: [],
    columns: [],
    showExportButton: false,
  });

  const handleEditCellChange = (params) => {
    const updatedRows = data.rows.map((row) => {
      if (row.id === params.id) {
        return { ...row, [params.field]: params.props.value };
      }
      return row;
    });
    setData({ ...data, rows: updatedRows });
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        {data.showExportButton && <GridToolbarExport />}

        <input
          type="file"
          accept=".csv"
          onChange={(event) => handleFileUpload(event.target.files[0], setData)}
        />
      </GridToolbarContainer>
    );
  }

  return (
    // TODO: remove inline style
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data.rows}
        columns={data.columns}
        hideFooter
        slots={{ toolbar: CustomToolbar }}
        onEditCellChangeCommitted={handleEditCellChange}
      />
    </div>
  );
}

export default DataGridContainer;
