import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {

  const navigate = useNavigate();
  const [fullName, setFullName] = React.useState("");
  const handleSubmit = (event) => {
    console.log(fullName);
    event.preventDefault();
    if (fullName && fullName.length > 7 && fullName.includes(" ")) {
      localStorage.setItem("fullName", JSON.stringify(fullName));
      let store = JSON.parse(localStorage.getItem("store")) || [];
      store.push(fullName);
      localStorage.setItem("store", JSON.stringify(store));

      navigate("/quiz-test/1");
    } else {
      toast.error("Please input your full name");
    }
  };

  return (
    <div className="home">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
        }}
      />
      <h1 className="welcome">Welcome!</h1>
      <p className="instruction">
        Please enter your <strong>full name</strong> to proceed.
      </p>
      <form className="user-input" onSubmit={handleSubmit}>
        <input
          type="text"
          name="full-name"
          id="full-name"
          placeholder="Enter full name"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
        <button className="start">Start</button>
      </form>
    </div>
  );
};

export default Home;
