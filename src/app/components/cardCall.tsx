import React, { useState } from 'react';
import Image from 'next/image';
import * as ant from 'antd';
import { Flex , Timeline } from 'antd';
import { motion } from "framer-motion";
import { FollowerPointerCard } from "../components/ui/card";
import blogContnt from "../assets/background_image.png";
import hover_avatar from "../assets/logo2.png";
import { IconMapPinFilled } from '@tabler/icons-react';

export function FollowingPointerDemo() {

    const [latitude, setLatitude] = useState(37.7749);
    const [longitude, setLongitude] = useState(-122.4194);
    const [completed , setAction] = useState<boolean>(false);
    const [status , setStatus] = useState<boolean>(false);

    const openGoogleMaps = () => {
        const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(googleMapsUrl, "_blank");
    };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:max-w-[64%] mx-auto">
        {blogContentArray.map((content, index) => (
          <FollowerPointerCard
            key={index} 
            title={
              <TitleComponent
                title={content.author}
                avatar={content.authorAvatar}
              />
            }>
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100 mb-4">
              <div className="w-full h-48 sm:h-64 relative bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden">
                <Image
                  src={content.image}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition duration-200"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="font-bold mb-2 text-base sm:text-lg text-zinc-700 line-clamp-2">
                  <IconMapPinFilled onClick={() => {openGoogleMaps()}} style={{ display : "inline-block"}}/> {content.title}
                </h2>
                <p className="font-normal mb-4 text-xs sm:text-sm text-zinc-500 line-clamp-3">
                  {content.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 sm:mt-6">
                  <span className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-0">{content.date}</span>
                  <Flex gap={20}>
                    <button 
                        style={{ backgroundColor: completed ? "green" : "red" , cursor : "none" }} 
                        className="w-full sm:w-auto px-4 py-2 text-white font-bold rounded-xl text-xs sm:text-sm hover:bg-gray-800 transition duration-200"
                        >
                        {completed ? "Completed" : "Pending"}
                    </button>
                    <button onClick={() => setStatus(!status)} style={{ cursor : "none" }} className="w-full sm:w-auto px-4 py-2 bg-black text-white font-bold rounded-xl text-xs sm:text-sm hover:bg-gray-800 transition duration-200">
                        Check Status
                    </button>
                  </Flex>
                </div>
                {status && (
                    <>
                        <motion.h2
                            className="font-bold mb-2 mt-7 text-base sm:text-lg text-zinc-700 line-clamp-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Timeline
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Flex vertical style={{ paddingLeft: "30px", marginTop: "20px" }}>
                            <Timeline
                                items={[
                                { children: 'Ambulance dispatched 2024-09-15' },
                                { children: 'Embulance escorted patients 2015-09-15' },
                                { children: 'FIR filed on 11:50 2015-09-15' },
                                { children: 'Assigned police officer Pramod to resolve issue on 15:20 2015-09-15' },
                                ]}
                            />
                            </Flex>
                        </motion.div>
                    </>
                )}
              </div>
            </div>
          </FollowerPointerCard>
        ))}
      </div>
    </div>
  );
}

const blogContentArray = [
  {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Sentiment : Fatal",
    date: "15th September, 2024",
    title: "Description",
    description:
      "Two bikes collided head-on at a sharp curve, causing both riders to be thrown off. The impact was severe, leaving the bikes mangled and the road littered with debris. Emergency responders quickly arrived at the scene to provide aid.",
    image: blogContnt.src,
    authorAvatar: hover_avatar,
  },
  {
    slug: "another-awesome-grid-example",
    author: "John Doe",
    date: "15th September, 2024",
    title: "Description",
    description:
      "A speeding car lost control and struck a woman crossing the street, sending her tumbling onto the pavement. The front of the car was visibly damaged from the impact. Bystanders rushed to assist as emergency services were called to the scene.",
    image: blogContnt.src,
    authorAvatar: hover_avatar,
  },
];

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: any;
}) => (
  <div className="flex space-x-2 items-center">
    <ant.Image
      src={avatar.src}
      width={20}
      height={20}
      alt="avatar"
      preview={false}
      className="rounded-full border-2 border-white"
    />
    <p className="text-sm sm:text-base">{title}</p>
  </div>
);
