import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Dynamic = () => {
  const { id } = useParams();

  const [searchParams] = useSearchParams({ title: "mg mg" });

  return (
    <>
      <div>Dynamic ID: {id}</div>
      <p>Fixed search param : {searchParams.get("title")}</p>
    </>
  );
};

export default Dynamic;
