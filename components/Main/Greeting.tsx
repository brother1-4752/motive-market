import Link from 'next/link';

const Greeting = () => {
  return (
    <section>
      <h1>Hello, username</h1>
      <div>
        <p>서비스 간단 설명</p>
        <Link href="/community">자세히 보기</Link>
      </div>
    </section>
  );
};

export default Greeting;
