const app = require("./app");
const port = 8080;

let transactions = [];

app.post("/transaction", (req, res) => {
  const body = req.body;
  if (body.description && body.amount) {
    if (typeof body.amount !== "number") {
      res.status(400).json("Amount should be a number");
      return;
    }
    transactions.push({
      description: body.description,
      amount: body.amount,
    });
    res.status(201).json({
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
