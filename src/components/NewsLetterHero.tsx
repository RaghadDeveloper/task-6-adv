const NewsLetterHero = () => {
  return (
    <div>
      <h1 className="text-violet-600 font-semibold text-center mb-3">
        Newlatters
      </h1>
      <h2 className="text-5xl font-semibold mb-6 sm:text-center">
        Stories and interviews
      </h2>
      <p className="text-xl text-slate-500 mb-10 sm:text-center">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>

      <div className="mb-5 mx-auto w-fit">
        <form className="flex gap-4 flex-wrap mb-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-4 py-3 border border-slate-300 rounded-md w-[360px] min-w-[326px]"
          />
          <button className="bg-violet-600 text-white px-5 py-3 rounded-md">
            Subscribe
          </button>
        </form>
        <p className="text-slate-500 block">
          We care about your data in our{" "}
          <a href="/" className="border-b">
            privacy policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsLetterHero;
