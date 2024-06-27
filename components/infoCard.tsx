"use client";

import React, { useEffect, useState } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { MdDeleteOutline } from "react-icons/md";
import { GetLorem } from "@/Actions/getLorem";
import { DeleteLorem } from "@/Actions/deleteLorem";

export const InfoCard = () => {

  const [cardInfo, setCardInfo] = useState<any>();

  useEffect(() => {
    GetLorem()
      .then((data) => {
        setCardInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cardInfo]);

  return (
    <div className="flex flex-col gap-6">
      {cardInfo?.map((cardInfo: any) => (
        <Card
          key={cardInfo.id}
          className="flex justify-between items-center p-6 w-[1000px]"
        >
          <div>
            <CardHeader>
              <CardTitle>{cardInfo.name}</CardTitle>
            </CardHeader>
            <CardFooter>
              <Button variant={"destructive"}>Click Me.</Button>
            </CardFooter>
          </div>
          <div>
            <MdDeleteOutline
              className="h-8 w-8"
              size={40}
              onClick={() => {
                DeleteLorem(cardInfo.id);
              }}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};
