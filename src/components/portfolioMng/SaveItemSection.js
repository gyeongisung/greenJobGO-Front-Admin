import React, { useEffect, useState } from "react";
import { getBigcate } from "../../api/portfolioAxios";
import PFsearch from "./PFsearch";
import SaveItemContent from "./SaveItemContent";

const SaveItemSection = () => {
  const [search, setSearch] = useState();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getBigcate(setCategory);
  }, []);

  return (
    <div>
      <PFsearch search={search} category={category} setCategory={setCategory} />
      <SaveItemContent />
    </div>
  );
};

export default SaveItemSection;
