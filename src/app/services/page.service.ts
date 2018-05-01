import { Injectable } from '@angular/core';

export interface PageInformation {
  title: string;
  description: string;
  numberOfImages: number;
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
  bellabestia: PageInformation;
  circe: PageInformation;
  cuentos: PageInformation;
  culpables: PageInformation;
  lavozeslava: PageInformation;
  medeacomic: PageInformation;
  narciso: PageInformation;
  retratos: PageInformation;
}

@Injectable()
export class PageService {
  readonly IMAGE_URL = 'assets/pages/';
  readonly IMAGE_EXTENSIONS: ImageExtensions = {
    JPG: 'jpg'
  };
  private _pageInformation: PagesInformation = {
    bellabestia: {
      title: 'Bella y bestia',
      description: `Proyecto final del curso sobre ilustración infantil impartido por Adolfo Serra.
      Buscando enfatizar el antagonismo de los dos
personajes principales, las ilustraciones están principalmente engamadas en dos colores pastel, azul y rosa. Contrarestando
lo naif de los tonos, el dibujo busca ser nervioso y expresivo sin resultar agresivo, sobretodo en el personaje de la bestia. La
estética general quiere huir de infantilismos ya que el texto que se ilustra es el original de jeanne-marie leprince de beaumont.
“Recordó entonces su sueño y corrió por el jardín hacia el estanque junto al cual lo viera en sueños. Allí encontró a la pobre Bestia
sobre la hierba, perdido el conocimiento, y pensó que había muerto. Sin el menor asomo de horror se dejó caer a su lado, y al sentir
que aún le latía el corazón, tomó un poco de agua del estanque y le roció la cabeza.”`,
      numberOfImages: 4
    },
    circe: {
      title: 'Circe',
      description: `Libro ilustrado incluido en el proyecto final del ciclo “Diseño y edición” que ilustra el relato de Cortazar.
Siempre oscilando entre lo clásico y lo moderno, Cortazar narra con este cuento la desventura de Delia con sus novios, descubriéndose
finalmente como es el verdadero carácter de la que en apariencia es cándida y amable.
La ilustración pretende centrarse en el carácter de la protagonista, por ello es la única figura dibujada a mano, ya que el resto
son fotografías aunadas mediante collage digital. Por otro lado quieren contar la trasformación de este personaje, que si bien
en principio se muestra como pura y dócil, finalmente se la descubre como mujer fatal, por ello las ilustraciones van desde un
tono poético y sereno al principio en tonos azulados y marrones, para concluir con un estilo gráfico rozando lo bizarro donde
predominan el verde o el naranja.
“Yo me acuerdo mal de Delia, pero era fina y rubia, demasiado lenta en sus gestos y usaba vestidos claros con faldas de vuelo libre.
Mario creyó un tiempo que la gracia de Delia y sus vestidos apoyaban el odio de la gente. Se lo dijo a Madre Celeste: “La odian porque
no es chusma como ustedes, como yo mismo””`,
      numberOfImages: 5
    },
    cuentos: {
      title: 'Cuentos',
      description: `Serie de portadillas para un recopilatorio de cuentos clásicos desarrollado durante el curso de
      “Diseño y edición de productos
impresos y multimedia”. El estilo gráfico de todas las portadas sigue una línea manual y expresiva en gamas coloristas.
“Érase una vez un hombre que tenía hermosas casas en la ciudad y en el campo, vajilla de oro y plata, muebles tapizados de brocado
y carrozas completamente doradas; pero, por desgracia, aquel hombre tenía la barba azul: aquello le hacía tan feo y tan terrible,
que no había mujer ni joven que no huyera de él. Una distinguida dama, vecina suya, tenía dos hijas sumamente hermosas. Él le
pidió una en matrimonio, y dejó a su elección que le diera la que quisiera. Ninguna de las dos quería y se lo pasaban la una a la otra,
pues no se sentían capaces de tomar por esposo a un hombre que tuviera la barba azul. Lo que tampoco les gustaba era que se
había casado ya con varias mujeres y no se sabía qué había sido de ellas.” [Barba Azul-Charles Perrault]`,
      numberOfImages: 7
    },
    culpables: {
      title: 'Culpables',
      description: `Serie de retratos a figuras vinculantes en el ámbito de las diferentes disciplinas artísticas.`,
      numberOfImages: 6
    },
    lavozeslava: {
      title: 'La voz es lava',
      description: `Fanzine presentado en la feria de autoedición FUGAZ de Vitoria-Gasteiz en 2015.
      Los dibujos ilustran un texto propio. Son ilustraciones
en blanco y negro donde prima la línea y la sencillez buscando compensar el colorido y barroquismo de las propias
imágenes del texto. El cuento trata sobre el trascurso de una noche en un local y lo que alli busca la protagonista, alternando
narradores en tercera y primera persona.
“Su voz era ceniza. El humo se frotó contra mis parpados. Soy la mentirosa con aspecto de niña destetada. El tango de su boca negra
se esparce entre mis nudillos y quiero escucharte, tus sombras acunan el veneno sonrojado de mis mejillas, solo quiero escucharte,
sosteniendo la pernera de tus venas lacradas. ¿Salimos? De este cabaret enlutado con tus ojos de neón. Quiero sostenerte del brazo
pero estoy en tu casa, una playa debajo y el humo varado sobre mis costillas...Todavía puede cantar otra noche con más arena entre
los ojos. Y espero que olvide que yo soy de allí, que entre mi boca y sus versos se posan mil golondrinas que nos roban el azúcar de
las pestañas.”`,
      numberOfImages: 5
    },
    medeacomic: {
      title: 'Medea cómic',
      description: `Adaptación a cómic de la tragedia de Eurípides para la revista RUMBLE!
En cuatro páginas se narra el destierro de Medea y su venganza. Buscando respetar la puesta en escena de la tragedia griega,
la trama se desarrolla únicamente mostrando los rostros y las manos de los personajes, sin más elementos. Cada personaje
es retratado en una gama de color concreta, aunque siendo el predominante en fondos siempre los estrazas, aludiendo a los
origenes mediterraneos de la protagonista.
“¡Oh Tierra y resplandeciente rayo del Sol! ¡Contemplad, ved esta mujer funesta, antes de que arroje
sobre sus hijos su mano asesina, matadora de su propia carne! ¡Detenla, oh Zeus, arroja de la
casa a la desdichada y asesina Erinis enviada por los dioses vengadores!”`,
      numberOfImages: 4
    },
    narciso: {
      title: 'Narciso',
      description: `Proyecto no editado que ilustra un texto propio.
      Reinterpreta libremente el mito grecolatino de Narciso, que sirve de pretexto
para construir un drama poético entorno a la personalidad, la soledad, el proceso creativo o la perspectiva. En esencia es una
tragedia cuyos personajes expresan la decostrucción del ego, en clave teatral y poética.
Las ilustraciones buscan un equilibrio entre diferentes tonos, desde lo arquetípica y ridículamente poético e infantil, hasta lo
más expresivo, confluyendo así el dibujo a línea con manchas arrastradas en colores limpios y brillantes.
“Yo dije razón de ser, ¿no? Hablamos, juntos. Tú estabas y escarlatas redondas. Tu himen ronco desabrochándome deliciosa amargura.
Hablamos sin razón y gemías gemías ruidoso sin razón. Saboreas tú la luz que chorrea de los sobacos de las negras esbeltas
largas cigüeñas con pico de negra y se caen cayeron lejos ellas las luciérnagas y tú mimando mi tristeza. Aún vacías con tu hedor
las noches. Una escultura azul y sabes que ronco. Respondo con pies respondo con respondo respondo respondo con autoridad a la
lluvia ausente de tus ojos y me odian tus no tus me odian tus entrañas.”`,
      numberOfImages: 7
    },
    retratos: {
      title: 'Retratos',
      description: ``,
      numberOfImages: 3
    }
  };

  constructor() { }

  getPageInformationByName(name: string) {
    return this._pageInformation[name];
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
    for (let i = 1; i <= this._pageInformation[name].numberOfImages; i++) {
      const image: any = this.getImage(this.IMAGE_URL + name + '/' + name + i + '.' + this.IMAGE_EXTENSIONS.JPG);
      images.push(image);
    }
    return images;
  }
}
