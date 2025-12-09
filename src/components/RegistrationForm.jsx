import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    console.log("Submitting to mock API...", formData);

    setTimeout(() => {
      alert("User registered successfully!");
    }, 700);
  };

  return (
    <div style={{ maxWidth: "450px", margin: "2rem auto" }}>
      <h2>Registration Form (Controlled Components)</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name="username" value={formData.username} onChange={handleChange} />

        <label>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} />

        <label>Password</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} />

        <button>Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
