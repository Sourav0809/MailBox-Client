import { useSelector } from "react-redux";
import Inbox from "./UI/Inbox";
import EmptyInbox from "./UI/EmptyInbox";
const InboxContainer = () => {
  const { receiveEmails } = useSelector((state) => state.allEmails);

  return (
    <div className=" pl-[13rem]">
      <div className=" mt-10 w-[95%] min-[1600px]:w-[75rem] p-4 h-[90vh]  m-auto shadow-md shadow-slate-400 rounded-md">
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
