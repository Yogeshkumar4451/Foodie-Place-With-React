const Accordion = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="bg-white rounded-xl border shadow-sm">
      
      {/* HEADER = Button Jo Boss (Parent) Ko Call Karta Hai */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>

        <span className="text-xl text-gray-600">
          {isOpen ? "-" : "+"}
        </span>
      </button>

      {/* BODY = Children Slot (Jo Bhi Parent De) */}
      {isOpen && (
        <div className="px-5 pb-5 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
