import './App.css';
import TableFromJson from './TableFromJson';

function App() {

  const jsonData = JSON.stringify(
    [
      {
        id : 13,
        job : "Accountant",
        name: "John",
        target: 4
      },
      {
        id :103,
        job : "Developer",
        name : "Mary",
        target : 9
      },
      {
       id:18,
       job:"Developer",
       name:"John",
       target: 7
      },
      {
        id:85,
        job:"Architect",
        name:"Dave",
        target: 3
      },
      {
        id:39,
        job:"Developer",
        name:"Mary",
        target: 16
      },
    ]
    );

  return (
    <div className="App">
      <header className="App-header">
        <TableFromJson jsonData={jsonData}/>
      </header>
    </div>
  );
}

export default App;
