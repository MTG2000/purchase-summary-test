import { connect } from "react-redux";
import { setItem, makeDiscount } from "../../Redux/reducers/purchaseSumReducer";
import PurchaseSummary from "./PurchaseSummary";

const mapStateToProps = state => ({
  item: state.summary.item,
  savings: state.summary.pickupSavings,
  total: state.summary.total,
  oldTotal: state.summary.oldTotal,
  taxes: state.summary.taxes,
  discounted: state.summary.discounted
});

const PurchaseSummaryContainer = connect(mapStateToProps, {
  setItem,
  makeDiscount
})(PurchaseSummary);

export default PurchaseSummaryContainer;
