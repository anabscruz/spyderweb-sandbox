import "../styles.css";

export default function Box({ PosIniLbl, PosIniRec, recDimentions, lbl }) {
  return (
    <svg>
      <g
        fontSize="16"
        fontFamily="sans-serif"
        fill="black"
        stroke="none"
        textAnchor="left"
      >
        <text x={PosIniLbl[0]} y={PosIniLbl[1]}>
          {lbl}
        </text>
      </g>
      <rect
        x={PosIniRec[0]}
        y={PosIniRec[1]}
        width={recDimentions[0]}
        height={recDimentions[1]}
        style={{
          fill: "transparent",
          strokeWidth: 1,
          stroke: "rgb(0,0,0)"
        }}
      />
    </svg>
  );
}
