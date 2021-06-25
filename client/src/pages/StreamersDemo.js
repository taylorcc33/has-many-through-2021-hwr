import React, { useEffect, useState } from "react";

const StreamersDemo = () => {
  const apiData = [
    {
      id: 1,
      name: "Pokemon",
      genre: "RPG",
      streamer_id: 1,
      streamer_name: "Tiger",
      streamer_join_date: 2015,
    },
    {
      id: 1,
      name: "Pokemon",
      genre: "RPG",
      streamer_id: 6,
      streamer_name: "Dog",
      streamer_join_date: 2017,
    },
    {
      id: 1,
      name: "Pokemon",
      genre: "RPG",
      streamer_id: 7,
      streamer_name: "Guinea Pig",
      streamer_join_date: 2019,
    },
    {
      id: 1,
      name: "Pokemon",
      genre: "RPG",
      streamer_id: 8,
      streamer_name: "Leopard",
      streamer_join_date: 2020,
    },
    {
      id: 2,
      name: "Minecraft",
      genre: "Adventure",
      streamer_id: 2,
      streamer_name: "Zebra",
      streamer_join_date: 2016,
    },
    {
      id: 2,
      name: "Minecraft",
      genre: "Adventure",
      streamer_id: 9,
      streamer_name: "Panther",
      streamer_join_date: 2020,
    },
    {
      id: 2,
      name: "Minecraft",
      genre: "Adventure",
      streamer_id: 10,
      streamer_name: "Lion",
      streamer_join_date: 2021,
    },
    {
      id: 2,
      name: "Minecraft",
      genre: "Adventure",
      streamer_id: 11,
      streamer_name: "Groundhog",
      streamer_join_date: 2019,
    },
    {
      id: 2,
      name: "Minecraft",
      genre: "Adventure",
      streamer_id: 12,
      streamer_name: "Cat",
      streamer_join_date: 2018,
    },
    {
      id: 2,
      name: "Minecraft",
      genre: "Adventure",
      streamer_id: 13,
      streamer_name: "Goldfish",
      streamer_join_date: 2019,
    },
    {
      id: 2,
      name: "Minecraft",
      genre: "Adventure",
      streamer_id: 14,
      streamer_name: "Shark",
      streamer_join_date: 2020,
    },
    {
      id: 2,
      name: "Minecraft",
      genre: "Adventure",
      streamer_id: 15,
      streamer_name: "Hedgehog",
      streamer_join_date: 2020,
    },
    {
      id: 3,
      name: "Animal Crossing",
      genre: "RPG",
      streamer_id: 3,
      streamer_name: "Giraffe",
      streamer_join_date: 2018,
    },
    {
      id: 3,
      name: "Animal Crossing",
      genre: "RPG",
      streamer_id: 16,
      streamer_name: "Rabbit",
      streamer_join_date: 2020,
    },
    {
      id: 4,
      name: "Super Smash Brothers",
      genre: "Fighting",
      streamer_id: 4,
      streamer_name: "Hyena",
      streamer_join_date: 2020,
    },
    {
      id: 4,
      name: "Super Smash Brothers",
      genre: "Fighting",
      streamer_id: 17,
      streamer_name: "Fox",
      streamer_join_date: 2020,
    },
    {
      id: 4,
      name: "Super Smash Brothers",
      genre: "Fighting",
      streamer_id: 18,
      streamer_name: "Wolf",
      streamer_join_date: 2020,
    },
    {
      id: 5,
      name: "Super Mario",
      genre: "Adventure",
      streamer_id: 5,
      streamer_name: "Whale",
      streamer_join_date: 2021,
    },
    {
      id: 5,
      name: "Super Mario",
      genre: "Adventure",
      streamer_id: 19,
      streamer_name: "Lizard",
      streamer_join_date: 2021,
    },
    {
      id: 5,
      name: "Super Mario",
      genre: "Adventure",
      streamer_id: 20,
      streamer_name: "Puppy",
      streamer_join_date: 2021,
    },
    {
      id: 5,
      name: "Super Mario",
      genre: "Adventure",
      streamer_id: 21,
      streamer_name: "Axolotl",
      streamer_join_date: 2021,
    },
  ];

  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    normalizeData(apiData);
  }, []);

  const normalizeData = (data) => {
    
  };

  const renderJSX = () => {
    return gamesData.map((g) => {
      return (
        <p>
          {g.name} - {g.streamers.length} people streaming
        </p>
      );
    });
  };

  return (
    <>
      <h2>All Games</h2>
      <div>{renderJSX()}</div>
    </>
  );
};

export default StreamersDemo;
