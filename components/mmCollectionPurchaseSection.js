import {useEffect, useState } from "react";
//import axios from "axios";
import Image from "next/image";
import { utils } from "ethers";
import {
    useAccount,
    useContract,
    useContractWrite,
    usePrepareContractWrite,
    useProvider,
    useSigner,
} from "wagmi";
import { Eth } from "@web3uikit/icons";
import styles from "@/styles/Home.module.css";

import { abi, BLOCMART_CONTRACT } from "../contracts/index.js";

//We Dont Have Some Of These Contracts 
export default function MMCollectionPurchaseSection() {
    const { address } = useAccount();
    const provider = useProvider();
    const { data: signer } = useSigner();
    const [price, setPrice] = useState("");

    const [tokenID, settokenID] = useState(0);
    const [storeAddr, setStoreAddr] = useState();
    const [name, setName] = useState();
    const [streetAddr, setStreetAddr] = useState();
    const [city, setCity] = useState();
    const [zip, setZip] = useState(0);
    const [country, setCountry] = useState();

    const disabledBTN = !tokenID || !storeAddr || !name || !streetAddr || !city || !zip || !country;
  
    const NftMarketplace = useContract({
      address: BLOCMART_CONTRACT,
      abi: abi,
      signerOrProvider: signer || provider,
    });
  
    const { config } = usePrepareContractWrite({
      address: BLOCMART_CONTRACT,
      abi: abi,
      overrides: {
        from: address,
        value: price,
      },
      functionName: "redeem",
      args: [tokenID, storeAddr, name, streetAddr, city, zip, country],
    });

    const { write } = useContractWrite(config);
  
    return (
      <section className={styles.collectionPurchaseSection}>
        <section className={styles.collectionPurchaseSection_titles}>
          <p>REDEEM</p>
          <p>REFUND</p>
        </section>
        <table className={styles.collectionPurchaseSection_table}>
          <thead>
            <tr>
       
              <th>NAME:</th>
              <th>STREET:</th>
              <th>CITY:</th>
              <th>ZIP:</th>
              <th>COUNTRY:</th>
              <th>STORE:</th>
              <th>ID:</th>

            </tr>
          </thead>
          <tbody className={styles.collectionPurchaseSection_tbody}>
                <tr>
                    <td>
                      <input type="text" placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </td>
                    <td >
                      <input type="text" placeholder="street"
                        onChange={(e) => setStreetAddr(e.target.value)}
                      />
                    </td>
                    <td>
                      <input type="text" placeholder="city" 
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </td>
                    <td>
                      <input type="number" placeholder="zip"
                        onChange={(e) => setZip(e.target.value)}
                      />
                    </td>
                    <td>
                      <input type="text" placeholder="country"
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </td>
                    <td>
                      <input type="text" placeholder="store address"
                        onChange={(e) => setStoreAddr(e.target.value)}
                      />
                    </td>
                    <td>
                      <input type="number" placeholder="ID"
                        onChange={(e) => settokenID(e.target.value)}
                      />
                    </td>
                </tr>
          </tbody>
          <tbody className={styles.collectionPurchaseSection_tbody}>
                <tr>
                    <td>
                      <input type="submit" placeholder="SUBMIT"
                        disabled={disabledBTN}
                        onClick={() => write?.()}
                      />
                    </td>
                </tr>
          </tbody>
        </table>
      </section>
    );
  }