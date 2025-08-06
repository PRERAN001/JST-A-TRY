"use client";
import React from "react";
import { ContainerScroll } from "./Scrollanimation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-black text-white min-h-screen">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                MACHINE LEARNING
              </span>
            </h1>
          </>
        }>
        <img
          src={`https://cdn.dribbble.com/userupload/13878402/file/original-c2d978d51282bc68112c26e0a492dd62.png?resize=1504x1128&vertical=center`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
