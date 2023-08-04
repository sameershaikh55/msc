import React from "react";
import styles from "./style.module.scss";
import { wordArray } from "../../utils/wordArray";
import { Props } from "./types";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { logout } from "@/store/actions/auth";

const Heading: React.FC<Props> = ({
  word,
  icon = true,
  exit = false,
  account,
}) => {
  const router = useRouter();
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  return (
    <div className={styles.hero_container}>
      <div className="d-flex justify-content-center gap-3 py-4 position-relative">
        {icon && (
          <Link className={styles.home_button} href="/account">
            <img src="/assets/home.svg" alt="" />
          </Link>
        )}
        <h1
          className={`d-flex justify-content-center ${
            (account && "gap-2 gap-md-3") || "gap-3"
          }  py-4`}
        >
          {wordArray(word).map((alpha, i) => {
            return (
              <div
                key={i}
                className={`${styles.heading_alpha} ${
                  account && styles.account
                } Monofett`}
              >
                {alpha}
              </div>
            );
          })}
        </h1>
        {exit && (
          <button
            onClick={() => dispatch(logout())}
            className={`${styles.exit_button} bg-transparent border-0 shadow-none`}
          >
            <img src="/assets/exit.svg" alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Heading;
