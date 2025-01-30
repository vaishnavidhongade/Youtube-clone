
import "./App.css";
import VideoList from "./components/VideoList";
import VideoData from "./data/VideoData";

function App() {
  return (
    <div className="App">
      {/* Pass the videos array to VideoList */}
      <VideoList videos={VideoData} />
      <VideoList videos={VideoData} />
    </div>
  );
}

export default App;
