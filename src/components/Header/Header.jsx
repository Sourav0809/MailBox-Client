import { CgMail } from "react-icons/cg";
const Header = () => {
  return (
    <div className="  mt-10  pl-16 flex justify-start item-center  ">
      <h1 className=" text-4xl font-bold ">MailMingle</h1>
      <CgMail className=" text-3xl " />
    </div>
  );
};

export default Header;
