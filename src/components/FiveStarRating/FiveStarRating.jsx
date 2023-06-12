import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export const FiveStarRating = ({ rating }) => {
  const starList = [];
  const FullStar = Math.floor(rating);
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  const EmptyStar = 5 - FullStar - (hasHalfStar ? 1 : 0);

  for (let i = 1; i <= FullStar; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  if (hasHalfStar) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  for (let i = 1; i <= EmptyStar; i++) {
    starList.push(<StarEmpty key={"star-Empty" + i} />);
  }
  return <>{starList}</>;
};
