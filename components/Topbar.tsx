import React from "react";

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

  const handleLogin = () => (location.href = "/connect/homeland");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 1rem",
        height: 30,
      }}
    >
      {token ? (
        "logged in"
      ) : (
        <button style={{ marginRight: 5 }} onClick={handleLogin}>
          login
        </button>
      )}
      <button style={{ marginRight: 5 }} onClick={handleClear}>
        log out
      </button>
    </div>
  );
};

export default Topbar;
