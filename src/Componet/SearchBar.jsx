import React from 'react'
import { useState } from "react";
import{useDispatch} from 'react-redux'
import {setQuery} from  '../Redux/Searchslice'

const SearchBar = () => {

const [search, setSearch] = useState("");

const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
        
    dispatch(setQuery(search))

    // console.log("Search:", search);
    setSearch('')
  };

  return (
        <div  id="search-container"      className=" bg-black flex justify-center items-start pt-20 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-xl gap-3 rounded-2xl border border-gray-700 bg-gray-900 p-3 shadow-xl"
      >
        <input
          type="text"
          placeholder="Search anything..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="min-w-0 flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
        />

        <button
          type="submit"
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500 active:scale-95"
        >
          Search
        </button>
      </form>
    </div>
  );
  
}


export default SearchBar
