const AnimatedLogo = () => {
  return (
    <div className="flex bg-white items-center gap-2 p-1 rounded-2xl shadow-[inset_2px_2px_6px_#d1d9e6,inset_-2px_-2px_6px_#ffffff] bg-white">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-9 h-9 object-contain rounded-full ml-1 shadow-[inset_2px_2px_6px_#d1d9e6,inset_-2px_-2px_6px_#ffffff] ml-1"
      />
      <span
        id="animated-text-header"
        className="text-xl sm:text-2xl tracking-wide font-semibold text-gray-800 mr-1"
      >
        InterviewPro
      </span>
    </div>
  );
};

export default AnimatedLogo;
