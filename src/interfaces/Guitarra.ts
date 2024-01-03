export type Guitarras = {
  id: number;
  attributes: Guitarra;
};
export type Guitarra = {
  nombre: string;
  description: GuitarraDescription[];
  url: string;
  precio: number;
  imagen: GuitarraImagen;
};
export type GuitarraDescription = {
  children: [GuitarraDescriptionChildren];
  type: string;
};
export type GuitarraDescriptionChildren = {
  text: string;
  type: string;
};
export type GuitarraImagen = {
  data: GuitarraImagenData;
};
export type GuitarraImagenData = {
  id: number;
  attributes: GuitarraImagenDataAttributes;
};
export type GuitarraImagenDataAttributes = {
  formats: GuitarraImagenDataAttributesFormats;
  url: string;
};
export type GuitarraImagenDataAttributesFormats = {
  medium: GuitarraImagenDataAttributesFormatsURL;
  small: GuitarraImagenDataAttributesFormatsURL;
  thumbnail: GuitarraImagenDataAttributesFormatsURL;
};
export type GuitarraImagenDataAttributesFormatsURL = {
  url: string;
};
