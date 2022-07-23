import { RefBarArea, UList } from "./styled";
export default function () {
  const Categories = [
    "Hydrogen",
    "NobleGas",
    "Alkali metal",
    "Alkaline earth metal",
    "Metaloid",
    "Nonmetal",
    "Post transition metal",
    "Transition metal",
    "Lanthanide",
    "Actinide",
    "Unknown",
  ];
  return (
    <RefBarArea>
      <UList>
        {Categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </UList>
    </RefBarArea>
  );
}
