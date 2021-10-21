import { Button } from "@material-ui/core";
import { useField } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import { SingleFileUploadWithProgress } from "./singleuplod";
import { UploadError } from "./uploadError";
import "react-toastify/dist/ReactToastify.css";

import "./style.css";

export function MultipleFileUploadField({ name }) {
  const [_, __, helpers] = useField(name);

  const [files, setFiles] = useState([]);

  const onDrop = useCallback((accFiles, rejFiles) => {
    rejFiles.forEach((file) => {
      file.errors.forEach((err) => {
        if (err.code === "file-too-large") {
          toast.error(
            ` ${name} Error: ${err.message}, upload a small file less than 2MB`
          );
        } else if (err.code === "file-invalid-type") {
          toast.error(`Error: ${err.message}, uplod only images`);
        } else if (err.code === "too-many-files") {
          toast.error(
            `Error: ${err.message}, you can uplod only 5(five) images.`
          );
        }
      });
    });

    accFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFiles((curr) => [...curr, reader.result]);
      };
      reader.onerror = () => {
        console.error("AHHHHHHHH!!");
      };
    });

    // const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    // setFiles((curr) => [...curr, ...mappedAcc]);
  }, []);

  const disable = () => {
    if (files.length === 5) {
      document.getElementById("drop").classList.toggle("disable_drop");
    }
  };

  useEffect(() => {
    helpers.setValue(files);
    // helpers.setTouched(true);
    console.log("from effect " + files);
    disable();
  }, [files]);

  function onDelete(file) {
    setFiles((curr) => curr.filter((exfile) => exfile !== file));
    disable();
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ["image/*"],
    maxSize: 2000 * 1024, //2MB
    maxFiles: 5,
  });

  return (
    <React.Fragment>
      <div className="images_page_con">
        <div className="dropzone_con">
          <div className="drop_area" id="drop" {...getRootProps()}>
            <input {...getInputProps()} />
            <p id="drop_text">
              Drag and Drop your file or <button>Select</button>
            </p>
          </div>

          <div className="selected_images">
            {files.map((file) => (
              <div className="image_pre_view">
                <img src={file} alt="Selected" loading="lazy" />
                <div className="del_btn">
                  <button onClick={() => onDelete(file)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="drop_side_con"></div>
      </div>
    </React.Fragment>
  );
}
