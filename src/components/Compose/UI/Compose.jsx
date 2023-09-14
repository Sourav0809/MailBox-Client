import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef, useState } from "react";
const Compose = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  // configuration for text editor

  const config = {
    placeholder: "Start Typing ....",
  };

  return (
    <div className="pl-[13rem] p-3 ">
      <div className=" w-full md:w-[50rem] md:p-0 p-4 m-auto mt-14 shadow-md shadow-slate-400">
        <div className=" p-3 mt-2">
          <h1 className=" font-popins text-base">New Message</h1>
          <div className=" flex flex-col gap-2 mt-2  ">
            <input
              type="email"
              placeholder=" Recipients"
              className=" p-[.4rem] mx-3 border-b border-gray-500 focus:outline-0  "
            />
            <input
              type=" text"
              placeholder=" Subject"
              className="p-[.4rem] mx-3 border-b border-gray-500 focus:outline-0"
            />

            <div className=" mt-2 m-auto w-[98%]">
              <ReactQuill theme="snow" value={content} onChange={setContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compose;
