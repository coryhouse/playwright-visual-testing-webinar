import {
  loginScreen,
  loginFormContainer,
  loginForm,
  loginFormLogo,
  loginFormHeader,
  loginFormGroup,
  loginFormInputIcon,
  maleCircleIcon,
  fingerprintIcon,
  formOptionsContainer,
  formSubmit,
  formInlineCheckContainer,
  formCheckInput,
  formIconLink,
  formAlert,
  banner,
} from "./loginForm.module.css";
import twitterPhoto from "../../../img/social-icons/twitter.png";
import facebookPhoto from "../../../img/social-icons/facebook.png";
import linkedInPhoto from "../../../img/social-icons/linkedin.png";
import logo from "../../../img/logo-big.png";
import { useCallback, useEffect, useMemo, useState } from "react";
import Logo from "../../../components/logo";
import { useRouter } from "next/router";
import { AiOutlineCheckSquare } from "react-icons/ai";

const theme1 = {
  loginScreen: {
    background: "linear-gradient(to bottom right, #D7BBEA, #65A8F1)",
  },
  loginForm: {
    backgroundColor: "#fff",
    boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
    color: "#3E4B5B",
  },
  loginFormHeader: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    fontWeight: "500",
  },
  borderAccent: {
    content: "",
    backgroundColor: "#047bf8",
    width: "32px",
    height: "7px",
    borderRadius: "2px",
    display: "block",
    position: "absolute",
    bottom: "-4px",
    left: "80px",
    position: "absolute",
  },
  loginFormInputIcon: {
    color: "#047bf8",
  },
  formSubmit: {
    backgroundColor: "#047bf8",
    border: "2px solid #047bf8",
  },
  banner: {
    backgroundColor: "#047bf8",
  },
};

const theme2 = {
  loginScreen: {
    background: "linear-gradient(to bottom right, #1a847b, #fff)",
  },
  loginForm: {
    backgroundColor: "#fff",
    boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.1)",
    color: "#3E4B5B",
  },
  loginFormHeader: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    fontWeight: "500",
  },
  borderAccent: {
    content: "",
    backgroundColor: "#1a847b",
    width: "32px",
    height: "7px",
    borderRadius: "2px",
    display: "block",
    position: "absolute",
    bottom: "-4px",
    left: "80px",
    position: "absolute",
  },
  loginFormInputIcon: {
    color: "#1a847b",
  },
  formSubmit: {
    backgroundColor: "#1a847b",
    border: "2px solid #1a847b",
  },
  banner: {
    backgroundColor: "white",
    color: "#1a847b",
  },
};

export default function LoginForm({
  thm,
  showBanner,
  restrictSignIn,
  floatLogo,
  selfHealing,
  layoutBreakpoints,
  extraInput,
  rearrange,
}) {
  const [theme, setTheme] = useState(thm);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showError, setShowError] = useState("");
  const [floatAmount, setFloatAmount] = useState("0px");
  const [textAlign, setTextAlign] = useState();
  const [headerHeight, setHeaderHeight] = useState("auto");
  const [changeId, setChangeId] = useState(selfHealing);
  const router = useRouter();

  const updateSize = useCallback(() => {
    const formContainer = document.querySelector(".loginForm_loginForm__P4yhn");
    if (!formContainer) return;
    formContainer.style.maxWidth = "unset";
    formContainer.style.width =
      formContainer.parentElement.offsetWidth / 2 + "px";
  }, []);

  useEffect(() => {
    if (rearrange) return;
    if (layoutBreakpoints) {
      window.addEventListener("resize", updateSize);
    } else {
      const formContainer = document.querySelector(
        ".loginForm_loginForm__P4yhn"
      );
      formContainer.style.maxWidth = "450px";
      formContainer.style.width = "unset";
      window.removeEventListener("resize", updateSize);
    }
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [layoutBreakpoints]);

  useEffect(() => {
    if (floatLogo) {
      const rand = Math.floor(Math.random() * 100);
      if (rand <= 50) {
        setTextAlign("left");
      } else {
        setTextAlign("right");
      }
    } else {
      setTextAlign("center");
    }
  }, [floatLogo]);

  useEffect(() => {
    if (showBanner) {
      const rand = Math.floor(Math.random() * 100) + 20;
      setHeaderHeight(`${rand}px`);
    } else {
      setHeaderHeight("auto");
    }
  }, [showBanner]);

  useEffect(() => {
    setTheme(thm);
  }, [thm]);

  useEffect(() => {
    setChangeId(selfHealing);
  }, [selfHealing]);

  const handleSignIn = () => {
    if (
      restrictSignIn &&
      (username?.length == 0 ||
        password?.length == 0 ||
        (extraInput &&
          (confirmPassword?.length == 0 || password != confirmPassword)))
    ) {
      setShowError(true);
      if (username?.length == 0 && password?.length == 0) {
        setShowError("Please enter a username and password");
      } else if (username?.length == 0) {
        setShowError("Please enter a username");
      } else if (password?.length == 0) {
        setShowError("Please enter a password");
      } else if (
        extraInput &&
        (confirmPassword?.length == 0 || password != confirmPassword)
      ) {
        setShowError("Confirm password does not match password");
      }
    } else {
      router.push({ pathname: "/bank/dashboard", query: router.query });
    }
  };

  const handleUpdate = (key, value) => {
    if (key == "user") {
      setUsername(value);
    } else if (key == "pass") {
      setPassword(value);
    } else if (key == "passConfirm") {
      setConfirmPassword(value);
    }
  };

  return (
    <div
      style={theme ? theme1.loginScreen : theme2.loginScreen}
      className={loginScreen}
    >
      {showBanner && (
        <h1 style={theme ? theme1.banner : theme2.banner} className={banner}>
          <span
            style={{
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              height: headerHeight,
            }}
          >
            Welcome, please sign in below
          </span>
        </h1>
      )}
      {rearrange ? (
        <div className={loginFormContainer}>
          <div
            style={
              theme
                ? {
                    ...theme1.loginForm,
                    display: "flex",
                    justifyContent: "space-evenly",
                    maxWidth: "1000px",
                  }
                : {
                    ...theme2.loginForm,
                    display: "flex",
                    maxWidth: "1000px",
                    justifyContent: "space-evenly",
                    padding: "100px 0px",
                  }
            }
            className={loginForm}
          >
            <div>
              <div
                className={loginFormLogo}
                style={{ textAlign, maxHeight: "200px" }}
              >
                {theme ? (
                  <a href="/">
                    <img
                      alt=""
                      src={logo.src}
                      style={{ display: "inline-block", height: "50px" }}
                      data-id="login-logo"
                    />
                  </a>
                ) : (
                  <a href="/">
                    <Logo data-id="login-logo" width={100} height={100} />
                  </a>
                )}
              </div>
              <h4
                style={
                  theme
                    ? {
                        ...theme1.loginFormHeader,
                        fontSize: "35px",
                        border: "none",
                      }
                    : {
                        ...theme2.loginFormHeader,
                        fontSize: "35px",
                        border: "none",
                        textAlign: "center",
                      }
                }
              >
                ACME Bank - Login Form
                {/* <div style={theme ? theme1.borderAccent : theme2.borderAccent}></div> */}
              </h4>
            </div>
            <div style={{ height: "400px", border: "1px solid #ddd" }}></div>
            <div>
              <form>
                {showError && <div className={formAlert}>{showError}</div>}
                <div className={loginFormGroup}>
                  <label>Username</label>
                  <input
                    id={changeId ? "username-field" : "username"}
                    placeholder="Enter your username"
                    type="text"
                    onChange={(e) => handleUpdate("user", e.target.value)}
                  />
                  <div
                    style={
                      theme
                        ? theme1.loginFormInputIcon
                        : theme2.loginFormInputIcon
                    }
                    className={[loginFormInputIcon, maleCircleIcon].join(" ")}
                  ></div>
                </div>

                <div className={loginFormGroup}>
                  <label>Password</label>
                  <input
                    id={changeId ? "password-field" : "password"}
                    placeholder="Enter your password"
                    type="password"
                    onChange={(e) => handleUpdate("pass", e.target.value)}
                  />
                  <div
                    style={
                      theme
                        ? theme1.loginFormInputIcon
                        : theme2.loginFormInputIcon
                    }
                    className={[loginFormInputIcon, fingerprintIcon].join(" ")}
                  ></div>
                </div>
                {extraInput && (
                  <div className={loginFormGroup}>
                    <label>Confirm Password</label>
                    <input
                      id={
                        changeId ? "password-field-confirm" : "password-confirm"
                      }
                      placeholder="Confirm your password"
                      type="password"
                      onChange={(e) =>
                        handleUpdate("passConfirm", e.target.value)
                      }
                    />
                    <div
                      style={
                        theme
                          ? theme1.loginFormInputIcon
                          : theme2.loginFormInputIcon
                      }
                      className={[loginFormInputIcon].join(" ")}
                    >
                      <AiOutlineCheckSquare size={27} />
                    </div>
                  </div>
                )}

                <div className={formOptionsContainer}>
                  <button
                    style={theme ? theme1.formSubmit : theme2.formSubmit}
                    className={formSubmit}
                    type="button"
                    onClick={handleSignIn}
                  >
                    <span id={changeId ? "sign-in" : "log-in"}>Sign in</span>
                  </button>

                  <div className={formInlineCheckContainer}>
                    <label>
                      <input className={formCheckInput} type="checkbox" />
                      Remember Me
                    </label>
                  </div>
                  <div>
                    <a href="#" className={formIconLink}>
                      <img alt="" src={twitterPhoto.src} />
                    </a>
                    <a
                      href="#"
                      className={formIconLink}
                      style={{
                        marginLeft: "30px",
                        marginRight: "30px",
                        marginTop: "20px",
                      }}
                    >
                      <img alt="" src={facebookPhoto.src} />
                    </a>
                    <a href="#" className={formIconLink}>
                      <img alt="" src={linkedInPhoto.src} />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className={loginFormContainer}>
          <div
            style={theme ? theme1.loginForm : theme2.loginForm}
            className={loginForm}
          >
            <div
              className={loginFormLogo}
              style={{ textAlign, maxHeight: "200px" }}
            >
              {theme ? (
                <a href="/">
                  <img
                    alt=""
                    src={logo.src}
                    style={{ display: "inline-block", height: "50px" }}
                    data-id="login-logo"
                  />
                </a>
              ) : (
                <a href="/">
                  <Logo data-id="login-logo" />
                </a>
              )}
            </div>
            <h4
              style={theme ? theme1.loginFormHeader : theme2.loginFormHeader}
              className={loginFormHeader}
            >
              Login Form
              <div
                style={theme ? theme1.borderAccent : theme2.borderAccent}
              ></div>
            </h4>
            {showError && <div className={formAlert}>{showError}</div>}
            <form>
              <div className={loginFormGroup}>
                <label>Username</label>
                <input
                  id={changeId ? "username-field" : "username"}
                  placeholder="Enter your username"
                  type="text"
                  onChange={(e) => handleUpdate("user", e.target.value)}
                />
                <div
                  style={
                    theme
                      ? theme1.loginFormInputIcon
                      : theme2.loginFormInputIcon
                  }
                  className={[loginFormInputIcon, maleCircleIcon].join(" ")}
                ></div>
              </div>

              <div className={loginFormGroup}>
                <label>Password</label>
                <input
                  id={changeId ? "password-field" : "password"}
                  placeholder="Enter your password"
                  type="password"
                  onChange={(e) => handleUpdate("pass", e.target.value)}
                />
                <div
                  style={
                    theme
                      ? theme1.loginFormInputIcon
                      : theme2.loginFormInputIcon
                  }
                  className={[loginFormInputIcon, fingerprintIcon].join(" ")}
                ></div>
              </div>
              {extraInput && (
                <div className={loginFormGroup}>
                  <label>Confirm Password</label>
                  <input
                    id={
                      changeId ? "password-field-confirm" : "password-confirm"
                    }
                    placeholder="Confirm your password"
                    type="password"
                    onChange={(e) =>
                      handleUpdate("passConfirm", e.target.value)
                    }
                  />
                  <div
                    style={
                      theme
                        ? theme1.loginFormInputIcon
                        : theme2.loginFormInputIcon
                    }
                    className={[loginFormInputIcon].join(" ")}
                  >
                    <AiOutlineCheckSquare size={27} />
                  </div>
                </div>
              )}

              <div className={formOptionsContainer}>
                <button
                  style={theme ? theme1.formSubmit : theme2.formSubmit}
                  className={formSubmit}
                  type="button"
                  onClick={handleSignIn}
                >
                  <span id={changeId ? "sign-in" : "log-in"}>Sign in</span>
                </button>

                <div className={formInlineCheckContainer}>
                  <label>
                    <input className={formCheckInput} type="checkbox" />
                    Remember Me
                  </label>
                </div>
                <div>
                  <a href="#" className={formIconLink}>
                    <img alt="" src={twitterPhoto.src} />
                  </a>
                  <a
                    href="#"
                    className={formIconLink}
                    style={{
                      marginLeft: "30px",
                      marginRight: "30px",
                      marginTop: "20px",
                    }}
                  >
                    <img alt="" src={facebookPhoto.src} />
                  </a>
                  <a href="#" className={formIconLink}>
                    <img alt="" src={linkedInPhoto.src} />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
