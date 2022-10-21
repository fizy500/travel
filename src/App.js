import React from "react";
import Header from "./Components/Header";
import data from "./Components/data";
import CardDetails from "./Components/CardDetails";
export default function App() {
  const cards = data.map((item) => {
    return <CardDetails key={item.id} {...item} />;
  });
  return (
    <div className="grid grid-rows-3 justify-center items-center space-y-20  p-3">
      <Header />
      {cards}
    </div>
  );
}
