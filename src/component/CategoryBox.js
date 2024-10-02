import queryString from "query-string";
import React, { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ icon: Icon, label, selected }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (searchParams) {
      currentQuery = Object.fromEntries(searchParams.entries()); // Convert URLSearchParams to an object
    }

    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    if (searchParams.get("category") === label) { // Now searchParams.get should work
      delete updatedQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    navigate(url);
  }, [label, navigate, searchParams]);

  return (
    <div
      onClick={handleClick}
      className={` flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"} ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
