import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../Redux/Searchslice";

const Tabs = () => {

const Tab = ['photo','GIF']

const dispatch = useDispatch()

const activeTab = useSelector((state)=>state.search.activeTab)

  return (
<div    className="  tabs-container   h-auto  bg-gray flex items-center justify-center pt-18 gap-6 p-5">

  {Tab.map((elem, idx) => {
    return (
      <button
        className={`px-10 py-5 rounded-xl text-2xl font-semibold transition-all duration-300 shadow-lg
          ${
            activeTab === elem
              ? "bg-blue-500 text-white scale-105 shadow-blue-500/30"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        key={idx}
        onClick={() => {
          dispatch(setActiveTab(elem));
        }}
      >
        {elem}
      </button>
    );
  })}

</div>

  )
}

export default Tabs
