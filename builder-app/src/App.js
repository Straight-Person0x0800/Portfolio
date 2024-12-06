import About from "./components/About";
import Contact from "./components/Contact";
import FeatureCard from "./components/FeatureCard";
import Navigation from "./components/Navigation.js";
import fakeDataYasser from "./fakeData/yasser123.json";
import fakeDataAyman from "./fakeData/ayman123.json";
import fakeDataYoussef from "./fakeData/youssef123.json";
import aiGenerated from "./fakeData/aiGenerated.json";
import aiGenerated2 from "./fakeData/aiGenerated2.json";
import aiGenerated3 from "./fakeData/aiGenerated3.json";

const data = aiGenerated3;
const navigationData = data.NavigationData;
const aboutData = data.about;
console.log(aboutData);

function App() {
  return (
    <>
      <Navigation
        logo={navigationData.logo}
        style={navigationData.style}
        links={data.links}
        color={
          navigationData.colorPlates
            ? navigationData.colorPlates
            : data.globalColor
        }
      />

      {/* About Section  */}
      <About
        style={aboutData.style}
        content={aboutData.content}
        color={aboutData.colorPlates ? aboutData.colorPlates : data.globalColor}
      />
      {/*This is the sections  */}
      {Object.entries(data.sections).map(([sectionId, section]) => (
        <section key={sectionId} className={section.style.section}>
          <div className={section.style.titleAndDescriptionContainer}>
            <h2 className={section.style.title}>{section.title}</h2>
            <p className={section.style.description}>{section.description}</p>
          </div>
          <div className={section.style.cardDisposition}>
            {Object.entries(section.sectionData).map(([dataId, dataItem]) => (
              <FeatureCard
                key={dataId}
                imageSrc={dataItem.imageSrc}
                altText={dataItem.altText}
                title={dataItem.title}
                tags={dataItem.tags}
                description={dataItem.description}
                style={section.style} // Pass style dynamically
              />
            ))}
          </div>
        </section>
      ))}
      <Contact data={data} />
    </>
  );
}

export default App;
