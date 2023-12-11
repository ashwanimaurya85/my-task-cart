import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const Download = ({ tasks }) => {
  const dataSet1 = tasks.filter((task) => task.list === "list1");
  const dataSet2 = tasks.filter((task) => task.list === "list2");
  const dataSet3 = tasks.filter((task) => task.list === "list3");
  const exportToExcel = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
  
    // Convert your list data to a worksheet
    const worksheet1 = XLSX.utils.json_to_sheet(dataSet1);
    const worksheet2 = XLSX.utils.json_to_sheet(dataSet2);
    const worksheet3 = XLSX.utils.json_to_sheet(dataSet3);
    
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet1, 'List 1');
    XLSX.utils.book_append_sheet(workbook, worksheet2, 'List 2');
    XLSX.utils.book_append_sheet(workbook, worksheet3, 'List 3');
  
    // Generate the Excel file buffer
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
    // Convert the buffer to a Blob
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  
    // Save the file using FileSaver.js
    saveAs(blob, 'list.xlsx');
  };
  
  return <button className='export' onClick={exportToExcel}>Export to Excel</button>

};

export default Download;
