import styles from "./main.module.scss";
import Nav from "../components/nav/Nav";
import ImgCard from "../components/imgCard/ImgCard";
import { useEffect, useState } from "react";
import * as apis from "../service/fetch";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const [data, setData] = useState([]);
  const liked = useSelector((state) => state.like).map((val) => val.name);
  const hated = useSelector((state) => state.hate).map((val) => val.name);
  const [spinner, setSpinner] = useState(false);

  async function getImg() {
    setSpinner(true);

    let res;
    try {
      res = await apis.requestAxios("get", {
        lib: "MQ5y52npMqnCycenuTos7mqgLslxuhQuA",
      });
      setData(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setSpinner(false);
    }
  }

  useEffect(() => {
    getImg();
  }, []);

  return (
    <div className={styles.wrap}>
      <Nav></Nav>
      {spinner ? (
        <p className={styles.loading}>loading</p>
      ) : (
        <main className={styles.main}>
          <section>
            {data.map((val) => (
              <ImgCard key={val.id} src={val.img_url} alt={val.name} />
            ))}
          </section>
          <aside>
            <div className={styles.box}>
              {data.map((val) => {
                if (liked.includes(val.name))
                  return (
                    <h2 key={val.id} className={styles.liked}>
                      {val.id}
                    </h2>
                  );
                else if (hated.includes(val.name))
                  return (
                    <h2 key={val.id} className={styles.hated}>
                      {val.id}
                    </h2>
                  );
                else return <h2 key={val.id}>{val.id}</h2>;
              })}
            </div>
            <NavLink to="/classification">
              <button className={styles.boxButton}>
                좋아하는 동물들 나누기
              </button>
            </NavLink>
          </aside>
        </main>
      )}
    </div>
  );
};

export default Main;
