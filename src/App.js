import {AddTask} from "./components/tasks/AddTask";
import {useEffect, useState} from "react";
import {SmallTaskCard} from "./components/tasks/SmallTaskCard";
import {db} from "./firebase";
import {collection, query, onSnapshot} from 'firebase/firestore'

function App() {
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({
                    ...doc.data(),
                    id: doc.id,
                    title: doc.title
                });
            });
            setTaskList(todosArray)
        });
        return () => unsub();
    }, []);

    function addToTaskList(newTask) {
        setTaskList(prevState => [...prevState, newTask])
    }

    return (
        <div className="bg-gray-500 p-4">
            <AddTask addToTaskList={addToTaskList}/>
            <SmallTaskCard taskList={taskList}/>
        </div>
    )
}

export default App;