
import { FetchGif, FetchApi } from "../API/medaApi";
import { setResults } from "../Redux/Searchslice";
import Resultcard from './Resultcard'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab,results } = useSelector((store) => store.search);
  useEffect(() => {
  const getIMg = async () => {
    let data = [];

    if (activeTab === "photo") {
      const response = await FetchApi(query);

      data = response.results.map((item) => ({
        id: item.id,
        title: item.alt_description,
        type: item.asset_type,
        src: item.urls.full,
        thumbnail: item.urls.small,
        url: item.links.html,
      }));
    }

    if (activeTab === "GIF") {
      const response = await FetchGif(query);

      data = response.data.data.map((item) => ({
 id: item.id,
  title: item.title,
  type: "GIF",
  src: item.file.sm.gif.url,
   url: item.url,
      }));
    }

    console.log(data);
    dispatch(setResults(data));

  }

    if (query) {
      getIMg();
    }
  }, [query, activeTab, dispatch]);

return (
  <div className="w-full min-h-screen  px-10">

    <div className="flex flex-wrap justify-center gap-6 w-full">

    {results.map((item, idx) => {
      return (
        <div key={idx}>
             <Resultcard item={item}/> 
        </div>
      );
    })}
  </div>
  </div>
);


}


export default ResultGrid;




 
