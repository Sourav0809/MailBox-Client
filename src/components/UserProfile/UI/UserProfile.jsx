import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { postLink } from "../../../API/postLink";
import formatEmail from "../../../functions/formatEmail";
import { useDispatch } from "react-redux";
import { userDetailsSetAction } from "../../../store/actions/userDetailsAction";
import { setUserDetails } from "../../../store/reducers/userProfileSlice";
import PageLoader from "../../UI/PageLoader";
import toast from "react-hot-toast";
const UserProfile = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { email } = useSelector((state) => state.auth);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userDetailsSetAction()).then(() => {
      setLoader(false);
    });
  }, []);

  // IF USER PRESS CONTINUE AFTER PUT ALL THE DETAILS

  const profileSubmitHandeler = async (e) => {
    e.preventDefault();
    const submitedData = {
      name: name,
      email: email,
      number: number,
      emailVerified: false,
    };
    try {
      const { data } = await axios.post(
        `${postLink}/${formatEmail(email)}/userDetails.json`,
        submitedData
      );
      dispatch(setUserDetails(submitedData));
    } catch (error) {
      toast.error("Error Occurred ");
    }
  };

  return (
    <>
      {loader ? (
        <PageLoader />
      ) : (
        <div className=" w-[95%] md:w-[50rem] m-auto mt-40">
          <div className=" flex flex-col justify-center text-4xl items-center gap-2">
            <h1 className=" mt-5 text-center font-semibold">WELCOME</h1>
            <BiSolidUserCircle className=" text-9xl text-blue-500" />
          </div>

          <div className=" mt-8">
            <form
              onSubmit={profileSubmitHandeler}
              className=" flex flex-col gap-2 p-4"
            >
              <input
                type="name"
                placeholder="Name"
                className=" p-[.4rem] bg-[#e0e0e0]"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <input
                type="number"
                placeholder="Phone Number"
                className=" p-[.4rem] bg-[#e0e0e0]"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                required
              />
              <div className=" flex justify-end items-end">
                <button
                  type="submit"
                  className="mt-3 py-2 bg-[#1877f2] md:w-[15%] w-full font-semibold text-white rounded-md"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
