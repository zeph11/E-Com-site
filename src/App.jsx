import {
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  CustomerReviews,
} from "./sections";

const App = () => (
  <main className=" relative">
    Navbar
    <section className=" xl:p-1 wide:sm:pr-10 pr-8 wide:sm:pt-24 pt-12">
      <Hero />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <PopularProducts />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SuperQuality />
    </section>
    <section className="sm:px-16 px-8 ">
      <Services />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue sm:px-16 px-8 sm:py-24 py-12">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8 ">
      <Footer />
    </section>
  </main>
);

export default App;
