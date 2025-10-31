import { FilePen, FileX } from 'lucide-react';
import { useState } from 'react';

const Editor:React.FC = () => {
  const [textValue, setTextValue] = useState<string>("")


  return (
    <div className='w-[600px] min-h-56 border-2 overflow-hidden bg-[#dbdbdb86]'>
      <div className='flex items-center justify-between px-4 bg-[#39b4b4]  w-full border-b-2'>
        <div className='py-2 font-bold flex'> <FilePen/> Editor</div>
        <div className="font-bold cursor-pointer"
        title="Clear Text Area"><FileX/></div>
      </div>
      <textarea 
      onChange={(e)=>{
        
        setTextValue(e.target.value)
        console.log(textValue)
      }}
      className='w-full h-full outline-none p-3 ' 
      name="" 
      id="" 
      placeholder='Here is Your Markdown .....'
      >

      </textarea>
    </div>
  )
}

export default Editor