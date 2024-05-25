import { useState } from "react";
import NavBar from "./layouts/NavBar";
import SideNav from "./layouts/SideNav";
import Tags from "./components/Tag/Tags";
import VideoCard from "./components/VideoCard/VideoCard";
import { ProfileIcon } from "./components/Icons/Icons";

function App() {
  const [isSideNavVisible, setSideNavVisible] = useState<boolean>(false);

  const toggleSideNav = () => {
    setSideNavVisible((prevState) => !prevState);
  };

  const tagData = [
    "All",
    "Crime",
    "Gaming",
    "Typescript",
    "React",
    "100xDevs",
    "Suits",
    "Friends",
    "Nodejs",
    "MongoDb",
    "Game of Thrones",
    "TechReview",
    "Gadgets",
    "ProductReview",
    "Gaming",
    "Travel",
  ];

  const dummyVideos = [
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      duration  : "3:54",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1716455844864-6133ebfd3bd6?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      duration  : "3:54",
      channelLogo: <ProfileIcon />,
      description: "416k views . 6 months ago",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1715835441810-38bcd2756da6?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      duration  : "3:54",
      channelLogo: <ProfileIcon />,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1716382050099-9c934fcadddd?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      duration  : "3:54",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1608609529987-6b0f453ba172?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      duration  : "3:54",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1716455850195-f8e41d3ba1bb?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },{
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      duration  : "3:54",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1716455844864-6133ebfd3bd6?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      duration  : "3:54",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1715835441810-38bcd2756da6?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      duration  : "3:54",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1716382050099-9c934fcadddd?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      duration  : "3:54",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1608609529987-6b0f453ba172?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      duration  : "3:54",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1716455850195-f8e41d3ba1bb?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },{
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      duration  : "3:54",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1716455844864-6133ebfd3bd6?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      duration  : "3:54",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1715835441810-38bcd2756da6?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      duration  : "3:54",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1716382050099-9c934fcadddd?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      duration  : "3:54",
      channelLogo: <ProfileIcon />,
      thumbnailUrl:
        "https://images.unsplash.com/photo-1608609529987-6b0f453ba172?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Video 1",
      channelName: "Channel A",
      description: "416k views . 6 months ago",
      channelLogo: <ProfileIcon />,
      duration  : "3:54",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1716455850195-f8e41d3ba1bb?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="h-screen flex flex-col overflow-x-hidden">
      <NavBar togglefn={toggleSideNav} />
      <div className="flex flex-row gap-1 flex-grow">
        {isSideNavVisible && <SideNav />}
        <div className="flex flex-col w-full">
          <Tags data={tagData} isVisible={isSideNavVisible} />
          <div className="flex flex-row justify-center flex-wrap gap-6 p-4">
            {dummyVideos.map((data) => (
              <VideoCard
                key={data.id}
                title={data.title}
                channelName={data.channelName}
                description={data.description}
                img={data.thumbnailUrl}
                channelLogo={data.channelLogo}
                duration={data.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
