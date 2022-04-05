import { FormEvent, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Header } from '../../components';
import { AuthContext } from '../../context/auth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const { register, loading, auth, error } = useContext(AuthContext);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(name, email, password);
  };

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (!loading && auth) {
      navigate(redirect);
    }
  }, [loading, auth, navigate, redirect]);

  return (
    <div className="bg-stone-100 pb-2 min-h-screen">
      <Header />

      <main className="flex flex-col h-[80vh] justify-center items-center space-y-5">
        <h1 className="text-center font-bold text-2xl">Sign Up</h1>
        {error && <h5 className="font-semibold text-red-500">{error}</h5>}
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <form onSubmit={submitHandler}>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <small className="block mt-1 text-xs text-gray-600">
                We'll never share your email with anyone else.
              </small>
            </div>

            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <Button type="submit" variant="light" text="Register" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
