import React from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../components';
import ProjectOverview from '../components/ProjectOverview';
const HomePage = () => {
  return (
    <main>
      <ProjectOverview />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
