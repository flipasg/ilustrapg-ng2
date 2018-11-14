import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface PageInformation {
  title: string;
  shortTitle: string;
  introduction: string;
  description: string;
  numberOfImages: number;
  id: string;
  preview: boolean;
  alts: string[];
}
export interface PhotoSwipeImage {
  src: string;
  w: number;
  h: number;
}
export interface ImageExtensions {
  JPG: string;
}

export interface PagesInformation {
  // home: PageInformation;
  bellabestia: PageInformation;
  circe: PageInformation;
  cuentos: PageInformation;
  culpables: PageInformation;
  figuras: PageInformation;
  vozeslava: PageInformation;
  medeacomic: PageInformation;
  narciso: PageInformation;
  retratos: PageInformation;
  voluntadpalabras: PageInformation;
}

@Injectable()
export class PageService {
  readonly IMAGE_URL = 'assets/pages/';
  readonly IMAGE_EXTENSIONS: ImageExtensions = {
    JPG: 'jpg'
  };
  // tslint:disable:max-line-length
  private _pagesInformation: PagesInformation = {
    // home: {
    //   preview: false,
    //   id: 'home',
    //   title: 'Inicio',
    //   shortTitle: 'Inicio',
    //   introduction: `<span></span>`,
    //   description: `<span></span>`,
    //   numberOfImages: 9
    // },
    bellabestia: {
      preview: false,
      id: 'bellabestia',
      title: 'Bella & Bestia',
      shortTitle: 'Bella & Bestia',
      introduction: `<span>"Recordó entonces su sueño y corrió por el jardín hacia el estanque junto al cual lo viera en sueños. Allí encontró a la pobre Bestia sobre la hierba, perdido el conocimiento, y pensó que había muerto. Sin el menor asomo de horror se dejó caer a su lado, y al sentir que aún le latía el corazón, tomó un poco de agua del estanque y le roció la cabeza."</span>`,
      description: `<span>Proyecto final del curso sobre ilustración infantil impartido por Adolfo Serra. Buscando enfatizar el antagonismo de los dos personajes principales, las ilustraciones están principalmente  en dos colores pasteles, azul y rosa.</span>
<span>Contrarrestando lo naif de los tonos, el dibujo, busca ser nervioso y expresivo sin resultar agresivo, sobretodo en el personaje de la bestia. La estética general quiere huir de infantilismos ya que el texto que se ilustra es el original de Jeanne-Marie Leprince de Beaumont. </span>`,
      numberOfImages: 6,
      alts: [
        'Bella y bestia, Patricia Garcia Ramirez, Jeanne-Marie Leprince de Beaumont, portada, diseño gráfico, ilustrapg',
        'Bella y bestia, Patricia Garcia Ramirez, Jeanne-Marie Leprince de Beaumont, ilustrapg, ilustración, rosa',
        'Bella y bestia, Patricia Garcia Ramirez, Jeanne-Marie Leprince de Beaumont, ilustrapg, ilustración, personaje',
        'Bella y bestia, Patricia Garcia Ramirez, Jeanne-Marie Leprince de Beaumont, ilustrapg, ilustración, doblepagina',
        'Bella y bestia, Patricia Garcia Ramirez, Jeanne-Marie Leprince de Beaumont, ilustrapg, ilustración, estatua.',
        'Bella y bestia, Patricia Garcia Ramirez, Jeanne-Marie Leprince de Beaumont, ilustrapg, ilustración, doble página'
      ]
    },
    circe: {
      preview: false,
      id: 'circe',
      title: 'Circe',
      shortTitle: 'Circe',
      introduction: `"<span>Yo me acuerdo mal de Delia, pero era fina y rubia, demasiado lenta en sus gestos y usaba vestidos claros con faldas de vuelo libre. Mario creyó un tiempo que la gracia de Delia y sus vestidos apoyaban el odio de la gente. Se lo dijo a Madre Celeste: La odian porque no es chusma como ustedes, como yo mismo."</span>`,
      description: `<span>Libro ilustrado incluido en el proyecto final del ciclo "Diseño y edición" que ilustra el relato de Cortázar. Siempre oscilando entre lo clásico y lo moderno, Cortázar narra con este cuento la desventura de Delia con sus novios, descubriéndose finalmente como es el verdadero carácter de la que en apariencia es cándida y amable.</span>
<br><span>La ilustración pretende centrarse en el carácter de la protagonista, por ello, es la única figura dibujada a mano, ya que el resto son fotografías aunadas mediante collage digital. Por otro lado, quieren contar la trasformación de este personaje, que si bien en principio se muestra como pura y dócil, finalmente se la descubre como mujer fatal, por ello, las ilustraciones van desde un tono poético y sereno, al principio, en tonos azulados y marrones, para concluir con un estilo gráfico rozando lo bizarro donde predominan el verde o el naranja.</span>`,
      numberOfImages: 6,
      alts: [
        'Circe, Patricia Garcia Ramirez, Julio Cortázar, portada, diseño gráfico, ilustrapg',
        'Circe, Patricia Garcia Ramirez, Julio Cortázar,ilustrapg, ilustración, mujer, gato, collage',
        'Circe, Patricia Garcia Ramirez, Julio Cortázar,ilustrapg, ilustración, beso, collage',
        'Circe, Patricia Garcia Ramirez, Julio Cortázar,ilustrapg, ilustración, doble página, collage',
        'Circe, Patricia Garcia Ramirez, Julio Cortázar,ilustrapg, ilustración, mano, luna, collage',
        'Circe, Patricia Garcia Ramirez, Julio Cortázar,ilustrapg, ilustración, calavera, peces, collage'
      ]
    },
    cuentos: {
      preview: false,
      id: 'cuentos',
      title: 'Cuentos clásicos',
      shortTitle: 'Cuentos clásicos',
      introduction: `<span>"Érase una vez un hombre que tenía hermosas casas en la ciudad y en el campo, vajilla de oro y plata, muebles tapizados de brocado y carrozas completamente doradas; pero, por desgracia, aquel hombre tenía la barba azul: aquello le hacía tan feo y tan terrible, que no había mujer ni joven que no huyera de él. Una distinguida dama, vecina suya, tenía dos hijas sumamente hermosas. Él le pidió una en matrimonio, y dejó a su elección que le diera la que quisiera. Ninguna de las dos quería y se lo pasaban la una a la otra, pues no se sentían capaces de tomar por esposo a un hombre que tuviera la barba azul. Lo que tampoco les gustaba era que se había casado ya con varias mujeres y no se sabía qué había sido de ellas." <br>[Barba Azul-Charles Perrault]</span>`,
      description: `<span>Serie de portadillas para un recopilatorio de cuentos clásicos desarrollado durante el curso de Diseño y edición de productos impresos y multimedia. El estilo gráfico de todas las portadas sigue una línea manual y expresiva en gamas coloristas. </span>`,
      numberOfImages: 8,
      alts: [
        'cuentos clásicos, Pulgarcito, Perrault, Patricia Garcia Ramirez, ilustrapg, portadilla',
        'cuentos clásicos, Peter Pan, JM Barrie, Patricia Garcia Ramirez, ilustrapg, portadilla',
        'cuentos clásicos, El gato con botas, Perrault, Patricia Garcia Ramirez, ilustrapg, portadilla',
        'cuentos clásicos, Caperucita Roja, Perrault, Patricia Garcia Ramirez, ilustrapg, portadilla',
        'cuentos clásicos, Barba azul, Perrault, Patricia Garcia Ramirez, ilustrapg, portadilla',
        'cuentos clásicos, El flautista de Hamelín, Hermanos Grimm, Patricia Garcia Ramirez, ilustrapg, portadilla',
        'cuentos clásicos, El soldadito de plomo, HC Andersen, Patricia Garcia Ramirez, ilustrapg, portadilla',
        'cuentos clásicos, Los músicos de Bremen, Hermanos Grimm, Patricia Garcia Ramirez, ilustrapg, portadilla'
      ]
    },
    culpables: {
      preview: false,
      id: 'culpables',
      title: 'Culpables',
      shortTitle: 'Culpables',
      introduction: `<span>"Make a grave for the unknown soldier, nestled in your hollow shoulder" <br>[Jim Morrison]</span>`,
      description: `<span>Serie de retratos a figuras vinculantes en el ámbito de las diferentes disciplinas artísticas.</span>`,
      numberOfImages: 6,
      alts: [
        'Culpables, Patricia Garcia Ramirez, ilustrapg, retrato, dibujo, Arthur Rimbaud',
        'Culpables, Patricia Garcia Ramirez, ilustrapg, retrato, dibujo, Jim Morrison',
        'Culpables, Patricia Garcia Ramirez, ilustrapg, retrato, dibujo, Egon Schiele',
        'Culpables, Patricia Garcia Ramirez, ilustrapg, retrato, dibujo, Charles Baudelaire',
        'Culpables, Patricia Garcia Ramirez, ilustrapg, retrato, dibujo, Alejandra Pizarnik',
        'Culpables, Patricia Garcia Ramirez, ilustrapg, retrato, dibujo, Francis Bacon'
      ]
    },
    figuras: {
      preview: false,
      id: 'figuras',
      title: 'Figuras',
      shortTitle: 'Figuras',
      introduction: `<span>"Encuentra carne sobre los huesos" <br>[Dylan Thomas]</span>`,
      description: `<span>Serie de veintidós dibujos a pastel sobre papel kraft DIN A4 realizados durante las sesiones de dibujo con modelo vivo. Son apuntes rápidos de entre 5-10 minutos.</span>`,
      numberOfImages: 12,
      alts: [
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza',
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza',
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza',
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza',
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza',
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza',
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza',
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza',
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza',
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza',
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza',
        'Figuras, Patricia Garcia Ramirez, ilustrapg, dibujo al natural, modelo vivo, pastel, estraza'
      ]
    },
    medeacomic: {
      preview: false,
      id: 'medeacomic',
      title: 'Medea cómic',
      shortTitle: 'Medea cómic',
      introduction: `<span>"¡Oh Tierra y resplandeciente rayo del Sol! ¡Contemplad, ved esta mujer funesta, antes de que arroje sobre sus hijos su mano asesina, matadora de su propia carne! ¡Detenla, oh Zeus, arroja de la casa a la desdichada y asesina Erinis enviada por los dioses vengadores!" </span>`,
      description: `<span>Adaptación a cómic de la tragedia de Eurípides para la revista RUMBLE! En cuatro páginas se narra el destierro de Medea y su venganza.</span>
<span>Buscando respetar la puesta en escena de la tragedia griega, la trama se desarrolla únicamente mostrando los rostros y las manos de los personajes, sin más elementos. Cada personaje es retratado en una gama de color concreta, aunque siendo el predominante en fondos siempre las estrazas, aludiendo a los orígenes mediterráneos de la protagonista. </span>`,
      numberOfImages: 4,
      alts: [
        'Medea cómic, Eurípides, tragedia, Patricia Garcia Ramirez, ilustrapg, página 1',
        'Medea cómic, Eurípides, tragedia, Patricia Garcia Ramirez, ilustrapg, página 2',
        'Medea cómic, Eurípides, tragedia, Patricia Garcia Ramirez, ilustrapg, página 3',
        'Medea cómic, Eurípides, tragedia, Patricia Garcia Ramirez, ilustrapg, página 4'
      ]
    },
    narciso: {
      preview: false,
      id: 'narciso',
      title: 'Deshojó la sombra y su narciso',
      shortTitle: 'Narciso',
      introduction: `<span>"Yo dije razón de ser, ¿no? Hablamos, juntos. Tú estabas y escarlatas redondas. Tu himen ronco desabrochándome, deliciosa amargura. Hablamos sin razón y gemías, gemías ruidoso sin razón. Saboreas tú la luz que chorrea de los sobacos de las negras, esbeltas, largas cigüeñas con pico de negra y se caen, cayeron lejos ellas, las luciérnagas y tú mimando mi tristeza. Aún vacías con tu hedor las noches. Una escultura azul y sabes que ronco. Respondo con pies, respondo con respondo; respondo, respondo con autoridad a la lluvia ausente de tus ojos y me odian tus no, tus me odian, tus entrañas."</span>`,
      description: `<span>Proyecto no editado que ilustra un texto propio. Reinterpreta libremente el mito grecolatino de Narciso, que sirve de pretexto para construir un drama poético entorno a la personalidad, la soledad, el proceso creativo y/o la perspectiva. En esencia, es una tragedia cuyos personajes expresan la deconstrucción del ego en clave teatral y poética.</span>
<span>Las ilustraciones buscan un equilibrio entre diferentes tonos, desde lo arquetípica y ridículamente poético e infantil, hasta lo más expresivo, confluyendo así el dibujo a línea con manchas arrastradas en colores limpios y brillantes</span>`,
      numberOfImages: 8,
      alts: [
        'Deshojó la sombra y su narciso, Patricia Garcia Ramirez, ilustrapg, portada, diseño gráfico, teatro',
        'Deshojó la sombra y su narciso, Patricia Garcia Ramirez, ilustrapg, ilustración, doble página, gacela',
        'Deshojó la sombra y su narciso, Patricia Garcia Ramirez, ilustrapg, ilustración, texto, esfinge',
        'Deshojó la sombra y su narciso, Patricia Garcia Ramirez, ilustrapg, ilustración, doble página, figura',
        'Deshojó la sombra y su narciso, Patricia Garcia Ramirez, ilustrapg, ilustración, texto, dibujo',
        'Deshojó la sombra y su narciso, Patricia Garcia Ramirez, ilustrapg, ilustración, doble página, ancla',
        'Deshojó la sombra y su narciso, Patricia Garcia Ramirez, ilustrapg, ilustración, sol, doble página',
        'Deshojó la sombra y su narciso, Patricia Garcia Ramirez, ilustrapg, ilustración texto, puente',
        'Deshojó la sombra y su narciso, Patricia Garcia Ramirez, ilustrapg, ilustración, rata, final'
      ]
    },
    retratos: {
      preview: false,
      id: 'retratos',
      title: 'Retratos personales',
      shortTitle: 'Retratos personales',
      introduction: '<span>"Mis retratos dicen más de mí que de la gente a la que fotografío" <br>[Richard Avedon]</span>',
      description: `<span>Retratos por encargo en pequeño formato, realizados en técnica mixta.</span>`,
      numberOfImages: 7,
      alts: [
        'Retratros personales, Patricia Garcia Ramirez, ilustrapg, collage, Rosi, mujer',
        'Retratros personales, Patricia Garcia Ramirez, ilustrapg, collage, Raúl, hombre',
        'Retratros personales, Patricia Garcia Ramirez, ilustrapg, collage, Jon, hombre',
        'Retratros personales, Patricia Garcia Ramirez, ilustrapg, collage, Evelyn, niña',
        'Retratros personales, Patricia Garcia Ramirez, ilustrapg, collage, Killian, niño',
        'Retratros personales, Patricia Garcia Ramirez, ilustrapg, collage, autorretrato, Patri',
        'Retratros personales, Patricia Garcia Ramirez, ilustrapg, collage, Saúl, niño'
      ]
    },
    voluntadpalabras: {
      preview: false,
      id: 'voluntadpalabras',
      title: 'La voluntad de las palabras',
      shortTitle: 'La voluntad de las palabras',
      introduction: `<span>"Esta recopilación de relatos es la expresión más viva de la escritura creativa. Donde la voluntad de las palabras es guiada por la es­pontaneidad de la pluma. Donde la timidez o la dejadez se han convertido en la excusa perfecta para que un grupo de desconocidos compartan todos los jueves una misma pa­sión. Donde una sala anodina se transforma en mundos inventados, o no. Donde El Pilar ríe y llora."  <br>[Rosa María Cortés Barrena]</span>`,
      description: `<span>Libro recopilatorio de relatos del recital "La voluntad de las palabras" celebrado el 21 de marzo de 2018 a manos del grupo de escritura creativa de El Pilar. </span>
<span>Acentuando el carácter creativo del grupo, tanto el diseño de la portada y contraportada son completamente manuales. Sin embargo, el interior adquiere un tono más formal y literario en el empleo de la tipografía, aunque lo acompañan exporádicamente pequeños dibujos a lápiz que sirven de nexo con la cubierta.</span>`,
      numberOfImages: 6,
      alts: [
        'La voluntad de las palabras, Patricia Garcia Ramirez, ilustrapg, libro recopilatorio, portada, diseño gráfico',
        'La voluntad de las palabras, Patricia Garcia Ramirez, ilustrapg, libro recopilatorio, índice, diseño gráfico',
        'La voluntad de las palabras, Patricia Garcia Ramirez, ilustrapg, libro recopilatorio, interior, diseño gráfico.',
        'La voluntad de las palabras, Patricia Garcia Ramirez, ilustrapg, libro recopilatorio, interior, diseño gráfico',
        'La voluntad de las palabras, Patricia Garcia Ramirez, ilustrapg, libro recopilatorio, contraportada, diseño gráfico',
        'La voluntad de las palabras, Patricia Garcia Ramirez, ilustrapg, libro recopilatorio, cartel, interior, diseño gráfico'
      ]
    },
    vozeslava: {
      preview: false,
      id: 'vozeslava',
      title: 'La voz eslava',
      shortTitle: 'La voz eslava',
      introduction: `<span>"Su voz era ceniza. El humo se frotó contra mis parpados. Soy la mentirosa con aspecto de niña destetada. El tango de su boca negra se esparce entre mis nudillos y quiero escucharte, tus sombras acunan el veneno sonrojado de mis mejillas, solo quiero escucharte, sosteniendo la pernera de tus venas lacradas. ¿Salimos? De este cabaret enlutado con tus ojos de neón. Quiero sostenerte del brazo pero estoy en tu casa, una playa debajo y el humo varado sobre mis costillas...Todavía puede cantar otra noche con más arena entre los ojos. Y espero que olvide que yo soy de allí, que entre mi boca y sus versos se posan mil golondrinas que nos roban el azúcar de las pestañas." </span>`,
      description: `<span>Fanzine presentado en la feria de autoedición FUGAZ de Vitoria-Gasteiz en 2015. Los dibujos ilustran un texto propio.</span>
<span>Son ilustraciones en blanco y negro donde prima la línea y la sencillez buscando compensar el colorido y barroquismo de las propias imágenes del texto. El cuento trata sobre el trascurso de una noche en un local y lo que allí busca la protagonista, alternando narradores en tercera y primera persona.</span>`,
      numberOfImages: 6,
      alts: [
        'La voz eslava, Patricia Garcia Ramirez, ilustrapg, fanzine, ilustración, blanco y negro, portada',
        'La voz eslava, Patricia Garcia Ramirez, ilustrapg, fanzine, ilustración, blanco y negro, cuervo',
        'La voz eslava, Patricia Garcia Ramirez, ilustrapg, fanzine, ilustración, blanco y negro, página interior',
        'La voz eslava, Patricia Garcia Ramirez, ilustrapg, fanzine, ilustración, blanco y negro, doble página',
        'La voz eslava, Patricia Garcia Ramirez, ilustrapg, fanzine, ilustración, blanco y negro, texto',
        'La voz eslava, Patricia Garcia Ramirez, ilustrapg, fanzine, ilustración, blanco y negro, doble página'
      ]
    }
  };
  _activePage = new Subject<any>();

  constructor() {
  }

  setFirstPage() {
    this._activePage.next(this.getPageInformationByName('bellabestia'));
  }

  setActivePage(activePageName) {
    this._activePage.next(this.getPageInformationByName(activePageName));
  }

  setContactActive() {
    this._activePage.next(this.getContactInformation());
  }

  getActivePage(): Subject<PageInformation> {
    return this._activePage;
  }

  getPagesInformation(): PagesInformation {
    return this._pagesInformation;
  }
  getPageInformationByName(name: string): PageInformation {
    return this._pagesInformation[name];
  }

  getImage(imgSrc) {
    const newImg = new Image();

    newImg.onload = function () {
      newImg['h'] = newImg.height;
      newImg['w'] = newImg.width;
    };

    newImg.src = imgSrc;
    return newImg;
  }

  getPageImagesByName(name: string) {
    const images: any[] = [];
    for (let i = 1; i <= this._pagesInformation[name].numberOfImages; i++) {
      const image: any = this.getImage('/' + this.IMAGE_URL + name + '/' + name + i + '.' + this.IMAGE_EXTENSIONS.JPG);
      if (!!image) {
        let altIndex = i - 1;
        images.push({
          alt: this._pagesInformation[name].alts[altIndex],
          src: image
        });

      }
    }
    return images;
  }

  getContactInformation() {
    return {
      preview: false,
      id: 'contact',
      title: 'Contacto',
      shortTitle: 'Contacto',
      introduction: `<span>Soy Patricia Garcia Ramirez, ilustradora, artista plástica y diseñadora gráfica que a veces también escribe poesía. Como ilustradora y dibujante me formé en la Escuela de Arte y Superior de Diseño y en las clases de modelo vivo de la Escuela de Artes y Oficios de Gasteiz. También estudié Diseño y edición de productos impresos y multimedia y el itinerario de Diseño Gráfico del CETIC. Acudo asiduamente a cursos y talleres como Espejos y metamorfosis impartido por el ilustrador Pablo Auladell, o Introducción a la ilustración infantil de Adolfo Serra.</span>`,
      description: `<span>Como muralista estuve trabajando en la empresa Werckmaister tanto en el proyecto participativo IMVG, como en otros proyectos muralisticos y de mosaico, destacando la instalación artística realizada para Arcos de Quejana.  Además en 2017 realicé prácticas de diseño gráfico en DDM, empresa con sede en Barcelona que se dedica al diseño de moda deportiva para diferentes marcas. En 2018 estuve de becaria en Ediciones Beta III Milenio, editorial bilbaína especializada en ensayo sobre la guerra civil en el País Vasco, donde realicé tareas de maquetación, edición y corrección de libros.</span>
      <br><span>He publicado tanto ilustraciones como textos en diferentes revistas y fanzines, como Klof, Cíclope, Brainstorm o Rumble! , además de colaborar en los libros Bilbao, una ciudad del pecado de Kazeta y BAO, y la antología poética VerS.O.S. También autoedité un cuento ilustrado propio en formato fanzine, La voz eslava, que presenté en la feria de autoedición “FugaZ” de 2016. También pertenezco al colectivo de autoedición y creación artística Mero Muro.</span>
      <br><span>He participado en diferentes exposiciones colectivas, como la que se llevó a cabo en Hondarribia en honor a las mujeres artistas o Liquido en el espacio GeroArte. También junto al colectivo ARLA en CC Montehermoso y desde el taller de la EAO expusimos en la sala Luis de Ajuria en 2016 y al año siguiente desarrollamos la muestra Veladas sombras del ser. En mayo de 2017 se llevó a cabo la exposición benéfica de Manos Unidas en la sala de la diputación de Bilbao donde colaboré con una obra. De forma individual expuse una serie de ilustraciones en La Madriguera Comics.</span>
      <br><span>También he colaborado como dibujante en el proyecto Los Padres del artistas Abel Azcona, que se filmó para el documental Serás hombre de Isabel Ocampo. Fui seleccionada para participar en la primera edición en Bilbao del evento de dibujo en vivo Secret Walls X  y para participar en el mercado de dibujo e ilustración Mazoka en el museo Montehermoso en las ediciones de 2015 y 2016.</span>`
    };
  }
}
