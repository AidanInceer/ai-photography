const ActionButton = () => {
  return (
    <button
      className="
        px-4 py-2 rounded-lg
        bg-white text-black
        font-medium text-sm
        hover:bg-white/90
        active:scale-95
        transition-all duration-200
        shadow-lg shadow-white/10
      "
    >
      Buy a Print
    </button>
  );
};

export default ActionButton;
