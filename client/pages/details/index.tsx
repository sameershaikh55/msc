import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { RootState } from "@/components/AuthWrapper/types";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { clearErrors, forgetPassword } from "@/store/actions/auth";
import { FORGOT_PASSWORD_RESET } from "@/store/types/auth";
import { alert } from "@/utils/toast";

const PersonalDetails: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const forgetPasswordState = useSelector(
    (state: RootState) => state.forgetPassword
  );

  const changePassword = () => {
    dispatch(forgetPassword(user.email));
  };

  useEffect(() => {
    if (forgetPasswordState.error) {
      alert("error", forgetPasswordState.error);
      dispatch(clearErrors());
    }

    if (forgetPasswordState.message) {
      alert("success", "Email sent!");
      dispatch({ type: FORGOT_PASSWORD_RESET });
    }
  }, [dispatch, alert, forgetPasswordState.error, forgetPasswordState.message]);

  return (
    <div className={styles.page_container}>
      <div className={styles.detail_container}>
        <h1 className="text-center">
          Personal <br /> Details
        </h1>

        <div className={styles.details_inside_container}>
          <div className="row gy-5">
            <div className="col-6">
              <h1 className="text-white">First name:</h1>
            </div>
            <div className="col-6">
              <h1 className="text-yellow">{user.firstName}</h1>
            </div>
            <div className="col-6">
              <h1 className="text-white">Surname:</h1>
            </div>
            <div className="col-6">
              <h1 className="text-yellow">{user.surname}</h1>
            </div>
            <div className="col-6">
              <h1 className="text-white">Email address:</h1>
            </div>
            <div className="col-6 d-flex align-items-center">
              <p className="f26 mb-0 text-yellow">{user.email}</p>
            </div>
            <div className="col-6">
              <h1 className="text-white">Password:</h1>
            </div>
            <div className="col-6 d-flex align-items-center">
              <button onClick={changePassword} className="themeBtn">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
