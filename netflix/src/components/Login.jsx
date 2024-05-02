import { useRef, useState } from "react";
import Header from "./Header";
import { ValideData } from "../utils/validate";
function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const [message, setMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const validateFormData = () => {
    console.log(ValideData(name, email, password));
    console.log("Button clicked");
    setMessage(ValideData(name, email, password));
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/53529d7d-a14c-4416-8478-fd7d29361c0d/US-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black my-24 w-3/12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="font-bold text-red-800 text-lg">{message}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={validateFormData}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Alredy Registered. Sign In now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
