import express from "express";
import openBeatmapDownloadUrl from "./helpers/openBeatmapDownloadUrl";
import openBeatmapEditUrl from "./helpers/openBeatmapEditUrl";
const app = express();

app.get("/dl/:id", openBeatmapDownloadUrl);
app.get("/edit/:timestamp", openBeatmapEditUrl);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server -> Started!");
});
