import {AddTask} from "./components/tasks/AddTask";
import {useEffect, useState} from "react";
import {SmallTaskCard} from "./components/tasks/SmallTaskCard";

function App() {
    const [taskList, setTaskList] = useState([]);

    function addToTaskList(newTask) {
        setTaskList(prevState => [...prevState, newTask])
        console.log(taskList)
    }

  return (
      <div className="bg-gray-500 p-4">
        <AddTask addToTaskList={addToTaskList} />
          <SmallTaskCard taskList={taskList}/>
      </div>
  )
}

export default App;