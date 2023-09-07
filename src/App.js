import "./App.css";
import TodoTable from "./components/TodoTable";


function App() {
  const todos = [
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User three" },
    { rowNumber: 4, rowDescription: "Charge phone battery", rowAssigned: "User four" },
  ];

  const addTodo=()=>{
  if(todos.length>0){
    const newTodo={
      rowNumber:todos.length+1,
      rowDescription:'New Todo',
    rowAssigned:'User'};
    todos.push(newTodo);
    console.log(todos);
  }

  }

  return (
    <div class="mt-5 container">
      <div class="card">
        <div class="card-header">Your Todo's</div>
        <div class="card-body">
         <TodoTable todos={todos}/>
         <button className='btn btn-primary' onClick={()=>{console.log(addTodo)}}>
          Add new todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
