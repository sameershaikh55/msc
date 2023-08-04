import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import BarChart from "../../components/BarChart"; // Import the BarChart component
import { RootState } from "@/components/AuthWrapper/types";
import Loader from "@/components/Loader";
import { getGame } from "@/store/actions/game";
import { getCookie } from "@/utils/getCookies";

const PersonalDetails: React.FC = () => {
  const [cosmic, setCosmic] = useState<number[] | []>([]);
  const [planet, setPlanet] = useState<number[] | []>([]);
  const cookieValue = getCookie("token");
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const { game, loading } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    if (cookieValue) {
      dispatch(getGame(cookieValue));
    }
  }, [cookieValue]);

  useEffect(() => {
    if (game) {
      setCosmic([game.cosmic.correct, game.cosmic.wrong]);
      setPlanet([game.planet.correct, game.planet.wrong]);
    }
  }, [game]);

  const labels = ["Correct", "Wrong"];

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.page_container}>
      <div className={styles.detail_container}>
        <h1 className="text-center mb-5">Progress</h1>

        <div className="container-fluid">
          <div className="row gy-5">
            <div className="col-12">
              <div className={styles.data_container}>
                <h2 className="text-dark">Cosmic Data</h2>
                <BarChart
                  data={cosmic}
                  labels={labels}
                  correctColor="rgba(0, 255, 0, 0.6)"
                  wrongColor="rgba(255, 0, 0, 0.6)"
                />
              </div>
            </div>
            <div className="col-12">
              <div className={styles.data_container}>
                <h2 className="text-dark">Planet Data</h2>
                <BarChart
                  data={planet}
                  labels={labels}
                  correctColor="rgba(0, 255, 0, 0.6)"
                  wrongColor="rgba(255, 0, 0, 0.6)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
