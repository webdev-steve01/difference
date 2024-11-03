type prop = {
  cardGradient: string;
  CardTitle: string;
  CardDescription: string;
  CardPrice: string;
  array: Array<string>;
};
const Price = (prop: prop) => {
  prop.array.map((element, index) => {
    return <div key={index}></div>;
  });
  return <div></div>;
};

export default Price;
