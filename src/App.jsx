import AOS from "aos"
import "aos/dist/aos.css";
import {useState, useEffect} from 'react';

import './App.css'
import bamboo from './assets/images/bambooHeader.jpg'
import bambooFood from './assets/images/bambooPackaging.jpg'
import bambooPackaging from './assets/images/bambooFood.jpg'
import bambooConstruction from './assets/images/bambooConstruction.jpg'
import bambooTextile from './assets/images/bambooTextile.jpg'

function App() {
  const [isFoodHovered, setIsFoodHovered] = useState(false);
  const [isPackageHovered, setIsPackageHovered] = useState(false);
  const [isConstructionHovered, setIsConstructionHovered] = useState(false);
  const [isTextTileHovered, setIsTextTileHovered] = useState(false);
  const [isEnergyHovered, setIsEnergyHovered] = useState(false);

  useEffect(() => {
    AOS.init({duration: 1000, once: true});
  }, [])

  return (
    <>
      {/* HEADER/BANNER */}
      <div
        className="flex flex-col items-center m-10"
        data-aos="fade-down"
      >

        <img src={bamboo} alt="bamboo banner" className="h-[600px]" />
        <p className="text-center w-[1200px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className="flex flex-col items-center m-10 space-y-10">

        {/* FOOD SECTION */}
        <div
          className="flex items-center space-x-6 w-full max-w-[1200px] m-10"
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
              Bamboo is widely regarded as a cultural food, particularly among East Asians. But how far back does this cultural tradition go? Its earliest recorded use as part of a meal dates to roughly 3,000 years ago in China. Because bamboo shoots (young sprouts) are sweet, crisp, and rich in fiber and potassium, they were considered an ideal food for providing energy. The Chinese also believed that eating bamboo shoots could help cool the body, clear asthma, and aid digestion.
              As bamboo became a staple in East Asian diets, its use continued to grow over the centuries. It remained a common ingredient in new dishes, eventually being added to stir-fries, soups, and stews—foods now recognized as traditional Asian dishes. Bamboo shoots are valued not only for their crisp texture but also for their ability to absorb flavors from other ingredients. Over time, bamboo consumption spread across Asia, becoming an important ingredient in cuisines from Japan to India.
              Today, bamboo shoots appear in dishes around the world and are appreciated for their nutritional value.
            </p>
          </div>
        </div>

        {/* PACKAGE SECTION */}
        <div
          className="flex items-center space-x-6 flex-row-reverse w-full max-w-[1200px] m-10"
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
              As of 2025, most companies have been on a mission to replace plastic packaging with more sustainable alternatives, and one of these alternatives is bamboo. For centuries, bamboo has been used by East Asian communities for packaging. Its strength, flexibility, and abundance made it an essential natural resource. Bamboo was traditionally used to transport goods such as grains, food, and textiles.
              When plastic was invented, it became the dominant packaging material. However, as people have realized its environmental impact, there has been a renewed interest in bamboo. Modern technologies now allow bamboo to be processed into durable containers, cutlery, wraps, and even compostable food packaging that can replace single-use plastics. Today, bamboo remains valued not only for its traditional uses but also for its role in promoting sustainable packaging solutions worldwide.
            </p>
          </div>
        </div>

      </div>


      <div className="flex flex-col items-center m-10 space-y-10">

        {/* CONSTRUCTION SECTION */}
        <div
          className="flex items-center space-x-6 w-full max-w-[1200px] m-10"
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
                Fun Fact: Though it appears slender and lightweight, bamboo possesses remarkable strength and resilience, making it an ideal material for sustainable and durable construction</div>
            )}
          </div>
          <div>
            <h1 className='text-3xl font-bold text-center pb-5'>Construction</h1>
            <p className='text-center'>
              Bamboo has been used as a building material for thousands of years. However, in more modern times, with the rise of wood, brick, and concrete, bamboo gradually fell out of the spotlight. Now, as we recognize that wood cannot be mass-produced to meet growing demand, concrete has significant environmental drawbacks, and brick is less sustainable, bamboo has regained popularity. It has earned renewed recognition for its strength, sustainability, and versatility.
              Often referred to as “green steel,” bamboo has an impressive strength-to-weight ratio, making it suitable for constructing houses, bridges, scaffolding, and architectural frameworks. Advances in engineering now allow bamboo to be processed into laminated boards and structural composites that rival traditional wood and even some metals. These engineered bamboo materials are used in flooring, wall panels, roofing, and prefabricated building components.
              As concerns about climate change and deforestation grow, architects and builders increasingly turn to bamboo for its rapid regrowth, low carbon footprint, and natural durability. Today, modern bamboo construction combines traditional craftsmanship with cutting-edge technology, establishing bamboo as a key material in sustainable architecture worldwide.
            </p>
          </div>
        </div>

        {/* TEXTILE SECTION */}
        <div
          className="flex items-center space-x-6 flex-row-reverse w-full max-w-[1200px] m-10"
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
                Fun Fact: Bamboo can grow up to 3 feet in a single day, making it one of the fastest-growing plants on Earth—and a super sustainable alternative to plastic!</div>
            )}
          </div>
          <div>
            <h1 className='text-3xl font-bold text-center pb-5'>Textiles</h1>
            <p>
              Bamboo has become a versatile material in the textile and household-goods industries, offering a wide range of sustainable products. Modern bamboo textiles include bamboo rayon, bamboo lyocell, and mechanically processed bamboo fiber—each known for being soft, breathable, and naturally antibacterial. These fabrics are used to make clothing, towels, sheets, socks, and reusable cloths, all valued for their comfort and durability.
              Beyond textiles, bamboo fibers are also processed into eco-friendly toilet paper, which is strong, gentle, and biodegradable, while requiring far fewer resources than traditional wood-pulp paper. Bamboo’s strength and light weight also make it ideal for crafting everyday utensils, particularly chopsticks. Whether disposable or reusable, bamboo chopsticks are widely used across Asia and are increasingly popular worldwide as an environmentally conscious alternative to plastic or hardwood.
              Together, bamboo textiles, toilet paper, and chopsticks demonstrate the plant’s remarkable adaptability and its growing importance in sustainable living.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
