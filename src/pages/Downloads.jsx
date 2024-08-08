import { useState, useCallback, useEffect } from "react";
import Heading from "../components/Typography/Heading";
import TopBanner from "../components/Banner/TopBanner";
import DownloadImage from "../assets/img/scolarship.webp";
import { FaDownload } from "react-icons/fa";

const Downloads = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const downloadsData = [
    {
      title: "Additional Grade Sheet Application Form",
      link: "/assets/pdfs/forms/additional-grade-sheets-form.pdf",
      download: "additional-grade-sheets-form.pdf"
    },
    {
      title: "Answer Sheet Photocopy Application Form",
      link: "/assets/pdfs/forms/answer-sheet-photocopy-form.pdf",
      download: "answer-sheet-photocopy-form.pdf"
    },
    {
      title: "Branch Change Application Form",
      link: "/assets/pdfs/forms/branch-change-form.pdf",
      download: "branch-change-form.pdf"
    },
    {
      title: "Duplicate Registration Card Application Form",
      link: "/assets/pdfs/forms/duplicate-registration-form.pdf",
      download: "duplicate-registration-form.pdf"
    },
    {
      title: "Duplicate Degree Certificate Application Form",
      link: "/assets/pdfs/forms/duplicate-degree-certificate.pdf",
      download: "duplicate-degree-certificate.pdf"
    },
    {
      title: "Duplicate Grade Sheet Application Form",
      link: "/assets/pdfs/forms/duplicate-grade-sheet-form.pdf",
      download: "duplicate-grade-sheet-form.pdf"
    },
    {
      title: "Duplicate Migration Certificate Form",
      link: "/assets/pdfs/forms/duplicate-migration-certificate-form.pdf",
      download: "duplicate-migration-certificate-form.pdf"
    },
    {
      title: "Inter College Transfer Application Form",
      link: "/assets/pdfs/forms/inter-college-transfer-form.pdf",
      download: "inter-college-transfer-form.pdf"
    },
    {
      title: "Medical Certificate Submission Form",
      link: "/assets/pdfs/forms/medical-certificate-submission-form.pdf",
      download: "medical-certificate-submission-form.pdf"
    },
    {
      title: "Migration Certificate Application Form",
      link: "/assets/pdfs/forms/migration-certificate-form.pdf",
      download: "migration-certificate-form.pdf"
    },
    {
      title: "Name Correction in Degree Certificate Form",
      link: "/assets/pdfs/forms/name-correction-in-degree-certificate-form.pdf",
      download: "name-correction-in-degree-certificate-form.pdf"
    },
    {
      title: "Rechecking Form",
      link: "/assets/pdfs/forms/rechecking-form.pdf",
      download: "rechecking-form.pdf"
    },
    {
      title: "Semester Registration Form",
      link: "/assets/pdfs/forms/semester-registration-form.pdf",
      download: "semester-registration-form.pdf"
    },

  ];

  // Debounced search function
  const debouncedSearch = useCallback(() => {
    if (query.trim() === "") {
      setSearchResults(downloadsData);
    } else {
      const results = downloadsData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [query]);

  useEffect(() => {
    const handler = setTimeout(() => {
      debouncedSearch();
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query, debouncedSearch]);

  return (
    <div className="min-h-screen w-full" >
      <TopBanner
        bannerImage={DownloadImage}
        text={"Downloads"}
        position="center"
        parent={"Downloads"}
      />
      <div className="min-h-screen w-[95%] sm:w-[95%] md:w-[75%] flex flex-col items-center mx-auto px-4 bg-white py-10 " data-aos='fade-up'>
        <div className="w-full block mx-auto" data-aos='fade-up'>
          <div
            className="w-fit text-justify text-gray-600"
            style={{ fontFamily: '"Open Sans", sans-serif' }} data-aos='fade-up'
          >
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4" data-aos='fade-up'>
              <Heading text={"Search for Documents"} />
              <div className="w-full mt-7" data-aos='fade-up'>
                <div className="relative w-full max-w-md bg-white rounded-full" data-aos='fade-up'>
                  <input
                    placeholder="Search Documents"
                    className="rounded-full w-full bg-transparent py-2 pl-8 pr-32 outline-none border-[1px] border-blue-400 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200"
                    type="text"
                    name="query"
                    id="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-10" data-aos='fade-up'>
                {searchResults?.map((item, index) => (
                  <div key={index} className="p-2" data-aos='fade-up'>
                    <div className="bg-teal-100 text-teal-800 rounded flex p-2 items-center" data-aos='fade-up'>
                      <FaDownload className="mr-3" />
                      <a
                        download={item?.download}
                        href={item?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="font-medium">{item?.title}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
