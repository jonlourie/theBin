import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAccount, useConnect } from "wagmi";
import { Search } from "@web3uikit/icons";
import styles from "@/styles/Home.module.css";

import Logo from "../public/assets/rf3.png";
import LogoThree from "../public/assets/rbwbt.png";

export default function CollectionHeader() {
    const { isConnected, address } = useAccount();
    const { connect, connectors } = useConnect();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (!isConnected) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, [isConnected]);

    return (
        <section className={styles.collectionHeader}>
          <section className={styles.logo}>
            <Link href="/">
              <Image src={Logo} alt="Blur Logo" width="70" height="" />
            </Link>
          </section>
          <section className={styles.logo}>
            <Link href="/">
              <Image src={LogoThree} alt="Blur Logo" width="70" height="" />
            </Link>
          </section>
          <section className={styles.nav}>
            <section className={styles.nav_items}>
              <Link href="/viewCollection" className={styles.link}>
                <p>Sell</p>
              </Link>
              <Link href="/viewDerivatives" className={styles.link}>
                <p>Buy</p>
              </Link>
              <Link href="/portfolio" className={styles.link}>
                <p>Custodian</p>
              </Link>
              <Link href="/mmcollection" className={styles.link}>
              <p>Redeem</p>
              </Link>
            </section>
            <section className={styles.searchSection}>
              <section>
                <span>
                  <Search fontSize="25px" />
                </span>
                <input
                  placeholder="Search Items and Stores"
                  disabled=""
                  className={styles.inputField}
                />
                <span></span>
              </section>
            </section>
            {!isLoggedIn ? (
              <section>
                {connectors.map((connector) => (
                  <button
                    //disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                    className={styles.connect_btn}
                  >
                    CONNECT WALLET
                  </button>
                ))}
              </section>
            ) : (
              <section className={styles.loggedIn_section}>
                {isLoggedIn ? address?.slice(0, 8) : ""}
              </section>
            )}
          </section>
        </section>
    );
}