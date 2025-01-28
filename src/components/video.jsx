import "./video.css";
function Video({ title, channel, views, time = "live", verified }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://picsum.photos/id/237/160/90" alt="Katherine" />
        </div>
        <div className="title">{title}</div>
        {/* {verified ? <div className="verified">Verified</div> : null} */}
        <div className="channel">
          {channel}
          {verified && "iiiiiiiiii"}
        </div>
        <div className="views">
          {views}views<span>.</span>
          {time}
        </div>
      </div>
    </>
  );
}
export default Video;
