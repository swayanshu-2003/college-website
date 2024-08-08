import React from "react";
import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { HashLink } from "react-router-hash-link";
import { SheetClose } from "@/components/ui/sheet";

function NavAccrodion({ data, isExpanded, handleChange, index }) {
  return (
    <div>
      {data?.subItems && (
        <Accordion
          expanded={isExpanded}
          onChange={() => handleChange(index)}
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {data.title}
          </AccordionSummary>
          {data?.subItems && (
            <AccordionDetails>
              <div>
                {data?.subItems?.map((subItem, subIndex) => (
                  <React.Fragment key={subIndex}>
                    {subIndex !== 0 && <hr className="mx-4 my-2" />}
                    <SheetClose asChild>
                      <HashLink
                        to={`${subItem.path}/?tab=${subItem.tab}`}
                        className="text-sm capitalize p-4"
                      >
                        {subItem.title}
                      </HashLink>
                    </SheetClose>
                  </React.Fragment>
                ))}
              </div>
            </AccordionDetails>
          )}
        </Accordion>
      )}
    </div>
  );
}

NavAccrodion.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subItems: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subItems: PropTypes.array,
      })
    ),
  }).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default NavAccrodion;
