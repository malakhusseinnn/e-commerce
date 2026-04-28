import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 mt-1 text-[#FCC800]">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <FaStar key={star} />;                        
        } else if (rating >= star - 0.5) {
          return <FaStarHalfAlt key={star} />;               
        } else {
          return <FaRegStar key={star} />;                 
        }
      })}
    </div>
  );
}