import React from "react";
import {
  ExpansionPanel,
  Typography,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ItemInfo = ({ item }) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Item Info</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container justify="space-around">
          <Grid item xs={12} md={4}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", maxWidth: 400 }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ItemInfo;
