import styles from "@/styles/Home.module.css";

import CollectionHeader from "@/components/collectionHeader";
import MMCollectionHeroSection from "@/components/mmCollectionHeroSection";
import MMCollectionPurchaseSection from "@/components/mmCollectionPurchaseSection";

export default function ViewCollection() {
    return (
        <section className={styles.container}>
            <section>
                <section className={styles.viewCollection_main}>
                    <CollectionHeader />
                    <MMCollectionHeroSection />
                    <MMCollectionPurchaseSection />
                </section>
            </section>
        </section>
    )
}