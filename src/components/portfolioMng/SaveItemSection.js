import React, { useEffect, useState } from "react";
import { getBigcate } from "../../api/portfolioAxios";
import PFsearch from "./PFsearch";
import SaveContent from "./SaveContent";

const SaveItemSection = () => {
  const [search, setSearch] = useState();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getBigcate(setCategory);
  }, []);

  return (
    <div>
      <PFsearch search={search} category={category} setCategory={setCategory} />
      <SaveContent />
    </div>
  );
};

export default SaveItemSection;
