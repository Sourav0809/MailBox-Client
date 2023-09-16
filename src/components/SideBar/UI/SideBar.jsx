import React from "react";
import { BiSolidInbox, BiSolidUserCircle, BiSolidLogOut } from "react-icons/bi";
import { RiDraftFill } from "react-icons/ri";
import { TiPencil } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { BsFillSendFill, BsFillTrashFill } from "react-icons/bs";
import { userLogOutAction } from "../../../store/actions/authAction";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const SideBar = () => {
  const dispatch = useDispatch();
  /* -------------------------------------------------------------------------- */
  /*                          IF USER CLICK ON LOG OUT                          */
  /* -------------------------------------------------------------------------- */

  const logOutHandeler = () => {
    dispatch(userLogOutAction());
    toast.success("Log Out Successfully ");
  };

  return (
    <div>
      <div className=" fixed top-0 left-0 w-[13rem] h-screen bg-[rgb(15,15,20)] font-popins flex flex-col justify-between">
        <div>
          <NavLink to={"/compose"}>
            <div className=" m-3 flex justify-center items-center mt-10 text-white cursor-pointer gap-3 bg-[rgb(47,47,61)] p-2">
              <TiPencil className=" text-xl" />
              <h3 className=" text-base">Compose</h3>
            </div>
          </NavLink>

          <div className=" flex flex-col mt-5 gap-3">
            <NavLink to={"/inbox"}>
              <div className=" flex justify-between items-center text-white gap-2 px-5 border-l cursor-pointer">
                <div className=" flex justify-center items-center gap-4 m-1">
                  <BiSolidInbox className="text-2xl" />
                  <p className=" text-lg leading-loose">Inbox</p>
                </div>
                <div className=" bg-blue-700 px-4 text-base">
                  <h1>10</h1>
                </div>
              </div>
            </NavLink>

            <div className=" flex justify-between items-center text-white gap-2 px-5  cursor-pointer">
              <div className=" flex justify-center items-center gap-4 m-1">
                <RiDraftFill className="text-2xl" />
                <p className=" text-lg leading-loose">Draft</p>
              </div>
            </div>

            <div className=" flex justify-between items-center text-white gap-2 px-5  cursor-pointer">
              <div className=" flex justify-center items-center gap-4 m-1">
                <AiFillStar className="text-2xl" />
                <p className=" text-lg leading-loose">Starred</p>
              </div>
            </div>

            <div className=" flex justify-between items-center text-white gap-2 px-5  cursor-pointer">
              <div className=" flex justify-center items-center gap-5 m-1">
                <BsFillSendFill className="text-xl" />
                <p className=" text-lg leading-loose">Sent</p>
              </div>
            </div>

            <div className=" flex justify-start items-center text-white gap-2 px-5  cursor-pointer">
              <div className=" flex justify-center items-center gap-4 m-1">
                <BsFillTrashFill className="text-2xl" />
                <p className=" text-lg leading-loose">Trash</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" mb-14 flex flex-col gap-1">
          <NavLink to={"/profile"}>
            <div className=" flex justify-start items-center text-white bg-[rgb(47,47,61)] m-2 gap-2 px-5  cursor-pointer">
              <div className=" flex justify-center items-center gap-4 m-1">
                <BiSolidUserCircle className="text-2xl" />
                <p className=" text-lg leading-loose">Your Profile</p>
              </div>
            </div>
          </NavLink>

          <div
            className=" flex justify-start items-center text-white bg-[rgb(47,47,61)] m-2 gap-2 px-5  cursor-pointer"
            onClick={logOutHandeler}
          >
            <div className=" flex justify-center items-center gap-4 m-1">
              <BiSolidLogOut className="text-2xl" />
              <p className=" text-lg leading-loose">Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
