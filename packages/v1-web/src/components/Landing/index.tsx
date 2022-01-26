const Landing = () => {
  return (
    <main
      id="home"
      className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 min-h-85 flex justify-center items-center"
    >
      <div className="text-center ">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          <span className="block md:inline">The</span>{" "}
          <span className="block text-blue-600 md:inline">URL Shortener</span>{" "}
          <span className="block md:inline">you need</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
          Most flexible url shortening tool
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center mx-auto">
          <div className="rounded-md shadow flex-1">
            <input
              type="text"
              className="w-full flex items-center justify-center px-2 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-4 outline-none"
              placeholder="Shorten your url"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-500 md:py-4 md:text-lg md:px-10"
            >
              Shorten!
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
