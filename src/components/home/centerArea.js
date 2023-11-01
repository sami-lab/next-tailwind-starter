import React from "react";
import Card from "./card";
import Channel from "./channel";

const channels = [
  {
    name: "Wall Street Journal",
    publishedAt: "2023-01-14T15:17:25.549+00:00",
    articles: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "John Solomon, JTN",
      },
      {
        title: "consectetur adipiscing elit.",
        author: "Men Salomon, American Times",
      },
      {
        title:
          "Nulla ut justo id libero placerat lacinia scelerisque ac turpis.",
        author: "John Black, NY Times",
      },
      {
        title: "Donec faucibus non velit id ultrices.",
        author: "John White, Al-Jazeera",
      },
    ],
  },
  {
    name: "New York Times",
    publishedAt: "2023-01-14T15:17:25.549+00:00",
    articles: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "John Solomon, JTN",
      },
      {
        title: "consectetur adipiscing elit.",
        author: "Men Salomon, American Times",
      },
      {
        title:
          "Nulla ut justo id libero placerat lacinia scelerisque ac turpis.",
        author: "John Black, NY Times",
      },
      {
        title: "Donec faucibus non velit id ultrices.",
        author: "John White, Al-Jazeera",
      },
    ],
  },
];

const videos = [
  "https://www.youtube.com/embed/9-3uqTycYHo?si=daS5omcGD21uinkR",
  "https://www.youtube.com/embed/hxF5FZ_yrVg?si=7t74LQrxX_aIFgrt",
  "https://www.youtube.com/embed/XYn5t0tuuAk?si=8kJ2LQLsZJ5qPDPO",
];
export default function centerArea() {
  return (
    <div className='flex flex-col'>
      {/* articles */}
      <div>
        {channels.map((item, i) => (
          <Channel key={i} channel={item} />
        ))}
      </div>
    </div>
  );
}
