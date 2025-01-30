import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';

function Video({ title, id, channel, views, time = "live", verified }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative pb-[56.25%]">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-xl text-gray-800 truncate">{title}</h3>
          <div className="flex items-center gap-2 mt-2 text-gray-500">
            <span>{channel}</span>
            {verified && (
              <FaCheckCircle className="text-green-500 text-sm" />
            )}
          </div>
          <div className="text-sm text-gray-400 mt-1">
            {views} views <span className="mx-1">&bull;</span> {time}
          </div>
        </div>
      </div>
    </div>
  );
}

Video.propTypes = {
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  time: PropTypes.string,
  verified: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

export default Video;





