import { Injectable } from '@angular/core';

export interface Image{
  id: number;
  nombre:string;
  descripcion: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Images {
  
  private images: Image[] = [
    {
      id: 1,
      nombre: 'Astronautas en misiones planetarias',
      descripcion : 'Los astronautas exploran otros planetas para estudiar su geología y buscar signos de vida pasada. Estas cuevas pueden ofrecer protección contra la radiación y condiciones extremas en la superficie planetaria.',
      imagen: './backgraunds/astronautapro.jpg'
    },
    {
      id: 2,
      nombre: 'Nevulosas',
      descripcion: 'Las nevulosas son nubes de gas y polvo en el espacio, donde nacen nuevas estrellas. Pueden tener formas y colores variados, creando paisajes cósmicos impresionantes.',
      imagen: './backgraunds/nevulosa.jpeg'
    },
    {
      id: 3,
      nombre: 'Astros',
      descripcion: 'Los astros son cuerpos celestes que orbitan planetas, reflejando la luz de su estrella. Pueden tener diversas características, como lunas, anillos y atmósferas.',
      imagen: './backgraunds/planetapartido.jpg'
    },
  ]

  constructor(){}

  getImages(): Image[] {
    return this.images;
  }
}