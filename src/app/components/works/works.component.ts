import { Component } from '@angular/core';
import { TruncateWordsPipe } from 'src/app/pipes/truncate-words.pipe';

@Component({
  selector: 'app-works',
  standalone: false,
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

  textoLargo: string = `Buscamos un modelador 3D capacitado con experiencia en la creación de modelos 
  listos para animación para nuestra plataforma. Su función implicará optimizar los modelos para montaje 
  y animación, manteniendo al mismo tiempo estándares de alta calidad para nuestros personajes únicos y 
  personalizables. Este puesto se centra en la creación de recursos repologizados de primer nivel en modelos 
  ya existentes que mejoren nuestra experiencia de usuario y satisfagan las demandas duales de la animación y 
  la impresión 3D. Su trabajo afectará directamente la calidad de nuestras miniaturas, garantizando flujos de 
  trabajo fluidos para el montaje y resultados sorprendentes para los clientes. Si le apasiona el modelado 3D, 
  tiene buen ojo para la topología limpia y tiene experiencia con recursos listos para animación, ¡esta es su 
  oportunidad de ser parte de un equipo innovador y creativo!`;

  textoLargo_1: string = `¡Únete al equipo de
            Inkarnate y ayúdanos a llevar los juegos de rol al siguiente nivel!
            Buscamos artistas independientes apasionados y talentosos que puedan
            dar vida a los mundos de fantasía de nuestros clientes con mapas
            artísticos
            de alta calidad. Responsabilidades: Crear recursos artísticos de
            mapas de arriba hacia abajo de alta calidad que coincidan con el
            estilo artístico existente. Crear una variedad de contenido, que
            incluye arquitectura, follaje, terreno,
            objetos orgánicos, criaturas, elementos y más. Colabore y siga las
            instrucciones del artista principal para garantizar resultados
            coherentes. Beneficios: Horarios flexibles. Tarifa por hora
            competitiva.`;

  textoLargo_2: string = `Buscamos un
            escultor senior, altamente profesional y apasionado por su oficio,
            motivado y dispuesto a crear esculturas de personajes y objetos del
            mundo de calidad. Desarrollar juegos MMO es un gran desafío. En
            nuestra opinión, es igualmente gratificante. Queremos encontrar a alguien que comparta
            nuestra pasión por el desafío y la excelencia para disfrutar juntos
            de este camino. Responsabilidades Creación de modelos de entorno,
            accesorios y personajes en alta definición en Zbrush.`;



pipeText: TruncateWordsPipe;

constructor() {
  this.pipeText = new TruncateWordsPipe();
}


}