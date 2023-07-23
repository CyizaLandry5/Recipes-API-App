import React from "react";
import ReactHtmlParser from "html-react-parser";
import './parsedHtlml.css'

const ParsedHTMLComponent = ({ htmlString }) => {
  const reactElements = ReactHtmlParser(htmlString);

  return <>{reactElements}</>;
};

export default ParsedHTMLComponent;
