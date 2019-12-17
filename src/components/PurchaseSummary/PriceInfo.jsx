import React from "react";
import { Box, Grid, Typography, Tooltip, withStyles } from "@material-ui/core";

const SavingsTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 240,
    fontSize: theme.typography.pxToRem(18),
    border: "1px solid #dadde9"
  }
}))(Tooltip);

const PriceInfo = ({ item, taxes, total, savings, oldTotal }) => {
  return (
    <Box px={5} pb={5}>
      <Grid container justify="space-between" style={{ marginBottom: 12 }}>
        <Typography variant="h5" component="h5">
          SubTotal:
        </Typography>
        <Typography variant="h5" component="h5">
          {item.price} $
        </Typography>
      </Grid>
      <Grid container justify="space-between" style={{ marginBottom: 12 }}>
        <Typography variant="h5" component="h5">
          Taxes & Fees:
        </Typography>
        <Typography variant="h5" component="h5">
          {taxes} $
        </Typography>
      </Grid>
      <Grid container justify="space-between" style={{ marginBottom: 12 }}>
        <SavingsTooltip title="picking up your order in the store helps cut costs, and we pass the savings up to you">
          <Typography
            variant="h5"
            component="h5"
            style={{
              textDecoration: "underline dotted",
              color: "#09803a"
            }}
          >
            Pickup Savings:
          </Typography>
        </SavingsTooltip>
        <Typography variant="h5" component="h5" style={{ color: "#09803a" }}>
          {savings} $
        </Typography>
      </Grid>
      <Grid container justify="space-between" style={{ marginBottom: 12 }}>
        <Typography variant="h4" component="h4">
          Total Price:
        </Typography>
        <div>
          {oldTotal ? (
            <Typography
              variant="h6"
              component="span"
              style={{
                color: "#777",
                marginRight: 9,
                textDecoration: "line-through"
              }}
            >
              {oldTotal}$
            </Typography>
          ) : (
            ""
          )}
          <Typography variant="h4" component="span">
            {total} $
          </Typography>
        </div>
      </Grid>
    </Box>
  );
};

export default PriceInfo;
