import FloatingUploadButton from '@/components/Community/FloatingUploadButton';
import BottomNavigationBar from '@/components/Main/BottomNavigationBar';
import { MouseEvent, useState } from 'react';
import styled from 'styled-components';

export type ContentTypes = 'video' | 'audio' | 'text';

export type FilterTypes =
  | 'popular' // 좋아요 수
  | 'newest' // createdAt
  | 'most viewed' // 클릭 수
  | 'video'
  | 'audio'
  | 'text';

type UserContentsTypes = {
  ownerInfo: {
    name: string;
    profileSrc: string;
  };
  createdAt: Date;
  likeCount: number;
  clickCount: number;
  contentType: ContentTypes;
};

const mockUserContents: UserContentsTypes[] = [
  {
    ownerInfo: {
      name: 'nemo',
      profileSrc: 'src',
    },
    createdAt: new Date('2023-09-20'),
    likeCount: 5,
    clickCount: 10,
    contentType: 'video',
  },
  {
    ownerInfo: {
      name: 'semo',
      profileSrc: 'src',
    },
    createdAt: new Date('2023-09-25'),
    likeCount: 50,
    clickCount: 80,
    contentType: 'audio',
  },
  {
    ownerInfo: {
      name: 'circle',
      profileSrc: 'src',
    },
    createdAt: new Date('2023-09-15'),
    likeCount: 1,
    clickCount: 100,
    contentType: 'text',
  },
];

const Community = () => {
  const [filterType, setFilterType] = useState<FilterTypes>('popular');

  //toggle test
  const [isShowFilterType, setIsShowFilterType] = useState(false);

  const onClickFilterHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const currentFilterType =
      (event.currentTarget.innerHTML.toLowerCase() as FilterTypes) ??
      'notExistedType';
    (currentFilterType as FilterTypes) && setFilterType(currentFilterType);
    setIsShowFilterType(true);
  };

  return (
    <StyledCommunity>
      <h1>로고 타이틀</h1>
      <div>
        {['Popular', 'Newest', 'Most viewed', 'Video', 'Audio', 'Text'].map(
          (el, index) => (
            <button key={index} onClick={onClickFilterHandler}>
              {el}
            </button>
          )
        )}
        {isShowFilterType && filterType}
      </div>

      {/* TODO: sort기능 구현 필요 1)popular:좋아요 수, 2) newest: craetedAt, 3)most viewed: 클릭 수, 4-6) contentType에 맞는 데이터리스트아이템만 화면에 그리기 */}
      {mockUserContents.map((el, index) => (
        <div className="userContents__container" key={index}>
          <div className="userContents__header">
            {/* <div>{el.ownerInfo.profileSrc}</div> */}
            <div>profile avartar</div>
            <div>{el.ownerInfo.name}</div>
            <div>{el.createdAt.toLocaleString()}</div>
          </div>
          <div className="userContents__main">
            {/* 해당 컨텐츠를 AI가 분석하여 얻은 텍스트 결과값 */}
            <div style={{ display: 'flex' }}>
              <div>Like icons </div>
              <div>Comments icons</div>
            </div>
          </div>
          <BottomNavigationBar />
        </div>
      ))}
      <FloatingUploadButton />
    </StyledCommunity>
  );
};

export default Community;

const StyledCommunity = styled.div`
  position: relative;
  height: 100vh;

  .userContents__container {
    .userContents__header {
      display: flex;

      div {
        margin-right: 20px;
      }
    }

    .userContents__main {
      display: flex;
    }
  }
`;
