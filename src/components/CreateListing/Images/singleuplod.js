import { Grid, LinearProgress, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { CLOUDINARY_URL } from "../../../constant/constant";

export function SingleFileUploadWithProgress({ file }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function upload() {
      const url = await uploadFile(file, setProgress);
      // onUpload(file, url);
    }

    upload();
  }, []);

  return (
    <Grid item>
      <Grid container justify="space-between" alignItems="center">
        <div>
          <img src={file} alt="chosen" style={{ height: "300px" }} />
        </div>
        <Grid item>
          {/* <Button size="small" onClick={() => onDelete(file)}>
            Delete
          </Button> */}
        </Grid>
      </Grid>
      <LinearProgress variant="determinate" value={progress} />
    </Grid>
  );
}

function uploadFile(file, onProgress) {
  const url = "https://api.cloudinary.com/v1_1/djd6tbkpg/image/upload";
  const key = "khjzbzvb";

  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      res(resp.secure_url);
      console.log(resp.secure_url);
    };
    xhr.onerror = (evt) => {
      console.log(evt);
      rej(evt);
    };
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentage));
      }
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", key);
    xhr.send(formData);
  });
}
