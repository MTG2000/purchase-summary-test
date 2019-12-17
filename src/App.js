import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Container } from "@material-ui/core";
import PurchaseSummaryContainer from "./components/PurchaseSummary/PurchaseSummaryContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <PurchaseSummaryContainer />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
