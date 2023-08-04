import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Heading from "../../../components/Heading";
import { FormErrors, InputChangeEvent, formData } from "./types";
import { useRouter } from "next/router";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { alert } from "../../../utils/toast";
import {
  clearErrors,
  forgetPassword,
  login,
  resetPassword,
} from "../../../store/actions/auth";
import Input from "../../../components/Input";
import SmallLoader from "../../../components/SmallLoader";
import { RootState } from "../../../components/AuthWrapper/types";

const ChangePassword: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;

  const { loading, error, message } = useSelector(
    (state: RootState) => state.resetPassword
  );

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const [errors, setErrors] = useState<FormErrors>({
    password: "",
    confirmPassword: "",
  });

  const initialState = {
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState<formData>(initialState);

  const { password, confirmPassword } = formData;

  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const fields = [
    {
      label: "Password",
      name: "password",
      value: formData.password,
      onChange: handleInputChange,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      value: formData.confirmPassword,
      onChange: handleInputChange,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let errorMessage = "";
    if (password !== confirmPassword) {
      errorMessage = "Password does not match!";
    }
    setErrors({ ...errors, confirmPassword: errorMessage });

    if (!errorMessage) {
      dispatch(resetPassword({ password, confirmPassword }, token));
    }
  };

  useEffect(() => {
    if (error) {
      alert("error", error);
      dispatch(clearErrors());
    }

    if (message) {
      alert("success", message);
      setFormData(initialState);
    }
  }, [dispatch, alert, message, error]);

  return (
    <div className={styles.page_container}>
      <Heading word="Password" icon={false} />
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h1 className="text-center f36 mb-5">Change Password</h1>

        {fields.map((field) => {
          return <Input {...field} error={errors[field.name]} />;
        })}

        <div className="d-flex justify-content-center mt-4">
          <button
            className="Londrina"
            disabled={confirmPassword && password ? false : true}
            type="submit"
          >
            {(loading && <SmallLoader />) || "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
