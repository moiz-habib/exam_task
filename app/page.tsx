import { InfoCard } from "@/components/infoCard";
import { InputForm } from "@/components/inputForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React from "react";

const Home = () => {
  return (
    <main className="h-full bg-yellow-200">
      <div className="flex flex-col justify-center items-center gap-y-[50px]">
        <div className="grid grid-cols-3 grid-rows-1 gap-[50px] mt-5">
          <div className="flex flex-col justify-center items-center border border-black bg-green-200 w-[300px] h-[150px] rounded-lg">
            <div>Lorem, ipsum.</div>
            <div className="text-6xl">03</div>
          </div>
          <div className="flex flex-col justify-center items-center border border-black bg-red-200 w-[300px] h-[150px] rounded-lg">
            <div>Lorem, ipsum.</div>
            <div className="text-6xl">11</div>
          </div>
          <div className="flex flex-col justify-center items-center border border-black bg-orange-200 w-[300px] h-[150px] rounded-lg">
            <div>Lorem, ipsum.</div>
            <div className="text-6xl">52</div>
          </div>
        </div>
        <div>
          <InputForm></InputForm>
        </div>
        <div className="flex flex-col gap-5">
          <InfoCard></InfoCard>
        </div>
      </div>
    </main>
  );
};

export default Home;
