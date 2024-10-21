"use client";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const [term, setTerm] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const searchparam = useSearchParams();

  useEffect(() => {
    if (searchparam.has("search")) {
      setTerm(searchparam.get("search"));
    }
  }, []);

  const handleSearch = (remove) => {
    const params = new URLSearchParams(searchparam);
    params.delete("category");

    if (remove) {
      params.delete("search");
      setTerm("");
    } else {
      params.set("search", term);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-[15px] w-fit h-fit">
      <input
        onChange={(e) => setTerm(e.target.value)}
        defaultChecked={term}
        value={term}
        type="text"
        className="w-[280px] h-[40px] bg-[white] rounded-[4px] pl-[10px] border-[1px]  border-[red] border-dashed placeholder:text-[black] placeholder:text-[15px]"
        placeholder="Search ..."
      />
      {searchparam.has("search") ? (
        <button
          onClick={() => handleSearch(true)}
          href="#"
          className="btn h-[40px] w-[40px] bg-[red] rounded-[5px] flex justify-center items-center"
        >
          <CloseIcon className="text-[white] text-[25px]" />
        </button>
      ) : (
        <button
          onClick={() => term !== "" && handleSearch()}
          href="#"
          className="btn h-[40px] w-[40px] bg-[red] rounded-[5px] flex justify-center items-center"
        >
          <SearchIcon className="text-[white] text-[25px]" />
        </button>
      )}
    </div>
  );
};

export default Search;
