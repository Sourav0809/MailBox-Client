import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiLoaderCircle } from "react-icons/bi";
import { storeEmailAction } from "../../../store/actions/emailAction";
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const Compose = () => {
  const [loader, setLoader] = useState(false);
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const typedVal = useRef(null);
  const [speechRec, setSpeechRec] = useState(false);
  const senderEmail = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <p className=" mt-36 text-center text-4xl">
        Your Browser Doesn't support speech recognition
      </p>
    );
  }
  const onStartListening = () => {
    setSpeechRec(true);
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };
  const onStopListening = () => {
    setSpeechRec(false);
    SpeechRecognition.stopListening();
    resetTranscript();
  };

  useEffect(() => {
    // Set the currentTranscript state to the transcript whenever a new transcript is available.
    if (transcript) {
      setContent(transcript);
    }
  }, [transcript]);

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
      if (submitedVal.email === submitedVal.senderEmail) {
        alert("Sender and Recipients must be different");
      } else {
        dispatch(storeEmailAction(submitedVal.email, senderEmail, submitedVal));

        setEmail("");
        setSubject("");
        setContent("");
      }
    } else {
      alert("Message Field cannot be blank");
    }
    setLoader(false);
  };

  return (
    <div className="md:pl-[13rem] p-3 ">
      <div className=" w-full md:w-[50rem] md:p-0 p-4 m-auto mt-20 md:mt-5 shadow-md shadow-slate-400">
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

            <div className=" mt-2 m-auto h-[35rem] p-1 w-[98%]">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                className="h-[80%]"
                ref={typedVal}
              />
            </div>
            <div className="px-1 flex items-center gap-2">
              <button
                type="submit"
                className=" bg-blue-500 flex justify-center items-center text-white font-semibold p-2 px-7 rounded-md"
              >
                {loader ? <BiLoaderCircle className=" text-2xl" /> : "Sent"}
              </button>
              {!speechRec && (
                <button
                  onClick={onStartListening}
                  className=" bg-blue-500 flex justify-center items-center text-white font-semibold p-2 px-7 rounded-md"
                >
                  Start Speech To Text{" "}
                </button>
              )}
              {speechRec && (
                <button
                  onClick={onStopListening}
                  className="bg-blue-500 flex justify-center items-center text-white font-semibold p-2 px-7 rounded-md"
                >
                  Stop Speech To Text
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Compose;
