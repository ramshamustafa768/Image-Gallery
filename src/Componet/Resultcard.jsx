import { useDispatch } from "react-redux";
import { addcollection } from "../Redux/fetures/collectionslice";


const Resultcard = ({ item }) => {

const dispatch = useDispatch()

  return (
    <div   id="result-card" className="w-[18rem] relative h-80 rounded overflow-hidden">

      <a href={item.url} target="_blank" rel="noreferrer" className="h-full">
  {item.type == 'photo' ? <img      loading="lazy"
  decoding="async"   className="h-full object-cover object-center w-full   " src={item.src} alt="" /> : null}
       {item.type == 'GIF' ? <img     loading="lazy"
  decoding="async"   className="h-full object-cover object-center w-full" src={item.src} alt="" /> : null}
      </a>

  <div id="bottom" className="flex justify-between gap-3 items-center w-full  px-4 py-6 absolute bottom-0 text-amber-50">
<h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">{item.title}</h2>




<button    id="save-btn"
      onClick={()=> dispatch(addcollection(item)) }
className="bg-indigo-600 text-white  rounded  px-3 py-1 cursor-pointer font-medium">
  
  Save
  </button>
     </div>
    </div>
    );
};

export default Resultcard;