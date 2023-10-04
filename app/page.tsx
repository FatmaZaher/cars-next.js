import { CustomFilter, Hero, Searchbar } from "@/components";
import { fetchCars } from "@/utils";


export default async function Home() {

  const allCars = await fetchCars();
  console.log(allCars)
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="padding-x padding-y mt-12 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>
            Explore the cars you might like
          </p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filters-container">
            {/* <CustomFilter title="fuel"/>
            <CustomFilter title="year" /> */}
          </div>
        </div>
      </div>
    </main>
  )
}
