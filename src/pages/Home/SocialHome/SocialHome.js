import React from "react";
import photo from "../../../assets/images/osthir.png";

const videoItems = [
  {
    id: "1",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "2",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "3",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "4",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "5",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "6",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
  {
    id: "7",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    photo: photo,
    title: "Mission impossible dead reckoning IMX",
    published: "American, 10 June 2020",
    views:17,
    react: "10 Love",
    comments: '14 Comments',
    share: '9 Share',
  },
];

const SocialHome = () => {
  

  return (
    <div>
      <div className="px-4 py-6">
        <div class="grid grid-cols-4 gap-4 ">
          {/* ---left side bar start--- */}
          <div class="col-span-1 overflow-clip">
            <div  >
              <h2 className="text-2xl font-medium mb-2">Key Features</h2>
              <div className="bg-gray-50 rounded shadow-sm">
                <div className="flex items-center bg-[#0a66c2] text-white pl-4 py-3 rounded">
                  <i class="fa-solid fa-clapperboard mr-2"></i>
                  <h4>Play</h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-video mr-2"></i>
                  <h4>Meet</h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-comment-dots mr-2"></i>
                  <h4>Hangout</h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-play mr-2"></i>
                  <h4>Moment</h4>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <h2 className="text-2xl font-medium mb-2">Account</h2>
              <div className="rounded bg-gray-50 shadow-sm">
                <div className="flex items-center  text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-user mr-2"></i>
                  <h4>My Profile</h4>
                </div>
                <hr />
                <div className="flex items-center text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-user-pen mr-2"></i>
                  <h4>Edit Profile</h4>
                </div>
              </div>
            </div>

            <div class="mt-2 ">
              <h2 className="text-2xl font-medium mb-2">Additional Settings</h2>
              <div className="bg-gray-50 rounded shadow-sm">
                <div className="flex items-center  text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-gear mr-2"></i>
                  <h4>Settings</h4>
                </div>
                <hr />
                <div className="flex items-center text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-circle-dot mr-2"></i>
                  <h4>Options</h4>
                </div>
              </div>
            </div>
          </div>
          {/* ---left side bar end--- */}

        {/* ---right video part start--- */}
          <div class="col-span-3">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
              {videoItems.map((vdo) => (
                <div>
                  <div>
                    <iframe width='100%' src={vdo.videoUrl} frameBorder="0"></iframe>
                  </div>
                  <div className="flex items-center justify-between px-2">
                    <img className="rounded-full" src={vdo.photo} height='30px' width='30px' alt="author photo" />
                    <h5 className="pr-4 ml-2">{vdo.title}</h5>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                  <small className="pl-12 "><i class="fa-solid fa-circle text-xs text-[8px]"></i> {vdo.published} <span>views: {vdo.views}</span></small>  
                  <hr className="my-4" /> 
                  <div className="flex items-center justify-between px-2">
                    <small><i class="fa-sharp fa-solid fa-heart pr-1"></i>{vdo.react}</small>
                    <small><i class="fa-solid fa-comment-dots pr-1"></i>{vdo.comments}</small>
                    <small><i class="fa-solid fa-share-nodes pr-1"></i>{vdo.share}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ---right video part end--- */}

        </div>
      </div>
    </div>
  );
};

export default SocialHome;
