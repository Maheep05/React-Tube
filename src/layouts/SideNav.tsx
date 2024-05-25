import { FC, memo } from "react";
import Button from "../components/Button/Button";
import {
  ChannelIcon,
  CoursesIcon,
  DownloadIcon,
  FashionIcon,
  GamingIcon,
  HelpIcon,
  HistoryIcon,
  HomeIcon,
  LikedIcon,
  LiveIcon,
  MoviesIcon,
  MusicIcon,
  NewsIcon,
  PlaylistIcon,
  PodcastIcon,
  ProfileIcon,
  ReelsIcon,
  ReportIcon,
  SettingsIcon,
  ShoppingIcon,
  SportsIcon,
  SubscriptionsIcon,
  TrendingIcon,
  VideosIcon,
  WatchLaterIcon,
} from "../components/Icons/Icons";



const SideNav:FC = memo(() => {

    const data = [
        {
          btnStyle: "sideButton",
          btnText: "Home",
          btnIcon: <HomeIcon />,
        },
        {
          btnStyle: "sideButton",
          btnText: "Shorts",
          btnIcon: <ReelsIcon />,
        },
        {
          btnStyle: "sideButton",
          btnText: "Subscriptions",
          btnIcon: <SubscriptionsIcon />,
        },
      ];
    
      const youData = [
        {
          btnStyle: "sideButton",
          btnText: "Your Channel",
          btnIcon: <ChannelIcon />,
        },
        {
          btnStyle: "sideButton",
          btnText: "History",
          btnIcon: <HistoryIcon />,
        },
        {
          btnStyle: "sideButton",
          btnText: "Playlists",
          btnIcon: <PlaylistIcon />,
        },
        {
          btnStyle: "sideButton",
          btnText: "Your Videos",
          btnIcon: <VideosIcon />,
        },
        {
          btnStyle: "sideButton",
          btnText: "Watch Later",
          btnIcon: <WatchLaterIcon />,
        },
        {
          btnStyle: "sideButton",
          btnText: "Liked Videos",
          btnIcon: <LikedIcon />,
        },
        {
          btnStyle: "sideButton",
          btnText: "Downloads",
          btnIcon: <DownloadIcon />,
        },
      ];
    
      const subscriptionsData = [
        {
          btnStyle: "sideButton",
          btnText: "Subscription 1",
          btnIcon: <ProfileIcon />,
        }, {
            btnStyle: "sideButton",
            btnText: "Subscription 2",
            btnIcon: <ProfileIcon />,
          }, {
            btnStyle: "sideButton",
            btnText: "Subscription 3",
            btnIcon: <ProfileIcon />,
          }, {
            btnStyle: "sideButton",
            btnText: "Subscription 4",
            btnIcon: <ProfileIcon />,
          }, {
            btnStyle: "sideButton",
            btnText: "Subscription 5",
            btnIcon: <ProfileIcon />,
          }, {
            btnStyle: "sideButton",
            btnText: "Subscription 6",
            btnIcon: <ProfileIcon />,
          }, {
            btnStyle: "sideButton",
            btnText: "Subscription 7",
            btnIcon: <ProfileIcon />,
          }, {
            btnStyle: "sideButton",
            btnText: "Subscription 8",
            btnIcon: <ProfileIcon />,
          }, {
            btnStyle: "sideButton",
            btnText: "Subscription 9",
            btnIcon: <ProfileIcon />,
          }, {
            btnStyle: "sideButton",
            btnText: "Subscription 10",
            btnIcon: <ProfileIcon />,
          },
      ];
    
      const exploreData = [ {
        btnStyle: "sideButton",
        btnText: "Trending",
        btnIcon: <TrendingIcon />,
      }, {
        btnStyle: "sideButton",
        btnText: "Shopping",
        btnIcon: <ShoppingIcon />,
      }, {
        btnStyle: "sideButton",
        btnText: "Music",
        btnIcon: <MusicIcon />,
      }, {
        btnStyle: "sideButton",
        btnText: "Movies",
        btnIcon: <MoviesIcon />,
      }, {
        btnStyle: "sideButton",
        btnText: "Live",
        btnIcon: <LiveIcon />,
      }, {
        btnStyle: "sideButton",
        btnText: "Gaming",
        btnIcon: <GamingIcon />,
      }, {
        btnStyle: "sideButton",
        btnText: "News",
        btnIcon: <NewsIcon />,
      }, {
        btnStyle: "sideButton",
        btnText: "Sports",
        btnIcon: <SportsIcon/>,
      }, {
        btnStyle: "sideButton",
        btnText: "Courses",
        btnIcon: <CoursesIcon />,
      }, {
        btnStyle: "sideButton",
        btnText: "Fashion & Beauty",
        btnIcon: <FashionIcon />,
      }, {
        btnStyle: "sideButton",
        btnText: "Podcasts",
        btnIcon: <PodcastIcon />,
      },]
    
      const extraData = [{
        btnStyle: "sideButton",
        btnText: "Settings",
        btnIcon: <SettingsIcon />,
      },{
        btnStyle: "sideButton",
        btnText: "Report History",
        btnIcon: <ReportIcon />,
      },{
        btnStyle: "sideButton",
        btnText: "Help",
        btnIcon: <HelpIcon />,
      },{
        btnStyle: "sideButton",
        btnText: "Send ",
        btnIcon: <SettingsIcon />,
      },]

  return (
    <div className={`p-4 h-screen border-r w-96 `}>
      <div className=" flex flex-col gap-2">
        {data.map((content, index) => (
          <Button
            key={index}
            btnStyle={content.btnStyle}
            btnText={content.btnText}
            btnIcon={content.btnIcon}
          />
        ))}
        <span className="border w-52 my-4"></span>
      </div>

      <div className="flex flex-col gap-2">
        {youData.map((content, index) => (
          <Button
            key={index}
            btnStyle={content.btnStyle}
            btnText={content.btnText}
            btnIcon={content.btnIcon}
          />
        ))}
        <span className="border w-52 my-4"></span>
      </div>

      <div className="flex flex-col gap-2">
        {subscriptionsData.map((content, index) => (
          <Button
            key={index}
            btnStyle={content.btnStyle}
            btnText={content.btnText}
            btnIcon={content.btnIcon}
          />
        ))}
        <span className="border w-52 my-4"></span>
      </div>

      <div className="flex flex-col gap-2">
        {exploreData.map((content, index) => (
          <Button
            key={index}
            btnStyle={content.btnStyle}
            btnText={content.btnText}
            btnIcon={content.btnIcon}
          />
        ))}
        <span className="border w-52 my-4"></span>
      </div>
      <div className="flex flex-col gap-2">
        {extraData.map((content, index) => (
          <Button
            key={index}
            btnStyle={content.btnStyle}
            btnText={content.btnText}
            btnIcon={content.btnIcon}
          />
        ))}
        <span className="border w-52 my-4"></span>
      </div>


    </div>
  );
});

export default SideNav;
