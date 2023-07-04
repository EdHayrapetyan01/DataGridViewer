import { parseCSV } from './csvUtils';

// eslint-disable-next-line import/prefer-default-export
export const handleFileUpload = (file, setData) => {
  parseCSV(file, (rows, columns) => {
    const dataColumns = columns.map((header) => ({
      field: header,
      headerName: header,
      width: 150,
      editable: true,
    }));

    setData({
      rows,
      columns: dataColumns,
      showExportButton: true,
    });
  });
};
