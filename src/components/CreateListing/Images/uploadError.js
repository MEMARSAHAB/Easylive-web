import {
  createStyles,
  LinearProgress,
  Typography,
  withStyles,
  Grid,
  Button,
} from "@material-ui/core";
import React from "react";
import { FileError } from "react-dropzone";


const ErrorLinearProgress = withStyles((theme) =>
  createStyles({
    bar: {
      backgroundColor: theme.palette.error.main,
    },
  })
)(LinearProgress);

export function UploadError({ file, onDelete, errors }) {
  return (
    <React.Fragment>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>{file.name}</Grid>
        <Grid item>
          <Button size="small" onClick={() => onDelete(file)}>
            Delete
          </Button>
        </Grid>
      </Grid>
      <ErrorLinearProgress variant="determinate" value={100} />
      {errors.map((error) => (
        <div key={error.code}>
          <Typography color="error">{error.message}</Typography>
        </div>
      ))}
    </React.Fragment>
  );
}
