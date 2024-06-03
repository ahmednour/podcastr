"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import React from 'react'
import { Button } from "@/components/ui/button";
import PodcastCard from '@/components/PodcastCard';
import { podcastData } from '@/constants';
const Home = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        {tasks?.map(({ _id, text }) => (
          <div key={_id}>{text}</div>
        ))}
        <div className="podcast_grid">
          {podcastData.map(({ id, title, description, imgURL }) => {
            return <PodcastCard key={id} title={title} description={description} imgURL={imgURL} />
          })}
        </div>
      </section>
    </div>
  );
}

export default Home