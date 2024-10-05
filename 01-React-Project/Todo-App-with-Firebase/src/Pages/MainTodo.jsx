// import React, { useState, useRef, useEffect } from 'react';
// import Navbar from '../Components/Navbar';
// import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, Timestamp, updateDoc } from "firebase/firestore";
// import { auth, db } from "../Config/firebaseconfig"

// const MainTodo = () => {
//     const [todo, setTodo] = useState([]);
//     const TodoValue = useRef();

//     useEffect(() => {
//         async function GetDataFromFirestore() {
//             const todosQuery = query(collection(db, "todos"), orderBy("time", "desc")); // Create a query ordered by time
//             const querySnapshot = await getDocs(todosQuery);
//             const todosArray = [];  // Create an array to hold todos

//             querySnapshot.forEach((doc) => {
//                 todosArray.push({ ...doc.data(), id: doc.id });  // Push each todo into the array
//                 console.log(doc.data());  // Log the document data for debugging
//             });

//             setTodo(todosArray);  // Set state once with the collected array
//             console.log(todosArray);  // Log the collected todos to verify
//         };

//         GetDataFromFirestore();
//     }, []);
//     let addTodo = event => {
//         event.preventDefault();
//         const newTodo = TodoValue.current.value;
//         if (newTodo) {
//             setTodo([
//                 ...todo,
//                 // id: docRef.id,
//                 { newTodoValue: newTodo }
//             ]);
//             async function AddDataFromFireStore() {


//                 try {
//                     const docRef = await addDoc(collection(db, "todos"), {
//                         newTodoValue: newTodo,
//                         time: Timestamp.fromDate(new Date()),
//                         Uid: auth.currentUser.uid  // Store the current user's UID
//                     });
//                     console.log("Document written with ID: ", docRef.id);
//                     // GetDataFromFirestore();


//                 } catch (e) {
//                     console.error("Error adding document: ", e);
//                 }
//             }
//             AddDataFromFireStore()
//             // setTodo([...todo, newTodo]);
//             TodoValue.current.value = '';
//         } else {
//             alert(`Please enter something first`);
//         }

//     };
//     const deleteTodo = async (i) => {
//         const todoToDelete = todo[i];
//         // newTodo=''
//         if (todoToDelete) {
//             await deleteDoc(doc(db, "todos", todoToDelete.id));
//             console.log("Data deleted");
//             setTodo((prev) => prev.filter((_, index) => index !== i)); // Update state to remove deleted todo
//         }
//     };

//     const editTodo = async (i) => {
//         const todoToEdit = todo[i];
//         if (todoToEdit) {
//             console.log('edit start',i);

//             const updatedTodo = prompt('enter new todo',todo[i].newTodoValue)
//             if (updatedTodo !== null && updatedTodo.trim() !== "") {
//                 const dataUpdate = doc(db, "todos", todoToEdit.id);
//                 await updateDoc(dataUpdate, { newTodoValue: updatedTodo });
//                 setTodo((prev) => {
//                     console.log(prev);

//                     const newTodos = [...prev];
//                     newTodos[i].newTodoValue = updatedTodo; // Update the specific todo
//                     return newTodos;
//                 });
//                 console.log("Data updated");
//             }
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center">
//             <Navbar />
//             <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg mt-10">
//                 <form onSubmit={addTodo} className="flex gap-2 mb-6">
//                     <input
//                         type="text"
//                         placeholder="Add a todo"
//                         ref={TodoValue}
//                         className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button
//                         type="submit"
//                         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
//                     >
//                         Add
//                     </button>
//                 </form>
//                 <ul className="space-y-3">
//                     {todo.map((item, index) => (
//                         <li
//                             key={index}
//                             className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
//                         >
//                             <span>{item.newTodoValue}</span>
//                             <div className="flex space-x-2">
//                                 <button
//                                     onClick={() => editTodo(index)}
//                                     className="px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition duration-300"
//                                 >
//                                     Edit
//                                 </button>
//                                 <button
//                                     onClick={() => deleteTodo(index)}
//                                     className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default MainTodo;




import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Swal from 'sweetalert2';
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, Timestamp, updateDoc } from "firebase/firestore";
import { auth, db } from "../Config/firebaseconfig"

const MainTodo = () => {
    const [todo, setTodo] = useState([]);
    const [isEditing, setIsEditing] = useState(false);  // State to handle edit mode
    const [editIndex, setEditIndex] = useState(null);   // To keep track of which todo is being edited
    const [currentTodo, setCurrentTodo] = useState(''); // Store the current value of todo for both adding and editing
    const TodoValue = useRef();

    useEffect(() => {
        async function GetDataFromFirestore() {
            const todosQuery = query(collection(db, "todos"), orderBy("time", "asc"));
            const querySnapshot = await getDocs(todosQuery);
            const todosArray = [];
            querySnapshot.forEach((doc) => {
                todosArray.push({ ...doc.data(), id: doc.id });
            });
            setTodo(todosArray);
        };

        GetDataFromFirestore();
    }, []);

    const addTodo = async (event) => {
        event.preventDefault();
        const newTodo = currentTodo;  // Use state for both add and edit
        if (newTodo) {
            if (isEditing) {
                console.log(isEditing,'isEditing');
                
                // Editing existing todo
                const todoToEdit = todo[editIndex];
                if (todoToEdit) {
                    console.log(todoToEdit,'todoToEdit',todo[editIndex],'todo[editIndex]');
                    
                    const dataUpdate = doc(db, "todos", todoToEdit.id);
                    await updateDoc(dataUpdate, { newTodoValue: newTodo });
                    setTodo((prev) => {
                        const newTodos = [...prev];
                        newTodos[editIndex].newTodoValue = newTodo;
                        return newTodos;
                    });
                    setIsEditing(false);  // Exit edit mode
                    setEditIndex(null);   // Reset edit index
                    setCurrentTodo('');   // Clear input field
                }
            } else {
                // Adding new todo
                try {
                    const docRef = await addDoc(collection(db, "todos"), {
                        newTodoValue: newTodo,
                        time: Timestamp.fromDate(new Date()),
                        Uid: auth.currentUser.uid
                    });
                    setTodo([...todo, { newTodoValue: newTodo, id: docRef.id }]);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
            setCurrentTodo('');  // Clear input after adding or editing
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter something first!',
            });
        }
    };

    const deleteTodo = async (i) => {
        const todoToDelete = todo[i];
        if (todoToDelete) {
            await deleteDoc(doc(db, "todos", todoToDelete.id));
            setTodo((prev) => prev.filter((_, index) => index !== i));
        }
    };

    const startEditTodo = (i) => {
        setCurrentTodo(todo[i].newTodoValue);  // Set the current value of todo in input field
        setIsEditing(true);  // Enable edit mode
        setEditIndex(i);     // Set index of todo being edited
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center ">
            <Navbar />
            <div className="ml-0 sm:ml-5 mr-0 sm:mr-5 w-full max-w-md p-4 bg-white shadow-lg rounded-lg mt-10">
                <form onSubmit={addTodo} className=" flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Add a todo"
                        value={currentTodo}
                        onChange={(e) => setCurrentTodo(e.target.value)}  // Update state on input change
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        {isEditing ? "Update" : "Add"}  {/* Change button label based on edit mode */}
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
                                    onClick={() => startEditTodo(index)}  // Start edit mode
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
