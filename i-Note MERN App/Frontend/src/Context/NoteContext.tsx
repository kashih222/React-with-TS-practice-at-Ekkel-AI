// NoteContext.ts
import { createContext } from "react";

export interface INote {
  date: string;
  createdAt: string;
  updatedAt: string;
  _id: string ;
  title: string;
  description: string;
  tag: string;
}

export interface NoteContextType {
  notes: INote[];
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
  addNote: (title: string, description: string, tag: string) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
  handleUpdate: (
    id: string,
    title: string,
    description: string,
    tag: string
  ) => Promise<void>;
  handleGet: () => Promise<void>;
}

const NoteContext = createContext<NoteContextType | null>(null);
export default NoteContext;
