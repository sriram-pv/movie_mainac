const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <div>
      <ul className="movie_filter">
        {ratings.map((rate) => (
          <li 
            className={`movie_filter_item ${minRating === rate ? "active" : ""} hidden lg:flex`}
            key={rate}
            onClick={() => onRatingClick(rate)}
          >
            {rate}+ Star
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;
