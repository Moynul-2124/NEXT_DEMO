
import Image from "next/image";
import Hero from "./HomeCompo/FIxed/Hero";
import Card from "./HomeCompo/Shared/Card";
import Title from "./Componenets/Fixed/Title";
import Hero1 from "./HomeCompo/FIxed/Hero1";
import Cloth from "./HomeCompo/Shared/Cloth";
import Feature from "./HomeCompo/Shared/Feature";
import DemoOe from "./HomeCompo/FIxed/DemoOe";
import Blog from "./HomeCompo/Shared/Blog";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black">


      <div>


        <div>


          <Hero></Hero>
          <Card></Card>

          <div className="flex  items-end justify-between container mx-auto py-8">

            <Title gudu="Day Of The Deal" vudu="Don't wait. The time will never be just right"></Title>
            <div>


              {/* For TSX uncomment the commented types below */}
              <span className="countdown font-mono text-2xl">
                <span style={{ "--value": 10 } /* as React.CSSProperties */} aria-live="polite" >10</span>h
                <span style={{ "--value": 24 } /* as React.CSSProperties */} aria-live="polite" >24</span>m
                <span style={{ "--value": 59 } /* as React.CSSProperties */} aria-live="polite" >59</span>s
              </span>


            </div>


          </div>


          <Card></Card>
          <Hero></Hero>



          <div className="flex  items-end justify-between container mx-auto py-8">

            <Title gudu="Day Of The Deal" vudu="Don't wait. The time will never be just right"></Title>
            <div>


              <div className='flex items-center '>


                <p>Help ?</p>
                <p className='translate-x-5'>Track Order ?</p>
                <div>

                  <div className="navbar translate-x-5">

                    <div className="flex-none">
                      <ul className="menu menu-horizontal ">

                        <li>
                          <details>
                            <summary>English</summary>
                            <ul className=" bg-white rounded-t-none ">
                              <li><a>English</a></li>
                              <li><a>Italiano</a></li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>




                <div>

                  <div className="navbar translate-x--3  ">

                    <div className="flex-none">
                      <ul className="menu menu-horizontal  ">

                        <li>
                          <details    >
                            <summary>English</summary>
                            <ul className=" bg-white rounded-t-none ">
                              <li><a>English</a></li>
                              <li><a>Italiano</a></li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

              </div>


            </div>


          </div>





          <div className="flex flex-col gap-8">




            <Card></Card>
            <Card></Card>










          </div>





          <Cloth></Cloth>


          <Feature></Feature>





          <Title gudu="All But NOthing Less then Death"></Title>


          <DemoOe></DemoOe>




          <div className="flex  items-end justify-between container mx-auto py-8">

            <Title gudu="Day Of The Deal" vudu="Don't wait. The time will never be just right"></Title>
            <div>


              <div className='flex items-center '>


                <p>Help ?</p>
                <p className='translate-x-5'>Track Order ?</p>
                <div>

                  <div className="navbar translate-x-5">

                    <div className="flex-none">
                      <ul className="menu menu-horizontal ">

                        <li>
                          <details>
                            <summary>English</summary>
                            <ul className=" bg-white rounded-t-none ">
                              <li><a>English</a></li>
                              <li><a>Italiano</a></li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>




                <div>

                  <div className="navbar translate-x--3  ">

                    <div className="flex-none">
                      <ul className="menu menu-horizontal  ">

                        <li>
                          <details    >
                            <summary>English</summary>
                            <ul className=" bg-white rounded-t-none ">
                              <li><a>English</a></li>
                              <li><a>Italiano</a></li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

              </div>


            </div>


          </div>


          <Blog></Blog>




        </div>



      </div>


    </div>
  );
}
