import React, { useState } from "react";
import "./index.css";
const App = () => {
  const [width, setWidth] = useState("0%");
  const open = () => {
    setWidth("100%");
  };
  const close = () => {
    setWidth("0%");
  };
  return (
    <div className="div">
      <div className="div_wrapper">
        <div className="section1">
          <div className="section1_wrapper flex flex-wrap-reverse md:flex lg:flex">
            <div className="div1 xl:flex lg:flex md:flex hidden   lg:w-1/3 md:w-1/3 w-full">
              <div className="div1_wrapper flex  left-8 absolute bottom-4 justify-center">
                <span className="div1_wrapper_span1">
                  #01 AMERICAN BUILDING
                </span>
              </div>
            </div>
            <div className="div2 xl:flex lg:flex md:flex hidden   lg:w-1/3 md:w-1/3 w-full">
              <div className="div1_wrapper flex  left-8 absolute bottom-4 justify-center">
                <span className="div1_wrapper_span1">
                  #02 AMERICAN BUILDING
                </span>
              </div>
              <div className="div2_wrapper  ">
                <span className="div2_wrapper_span2 xl:flex lg:flex md:flex hidden">
                  [Tough]
                </span>
              </div>
            </div>
            <div className="div3  lg:w-1/3 md:w-1/3 w-full">
              <div className="div1_wrapper flex  left-8 absolute bottom-4 justify-center">
                <span className="div1_wrapper_span1">
                  #03 AMERICAN BUILDING
                </span>
              </div>
              <div className="div3_wrapper">
                <span className="div3_wrapper_span3">
                  <i
                    className="fa fa-bars"
                    aria-hidden="true"
                    onClick={() => open()}
                  ></i>
                </span>
                <div id="myNav" className="overlay" style={{ width: width }}>
                  <a
                    href="javascript:void(0)"
                    className="closebtn"
                    onClick={() => close()}
                  >
                    &times;
                  </a>
                  <div className="overlay-content flex lg:text-4xl xl:text-4xl md:text-2xl text-xl flex-col justify-center items-center">
                    <a href="/#">About</a>
                    <a href="/#">Services</a>
                    <a href="/#">Clients</a>
                    <a href="/#">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="section2_wrapper items-center flex xl:flex-row lg:flex-row md:flex-row flex-col">
            <div className="left flex-1">
              <div className="left_wrapper flex p-24 flex-wrap gap-8 lg:gap-24 ">
                <div className="flex flex-col gap-4 ">
                  <span className="text-4xl font-light">800</span>
                  <span>FINISHED PROJECTS</span>
                </div>
                <div className="flex flex-col gap-4 ">
                  <span className="text-4xl font-light">795</span>
                  <span>HAPPY CUSTOMERS</span>
                </div>
                <div className="flex flex-col gap-4 ">
                  <span className="text-4xl font-light">1,200</span>
                  <span>WORKING HOURS</span>
                </div>
                <div className="flex flex-col gap-4 ">
                  <span className="text-4xl font-light">850</span>
                  <span>CUPS OF COFFEE</span>
                </div>
              </div>
            </div>
            <div className="right flex-1">
              <div className="right_wrapper relative">
                <img
                  src="https://images.unsplash.com/photo-1554435493-93422e8220c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
                  alt=""
                />
                <button className="right_wrapper_button lg:text-2xl xl:text-2xl md:text-xl text-sm absolute top-44 left-12 md:left-24 lg:left-32 bg-white p-4 hover:bg-transparent border ">
                  Explore Furthure
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="section3 mt-4">
          <div className="section3_wrapper gap-4   flex lg:flex-row xl:flex-row md:flex-row flex-col">
            <div className="left_section3 text-white bg-slate-700 flex-1">
              <div className="left_section3_wrapper xl:pb-32 md:pb-32 pb-8 lg:pb-32 flex flex-col gap-14 pt-8 pl-44">
                <span className=" xl:text-4xl md:text-4xl text-2xl lg:text-4xl">
                  Services
                </span>
                <ul className="flex flex-col gap-5">
                  <li className="flex lg:text-2xl xl:text-2xl md:text-2xl text-sm li items-center gap-5  cursor-pointer">
                    <i class="fa fa-won" aria-hidden="true"></i> INTERIOR
                  </li>
                  <li className="flex lg:text-2xl xl:text-2xl md:text-2xl text-sm cursor-pointer li items-center gap-5 ">
                    <i class="fa fa-connectdevelop" aria-hidden="true"></i>{" "}
                    CONCEPT
                  </li>
                  <li className="flex lg:text-2xl xl:text-2xl md:text-2xl text-sm cursor-pointer li items-center gap-5 ">
                    <i class="fa fa-home" aria-hidden="true"></i> RESIDENTIAL
                  </li>
                  <li className="flex lg:text-2xl xl:text-2xl md:text-2xl text-sm cursor-pointer li items-center gap-5 ">
                    <i class="fa fa-hospital-o" aria-hidden="true"></i>
                    HOSPITAILITY
                  </li>
                </ul>
              </div>
            </div>
            <div className="right_section3 flex-1">
              <div className="right_section3_wrapper flex-wrap flex flex-col pr-14 pl-14 pt-14 gap-6">
                <span className="lg:text-2xl xl:text-2xl md:text-2xl text-4xl">
                  <i class="fa fa-industry" aria-hidden="true"></i>
                </span>
                <span className="lg:text-2xl xl:text-2xl md:text-2xl text-2xl">
                  Interior Design
                </span>
                <span className="text-sm flex flex-wrap">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo repudiandae laudantium ratione! Labore iusto dolor
                  dolore dignissimos similique beatae. Corrupti.
                </span>
                <button className="bg-slate-700 w-36 text-white text-xl hover:bg-transparent border hover:text-black p-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="section4 w-full">
          <div className="section4_wrapper flex items-end justify-end">
            <div className="section4_div xl:w-1/2 lg:w-1/2 md:w-1/2 w-full pt-24 pb-24 p-8">
              <div className="xl:flex-row lg:flex-row md:flex-row flex-col gap-4 div_wrapper_section4 flex justify-between items-center">
                <span className=" xl:text-4xl lg:text-4xl md:text-3xl text-xl ">
                  Get Started
                </span>
                <span className="xl:text-3xl lg:text-3xl md:text-3xl text-xl bg-white p-4 cursor-pointer border">
                  Request a quote
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section5">
          <div className="section5_wrapper flex p-12 xl:flex-nowrap lg:flex-nowrap flex-wrap md:flex-nowrap pt-24 gap-2">
            <div className="left">
              <div className="left_section5_wrapper flex flex-col gap-4 p-14">
                <div className="div12 flex flex-col gap-4 ">
                  <span className="xl:text-4xl lg:text-4xl md:text-4xl text-2xl">
                    PORTFOLIO
                  </span>
                  <span className="xl:text-2xl lg:text-2xl md:text-2xl text-xl font-light">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </span>
                </div>
                <div className="div21">
                  <div className="div21_wrapper">
                    <img
                      className="img21"
                      src="https://images.unsplash.com/photo-1600596525163-36b26caa9c89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=483&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <div className="div31">
                  <img
                    className="img21"
                    src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                    alt=""
                  />
                </div>
                <div className="div41">
                  <img
                    className="img21"
                    src="https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="right_section5_wrapper flex flex-col gap-4 p-8">
                <div>
                  <img
                    className="img21"
                    src="https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img21"
                    src="https://images.unsplash.com/photo-1550136513-548af4445338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img21"
                    src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img21"
                    src="https://images.unsplash.com/photo-1591076787947-aaa4dec435d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section6">
          <div className="section6_wrapper gap-4 flex p-8 xl:flex-row lg:flex-row  flex-col ">
            <div className="flex-1 bg-slate-700 text-white flex flex-col gap-12 p-4 pl-32">
              <span className="xl:text-4xl lg:text-4xl md:text-3xl text-2xl">
                CLIENTS SAYS
              </span>
              <span className=" text-xl ">
                Far far away, behind the word mountains, far from the countries
                Vokalia
              </span>
            </div>

            <div className="flex-1 flex flex-col gap-14 border p-8 items-center  ">
              <div className="">
                <img
                  className="h-32  rounded-full w-32"
                  src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
              <span className="font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam obcaecati porro Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ducimus, ullam? dolorem harum dolores.
              </span>
              <span className="text-xl text-green-400">Dennis Green</span>
              <span className="font-light">Customer</span>
            </div>
            <div className="flex-1 flex flex-col gap-14 border p-8 items-center  ">
              <div className="">
                <img
                  className="h-32  rounded-full w-32"
                  src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
              <span className="font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam obcaecati porro Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ducimus, ullam? dolorem harum dolores.
              </span>
              <span className="text-xl text-green-400">Dennis Green</span>
              <span className="font-light">Customer</span>
            </div>
          </div>
        </div>
        <div className="section7 bg-slate-50">
          <div className="section7_wrapper flex gap-8 xl:flex-row lg:flex-row flex-col items-center flex-wrap p-14">
            <div className="div7 bg-white border gap-8 p-7 flex-1 flex flex-col items-center">
              <span className="text-7xl text-green-500">
                <i class="fa fa-building" aria-hidden="true"></i>
              </span>
              <span className="text-3xl">Basic Plan</span>
              <span className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                hic possimus, dolores eveniet sed delectus nesciunt deserunt
                ratione totam adipisci!
              </span>
              <div>
                <span className="text-3xl text-slate-500">$29</span>{" "}
                <span>per month</span>
              </div>
              <span className="bg-slate-500 p-4 border hover:bg-white cursor-pointer hover:text-black text-white text-2xl">
                Get Started
              </span>
              <span className="text-green-500">Open Source</span>
            </div>
            <div className="div7 border bg-white gap-8 p-7 flex-1 flex flex-col items-center">
              <span className="text-7xl text-green-500">
                <i class="fa fa-building" aria-hidden="true"></i>
              </span>
              <span className="text-3xl">Basic Plan</span>
              <span className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                hic possimus, dolores eveniet sed delectus nesciunt deserunt
                ratione totam adipisci!
              </span>
              <div>
                <span className="text-3xl text-slate-500">$29</span>{" "}
                <span>per month</span>
              </div>
              <span className="bg-slate-500 p-4 border hover:bg-white cursor-pointer hover:text-black text-white text-2xl">
                Get Started
              </span>
              <span className="text-green-500">Open Source</span>
            </div>
            <div className="div7 bg-white border gap-8 p-7 flex-1 flex flex-col items-center">
              <span className="text-7xl text-green-500">
                <i class="fa fa-building" aria-hidden="true"></i>
              </span>
              <span className="text-3xl">Basic Plan</span>
              <span className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                hic possimus, dolores eveniet sed delectus nesciunt deserunt
                ratione totam adipisci!
              </span>
              <div>
                <span className="text-3xl text-slate-500">$29</span>{" "}
                <span>per month</span>
              </div>
              <span className="bg-slate-500 p-4 border hover:bg-white cursor-pointer hover:text-black text-white text-2xl">
                Get Started
              </span>
              <span className="text-green-500">Open Source</span>
            </div>
          </div>
        </div>
        <div className="section8 bg-slate-700 text-white p-12">
          <div className="section8_wrapper flex flex-col items-center gap-4">
            <ul className="flex gap-8 text-3xl">
              <li className="bg-slate-600  rounded-full h-14 w-14 cursor-pointer text-slate-300 hover:text-white flex items-center justify-center">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </li>
              <li className="bg-slate-600  rounded-full h-14 w-14 cursor-pointer text-slate-300 hover:text-white flex items-center justify-center">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </li>
              <li className="bg-slate-600  rounded-full h-14 w-14 cursor-pointer text-slate-300 hover:text-white flex items-center justify-center">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </li>
            </ul>
            <span>CONTACT US</span>
            <span>info@email.com</span>
            <span>
              Copyright ©2023 All rights reserved | This template is made with
              by Colorlib
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
