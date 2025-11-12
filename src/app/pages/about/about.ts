import { Component } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  equipo = [
    { nombre: 'Neil', rol: 'Astronauta', descripcion: 'Pionero de la exploración espacial, conocido por ser el primero en pisar la Luna.' },
    { nombre: 'Zara', rol: 'Astrobióloga', descripcion: 'Estudia formas de vida en ambientes extremos, buscando pistas de vida extraterrestre.' },
    { nombre: 'Quorax', rol: 'Alienígena', descripcion: 'Ser de otra galaxia con habilidades telepáticas y curiosidad por la cultura humana.' },
    { nombre: 'Dr. Hawking', rol: 'Físico Teórico', descripcion: 'Maestro del tiempo y el espacio, sus teorías sobre los agujeros negros revolucionaron la ciencia.' },
    { nombre: 'Luna', rol: 'Piloto Espacial', descripcion: 'Experta en maniobras orbitales y aterrizajes en terrenos desconocidos.' },
    { nombre: 'Xelion', rol: 'Embajador Galáctico', descripcion: 'Representante de civilizaciones avanzadas que promueve la paz interplanetaria.' },
    { nombre: 'Cassiopeia', rol: 'Ingeniera Cósmica', descripcion: 'Diseña estaciones espaciales y naves para viajes interestelares.' },
    { nombre: 'Draco', rol: 'Cazador de Meteoritos', descripcion: 'Recolector de fragmentos celestes con propiedades únicas para la ciencia.' },
    { nombre: 'Nova', rol: 'Exploradora Estelar', descripcion: 'Recorre sistemas solares en busca de nuevos mundos habitables.' }
  ];
}

