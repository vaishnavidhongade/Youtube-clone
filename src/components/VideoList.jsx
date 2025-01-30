import PropTypes from 'prop-types';
import Video from './Video';

function VideoList({ videos }) {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {videos.map((video, index) => (
                <Video key={index} {...video} />
            ))}
        </div>
    );
}
VideoList.propTypes = {
    videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideoList;