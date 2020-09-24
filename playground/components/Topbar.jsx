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

  const handleLogin = () => (location.href = "/connect/rubycn");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      {token ? (
        <span>logged in</span>
      ) : (
        <button style={{ marginRight: 5 }} onClick={handleLogin}>
          login
        </button>
      )}

      <button style={{ marginRight: 5 }} onClick={handleClear}>
        log out
      </button>
      <img src={GithubImg} alt="" height="24" />
    </div>
  );
};

export default Topbar;
