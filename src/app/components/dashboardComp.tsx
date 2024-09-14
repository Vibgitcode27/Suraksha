"use client"

import "../styles/main.css"
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/dashboard";
import { Flex, Image } from "antd";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"
import cover from "../assets/background_image.png"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/modal";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconCircleDashedCheck,
  IconTableColumn,
  IconReport,
} from "@tabler/icons-react";
export function MainDashboard() {
  return (
     <BentoGrid className="max-w-4xl mx-auto">
      <BentoGridItem
        key={0}
        title={items[0].title}
        description={items[0].description}
        header={items[0].header}
        icon={items[0].icon}
        className="md:col-span-1"
      />
      <BentoGridItem
        key={1}
        title={items[1].title}
        description={items[1].description}
        header={items[1].header}
        icon={items[1].icon}
        className="md:col-span-2"
      />
      <BentoGridItem
        key={2}
        title={items[2].title}
        description={items[2].description}
        header={items[2].header}
        icon={items[2].icon}
      />
      <BentoGridItem
        key={3}
        title={items[3].title}
        description={items[3].description}
        header={items[3].header}
        icon={items[3].icon}
      />
      <BentoGridItem
        key={4}
        title={items[4].title}
        description={items[4].description}
        header={items[4].header}
        icon={items[4].icon}
      />
      <BentoGridItem
        key={5}
        title={items[5].title}
        description={items[5].description}
        header={items[5].header}
        icon={items[5].icon}
        className="md:col-span-2"
      />
      <BentoGridItem
        key={6}
        title={items[6].title}
        description={items[6].description}
        header={items[6].header}
        icon={items[6].icon}
      />
    </BentoGrid>
  );
}
const Skeleton1 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image 
      src={profile.src} 
      preview={false} 
      style={{ 
        width: "100%", 
        height: "100%", 
        objectFit: "cover" 
      }}
    />
</div>
);

const Skeleton2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src={cover.src}
      className="w-full h-full object-cover"
      alt="Cover Image"
    />
  </div>
);

const Skeleton3 = () => (
      <Modal>
        <ModalTrigger className="relative group">
          <motion.div
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden"
            whileHover={{
              background: "linear-gradient(to bottom right,  #FFD700, #007BFF)",
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center justify-center w-full h-full cursor-pointer">
              <motion.div
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <motion.h1
                  className="text-white"
                  style={{ fontSize: '22px' }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  Create Post here
                </motion.h1>
                <motion.h1
                  className="text-white"
                  style={{ fontSize: '65px', padding: "0px", margin: "0px" }}
                  whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                >
                  +
                </motion.h1>
              </motion.div>
            </div>
          </motion.div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Book your trip to{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Bali
              </span>{" "}
              now! ✈️
            </h4>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
);

const Skeleton4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Flex align="center" justify="center" style={{width : "100%"}}>
      <h1 className="text-animate" style={{ fontSize : "120px" , color : "red"}}>37</h1>
    </Flex>
  </div>
);

const Skeleton5 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Flex align="center" justify="center" style={{width : "100%"}}>
      <h1 className="text-animate2" style={{ fontSize : "120px" , color : "red"}}>21</h1>
    </Flex>
  </div>
);

const Skeleton6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-2">
    <Flex className="desktop hidden md:flex" gap={20} align="center" justify="center" style={{ width: "100%", height: "100%" }}>
      <Flex 
        align="center" 
        justify="center" 
        style={{ 
          width: "100%", 
          height: "90%",
          border: "1px solid gray", 
          borderRadius: "20px" 
        }}
      >
        <h1 style={{ fontSize: "80px", color: "white", fontWeight: "500" }}>1021</h1>
      </Flex>
      <Flex 
        align="center" 
        justify="center" 
        style={{ 
          width: "100%", 
          height: "90%",
          border: "1px solid gray", 
          borderRadius: "20px" 
        }}
      >
        <h1 style={{ fontSize: "80px", color: "white", fontWeight: "500" }}>13</h1>
      </Flex>
    </Flex>

    <Flex className="mobile flex md:hidden" gap={10} align="center" vertical justify="center" style={{ width: "100%", height: "100%" }}>
      <Flex 
        align="center" 
        justify="center" 
        style={{ 
          width: "100%", 
          height: "45%",
          border: "1px solid gray", 
          borderRadius: "20px" 
        }}
      >
        <h1 style={{ fontSize: "40px", color: "white", fontWeight: "500" }}>1021</h1>
      </Flex>
      <Flex 
        align="center" 
        justify="center" 
        style={{ 
          width: "100%", 
          height: "45%",
          border: "1px solid gray", 
          borderRadius: "20px" 
        }}
      >
        <h1 style={{ fontSize: "40px", color: "white", fontWeight: "500" }}>13</h1>
      </Flex>
    </Flex>
  </div>
);

const items = [
  {
    title: "Name",
    description: <div style={{ fontSize : "27px"  }}>Vibhor Phalke</div>,
    header: <Skeleton1 />,
    icon: <IconClipboardCopy className="h-4 w-4 text-white" />,
  },
  {
    header: <Skeleton2 />
  },
  {
    title: "Report Incidents",
    description: "Click on the button to import incidents",
    header: <Skeleton3 />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Incidents Reported",
    header: <Skeleton4 />,
    icon: <IconReport className="h-4 w-4 text-white" />,
  },
  {
    title: "Incidents Resolved",
    header: <Skeleton5 />,
    icon: <IconCircleDashedCheck className="h-4 w-4 text-white" />,
  },
  {
    title: "Application Track",
    header: <Skeleton6 />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton2 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  }
];
