import styles from "./classification.module.scss";
import Nav from "../components/nav/Nav";
import { useSelector } from "react-redux";

const Classification = () => {
  const liked = useSelector((state) => state.like);
  const hated = useSelector((state) => state.hate);

  return (
    <div className={styles.wrap}>
      <Nav></Nav>
      <main className={styles.main}>
        <div className={styles.liked}>
          <h2>좋아요</h2>
          {liked.map((val) => (
            <img
              key={val.src}
              src={val.src}
              alt={val.name}
              width={285}
              height={285}
            />
          ))}
        </div>
        <div className={styles.hated}>
          <h2>싫어요</h2>
          {hated.map((val) => (
            <img
              key={val.src}
              src={val.src}
              alt={val.name}
              width={285}
              height={285}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Classification;
