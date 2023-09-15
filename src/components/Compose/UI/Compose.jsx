import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef, useState } from "react";
import formatEmail from "../../../functions/formatEmail";
const Compose = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const typedVal = useRef(null);

  /* -------------------------------------------------------------------------- */
  /*                            WHEN USER SEND EMAIL                            */
  /* -------------------------------------------------------------------------- */
  const onSubmitHandeler = async (e) => {
    e.preventDefault();
    const editor = typedVal.current.editor;
    const typedContent = editor.getText().trim();
    if (content) {
      const submitedVal = {
        email: email,
        subject: subject,
        typedText: typedContent,
        htmlFormat: content,
      };

      console.log(submitedVal);
    } else {
      alert("Message Field cannot be blank");
    }
  };

  return (
    <div className="pl-[13rem] p-3 ">
      <div className=" w-full md:w-[50rem] md:p-0 p-4 m-auto mt-14 shadow-md shadow-slate-400">
        <form onSubmit={onSubmitHandeler} className=" p-3 mt-2">
          <h1 className=" font-popins text-base">New Message</h1>
          <div className=" flex flex-col gap-2 mt-2  ">
            <input
              type="email"
              placeholder=" Recipients"
              required
              className=" p-[.4rem] mx-3 border-b border-gray-500 focus:outline-0  "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Subject"
              className="p-[.4rem] mx-3 border-b border-gray-500 focus:outline-0"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />

            <div className=" mt-2 m-auto h-[30rem] p-1 w-[98%]">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                className="h-[90%]"
                ref={typedVal}
              />
            </div>
            <div className="px-3">
              <button
                type="submit"
                className=" bg-blue-500 text-white font-semibold p-2 w-[30%] rounded-md"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Compose;
