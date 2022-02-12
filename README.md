# Dynamic Table from given json 
 ### Problem statement: In this problem you need to create a table similar to what shown in the screenshot below, the column headers and row headers are being added dynamically based on the input. 
 ### You'll be given a JSON input, based on the input
 ###  1. A new row will be added for each unique "Name"
 ###  2. A new column will be added for each unique "Job"
 ###  3.The value of cells will be defined by its corresponding row and column headers and sum of respective "target" fields.

 ### Implementation:.
 ### 1. Used Object as 2D Map for storing the table data.
 ### 2. In total 4 state variable are used to dynamically intialize the table using json.
 ### 2. Used Table Component from Material UI library.
 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [https://dynamic-table-from-json-in-react-js.netlify.app/] to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
