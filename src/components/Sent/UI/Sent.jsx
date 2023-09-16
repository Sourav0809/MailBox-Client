import { BiStar } from "react-icons/bi";
const Sent = (props) => {
  const { email, subject } = props.email;
  return (
    <div className=" px-2 py-2 pl-7 flex w-full items-center gap-4 bg-slate-200 rounded-[.3rem]">
      <BiStar />
      <h1>To : [ {email} ]</h1>
      <h1>Subject : [ {subject} ]</h1>
    </div>
  );
};

export default Sent;
