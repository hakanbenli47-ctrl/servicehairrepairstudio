"use client"
import { motion, Variants } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "@/app/theme/theme"
import { content } from "@/data/content"

/* --- ANIMASYONLAR --- */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

/* --- HEADER --- */
function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? `${theme.headerBg} backdrop-blur-lg shadow-2xl py-3` : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        <div className="flex flex-col">
          <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase ${scrolled ? theme.headerText : "text-white"}`}>
            {content.salon.shortName}
          </span>
          <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.3em] opacity-60 ${scrolled ? theme.headerText : "text-white"}`}>
            {content.salon.name}
          </span>
        </div>

        <nav className={`hidden lg:flex space-x-10 text-[11px] font-bold uppercase tracking-widest ${scrolled ? theme.headerText : "text-white"}`}>
          {["hizmetler", "deneyim", "KutaySu Kimdir?", "yorumlar"].map((item) => (
            <a key={item} href={`#${item}`} className="hover:opacity-50 transition-opacity">
              {item === "yorumlar" ? "Yorumlar" : item === "deneyim" ? "Neden Biz?" : item}
            </a>
          ))}
        </nav>

        <a href={`tel:${content.salon.phone}`} className={`${theme.button} px-6 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95`}>
          Bize Ulaş
        </a>
      </div>
    </header>
  )
}

export default function Home() {
  const { theme } = useTheme()
  const [showContact, setShowContact] = useState(false)

  return (
    <main className={`${theme.bg} selection:bg-yellow-500 selection:text-black overflow-x-hidden`}>
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{ backgroundImage: `url(${content.hero.image})` }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className={`absolute inset-0 ${theme.heroOverlay} backdrop-blur-[1px]`} />

        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10 text-center px-6">
          <motion.span variants={fadeInUp} className="block text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 text-white/80">
            {content.salon.location}
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-8xl font-black mb-6 tracking-tighter text-white uppercase leading-tight">
            {content.salon.name}
          </motion.h1>
          <motion.p variants={fadeInUp} className="max-w-xl mx-auto text-sm md:text-lg text-white/70 font-light leading-relaxed mb-10">
            {content.salon.slogan}
          </motion.p>

          <motion.div variants={fadeInUp} className="relative inline-block">
            <button onClick={() => setShowContact(!showContact)} className={`${theme.button} px-10 py-4 md:px-12 md:py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-2xl`}>
              Randevu Al
            </button>
            {showContact && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full mt-4 w-full space-y-2 z-20">
                <a href={`tel:${content.salon.phone}`} className="block bg-white text-black py-3 rounded-full text-[10px] font-bold">TELEFON</a>
                <a href={`https://wa.me/${content.salon.whatsapp}`} className="block bg-[#25D366] text-white py-3 rounded-full text-[10px] font-bold">WHATSAPP</a>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* --- DENEYİM --- */}
      <section id="deneyim" className={`py-24 md:py-32 px-6 md:px-12 ${theme.sectionSoft}`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 md:mb-8 leading-[0.95]">
              Bir Güzellik <br /> <span className="opacity-30 underline decoration-1 underline-offset-8">Atölyesi</span>
            </h2>
            <p className="opacity-70 leading-relaxed mb-8 text-base md:text-lg">
              Sadece saç yapmıyoruz, her telinde sanatımızı konuşturuyoruz. İzmir'in en modern salonunda kendinizi yeniden keşfedeceğiniz bir deneyim sizi bekliyor.
            </p>
            <div className="flex space-x-12">
              <div><span className="text-3xl md:text-5xl font-black block">15+</span><span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Yıllık Tecrübe</span></div>
              <div><span className="text-3xl md:text-5xl font-black block">5K+</span><span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Mutlu Yüz</span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
               <img src="/hero.jpg" alt="Deneyim" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- HİZMETLER --- */}
      <section id="hizmetler" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
              Hizmet <br /> <span className="opacity-20">Sanatımız</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.hizmetler.map((item, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className={`group relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl ${theme.card}`}>
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-bold uppercase mb-2">{item.title}</h3>
                  <p className="text-[10px] md:text-xs opacity-0 group-hover:opacity-80 transition-opacity duration-500 max-w-[250px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EKİP --- */}
      <section id="ekip" className={`py-24 md:py-32 px-6 ${theme.sectionAlt}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden mb-12 border-8 border-white/5 shadow-2xl">
              <img src={content.ekip[0].img} alt={content.ekip[0].name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-2">{content.ekip[0].name}</h2>
            <p className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">{content.ekip[0].role}</p>
            <p className="text-lg md:text-xl font-light leading-relaxed opacity-80 italic">"{content.ekip[0].bio}"</p>
          </motion.div>
        </div>
      </section>

      {/* --- GALERİ --- */}
      <section id="galeri" className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
           <h3 className="text-[10px] uppercase tracking-[0.5em] opacity-30 font-bold">Studio Galeri</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {content.galeri.map((img, i) => (
            <motion.div key={i} whileHover={{ scale: 0.98 }} className={`overflow-hidden rounded-xl ${i % 2 === 0 ? 'h-48 md:h-64' : 'h-60 md:h-80'} bg-zinc-900`}>
              <img src={img} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500" alt="Galeri" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- GOOGLE YORUMLAR (YENİ) --- */}
      <section id="yorumlar" className={`py-24 md:py-32 px-6 ${theme.sectionSoft}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Google <span className="opacity-20">Yorumları</span></h2>
            <div className="flex justify-center space-x-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((_, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className={`${theme.card} p-8 rounded-3xl border border-white/5`}>
                <p className="text-sm opacity-70 italic mb-6 leading-relaxed">"Harika bir servis ve profesyonel yaklaşım. İzmir'de saçımı emanet edebildiğim tek yer burası oldu."</p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-xs">M{i+1}</div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest">Müşteri İsmi</h4>
                    <span className="text-[10px] opacity-40">Google Yorumu</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOSYAL MEDYA (GÜNCELLENMİŞ İKONLAR) --- */}
      <section className={`py-16 md:py-20 px-6 ${theme.ctaBg} relative overflow-hidden border-t border-white/5`}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Instagram 1 */}
            <motion.a 
              whileHover={{ scale: 1.02 }}
              href="https://www.instagram.com/kutaysuofficial"
              target="_blank"
              className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 flex items-center space-x-6 group border border-white/5 transition-colors hover:bg-black/30"
            >
              <div className={`${theme.ctaText} flex-shrink-0`}>
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`text-base md:text-lg font-black tracking-tight uppercase ${theme.ctaText}`}>@kutaysuofficial</span>
                <span className={`text-[9px] font-bold opacity-40 uppercase tracking-widest ${theme.ctaText}`}>Takip Et</span>
              </div>
            </motion.a>

            {/* Instagram 2 */}
            <motion.a 
              whileHover={{ scale: 1.02 }}
              href="https://www.instagram.com/service_hair_repair"
              target="_blank"
              className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 flex items-center space-x-6 group border border-white/5 transition-colors hover:bg-black/30"
            >
              <div className={`${theme.ctaText} flex-shrink-0`}>
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`text-base md:text-lg font-black tracking-tight uppercase ${theme.ctaText}`}>@service_hair_repair</span>
                <span className={`text-[9px] font-bold opacity-40 uppercase tracking-widest ${theme.ctaText}`}>Çalışmalarımız</span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={`${theme.footerBg} ${theme.footerText} py-20 px-8 border-t border-white/5`}>
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <span className="text-2xl font-black tracking-tighter uppercase block mb-4">{content.salon.shortName} Studio</span>
              <p className="opacity-40 text-[10px] leading-relaxed max-w-[200px] mx-auto md:mx-0">{content.salon.location} <br />Modern değişim noktası.</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="text-[10px] uppercase tracking-widest font-black opacity-30 mb-2">Hızlı Linkler</h4>
              {["Hizmetler", "Deneyim", "Yorumlar"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-[10px] font-bold hover:opacity-50 transition uppercase">{l}</a>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="text-[10px] uppercase tracking-widest font-black opacity-30 mb-2">İletişim</h4>
              <a href={`tel:${content.salon.phone}`} className="text-xl font-black">{content.salon.phone}</a>
              <a href="mailto:Kutaysuu@gmail.com" className="text-[10px] opacity-50 underline italic">Kutaysuu@gmail.com</a>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[8px] uppercase tracking-[0.4em] opacity-30">
            <p>{content.salon.copyright}</p>
            <p>Designed for Excellence</p>
          </div>
        </div>
      </footer>
    </main>
  )
}