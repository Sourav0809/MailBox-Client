import { useSelector } from "react-redux";
import Inbox from "./UI/Inbox";
import EmptyInbox from "./UI/EmptyInbox";
import fetchNewEmails from "../../hooks/fetchNewEmails";

const InboxContainer = () => {
  const { receiveEmails } = useSelector((state) => state.allEmails);
  const { email } = useSelector((state) => state.auth);

  // calling the custom hook to fetch inbox after 2 sec
  fetchNewEmails(email);

  return (
    <div className=" pl-2 md:pl-[13rem]">
      <div className=" mt-20 w-[95%] min-[1600px]:w-[75rem] p-4 h-[80vh] md:h-[90vh]  m-auto shadow-md shadow-slate-400 bg-slate-200 rounded-md">
        <div className="p-2 flex flex-col gap-2 ">
          {receiveEmails.length <= 0 && <EmptyInbox />}
          {receiveEmails.map((email) => {
            return <Inbox key={email.id} email={email} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default InboxContainer;
