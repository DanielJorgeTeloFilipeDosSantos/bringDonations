import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import n1 from "../assets/images/n1.svg";
import people from "../assets/images/People.svg";
import n3 from "../assets/images/n3.svg";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return [
    "Select a donation to pickup",
    "Pick the donation up",
    "Deliver it to an institution"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div style={{ width: "110%", height: "35vh" }}>
          <img src={n1} width="100" />{" "}
          <p>
            Volunteering is easy with bring. Choose a donation to pick up, look
            at the map, and follow the directions to get to it.
          </p>
        </div>
      );
    case 1:
      return (
        <div style={{ width: "110%", height: "35vh" }}>
          <img src={people} width="100" />{" "}
          <p>
            Pick the donation up. Say hello to your fellow donator, maybe share
            a drink, and feel that you are on a mission
          </p>
        </div>
      );
    case 2:
      return (
        <div style={{ width: "110%", height: "35vh" }}>
          <img src={n3} width="100" /> <p></p>
          <p>
            Follow the directions to get to deliver the donation to its specific
            institution. Once again follow the map to get there.
          </p>
        </div>
      );
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? "Choose a donation"
                      : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <div> {props.history.push("/donation")}</div>
      )}
    </div>
  );
}
