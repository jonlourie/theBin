import CollectionHeader from "@/components/collectionHeader";
import DerivativesHeroSection from "@/components/derivativesHeroSection";
import DerivativesPurchaseSection from "@/components/derivativesPurchaseSection";
import styles from "@/styles/Home.module.css";

export default function ViewCollection() {
  return (
    <section className={styles.container}>
      <section>
      <section className={styles.viewCollection_main}>
        <CollectionHeader />
        <DerivativesHeroSection />
        <DerivativesPurchaseSection />
      </section>
      </section>
    </section>
  );
}