//user
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

export { BsBagCheck, AiOutlineHeart, GrHelp, BiLogOut, IoSettingsOutline };

export const userMenu = [
  { name: "my account", icon: <IoSettingsOutline /> },
  { name: "my order", icon: <BsBagCheck /> },
  { name: "wishlist", icon: <AiOutlineHeart /> },
  { name: "help", icon: <GrHelp /> },
  { name: "log out", icon: <BiLogOut /> },
];

