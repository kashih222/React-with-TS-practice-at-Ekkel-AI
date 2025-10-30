import { Instagram, Quote, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

interface QuoteData {
  id: number;
  quote: string;
  author: string;
  bgColor: string;
  textColor: string;
}

const Card: React.FC = () => {
  

   const Quotes:QuoteData[] = [
  {
    "id": 1,
    "quote": "Small steady steps redraw the outline of impossible.",
    "author": "Maya Ren",
    "bgColor": "#FF6B6B",
    "textColor": "#0B0B0B"
  },
  {
    "id": 2,
    "quote": "Ask the quiet question before you speak the loud answer.",
    "author": "Jonas Vale",
    "bgColor": "#FFD93D",
    "textColor": "#0A0A0A"
  },
  {
    "id": 3,
    "quote": "Curiosity is a map; follow it even on foggy days.",
    "author": "Asha Mir",
    "bgColor": "#6BCB77",
    "textColor": "#06260B"
  },
  {
    "id": 4,
    "quote": "A single good habit compounds into an unexpected miracle.",
    "author": "Liam Cortez",
    "bgColor": "#4D96FF",
    "textColor": "#041234"
  },
  {
    "id": 5,
    "quote": "Courage begins where comfort ends and practice starts.",
    "author": "Nora Finch",
    "bgColor": "#FF8FB1",
    "textColor": "#1B0A0F"
  },
  {
    "id": 6,
    "quote": "Listen to the problem; sometimes it’s a poem in disguise.",
    "author": "Ethan Rye",
    "bgColor": "#9D7CD8",
    "textColor": "#0E0620"
  },
  {
    "id": 7,
    "quote": "Build small bridges — they carry you across larger storms.",
    "author": "Samir Qureshi",
    "bgColor": "#00C2A8",
    "textColor": "#002821"
  },
  {
    "id": 8,
    "quote": "The clearest answers come after making the muddled attempt.",
    "author": "Ivy Boone",
    "bgColor": "#FFB86B",
    "textColor": "#241200"
  },
  {
    "id": 9,
    "quote": "Treat time like a guest: welcome it, don’t chase it.",
    "author": "Oliver Kim",
    "bgColor": "#2F4B7C",
    "textColor": "#F6F9FF"
  },
  {
    "id": 10,
    "quote": "Gratitude turns the ordinary into a kept treasure.",
    "author": "Zara Hale",
    "bgColor": "#F25F5C",
    "textColor": "#111111"
  },
  {
    "id": 11,
    "quote": "Ideas are seeds; conversation is the garden that grows them.",
    "author": "Pablo Nunez",
    "bgColor": "#6A994E",
    "textColor": "#071006"
  },
  {
    "id": 12,
    "quote": "When you polish patience, haste stops reflecting back.",
    "author": "Elena Moss",
    "bgColor": "#3D5A80",
    "textColor": "#F2F7FF"
  },
  {
    "id": 13,
    "quote": "Fail lightly, learn deeply, restart gracefully.",
    "author": "Hiro Tan",
    "bgColor": "#FF9F1C",
    "textColor": "#160900"
  },
  {
    "id": 14,
    "quote": "Simplicity reveals the shapes that clutter tried to hide.",
    "author": "Marta Sol",
    "bgColor": "#8ECAE6",
    "textColor": "#022A34"
  },
  {
    "id": 15,
    "quote": "Create with curiosity, not to impress but to explore.",
    "author": "Ravi Anand",
    "bgColor": "#D62828",
    "textColor": "#FFF7F7"
  },
  {
    "id": 16,
    "quote": "A steady why outlives a changing how.",
    "author": "Bianca Ro",
    "bgColor": "#00A6A6",
    "textColor": "#031313"
  },
  {
    "id": 17,
    "quote": "Words are tools — choose the right one, and build peace.",
    "author": "Marcus Lyle",
    "bgColor": "#C77DFF",
    "textColor": "#1B0026"
  },
  {
    "id": 18,
    "quote": "Hope is practiced in quiet hours, not shouted from rooftops.",
    "author": "Sofia Grey",
    "bgColor": "#FF6F91",
    "textColor": "#210012"
  },
  {
    "id": 19,
    "quote": "Measure progress by the courage to continue, not the speed.",
    "author": "Noel Park",
    "bgColor": "#2EC4B6",
    "textColor": "#002826"
  },
  {
    "id": 20,
    "quote": "The future listens to what you plant today.",
    "author": "Mina Shore",
    "bgColor": "#FFBC42",
    "textColor": "#121000"
  },
  {
    "id": 21,
    "quote": "Creativity borrows patience from practice and returns wonder.",
    "author": "Theo Parkin",
    "bgColor": "#557A95",
    "textColor": "#F8FBFF"
  },
  {
    "id": 22,
    "quote": "A clear boundary protects energy; a fuzzy one drains it.",
    "author": "Layla Noor",
    "bgColor": "#9B5DE5",
    "textColor": "#0C0020"
  },
  {
    "id": 23,
    "quote": "Adaptation is learning the language of the new day.",
    "author": "Carlos Mendes",
    "bgColor": "#F15BB5",
    "textColor": "#1A0014"
  },
  {
    "id": 24,
    "quote": "Kindness is the shortest route between two people.",
    "author": "Rina Patel",
    "bgColor": "#6BE3B6",
    "textColor": "#02321A"
  },
  {
    "id": 25,
    "quote": "Declutter your choices; clarity will take the wheel.",
    "author": "Felix Drum",
    "bgColor": "#FF7A00",
    "textColor": "#120300"
  },
  {
    "id": 26,
    "quote": "Your attention is the currency—spend it with intention.",
    "author": "Celia Moss",
    "bgColor": "#264653",
    "textColor": "#F0F6F8"
  },
  {
    "id": 27,
    "quote": "Listen longer than you speak; wisdom grows from that silence.",
    "author": "Amir Qadir",
    "bgColor": "#E76F51",
    "textColor": "#0F0301"
  },
  {
    "id": 28,
    "quote": "Curate your inputs — your output will thank you later.",
    "author": "Rhea Lin",
    "bgColor": "#4CC9F0",
    "textColor": "#022B33"
  },
  {
    "id": 29,
    "quote": "Start where you are; the map redraws as you step.",
    "author": "Omar Finch",
    "bgColor": "#FF5D8F",
    "textColor": "#210012"
  },
  {
    "id": 30,
    "quote": "Progress often hides inside the courage to start again.",
    "author": "Lara Quinn",
    "bgColor": "#38B000",
    "textColor": "#001905"
  }
];

  const [randomquote, setRandomQuote] = useState<QuoteData | null>(null);

  const SelectRadom = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    setRandomQuote(Quotes[randomIndex]);
  };

  useEffect(() => {
    SelectRadom();
  }, [])
  

  return (
   <div
      className="h-screen w-full flex items-center justify-center transition-all duration-500"
      style={{
        backgroundColor: randomquote ? randomquote.bgColor : "#16A085",
        color: randomquote ? randomquote.textColor : "#FFFFFF",
      }}
    >
      {randomquote && (
        <div
          className="w-1/2 h-1/2 rounded-sm px-8 py-8 flex flex-col items-center justify-evenly shadow-lg transition-all duration-500"
          style={{
            backgroundColor: "white",
            color: randomquote.bgColor,
          }}
        >
          <div className="w-full flex">
            <h2 className="flex text-2xl font-bold leading-snug">
              <span className="absolute">
                <Quote />
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {randomquote.quote}
            </h2>
          </div>

          <div className="w-full text-end text-xl mt-2">
            <span>-</span> {randomquote.author}
          </div>

          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center gap-4">
              <a
                style={{
                  backgroundColor: randomquote.bgColor,
                  color: "white",
                }}
                className="p-2 rounded-sm transition-all duration-200 hover:opacity-80"
                href="#"
              >
                <Twitter />
              </a>

              <a
                style={{
                  backgroundColor: randomquote.bgColor,
                  color: "white",
                }}
                className="p-2 rounded-sm transition-all duration-200 hover:opacity-80"
                href="#"
              >
                <Instagram />
              </a>
            </div>

            <div className="flex items-center">
              <button
                onClick={SelectRadom}
                style={{
                  backgroundColor: randomquote.bgColor,
                  color:"white",
                }}
                className="px-4 py-2 rounded-sm font-bold active:scale-95 transition-all duration-200 hover:opacity-85"
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
