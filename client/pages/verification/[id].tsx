import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { RootState } from "@/components/AuthWrapper/types";
import MonofettHeading from "@/components/MonofettHeading";
import { clearErrors, updateProfile } from "@/store/actions/auth";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { alert } from "../../utils/toast";
import Link from "next/link";
import Loader from "@/components/Loader";

const Verification: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const { profileUpdateLoading, error, profileUpdate } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (id) {
      dispatch(updateProfile(id, { verified: true }));
    }
  }, [id]);

  function redirection() {
    router.push("/login");
  }

  useEffect(() => {
    if (error) {
      alert("error", error);
      dispatch(clearErrors());
    }

    if (profileUpdate) {
      setTimeout(redirection, 5000);
    }
  }, [dispatch, alert, profileUpdateLoading, profileUpdate, error]);

  if (profileUpdateLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.verification_container}>
      <div className={styles.page_container}>
        {(profileUpdate && (
          <div className="d-flex flex-column justify-content-center align-items-center gap-2">
            <h1 className="text-center f64 text-white">
              Your Email has been Verified!
            </h1>
            <Link href="/signup">
              <button className="Londrina">Singup</button>
            </Link>
          </div>
        )) || (
          <div className="d-flex flex-column justify-content-center align-items-center gap-2">
            <h1 className="text-center f64 text-white">
              This link is expired!
            </h1>
            <Link href="/signup">
              <button className="Londrina">Singup</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verification;
