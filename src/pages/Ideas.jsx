import Banner from "../components/Banner";
import IdeaCard from "../components/IdeaCard";
import IdeaImage from "../assets/hero-car.jpg";

const Ideas = () => {
  return (
    <>
      <Banner />
      <div className=" mt-10 grid grid-cols-4 gap-4">
        <IdeaCard
          image={IdeaImage}
          title="My Idea Title"
          date="January 1, 2023"
        />
        <IdeaCard
          image={IdeaImage}
          title="My Idea Title"
          date="January 1, 2023"
        />
        <IdeaCard
          image={IdeaImage}
          title="My Idea Title"
          date="January 1, 2023"
        />
        <IdeaCard
          image={IdeaImage}
          title="My Idea Title"
          date="January 1, 2023"
        />
        <IdeaCard
          image={IdeaImage}
          title="My Idea Title asdasdasdasdasdassdafiuhyasdfiyuasdiygadSIGasdgh diuasgdakljs daskugdiaslu dgyasu dsayug askdgj asdga dasidg a asidgalisd ials dlj"
          date="January 1, 2023"
        />
        <IdeaCard
          image={IdeaImage}
          title="My Idea Title"
          date="January 1, 2023"
        />
        <IdeaCard
          image={IdeaImage}
          title="My Idea Title"
          date="January 1, 2023"
        />
        <IdeaCard
          image={IdeaImage}
          title="My Idea Title"
          date="January 1, 2023"
        />
      </div>
    </>
  );
};

export default Ideas;
