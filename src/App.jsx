import style from "./style.module.css";
import { TVShowAPI, TVShowRecommendation, TVFetchByTitle } from "./API/tv-show";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import logoImg from "./assests/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recomendedTVShow, setRecomendedTVShow] = useState([]);

  async function fetchPopulars() {
    try {
      const popularTVShowList = await TVShowAPI();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (err) {
      alert("something went wrong while searching TVShows");
    }
  }

  async function fetchRecomendations(tvShowId) {
    try {
      const recomendationListRes = await TVShowRecommendation(tvShowId);
      if (recomendationListRes.length > 0) {
        setRecomendedTVShow(recomendationListRes.slice(0, 10));
      }
    } catch (err) {
      alert("something went wrong while searching TVShows");
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVFetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (err) {
      alert("something went wrong while searching TVShows");
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecomendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  console.log(recomendedTVShow);

  const updateTVShow = (tvShow) => {
    setCurrentTVShow(tvShow);
  };

  return (
    <div
      className={style.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url('${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}') no-repeat center/cover`
          : "black",
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="What to watch"
              subTitle="Find what you like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={style.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={style.recommended_tv_shows}>
        {currentTVShow && (
          <TVShowList
            onClickItem={updateTVShow}
            tvShowList={recomendedTVShow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
