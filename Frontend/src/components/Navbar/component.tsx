import { LIndex, Navigationbar, UList } from "./styled";
import { FaAtom } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function () {
  return (
    <Navigationbar>
      <UList>
        <Link to="/">
          <LIndex>
            <FaAtom />
            <span>Periodic Table</span>
          </LIndex>
        </Link>
      </UList>
    </Navigationbar>
  );
}
