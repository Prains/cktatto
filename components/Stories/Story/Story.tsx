"use client";
import Image from "next/image";
import { useState } from "react";

interface Story {
  story: { image: string };
  setOpen: (index: number) => void;
  index: number;
}

const Story = ({ story, setOpen, index }: Story) => {
  return (
    <article>
      <Image
        src={story.image}
        alt="История сktatto"
        className="w-10 h-10 lg:w-[54px] lg:h-[54px] object-cover object-center rounded-full"
        width={36}
        height={36}
        onClick={() => setOpen(index)}
      />
    </article>
  );
};

export default Story;
