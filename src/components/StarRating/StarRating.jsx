const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      <div className="rating rating-sm pointer-events-none"> {/* Disable clicks */}
        {[...Array(5)].map((_, i) => {
          // Fully filled star
          if (i < fullStars) {
            return (
              <div 
                key={i} 
                className="mask mask-star bg-yellow-400"
                aria-label={`${i+1} star`}
              />
            );
          } 
          // Half-filled star
          else if (i === fullStars && hasHalfStar) {
            return (
              <div 
                key={i} 
                className="mask mask-star-2 bg-yellow-400"
                aria-label={`${i+1} half star`}
              />
            );
          } 
          // Empty star
          else {
            return (
              <div 
                key={i} 
                className="mask mask-star bg-gray-300"
                aria-label={`${i+1} empty star`}
              />
            );
          }
        })}
      </div>
      <span className="ml-2 text-sm text-gray-500">
        {rating.toFixed(1)}
      </span>
    </div>

  );
};
export default StarRating;

// Usage:
{/* <StarRating rating={3.7} />; // Shows ★★★½☆ (3.7) */}
