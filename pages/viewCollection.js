import CollectionHeader from "@/components/collectionHeader";
import CollectionHeroSection from "@/components/collectionHeroSection";
import CollectionPurchaseSection from "@/components/collectionPurchaseSection";
import styles from "@/styles/Home.module.css";

export default function ViewCollection() {
  return (
    <section className={styles.container}>
      <section>
      <section className={styles.viewCollection_main}>
        <CollectionHeader />
        <CollectionHeroSection />
        <CollectionPurchaseSection />
      </section>
      </section>
    </section>
  );
}