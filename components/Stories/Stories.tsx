"use client";
import ActiveStory from "./ActiveStory/ActiveStory";
import Story from "./Story/Story";
import { useState } from "react";

interface Stories {
  stories: { image: string }[];
}

const Stories = ({ stories }: Stories) => {
  const [open, setOpen] = useState(false);
  const [pagination, setPagination] = useState(0);
  const handleOpen = (index: number) => {
    setPagination(index);
    setOpen(true);
  };
  return (
    <section className="flex items-center justify-center gap-6 my-7">
      {stories.map((story, index) => (
        <Story
          story={story}
          setOpen={handleOpen}
          index={index}
          key={story.image}
        />
      ))}
      {open && (
        <ActiveStory
          setOpen={setOpen}
          stories={stories}
          pagination={pagination}
        />
      )}
    </section>
  );
};

export default Stories;
