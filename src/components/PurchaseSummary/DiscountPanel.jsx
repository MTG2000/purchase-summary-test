import React, { useState } from "react";
import {
  ExpansionPanel,
  Typography,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Box,
  TextField,
  Button
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  form: {
    width: "100%",
    maxWidth: 390,
    margin: "0 auto"
  },
  input: {
    width: "100%",
    marginBottom: 30
  },
  btn: {
    background: "#3fa73f",
    color: "#FFF",
    "&:hover": {
      background: "#00a000"
    },
    "&:disabled": {
      color: "#FFF",
      opacity: 0.6
    }
  }
});

const DiscountPanel = ({ discounted, makeDiscount }) => {
  const classes = useStyles();
  const [code, setCode] = useState("");

  const handleClick = () => {
    if (code === "DISCOUNT") makeDiscount();
  };

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Discount Code</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Box className={classes.form}>
          <Typography variant="h6" component="h4" gutterBottom>
            Insert a discount code if you have one
          </Typography>
          <Box>
            <TextField
              id="discount-code"
              label="Code"
              value={code}
              onChange={e => setCode(e.target.value)}
              variant="outlined"
              className={classes.input}
              disabled={discounted}
            />
          </Box>
          <Grid container justify="flex-end">
            <Button
              className={classes.btn}
              size="large"
              disabled={discounted}
              onClick={handleClick}
            >
              {discounted ? "Code Used" : "Use Code"}
            </Button>
          </Grid>
        </Box>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default DiscountPanel;
