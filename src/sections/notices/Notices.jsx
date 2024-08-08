import Carousel from "@itseasy21/react-elastic-carousel";
import MacBtns from "../../assets/misc/macbook.png";
import { getNotices } from "./noticeData";
import { useEffect, useState } from "react";
import { PropagateLoader, SkewLoader } from "react-spinners";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Notices = ({ itemsToShow = 8, showCarousel = true, className = "", shouldRefetch, setShouldRefetch }) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState();
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    const getNoticeData = async () => {
      setLoading(true);
      const data = await getNotices();
      // console.log(data?.data?.notices);
      if (data?.data) {
        const descendingData = data?.data?.notices.slice().reverse(); // Create a new array with reversed order
        setItems(descendingData);
        setLoading(false)
      }
      setLoading(false)

    }
    getNoticeData()

  }, [shouldRefetch])


  //filter notices of last 10 days
  const setnewTag = (date) => {
    const uploadDate = new Date(date);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - uploadDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    if (differenceInDays <= 10) {
      return true;
    }
    else {
      return false;
    }
  }



  return (
    <>
      <div className={`w-full lg:w-4/5 flex flex-col justify-center items-center rounded-lg border border-gray-200 shadow ${className}`} >
        <div className="w-full flex items-center justify-between bg-gray-800 rounded-t-lg px-4">
          <h1 className="w-auto  text-white text-3xl font-semibold px-3 py-1">Notices</h1>
          <img src={MacBtns} alt="" className="w-12" />
        </div>
        <div className="w-full h-[500px] lg:h-auto mx-4 lg:mx-16 bg-white rounded-b-xl px-4 py-4 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center h-72 w-full">
              <span className='flex flex-col-reverse gap-4 items-center justify-center'><span className='text-gray-500'>Loading...</span><SkewLoader color="#1f2937" /></span>
            </div>
          ) : (
            showCarousel ? (
              <Carousel
                verticalMode
                pagination={false}
                showArrows={false}
                enableAutoPlay
                autoPlaySpeed={2000}
                itemsToShow={itemsToShow}
                className="w-full h-full"
                preventDefaultTouchmoveEvent={false}
              >
                {items && items.map((item, index) => (
                  <div key={index} className="flex justify-start gap-x-6 py-3 w-full overflow-auto h-auto">
                    <div className="flex flex-col lg:flex-row min-w-0 w-auto overflow-hidden truncate gap-x-4">
                      <div className="flex items-center">
                        <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full min-w-32">{new Date(item?.uploadDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        <svg className="h-4 w-4 ml-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        {setnewTag(item?.uploadDate) &&
                          <span className="w-14 md:hidden inline-flex items-center rounded-full bg-red-50 px-4 h-6 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                            New
                          </span>}
                      </div>
                      <div className="min-w-0 ml-4 lg:ml-0 mt-1 lg:mt-0 flex-auto truncate">
                        <a href={`${item?.link}`} target='_blank' rel='noopener noreferrer' className="text-sm font-semibold leading-6 text-blue-700 truncate">{item?.title}</a>
                      </div>
                      {setnewTag(item?.uploadDate) &&
                        <span className="w-14 hidden md:inline-flex items-center rounded-full bg-red-50 px-4 h-6 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                          New
                        </span>}
                    </div>

                  </div>
                ))}
              </Carousel>
            ) : (
              items && items.map((item, index) => (
                <div key={index} className="flex justify-start gap-x-6 py-3 w-full overflow-auto h-auto">
                  <div className="flex flex-col lg:flex-row min-w-0 w-auto overflow-hidden truncate gap-x-4">
                    <div className="flex items-center">
                      <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">{new Date(item?.uploadDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      <svg className="h-4 w-4 ml-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      {setnewTag(item?.uploadDate) &&
                        <span className=" w-14 inline-flex md:hidden items-center rounded-full bg-red-50 px-4 h-6 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                          New
                        </span>}
                    </div>
                    <div className="min-w-0 ml-4 lg:ml-0 mt-1 lg:mt-0 flex-auto truncate">
                      <a href={`https://${item?.link}`} className="text-sm font-semibold leading-6 text-blue-700 truncate">{item?.title}</a>
                    </div>
                    {setnewTag(item?.uploadDate) &&
                      <span className="w-14 hidden md:inline-flex items-center rounded-full bg-red-50 px-4 h-6 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        New
                      </span>}
                  </div>
                </div>
              ))
            )
          )}
          <div className="w-full flex justify-end">
            <Link className="font-semibold text-red-700 text-sm" to={"/academics/?tab=notices"}>Show All...</Link>
          </div>
        </div>
      </div >
    </>
  );


};

export default Notices;
