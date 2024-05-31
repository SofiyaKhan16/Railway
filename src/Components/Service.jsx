import React, { useState } from "react";
import design from "../assets/Design & assurance Services.png";
import DT from "../assets/Digital transformation.jpg"
import MC from "../assets/Management consultancy.jpg"
import CM from "../assets/Contract and Commercial management.jpg"
import PC from "../assets/Project Controls.jpg"
import FM from "../assets/Facilities Management.jpg"
import ServiceItem from "./ServiceItem";
import { Link } from "react-scroll";

const Service = () => {
  const [daimg, setDaimg] = useState(design );
  const [dtimg, setDtimg] = useState(DT );
  const [mcimg, setMcimg] = useState(MC);
  const [cmimg, setCmimg] = useState(CM);
  const [pcimg, setPcimg] = useState(PC );
  const [fmimg, setFmimg] = useState(FM );




  return (
    <div id="service" className="w-full h-full font-sans bg-blue-200 ">
      <div className="flex flex-col w-full h-full justify-center items-center ">
        <div className="flex h-[180px]  w-full gap-10 items-center justify-center bg-blue-950 flex-wrap ">
          <div>
            <Link to="1" smooth={true} duration={500}>
              <button className="bg-white w-40 border rounded-2xl mt-12 h-60 shadow-2xl">
                {" "}
                Design & assurance Service
              </button>
            </Link>
          </div>
          <div>
            <Link to="2" smooth={true} duration={500}>
              <button className="bg-white w-40 border rounded-2xl mt-12 h-60 shadow-2xl">
                {" "}
                Digital transformation{" "}
              </button>
            </Link>
          </div>
          <div>
            <Link to="3" smooth={true} duration={500}>
              <button className="bg-white w-40 border rounded-2xl mt-12 h-60 shadow-2xl">
                {" "}
                Management consultancy{" "}
              </button>
            </Link>
          </div>
          <div>
            <Link to="4" smooth={true} duration={500}>
              <button className="bg-white w-40  border rounded-2xl mt-12 h-60 shadow-2xl">
                {" "}
                Contract and Commercial management
              </button>
            </Link>
          </div>
          <div>
            <Link to="5" smooth={true} duration={500}>
              <button className="bg-white w-40   border rounded-2xl mt-12 h-60 shadow-2xl">
                {" "}
                Project Controls{" "}
              </button>
            </Link>
          </div>
          <div>
            <Link to="6" smooth={true} duration={500}>
              <button className="bg-white w-40  border rounded-2xl mt-12 h-60 shadow-2xl">
                {" "}
                Facilities Management{" "}
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full h-full mt-40">
          <div className="flex justify-center">
            <div className="w-[85%]">
              <h2 className="text-blue-950 w-full flex font-semibold text-[35px]">
                Our Services
              </h2>

              <div className="w-full flex flex-col gap-5 ">
                <ServiceItem
                  id="1"
                  offset={-100}
                  img={daimg}
                  index={1}
                  subject={`Design & assurance Service`}
                  description={`Design services for all rail modes including and not limited to 
                  Tracks (alignment, layout, plain line and switch and crossing, gauge clearance etc..) 
                  Signal and train control design (scheme development, construction design) Communication 
                  system design (Station Building and tracks). 
                  `}
                />
                <ServiceItem
                  id="2"
                  img={dtimg}
                  index={0}
                  offset={-100}
                  subject={`Digital transformation
                    `}
                  description={`Digital transformation in railways enhances efficiency, 
                  safety, and passenger experience through technologies like IoT, AI, 
                  and big data. Smart sensors monitor infrastructure, predictive maintenance 
                  reduces downtime, and real-time data optimizes operations. This shift drives 
                  sustainability and modernizes the industry, making rail travel more reliable and 
                  customer-centric.`}
                />
                <ServiceItem
                  id="3"
                  img={mcimg}
                  index={1}
                  offset={-100}
                  subject={`Management consultancy
                    `}
                  description={`Management consultancy in railways offers strategic guidance 
                  to enhance operational efficiency, safety, and customer satisfaction. Services 
                  include optimizing resource allocation, implementing advanced technologies, and 
                  streamlining processes. Consultants provide data-driven insights, support regulatory 
                  compliance, and drive sustainable growth, ensuring railways adapt to evolving market 
                  demands and industry challenges.`}
                />
                <ServiceItem
                  id="4"
                  img={cmimg}
                  index={0}
                  offset={-100}
                  subject={`Contract and Commercial management
                    `}
                  description={`Vaisnavirail proactive and agile measures 
                  have enabled us to provide setting up the correct contract 
                  and post contact proven methodologies to provide early advise 
                  on managing contract to avoid claims in as much as possible and 
                  manage them when they do occur.`}
                />
                <ServiceItem
                  id="5"
                  img={pcimg}
                  index={1}
                  offset={-100}
                  subject={`Project Controls
                    `}
                  description={`We have experts in railway systems, rolling stock, rail operations, asset management and infrastructure upgrade and renewal; many of whom have previously worked for infrastructure controllers, operators, 
                  manufacturers or contractors. We understand the vital need for robust systems integration and assurance and can address these.
                  We have extensive experience of providing a total project management service for all types of building, education, healthcare, transportation, power, defense, nuclear, oil and gas and water projects.`}
                />
                <ServiceItem
                  id="6"
                  img={fmimg}
                  index={0}
                  offset={-100}
                  subject={`Facilities Management
                    `}
                  description={`Facilities management in railways ensures efficient operation 
                  and maintenance of stations, tracks, and rolling stock. It includes asset management, 
                  safety protocols, and service quality improvement. By leveraging technology and best practices, 
                  facilities managers enhance passenger experience, minimize downtime, and maintain regulatory 
                  compliance, ensuring a reliable and safe railway system.`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
