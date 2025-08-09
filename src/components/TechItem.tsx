const TechItem: React.FC<{ name: string; icon: string }> = ({ name, icon }) => (
  <button className="border border-light-gray/50 hover:bg-light-gray/10 h-24 rounded-lg p-3 flex flex-col cursor-pointer items-center justify-center hover:text-white transition-all group">
    <img
      src={`/${icon}`}
      alt={name}
      className="w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1"
    />
    <p className="mt-1.5">{name}</p>
  </button>
);

export default TechItem;
