import Product from "./Product";

const data = [
  {
    id: 1,
    productName: "jeans",
    cost: 230,
    discount: 20,
  },
  {
    id: 2,
    productName: "T-shirt",
    cost: 230,
    discount: 20,
  },
  {
    id: 3,
    productName: "shirts",
    cost: 230,
    discount: 20,
  },
  {
    id: 4,
    productName: "formalshirts",
    cost: 230,
    discount: 20,
  },
  {
    id: 5,
    productName: "casuals",
    cost: 230,
    discount: 20,
  },
];

const ArrayOfObjects = () => {
  return (
    <div key={"1234"}>
      <h1>Product List</h1>

      {data.map((item, index) => {
        console.log("item, index", item, index);
        return <Product productName={item.productName} price={item.cost} />;
      })}
    </div>
  );
};

export default ArrayOfObjects;
