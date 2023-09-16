import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef, useState } from "react";
import formatEmail from "../../../functions/formatEmail";
import { useSelector } from "react-redux";
import { postLink } from "../../../API/postLink";
import axios from "axios";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";

const Compose = () => {
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const typedVal = useRef(null);
  const senderEmail = useSelector((state) => state.auth.email);

  /* -------------------------------------------------------------------------- */
  /*                            WHEN USER SEND EMAIL                            */
  /* -------------------------------------------------------------------------- */

  const onSubmitHandeler = (e) => {
    setLoader(true);

    e.preventDefault();
    const editor = typedVal.current.editor;
    const typedContent = editor.getText().trim();
    if (content) {
      const submitedVal = {
        email: email,
        senderEmail: senderEmail,
        subject: subject,
        typedText: typedContent,
        htmlFormat: content,
      };

      // Create an array of promises for the two API calls
      const inboxPromise = axios.post(
        `${postLink}/${formatEmail(submitedVal.email)}/inbox.json`,
        submitedVal
      );
      const sentPromise = axios.post(
        `${postLink}/${formatEmail(senderEmail)}/sent.json`,
        submitedVal
      );

      Promise.all([inboxPromise, sentPromise])
        .then(([inboxResponse, sentResponse]) => {
          console.log(inboxResponse);
          console.log(sentResponse);
        })
        .catch((error) => {
          toast.error("Error While Sending Email");
        });

      // making input field blank
      toast.success("Email Sent");
      setEmail("");
      setSubject("");
      setContent("");
    } else {
      alert("Message Field cannot be blank");
    }
    setLoader(false);
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
              value={subject}
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
                className=" bg-blue-500 flex justify-center items-center text-white font-semibold p-2 w-[20%] rounded-md"
              >
                {loader ? <BiLoaderCircle className=" text-2xl" /> : "Sent"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Compose;
