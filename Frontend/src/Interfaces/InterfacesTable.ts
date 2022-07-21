export interface IElement {
  name: string;
  appearance: string;
  atomic_mass: number;
  boil: number;
  category: string;
  density: number;
  discovered_by: string;
  melt: number;
  molar_heat: number;
  named_by: string;
  number: number;
  period: number;
  phase: string;
  source: string;
  spectral_img: string;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  shells: any[];
  electron_configuration: string;
  electron_configuration_semantic: string;
  electron_affinity: number;
  electronegativity_pauling: number;
  ionization_energies: any[];
}
