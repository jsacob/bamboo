import AOS from "aos"
import "aos/dist/aos.css";
import {useState, useEffect} from 'react';

import './App.css'
import bamboo from './assets/images/bambooHeader.jpg'
import bambooFood from './assets/images/bambooPackaging.jpg'
import bambooPackaging from './assets/images/bambooFood.jpg'
import bambooConstruction from './assets/images/bambooConstruction.jpg'
import bambooTextile from './assets/images/bambooTextile.jpg'
import bambooEnergy from './assets/images/bambooEnergy.jpg'
import bambooEnviorment from './assets/images/bambooEnvironment.jpg'

function App() {
  const [isFoodHovered, setIsFoodHovered] = useState(false);
  const [isPackageHovered, setIsPackageHovered] = useState(false);
  const [isConstructionHovered, setIsConstructionHovered] = useState(false);
  const [isTextTileHovered, setIsTextTileHovered] = useState(false);
  const [isEnergyHovered, setIsEnergyHovered] = useState(false);
  const [isEnvironemntHovered, setIsEnvironmentHovered] = useState(false);

  useEffect(() => {
    AOS.init({duration: 1000, once: true});
  }, [])

  return (
    <>
      {/* HEADER/BANNER */}
      <div className="flex flex-col md:space-y-10 space-y-6 px-4 md:px-10">
        <div
          className="flex flex-col items-center m-10"
          data-aos="fade-down"
        >

          <img
            src={bamboo}
            alt="bamboo banner"
            className="w-full max-w-[1400px] h-auto"
          />
          <p className="text-center text-2xl p-5">
            The Positive Impact Bamboo has on Infrastructure, Food, and Our World
          </p>
          <p className="text-center text-md p-5 font-bold">
            Hover over the images for fun facts!
          </p>
        </div>

        <div className="flex flex-col items-center m-10 space-y-10">

          {/* FOOD SECTION */}
          <div
            className="flex flex-col md:flex-row items-center w-full max-w-[1200px] m-4 md:m-10 space-y-4 md:space-y-0 md:space-x-6"
            data-aos="fade-right"
          >
            <div
              className="relative shrink-0"
              onMouseEnter={() => setIsFoodHovered(true)}
              onMouseLeave={() => setIsFoodHovered(false)}
            >
              <img
                src={bambooFood}
                alt="bamboo food"
                className={`h-[350px] w-[350px] rounded-md transition duration-300 ${isFoodHovered ? 'blur-lg bg-black' : ''
                  }`}
              />
              {isFoodHovered && (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4 pointer-none">
                  Fun Fact: Bamboo shoots have been on the menu for over 3,000 years in China—and they’re not just tasty! They were once believed to cool the body and aid digestion, making them an ancient “superfood".</div>
              )}
            </div>
            <div>
              <h1 className='text-3xl font-bold text-center pb-5'>Food</h1>
              <p className='text-center'>
                Bamboo shoots have been an important part of East Asian cuisine for thousands of years, with records in China dating back roughly 3,000 years. They are sweet, crisp, and rich in fiber and potassium, making them a nutritious addition to meals. Traditional beliefs held that bamboo shoots could aid digestion and provide a cooling effect, though these are cultural observations rather than scientifically proven health benefits. Bamboo shoots became staples in stir-fries, soups, and stews, valued for their texture and ability to absorb flavors. Over time, bamboo consumption spread throughout Asia—from Japan to India—and today, bamboo shoots are enjoyed in dishes worldwide for their taste and nutritional value.</p>
            </div>
          </div>

          {/* PACKAGE SECTION */}
          <div
            className="flex flex-col md:flex-row-reverse items-center w-full max-w-[1200px] m-4 md:m-10 space-y-4 md:space-y-0 md:space-x-6"
            data-aos="fade-left"
          >
            <div
              className="relative shrink-0"
              onMouseEnter={() => setIsPackageHovered(true)}
              onMouseLeave={() => setIsPackageHovered(false)}
            >
              <img
                src={bambooPackaging}
                alt="bamboo packaging"
                className={`h-[350px] w-[350px] rounded-md transition duration-300 ${isPackageHovered ? 'blur-lg' : ''
                  }`}
              />
              {isPackageHovered && (
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 pointer-events-none">
                  Fun Fact: Bamboo can grow up to 3 feet in a single day, making it one of the fastest-growing plants on Earth—and a super sustainable alternative to plastic!</div>
              )}
            </div>
            <div>
              <h1 className='text-3xl font-bold text-center pb-5'>Packaging</h1>
              <p>
                Bamboo has long been used in East Asia for packaging and transporting goods such as grains, food, and textiles, thanks to its strength, flexibility, and abundance. While plastic became the dominant packaging material in modern times, environmental concerns have renewed interest in bamboo. Today, modern processing techniques allow bamboo to be made into durable containers, cutlery, wraps, and compostable packaging that can help reduce single-use plastics. While still a niche market, bamboo packaging offers a sustainable alternative and highlights the plant’s versatility as a renewable resource.</p>
            </div>
          </div>

        </div>


        <div className="flex flex-col items-center m-10 space-y-10">

          {/* CONSTRUCTION SECTION */}
          <div
            className="flex flex-col md:flex-row items-center w-full max-w-[1200px] m-4 md:m-10 space-y-4 md:space-y-0 md:space-x-6"
            data-aos="fade-right"
          >
            <div
              className="relative shrink-0"
              onMouseEnter={() => setIsConstructionHovered(true)}
              onMouseLeave={() => setIsConstructionHovered(false)}
            >
              <img
                src={bambooConstruction}
                alt="bamboo construction"
                className={`h-[350px] w-[350px] rounded-md transition duration-300 ${isConstructionHovered ? 'blur-lg' : ''
                  }`}
              />
              {isConstructionHovered && (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4 pointer-none">
                  Fun Fact: Though it appears slender and lightweight, bamboo possesses remarkable strength and resilience, making it an ideal material for sustainable and durable construction!</div>
              )}
            </div>
            <div>
              <h1 className='text-3xl font-bold text-center pb-5'>Construction</h1>
              <p className='text-center'>
                Bamboo has been used as a building material for thousands of years. Although wood, brick, and concrete became more common in modern construction, bamboo is regaining attention due to its strength, sustainability, and versatility. Often called “green steel” for its impressive strength-to-weight ratio, bamboo can be used in houses, bridges, scaffolding, and architectural frameworks. Advances in engineering now allow it to be processed into laminated boards and structural composites suitable for flooring, wall panels, roofing, and prefabricated components. While bamboo may not replace traditional materials on a large scale, its rapid growth, low carbon footprint, and natural durability make it an increasingly attractive option in sustainable architecture and eco-friendly building projects.</p>
            </div>
          </div>

          {/* TEXTILE SECTION */}
          <div
            className="flex flex-col md:flex-row-reverse items-center w-full max-w-[1200px] m-4 md:m-10 space-y-4 md:space-y-0 md:space-x-6"
            data-aos="fade-left"
          >
            <div
              className="relative shrink-0"
              onMouseEnter={() => setIsTextTileHovered(true)}
              onMouseLeave={() => setIsTextTileHovered(false)}
            >
              <img
                src={bambooTextile}
                alt="bamboo texile"
                className={`h-[350px] w-[350px] rounded-md transition duration-300 ${isTextTileHovered ? 'blur-lg' : ''
                  }`}
              />
              {isTextTileHovered && (
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 pointer-events-none">
                  Fun Fact: Bamboo isn’t just for pandas—its fibers are naturally antibacterial, soft, and strong, which is why they’re used for everything from clothing and towels to eco-friendly toilet paper and chopsticks!</div>
              )}
            </div>
            <div>
              <h1 className='text-3xl font-bold text-center pb-5'>Textiles</h1>
              <p>
                Bamboo is a versatile material in textiles and household products. It can be processed into bamboo rayon, bamboo lyocell, or mechanically softened fibers, each offering softness, breathability, and natural antibacterial properties. These fibers are used in clothing, towels, sheets, socks, and reusable cloths. Bamboo is also used for eco-friendly toilet paper, which is biodegradable and requires fewer resources than traditional wood-pulp paper. Additionally, bamboo’s strength and light weight make it ideal for utensils such as chopsticks, which are popular across Asia and increasingly used worldwide as a sustainable alternative to plastic or hardwood. Note that some bamboo textiles, like bamboo rayon, require chemical processing, so the environmental impact depends on production methods.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center m-10 space-y-10">
          {/* ENERGY SECTION */}
          <div
            className="flex flex-col md:flex-row items-center w-full max-w-[1200px] m-4 md:m-10 space-y-4 md:space-y-0 md:space-x-6"
            data-aos="fade-up"
          >
            <div
              className="relative shrink-0"
              onMouseEnter={() => setIsEnergyHovered(true)}
              onMouseLeave={() => setIsEnergyHovered(false)}
            >
              <img
                src={bambooEnergy}
                alt="bamboo energy"
                className={`h-[350px] w-[550px] rounded-md transition duration-300 ${isEnergyHovered ? 'blur-lg bg-black' : ''
                  }`}
              />
              {isEnergyHovered && (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4 pointer-none">
                  Fun Fact: Bamboo can be converted into multiple types of renewable fuels—charcoal, pellets, briquettes, bioethanol, and biogas—making it a versatile, carbon-neutral alternative to fossil fuels.</div>
              )}
            </div>
            <div>
              <h1 className='text-3xl font-bold text-center pb-5'>Energy & The Future</h1>
              <p className='text-center'>
                Bamboo is a promising renewable energy source due to its rapid growth, high biomass yield, and ability to grow on marginal land. Traditionally used for cooking and heating, bamboo can now be converted into charcoal, pellets, briquettes, bioethanol, and biogas, providing cleaner alternatives to fossil fuels. While its high calorific value and fast regrowth are advantages, bamboo-based bioenergy is currently limited in scale. Nevertheless, in regions where it grows abundantly, bamboo has potential to support bioenergy production, carbon-neutral fuel systems, and rural electrification projects, contributing to more sustainable energy strategies.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center m-10 space-y-10">
          {/* ENVIRONMENT SECTION */}
          <div
            className="flex flex-col items-center w-full max-w-[1200px] m-4 md:m-10 space-y-4"
            data-aos="fade-up"
          >
            <div
              className="relative"
              onMouseEnter={() => setIsEnvironmentHovered(true)}
              onMouseLeave={() => setIsEnvironmentHovered(false)}
            >
              <img
                src={bambooEnviorment}
                alt="bamboo Environment"
                className={`w-full max-w-[1400px] rounded-md transition duration-300 ${isEnvironemntHovered ? 'blur-lg' : ''}`}
              />
              {isEnvironemntHovered && (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4 pointer-events-none">
                  Fun Fact: When bamboo is used as bioenergy instead of coal or wood, it can cut carbon emissions by up to 70%, making it a powerful tool in the fight against climate change.
                </div>
              )}
            </div>

            <div className="text-center">
              <h1 className="text-3xl font-bold pb-5">Environmental Impact of Bamboo Energy</h1>
              <p>
                Bamboo is a versatile and environmentally friendly energy option. Using bamboo for bioenergy can reduce reliance on fossil fuels, lower greenhouse gas emissions, and support carbon-neutral fuel systems. Bamboo plantations can thrive on marginal or degraded lands, potentially helping prevent deforestation and improve soil health. Additionally, bamboo cultivation can provide sustainable livelihoods for rural communities. However, careful management is needed to ensure biodiversity is preserved and ecosystems are not disrupted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
