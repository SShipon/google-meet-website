import React from "react";

const SocialHome = () => {
  return (
    <div>
      <div className="px-4 py-6">
        <div class="grid grid-cols-4 gap-4 "> 
          <div class="col-span-1 ">
                <div className="">
                <h2 className="text-2xl font-medium mb-2">Key Features</h2>
                <div className="bg-gray-50 rounded shadow-sm">
                    <div className="flex items-center bg-primary text-white pl-4 py-3 rounded">
                    <i class="fa-solid fa-clapperboard mr-2"></i>
                        <h4>Social (News Feed)</h4>
                    </div> 
                    <hr />
                    <div className="flex items-center pl-4 py-3 rounded">
                    <i class="fa-solid fa-video mr-2"></i>
                        <h4>Meeting</h4>
                    </div>
                        <hr />
                    <div className="flex items-center pl-4 py-3 rounded"><i class="fa-solid fa-comment-dots mr-2"></i>
                        <h4>Chatting</h4>
                    </div>
                        <hr />
                    <div className="flex items-center pl-4 py-3 rounded"><i class="fa-solid fa-play mr-2"></i>
                        <h4>Play</h4>
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

          
          <div class="col-span-3 ">07</div>
        </div>
      </div>
    </div>
  );
};

export default SocialHome;
