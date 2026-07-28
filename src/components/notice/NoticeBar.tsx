const NoticeBar = () => {
  return (
    <div className="max-w-370 mx-auto overflow-hidden py-2 mt-2">
      <div className="animate-marquee flex gap-4 w-max whitespace-nowrap text-white text-2xl">
        <span className="px-4 bg-green-800">
          🚀 Mahaagromart is launching on 01 January 2026 - stay tuned
        </span>
        {/* <span className="px-4 bg-green-800">•</span> */}
        <span className="px-4 bg-green-800">
          Bigger • Faster • Smarter — Mahaagromart V2 launches
        </span>
        {/* <span className="px-4">•</span> */}
        <span className="px-4 bg-green-800">
          🚀 Mahaagromart is launching on 01 January 2026 - stay tuned
        </span>
        {/* <span className="px-4">•</span> */}
        <span className="px-4 bg-green-800">
          Bigger • Faster • Smarter — Mahaagromart V2 launches
        </span>
      </div>
    </div>
  );
};

export default NoticeBar;
