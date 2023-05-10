import { useEffect, useState } from "react";
import { createClient } from "pexels";
import axios from "axios";

function App() {
  const [imageBackground, setImageBackground] = useState("");

  async function imagePetition() {
    const url = "https://api.unsplash.com/search/photos";
    const cliend_id = "0yO8AiOal00NQ55cWOp8oDiCgTv1oa0zujfkjcn1Xwk";
    axios
      .get(`${url}?query=Miami&client_id=${cliend_id}`)
      .then((response) =>
        setImageBackground(response.data.results[0].urls.full)
      );
  }

  async function phrasePetition() {
    const url =
      "https://api.opentripmap.com/0.1/en/places/geoname?name=Paris&apikey=5ae2e3f221c38a28845f05b6369f568e2e62e362db1bdbbc0f9dbe8c";

    axios.get(`${url}`).then((response) => console.log(response));
  }

  useEffect(() => {
    /* imagePetition(); */
    phrasePetition();
  }, []);

  console.log(imageBackground);

  return (
    <>
      {imageBackground !== "" ? (
        <>
          <img
            className="absolute w-screen z-10  h-screen object-cover position-center"
            src={imageBackground}
          ></img>
          <main
            className={`w-screen flex items-center justify-center h-screen absolute bg-black/[.8] font-['Montserrat'] text-white z-20`}
          >
            <div className="container">
              <p className="">
                Frase de la ciudad Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Provident labore corrupti voluptas quis
                laudantium maxime, esse nulla, sit quas reiciendis, modi non
                eveniet fugiat dignissimos a natus veritatis? Qui, placeat!
              </p>
              <div>
                <p className="flex gap-3 items-center">
                  {" "}
                  <svg
                    width="24px"
                    height="24px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#f3f3f3"
                  >
                    <path
                      d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1"
                      stroke="#f3f3f3"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  Good morning its currently
                </p>
                <p>
                  {" "}
                  <span className="text-8xl font-bold ">11:37 </span> BST
                </p>
                <p>IN LONDON, UK</p>
              </div>
            </div>
            {/* <section>
            <div>
            <p>Current timezone</p>
              <span>Europe / London</span>
            </div>
            <div>
              <p>Day of the week</p>
              <span>5</span>
            </div>
            <div>
              <p>Day of the year</p>
              <span>Europe / London</span>
            </div>
            <div>
              <p>Current timezone</p>
              <span>Europe / London</span>
            </div>
          </section> */}
          </main>
        </>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default App;
