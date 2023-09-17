import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiStar } from "react-icons/bi";
const InboxDetailPage = () => {
  const { receiveEmails } = useSelector((state) => state.allEmails);
  console.log(receiveEmails);
  const { id } = useParams();
  const filteredEmail = receiveEmails.filter((emails) => {
    return emails.id === id;
  });

  // Create a state variable to store the HTML content
  const [emailContent, setEmailContent] = useState("");

  useEffect(() => {
    // Update the emailContent state when filteredEmail changes
    if (filteredEmail.length > 0) {
      setEmailContent(filteredEmail[0].htmlFormat);
    }
  }, [filteredEmail]);

  return (
    <div className=" pl-[13rem]">
      <div className=" mt-16 w-[95%] min-[1600px]:w-[75rem] p-8 h-[80vh]  m-auto shadow-md shadow-slate-400 rounded-md">
        <div className=" flex flex-col gap-2 ">
          <div className=" bg-blue-300 p-2 rounded-md  flex items-center gap-2 font-semibold">
            <BiStar />
            <h1>From: [ {filteredEmail[0].senderEmail} ]</h1>
          </div>
          <div className=" mt-1">
            <h1>Subject: {filteredEmail[0].subject} </h1>
          </div>
          {/* Render the HTML content using dangerouslySetInnerHTML */}
          <div
            className="emailContent"
            dangerouslySetInnerHTML={{ __html: emailContent }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InboxDetailPage;
