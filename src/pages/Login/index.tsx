import { MouseEvent, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../../components';
import { AuthContext } from '../../context/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, auth, error } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(email, password);
  };

  const redirect = location.search
    ? location.search.split('=')[1]
    : '/challenge/case-3';

  useEffect(() => {
    if (!loading && auth) {
      navigate(redirect);
    }
  }, [loading, auth, navigate, redirect]);

  return (
    <>
      <Header title="case-3" />

      <main className="flex flex-col h-[80vh] justify-center items-center space-y-5">
        <h1 className="text-center font-bold text-2xl">Sign In</h1>
        {error && <h5 className="font-semibold text-red-500">{error}</h5>}
        <form className="flex flex-col space-y-2.5 text-base">
          <label htmlFor="email">
            <input
              className="border-amber-500 border outline-none px-10 py-2"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
            />
          </label>
          <label htmlFor="password">
            <input
              className="border-amber-500 border outline-none px-10 py-2"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              type="password"
            />
          </label>
        </form>

        <button
          type="button"
          onClick={submitHandler}
          className="bg-slate-300 px-10 py-1.5 rounded-full transition-colors hover:bg-slate-400"
        >
          Login
        </button>
      </main>
    </>
  );
};

export default Login;
