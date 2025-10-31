import { FilePen, FileX } from 'lucide-react';

const Previewer:React.FC = () => {

  return (
    <div className='w-[1000px] border-2 bg-[#dbdbdb86]'>
      <div className='flex items-center justify-between px-4 bg-[#39b4b4]  w-full border-b-2'>
        <div className='py-2 font-bold flex'><FilePen/> Previewer</div>
        <div className="font-bold cursor-pointer"
        title="Clear Output Filed"
        ><FileX/></div>
      </div>
      <div className='w-full min-h-[300px] h-auto outline-none p-3'>Previewing  Here
        Lorem iplabore ea quia voluptate vitae maiores doloremque vel voluptatem asperiores, sit, maxime consequatur! Qui deserunt modi fuga aperiam minus rerum pariatur molestias aspernatur! Laboriosam natus doloremque magnam amet. Corrupti, doloremque.
      </div>
    </div>
  )
}

export default Previewer