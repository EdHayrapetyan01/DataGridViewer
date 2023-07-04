/* eslint-disable no-undef */
// eslint-disable-next-line import/prefer-default-export
export const parseCSV = (file, callback) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const content = e.target.result;
    const rows = content.split('\n');
    const headers = rows[0].split(',');
    const data = rows.slice(1).map((row, index) => ({
      id: index + 1,
      ...row.split(','),
    }));
    callback(data, headers);
  };
  reader.readAsText(file);
};
