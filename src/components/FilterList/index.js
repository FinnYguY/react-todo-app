import React from "react";
import Filter from "../Filter/";
import { filterNames } from "../../constants/filter";
import { filterList } from "./FilterList.module.scss";

export default function FilterList() {
  return (
    <div className={filterList}>
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
