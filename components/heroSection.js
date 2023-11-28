import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Eth } from "@web3uikit/icons";
import styles from "@/styles/Home.module.css";

import BAYC from "../public/assets/blurBackground.png";
import ChecksVVOriginals from "../public/assets/checksVVOriginals.png";
import Azuki from "../public/assets/azuki.png";
import PudgyPenguins from "../public/assets/pudgyPenguins.png";
import Moonbirds from "../public/assets/moonbirds.png";

export function HeroSection() {
    //const [oneDayTradingVolume, setOneDayTradingVolume] = useState("");

    //useEffect(() => {
        //const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        //const getNftData = async () => {
            //const response = await axios.get("http://localhost:5001/getnftdata", {
                //params: {
                    //contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
                //},
            //});

            //let tradingVolume = 0;

            //response.data.result.map((sale) => {
                //if(sale.block_timestamp > yesterday.toISOString()) {
                    //return (tradingVolume += sale.total_price/ 10 ** 18);
                //}
            //});
            //setOneDayTradingVolume(tradingVolume);
       // };

        //getNftData();
  //});

    return (
        <section className={styles.heroSection}>
          <section
            style={{ 
                color: "pink",
            }}
          >
          <h2>Trade Any Item For No Extra Fee</h2>
          </section>
          <section
            style={{ 
                color: "pink",
            }}
          >
          <p>Sponsered By Blocfare</p>
          </section> 
          <section className={styles.bayc_data}>
          <Link href="/mmcollection" className={styles.link}>
            <button className={styles.viewCollection_btn}>
              REDEEM
              <Arrow fontSize="20px" className={styles.arrow} />
            </button>
            </Link>
          </section>
        </section>
    );
}
