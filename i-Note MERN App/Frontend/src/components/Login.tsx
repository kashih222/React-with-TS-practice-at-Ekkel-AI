
const Login = () => {
  

  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: '22rem', backgroundColor: '#fff', borderRadius: '12px' }}>
        <h3 className="text-center mb-4 text-dark">Welcome Back 👋</h3>
        <form >
          <div className="mb-3">
            <label className="form-label text-dark">Email</label>
            <input
              type="email"
              className="form-control border-dark"
              placeholder="Enter your email"
             
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Password</label>
            <input
              type="password"
              className="form-control border-dark"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-dark w-100 mt-2">Login</button>
        </form>

        <p className="text-center mt-3 text-muted">
          Don’t have an account? <a href="/signup" className="text-dark fw-bold">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
