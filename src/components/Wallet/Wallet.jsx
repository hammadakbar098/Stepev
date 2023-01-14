import React from "react";
import "./Wallet.css";
import WalletCard from "./WalletCard";
import Heading from "./../Reusable/Heading";
import UserWallet from "./UserWallet";

const Wallet = () => {
  return (
    <>
      <div className="wallet">
        <div className="walletChild1">
          <div className="walletCards">
            <WalletCard amount="143,000" info="Total Amount" />
            <WalletCard amount="141,000" info="Available for Withdrawal" />
            <WalletCard amount="103,000" info="Withdrawn" />
          </div>
          <div className="walletTitle">
            <Heading title="Wallet" />
          </div>
          <div className="walletDetails">
            <UserWallet
              balance={"143,000"}
              profitPercent={21}
              withdrawnAmount="101,000.53"
              profit="131,000.53"
            />
            <div className="withdraw_amount">
              <p className="withdrawAmountTitle">Withdraw Amount</p>
              <div className="alignWithdraw">
                <div className="withdrawSettings">
                  <div className="setting_child">
                    <p>Amount</p>
                  </div>
                  <div className="setting_child">
                    <p>Other Amount</p>
                  </div>
                </div>
                <div className="withdrawBtn">
                  <p>Withdraw</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="walletChild2">
          <Heading title="Withdrawal History" />
          <table className="walletTable">
            <thead>
              <tr align="center">
                <th>ID</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody align="center">
              <tr>
                <td className="withdrawId">#ID-001</td>
                <td className="withdrawAmount">$2400</td>
                <td className="withdrawDate">20/Aug/2022</td>
              </tr>
              <tr>
                <td className="withdrawId">#ID-001</td>
                <td className="withdrawAmount">$2400</td>
                <td className="withdrawDate">20/Aug/2022</td>
              </tr>
              <tr>
                <td className="withdrawId">#ID-001</td>
                <td className="withdrawAmount">$2400</td>
                <td className="withdrawDate">20/Aug/2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Wallet;
