"use client";

import { nanoid } from "nanoid";
import { useState } from "react";
import { data } from "@/data";
import Card from "@/components/Card";
import Search from "@/components/Search";
import Heading from "@/components/Heading";
import { useInputStore } from "./store";
import { shallow } from "zustand/shallow";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [searchedArray, setSearchedArray] = useState(data);
  const [searchedValue, setSearchedValue] = useState("");

  const recommendArray = data.filter((data) => data.isTrending === false);
  const trendingArray = data.filter((data) => data.isTrending);
  const [reset, setReset] = useInputStore(
    (store) => [store.reset, store.setReset],
    shallow
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSearchedArray(
      data.filter((data) =>
        data.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    setSearchedValue(searchValue);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  if (reset) {
    setSearchValue("");
    setSearchedValue("")
    setSearchedArray(data);
    setReset(false);
  }

  return (
    <div className="overflow-x-hidden">
      <Search
        searchValue={searchValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        placeholder="Search for movies or TV series"
      />

      {searchedValue === "" ? (
        <>
          <Heading
            text={`Trending`}
            padding="pt-[26px] pb-[24px] md:pt-[34px]"
          />
          <div className="flex overflow-x-scroll lg:w-screenModlg pr-[16px] md:pr-[24px] lg:pr-[36px] pb-[24px] w-screenModsm md:w-screenModmd gap-[16px] md:gap-[40px]">
            {trendingArray.map((trend) => (
              <Card key={nanoid()} data={trend} isTrending={true} />
            ))}
          </div>
          <Heading
            text={`Recommended for you`}
            padding="pb-[24px] md:pt-[15px] lg:pb-[32px] lg:pt-[16px]"
          />
          <div className="flex flex-wrap gap-[16px] md:gap-[30px] lg:gap-[40px] w-screenModsm md:w-screenModmd lg:w-screenModlg pr-[16px] md:pr-[24px] lg:pr-[36px]">
            {recommendArray.map((recommend) => (
              <Card key={nanoid()} data={recommend} />
            ))}
          </div>
        </>
      ) : (
        <>
          {searchedArray.length !== 0 ? (
            <>
              <Heading
                text={`Found ${searchedArray.length} results for ‘${searchedValue}’`}
                padding="pt-[26px] pb-[24px] md:pt-[34px]"
              />
              <div className="flex flex-wrap gap-[16px] md:gap-[30px] lg:gap-[40px] w-screenModsm md:w-screenModmd lg:w-screenModlg pr-[16px] md:pr-[24px] lg:pr-[36px]">
                {searchedArray.map((tv) => (
                  <Card key={nanoid()} data={tv} />
                ))}
              </div>
            </>
          ) : (
            <Heading
              text={`Found ${searchedArray.length} results for ‘${searchedValue}’`}
              padding="pt-[26px] pb-[24px] md:pt-[34px]"
            />
          )}
        </>
      )}
    </div>
  );
}
