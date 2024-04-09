import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Online Sushi Restaurant Japan Cuisine</h2>
      <p>
        Japan Kitchen is an online sushi restaurant where your favorite sushi
        and sashimi, rolls and other dishes of national Japanese cuisine are
        made by the team professional chefs.
      </p>
      <p>
        Fast work and quality products, as well as the most authentic components
        give good taste to dishes and give pleasure from the meal.
      </p>
    </section>
  );
};

export default PromoText;