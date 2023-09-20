import BottomNavigationBar from '@/components/Main/BottomNavigationBar';
import Categories from '@/components/Main/Categories';
import Greeting from '@/components/Main/Greeting';
import MotiveList, { ContentTypes } from '@/components/Main/MotiveList';
import TopBar from '@/components/Main/TopBar';

const mockData = [
  {
    id: 1,
    backgroundImgSrc: '/mockImage1.png',
    title: 'exmaple title1',
    createdAt: '2023-9-20',
    contentType: 'video' as ContentTypes,
  },

  {
    id: 2,
    backgroundImgSrc: '/mockImage2.png',
    title: 'exmaple title2',
    createdAt: '2023-9-21',
    contentType: 'audio' as ContentTypes,
  },

  {
    id: 3,
    backgroundImgSrc: '/mockImage3.png',
    title: 'exmaple title3',
    createdAt: '2023-9-22',
    contentType: 'text' as ContentTypes,
  },
];

const Main = () => {
  return (
    <div>
      <TopBar />
      <Greeting />
      <Categories />
      {mockData.map((data) => (
        <MotiveList
          key={data.id}
          backgroundImgSrc={data.backgroundImgSrc}
          title={data.title}
          createdAt={data.createdAt}
          contentType={data.contentType}
        />
      ))}
      <BottomNavigationBar />
    </div>
  );
};

export default Main;
