import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Heading from "../../components/Heading";
import { FormErrors, InputChangeEvent, formData } from "./types";
import { useRouter } from "next/router";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { alert } from "../../utils/toast";
import { clearErrors, forgetPassword, login } from "../../store/actions/auth";
import Input from "../../components/Input";
import SmallLoader from "../../components/SmallLoader";
import { RootState } from "../../components/AuthWrapper/types";
import { FORGOT_PASSWORD_RESET } from "@/store/types/auth";

const Login: React.FC = () => {
  const router = useRouter();

  const { loginLoading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const forgetPasswordState = useSelector(
    (state: RootState) => state.forgetPassword
  );

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const [forget, setForget] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState<formData>(initialState);

  const { email, password } = formData;

  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;

    let errorMessage = "";
    if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = "email is invalid";
      }
    }

    setErrors({ ...errors, [name]: errorMessage });
    setFormData({ ...formData, [name]: value });
  };

  const fields = [
    {
      label: "Email",
      name: "email",
      value: formData.email,
      onChange: handleInputChange,
    },
    {
      label: "Password",
      name: "password",
      value: formData.password,
      onChange: handleInputChange,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (forget) {
      dispatch(forgetPassword(email));
      return;
    }

    let hasError = Object.values(errors).some((error) => error);
    let errorMessage = "";

    if (!formData.password) {
      errorMessage = "Please enter Password";
      setErrors({ ...errors, password: errorMessage });
      hasError = true;
    }

    if (hasError) return;

    if (!hasError) {
      dispatch(login(email, password));
    }
  };

  useEffect(() => {
    if (error || forgetPasswordState.error) {
      error && alert("error", error);
      forgetPasswordState.error && alert("error", forgetPasswordState.error);
      dispatch(clearErrors());
    }

    if (forgetPasswordState.message) {
      alert("success", "Email sent!");
      dispatch({ type: FORGOT_PASSWORD_RESET });
      setForget(false);
      setFormData({
        email: "",
        password: "",
      });
    }

    if (isAuthenticated) {
      router.push("/account");
      setFormData(initialState);
    }
  }, [
    dispatch,
    alert,
    isAuthenticated,
    error,
    forgetPasswordState.error,
    forgetPasswordState.message,
  ]);

  return (
    <div className={styles.page_container}>
      <Heading word="login" icon={false} />
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h1 className="text-center f36 mb-5">
          {(forget && "Forgot Password") || "Sign in"}
        </h1>

        <Input {...fields[0]} error={errors[fields[0].name]} />

        {!forget && (
          <div>
            <Input {...fields[1]} error={errors[fields[1].name]} />

            <div className="d-flex justify-content-center mt-4">
              <div
                onClick={() => setForget(true)}
                className="text-center p-0 h-100 f26 pointer"
              >
                Forgot password?
              </div>
            </div>
          </div>
        )}

        <div className="d-flex justify-content-center mt-4">
          <button
            className="Londrina"
            disabled={
              loginLoading || forgetPasswordState.loading ? true : false
            }
            type="submit"
          >
            {loginLoading || forgetPasswordState.loading ? (
              <SmallLoader />
            ) : (
              "Sign in"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
