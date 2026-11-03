import { useSelector, useDispatch } from "react-redux";
import { removecollection} from '../Redux/fetures/collectionslice';

const Collection = () => {

  const collection = useSelector(
    (state) => state.collection
  );

  const dispatch = useDispatch();

  return (
    <div   id="collection-container"     className="flex flex-wrap gap-5 p-5">

      {collection.map((item) => (

        <div key={item.id} className="w-72">

          <img
            src={item.src}
            alt={item.title}
            className="w-full h-64 object-cover"
          />

          <h2>{item.title}</h2>

          <button                 id="remove-btn"

            onClick={() => dispatch(removecollection(item.id))}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Remove
          </button>

        </div>

      ))}

    </div>
  );
};

export default Collection;