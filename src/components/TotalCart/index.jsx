import { TotalText } from "./style";

function Total({ currentSale }) {
  const calc = currentSale
    .map((item) => item)
    .reduce((acc, { price }) => acc + price, 0);

  return (
    <TotalText>
      Total: <span>R${calc.toFixed(2)}</span>
    </TotalText>
  );
}

export default Total;
