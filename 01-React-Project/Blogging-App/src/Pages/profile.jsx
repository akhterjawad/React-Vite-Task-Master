import React, { useEffect, useState } from 'react'
import NavbarBlow from '../Components/NavbarBlow'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../config/firebase/FirebaseMethod'
import Navbar from '../Components/Navbar'
import { collection, getDocs, query, where } from 'firebase/firestore'
const profile = () => {

  const navigate = useNavigate()
  let [CheckUser, setCheckUser] = useState(null)
  let [UserImage, setUserImage] = useState(null)
  let [UserFullName, setUserFullName] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
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
  return (
    <div>
      <Navbar/>
      <NavbarBlow PageName='Profile'/>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-center text-gray-700">Profile</h1>
            <div className="flex flex-col items-center mt-4">
                <img 
                    src={UserImage} 
                    alt="Profile" 
                    className="w-32 object-cover h-32 rounded-full mb-4" 
                />
                <h2 className="text-xl font-medium text-gray-800">{UserFullName}</h2>
                <div className="w-full mt-6">
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="old-password">
                        Old Password
                    </label>
                    <input 
                        type="password" 
                        id="old-password" 
                        placeholder="Old Password" 
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                    />

                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="new-password">
                        New Password
                    </label>
                    <input 
                        type="password" 
                        id="new-password" 
                        placeholder="New Password" 
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                    />

                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="repeat-password">
                        Repeat Password
                    </label>
                    <input 
                        type="password" 
                        id="repeat-password" 
                        placeholder="Repeat Password" 
                        className="w-full p-2 mb-6 border border-gray-300 rounded-md"
                    />

                    <button className="w-full p-2 text-white bg-purple-600 rounded-md hover:bg-purple-500">
                        Update Password
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default profile
