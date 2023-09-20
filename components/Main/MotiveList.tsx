import Image from 'next/image';

export type ContentTypes = 'video' | 'audio' | 'text';

type MotiveListProps = {
  backgroundImgSrc: string;
  title: string;
  createdAt: string;
  contentType: ContentTypes;
};

const MotiveList = ({
  backgroundImgSrc,
  title,
  createdAt,
  contentType,
}: MotiveListProps) => {
  return (
    <div>
      <div>
        {/* <div>배경 이미지</div> */}
        <div>
          <Image
            src={backgroundImgSrc}
            width={150}
            height={150}
            alt="배경 이미지"
          />
        </div>
        {/* <h1>타이틀</h1> */}
        <h1>{title}</h1>
      </div>
      <div>
        {/* <div>생성 날짜</div> */}
        <div>{createdAt}</div>
        {/* <div>컨텐츠 타입</div> */}
        <div>{contentType}</div>
      </div>
    </div>
  );
};

export default MotiveList;
