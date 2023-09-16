import { useEffect } from "react";
import {
  fetchInboxAction,
  fetchSentAction,
} from "../../../store/actions/emailAction";
import { useDispatch } from "react-redux";
const Inbox = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSentAction());
  }, []);

  return (
    <div className=" pl-[13rem]">
      <h1 className=" text-5xl mt-10 text-center"> You have 0 Messages</h1>;
    </div>
  );
};

export default Inbox;
