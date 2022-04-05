const Jumbotron = () => {
  return (
    <div
      className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg mb-10"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1444362408440-274ecb6fc730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80")',
        height: '400px',
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-white">
            <h2 className="font-semibold text-4xl mb-4">Batik Maju Jaya</h2>
            <h4 className="font-semibold text-xl mb-6">
              Top supplier of Indonesia's finest fabric
            </h4>
            <a
              className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              See catalog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
