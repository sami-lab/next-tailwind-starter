import LeftCard from "../components/home/leftCard";

export default function Home() {
  return (
    <div className='grid grid-cols-12 gap-4 pt-5  px-5 '>
      <div className='col-span-2 '>
        <LeftCard />
      </div>
      <div className='col-span-7  border border-solid border-red'></div>
      <div className='col-span-3  border border-solid border-light'></div>
    </div>
  );
}
