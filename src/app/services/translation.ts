
import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export type Language = 'fr' | 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  currentLang = signal<Language>('fr');

  private translations: Record<Language, Record<string, string>> = {

    fr: {
      'nav.home': 'Accueil',
      'nav.services': 'Services',
      'nav.projects': 'Réalisations',
      'nav.about': 'À propos',
      'nav.contact': 'Parlons de votre projet',

      'hero.tag': 'STUDIO DIGITAL INDÉPENDANT',
      'hero.title1': 'Votre univers.',
      'hero.title2': 'Votre ambition.',
      'hero.title3': 'Notre créativité.',
      'hero.description': 'Nous créons des sites web élégants et des solutions digitales qui donnent à votre activité la visibilité qu’elle mérite.',
      'hero.projects': 'Découvrir nos créations',
      'hero.services': 'Nos services',
      'hero.note': 'Créativité · Technologie · Proximité',
      'hero.card1': 'Une présence digitale',
      'hero.card2': 'à votre image',
      'hero.caption': 'DESIGN WITH PURPOSE',

      'services.label': 'CE QUE NOUS FAISONS',
      'services.title': 'Des idées créatives, des solutions concrètes.',
      'services.description': 'Nous accompagnons les entrepreneurs et les petites entreprises dans leur développement digital, avec des solutions adaptées à leurs besoins.',
      'services.web.title': 'Création de sites web',
      'services.web.description': 'Des sites modernes, élégants et adaptés à tous les écrans pour présenter votre activité et attirer de nouveaux clients.',
      'services.design.title': 'Design & identité digitale',
      'services.design.description': 'Une présence visuelle cohérente, une expérience agréable et un univers qui reflète l’identité de votre entreprise.',
      'services.digital.title': 'Solutions digitales',
      'services.digital.description': 'Des outils numériques et des solutions personnalisées pour simplifier votre quotidien et développer votre activité.',
      'services.discover': 'Découvrir',

      'portfolio.label': 'NOS UNIVERS',
      'portfolio.title': 'Des créations qui donnent envie.',
      'portfolio.description': 'Découvrez quelques univers imaginés pour les professionnels et les petites entreprises.',
      'portfolio.beauty': 'BEAUTÉ & BIEN-ÊTRE',
      'portfolio.bakery': 'ARTISAN & GOURMAND',
      'portfolio.business': 'ENTREPRENEURS',
      'portfolio.demo': 'Projets de démonstration — concepts créatifs fictifs.',

      'about.label': 'QUI SE CACHE DERRIÈRE LE STUDIO ?',
      'about.title1': 'Le digital avec',
      'about.title2': 'une touche humaine.',
      'about.p1': 'Je suis développeuse web et créatrice de solutions digitales. J’aime transformer les idées en projets concrets, en associant technologie, créativité et simplicité.',
      'about.p2': 'J’accompagne les entrepreneurs, les indépendants et les petites entreprises dans la création de leur présence en ligne, avec une approche personnalisée et attentive à chaque détail.',
      'about.button': 'Faisons connaissance',

      'contact.label': 'UN PROJET EN TÊTE ?',
      'contact.title1': 'Créons quelque',
      'contact.title2': 'chose de beau.',
      'contact.description': 'Vous avez une idée, un projet ou simplement besoin de conseils pour votre présence digitale ? Parlons-en.',
      'contact.email': 'Écrivez-moi',
      'contact.form.title': 'Parlons de votre projet',
      'contact.form.description': 'Écrivez-moi, je vous répondrai avec plaisir.',
      'contact.form.name': 'Votre nom',
      'contact.form.name.placeholder': 'Nom et prénom',
      'contact.form.email': 'Votre e-mail',
      'contact.form.email.placeholder': 'Adresse e-mail',
      'contact.form.project': 'Votre projet',
      'contact.form.select': 'Choisissez un service',
      'contact.form.web': 'Création de site web',
      'contact.form.design': 'Design digital',
      'contact.form.digital': 'Solutions digitales',
      'contact.form.other': 'Autre projet',
      'contact.form.message': 'Votre message',
      'contact.form.message.placeholder': 'Parlez-moi de votre projet...',
      'contact.form.send': 'Envoyer mon message',

      'footer.description': 'Création web & solutions digitales.',
      'footer.top': 'Retour en haut',
      'footer.made': 'Créé avec créativité ♡',
      'footer.country': 'FRANCE',
      'footer.remote': 'À DISTANCE'
    },

    es: {
      'nav.home': 'Inicio',
      'nav.services': 'Servicios',
      'nav.projects': 'Proyectos',
      'nav.about': 'Sobre mí',
      'nav.contact': 'Hablemos de tu proyecto',

      'hero.tag': 'ESTUDIO DIGITAL INDEPENDIENTE',
      'hero.title1': 'Tu universo.',
      'hero.title2': 'Tu ambición.',
      'hero.title3': 'Nuestra creatividad.',
      'hero.description': 'Creamos páginas web elegantes y soluciones digitales que dan a tu negocio la visibilidad que merece.',
      'hero.projects': 'Descubre nuestros proyectos',
      'hero.services': 'Nuestros servicios',
      'hero.note': 'Creatividad · Tecnología · Cercanía',
      'hero.card1': 'Una presencia digital',
      'hero.card2': 'a tu medida',
      'hero.caption': 'DISEÑO CON PROPÓSITO',

      'services.label': 'LO QUE HACEMOS',
      'services.title': 'Ideas creativas, soluciones concretas.',
      'services.description': 'Acompañamos a emprendedores y pequeñas empresas en su desarrollo digital con soluciones adaptadas a sus necesidades.',
      'services.web.title': 'Creación de páginas web',
      'services.web.description': 'Páginas modernas, elegantes y adaptadas a todos los dispositivos para presentar tu negocio y atraer nuevos clientes.',
      'services.design.title': 'Diseño e identidad digital',
      'services.design.description': 'Una imagen visual coherente, una experiencia agradable y un universo que refleje la identidad de tu empresa.',
      'services.digital.title': 'Soluciones digitales',
      'services.digital.description': 'Herramientas digitales y soluciones personalizadas para simplificar tu día a día y hacer crecer tu negocio.',
      'services.discover': 'Descubrir',

      'portfolio.label': 'NUESTROS UNIVERSOS',
      'portfolio.title': 'Creaciones que inspiran.',
      'portfolio.description': 'Descubre algunos universos creados para profesionales y pequeñas empresas.',
      'portfolio.beauty': 'BELLEZA Y BIENESTAR',
      'portfolio.bakery': 'ARTESANÍA Y GASTRONOMÍA',
      'portfolio.business': 'EMPRENDEDORES',
      'portfolio.demo': 'Proyectos de demostración — conceptos ficticios.',

      'about.label': '¿QUIÉN ESTÁ DETRÁS DEL ESTUDIO?',
      'about.title1': 'El mundo digital',
      'about.title2': 'con un toque humano.',
      'about.p1': 'Soy desarrolladora web y creadora de soluciones digitales. Me gusta transformar ideas en proyectos concretos combinando tecnología, creatividad y sencillez.',
      'about.p2': 'Acompaño a emprendedores, profesionales independientes y pequeñas empresas en la creación de su presencia online, con un enfoque personalizado y atento a cada detalle.',
      'about.button': 'Conozcámonos',

      'contact.label': '¿TIENES UN PROYECTO?',
      'contact.title1': 'Creemos algo',
      'contact.title2': 'bonito juntas.',
      'contact.description': '¿Tienes una idea, un proyecto o necesitas consejos para tu presencia digital? Hablemos.',
      'contact.email': 'Escríbeme',
      'contact.form.title': 'Hablemos de tu proyecto',
      'contact.form.description': 'Escríbeme y te responderé encantada.',
      'contact.form.name': 'Tu nombre',
      'contact.form.name.placeholder': 'Nombre y apellidos',
      'contact.form.email': 'Tu correo electrónico',
      'contact.form.email.placeholder': 'Dirección de correo',
      'contact.form.project': 'Tu proyecto',
      'contact.form.select': 'Elige un servicio',
      'contact.form.web': 'Creación de página web',
      'contact.form.design': 'Diseño digital',
      'contact.form.digital': 'Soluciones digitales',
      'contact.form.other': 'Otro proyecto',
      'contact.form.message': 'Tu mensaje',
      'contact.form.message.placeholder': 'Cuéntame sobre tu proyecto...',
      'contact.form.send': 'Enviar mi mensaje',

      'footer.description': 'Creación web y soluciones digitales.',
      'footer.top': 'Volver arriba',
      'footer.made': 'Creado con creatividad ♡',
      'footer.country': 'FRANCIA',
      'footer.remote': 'A DISTANCIA'
    },

    en: {
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.about': 'About',
      'nav.contact': 'Let’s discuss your project',

      'hero.tag': 'INDEPENDENT DIGITAL STUDIO',
      'hero.title1': 'Your universe.',
      'hero.title2': 'Your ambition.',
      'hero.title3': 'Our creativity.',
      'hero.description': 'We create elegant websites and digital solutions that give your business the visibility it deserves.',
      'hero.projects': 'Discover our work',
      'hero.services': 'Our services',
      'hero.note': 'Creativity · Technology · Connection',
      'hero.card1': 'A digital presence',
      'hero.card2': 'that reflects you',
      'hero.caption': 'DESIGN WITH PURPOSE',

      'services.label': 'WHAT WE DO',
      'services.title': 'Creative ideas, practical solutions.',
      'services.description': 'We support entrepreneurs and small businesses in their digital growth with solutions tailored to their needs.',
      'services.web.title': 'Website creation',
      'services.web.description': 'Modern, elegant and responsive websites to showcase your business and attract new customers.',
      'services.design.title': 'Design & digital identity',
      'services.design.description': 'A consistent visual presence, an enjoyable experience and a look that reflects your business identity.',
      'services.digital.title': 'Digital solutions',
      'services.digital.description': 'Digital tools and tailored solutions to simplify your day and help your business grow.',
      'services.discover': 'Discover',

      'portfolio.label': 'OUR WORLDS',
      'portfolio.title': 'Creative work that inspires.',
      'portfolio.description': 'Explore concepts created for professionals and small businesses.',
      'portfolio.beauty': 'BEAUTY & WELLNESS',
      'portfolio.bakery': 'ARTISAN & FOOD',
      'portfolio.business': 'ENTREPRENEURS',
      'portfolio.demo': 'Demo projects — fictional creative concepts.',

      'about.label': 'WHO IS BEHIND THE STUDIO?',
      'about.title1': 'Digital, with',
      'about.title2': 'a human touch.',
      'about.p1': 'I am a web developer and digital solutions creator. I love turning ideas into real projects by combining technology, creativity and simplicity.',
      'about.p2': 'I support entrepreneurs, freelancers and small businesses in building their online presence, with a personal approach and attention to every detail.',
      'about.button': 'Let’s connect',

      'contact.label': 'HAVE A PROJECT IN MIND?',
      'contact.title1': 'Let’s create',
      'contact.title2': 'something beautiful.',
      'contact.description': 'Have an idea, a project, or need advice on your digital presence? Let’s talk.',
      'contact.email': 'Email me',
      'contact.form.title': 'Let’s discuss your project',
      'contact.form.description': 'Send me a message. I’ll be happy to reply.',
      'contact.form.name': 'Your name',
      'contact.form.name.placeholder': 'Full name',
      'contact.form.email': 'Your email',
      'contact.form.email.placeholder': 'Email address',
      'contact.form.project': 'Your project',
      'contact.form.select': 'Choose a service',
      'contact.form.web': 'Website creation',
      'contact.form.design': 'Digital design',
      'contact.form.digital': 'Digital solutions',
      'contact.form.other': 'Other project',
      'contact.form.message': 'Your message',
      'contact.form.message.placeholder': 'Tell me about your project...',
      'contact.form.send': 'Send my message',

      'footer.description': 'Web creation & digital solutions.',
      'footer.top': 'Back to top',
      'footer.made': 'Created with creativity ♡',
      'footer.country': 'FRANCE',
      'footer.remote': 'REMOTE'
    }
  };

constructor(
  @Inject(PLATFORM_ID) private platformId: object
) {
  this.detectLanguage();
}
private detectLanguage(): void {

  if (!isPlatformBrowser(this.platformId)) {
    this.currentLang.set('fr');
    return;
  }

  // Si el usuario eligió un idioma anteriormente,
  // respetamos su elección.
  const saved = localStorage.getItem('ruth-language');

  if (saved === 'fr' || saved === 'es' || saved === 'en') {
    this.currentLang.set(saved);
    return;
  }

  // Francés por defecto para nuestra empresa en Francia.
  this.currentLang.set('fr');
}

setLanguage(lang: Language): void {

  this.currentLang.set(lang);

  if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('ruth-language', lang);
  }
}

  t(key: string): string {
    return this.translations[this.currentLang()][key]
      ?? this.translations.fr[key]
      ?? key;
  }
}
