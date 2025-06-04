import React, { useState } from "react";
const Displaynames = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [fullname, setFulName] = useState("");
  const [error, setError] = useState("");
//   const [flag, setFlag] = useState({ firstname: "", lastname: "" });
  const validation = (firstname, lastname) => {
    if (!firstname.trim()) {
      setError("Please fill out this field");
    //   setFlag({ firstname: firstname, lastname: lastname });
      return false;
    } else if (!lastname.trim()) {
      setError("Please fill out this field");
    //   setFlag({ firstname: firstname, lastname: lastname });
      return false;
    } else {
    //   setFlag("");
      return true;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (validation(firstname.trim(), lastname.trim())) {
      setFulName(`${firstname.trim()} ${lastname.trim()}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "self-start",
        alignItems: "flex-start",
        padding: "10px",
        gap: "20px",
      }}
    >
      <h1>Full Name Display</h1>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "self-start",
          alignItems: "flex-start",
          padding: "10px",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <label>First Name:</label>{" "}
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstname}
          ></input>
          {error && <div key = {firstname} className="alert">{error}</div>}{" "}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></input>
          {error && <div key={lastname} className="alert">{error}</div>}
        </div>
        <button type="submit" style={{ alignSelf: "flex-start" }}>
          Submit
        </button>
      </form>

      {fullname && <h2>Full Name: {fullname}</h2>}
    </div>
  );
};

export default Displaynames;
