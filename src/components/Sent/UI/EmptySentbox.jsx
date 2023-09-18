import { RiInboxLine } from "react-icons/ri";

const EmptySentbox = () => {
  return (
    <div className=" flex justify-center items-center font-semibold  p-20 gap-2">
      <RiInboxLine className=" text-3xl text-pink-800 " />
      <h1 className=" text-center font-popins text-3xl ">0 Sent Emails</h1>
    </div>
  );
};

export default EmptySentbox;
