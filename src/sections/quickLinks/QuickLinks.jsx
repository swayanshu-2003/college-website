import { QuickLinkData } from "@/data/QuickLinkData";
import QuickLinkButton from "./QuickLinkButton";
import Heading2 from "@/components/Typography/Heading2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function QuickLinks() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-8  w-full border-t " data-aos='fade-up'>
      <div className="w-full  py-1">
        {/* <Heading2 text="Quick Links" /> */}
        <h2 className="text-3xl font-semibold mb-2 text-blue-800 w-full text-center" style={{ fontFamily: "Roboto Slab" }}>Quick Links</h2>

      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-t-lg">
        <div className="mx-auto mt-10 flex w-full items-center justify-between max-sm:flex-col gap-6 flex-wrap">
          {QuickLinkData &&
            QuickLinkData.map((data, index) => {
              return (
                <QuickLinkButton
                  key={index}
                  title={data.title}
                  link={data.url}
                  icon={data.icon}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
