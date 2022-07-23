import { useEffect, useState } from "react";
import { TableArea, TableLine, Block } from "./styled";
import Db from "../../public/db/ForkDatabase.json";
import TableFunc from "../../middlewares/TableFunctions";
export default function () {
  useEffect(() => {
    TableFunc.ChangeMark("H");
  });
  const Elements: any = Db;
  const [Blocks, SetBlocks] = useState(TableFunc.LineFilter(Elements));

  return (
    <TableArea>
      <TableLine>
        <Block>
          {Blocks[0].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>
        <Block>
          {Blocks[1].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>
      </TableLine>

      <TableLine>
        <Block>
          {Blocks[2].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>

        <Block>
          {Blocks[3].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>
      </TableLine>

      <TableLine>
        <Block>
          {Blocks[4].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>

        <Block>
          {Blocks[5].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>
      </TableLine>

      <TableLine>
        <Block>
          {Blocks[6].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>
      </TableLine>

      <TableLine>
        <Block>
          {Blocks[7].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>
      </TableLine>

      <TableLine>
        <Block>
          {Blocks[8].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>
      </TableLine>

      <TableLine>
        <Block>
          {Blocks[9].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>
      </TableLine>

      <TableLine>
        <Block>
          {Blocks[10].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>
      </TableLine>

      <TableLine>
        <Block>
          {Blocks[11].map((e) => {
            return TableFunc.ElementSquare(e);
          })}
        </Block>
      </TableLine>
    </TableArea>
  );
}
