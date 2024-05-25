import { FC, memo, useState } from "react";
import logo from "../assets/react.svg";
import {
  MenuIcon,
  NotificationsIcon,
  ProfileIcon,
  SearchIcon,
  VideoCameraIcon,
} from "../components/Icons/Icons";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import MobileSearch from "../components/MobileSearch/MobileSearch";

interface NavBarProps {
  togglefn: () => void;
}

const NavBar: FC<NavBarProps> = memo(({ togglefn }) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleSearchClick = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <div className="flex flex-row gap-10 lg:gap-20 justify-between items-center pt-2 mb-6 mx-4">
      <div
        className={`${
          showSearch ? "hidden" : "flex flex-row justify-between gap-32 w-full items-center"
        }`}
      >
        <div className="flex flex-row justify-between gap-4 items-center flex-shrink-0">
          <Button onClick={togglefn} btnText={<MenuIcon />} btnStyle="nav" />
          <a
            href="/"
            className="flex flex-row gap-2 items-center font-semibold text-2xl"
          >
            <img src={logo} alt="" className="h-6" />
            <span>ReactTube</span>
          </a>
        </div>

        <div className="md:hidden" onClick={handleSearchClick}>
        <SearchIcon />
      </div>

        <Input placeholder="Search" />

        <div className="md:flex hidden flex-row gap-6 items-center">
          <Button btnText={<VideoCameraIcon />} />
          <Button btnText={<NotificationsIcon />} />
          <Button btnText={<ProfileIcon />} />
        </div>
      </div>

      

      {showSearch && <MobileSearch active={handleSearchClick} />}
    </div>
  );
});

export default NavBar;
