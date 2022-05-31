import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Button from '../components/Button';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className="bg-blue-500 ">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-3/12 ">
              <Logo/>
            </div>
            <div className="w-6/12">
              <Nav/>
            </div>
            <div className="w-3/12 text-right">
              <Button>Kontak</Button>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl text-white font-semibold font-mono">
              Saya seorang front-end engineer, rpa engineer, dan juga seo engineer
            </h1>
            <p className="text-white text-opacity-60 text-lg">
              Saya juga suka hiking, futsal, dan bermain game.
            </p>
          </div>
        </div>
      </div>
    </>
    
  )
}
