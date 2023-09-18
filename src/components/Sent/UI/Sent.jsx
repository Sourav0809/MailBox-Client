import { BiStar } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteSentEmail } from "../../../store/actions/emailAction";
import { useNavigate } from "react-router-dom";

const Sent = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, subject, id } = props.email;

  const onClickedEmailHandeler = (e) => {
    e.stopPropagation();
    navigate(`/sentBoxEmailDetails/${id}`);
  };

  const onDeleteSentEmail = (e) => {
    e.stopPropagation();
    dispatch(deleteSentEmail(id));
  };
  return (
    <div
      className=" px-2 py-2 pl-7 flex w-full items-center justify-between gap-4 bg-slate-200 rounded-[.3rem] text-sm cursor-pointer "
      onClick={onClickedEmailHandeler}
    >
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
