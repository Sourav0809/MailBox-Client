import { useSelector } from "react-redux";
import Sent from "./UI/Sent";
const SentContainer = () => {
  const { sentEmails } = useSelector((state) => state.allEmails);

  return (
    <div className=" pl-[13rem]">
      <div className=" mt-10 w-[95%] min-[1600px]:w-[75rem] p-4 h-[90vh]  m-auto shadow-md shadow-slate-400 rounded-md">
        <div className="p-2 flex flex-col gap-2 ">
          {sentEmails.map((email) => {
            return <Sent key={email.id} email={email} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SentContainer;
