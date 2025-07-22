const IdeaCard = ({ image, title, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 mx-6">
      <div className="aspect-[3/2]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-2">{date}</p>
        <h3 className="font-semibold text-gray-800 h-[4.5em] line-clamp-3">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default IdeaCard;
