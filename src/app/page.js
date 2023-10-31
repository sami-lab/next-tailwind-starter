import LeftCard from "../components/home/leftCard";

export default function Home() {
  return (
    <div className='grid grid-cols-12 gap-4 pt-5  px-5 '>
      <div className='col-span-2 hidden lg:block'>
        <LeftCard />
      </div>
      <div className='lg:col-span-7 col-span-full border border-solid border-red'></div>
      <div className='lg:col-span-3 col-span-full border border-solid border-light'></div>
    </div>
  );
}
