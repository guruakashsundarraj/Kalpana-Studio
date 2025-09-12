import { useState } from "react";

function Booking() {
  const [form, setForm] = useState({ name: "", date: "", type: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Session</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="date" type="date" onChange={handleChange} required />
      <select name="type" onChange={handleChange} required>
        <option value="">--Select Type--</option>
        <option>Wedding</option>
        <option>Portrait</option>
        <option>Event</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Booking;
