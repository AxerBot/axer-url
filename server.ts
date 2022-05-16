import express from "express";
import openBeatmapDownloadUrl from "./helpers/openBeatmapDownloadUrl";
const app = express();

app.get("/dl/:id", openBeatmapDownloadUrl);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server -> Started!");
});
