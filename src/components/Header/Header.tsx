import React from "react";
import { focusShipContext } from "../../hooks/focusShip";
import { usePageWidth } from "../../hooks/pageWidth";

type HeaderProps = {
    setFocusShip: (shipId: string | null) => void;
};

// Magic numbers
const HEADER_HEIGHT = 400;

const randomChoice = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export const Header: React.FC<HeaderProps> = ({ setFocusShip }) => {
    const pageWidth = usePageWidth();
    const gageWidth = Math.min(pageWidth, 900);

    return <header>
        <svg className="stars" width="100%" height="100%" viewBox={`0 0 ${pageWidth} ${HEADER_HEIGHT}`} style={{ pointerEvents: "none" }}>
            <g fill="white">
                {Array.from({ length: 30 }).map((_, i) => {
                    // Stars
                    return <circle key={i} cx={Math.random() * pageWidth} cy={Math.random() * HEADER_HEIGHT} r={Math.random() > 0.5 ? 1 : 1.5} className={randomChoice(["twinkle_1", "twinkle_2", "twinkle_3"])} />;
                })}
            </g>
        </svg>
        <h1 className="title">Star Wars<span className="tm">&trade;</span></h1>
        <h3 className="subtitle">Starship analysis</h3>
        <ShipSelector setFocusShip={setFocusShip} />
        <svg viewBox={`0 0 ${gageWidth} 70`} className="gage-svg" style={{maxWidth: gageWidth}}>
            <defs>
                <filter id="dark-shadow">
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FF2055" />
                </filter>
            </defs>
            <g stroke="white" fill="white">
                <rect rx={2} x={gageWidth / 2 - 5} y={10} width={10} height={30} fill="#FF2055" stroke="#FF2055" style={{ filter: "url(#dark-shadow)" }} />
                <text textAnchor="middle" x={gageWidth / 2} y={60} fontSize="0.8em">90&deg;</text>
                {[-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map(i => {
                    // Gage
                    const x = gageWidth / 2 + i * gageWidth / 14;
                    const delta = [2, 6].includes(Math.abs(i)) ? 10 : 3;

                    return <line key={i} y1={25 + delta} y2={25 - delta} x1={x} x2={x} />;
                })}
            </g>
        </svg>
    </header>;
};

type ShipSelectorProps = {
    setFocusShip: (shipId: string | null) => void;
};

const shipsList = [
    {
        sectionName: "Specialities",
        items: [
            "Death Star",
            "Millennium Falcon",
        ],
    },
    {
        sectionName: "Cruisers & big ships",
        items: [
            "Executor",
            "Star Destroyer",
            "Droid Control Ship",
            "Republic Attack Cruiser",
            "Calamari Cruiser",
        ],
    },
    {
        sectionName: "Fighters",
        items: [
            "A-Wing",
            "Tie Advanced X1",
            "X-Wing",
        ],
    },
];

const ShipSelector: React.FC<ShipSelectorProps> = ({ setFocusShip }) => {
    const focusShip = React.useContext(focusShipContext);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handler = () => {
            if (window.scrollY > ref.current!.parentElement!.clientHeight) {
                ref.current!.classList.add("fixed");
            } else {
                ref.current!.classList.remove("fixed");
            }
        };
        document.addEventListener("scroll", handler);

        return () => {
            document.removeEventListener("scroll", handler);
        };
    });

    return <div className="ship-selector" ref={ref}>
        <div>
            <select onChange={e => setFocusShip(e.target.value)} value={focusShip ?? ""}>
                <option value="">Highlight a ship</option>
                {shipsList.map(group => {
                    return <optgroup label={group.sectionName} key={group.sectionName}>
                        {group.items.map(item => {
                            return <option value={item} key={item}>{item}</option>
                        })}
                    </optgroup>;
                })}
            </select>
        </div>
    </div>;
};
