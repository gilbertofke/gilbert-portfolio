import styles from "./AreasNetwork.module.css";

const W = 520;
const H = 300;
const CX = W / 2;
const CY = H / 2;
const RING = 110;
const NODE = 16;
const GAP = 14;
const TURQ = "#2DD4BF";
const TEAL = "#0F766E";
const NAVY = "#0B1F3A";
const PAPER = "#F3F8F7";

type AreasNetworkProps = {
  areas: readonly string[];
};

function round(value: number) {
  return Math.round(value * 100) / 100;
}

export default function AreasNetwork({ areas }: AreasNetworkProps) {
  const count = areas.length;

  const nodes = areas.map((area, index) => {
    const angle = ((-135 + (index * 360) / count) * Math.PI) / 180;
    const x = round(CX + RING * Math.cos(angle));
    const y = round(CY + RING * Math.sin(angle));
    return {
      area,
      x,
      y,
      number: String(index + 1).padStart(2, "0"),
      delay: index * 0.6,
      onLeft: x < CX,
    };
  });

  const outline = nodes.map((node) => `${node.x},${node.y}`).join(" ");

  // Data core geometry: a three layer stack drawn inside the centre disc.
  const CORE_RX = 13;
  const CORE_RY = 4.5;
  const TOP = CY - 11;
  const MID = CY;
  const BOTTOM = CY + 11;

  return (
    <div
      className="relative mx-auto w-full"
      style={{ aspectRatio: `${W} / ${H}` }}
    >
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <g className={styles.ring} style={{ transformOrigin: `${CX}px ${CY}px` }}>
          <circle
            cx={CX}
            cy={CY}
            r={RING}
            stroke={TEAL}
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="2 6"
          />
          <circle cx={CX + RING} cy={CY} r="4.5" fill={TURQ} stroke={TEAL} strokeWidth="1" />
          <circle cx={CX - RING} cy={CY} r="4.5" fill={TURQ} stroke={TEAL} strokeWidth="1" />
        </g>

        <polygon
          points={outline}
          stroke={TEAL}
          strokeOpacity="0.2"
          strokeWidth="1"
        />

        {nodes.map((node) => (
          <g key={node.number}>
            <line
              x1={CX}
              y1={CY}
              x2={node.x}
              y2={node.y}
              stroke={TEAL}
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />
            <line
              x1={CX}
              y1={CY}
              x2={node.x}
              y2={node.y}
              pathLength={100}
              stroke={TEAL}
              strokeWidth="4"
              strokeLinecap="round"
              className={styles.pulse}
              style={{ animationDelay: `${node.delay}s` }}
            />
          </g>
        ))}

        {nodes.map((node) => (
          <g key={`node-${node.number}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r={NODE + 6}
              stroke={TURQ}
              strokeWidth="2"
              className={styles.halo}
              style={{ animationDelay: `${node.delay + 1}s` }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={NODE}
              fill={NAVY}
              stroke={TURQ}
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="12"
              fontWeight="700"
              fill={TURQ}
              className="font-heading"
            >
              {node.number}
            </text>
          </g>
        ))}

        {/* Data core: the shared foundation under all four areas */}
        <circle
          cx={CX}
          cy={CY}
          r="38"
          stroke={TURQ}
          strokeWidth="2"
          className={styles.core}
        />
        <circle cx={CX} cy={CY} r="32" fill={TEAL} stroke={TURQ} strokeWidth="1.5" />

        <g
          stroke={PAPER}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d={`M ${CX - CORE_RX} ${TOP} V ${BOTTOM} A ${CORE_RX} ${CORE_RY} 0 0 0 ${CX + CORE_RX} ${BOTTOM} V ${TOP}`}
          />
          <path
            d={`M ${CX - CORE_RX} ${MID} A ${CORE_RX} ${CORE_RY} 0 0 0 ${CX + CORE_RX} ${MID}`}
          />
          <ellipse
            cx={CX}
            cy={TOP}
            rx={CORE_RX}
            ry={CORE_RY}
            fill={TURQ}
            stroke={PAPER}
          />
        </g>
      </svg>

      <ol aria-label="Areas of work" className="m-0 list-none p-0">
        {nodes.map((node, index) => {
          const edge = node.onLeft ? node.x - NODE - GAP : node.x + NODE + GAP;
          const room = node.onLeft ? edge : W - edge;
          const position = node.onLeft
            ? { right: `${((W - edge) / W) * 100}%` }
            : { left: `${(edge / W) * 100}%` };

          return (
            <li
              key={node.number}
              className="absolute"
              style={{
                top: `${(node.y / H) * 100}%`,
                transform: "translateY(-50%)",
                width: `${(room / W) * 100}%`,
                ...position,
              }}
            >
              <span
                className={`animate-rise block font-heading text-[0.95rem] font-semibold leading-snug text-navy ${
                  node.onLeft ? "text-right" : "text-left"
                }`}
                style={{ animationDelay: `${300 + index * 120}ms` }}
              >
                {node.area}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
