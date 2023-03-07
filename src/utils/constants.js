import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: `At Retro Shop, we're passionate about bringing retro technology to life for a new generation. Join us on a journey back in time!`,
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: `Rediscover retro technology! Join us for a fun and immersive experience that inspires a new generation to appreciate the joys of the past.`,
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: `Once upon a time, a group of retro-obsessed folks came together to create something special: Retro Shop! We've been on a mission to celebrate the joy of classic technology ever since. `,
  },
];

// export const products_url = 'https://course-api.com/react-store-products'
export const products_url = '/.netlify/functions/products';

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
export const single_product_url = '/.netlify/functions/single-product?id=';
