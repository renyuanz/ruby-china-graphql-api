import React from "react";
import GithubImg from "./github.png";

const Topbar = ({ token, onTokenChange }) => {
  const [value, setValue] = React.useState(token);

  React.useEffect(() => {
    setValue(token);
  }, [token, setValue]);

  React.useEffect(() => {
    onTokenChange(value);
  }, [onTokenChange, value]);

  const handleClear = React.useCallback(() => {
    setValue("");
  }, [setValue]);

  const handleLogin = () => (location.href = "/login/rubycn");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <span>{token ? token : "Login to get your token."}</span>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleClear}>clear</button>
      <img src={GithubImg} alt="" height="24" />
    </div>
  );
};

export default Topbar;
