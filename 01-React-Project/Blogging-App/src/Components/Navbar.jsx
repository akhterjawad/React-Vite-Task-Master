import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db, getData, signOutUser } from '../config/firebase/FirebaseMethod'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'

let Navbar = ({ Home, Dashboard, Profile, Logout, Login, Register }) => {
  let [UserImage, setUserImage] = useState(null)
  // let [Uid, setUid] = useState(null)
  let [UserFullName, setUserFullName] = useState(null)
  let [UserEmail, setUserEmail] = useState(null)
  let [isDropdownOpen, setDropdownOpen] = useState(false);
  let [LoginUser, setLoginUser] = useState(null);

  let toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  let navigate = useNavigate()
  useEffect(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log(user);
      setLoginUser(true);
      // setUid(user.uid);

      // Uid set hone ka wait karte hain aur phir data fetch karte hain
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
            setUserEmail(doc.data().email);
          });
        } catch (error) {
          console.log("Error getting user document: ", error);
        }
      };

      GetUserDataFromFirebase(); // Ab function call karte hain
    } else {
      setLoginUser(false);
    }
  });
}, []);

  let logoutUser = async () => {
    let user = await signOutUser();
    // setIsUser(false)
    console.log(user);
    navigate('/login')
  }
  return (
    <>

      <nav className="bg-[#7749F8] sm:p-0 p-1 flex flex-wrap justify-between items-center">
        <Link to="/" className="text-white sm:ml-24 ml-5 sm:text-[1.4rem] text-[1.1rem] font-bold hover:bg-[#5628F6]  rounded-lg transition duration-300 sm:px-2 px-0 py-0  sm:py-1">Personal Blogging App</Link>
        <div className="flex justify-center items-center font-semibold sm:mr-12 mr-5 ">
          {LoginUser ?
            <div className="bg-white border-gray-200 dark:bg-gray-900">
              <div className="max-w-screen-xl flex items-center justify-end bg-[#7749F8]">
                <div className="relative text-center space-x-3 rtl:space-x-reverse">
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded={isDropdownOpen ? "true" : "false"}
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className=" w-8 h-8 rounded-full object-cover"
                      src={UserImage}
                      alt="user photo"
                    />
                  </button>
                  {/* Dropdown menu */}
                  {isDropdownOpen && (
                    <div
                      className="absolute right-0 z-50 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="user-dropdown"
                    >
                      <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white">
                          {UserFullName}
                        </span>
                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                          {UserEmail}
                        </span>
                      </div>
                      <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                          <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{Dashboard}Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{Profile}Your Profile</Link>
                        </li>
                        <li>
                          <h5
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            onClick={logoutUser}
                          >
                            {Logout}Logout
                          </h5>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            : ''}
          <Link to="/login" className="text-white sm:px-2 px-0 py-0  sm:py-1 hover:bg-[#5628F6]  rounded-lg transition duration-300">{Login}</Link>

          <Link to="/register" className="text-white sm:px-2 px-0 py-0  sm:py-1 hover:bg-[#5628F6]  rounded-lg transition duration-300">{Register}</Link>

        </div>
      </nav>
    </>
  )
}

export default Navbar