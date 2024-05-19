import { useState } from 'react';
import { tw } from 'twind';
import Play from '@/constants/svg/play.svg';

const PlayButton = ({ onClick }) => (
  <button
    type="button"
    className={tw(`w-64 lg:w-auto bg-white rounded-full font-medium group p-4 shadow-xl flex items-center`)}
    aria-label="play video"
    onClick={onClick}
  >
    <Play className={tw(`w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`)} />
    <span className={tw(`ml-3`)}>Watch the video (5 min)</span>
  </button>
);

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner relative`)}>
      <div className={tw(`max-w-7xl mx-auto pt-20`)}>
        <div className={tw(`flex flex-col max-w-4xl mx-auto relative`)}>
          <div className={tw(`w-full relative shadow-2xl mx-6 lg:mx-0 rounded-xl overflow-hidden`)}>
            <iframe
              width="100%"
              height="400"
              src={showVideo ? `https://www.youtube.com/embed/za3HjrAYmhM?autoplay=1&rel=0` : ``}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      {!showVideo && (
        <div className={tw(`max-w-7xl mx-auto px-6 lg:px-0`)}>
          <div className={tw(`flex justify-center items-center pt-6`)}>
            <PlayButton onClick={handlePlayButtonClick} />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
