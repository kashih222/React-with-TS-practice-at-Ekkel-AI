import { BadgeX } from 'lucide-react';
import React, { useState } from 'react';

interface Note {
  tittle: string;
  disc: string;
}

const App: React.FC = () => {
  const [tittle, setTittle] = useState<string>("");
  const [disc, setDisc] = useState<string>("");
  const [note, setNote] = useState<Note[]>([]);

  function SubmitHandler(dets: React.FormEvent<HTMLFormElement>) {
    dets.preventDefault();

    if (!tittle.trim() || !disc.trim()) {
      alert("Fill The Both Fields");
      return;
    }

    const newNote: Note = {
      tittle: tittle,
      disc: disc,
    };

    setNote((oldnote) => [...oldnote, newNote]);
   

    setTittle("");
    setDisc("");
  }

  function deleteNote(index: number) {
  setNote((prevNotes) => prevNotes.filter((_, i) => i !== index));
}
  console.log(note);
  return (
    <div className="bg-black p-8">
      <div className="flex items-start justify-center bg-black text-white p-10">
        <form
          action=""
          onSubmit={SubmitHandler}
          className="flex flex-col gap-2 w-1/3"
        >
          <input
            className="border-2 border-white rounded-lg px-3 py-2 outline-none"
            value={tittle}
            onChange={(dets: React.ChangeEvent<HTMLInputElement>) => {
              setTittle(dets.target.value);
            }}
            type="text"
            placeholder="Enter Tittle"
          />
          <textarea
            className="border-2 border-white rounded-lg px-3 py-2 outline-none"
            name=""
            id="textarea"
            placeholder="Explain......"
            value={disc}
            onChange={(dets) => {
              setDisc(dets.target.value);
            }}
          ></textarea>
          <button className="border-2 border-white rounded-lg px-3 py-2 font-bold outline-none hover:bg-gray-900">
            Submit Note
          </button>
        </form>
      </div>
      <div className="bg-gray-900 h-screen w-full border-2 border-amber-50 p-10 pl-24 flex flex-wrap gap-10">
       {
        note.map((items, index)=>(
           <div key={index} className="card h-84 w-74 relative">
          <img
            className="h-full w-full"
            src="https://freepngimg.com/thumb/paper_sheet/40743-6-page-png-download-free.png"
            alt=""
          />
          <div 
          onClick={()=>{
            deleteNote(index)
          }}
          className="absolute top-8 right-5 cursor-pointer">
            <BadgeX
              size={36}
              color="#fb0404"
              strokeWidth={3}
              absoluteStrokeWidth
            />
          </div>
          <h2 className="absolute text-black top-16 left-7 font-bold underline text-2xl pl-4">
            {items.tittle}
          </h2>
          <p className="absolute text-black top-24 left-7 text-lg leading-5 pl-4 pr-12 pt-2 h-52 overflow-hidden w-full">
            {items.disc}
          </p>
        </div>
        ))
       }
      </div>
    </div>
  );
};

export default App;
