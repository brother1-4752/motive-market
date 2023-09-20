import styled from 'styled-components';

const Categories = () => {
  return (
    <StyledCategories>
      {[1, 2, 3, 4, 5, 6].map((el) => (
        <div key={el}>카테고리 {el}</div>
      ))}
    </StyledCategories>
  );
};

export default Categories;

const StyledCategories = styled.div`
  width: 50%;
  padding: 20px;
  display: grid;
  border: 1px solid black;
  grid-template-columns: repeat(3, 1fr);
`;
