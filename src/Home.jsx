import React, { useState } from "react";
import Contacts from "./contacts/Contacts";
import Sms from "./sms/Sms";

const Home = () => {

  const [openTab, setOpenTab] = useState(1);

  return (
    
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row primaryColor px-8" role="tablist">
            <li className={"-mb-0.5 mr-2 last:mr-0 flex-auto text-center"}>
              <a className={
                  "text-sm uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "font-bold bg-white text-black"
                    : "font-normal")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Contacts
              </a>
            </li>
            <li className="-mb-0.5 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-sm uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "font-bold bg-white text-black"
                    : "font-normal")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >Messages</a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
            <div className="mx-4 my-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Contacts />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Sms />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home