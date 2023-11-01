import LeftCard from "../components/home/leftCard";
import CenterArea from "../components/home/centerArea";
import RightArea from "../components/home/rightArea";

export default function Home() {
  return (
    <div className='grid grid-cols-12 gap-4 pt-5  px-5 '>
      <div className='col-span-2 hidden lg:block'>
        <LeftCard />
      </div>
      <div className='lg:col-span-7 col-span-full'>
        <CenterArea />
      </div>
      <div className='lg:col-span-3 col-span-full'>
        <RightArea />
      </div>
    </div>
  );
}
