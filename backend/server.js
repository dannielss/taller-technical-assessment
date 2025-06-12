import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

let transactions = [];

app.post("/transaction", (req, res) => {
  const body = req.body;
  if (body.description && body.amount) {
    transactions.push({
      description: body.description,
      amount: body.amount,
    });
    res.status(200).json({
      description: body.description,
      amount: body.amount,
    });
  } else {
    res.status(400).json("Description and amount is required");
  }
});

app.get("/transactions", (req, res) => {
  res.status(200).json(transactions);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
