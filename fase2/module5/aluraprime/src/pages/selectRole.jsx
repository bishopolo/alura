import { useContext } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function SelectRole() {
  const { setRole } = useContext(useAuth);
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    setRole(role);
    navigate("/home");
  };

  const handleAdmin = () => {
    let password = prompt("Enter the password");

    if (password === "alura") {
      handleSelectRole("admin");
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className="border-0 text-center my-52">
      <h1 className="font-bold text-3xl">Select Your Role</h1>
      <section className="flex justify-center gap-28 my-4">
        <div className="border-0 w-fit place-content-center bg-emerald-600 p-5 shape1 shadow-xl">
          <button
            className=" rounded-full p-4  bg-slate-900 text-white shadow-2xl hover:bg-slate-700 transition-colors"
            onClick={() => handleAdmin()}
          >
            Admin 🤴🏻
          </button>
        </div>
        <div className="border-0 bg-purple-600 place-content-center p-5 shape2">
          <button
            className=" rounded-full p-4  bg-slate-900 text-white shadow-2xl hover:bg-slate-700 transition-colors"
            onClick={() => handleSelectRole("guest")}
          >
            Guest 🤵🏻‍♂️
          </button>
        </div>
      </section>
    </div>
  );
}
