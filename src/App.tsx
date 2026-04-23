/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Scale as ScaleIcon, 
  Users, 
  Trophy, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Star, 
  Menu, 
  X,
  MessageSquare,
  Award,
  Globe,
  Gavel
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CONTACT_INFO = {
  phone1: "6984468094",
  phone2: "2741112834",
  address: "Περιάνδρου 13-15, Κόρινθος",
  email: "info@sachini-law.gr" // Placeholder email
};

const PRACTICE_AREAS = [
  {
    title: "Αθλητικό Δίκαιο",
    description: "Εξειδικευμένη νομική υποστήριξη σε υποθέσεις συμβατικών διαφορών, αθλητικών σωματείων και αθλητών.",
    icon: Trophy,
    special: true
  },
  {
    title: "Οικογενειακό Δίκαιο",
    description: "Χειρισμός ευαίσθητων υποθέσεων (διαζύγια, επιμέλεια, διατροφή) με απόλυτη ενσυναίσθηση.",
    icon: Users
  },
  {
    title: "Αστικό & Εμπορικό Δίκαιο",
    description: "Σοβαρότητα και αμεσότητα στην επίλυση διαφορών, συμβάσεων και εμπορικών συμφωνιών.",
    icon: ScaleIcon
  }
];

const TESTIMONIALS = [
  {
    author: "Γ.Κ.",
    text: "Επαγγελματίας με χαρακτήρα. Εξαιρετική συνεργασία και αποτέλεσμα που ξεπέρασε τις προσδοκίες μου.",
    source: "Vrisko.gr"
  },
  {
    author: "Μ.Λ.",
    text: "Σοβαρότητα και αμεσότητα. Η κ. Σαχίνη είναι δίπλα στον πελάτη σε κάθε βήμα.",
    source: "Google Reviews"
  },
  {
    author: "Α.Π.",
    text: "Άψογη επικοινωνία. Κατάλαβε αμέσως την ιδιαιτερότητα της υπόθεσής μου.",
    source: "Vrisko.gr"
  }
];

interface NavLinkProps {
  name: string;
  href: string;
  mobile?: boolean;
  onClick?: () => void;
  key?: string | number;
}

const ItemLink = ({ name, href, mobile, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`${mobile ? "block py-4 text-xl border-b border-gray-100" : "hover:text-royal-blue transition-colors"} font-medium`}
  >
    {name}
  </a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Αρχική", href: "#home" },
    { name: "Η Χριστίνα Σαχίνη", href: "#about" },
    { name: "Τομείς Εξειδίκευσης", href: "#practice" },
    { name: "Μαρτυρίες", href: "#testimonials" },
    { name: "Επικοινωνία", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`text-2xl font-serif font-bold tracking-tight ${scrolled ? "text-royal-blue" : "text-royal-blue"}`}>
              Χριστίνα Σαχίνη
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${scrolled ? "text-gray-500" : "text-gray-600"}`}>
              ΔΙΚΗΓΟΡΟΣ ΚΟΡΙΝΘΟΥ
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center text-sm uppercase tracking-widest">
            {navLinks.map(link => (
              <ItemLink key={link.name} name={link.name} href={link.href} />
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phone1}`}
              className="bg-royal-blue text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-transform hover:-translate-y-0.5"
            >
              ΚΑΛΕΣΤΕ ΤΩΡΑ
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-8 h-8 text-royal-blue" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-[100] bg-white p-8 flex flex-col"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMenuOpen(false)}><X className="w-10 h-10 text-royal-blue" /></button>
            </div>
            <div className="flex flex-col">
              {navLinks.map(link => (
                <ItemLink 
                  key={link.name} 
                  name={link.name} 
                  href={link.href} 
                  mobile 
                  onClick={() => setIsMenuOpen(false)} 
                />
              ))}
            </div>
            <div className="mt-auto py-8">
              <p className="text-gray-400 text-xs mb-4 uppercase tracking-widest">Επικοινωνία</p>
              <a href={`tel:${CONTACT_INFO.phone1}`} className="text-2xl font-serif text-royal-blue block mb-2">{CONTACT_INFO.phone1}</a>
              <a href={`tel:${CONTACT_INFO.phone2}`} className="text-xl font-serif text-royal-blue block">{CONTACT_INFO.phone2}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex flex-center items-center px-6 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-royal-blue text-xs font-bold tracking-widest mb-8">
                  <Award className="w-4 h-4" /> ΕΞΕΙΔΙΚΕΥΜΕΝΗ ΝΟΜΙΚΗ ΕΚΠΡΟΣΩΠΗΣΗ
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-royal-blue leading-[1.1] mb-8">
                  Χριστίνα Σαχίνη:<br /> 
                  <span className="italic opacity-80">Νομική Εκπροσώπηση</span> <br />
                  με Σοβαρότητα & Χαρακτήρα.
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-12 font-light">
                  Υποστηρίζουμε τις υποθέσεις σας στην Κόρινθο με υψηλή τεχνογνωσία, απόλυτη ειλικρίνεια και ανθρώπινη προσέγγιση.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href={`tel:${CONTACT_INFO.phone1}`}
                    className="flex lg:inline-flex items-center justify-center gap-3 bg-royal-blue text-white px-10 py-5 rounded-md text-lg font-semibold hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/10"
                  >
                    Συζητήστε την Υπόθεσή σας <ChevronRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#practice"
                    className="flex lg:inline-flex items-center justify-center gap-3 border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-md text-lg font-semibold hover:bg-gray-50 transition-all"
                  >
                    Οι Υπηρεσίες μας
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Subtle Graphic Element */}
          <div className="absolute -right-20 bottom-0 opacity-5 pointer-events-none hidden lg:block">
            <Gavel className="w-[600px] h-[600px] text-royal-blue" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-40 px-6 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-serif text-royal-blue mb-8 sticky top-32">
                Προσωπική <br />Προσέγγιση & <br />Εξειδίκευση
              </h2>
            </div>
            <div className="lg:w-2/3 space-y-12">
              <div className="prose prose-xl text-gray-600 leading-[1.8] font-light max-w-none">
                <p>
                  Η <strong className="text-royal-blue font-semibold">Χριστίνα Σαχίνη</strong> είναι πτυχιούχος της Νομικής Σχολής του Δημοκριτείου Πανεπιστημίου Θράκης (ΔΠΘ) και δικηγόρος του Πρωτοδικείου Κορίνθου.
                </p>
                <p>
                  Στο γραφείο μας, πιστεύουμε ότι η νομική επιστήμη είναι πάνω απ' όλα λειτούργημα. Κάθε υπόθεση αντιμετωπίζεται με τη δέουσα σοβαρότητα και αμεσότητα, χωρίς να παραβλέπεται η ανθρώπινη πλευρά των πραγμάτων.
                </p>
                <p>
                  Στόχος μας είναι η παροχή νομικών συμβουλών που δεν περιορίζονται μόνο στη θεωρητική ανάλυση, αλλά προσφέρουν πρακτικές και αποτελεσματικές λύσεις στην καθημερινότητα του πολίτη και της επιχείρησης.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-gray-100">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Award className="text-royal-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Υψηλή Κατάρτιση</h4>
                    <p className="text-gray-500">Απόφοιτος ΔΠΘ με συνεχή ενημέρωση στις τελευταίες εξελίξεις της νομολογίας.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-royal-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Άμεση Επικοινωνία</h4>
                    <p className="text-gray-500">Προσωπική επαφή χωρίς μεσάζοντες. Είμαστε δίπλα σας σε κάθε στάδιο της διαδικασίας.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section id="practice" className="py-24 md:py-40 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <p className="text-royal-blue font-bold tracking-[0.3em] uppercase text-xs mb-4">Τομείς Επιτυχίας</p>
                <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">Εξειδικευμένες <br />Υπηρεσίες</h2>
              </div>
              <div className="max-w-md">
                <p className="text-gray-500 text-lg">
                  Καλύπτουμε ένα ευρύ φάσμα νομικών αναγκών, εστιάζοντας σε τομείς που απαιτούν ιδιαίτερη τεχνογνωσία και λεπτούς χειρισμούς.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {PRACTICE_AREAS.map((area, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className={`bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full ${area.special ? "ring-2 ring-royal-blue/30" : ""}`}
                >
                  <area.icon className="w-12 h-12 text-royal-blue mb-8 stroke-[1.5]" />
                  <h3 className="text-2xl font-serif font-bold mb-4 text-royal-blue">{area.title}</h3>
                  <p className="text-gray-500 leading-relaxed flex-grow">{area.description}</p>
                  {area.special && (
                    <div className="mt-8 pt-8 border-t border-gray-50">
                      <span className="text-[10px] bg-royal-blue text-white px-3 py-1 rounded-full uppercase tracking-widest font-bold">Μοναδική Εξειδίκευση στην Κόρινθο</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Law Special Section */}
        <section className="py-24 md:py-40 px-6 bg-royal-blue text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                  Ηγετική Παρουσία στο <br />
                  <span className="text-blue-300 italic">Αθλητικό Δίκαιο</span>
                </h2>
                <div className="space-y-8 text-lg font-light text-blue-100 leading-relaxed">
                  <p>
                    Το Δικηγορικό Γραφείο Χριστίνας Σαχίνη αποτελεί ένα από τα ελάχιστα στην Κορινθία με βαθιά γνώση και εμπειρία στο Αθλητικό Δίκαιο.
                  </p>
                  <p>
                    Αναλαμβάνουμε την εκπροσώπηση αθλητών και σωματείων σε απαιτητικές υποθέσεις συμβατικών διαφορών, πειθαρχικών διαδικασιών και νομικής θωράκισης της αθλητικής δραστηριότητας.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-6 h-6 text-blue-400 flex-shrink-0" />
                      Σύνταξη & Έλεγχος Αθλητικών Συμβολαίων
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-6 h-6 text-blue-400 flex-shrink-0" />
                      Διαιτητικές Διαφορές ενώπιον Αθλητικών Οργάνων
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-6 h-6 text-blue-400 flex-shrink-0" />
                      Νομική Υποστήριξη Αθλητικών Σωματείων
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            <div className="relative">
               <div className="aspect-square bg-blue-800/30 rounded-full flex items-center justify-center p-20 border border-blue-400/20 animate-pulse">
                  <Trophy className="w-full h-full text-blue-200/20" />
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                  <p className="text-8xl font-serif italic text-blue-300/30 mb-4">Εξειδίκευση</p>
                  <p className="text-xl tracking-[0.5em] uppercase font-bold text-white/50">SPORTS LAW</p>
               </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 md:py-40 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-royal-blue font-bold tracking-[0.3em] uppercase text-xs mb-4">Social Proof</p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Τι λένε οι πελάτες μας</h2>
              <div className="flex justify-center gap-1 mb-4">
                {[1,2,3,4,5].map(n => <Star key={n} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-500 text-xl font-light">
                Βαθμολογία <span className="font-bold text-royal-blue">5/5</span> βασισμένη σε επαληθευμένες κριτικές.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-slate-50 p-10 rounded-2xl relative">
                  <MessageSquare className="absolute top-6 right-6 w-10 h-10 text-royal-blue/5" />
                  <p className="text-gray-600 italic mb-8 leading-relaxed text-lg">"{t.text}"</p>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                    <span className="font-bold text-gray-900">{t.author}</span>
                    <span className="text-xs font-bold text-royal-blue uppercase tracking-widest">{t.source}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-400 text-sm">Περισσότερες από 10+ διθυραμβικές κριτικές σε πλατφόρμες όπως Vrisko.gr και Google Business.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-40 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif text-royal-blue mb-8">Επικοινωνήστε <br />Μαζί μας</h2>
              <p className="text-xl text-gray-500 font-light mb-12">
                Η "άμεση επικοινωνία" είναι βασικός πυλώνας του γραφείου μας. Είμαστε εδώ για να συζητήσουμε την υπόθεσή σας με ειλικρίνεια και επαγγελματισμό.
              </p>
              
              <div className="space-y-8">
                <a href={`tel:${CONTACT_INFO.phone1}`} className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-royal-blue group-hover:text-white transition-colors text-royal-blue">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Κινητό</p>
                    <p className="text-2xl font-serif text-royal-blue">{CONTACT_INFO.phone1}</p>
                  </div>
                </a>
                
                <a href={`tel:${CONTACT_INFO.phone2}`} className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-royal-blue group-hover:text-white transition-colors text-royal-blue">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Τηλέφωνο Γραφείου</p>
                    <p className="text-2xl font-serif text-royal-blue">{CONTACT_INFO.phone2}</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-royal-blue">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Διεύθυνση</p>
                    <p className="text-xl font-medium text-gray-700">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-royal-blue text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden flex-grow">
                 <div className="relative z-10">
                   <h3 className="text-3xl font-serif mb-6 italic">Διαθέσιμοι για ραντεβού</h3>
                   <p className="text-blue-100 text-lg mb-8 font-light">
                     Λόγω της φύσης των υποθέσεών μας, προτιμάμε την τηλεφωνική επικοινωνία για τον προγραμματισμό μιας δια ζώσης συνάντησης στο γραφείο μας στην Κόρινθο.
                   </p>
                   <div className="space-y-4">
                     <p className="flex items-center gap-3 text-sm tracking-widest uppercase font-bold text-blue-300">
                       <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> 
                       Ανοιχτά: 09:00 - 15:00 & 18:00 - 21:00
                     </p>
                   </div>
                 </div>
                 
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Globe className="w-48 h-48" />
                 </div>
              </div>
              
              <div className="mt-8">
                 <p className="text-gray-400 text-sm italic">
                   Keywords SEO: Δικηγόρος Κόρινθος, Χριστίνα Σαχίνη Δικηγόρος, Αθλητικό Δίκαιο Κόρινθος, Διαζύγια Κόρινθος, Νομική υποστήριξη Κορινθία.
                 </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-3xl font-serif font-bold tracking-tight mb-2">Χριστίνα Σαχίνη</span>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gray-500">
              Δικηγόρος Παρ' Εφέταις • Νομική Σχολή ΔΠΘ
            </span>
          </div>
          
          <div className="flex gap-8 text-sm font-bold tracking-widest text-gray-400">
            {navLinks.slice(1).map(link => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>

          <p className="text-gray-600 text-xs text-center md:text-right">
            &copy; {new Date().getFullYear()} Christina Sachini Law Office. <br /> All Rights Reserved. Designed for Excellence.
          </p>
        </div>
      </footer>
      
      {/* Fixed Sticky Call CTA for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <a 
          href={`tel:${CONTACT_INFO.phone1}`}
          className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <Phone className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
