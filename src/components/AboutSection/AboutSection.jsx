import "./AboutSection.css"
import SectionWrapper from "../Layout/SectionWrapper";
import bgImage from '../../assets/images/about-bg.webp';

const AboutSection = () => {
  return (
   <section className="about" style={{
       backgroundImage: `url(${bgImage})`,
     }}>
  <SectionWrapper>
    <h2 className="about__title">ABOUT THE PROJECT</h2>
    <p className="about__text">
      This blog was created to share the most inspiring mountain adventures, breathtaking landscapes, and stories from the peaks around the world.
    </p>
    <div className="about__content">
      <p>
  Our mission is to inspire people to explore the world’s most majestic mountains — not just through physical adventure, but through the stories that unfold with every climb. This blog is a space for those who seek more than just the view from the top — it’s for those who find meaning in the journey.
</p>
<br />
<p>
  Whether it’s battling storms in the Alps, sleeping beneath the stars in Patagonia, or standing breathless on the Everest summit, each story here captures a unique moment of courage, wonder, and connection to nature. Through words and images, we celebrate the human spirit and the untamed beauty of the mountains.
</p>

    </div>
  </SectionWrapper>
</section>

  );
};

export default AboutSection;
