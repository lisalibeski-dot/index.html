import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  ChevronRight, 
  Award, 
  BookOpen, 
  Briefcase, 
  Code, 
  Globe, 
  Plane, 
  Dumbbell,
  ArrowRight,
  Target,
  Star,
  Zap,
  Phone
} from 'lucide-react';
import { motion } from 'motion/react';

const LisaLibeskiPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "Stagiaire en Community Manager",
      company: "Sekaop, Toulouse",
      period: "05.2025 - 07.2025",
      description: "Création et programmation de contenus visuels et rédactionnels adaptés à chaque plateforme pour renforcer l'image de marque et l'engagement de la communauté. Interaction quotidienne avec les abonnés (réponses aux commentaires et messages privés) afin de fidéliser et de développer la communauté. Suivi et analyse des performances des publications (taux d'engagement, portée, évolution de l'audience) grâce à des outils de statistiques et de reporting. Participation à l'élaboration de la stratégie éditoriale et proposition d'idées de campagnes pour accroître la visibilité. Veille concurrentielle et sectorielle afin d'identifier les tendances et d'optimiser le contenu.",
      skills: ["Stratégie éditoriale", "Adobe Suite", "Analyse de données", "Veille concurrentielle"]
    },
    {
      title: "Employé Polyvalent",
      company: "McDonald's, Toulouse",
      period: "05.2025 - 08.2025",
      description: "Accueil et accompagnement des clients afin de garantir une expérience positive et rapide. Préparation et assemblage des commandes en respectant les standards de qualité et les délais impartis. Application rigoureuse des normes d'hygiène et de sécurité alimentaire (HACCP). Contribution à la fluidité du service par la gestion des files d'attente et la coordination avec l'équipe. Soutien à la formation et à l'intégration de nouveaux collaborateurs, en partageant les bonnes pratiques. Développement de compétences en gestion du stress et en travail d'équipe dans un environnement dynamique et exigeant.",
      skills: ["Relation client", "Gestion du stress", "HACCP", "Travail d'équipe"]
    },
    {
      title: "Baby-Sitting",
      company: "Kinougarde, Paris",
      period: "09.2025 - 01.2026",
      description: "Garde de Maya (4 ans) et Haroun (7 ans) pendant 5 mois. Accompagnement en voiture de l'école jusqu'au parc pour activités sportives. Prise du goûter et aide aux devoirs. Garde de nuit. Acquisition de compétences en matière de sécurité des enfants, la créativité pour les activités ludiques et éducatives, la communication avec les enfants et les parents, la gestion des routines (repas, siestes, devoirs, etc.)",
      skills: ["Responsabilité", "Pédagogie", "Organisation", "Créativité"]
    }
  ];

  const education = [
    {
      degree: "TEMA: Tech et Management",
      school: "NEOMA Business School, Reims",
      period: "09.2024 - 06.2029",
      description: "Parcours au sein d'une école de commerce alliant les dimensions de technologie et d'entrepreneuriat. Formation orientée vers le management, la stratégie, l'innovation et la gestion de projets, avec une approche très concrète et internationale. Slogan du programme: 'Learning by doing'."
    },
    {
      degree: "Ingénierie Marketing Digital",
      school: "Efrei, Paris",
      period: "09.2025 - 01.2026",
      description: "Semestre d'immersion au sein d'une école d'ingénieurs, axé sur les liens entre technologie et marketing digital. Formation orientée vers la compréhension des enjeux techniques du numérique, la gestion de projets digitaux et l'application concrète des outils marketing dans un environnement technologique."
    }
  ];

  const skills = {
    "Commerce & Relation": ["Relation client", "Vente", "Gestion du temps", "Négociation", "Esprit de service"],
    "Communication": ["Stratégie digitale", "Création de contenu", "Engagement communauté", "Analyse de données"],
    "Informatique": ["Pack Office", "Suite Adobe (InDesign, Photoshop, Illustrator)", "HTML / CSS"],
    "Langues": ["Français (Maternel)", "Anglais (B1)", "Chinois (A2)"]
  };

  const interests = [
    { icon: <Dumbbell className="w-5 h-5" />, label: "Gymnastique Rythmique (7 ans, 3e France 2022)" },
    { icon: <Plane className="w-5 h-5" />, label: "Voyages (Japon, NY, Mexique, Europe...)" },
    { icon: <Award className="w-5 h-5" />, label: "Tennis & Musculation" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-[#004797] selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#004797]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#004797]/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#004797]/20 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[#004797] rounded-xl flex items-center justify-center text-white text-sm shadow-lg shadow-[#004797]/30">LL</div>
            <span className="hidden sm:inline">LISA LIBESKI</span>
          </motion.div>
          <div className="hidden lg:flex gap-10 text-xs font-black uppercase tracking-[0.2em]">
            {['Expériences', 'Formations', 'Compétences', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#004797] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#004797] transition-all group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <motion.a 
              href="/cv_libeski_lisa.pdf" 
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex bg-white text-[#004797] border-2 border-[#004797] px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest shadow-sm items-center gap-2"
            >
              Voir CV PDF
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/lisa-libeski-8b1561328/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#004797] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-[#004797]/20 flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" /> <span className="hidden md:inline">LinkedIn</span>
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex flex-wrap items-center gap-3 px-4 md:px-6 py-2 md:py-3 mb-8 md:mb-10 rounded-2xl bg-[#004797]/15 text-[#004797] text-[10px] font-black uppercase tracking-[0.3em] border-2 border-[#004797]/20 shadow-sm">
              <Zap className="w-4 h-4 fill-current" /> Recherche de Stage • 6 Mois • Juin
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 md:mb-10">
              MARKETING <br className="hidden sm:block" />
              <span className="text-[#004797] drop-shadow-sm">PROJET & COMMERCE</span>
            </h1>
            <div className="flex items-start gap-6 md:gap-8 mb-10 md:mb-12">
              <div className="w-2 h-24 md:h-32 bg-gradient-to-b from-[#004797] to-transparent rounded-full hidden md:block"></div>
              <p className="text-lg md:text-2xl text-black/80 max-w-2xl leading-relaxed font-bold">
                Étudiante à NEOMA Business School, disponible à partir de <span className="text-[#004797]">Juin</span>. Sérieuse et dynamique, je souhaite mettre mon sens de la relation client au service de vos défis.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a href="#contact" className="bg-black text-white px-8 md:px-12 py-4 md:py-6 rounded-[2rem] font-black text-base md:text-lg hover:bg-[#004797] transition-all flex items-center gap-4 shadow-2xl shadow-black/20 group">
                Me contacter <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="/cv_libeski_lisa.pdf" target="_blank" rel="noreferrer" className="sm:hidden bg-white text-[#004797] border-2 border-[#004797] px-8 py-4 rounded-[2rem] font-black text-base flex items-center gap-4">
                CV PDF
              </a>
              <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-[2rem] border-2 border-black/5 shadow-sm">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#004797]/10 rounded-full flex items-center justify-center text-[#004797]">
                  <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                </div>
                <p className="text-xs md:text-sm font-black uppercase tracking-widest">19 Ans • Toulouse</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="lg:col-span-5 relative mt-12 lg:mt-0"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#004797]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative aspect-[4/5] max-w-[320px] md:max-w-[380px] mx-auto lg:ml-auto rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-[6px] md:border-[10px] border-white shadow-2xl group">
              <img 
                src="/photo.jpeg" 
                alt="Lisa Libeski"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop";
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004797]/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 p-6 md:p-8 bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
                <p className="text-white font-black text-lg md:text-xl tracking-tight">LISA LIBESKI</p>
                <p className="text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">NEOMA Business School</p>
              </div>
            </div>
            <div className="absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 bg-white p-3 md:p-4 rounded-[1.25rem] md:rounded-[1.5rem] shadow-2xl border border-black/5 flex items-center gap-2 md:gap-3 transform hover:scale-105 transition-transform cursor-default">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#004797] to-[#0066CC] rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#004797]/30">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <p className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-black/30 leading-none mb-1">Basée à</p>
                <p className="text-xs md:text-sm font-black tracking-tight leading-none">Toulouse, FR</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="expériences" className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-10">
            <div className="relative">
              <span className="absolute -top-12 left-0 text-[80px] md:text-[160px] font-black text-[#004797]/5 select-none tracking-tighter">SUCCESS</span>
              <h2 className="text-sm font-black uppercase tracking-[0.5em] text-[#004797] mb-4 md:mb-6 relative z-10">Mon Parcours</h2>
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter relative z-10">EXPÉRIENCES</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#004797]/10 text-[#004797] px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black text-xs md:text-sm border-2 border-[#004797]/20">
                COMMERCE
              </div>
              <div className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black text-xs md:text-sm">
                3 RÉALISATIONS
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative bg-[#F8FAFC] p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] border-2 border-black/5 hover:border-[#004797]/40 transition-all flex flex-col lg:flex-row gap-10 md:gap-16 items-start overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#004797]/10"
              >
                <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-[#004797]/5 rounded-bl-[5rem] md:rounded-bl-[8rem] group-hover:bg-[#004797]/15 transition-colors"></div>
                <div className="lg:w-1/4">
                  <div className="inline-block px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-black text-white text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 md:mb-6 shadow-lg">
                    {exp.period}
                  </div>
                  <h4 className="text-xl md:text-3xl font-black tracking-tighter leading-none">{exp.company}</h4>
                </div>
                <div className="lg:w-2/4">
                  <h5 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 group-hover:text-[#004797] transition-colors leading-none tracking-tight">{exp.title}</h5>
                  <p className="text-base md:text-xl text-black/70 leading-relaxed mb-8 md:mb-10 font-bold italic border-l-4 border-[#004797]/30 pl-6 md:pl-8">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-4 md:px-5 py-2 md:py-2.5 bg-white border-2 border-black/5 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/50 shadow-sm group-hover:border-[#004797]/20 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/4 flex justify-end">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border-2 border-[#004797]/10 flex items-center justify-center group-hover:bg-[#004797] group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-xl">
                    <Briefcase className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section className="py-24 md:py-40 bg-[#F8FAFC] relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-40">
          {/* Formations */}
          <div id="formations">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-[#004797] mb-12 md:mb-20">Académique</h2>
            <div className="space-y-16 md:space-y-24">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12 md:pl-16 border-l-4 md:border-l-8 border-[#004797]/10">
                  <div className="absolute top-0 -left-[10px] md:-left-[14px] w-4 md:w-6 h-4 md:h-6 rounded-full bg-[#004797] border-4 border-white shadow-xl shadow-[#004797]/30" />
                  <span className="text-[10px] md:text-sm font-black text-[#004797] uppercase tracking-[0.3em]">{edu.period}</span>
                  <h4 className="text-2xl md:text-4xl font-black mt-3 md:mt-4 mb-2 md:mb-3 tracking-tighter leading-none">{edu.degree}</h4>
                  <p className="text-lg md:text-2xl font-bold text-black/30 mb-6 md:mb-8">{edu.school}</p>
                  <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl shadow-black/5 border border-black/5 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004797] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-black/70 leading-relaxed font-bold text-base md:text-lg">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences */}
          <div id="compétences">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-[#004797] mb-12 md:mb-20">Savoir-faire</h2>
            <div className="grid grid-cols-1 gap-8 md:gap-10">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10 }}
                  className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl shadow-black/5 border-2 border-black/5"
                >
                  <h4 className="text-xl md:text-2xl font-black mb-8 md:mb-10 flex items-center gap-4 md:gap-6 text-[#004797]">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#004797]/10 flex items-center justify-center shadow-inner">
                      {category === "Commerce & Relation" && <Target className="w-6 h-6 md:w-7 md:h-7" />}
                      {category === "Communication" && <Globe className="w-6 h-6 md:w-7 md:h-7" />}
                      {category === "Informatique" && <Code className="w-6 h-6 md:w-7 md:h-7" />}
                      {category === "Langues" && <BookOpen className="w-6 h-6 md:w-7 md:h-7" />}
                    </div>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {items.map(item => (
                      <div key={item} className="px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-[#F8FAFC] border-2 border-black/5 text-[10px] md:text-sm font-black uppercase tracking-widest hover:bg-[#004797] hover:text-white hover:border-[#004797] transition-all cursor-default shadow-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-24 md:py-40 bg-[#004797] text-white rounded-[3rem] md:rounded-[6rem] mx-4 md:mx-6 mb-24 md:mb-40 overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(0,71,151,0.4)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white rounded-full blur-[160px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-black rounded-full blur-[160px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.6em] text-white/50 mb-6 md:mb-8">Lifestyle</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">PASSIONS & INTÉRÊTS</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            {interests.map((interest, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -20, scale: 1.05 }}
                className="flex flex-col items-center text-center gap-8 md:gap-10 p-10 md:p-12 rounded-[3rem] md:rounded-[4rem] bg-white/10 backdrop-blur-2xl border-2 border-white/10 shadow-2xl"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-[2rem] md:rounded-[3rem] bg-white text-[#004797] flex items-center justify-center shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform">
                  {interest.icon}
                </div>
                <p className="text-xl md:text-2xl font-black leading-tight tracking-tight">
                  {interest.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 px-6 bg-white rounded-t-[4rem] md:rounded-t-[8rem] relative z-10 shadow-[0_-40px_100px_-20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 md:px-8 py-2 md:py-3 rounded-full bg-[#004797]/10 text-[#004797] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-12 md:mb-16 border-2 border-[#004797]/10">
            <Zap className="w-4 h-4 fill-current" /> Disponibilité Juin
          </div>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-16 md:mb-24 leading-[0.8] uppercase">
            TRAVAILLONS <br />
            <span className="text-[#004797]">ENSEMBLE</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto mb-24 md:mb-40">
            <a href="mailto:lisa.libeski.24@neoma-bs.com" className="group p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-[#F8FAFC] border-4 border-black/5 hover:border-[#004797] transition-all text-left flex items-center gap-6 md:gap-10 shadow-xl shadow-black/5">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] bg-black text-white flex items-center justify-center group-hover:bg-[#004797] group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                <Mail className="w-7 h-7 md:w-10 md:h-10" />
              </div>
              <div>
                <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-1 md:mb-2">Email</p>
                <p className="text-lg md:text-2xl font-black tracking-tight break-all">lisa.libeski.24@neoma-bs.com</p>
              </div>
            </a>
            <a href="tel:0783673749" className="group p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-[#F8FAFC] border-4 border-black/5 hover:border-[#004797] transition-all text-left flex items-center gap-6 md:gap-10 shadow-xl shadow-black/5">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] bg-black text-white flex items-center justify-center group-hover:bg-[#004797] group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                <Phone className="w-7 h-7 md:w-10 md:h-10" />
              </div>
              <div>
                <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-1 md:mb-2">Téléphone</p>
                <p className="text-lg md:text-2xl font-black tracking-tight">07 83 67 37 49</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/lisa-libeski-8b1561328/" target="_blank" rel="noreferrer" className="group p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-[#F8FAFC] border-4 border-black/5 hover:border-[#004797] transition-all text-left flex items-center gap-6 md:gap-10 shadow-xl shadow-black/5">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] bg-black text-white flex items-center justify-center group-hover:bg-[#004797] group-hover:-rotate-12 transition-all duration-500 shadow-2xl">
                <Linkedin className="w-7 h-7 md:w-10 md:h-10" />
              </div>
              <div>
                <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-1 md:mb-2">LinkedIn</p>
                <p className="text-lg md:text-2xl font-black tracking-tight">Lisa Libeski</p>
              </div>
            </a>
          </div>

          <footer className="pt-16 md:pt-24 border-t-4 border-black/5 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-2xl flex items-center justify-center text-white font-black text-base md:text-lg shadow-xl">LL</div>
              <div className="text-left">
                <p className="text-base md:text-lg font-black tracking-tighter">LISA LIBESKI</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
              <span className="flex items-center gap-2 md:gap-3"><div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#004797] shadow-lg shadow-[#004797]/50"></div> TOULOUSE</span>
              <span className="flex items-center gap-2 md:gap-3"><div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#004797] shadow-lg shadow-[#004797]/50"></div> NEOMA BS</span>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default LisaLibeskiPortfolio;
