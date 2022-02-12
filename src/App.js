import './App.css';
import TableFromJson from './TableFromJson';

function App() {

  const jsonData = JSON.stringify([{id : 13,job : "Accountant",name: "John" ,target: 4,},{id :103,job : "Developer" ,name : "Mary" ,target : 9,}]);

  return (
    <div className="App">
      <header className="App-header">
        <TableFromJson jsonData={jsonData}/>
      </header>
    </div>
  );
}

export default App;
