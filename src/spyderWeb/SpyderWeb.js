import "../styles.css";
import Box from "./Box.js";
import Connector from "./Connector.js";

export default function SpyderWeb() {
  // https://stackoverflow.com/questions/24105040/how-svg-curveto-c-works

  const PosIniLbl = [40, 40];
  const PosIniRec = [20, 15];
  const PosIniCir = [20, 35];

  const recDimentions = [250, 40];

  let swi = [
    {
      name: "Task",
      children: [
        {
          name: "Task - Agile"
        },
        {
          name: "Task - Situation Dynamics"
        },
        {
          name: "Task - Time Controlling"
        }
      ]
    }
  ];

  return (
    <>
      <svg height="100vh">
        {swi.map((i, j) => {
          return (
            <>
              <Box
                key={j}
                PosIniLbl={PosIniLbl}
                PosIniRec={PosIniRec}
                recDimentions={recDimentions}
                lbl={i.name}
              />
              <g stroke="black" strokeWidth="2" fill="white">
                <circle id="pointA" cx={PosIniCir[0]} cy={PosIniCir[1]} r="5" />
              </g>

              {i.children.map((child, ci) => {
                let posChildLbl = [
                  PosIniLbl[0] + 20,
                  PosIniLbl[1] + (ci + 1) * 60
                ];

                let posChildCir = [
                  PosIniCir[0] + 20,
                  PosIniCir[1] + (ci + 1) * 60
                ];

                let posChildRec = [
                  PosIniRec[0] + 20,
                  PosIniRec[1] + (ci + 1) * 60
                ];

                return (
                  <>
                    <Box
                      key={`${j}${ci}`}
                      PosIniLbl={posChildLbl}
                      PosIniRec={posChildRec}
                      recDimentions={recDimentions}
                      lbl={child.name}
                    />

                    <Connector circlePos={posChildCir} />

                    <path
                      d={`M 20 40 C 20 40 -30 ${posChildCir[1]} ${posChildCir[0]} ${posChildCir[1]}`}
                      stroke="black"
                      strokeWidth="2"
                      fill="none"
                    />

                    <g stroke="black" strokeWidth="2" fill="white">
                      <circle
                        id="pointA"
                        cx={posChildCir[0]}
                        cy={posChildCir[1]}
                        r="5"
                      />
                    </g>
                  </>
                );
              })}
            </>
          );
        })}
      </svg>
    </>
  );
}
