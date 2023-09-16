import { useEffect } from "react";
import { fetchSentAction } from "../../store/actions/emailAction";
import { useDispatch, useSelector } from "react-redux";
import Sent from "./UI/Sent";
const SentContainer = () => {
  const dispatch = useDispatch();
  const { sentEmails } = useSelector((state) => state.allEmails);
  console.log(sentEmails);

  useEffect(() => {
    dispatch(fetchSentAction());
  }, []);

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
