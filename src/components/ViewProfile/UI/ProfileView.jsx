import axios from "axios";
import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { verifyEmailLink } from "../../../API/verifyEmail";
import toast from "react-hot-toast";
const ProfileView = () => {
  const { userDetails } = useSelector((state) => state.userDetails);
  const { idToken } = useSelector((state) => state.auth);
  const [name, setName] = useState(userDetails.name);
  const [email, setEmail] = useState(userDetails.email);
  const [number, setNumber] = useState(userDetails.number);

  /* -------------------------------------------------------------------------- */
  /*                     IF USERS WANT TO VERIFY THEIR EMAIL                    */
  /* -------------------------------------------------------------------------- */

  const verifyEmailHandeler = async () => {
    try {
      const { data } = await axios.post(verifyEmailLink, {
        requestType: "VERIFY_EMAIL",
        idToken: idToken,
      });

      toast.success("Verification Link Sent On Your Email");
    } catch (error) {
      toast.error("Error Occurred !");
    }
  };

  // helper to check user verified or not
  const verifiedUser = userDetails.emailVerified;

  return (
    <div className=" pl-2 md:pl-[13em]">
      <div className=" w-[95%] p-3  md:w-[45rem] border m-auto mt-[150px] text-center shadow-sm shadow-slate-600">
        <h2 className={`text-4xl text-blue-950 font-popins font-bold mt-6`}>
          Your Account
        </h2>

        <div className=" flex justify-center item-center mt-2">
          <BiSolidUserCircle className={`text-[8rem] text-blue-900`} />
        </div>

        <div
          className={`w-full p-5 flex flex-col gap-2 "text-black"
          }`}
        >
          <input
            disabled
            value={name}
            className="w-full p-2 rounded-sm bg-[#9bddc2]"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            disabled
            value={email}
            className="w-full p-2 rounded-sm bg-[#9bddc2]"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            disabled
            value={number}
            className="w-full p-2 rounded-sm bg-[#9bddc2]"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <input
            disabled
            value="**********"
            className="w-full p-2 rounded-sm  bg-[#9bddc2]"
          />
          <div className=" flex justify-center item-center gap-2">
            <button
              disabled={verifiedUser}
              onClick={verifyEmailHandeler}
              className="mt-3 py-2 bg-[#4045c7d0] md:w-[100%] w-full font-semibold text-white rounded-sm"
            >
              {verifiedUser ? "Verified User " : "Verfiy Email"}
            </button>
            <button
              disabled={!verifiedUser}
              className={`mt-3 py-2 ${
                verifiedUser ? "bg-[#4045c7d0]" : "bg-[#777bd8d0]"
              }  md:w-[100%] w-full font-semibold text-white rounded-sm`}
            >
              Edit Profile
            </button>
          </div>

          <div className={` mt-2 mb-4 text-black`}>
            <h1 className=" text-base font-semibold">
              {verifiedUser
                ? "Thanks For Being Verified User"
                : "Verify Your Email To Use 100% Features"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
