import axios from "axios";
import React, { useEffect, useState } from "react";

export const All = () => {
  const [ethData, setEthData] = useState<any>([]);
  const [solData, setSolData] = useState<any>([]);

  const something = async () => {
    const data = await axios("http://localhost:8080/solana");
    setSolData(data.data);
  };

  const something2 = async () => {
    const data = await axios("http://localhost:8080/ethereum");
    setEthData(data.data);
  };

  useEffect(() => {
    something();
    something2();
  });

  return (
    <div>
      <div>find coin</div>
      <input />
      <br />
      <br />
      <br />
      <br />
      <div>
        <span style={{ marginRight: 30 }}>name</span>
        <span style={{ marginRight: 30 }}>shortName</span>
        <span style={{ marginRight: 30 }}>price</span>
        <span style={{ marginRight: 30 }}>volume</span>
        <span style={{ marginRight: 30 }}>change 24</span>
      </div>
      <br />
      {[...ethData, ...solData].map((el, i) => (
        <div>
          <span style={{ marginRight: 30 }}>{el.name ? el.name : el.coin}</span>
          <span style={{ marginRight: 30 }}>
            {el.shortName ? el.shortName : el.short}
          </span>
          <span style={{ marginRight: 30 }}>
            {el.price ? el.price : el.actualPrice}
          </span>

          <span style={{ marginRight: 30 }}>{el.volume}</span>
          <span style={{ marginRight: 30 }}>{el.change24}</span>
        </div>
      ))}
    </div>
  );
};
