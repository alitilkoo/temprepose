import "../styles/about.css";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about__image"></div>
        <div className="about__content">
          <h2>ABOUT US</h2>
          <p>
            Coffee is a popular beverage enjoyed by people all over the world.
            It is made from the roasted seeds of the Coffea plant, which belongs to the Rubiaceae family.
            There are several species of Coffea, but the two most commonly cultivated ones are Coffea arabica and Coffea robusta.
            History: The consumption of coffee dates back centuries, with its origins traced to the highlands of Ethiopia.
            From there, it spread to the Arabian Peninsula and eventually reached Europe, becoming a global phenomenon.
            Cultivation: Coffee plants thrive in tropical climates with rich soil and sufficient rainfall.
            The plants can grow up to 10 meters tall, but for cultivation, they are usually pruned to a more manageable height for ease of harvesting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
