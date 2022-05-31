import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Button from '../components/Button';


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
              <Button variant="outline-yellow">Kontak</Button>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl text-white font-semibold font-mono w-8/12 mx-auto">
              Saya seorang front-end engineer, rpa engineer, wordpress engineer dan juga seo engineer
            </h1>
            <p className="text-white text-opacity-60 text-lg w-4/12 mx-auto mt-6">
              Saya juga suka hiking, futsal, swimming, basket dan bermain game.
            </p>
            <Button variant="yellow">Pelajari</Button>
          </div>
        </div>
      </div>
    </>
    
  )
}
