import {AddTask} from "./components/tasks/AddTask";
import {useEffect, useState} from "react";
import {Task} from "./components/tasks/Task";
import {db} from "./firebase";
import {collection, query, onSnapshot} from 'firebase/firestore';
import {DragDropContext} from "react-beautiful-dnd";

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

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(taskList);
        const [reorderData] = items.splice(result.source.index,1);
        items.splice(result.destination.index, 0, reorderData);
        setTaskList(items);
    }

    return (
        <div className="bg-gray-500 p-4">
            <AddTask/>
            <section className="flex gap-4">
                <DragDropContext onDragEnd={handleDragEnd}>
                        <div className="w-1/3 bg-gray-700 p-2">
                            <h3 className="text-white">todo</h3>
                            <Task taskList={taskList}/>
                        </div>
                        <div className="w-1/3 bg-gray-700 p-2">
                            <h3 className="text-white">active</h3>
                        </div>
                        <div className="w-1/3 bg-gray-700 p-2">
                            <h3 className="text-white">done</h3>
                        </div>
                </DragDropContext>
            </section>
        </div>
    )
}

export default App;