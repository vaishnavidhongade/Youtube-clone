import "./App.css";
import Video from "./components/video";

function App() {
  let videos = [
    {
      title: "React JS tutorial",
      views: "100k",
      time: "1month",
      channel: "Random123",
      verified: true,
    },
    {
      title: "node JS tutorial",
      views: "200k",
      time: "1month",
      channel: "Random123",
      verified: true,
    },
    {
      title: "Javascript tutorial",
      views: "5m",
      time: "1month",
      channel: "Random123",
      verified: true,
    },
    {
      title: "Java tutorial",
      views: "200k",
      time: "1month",
      channel: "Random123",
      verified: true,
    },
    {
      title: "java full course",
      views: "1m",
      time: "1month",
      channel: "Random123",
      verified: true,
    },
  ];

  return (
    <div className="App">
      {videos.map((video) => (
        <Video>
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        </Video>
      ))}
    </div>
  );
}

export default App;
