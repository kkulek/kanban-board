import {AddTask} from "./components/tasks/AddTask";
import React, {useEffect, useState} from "react";
import {Task} from "./components/tasks/Task";
import {db} from "./firebase";
import {collection, query, onSnapshot} from 'firebase/firestore';
import {DragDropContext} from "react-beautiful-dnd";
import {Header} from "./components/elements/Header";
import {Footer} from "./components/elements/Footer";

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
        <div className="bg-gray-800 py-2 min-h-screen relative w-full">
            <Header/>
            <main className="flex-col tablet:flex-row laptop:flex gap-4 overflow-x-auto px-8 min-h-screen">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="w-full">
                        <h3 className="text-white font-black text-lg mt-5 laptop:mt-3">BACKLOG<span className="font-black ml-0.5 text-yellow-500">:</span></h3>
                        <Task taskList={taskList} status=""/>
                    </div>
                        <div className="w-full">
                            <h3 className="text-white font-black text-lg mt-10 laptop:mt-3">TODO<span className="font-black ml-0.5 text-blue-500">:</span></h3>
                            <Task taskList={taskList} status="todo"/>
                        </div>
                        <div className="w-full">
                            <h3 className="text-white font-black text-lg mt-10 laptop:mt-3">ACTIVE<span className="font-black ml-0.5 text-red-300">:</span></h3>
                            <Task taskList={taskList} status="active"/>
                        </div>
                        <div className="w-full">
                            <h3 className="text-white font-black text-lg mt-10 laptop:mt-3">DONE<span className="font-black ml-0.5 text-green-500">:</span></h3>
                            <Task taskList={taskList} status="done"/>
                        </div>
                </DragDropContext>
            </main>
            <Footer />
        </div>
    )
}

export default App;