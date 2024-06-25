import React from "react";
import TransactionLine from "./TransactionLine";

const OverviewTransactions = () => {
  const transactionslist = [
    {
      receiver: "Receiver",
      type: "Type",
      date: "Date",
      amount: "Amount",
    },
    {
      receiver: "Tesco Market",
      type: "Shopping",
      date: "13 Dec 2020",
      amount: "$75.67",
    },
    {
      receiver: "ElectroMen Market",
      type: "Shopping",
      date: "14 Dec 2020",
      amount: "$250.00",
    },
    {
      receiver: "Fiorgio Restaurant",
      type: "Food",
      date: "07 Dec 2020",
      amount: "$19.50",
    },
    {
      receiver: "John Mathew Kayne",
      type: "Sport",
      date: "06 Dec 2020",
      amount: "$350",
    },
    {
      receiver: "Ann Marlin",
      type: "Shopping",
      date: "31 Nov 2020",
      amount: "$430",
    },
  ];
  return (
    <div className="w-full rounded-xl h-[280px] border-2 shadow-[0px_10px_45px_0px_#00000024] px-8 py-2 flex flex-col gap-2  ">
      <h1 className="font-bold text-xl">Transactions</h1>
      <div className="flex flex-col  items-center ">
        <TransactionLine item={transactionslist[0]} title />
        {transactionslist.slice(1).map((item, index) => (
          <TransactionLine item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OverviewTransactions;
