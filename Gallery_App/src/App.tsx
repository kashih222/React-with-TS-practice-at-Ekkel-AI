import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Photo {
  id: string;
  author: string;
  download_url: string;
  url:string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 16; // change as you like

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<Photo[]>(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
      setData(response.data);
    };
    getData();
  }, []);


  const pageCount = Math.ceil(data.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const visible = data.slice(start, start + itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex justify-between items-center px-10 bg-black text-white">
        <h1 className="py-4 text-center font-bold text-4xl">
          Welcome to My Photo Gallery
        </h1>
      </div>

      <div className="w-full min-h-screen text-white p-10">
        <div className="flex flex-wrap justify-center items-center gap-10">
          {visible.map((item) => (
            <div
              key={item.id}
              className="relative w-80 h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                className="h-full w-full object-cover"
                src={item.download_url}
                alt={item.author}
              />
              <a href={item.url}><div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-center pb-6">
                <h1 className="text-2xl font-bold">{item.author}</h1>
                <p className="text-sm opacity-80">Picsum Photo</p>
              </div></a>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center mt-8 text-white">
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              color="secondary"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default App;
