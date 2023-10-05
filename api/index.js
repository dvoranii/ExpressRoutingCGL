import express from "express";

import path from "path";

const app = express();

// Adjust the paths based on the new directory structure
app.use(
  "/static",
  express.static(path.resolve(__dirname, "..", "frontend", "static"))
);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "frontend", "index.html"));
});

export default app;
