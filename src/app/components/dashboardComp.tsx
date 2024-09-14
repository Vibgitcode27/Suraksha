import "../styles/main.css"
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/dashboard";
import { Flex, Image } from "antd";
import profile from "../assets/profile.jpg"
import cover from "../assets/background_image.png"
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconCircleDashedCheck,
  IconTableColumn,
  IconReport
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
        title={items[3].title}
        description={items[3].description}
        header={items[3].header}
        icon={items[3].icon}
        className="md:col-span-2"
      />
      <BentoGridItem
        key={3}
        title={items[2].title}
        description={items[2].description}
        header={items[2].header}
        icon={items[2].icon}
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
const Skeleton = () => (
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
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Flex align="center" justify="center" style={{width : "100%"}}>
      <h1 className="text-animate" style={{ fontSize : "120px" , color : "red"}}>37</h1>
    </Flex>
  </div>
);

const Skeleton3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Flex align="center" justify="center" style={{width : "100%"}}>
      <h1 className="text-animate2" style={{ fontSize : "120px" , color : "red"}}>21</h1>
    </Flex>
  </div>
);

const Skeleton4 = () => (
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

const Skeleton5 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <Image
      src={cover.src}
      className="w-full h-full object-cover"
      alt="Cover Image"
    />
  </div>
);

const items = [
  {
    title: "Name",
    description: <div style={{ fontSize : "27px"  }}>Vibhor Phalke</div>,
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-white" />,
  },
  {
    header: <Skeleton5 />
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton2 />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Application Track",
    header: <Skeleton4 />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Incidents Reported",
    header: <Skeleton2 />,
    icon: <IconReport className="h-4 w-4 text-white" />,
  },
  {
    title: "Incidents Resolved",
    header: <Skeleton3 />,
    icon: <IconCircleDashedCheck className="h-4 w-4 text-white" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton2 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
