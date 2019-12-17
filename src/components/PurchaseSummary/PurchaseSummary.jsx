import React, { useEffect } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import PriceInfo from "./PriceInfo";
import ItemInfo from "./ItemInfo";
import DiscountPanel from "./DiscountPanel";

const itemData = {
  name: "GTX 1080ti Zodiac",
  description:
    "A Beast GPU that is dedicated for giving you the Ulimate Gaming Experince",
  price: 800,
  image:
    "https://asset.msi.com/resize/image/global/product/product_10_20171012102324_59ded21c80f3b.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
};

const useStyles = makeStyles({
  card: {
    background: "#FFF",
    maxWidth: "800px",
    boxShadow: "5px 7px 10px #888"
  }
});

const PurchaseSummary = ({
  item,
  setItem,
  savings,
  total,
  taxes,
  oldTotal,
  discounted,
  makeDiscount
}) => {
  useEffect(() => {
    setItem(itemData);
  }, [setItem]);

  const classes = useStyles();

  if (Object.entries(item).length === 0) return <h2>Loading</h2>;

  return (
    <Grid container justify="center">
      <Grid item xs={12} className={classes.card}>
        <Box py={4} px={3}>
          <PriceInfo
            item={item}
            total={total}
            oldTotal={oldTotal}
            savings={savings}
            taxes={taxes}
          />
          <ItemInfo item={item} />
          <DiscountPanel discounted={discounted} makeDiscount={makeDiscount} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PurchaseSummary;
