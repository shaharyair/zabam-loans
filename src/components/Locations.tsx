import { Container } from "@/components/Container";
import Image from "next/image";
import React from "react";

interface locationsProps {
  data: {
    address: string;
    googleMapsLink: string;
    openHours: string;
  }[];
}

export const Locations = (props: locationsProps) => {
  const { data } = props;

  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((item, index) => (
          <div key={`${index}-${item.address}`}>
            <div className="flex flex-col justify-between size-full bg-gray-100 rounded-2xl dark:bg-trueGray-800 gap-4 p-6 text-lg leading-normal text-center">
              <iframe
                src={item.googleMapsLink}
                width="600"
                height="450"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full aspect-square h-auto"
              ></iframe>
              <span>{item.address}</span>
              <span>{item.openHours}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
