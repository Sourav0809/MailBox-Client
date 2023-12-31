import { BiStar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { deleteReceiveEmail } from "../../../store/actions/emailAction";
import { useDispatch } from "react-redux";
const Inbox = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { senderEmail, subject, id } = props.email;

  let newSub = "";
  for (let i = 0; i < subject.length; i++) {
    if (i == 10) {
      break;
    } else newSub += subject[i];
  }

  const onClickedEmailHandeler = (e) => {
    e.stopPropagation();
    navigate(`/inboxEmailDetails/${id}`);
  };

  const onDeleteEmail = (e) => {
    e.stopPropagation();
    dispatch(deleteReceiveEmail(id));
  };
  return (
    <div
      className=" px-2 py-2 pl-7 flex w-full items-center justify-between gap-4 bg-blue-300 rounded-[.3rem] text-sm cursor-pointer "
      onClick={onClickedEmailHandeler}
    >
      <div className=" flex gap-2 items-center">
        <BiStar />
        <h5>From : [ {senderEmail} ]</h5>
        <h5>Subject : [ {newSub}... ]</h5>
      </div>
      <AiTwotoneDelete
        className=" text-2xl text-red-500"
        onClick={onDeleteEmail}
      />
    </div>
  );
};

export default Inbox;
