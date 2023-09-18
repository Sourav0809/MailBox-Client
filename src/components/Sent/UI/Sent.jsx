import { BiStar } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
const Sent = (props) => {
  const { email, subject, id } = props.email;

  const onDeleteSentEmail = (e) => {
    e.stopPropagation();
    console.log(id);
  };
  return (
    <div className=" px-2 py-2 pl-7 flex w-full items-center justify-between gap-4 bg-slate-200 rounded-[.3rem] text-sm cursor-pointer ">
      <div className=" flex gap-2 items-center">
        <BiStar />
        <h5>To : [ {email} ]</h5>
        <h5>Subject : [ {subject} ]</h5>
      </div>
      <AiTwotoneDelete
        className=" text-2xl text-red-500"
        onClick={onDeleteSentEmail}
      />
    </div>
  );
};

export default Sent;
