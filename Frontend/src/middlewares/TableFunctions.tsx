import {
  Element,
  AtomicNumber,
  Symbol,
  ElementGradient,
  Name,
} from "../components/PlutoTable/styled";
import { IElement } from "../Interfaces/InterfacesTable";
import eventEmiter from "../utils/eventEmiter";

const LineFilter = (db: IElement[]) => {
  const blocks: IElement[][] = [[], [], [], [], [], [], [], [], [], [], [], []];
  db.map((element, index) => {
    if (index === 0) {
      blocks[0].push(element);
    } else if (index === 1) {
      blocks[1].push(element);
    } else if (index > 1 && index <= 3) {
      blocks[2].push(element);
    } else if (index > 3 && index <= 9) {
      blocks[3].push(element);
    } else if (index > 9 && index <= 11) {
      blocks[4].push(element);
    } else if (index > 11 && index <= 17) {
      blocks[5].push(element);
    } else if (index > 17 && index <= 35) {
      blocks[6].push(element);
    } else if (index > 35 && index <= 53) {
      blocks[7].push(element);
    } else if (index > 53 && index <= 71) {
      blocks[8].push(element);
    } else if (index > 71 && index <= 89) {
      blocks[9].push(element);
    } else if (index > 89 && index < 105) {
      blocks[10].push(element);
    } else if (index > 104 && index < 125) {
      blocks[11].push(element);
    }
  });
  return blocks;
};

const ElementChange = (element: IElement) => {
  eventEmiter.emit("ElementChange", element);
};

let LastMarked = "H";
const ChangeMark = (Mark: string) => {
  const element: any = document.getElementById(Mark);
  const LastElement: any = document.getElementById(LastMarked);
  LastElement.style.border = "";
  element.style.border = "2px solid #f08";
  LastMarked = Mark;
};

const ElementSquare = (eData: IElement) => {
  if (eData.symbol === "Lats" || eData.symbol === "Acts") {
    return (
      <ElementGradient
        key={eData.symbol}
        className={eData.category}
        id={eData.symbol}
      >
        <AtomicNumber>{eData.number}</AtomicNumber>
        <Symbol>{eData.symbol}</Symbol>
      </ElementGradient>
    );
  } else {
    return (
      <Element
        key={eData.symbol}
        className={eData.category}
        id={eData.symbol}
        onClick={() => {
          ChangeMark(eData.symbol);
          ElementChange(eData);
        }}
      >
        <AtomicNumber>{eData.number}</AtomicNumber>
        <Symbol>{eData.symbol}</Symbol>
        <Name>{eData.name}</Name>
      </Element>
    );
  }
};

export default {
  LineFilter,
  ElementSquare,
  ChangeMark,
};
