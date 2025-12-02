import { useState, useContext, useEffect } from "react";
import NoteContext, { INote } from "../Context/NoteContext";

const Notes = () => {
  const context = useContext(NoteContext);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tag, setTag] = useState<string>("");

  // EDIT MODAL STATES
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState<string>("");

  useEffect(() => {
    handleGet();
  }, []);

  if (!context) {
    return <p>Loading context...</p>;
  }

  const { notes, addNote, handleDelete, handleUpdate, handleGet } = context;

  // ADD NOTE
  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Fill Both Fields");
      return;
    }

    await addNote(title, description, tag);

    setTitle("");
    setDescription("");
    setTag("");
  }

  // OPEN EDIT MODAL
  const openEditModal = (note: INote) => {
    setCurrentId(note._id);
    setTitle(note.title);
    setDescription(note.description);
    setTag(note.tag || "");
    setShowModal(true);
  };

  // UPDATE NOTE
  const updateHandler = async () => {
    if (!title.trim() || !description.trim()) {
      alert("Fill Both Fields");
      return;
    }

    await handleUpdate(currentId, title, description, tag);
    setShowModal(false);
    handleGet();
  };

  return (
    <div className="container mt-5">
      {/* ADD NOTE */}
      <div className="card shadow-sm border-0 mb-5 p-4 bg-light">
        <h5 className="mb-3 text-dark">Add a New Note</h5>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="form-control border-dark"
              placeholder="Title"
            />
          </div>
          <div className="mb-3">
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="form-control border-dark"
              placeholder="Description"
              rows={3}
            ></textarea>
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setTag(e.target.value)}
              value={tag}
              type="text"
              className="form-control border-dark"
              placeholder="Tag (optional)"
            />
          </div>
          <button type="submit" className="btn btn-dark w-100 fw-semibold">
            Add Note
          </button>
        </form>
      </div>

      {/* SHOW NOTES LIST */}
      <div className="row">
        {notes.map((note) => (
          <div key={note._id} className="col-md-4 mb-4">
            <div className="card border-dark shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title fw-bold text-dark font">
                    {note.title}
                  </h5>
                  <span className="fw-bold">
                    {new Date(note.createdAt).getFullYear() +
                      "-" +
                      String(new Date(note.createdAt).getMonth() + 1).padStart(
                        2,
                        "0"
                      ) +
                      "-" +
                      String(new Date(note.createdAt).getDate()).padStart(
                        2,
                        "0"
                      ) +
                      " " +
                      String(new Date(note.createdAt).getHours()).padStart(
                        2,
                        "0"
                      ) +
                      ":" +
                      String(new Date(note.createdAt).getMinutes()).padStart(
                        2,
                        "0"
                      )}
                  </span>
                </div>
                <p className="card-text text-muted">{note.description}</p>
                {note.tag && <span className="badge bg-dark">{note.tag}</span>}
              </div>

              <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
                <button
                  className="btn btn-outline-dark btn-sm w-25 "
                  onClick={() => openEditModal(note)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-outline-danger btn-sm w-25"
                  onClick={() => handleDelete(note._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EDIT MODAL */}
      {showModal && (
        <div
          className="modal fade show d-block h-100 w-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 9999 }}
        >
          <div className="modal-dialog w-50">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Note</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <input
                  className="form-control mb-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Edit Title"
                />

                <textarea
                  className="form-control mb-2"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Edit Description"
                ></textarea>

                <input
                  className="form-control mb-2"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="Edit Tag"
                />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button className="btn btn-dark" onClick={updateHandler}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
