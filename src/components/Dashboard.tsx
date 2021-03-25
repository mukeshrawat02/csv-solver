import React, { useState } from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { FileReader } from "./FileReader"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, Fade } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: 10,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      minWidth: 250,
    },
    progressContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: theme.spacing(15),
    },
    progress: {
      marginBottom: theme.spacing(4),
    },
  })
)

type ReaderContext = {
  numbers: number[];
  hideUploader: boolean;
  target: string;
  formula: string;
}

export const Dashboard: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [currentState, setState] = useState<ReaderContext>({
    numbers: [],
    hideUploader: false,
    target: "",
    formula: "",
  })

  const onFileReadHandler = (data: number[]) => {
    setState({ ...currentState, ...{ numbers: data } })
  }

  const findSolution = () => {
    // fine solution
    setLoading((prevLoading) => !prevLoading);
  };

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...currentState,
      ...{
        target: event.target.value,
        formula: "",
      }
    })
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        {loading ? (
          <Box className={classes.progressContainer}>
            <CircularProgress size={80} className={classes.progress} />
            <Typography color="textPrimary" variant="h6">
              Please wait while the formula is creating..
                </Typography>
          </Box>
        ) : (
          <>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                CSV Numbers Formula Solver
          </Typography>
            </Grid>
            {!currentState.numbers?.length && (
              <Grid item xs={12}>
                <FileReader onFileRead={onFileReadHandler} />
              </Grid>
            )}
            {currentState.numbers?.length && (
              <>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper} elevation={3}>
                    <TextField
                      label="Selection"
                      defaultValue={currentState.numbers?.join(",")}
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper} elevation={3}>
                    <TextField
                      id="outlined-basic"
                      label="Target Number"
                      variant="outlined"
                      type="number"
                      value={currentState.target}
                      onChange={onHandleChange}
                    />
                  </Paper>
                </Grid>
                {currentState.target && (
                  <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={3}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => queueMicrotask(() => findSolution())}
                      >
                        Solve
                  </Button>
                    </Paper>
                  </Grid>
                )}
                {currentState.formula && (
                  <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={3}>
                      {currentState.formula}
                    </Paper>
                  </Grid>
                )}
              </>
            )}
          </>
        )}
      </Grid>
    </div>
  )
}
