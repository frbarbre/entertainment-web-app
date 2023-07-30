"use client";

import { nanoid } from "nanoid";
import { useState } from "react";
import { data } from "@/data";
import Card from "@/components/Card";
import Search from "@/components/Search";
import Heading from "@/components/Heading";

export default function Movies() {
  const [searchValue, setSearchValue] = useState("");
  const [searchedArray, setSearchedArray] = useState(data);
  const [searchedValue, setSearchedValue] = useState("");

  const movieArray = data.filter((data) => data.category === "Movie");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSearchedArray(
      movieArray.filter((data) =>
        data.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    setSearchedValue(searchValue);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return (
    <div>
      <Search
        searchValue={searchValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        placeholder="Search for movies or TV series"
      />

      {searchedValue === "" ? (
        <>
          <Heading
            text={`Movies`}
            padding="pt-[26px] pb-[24px] md:pt-[34px]"
          />
          <div className="flex flex-wrap gap-[16px] md:gap-[30px] lg:gap-[40px] w-screenModsm md:w-screenModmd lg:w-screenModlg pr-[16px] md:pr-[24px] lg:pr-[36px]">
            {movieArray.map((movie) => (
              <Card key={nanoid()} data={movie} />
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
