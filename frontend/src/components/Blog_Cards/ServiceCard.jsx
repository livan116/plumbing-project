import "../../styles/fonts.css"
// ServiceCard Component
const ServiceCard = ({ title, image, date, comments }) => {
    return (
      <div className="bg-white shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 m-2">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-70 object-cover" />
          <div className="absolute top-0 right-0 color2 text-white px-3 py-1 text-xs font-medium uppercase">
            {title.split(':')[0]}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-500 heading2 mb-3">{title}</h3>
          <p className="textcolor3 mb-4 para1">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          </p>
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{comments}</span>
          </div>
        </div>
      </div>
    );
  };

  export default ServiceCard;