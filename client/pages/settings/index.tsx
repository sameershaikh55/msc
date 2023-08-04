import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "@/store/actions/game";
import { getCookie } from "@/utils/getCookies";
import { RootState } from "@/components/AuthWrapper/types";
import { getSettings, updateSettings } from "@/store/actions/settings";
import Loader from "@/components/Loader";
import _debounce from "lodash.debounce"; // Import lodash debounce

const PersonalDetails: React.FC = () => {
  const cookieValue = getCookie("token");
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const [color, setColor] = useState<string>("");
  const [fontSize, setFontSize] = useState<string>("");

  const { settings, loading } = useSelector(
    (state: RootState) => state.settings
  );

  useEffect(() => {
    if (cookieValue) {
      dispatch(getSettings(cookieValue));
    }
  }, [cookieValue]);

  useEffect(() => {
    if (settings) {
      setColor(settings.background);
      setFontSize(settings.font);
    }
  }, [settings]);

  // Debounce the dispatch function
  const debouncedDispatch = _debounce((background: string) => {
    dispatch(updateSettings({ background }, cookieValue));
  }, 3000);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const background = event.target.value;

    setColor(background);

    // Call the debounced dispatch function
    debouncedDispatch(background);
  };

  const handleFontSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const font = event.target.value;

    setFontSize(font);
    dispatch(updateSettings({ font }, cookieValue));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.page_container}>
      <div className={styles.detail_container}>
        <h1 className="text-center mb-5">Settings</h1>

        <div className={styles.settings_container}>
          <div className="container-fluid">
            <div className="row">
              <div className={`${styles.left_side} col-4`}>
                <div className="row gy-5">
                  <div className="col-12">
                    <h2 className="text-white">Parental control</h2>
                  </div>
                  <div className="col-12">
                    <h2 className="text-white">Display settings</h2>
                  </div>
                  <div className="col-12">
                    <h2 className="text-white">Display settings</h2>
                  </div>
                  <div className="col-12">
                    <h2 className="text-white">Accessibility</h2>
                  </div>
                  <div className="col-12">
                    <h2 className="text-white">Language</h2>
                  </div>
                </div>
              </div>
              <div className={`${styles.right_side} col-6`}>
                <div className="row gy-5">
                  <div className="col-12">
                    <h2 className="text-white">.</h2>
                  </div>
                  <div className="col-12">
                    <h2 className="text-white">.</h2>
                  </div>
                  <div className="col-12">
                    <h2 className="text-white">.</h2>
                  </div>
                  <div className="col-12">
                    <div className="d-flex gap-5">
                      <div>
                        <label className="text-yellow" htmlFor="color">
                          Background
                        </label>
                        <br />
                        <input
                          type="color"
                          value={color}
                          id="color"
                          onChange={handleColorChange}
                        />
                      </div>
                      <div>
                        <label className="text-yellow" htmlFor="font">
                          Font Size
                        </label>
                        <br />
                        <select
                          id="font"
                          value={fontSize}
                          onChange={handleFontSizeChange}
                        >
                          <option value="30px">30px</option>
                          <option value="40px">40px</option>
                          <option value="50px">50px</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <h2 className="text-white">.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
