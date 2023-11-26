import { SortOptionItem, SortOptionsList } from "./SortSelectOptions.style";

const SortSelectOptions = () => {
  return (
    <>
      <SortOptionsList>
        <SortOptionItem>Mais recentes</SortOptionItem>
        <SortOptionItem>Menor preço</SortOptionItem>
        <SortOptionItem>Maior preço</SortOptionItem>
      </SortOptionsList>
    </>
  );
};

export default SortSelectOptions;
