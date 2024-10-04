import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { addDoc, collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore";
import { auth, db } from "../Config/firebaseconfig"

const MainTodo = () => {
    const [todo, setTodo] = useState([]);
    const TodoValue = useRef();

    useEffect(() => {
        async function GetDataFromFirestore() {
            const todosQuery = query(collection(db, "todos"), orderBy("time", "desc")); // Create a query ordered by time
            const querySnapshot = await getDocs(todosQuery);
            const todosArray = [];  // Create an array to hold todos

            querySnapshot.forEach((doc) => {
                todosArray.push({ ...doc.data(), id: doc.id });  // Push each todo into the array
                console.log(doc.data());  // Log the document data for debugging
            });

            setTodo(todosArray);  // Set state once with the collected array
            console.log(todosArray);  // Log the collected todos to verify
        };

        GetDataFromFirestore();
    }, []);
    let addTodo = event => {
        event.preventDefault();
        const newTodo = TodoValue.current.value;
        if (newTodo) {
            setTodo([
                ...todo,
                // id: docRef.id,
                { newTodoValue: newTodo }
            ]);
            async function AddDataFromFireStore() {


                try {
                    const docRef = await addDoc(collection(db, "todos"), {
                        newTodoValue: newTodo,
                        time: Timestamp.fromDate(new Date()),
                        Uid: auth.currentUser.uid  // Store the current user's UID
                    });
                    console.log("Document written with ID: ", docRef.id);
                    // GetDataFromFirestore();


                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
            AddDataFromFireStore()
            // setTodo([...todo, newTodo]);
            TodoValue.current.value = '';
        } else {
            alert(`Please enter something first`);
        }

    };

    function deleteTodo(i) {
        console.log(i);
        
    //     todo.splice(i, 1);
    //     setTodo([...todo]);
    }

    function editTodo(i) {
        console.log(i);
    //     let editTodoValue = prompt(`Enter new value`, todo[i]);
    //     todo.splice(i, 1, editTodoValue);
    //     setTodo([...todo]);
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center">
            <Navbar />
            <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg mt-10">
                <form onSubmit={addTodo} className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Add a todo"
                        ref={TodoValue}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Add
                    </button>
                </form>
                <ul className="space-y-3">
                    {todo.map((item, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
                        >
                            <span>{item.newTodoValue}</span>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => editTodo(index)}
                                    className="px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition duration-300"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteTodo(index)}
                                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MainTodo;
