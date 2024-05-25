import { FC, ReactNode, memo } from "react";

interface VideoCardProps {
    img : string,
    title : string,
    channelLogo : ReactNode,
    channelName : string,
    description : string,
    duration : string,
}

const VideoCard : FC<VideoCardProps> = memo(({img,title,channelName,description,channelLogo , duration}) => {
  return (
    <div className="p-2">
      <div className="flex flex-col p-4 border rounded-xl w-[23rem] cursor-pointer ">
        <div className="relative">
        <img src={img} alt="img" className="md:h-52 md:w-96 rounded-xl "/>
        <span className="absolute bottom-2 right-4 bg-gray-900 px-4 rounded-lg opacity-80 text-white">{duration}</span>
        </div>
        <div className="flex flex-row gap-4 py-4">
          <span className="border flex justify-center items-center rounded-full bg-secondary h-12 w-12 text-center">{channelLogo}</span>
          <div className="flex flex-col">
            {/* title */}
            <span>{title}</span>
            {/* channel name */}
            <span>{channelName}</span>
            <span className=" text-secondary-border">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default VideoCard;
