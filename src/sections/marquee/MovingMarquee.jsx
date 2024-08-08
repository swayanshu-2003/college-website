import React, { useEffect, useState } from "react";
import { getNotices } from "../notices/noticeData";

export default function MovingMarquee() {

  const [noticeitems, setNoticeItems] = useState([]);

  useEffect(() => {
    const getNoticeData = async () => {
      const data = await getNotices();
      // console.log(data?.data?.notices);
      if (data?.data) {
        const descendingData = data?.data?.notices.slice().reverse(); // Create a new array with reversed order
        setNoticeItems(descendingData);

      }


    }
    getNoticeData()

  }, [])



  return (
    <div className="relative flex w-full items-center bg-gray-800 -mt-2">
      <div className="relative flex max-w-[100vw] overflow-hidden py-2 max-sm:py-1 items-center">
        <div className="mx-[-0.5rem] w-[5rem]">
          <button className=" relative inline-flex items-center justify-center py-1 px-8 max-sm:px-3 text-lg max-sm:text-xs font-medium text-white bg-yellow-500 z-10 -skew-x-[20deg]">
            <span className="span">Latest</span>
            <span className="second ml-2">
              <svg
                className="w-10 h-4 max-sm:w-8 max-sm:h-3"
                viewBox="0 0 66 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="one"
                  d="M40.1544 3.89485L43.9763 0.139297C44.1708 -0.0518421 44.4826 -0.0518571 44.6772 0.139263L65.6916 20.7848C66.0856 21.1719 66.0912 21.805 65.7041 22.199C65.7 22.2032 65.6959 22.2073 65.6917 22.2114L44.6771 42.8608C44.4826 43.0519 44.1708 43.0519 43.9763 42.8609L40.1545 39.1069C39.9575 38.9134 39.9547 38.5969 40.1482 38.3999C40.1503 38.3977 40.1524 38.3956 40.1546 38.3935L56.9938 21.8568C57.1908 21.6633 57.1937 21.3467 57.0002 21.1497C56.9981 21.1475 56.996 21.1454 56.9938 21.1433L40.1545 4.60825C39.9575 4.41478 39.9546 4.09821 40.1481 3.90117C40.1502 3.89905 40.1523 3.89694 40.1544 3.89485Z"
                  fill="#FFFFFF"
                />
                <path
                  className="two"
                  d="M20.1544 3.89485L23.9763 0.139297C24.1708 -0.0518421 24.4826 -0.0518571 24.6772 0.139263L45.6916 20.7848C46.0856 21.1719 46.0912 21.805 45.7041 22.199C45.7 22.2032 45.6959 22.2073 45.6917 22.2114L24.6771 42.8608C24.4826 43.0519 24.1708 43.0519 23.9763 42.8609L20.1545 39.1069C19.9575 38.9134 19.9547 38.5969 20.1482 38.3999C20.1503 38.3977 20.1524 38.3956 20.1546 38.3935L36.9938 21.8568C37.1908 21.6633 37.1937 21.3467 37.0002 21.1497C36.9981 21.1475 36.9959 21.1454 36.9938 21.1433L20.1545 4.60825C19.9575 4.41478 19.9546 4.09821 20.1481 3.90117C20.1502 3.89905 20.1523 3.89694 20.1544 3.89485Z"
                  fill="#FFFFFF"
                />
                <path
                  className="three"
                  d="M0.154393 3.89485L3.97631 0.139297C4.17083 -0.0518421 4.48263 -0.0518571 4.67717 0.139263L25.6916 20.7848C26.0856 21.1719 26.0912 21.805 25.7041 22.199C25.7 22.2032 25.6959 22.2073 25.6917 22.2114L4.6771 42.8608C4.4826 43.0519 4.17082 43.0519 3.97629 42.8609L0.154519 39.1069C-0.0424848 38.9134 -0.0453207 38.5969 0.148185 38.3999C0.150289 38.3977 0.152413 38.3956 0.154556 38.3935L16.9938 21.8568C17.1908 21.6633 17.1937 21.3467 17.0002 21.1497C16.9981 21.1475 16.9959 21.1454 16.9938 21.1433L0.154521 4.60825C-0.0425131 4.41478 -0.0453987 4.09821 0.148076 3.90117C0.150163 3.89905 0.152269 3.89694 0.154393 3.89485Z"
                  fill="#FFFFFF"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex w-max animate-marquee [--duration:25s] hover:[animation-play-state:paused] gap-16">
          {noticeitems?.map((item, index) => (
            <div key={index} className="h-full px-2.5 w-max ">
              <div className="mt-auto flex items-center gap-4 w-auto">
                <div className="flex flex-col text-sm max-sm:text-xs w-auto">
                  <a href={item?.link} target="_blank" className="text-white w-auto">
                    {item.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
