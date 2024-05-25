import { FC, memo } from "react";
import Button from "../Button/Button";

interface TagsProps {
  data: string[];
  isVisible: boolean;
}

// Define the generic type T at the component level
const Tags: FC<TagsProps> = memo(({ data, isVisible }) => {
  return (
    <div
      className={`flex ${
        isVisible ? "w-[80rem] overflow-x-auto" : "w-screen" 
      }  flex-row gap-2 px-2 `}
      style={{ overflowY: "hidden", scrollbarWidth: "none" }}
    >
      {data.map((tag, index) => (
        <Button key={index} btnText={tag} btnStyle="tags" />
      ))}
    </div>
  );
});

export default Tags;
