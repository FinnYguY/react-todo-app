import React from "react";
import Filter from "../Filter/Filter";
import { filterNames } from "../../constants/filter";
import "./FilterList.scss";

export default function FilterList() {
  return (
    <div className="filter-list">
      {filterNames.map((filter, index) => {
        return (
          <Filter key={index} filter={`SHOW_${filter.toUpperCase()}`}>
            {filter}
          </Filter>
        );
      })}
    </div>
  );
}
