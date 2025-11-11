
const Notes = () => {
  return (
    <div className="container mt-5">
      {/* Add or Edit Note Form */}
      <div className="card shadow-sm border-0 mb-5 p-4 bg-light">
        <h5 className="mb-3 text-dark">Add a New Note</h5>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control border-dark"
              placeholder="Title"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control border-dark"
              placeholder="Description"
              rows={3}
            ></textarea>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control border-dark"
              placeholder="Tag (optional)"
            />
          </div>
          <button type="button" className="btn btn-dark w-100 fw-semibold">
            Add Note
          </button>
        </form>
      </div>

      {/* Notes List */}
      <div className="row">
        {/* Example Note 1 */}
        <div className="col-md-4 mb-4">
          <div className="card border-dark shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold text-dark">Note Title 1</h5>
              <p className="card-text text-muted">
                This is a sample note description. It’s short and neat.
              </p>
              <span className="badge bg-dark">Work</span>
            </div>
            <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
              <button className="btn btn-outline-dark btn-sm">Edit</button>
              <button className="btn btn-outline-danger btn-sm">Delete</button>
            </div>
          </div>
        </div>

        {/* Example Note 2 */}
        <div className="col-md-4 mb-4">
          <div className="card border-dark shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold text-dark">Note Title 2</h5>
              <p className="card-text text-muted">
                Another example note with some meaningful text.
              </p>
              <span className="badge bg-dark">Personal</span>
            </div>
            <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
              <button className="btn btn-outline-dark btn-sm">Edit</button>
              <button className="btn btn-outline-danger btn-sm">Delete</button>
            </div>
          </div>
        </div>

        {/* Example Note 3 */}
        <div className="col-md-4 mb-4">
          <div className="card border-dark shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold text-dark">Note Title 3</h5>
              <p className="card-text text-muted">
                A quick note with minimal content for a sleek UI.
              </p>
              <span className="badge bg-dark">Ideas</span>
            </div>
            <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
              <button className="btn btn-outline-dark btn-sm">Edit</button>
              <button className="btn btn-outline-danger btn-sm">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
