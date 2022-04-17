import React from "react";

const Footer = () => {
  return (
    <>
      <div className="pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="full px-4 mb-12 md:w-1/3">
              <h2 className="font-bold text-4xl text-blues-500 block py-6 cursor-pointer">
                chat<span className="text-aqua-500">app</span>
              </h2>
              <p className="w-2/3 text-sm text-gray-500">
                The last team chat you will ever need
              </p>
            </div>
            <div className="full px-4 mb-12 md:w-2/12">
              <h3 className="font-medium">Help</h3>
              <p className="text-sm text-gray-500 mt-4 cursor-pointer">
                Support
              </p>
              <p className="text-sm text-gray-500 mt-2 cursor-pointer">
                Knowledgebase
              </p>
              <p className="text-sm text-gray-500 mt-2 cursor-pointer">
                Tutorials
              </p>
            </div>
            <div className="full px-4 mb-12 md:w-2/12">
              <h3 className="font-medium">Features</h3>
              <p className="text-sm text-gray-500 mt-4 cursor-pointer">
                Screen Sharing
              </p>
              <p className="text-sm text-gray-500 mt-2 cursor-pointer">
                iOS and Android Apps
              </p>
              <p className="text-sm text-gray-500 mt-2 cursor-pointer">
                File Sharing
              </p>
              <p className="text-sm text-gray-500 mt-2 cursor-pointer">
                User Menagement
              </p>
            </div>
            <div className="full px-4 mb-12 md:w-2/12">
              <h3 className="font-medium">Company</h3>
              <p className="text-sm text-gray-500 mt-4 cursor-pointer">
                About Us
              </p>
              <p className="text-sm text-gray-500 mt-2 cursor-pointer">
                Careers
              </p>
              <p className="text-sm text-gray-500 mt-2 cursor-pointer">
                Contact Us
              </p>
            </div>
            <div className="full px-4 mb-12 md:w-1/12">
              <h3 className="font-medium">Contact Us</h3>
              <p className="text-sm text-gray-500 mt-4 cursor-pointer">
                info@chatapp.com
              </p>
              <p className="text-sm text-gray-500 mt-2 cursor-pointer">
                62-812-123-222
              </p>
            </div>
            <p className="text-sm text-gray-500">© Copyright Chatapp inc.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
