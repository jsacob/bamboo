import AOS from "aos"
import "aos/dist/aos.css";
import {useState, useEffect} from 'react';

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
    AOS.init({duration: 2000, once: true});
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
                className={`h-[350px] w-[350px] rounded-md transition duration-300 ${isFoodHovered ? 'blur-lg' : ''
                  }`}
              />
              {isFoodHovered && (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-4 pointer-none">
                  Fun Fact: Bamboo shoots have been on the menu for over 3,000 years in China and they’re not just tasty! They were once believed to cool the body and aid digestion, making them an ancient “superfood".</div>
              )}
            </div>
            <div>
              <h1 className='text-3xl font-bold text-center pb-5'>Food</h1>
              <p className='text-center'>
                Bamboo shoots (young bamboo sprouts) have been a vital ingredient in traditional dishes among East Asians for around 3,000 years. The shoots are known to be sweet, crisp, and easily accessible, making them the perfect snack for ancient East Asians. This plant is rich in fiber and potassium, making it a nutritious addition to traditional meals. In Chinese culture, it is believed that eating bamboo shoots can aid digestion issues, cool down the body on hot days or during a fever, and can help clear someone’s asthma. With all the benefits, bamboo shoots have become a staple ingredient in Asian dishes. These include stir-fries, soups, and stews. The bamboo shoots are valued for their texture and their ability to absorb flavors. Today bamboo shoots are enjoyed and eaten worldwide.
              </p>
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
                Bamboo has been used as packaging in East Asia for thousands of years. Since bamboo grows so fast and has incredible strength and flexibility, it was the perfect material to weave baskets out of, using those to transport goods such as grains, food, and textiles. In the modern world, plastic became the new go-to for packaging, dominating the world. Environmental concerns grew about plastic since it takes up to 1,000 years to decompose after its single use. This brought bamboo back into the picture as an alternative. Modern technology allows bamboo to be made into durable containers, cutlery, wraps, and compostable packaging that can help reduce single-use plastics. And it’s all biodegradable!
              </p>
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
                When you think of building a house, your mind probably first wanders to building materials like wood, bricks, and concrete. Most homes in the United States are made from these sturdy materials, but each of these goods is expensive, inflexible, and not environmentally friendly. Here’s where bamboo comes in. Known as “green steel,” bamboo is an impressive building material. It’s strong, being known for its incredible strength-to-weight ratio, sustainable since it grows so quickly, and versatile, being used for houses, bridges, scaffolding, and architectural frameworks. Bamboo is quick to the race in sustainable architecture.
              </p>
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
                  Fun Fact: Bamboo isn’t just for pandas its fibers are naturally antibacterial, soft, and strong, which is why they’re used for everything from clothing and towels to eco-friendly toilet paper and chopsticks!</div>
              )}
            </div>
            <div>
              <h1 className='text-3xl font-bold text-center pb-5'>Textiles</h1>
              <p>
                Textiles are one of the leading products in landfills. As humans we run through paper, clothes, and toothbrushes like crazy, which are all mostly made from non-sustainable material. That’s where bamboo comes in. Bamboo is a versatile material that can be used in textiles and household products. Bamboo rayon, lyocell, or mechanically softened fibers can be used in clothing, towels, sheets, socks, and reusable cloths known to have antibacterial and natural properties. Bamboo can be made into eco-friendly toilet paper and paper. It can also be used for chopsticks, toothbrushes, and hairbrushes. It being lightweight and strong make it the perfect material for utensils.
              </p>
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
                Bamboo is a promising renewable energy source due to its rapid growth, high biomass yield, and ability to grow almost anywhere. Bamboo is traditionally known as a cooking and heating source, but with modern technology now can have many more uses, including being converted into charcoal, bioethanol, and biogas, providing cleaner alternatives to fossil fuels. Right now all these alternatives are limited in scale since there aren’t many energy companies using this alternative to make a cleaner and sustainable future. Nevertheless, in regions where it grows abundantly, bamboo has potential to support bioenergy production, carbon-neutral fuel systems, and rural electrification projects, contributing to more sustainable energy strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Work Cited Page</h1>

        <div className="space-y-4 text-lg">

          <div>
            <p className="font-semibold">“Bamboo as a Renewable Energy Source.”</p>
            <a
              href="https://www.greencitytimes.com/bamboo-as-a-renewable-energy-source/"
              className="text-blue-600 hover:underline break-all"
            >
              www.greencitytimes.com/bamboo-as-a-renewable-energy-source/
            </a>
          </div>

          <div>
            <p className="font-semibold">“Building with Bamboo: A Sustainable Solution for the Future.”</p>
            <a
              href="https://www.ice.org.uk/news-views-insights/inside-infrastructure/building-with-bamboo"
              className="text-blue-600 hover:underline break-all"
            >
              www.ice.org.uk/news-views-insights/inside-infrastructure/building-with-bamboo
            </a>
            <p className="text-sm text-gray-600">Institution of Civil Engineers, 17 Apr. 2025</p>
          </div>

          <div>
            <p className="font-semibold">Japan’s Bamboo Shoots: Dishes, History & Symbolism.</p>
            <a
              href="https://sakura.co/blog/bamboo-shoots-as-seasonal-food-in-japan"
              className="text-blue-600 hover:underline break-all"
            >
              sakura.co/blog/bamboo-shoots-as-seasonal-food-in-japan
            </a>
            <p className="text-sm text-gray-600">Sakuraco, 11 Feb. 2022</p>
          </div>

          <div>
            <p className="font-semibold">
              Liang, Zhiwei, et al. “Potential Use of Bamboo Resources in Energy Value-Added Conversion Technology and Energy Systems.”
            </p>
            <p className="italic">GCB Bioenergy, vol. 15, no. 8, 2023</p>
            <a
              href="https://doi.org/10.1111/gcbb.13072"
              className="text-blue-600 hover:underline break-all"
            >
              doi:10.1111/gcbb.13072
            </a>
          </div>

          <div>
            <p className="font-semibold">“The Many Bamboo Uses Throughout History to Today.”</p>
            <a
              href="https://amazuluinc.com/the-many-bamboo-uses-throughout-history-to-today"
              className="text-blue-600 hover:underline break-all"
            >
              amazuluinc.com/the-many-bamboo-uses-throughout-history-to-today/
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
export default App;
