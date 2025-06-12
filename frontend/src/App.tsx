import { useState } from "react";
import "./App.css";

type Result = {
  description: string;
  amount: number;
};
function App() {
  const [form, setForm] = useState({
    description: "",
    amount: "",
  });
  const [result, setResult] = useState<Result | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    setResult(result);
    setForm({
      description: "",
      amount: "",
    });
  };

  return (
    <div>
      <h1>Transaction</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <button>Send</button>
      </form>
      {result && (
        <div>
          <h2>Result:</h2>
          <p>Description: {result.description}</p>
          <span>Amount: {result.amount}</span>
        </div>
      )}
    </div>
  );
}

export default App;
