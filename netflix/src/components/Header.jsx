import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            //photoURL: photoURL,
          })
        );
      } else {
        navigate("/");
        dispatch(removeUser);
      }
    });
    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const user = useSelector((store) => store.user);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    console.log("button clicked");
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-44" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div>
          <button
            className="m-2 text-white p-2 font-bold"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <button className="text-white p-2 font-bold" onClick={signOutUser}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
