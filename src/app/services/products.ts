import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      nombre: 'Traje Espacial Orion',
      descripcion: 'Protección avanzada para misiones en ambientes extremos y sin gravedad.',
      precio: 1200,
      imagen: '/imgProducts/traje_orion.webp'
    },
    {
      id: 2,
      nombre: 'Rayo Láser de Plasma',
      descripcion: 'Herramienta multifuncional para cortar, defenderse y explorar terrenos alienígenas.',
      precio: 850,
      imagen: '/imgProducts/rayo_laser.jpg'
    },
    {
      id: 3,
      nombre: 'Ración Galáctica',
      descripcion: 'Alimento comprimido con alto valor nutricional para viajes largos por el espacio.',
      precio: 60,
      imagen: '/imgProducts/racion.jpg'
    },
    {
      id: 4,
      nombre: 'Sensor de Vida Extraterrestre',
      descripcion: 'Detecta señales biológicas en planetas desconocidos y estructuras abandonadas.',
      precio: 300,
      imagen: '/imgProducts/sensor.jpg'
    },
    {
      id: 5,
      nombre: 'Módulo de Propulsión Ionica',
      descripcion: 'Sistema de impulso silencioso y eficiente para naves de exploración.',
      precio: 1500,
      imagen: '/imgProducts/propulsor.jpg'
    },
    {
      id: 6,
      nombre: 'Mapa Estelar Holográfico',
      descripcion: 'Proyección interactiva de constelaciones y rutas interplanetarias.',
      precio: 200,
      imagen: '/imgProducts/mapa.webp'
    }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
