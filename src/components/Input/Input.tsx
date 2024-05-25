import { FC, memo } from "react";
import { MicIcon, SearchIcon } from "../Icons/Icons";
import Button from "../Button/Button";

interface InputProps {
  placeholder: string;
  inputType?: string;
}

const Input: FC<InputProps> = memo(({ placeholder,inputType }) => {

    const inputClass = inputType === 'mobile' ? " flex flex-row justify-between px-1" : "border-2 rounded-3xl md:flex hidden flex-row items-center justify-between py-1 px-3 w-40rem";


  return (
    <div className="flex  flex-row items-center gap-1">
      <div className={`${inputClass}`}>
        <input
          type="text"
          placeholder={placeholder}
          className="md:w-96 w-72 p-1 outline-none"
        />
        <Button btnText={<SearchIcon />} btnStyle="nav" />
      </div>
      <Button btnText={<MicIcon />} btnStyle="nav" />
    </div>
  );
});

export default Input;
