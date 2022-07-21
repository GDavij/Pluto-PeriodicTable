import { useEffect, useState } from "react";
import db from "../../public/db/ForkDatabase.json";
import { IElement } from "../../Interfaces/InterfacesTable";
import {
  ElementBarArea,
  IndexAtomicNumber,
  IndexElectronicConfig,
  IndexElement,
  IndexSymbol,
  InlineData,
  OutLineData,
} from "./styled";
import eventEmiter from "../../utils/eventEmiter";
export default function () {
  const [Element, SetElement]: IElement | any = useState(db[0]);

  useEffect(() => {
    eventEmiter.addListener("ElementChange", (data: IElement) => {
      console.log("Hello");
      console.log(data);
      SetElement(data);
    });
  }, []);
  return (
    <ElementBarArea>
      <IndexElement className={Element.category}>
        <IndexAtomicNumber>{Element.number}</IndexAtomicNumber>
        <IndexSymbol>
          <span>{Element.symbol}</span>
          <span>{Element.name}</span>
        </IndexSymbol>
        <IndexElectronicConfig>
          {Element.shells.map((e: number) => {
            return <span>{e}</span>;
          })}
        </IndexElectronicConfig>
      </IndexElement>

      <InlineData>
        Atomic Mass: {Element.atomic_mass ? Element.atomic_mass : "Undefined"}
      </InlineData>
      <InlineData>
        Density: {Element.density ? Element.density : "Undefined"}
      </InlineData>
      <InlineData>
        Discovered By:{" "}
        {Element.discovered_by ? Element.discovered_by : "Undefined"}
      </InlineData>
      <InlineData>
        Named By: {Element.named_by ? Element.named_by : "Undefined"}
      </InlineData>
      <InlineData>
        Family: {Element.xpos ? Element.xpos : "Undefined"}
      </InlineData>
      <InlineData>
        Period: {Element.ypos ? Element.ypos : "Undefined"}
      </InlineData>
      <OutLineData>
        Summary:
        <span>
          {Element.summary ? Element.summary : <span>No Summary</span>}
        </span>
      </OutLineData>
      <OutLineData>
        Appearance
        <span>
          {Element.appearance ? Element.appearance : <span>No Apparence </span>}
        </span>
      </OutLineData>
      <InlineData>
        Normal State: {Element.phase ? Element.phase : "Undefined"}
      </InlineData>
      <InlineData>
        Melt Point: {Element.melt ? Element.melt : "Undefined"}
      </InlineData>
      <InlineData>
        Molar Heat: {Element.molar_heat ? Element.molar_heat : "Undefined"}
      </InlineData>
      <InlineData>
        Electron Affinity:
        {Element.electron_affinity ? Element.electron_affinity : "Undefined"}
      </InlineData>
      <InlineData>
        Electro Negativity:{" "}
        {Element.electronegativity_pauling
          ? Element.electronegativity_pauling
          : "Undefined"}
      </InlineData>
      <OutLineData>
        Eletronic Configuration:
        <span>
          {Element.electron_configuration
            ? Element.electron_configuration
            : "Undefined"}
        </span>
      </OutLineData>
      <OutLineData>
        Eletronic Energies
        {Element.ionization_energies.length != 0 ? (
          Element.ionization_energies.map((e: any, i: any) => {
            return (
              <span key={i}>
                {i + 1}° {e}
              </span>
            );
          })
        ) : (
          <span>Energies as Undefined</span>
        )}
      </OutLineData>
    </ElementBarArea>
  );
}
