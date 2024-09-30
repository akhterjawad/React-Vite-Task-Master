// import React, { useEffect, useRef, useState } from 'react'
// import NavbarBlow from '../Components/NavbarBlow'
// import { useNavigate } from 'react-router-dom'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth, db, sendData } from '../config/firebase/FirebaseMethod'
// import Navbar from '../Components/Navbar'
// import { collection, getDocs, query, where } from 'firebase/firestore'

// const Dashboard = () => {
// let MainBlogTitle = useRef()
// let MainBlogDescription = useRef()
// const [isSubmitting, setIsSubmitting] = useState(false);
// const navigate = useNavigate()
// let [UserImage, setUserImage] = useState(null)
// let [UserFullName, setUserFullName] = useState(null)
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log(user);
//         // setUid(user.uid);

//         // Uid set hone ka wait karte hain aur phir data fetch karte hain
//         let GetUserDataFromFirebase = async () => {
//           try {
//             // Create a query to find the user document where id matches user.uid
//             const userQuery = query(
//               collection(db, "users"),
//               where("id", "==", user.uid)
//             );
//             const querySnapshot = await getDocs(userQuery);

//             querySnapshot.forEach((doc) => {
//               console.log('User data found:', doc.data());
//               setUserImage(doc.data().profileImage);
//               setUserFullName(doc.data().fullName);
//               // setUserEmail(doc.data().email);
//             });
//           } catch (error) {
//             console.log("Error getting user document: ", error);
//           }
//         };

//         GetUserDataFromFirebase(); // Ab function call karte hain
//       } else {

//         navigate('/login')
//       }
//     })
//   }, [])
//   console.log(auth);

//   async function addBlogToFireStore() {
//     if (MainBlogTitle.current.value === '' || MainBlogDescription.current.value === '') {
//       alert('First fill the inputs')
//     } else {
//       setIsSubmitting(true)

//       let addData = await sendData({
//         BlogTitle: MainBlogTitle.current.value,
//         BlogDescription: MainBlogDescription.current.value,
//         time: Timestamp.fromDate(new Date()),
//         Uid: auth.currentUser.uid
//       }, 'blogs')
//       console.log(addData);
//       setIsSubmitting(false)
//       MainBlogTitle.current.value = '';
//       MainBlogDescription.current.value = '';
//     }
//   }
//   // function addBlogToFireStore() {
//   //   console.log(MainBlogTitle.current.value);
//   //   console.log(MainBlogDescription.current.value);

//   // }

//   return (
//     <>
//       <Navbar />
//       <NavbarBlow PageName='Dashboard' />
//       {/* flex items-center sm:items-start flex-col justify-start sm:pl-[100px] pl-0 bg-gray-400 h-screen overflow-y-auto */}
//       <div className='flex items-center sm:items-start flex-col justify-start sm:pl-[100px] pl-0 bg-gray-400 min-h-screen'>
//         <div className='flex items-center flex-col justify-center gap-5  max-h-96  bg-white w-[95%]  sm:w-[80%] mt-20 rounded-sm'>
//           <input
//             required
//             type="text"
//             ref={MainBlogTitle}
//             id="small-input"
//             className="mt-10 block w-[80%] p-2 text-gray-900 border  border-gray-300 rounded-lg  text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           />
//           <textarea
//             id="message"
//             required
//             rows={4}
//             ref={MainBlogDescription}
//             className="block p-2.5 w-[80%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Write your thoughts here..."
//             defaultValue={""}
//           />
//           <div className='w-[80%]'>
//             <button
//               type="submit"
//               onClick={addBlogToFireStore}
//               disabled={isSubmitting}
//               className={`flex items-center justify-center w-32 mb-10 py-2 rounded-lg transition duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
//                 }`}
//             >
//               {isSubmitting ? (
//                 <svg
//                   className="animate-spin h-5 w-5 mr-2"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12c0-1.5.4-2.9 1.1-4.1l1.5 1.5C6.9 10.3 6 11.1 6 12s.9 1.7 2.6 2.6l-1.5 1.5C4.4 14.9 4 13.5 4 12zm16 0c0 1.5-.4 2.9-1.1 4.1l-1.5-1.5C17.1 13.7 18 12.9 18 12s-.9-1.7-2.6-2.6l1.5-1.5C19.6 9.1 20 10.5 20 12z"
//                   ></path>
//                 </svg>
//               ) : (
//                 'Publish Blogs'
//               )}
//               {isSubmitting && <span className="ml-2">Processing...</span>}
//             </button>
//           </div>
//         </div>
//         <h1 className='font-semibold sm:text-[2rem] self-start ml-2 sm:ml-0 text-[1.5rem] sm:mb-5 mb-2 sm:mt-5 mt-2 borde'>My Blogs</h1>

//         <div className="bg-white shadow-md rounded-lg p-6 w-[95%]  sm:w-[80%]">
//           <div className="flex items-center space-x-4">
//             <img
//               src={UserImage}
//               alt="Author Image"
//               className="w-14 object-cover h-14 rounded-full"
//             />
//             <div>
//               <h2 className="text-xl font-semibold">
//                 An Action Button Could Be Coming to the iPhone 15
//               </h2>
//               <p className="text-sm text-gray-500">
//                 {UserFullName} - August 16th, 2023
//               </p>
//             </div>
//           </div>
//           <p className="mt-4 text-gray-700">
//             Apple could be putting an Action button on your next iPhone. According to a July report from MacRumors, code in the fourth iOS 17 developer beta hints at functionality for an Action button on the next-gen iPhone 15 Pro and Pro Max models.
//           </p>
//           <p className="mt-2 text-gray-700">
//             Apple introduced the Action button on the Apple Watch Ultra. It's a physical button on the side of the Apple Watch Ultra that allows you to run a preselected function or program without unlocking your device.
//           </p>
//           <div className="flex justify-end space-x-4 mt-4">
//             <button className="text-purple-600 hover:underline">Delete</button>
//             <button className="text-purple-600 hover:underline">Edit</button>
//           </div>
//         </div>

//       </div>
//     </>
//   )
// }

// export default Dashboard


import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db, sendData } from '../config/firebase/FirebaseMethod';
import { collection, getDocs, query, where, doc, updateDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import Navbar from '../Components/Navbar';
import NavbarBlow from '../Components/NavbarBlow';
const Dashboard = () => {
  let [UserImage, setUserImage] = useState(null)
  let [UserFullName, setUserFullName] = useState(null)
  const MainBlogTitle = useRef();
  const MainBlogDescription = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserBlogs(user.uid);
        let GetUserDataFromFirebase = async () => {
          try {
            // Create a query to find the user document where id matches user.uid
            const userQuery = query(
              collection(db, "users"),
              where("id", "==", user.uid)
            );
            const querySnapshot = await getDocs(userQuery);

            querySnapshot.forEach((doc) => {
              console.log('User data found:', doc.data());
              setUserImage(doc.data().profileImage);
              setUserFullName(doc.data().fullName);
              // setUserEmail(doc.data().email);
            });
          } catch (error) {
            console.log("Error getting user document: ", error);
          }
        };

        GetUserDataFromFirebase();
      } else {
        navigate('/login');
      }
    });
  }, []);

  // Function to fetch blogs based on user ID
  const fetchUserBlogs = async (uid) => {
    const userQuery = query(collection(db, 'blogs'), where('Uid', '==', uid));
    const querySnapshot = await getDocs(userQuery);
    let userBlogs = [];
    querySnapshot.forEach((doc) => {
      console.log(doc, 'k');

      userBlogs.push({ ...doc.data(), id: doc.id });
    });
    setBlogs(userBlogs);
  };

  // Function to add a blog to Firestore
  const addBlogToFireStore = async () => {
    if (MainBlogTitle.current.value === '' || MainBlogDescription.current.value === '') {
      alert('First fill the inputs');
      return;
    }

    setIsSubmitting(true);
    const newBlog = {
      BlogTitle: MainBlogTitle.current.value,
      BlogDescription: MainBlogDescription.current.value,
      time: Timestamp.fromDate(new Date()),
      Uid: auth.currentUser.uid,
    };

    try {
      await sendData(newBlog, 'blogs');
      setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
      MainBlogTitle.current.value = '';
      MainBlogDescription.current.value = '';
    } catch (error) {
      console.error('Error adding blog: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to delete a blog
  const deleteBlog = async (index) => {
    console.log('Index:', index);
    console.log('Blogs:', blogs);
    
    const blogToDelete = blogs[index];
    if (!blogToDelete) {
        console.error('Blog not found at index:', index);
        return; // Exit the function if blog is not found
    }
    
    try {
        await deleteDoc(doc(db, 'blogs', blogToDelete.id));
        setBlogs((prevBlogs) => prevBlogs.filter((_, i) => i !== index));
        console.log('Blog deleted');
    } catch (error) {
        console.error('Error deleting blog:', error);
    }
};


  // Function to update a blog
  const updateBlog = async (index) => {
    const blogToUpdate = blogs[index];
    if (!blogToUpdate) {
      console.error('No blog found at this index:', index);
      return; // Exit if no blog is found
    }

    const updatedTitle = prompt('Enter new title:', blogToUpdate.BlogTitle);
    const updatedDescription = prompt('Enter new description:', blogToUpdate.BlogDescription);

    if (!updatedTitle || !updatedDescription) {
      alert('Both title and description are required to update!');
      return;
    }

    try {
      const blogDoc = doc(db, 'blogs', blogToUpdate.id);
      await updateDoc(blogDoc, {
        BlogTitle: updatedTitle,
        BlogDescription: updatedDescription,
      });

      setBlogs((prevBlogs) =>
        prevBlogs.map((blog, i) =>
          i === index ? { ...blog, BlogTitle: updatedTitle, BlogDescription: updatedDescription } : blog
        )
      );
      console.log('Blog updated');
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString(); // Formats the date and time based on the user's locale
  };

  return (
    <>
      <Navbar />
      <NavbarBlow PageName="Dashboard" />
      
      <div className='flex items-center sm:items-start flex-col justify-start sm:pl-[100px] pl-0 bg-gray-50 min-h-screen'>
        <div className='flex items-center flex-col justify-center gap-5  max-h-96  bg-white w-[95%]  sm:w-[80%] mt-20 rounded-sm'>
          <input
            required
            type="text"
            ref={MainBlogTitle}
            id="small-input"
            className="mt-10 block w-[80%] p-2 text-gray-900 border  border-gray-300 rounded-lg  text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <textarea
            id="message"
            required
            rows={4}
            ref={MainBlogDescription}
            className="block p-2.5 w-[80%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            defaultValue={""}
          />
          <div className='w-[80%]'>
            <button
              type="submit"
              onClick={addBlogToFireStore}
              disabled={isSubmitting}
              className={`flex items-center justify-center w-32 mb-10 py-2 rounded-lg transition duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12c0-1.5.4-2.9 1.1-4.1l1.5 1.5C6.9 10.3 6 11.1 6 12s.9 1.7 2.6 2.6l-1.5 1.5C4.4 14.9 4 13.5 4 12zm16 0c0 1.5-.4 2.9-1.1 4.1l-1.5-1.5C17.1 13.7 18 12.9 18 12s-.9-1.7-2.6-2.6l1.5-1.5C19.6 9.1 20 10.5 20 12z"
                  ></path>
                </svg>
              ) : (
                'Publish Blogs'
              )}
              {isSubmitting && <span className="ml-2">Processing...</span>}
            </button>
          </div>
        </div>

        <h1 className='font-semibold sm:text-[2rem] self-start ml-2 sm:ml-0 text-[1.5rem] sm:mb-5 mb-2 sm:mt-5 mt-2 borde'>My Blogs</h1>




        {/* Render the list of blogs */}
        <div className="mt-10 w-full px-5">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={blog.id} className="bg-white shadow-md rounded-lg p-6 w-[95%]  sm:w-[80%]">
                <div className="flex items-center space-x-4">
                  <img
                    src={UserImage}
                    alt="Author Image"
                    className="w-14 object-cover h-14 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{blog.BlogTitle}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {UserFullName} - {getCurrentDateTime()}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  {blog.BlogDescription}
                </p>

                <div className="flex justify-end space-x-4 mt-4">
                  <button onClick={() => deleteBlog(index)} className="text-purple-600 hover:underline">Delete</button>
                  <button onClick={() => updateBlog(index)} className="text-purple-600 hover:underline">Edit</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No blogs found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
