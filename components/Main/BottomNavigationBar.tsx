import Link from 'next/link';
import styled from 'styled-components';

const BottomNavigationBar = () => {
  return (
    <StyledBottomNavigationBar>
      <Link href="main">메인</Link>
      <Link href="community">게시판</Link>
      <Link href="settings">설정</Link>
    </StyledBottomNavigationBar>
  );
};

export default BottomNavigationBar;

const StyledBottomNavigationBar = styled.div`
  display: flex;
`;
