import Link from 'next/link';

export default function Home() {

  let linkStyle = "hover:underline hover:text-lime-500"
  return (
    <main>
      <title>CPRG 306 - Nikolaus</title>
      <h1 className="text-4xl font-bold text-center mt-40 mr-36">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="mt-5 ml-72 pl-4 text-left">
        <li><Link href ="./week-2/" className={linkStyle}>Week 2 Assignment</Link></li>
        <li><Link href ="./week-3/" className={linkStyle}>Week 3 Assignment</Link></li>
        <li><Link href ="./week-4/" className={linkStyle}>Week 4 Assignment</Link></li>
        <li><Link href ="./week-5/" className={linkStyle}>Week 5 Assignment</Link></li>
        <li><Link href ="./week-6/" className={linkStyle}>Week 6 Assignment</Link></li>
        <li><Link href ="./week-7/" className={linkStyle}>Week 7 Assignment</Link></li>
        <li><Link href ="./week-8/" className={linkStyle}>Week 8 Assignment</Link></li>
      </ul>
    </main>
  );
}
