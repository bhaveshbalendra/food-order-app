import express from "express";

const PORT = 8004;
const app = express();

app.listen(PORT, () => console.log(`Food Order App running on PORT:${PORT}`));
