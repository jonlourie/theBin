import styles from "@/styles/Home.module.css";

import CollectionHeader from "@/components/collectionHeader";
import PortfolioTitle from "@/components/portfolioTitle";
import PortfolioData from "@/components/portfolioData";

export default function Portfolio() {
    return (
        <section className={styles.container}>

            <section>
                <section className={styles.portfolio_main}>
                    <CollectionHeader />
                    <PortfolioTitle />
                    <PortfolioData />
                </section>
            </section>

        </section>
    )
}