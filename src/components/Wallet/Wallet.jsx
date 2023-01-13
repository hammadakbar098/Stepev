import React from "react";
import "./Wallet.css";
import WalletCard from "./WalletCard";
const Wallet = () => {
  return (
    <>
      <div className="walletCards">
        <WalletCard amount="143,000" info="Total Amount" />
        <WalletCard amount="141,000" info="Available for Withdrawal" />
        <WalletCard amount="103,000" info="Withdrawn" />
      </div>
    </>
  );
};

export default Wallet;
