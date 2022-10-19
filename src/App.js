import {AddTask} from "./components/tasks/AddTask";
import {useEffect, useState} from "react";
import {Task} from "./components/tasks/Task";
import {db} from "./firebase";
import {collection, query, onSnapshot} from 'firebase/firestore';
import {DragDropContext} from "react-beautiful-dnd";
import {Header} from "./components/elements/Header";

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
        console.log(result)
        if (!result.destination) return;
        const items = Array.from(taskList);
        const [reorderData] = items.splice(result.source.index,1);
        items.splice(result.destination.index, 0, reorderData);
        setTaskList(items);
    }

    return (
        <div className="bg-gray-800 p-8 min-h-screen">
            <Header />
            <main className="flex-col tablet:flex-row laptop:flex gap-4 overflow-x-auto">
                <DragDropContext onDragEnd={handleDragEnd}>
                        <div className="w-full laptop:w-1/3">
                            <h3 className="text-white font-black text-lg">TODO</h3>
                            <Task taskList={taskList} status="todo"/>
                        </div>
                        <div className="w-full laptop:w-1/3">
                            <h3 className="text-white font-black text-lg">ACTIVE</h3>
                            <Task taskList={taskList} status="active"/>
                        </div>
                        <div className="w-full laptop:w-1/3">
                            <h3 className="text-white font-black text-lg">DONE</h3>
                            <Task taskList={taskList} status="done"/>
                        </div>
                </DragDropContext>
            </main>
        </div>
    )
}

export default App;