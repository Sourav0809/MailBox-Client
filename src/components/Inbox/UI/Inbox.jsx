import { BiStar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Inbox = (props) => {
  const navigate = useNavigate();
  const { senderEmail, subject, id } = props.email;
  const onClickedEmailHandeler = (e) => {
    e.stopPropagation();
    navigate(`/inboxEmailDetails/${id}`);
  };
  return (
    <div
      className=" px-2 py-2 pl-7 flex w-full items-center gap-4 bg-slate-200 rounded-[.3rem] text-sm cursor-pointer "
      onClick={onClickedEmailHandeler}
    >
      <BiStar />
      <h5>From : [ {senderEmail} ]</h5>
      <h5>Subject : [ {subject} ]</h5>
    </div>
  );
};

export default Inbox;
