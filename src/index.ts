import express, { type Request, type Response } from "express";

const app = express();

const PORT = 3030;

app.get("/", (req: Request, res: Response) => {
  res.send("hello from server");
});
app.get("/api/items", (req: Request, res: Response) => {
  res.send("hello from server items");
});
app.listen(PORT, () => {
  console.log(`server running ins ${PORT}`);
});
