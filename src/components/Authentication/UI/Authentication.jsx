import { useState } from "react";
import Header from "../../Header/Header";
import { BiSolidUserCircle } from "react-icons/bi";
import axios from "axios";
import { loginLink, signUpLink } from "../../../API/authPoints";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthAction } from "../../../store/actions/authAction";
const Authentication = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmpwd] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* -------------------------------------------------------------------------- */
  /*                          SWICTH LOG IN OR SIGN UP                          */
  /* -------------------------------------------------------------------------- */

  const onSwitchLogin = () => {
    setLogin((prev) => {
      return !prev;
    });
  };

  const onSubmitLogin = async () => {
    const submitedData = {
      email: email,
      password: password,
    };

    /* -------------------------------------------------------------------------- */
    /*                        IF USER CREATE A NEW ACCOUNT                        */
    /* -------------------------------------------------------------------------- */
    if (!login) {
      // sign up logic
      if (password.trim() === confirmPwd.trim() && password.trim() !== "") {
        try {
          const { data } = await axios.post(signUpLink, submitedData);

          dispatch(
            setAuthAction({ idToken: data.idToken, email: submitedData.email })
          );

          toast.success(" Account Created ! ");
          navigate("/userprofile");
        } catch (error) {
          toast.error(error.response.data.error.message);
        }
      } else {
        alert("Password & Confirm Password should match and cannot be blank.");
      }
    } else {
      /* -------------------------------------------------------------------------- */
      /*                               IF USER LOG IN                               */
      /* -------------------------------------------------------------------------- */
      if (email.trim() !== "" && password.trim() !== "") {
        try {
          const { data } = await axios.post(loginLink, submitedData);
          console.log(data);
          dispatch(
            setAuthAction({ idToken: data.idToken, email: submitedData.email })
          );
          toast.success("Log in Successfully");
          navigate("/userprofile");
        } catch (error) {
          toast.error(error.response.data.error.message);
          console.log(error);
        }
      } else {
        alert("Email and Password cannot be blank.");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className=" w-[90%] md:w-[50rem] mt-[8rem] m-auto">
        <div className="  shadow-md  shadow-gray-400 mt-5 p-6 border border-gray-400">
          <div className=" mt-5 flex justify-center item-center">
            <BiSolidUserCircle className=" text-9xl text-blue-500 " />
          </div>
          <div className="flex mt-2 flex-col gap-2">
            <input
              type="email"
              placeholder="Email "
              className=" w-full p-2 pl-5 bg-[#e0e0e0]  "
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className=" w-full p-2 pl-5 bg-[#e0e0e0]  "
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {!login && (
              <input
                type="password"
                placeholder="Confirm Password"
                className=" w-full p-2 pl-5 bg-[#e0e0e0] "
                required
                value={confirmPwd}
                onChange={(e) => {
                  setConfirmpwd(e.target.value);
                }}
              />
            )}
            <button
              className=" bg-blue-500 text-white font-semibold p-2 mt-2 w-[30%] rounded-md"
              onClick={onSubmitLogin}
            >
              {login ? "Log in" : "Create Account"}
            </button>

            <div className=" flex flex-col mt-5 font-popins ">
              <h1>{login ? "New User ?" : "Already have an account ?"}</h1>
              <h1
                className=" text-blue-700 font-semibold cursor-pointer w-fit"
                onClick={onSwitchLogin}
              >
                {login ? "Create Account" : " Log In"}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
