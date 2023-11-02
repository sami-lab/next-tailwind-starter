"use client";
import React, { useState } from "react";
import Card from "./card";
import Channel from "./channel";

const sampleChannels = [
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
        title: "Donec faucibus non velit id ultrices.",
        author: "John White, Al-Jazeera",
      },
    ],
  },
  {
    name: "Al Jazeera",
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
    name: "Yahoo",
    publishedAt: "2023-01-14T15:17:25.549+00:00",
    articles: [
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
  const [channels, setChannels] = useState(sampleChannels.slice(0, 2));
  return (
    <div className='flex flex-col'>
      {/* articles */}
      <div>
        {channels.map((item, i) => (
          <Channel
            key={i}
            index={i}
            channel={item}
            allChannels={sampleChannels}
            setChannels={setChannels}
          />
        ))}
      </div>
      {/* videos */}
      <div className='mt-4 mb-4' style={{ borderTop: "1px solid #43464D" }}>
        <div className='grid grid-cols-3 gap-3 mt-4 '>
          {videos.map((item) => (
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
              }}
            >
              <iframe
                src={item}
                allowFullScreen
                title='YouTube Video'
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
