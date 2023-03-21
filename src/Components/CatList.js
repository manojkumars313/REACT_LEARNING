import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCatListAction } from "../Redux/Actions/FetchCatListActions";

const CatList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchCatListAction({
        method: "GET",
        url: "https://api.thecatapi.com/v1/images/search?limit=10",
      })
    );
  }, [dispatch]);

  const { catList, error, loading } = useSelector(
    (state) => state.fetchCatListReducer
  );

  return (
    <div>
      <h1>Cat List</h1>
      {loading ? <div style={{ color: "green" }}>Loading.....</div> : null}
      {error ? <div style={{ color: "red" }}>Something went wrong!</div> : null}
      {catList.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <h1>Id: {item.id}</h1>
              <img src={item.url} alt="cat" width={500} height={500} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CatList;
