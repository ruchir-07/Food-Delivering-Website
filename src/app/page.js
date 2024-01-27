import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={'Our Story'} mainHeader={'About Us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae quam, minus adipisci porro eveniet itaque ullam nihil sequi mollitia dolorem voluptates ratione quo esse repellendus.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis accusantium enim ea voluptate at culpa quam velit blanditiis nemo expedita quia, laudantium sunt quos odio molestiae suscipit eius ex a ipsum ad delectus labore!.</p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeaders subHeader={'Dont hesitate'} mainHeader={'Contact Us'} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+911234567890">
            +91 123 456 7890
          </a>
        </div>
      </section>
    </>
  );
}
