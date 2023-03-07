import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpg';
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Welcome to Retro Shop, the ultimate destination for all things
            retro! Our mission is to bring back some of the coolest and
            quirkiest gadgets from the past and celebrate the nostalgia they
            evoke. At Retro Shop, we believe that the gadgets of yesteryear had
            a certain character and charm that modern technology often lacks.
            That's why we've curated a collection of unique and vintage gadgets
            that will transport you back in time. From retro gaming consoles to
            classic cameras, we've got it all. Our collection is carefully
            sourced from thrift stores and online marketplaces, ensuring that
            each item is one-of-a-kind. We pride ourselves on our satirical take
            on the past, which adds a playful twist to the nostalgia. But Retro
            Shop isn't just an ecommerce site - it's a journey through time. We
            want to help you relive the excitement of the past and rediscover
            the quirks and charms of retro technology. Our collection is perfect
            for die-hard vintage enthusiasts and anyone who loves a unique find.
            So come explore Retro Shop and discover the gadgets that made the
            past so memorable. Join us on our mission to celebrate the past and
            bring back the character and charm of retro technology.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
