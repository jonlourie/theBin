import styles from "@/styles/Home.module.css";

export default function AirdropPopUp() {
    return (
        <section className={styles.airdropPopUp}>
          <section style={
            {
              color: "orange",
            }
          }>
          <p>
            $SUBSIDY is now live, Claim tokens and rewards in SUBSIDY tab
          </p>
          </section>
          <button className={styles.airdropPopUp_btn}>CLAIM</button>
        </section>
      );
}