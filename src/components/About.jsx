import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams] = useSearchParams();

  return <div>Query String: {searchParams.get("desc")}</div>;
};

export default About;
