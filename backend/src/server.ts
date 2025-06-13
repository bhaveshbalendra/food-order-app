import express, { Request, Response } from "express";

const PORT = 8004;
const app = express();

app.use(express.json());

// Start the server with correct parameters
app.listen(PORT, () => {
  console.log(`Food Order App running on PORT:${PORT}`);
});
