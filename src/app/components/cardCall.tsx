import React from 'react';
import Image from 'next/image';
import * as ant from 'antd';
import { FollowerPointerCard } from "../components/ui/card";
import blogContnt from "../assets/background_image.png";
import hover_avatar from "../assets/logo2.png"

export function FollowingPointerDemo() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:max-w-[64%] mx-auto"> {/* 100% width on small screens, 60% on md and up */}
        <FollowerPointerCard
          title={
            <TitleComponent
              title={blogContent.author}
              avatar={blogContent.authorAvatar}
            />
          }
        >
          <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
            <div className="w-full h-48 sm:h-64 relative bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden">
              <Image
                src={blogContent.image}
                alt="thumbnail"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition duration-200"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="font-bold mb-2 text-base sm:text-lg text-zinc-700 line-clamp-2">
                {blogContent.title}
              </h2>
              <p className="font-normal mb-4 text-xs sm:text-sm text-zinc-500 line-clamp-3">
                {blogContent.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 sm:mt-6">
                <span className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-0">{blogContent.date}</span>
                <button className="w-full sm:w-auto px-4 py-2 bg-black text-white font-bold rounded-xl text-xs sm:text-sm hover:bg-gray-800 transition duration-200">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      </div>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Sentiment : Fatal",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: blogContnt.src,
  authorAvatar: hover_avatar,
};

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