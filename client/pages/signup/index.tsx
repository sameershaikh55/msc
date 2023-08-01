import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Heading from "../../components/Heading";
import { FormErrors, InputChangeEvent, formData } from "./types";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import validatePassword from "../../utils/validatePassword";
import { alert } from "../../utils/toast";
import { clearErrors, registration } from "../../store/actions/auth";
import Input from "../../components/Input";
import SmallLoader from "../../components/SmallLoader";
import { RootState } from "../../components/AuthWrapper/types";

const Signup:React.FC = () => {
  const router = useRouter();

  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    surname: "",
    email: "",
    password: "",
  });
  const initialState = {
    firstName: "",
    surname: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState<formData>(initialState);
  const [passValidation, setPassValidation] = useState<number[]>([
    1, 2, 3, 4, 5,
  ]);

  const { email, password } = formData;

  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;

    let errorMessage = "";
    if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = "email is invalid";
      }
    } else if (name === "password") {
      const passwordErrors = validatePassword(value);
      setPassValidation(passwordErrors);
    }

    setErrors({ ...errors, [name]: errorMessage });
    setFormData({ ...formData, [name]: value });
  };

  const fields = [
    {
      label: "First name",
      name: "firstName",
      value: formData.firstName,
      onChange: handleInputChange,
    },
    {
      label: "Surname",
      name: "surname",
      value: formData.surname,
      onChange: handleInputChange,
    },
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
      validation: true,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hasError = Object.values(errors).some((error) => error);
    let errorMessage = "";

    if (!formData.firstName) {
      errorMessage = "Please enter First Name";
      setErrors({ ...errors, firstName: errorMessage });
      hasError = true;
    } else if (!formData.surname) {
      errorMessage = "Please enter Surname";
      setErrors({ ...errors, surname: errorMessage });
      hasError = true;
    } else if (!formData.password) {
      errorMessage = "Please enter Password";
      setErrors({ ...errors, password: errorMessage });
      hasError = true;
    }

    if (hasError) return;

    if (!hasError) {
      dispatch(
        registration({
          ...formData,
        })
      );
    }
  };

  useEffect(() => {
    if (error) {
      alert("error", error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      alert("success", "Verification Email has been sent!");
      setFormData(initialState);
      // router.push("/login");
    }
  }, [dispatch, alert, isAuthenticated, error]);

  return (
    <div className={styles.page_container}>
      <Heading word="Sign Up" />

      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h1 className="text-center mb-5">Your details</h1>

        {fields.map((content, i) => (
          <div key={i}>
            <Input
              {...content}
              error={errors[content.name]}
              passValidation={passValidation}
            />
          </div>
        ))}
        <div className="d-flex justify-content-center mt-4">
          <button
            className="Londrina"
            disabled={
              email && password && !passValidation.length ? false : true
            }
            type="submit"
          >
            {(loading && <SmallLoader />) || "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
