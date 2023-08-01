import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const alert = (type, message) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};
