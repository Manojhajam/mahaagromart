const NoticeBar = () => {
  return (
    <div className="container overflow-hidden py-2 mt-2">
      <div className="animate-marquee flex gap-4 w-max whitespace-nowrap text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        <span className="px-2 sm:px-4 bg-green-800">
          🚀 Mahaagromart is launching on 01 January 2026 - stay tuned
        </span>
        <span className="px-2 sm:px-4 bg-green-800">
          Bigger • Faster • Smarter — Mahaagromart V2 launches
        </span>
        <span className="px-2 sm:px-4 bg-green-800">
          🚀 Mahaagromart is launching on 01 January 2026 - stay tuned
        </span>
        <span className="px-2 sm:px-4 bg-green-800">
          Bigger • Faster • Smarter — Mahaagromart V2 launches
        </span>
      </div>
    </div>
  );
};

export default NoticeBar;
