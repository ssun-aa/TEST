import styles from "./imgCard.module.scss";
import { useDispatch } from "react-redux";
import { doLike, doHate } from "../../data/animal";
import { useState } from "react";

const ImgCard = ({ src, alt }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [hated, sethated] = useState(false);

  const handleLikeButton = () => {
    dispatch(doLike({ alt, src }));
    setLiked((prev) => !prev);
    sethated(false);
  };
  const handleHateButton = () => {
    dispatch(doHate({ alt, src }));
    sethated((prev) => !prev);
    setLiked(false);
  };

  return (
    <div className={styles.wrap}>
      <img src={src} alt={alt} width={285} height={285} />
      <div className={styles.buttons}>
        <button
          onClick={handleLikeButton}
          className={liked ? styles.liked : null}
        >
          좋아요
        </button>
        <button
          onClick={handleHateButton}
          className={hated ? styles.hated : null}
        >
          싫어요
        </button>
      </div>
    </div>
  );
};

export default ImgCard;
