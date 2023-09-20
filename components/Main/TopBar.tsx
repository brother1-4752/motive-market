import styled from 'styled-components';

const TopBar = () => {
  return (
    <StyledTopBar>
      <div>프로필 이미지</div>
      <div>🔎</div>
    </StyledTopBar>
  );
};

export default TopBar;

const StyledTopBar = styled.div`
  display: flex;
`;
