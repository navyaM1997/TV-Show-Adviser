import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import style from "./style.module.css";

export const TVShowListItem = ({ TVShow, onClick }) => {
  const onClick_ = () => {
    onClick(TVShow);
  };
  const MAX_TITLE_CHAR = 20;
  return (
    <div onClick={onClick_} className={style.container}>
      <img
        className={style.img}
        alt={TVShow.name}
        src={SMALL_IMG_COVER_BASE_URL + TVShow.backdrop_path}
      />
      <div className={style.title}>
        {TVShow.name.length > MAX_TITLE_CHAR
          ? TVShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : TVShow.name}
      </div>
    </div>
  );
};
