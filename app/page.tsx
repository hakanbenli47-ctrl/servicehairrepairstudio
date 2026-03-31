"use client"
import { motion, Variants } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "@/app/theme/theme"
import { content } from "@/data/content"
import { FaInstagram } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
/* --- ZARİF ANİMASYONLAR --- */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

/* --- HEADER --- */
function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? `${theme.headerBg} shadow-sm py-4` : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        <div className="flex flex-col">
          <span className={`text-xl font-bold tracking-widest uppercase ${scrolled ? theme.headerText : theme.title}`}>
            {content.salon.shortName}
          </span>
          <span className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? theme.headerText : theme.subtitle}`}>
            {content.salon.name}
          </span>
        </div>

        <nav className={`hidden lg:flex space-x-8 text-xs font-medium uppercase tracking-widest ${scrolled ? theme.headerText : theme.title}`}>
          {["hizmetler", "hakkimizda", "ekip", "yorumlar"].map((item) => (
            <a key={item} href={`#${item}`} className="hover:opacity-60 transition-opacity">
              {item === "hakkimizda" ? "Hakkımızda" : item}
            </a>
          ))}
        </nav>

        <a href={`tel:${content.salon.phone}`} className={`${theme.button} px-6 py-2 rounded-none text-xs font-semibold uppercase tracking-wider transition-all hover:shadow-lg`}>
          Randevu Al
        </a>
      </div>
    </header>
  )
}

export default function Home() {
  const { theme } = useTheme()

  return (
    <main className={`${theme.bg} overflow-x-hidden font-sans`}>
      <Header />

      {/* --- HERO SECTION (Ferah ve Şık) --- */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
  
  {/* ARKA PLAN GÖRSEL */}
<motion.div 
  className="absolute inset-0 z-0"
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
>
  <img 
    src="/salon1.jpg" 
    alt="Salon" 
    className="w-full h-full object-cover"
  />

 <div className="absolute inset-0 bg-black/50"></div>
</motion.div>
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate="show" 
          className="max-w-4xl mx-auto z-10"
        >
         <motion.p variants={fadeInUp} className="text-white text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {content.salon.location}
          </motion.p>
          
         <motion.h1 variants={fadeInUp} className={`${theme.title} text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]`}>
            Güzelliğinize <br />
            <span className="font-serif italic text-4xl md:text-6xl lg:text-7xl">Değer Katıyoruz</span>
          </motion.h1>

       <motion.p variants={fadeInUp} className="text-white/90 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {content.salon.slogan}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${content.salon.phone}`} className={`${theme.button} px-10 py-4 text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-1`}>
              Hemen Ara
            </a>
            <a href={`https://wa.me/${content.salon.whatsapp}`} target="_blank" rel="noreferrer" className={`${theme.soft} px-10 py-4 text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-1 border border-black/5`}>
              WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Zarif aşağı kaydırma oku */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <svg className={`w-6 h-6 ${theme.subtitle}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* --- HAKKIMIZDA / İSTATİSTİKLER --- */}
      <section id="hakkimizda" className={`py-24 px-6 ${theme.sectionSoft}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`${theme.title} text-3xl md:text-4xl font-serif italic mb-6`}>Service Hair</h2>
            <p className={`${theme.subtitle} text-lg leading-relaxed font-light`}>
             Kişiye özel tasarlanmış  saç stillerini buluşturan Yenilikleri takip eden ve öncü olan bir kuaför markası.
En doğru seçimlerin adresiyiz.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-black/5 pt-16">
            {[
              { count: "13+", label: "Yıllık Tecrübe" },
              { count: "5000+", label: "Mutlu Müşteri" },
              { count: "20+", label: "Özel Hizmet" },
              { count: "100%", label: "Memnuniyet" }
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <span className={`${theme.title} block text-4xl md:text-5xl font-light mb-2`}>{stat.count}</span>
                <span className={`${theme.subtitle} text-[10px] md:text-xs uppercase tracking-widest font-semibold`}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* --- SAÇ TASARIM GALERİSİ --- */}
<section className={`py-32 px-6 ${theme.bg}`}>
  <div className="max-w-7xl mx-auto">
    
    <motion.div 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true }} 
      variants={fadeInUp} 
      className="text-center mb-20"
    >
      <h2 className={`${theme.title} text-4xl md:text-5xl font-light tracking-tight`}>
        Dokunuşlarımız <span className="font-serif italic text-5xl md:text-6xl">Konuşuyor</span>
      </h2>
      <p className={`${theme.subtitle} mt-6 text-sm md:text-base max-w-xl mx-auto`}>
        Gerçek müşteriler, gerçek sonuçlar. Her saç bir imza.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      
      {[
        "/gorsel1.jpg",
        "/gorsel2.jpg",
        "/gorsel3.jpg",
        "/gorsel4.jpg",
        "/gorsel5.jpg",
        "/gorsel6.jpg",
        "/gorsel7.jpg",
        "/gorsel8.jpg",
        "/gorsel9.jpg",
        "/gorsel10.jpg",
        "/gorsel11.jpg",
      ].map((src, i) => (
        <div 
          key={i} 
          className="relative overflow-hidden group aspect-square"
        >
          <img 
            src={src} 
            alt={`Saç Tasarım ${i + 1}`} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>
      ))}

    </div>
  </div>
</section>
      {/* --- HİZMETLERİMİZ (SPA / MENÜ STİLİ) --- */}
      <section id="hizmetler" className={`py-32 px-6 ${theme.sectionAlt}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-24">
            <span className={`${theme.subtitle} text-xs uppercase tracking-[0.4em] font-semibold block mb-4`}>
              Uzmanlık Alanlarımız
            </span>
            <h2 className={`${theme.title} text-4xl md:text-5xl font-light tracking-tight`}>
              Güzellik <span className="font-serif italic text-5xl md:text-6xl">Menüsü</span>
            </h2>
            <div className={`w-16 h-px ${theme.accentLine} mx-auto mt-8`} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {content.hizmetler.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${theme.card} rounded-none border-b-2 border-transparent hover:border-black/10 transition-all p-8 md:p-12 flex flex-col group`}
              >
                <div className="mb-8">
                  <span className={`${theme.subtitle} text-[10px] uppercase tracking-widest font-bold block mb-4`}>0{i + 1}</span>
                  <h3 className={`${theme.title} text-2xl font-light uppercase tracking-wide mb-4`}>{item.title}</h3>
                  <p className={`${theme.subtitle} text-sm leading-relaxed font-light`}>
                    {item.desc}
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-black/5">
                  <a href={`https://wa.me/${content.salon.whatsapp}?text=Merhaba, ${item.title} hizmeti hakkında bilgi almak istiyorum.`} target="_blank" rel="noreferrer" className={`${theme.link} text-xs uppercase font-bold tracking-widest inline-flex items-center group-hover:translate-x-2 transition-transform`}>
                    Bilgi Al <span className="ml-2">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EKİBİMİZ (ZARİF PROFİLLER) --- */}
      <section id="ekip" className={`py-32 px-6 ${theme.bg}`}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>
            <span className={`${theme.subtitle} text-xs uppercase tracking-[0.4em] font-semibold block mb-4`}>
              Yetenekli Eller
            </span>
            <h2 className={`${theme.title} text-4xl md:text-5xl font-light tracking-tight mb-20`}>
              İşletme <span className="font-serif italic text-5xl md:text-6xl">Sahibi</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-16">
              {content.ekip.map((member, i) => (
                <div key={i} className="flex flex-col items-center max-w-sm">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 border border-black/5 p-2 bg-white/5">
                    <img 
  src={member.img} 
  alt={member.name} 
  className="w-full h-full object-cover rounded-full transition-all duration-700" 
/>
                  </div>
                  <h3 className={`${theme.title} text-2xl font-light uppercase tracking-wider mb-2`}>{member.name}</h3>
                  <p className={`${theme.subtitle} text-xs font-bold uppercase tracking-widest mb-6`}>{member.role}</p>
                  <p className={`${theme.subtitle} text-sm font-light leading-relaxed italic px-4`}>"{member.bio}"</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- YORUMLAR (GÜVEN VEREN TASARIM) --- */}
      <section id="yorumlar" className={`py-32 px-6 ${theme.sectionSoft}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
            <h2 className={`${theme.title} text-4xl md:text-5xl font-light tracking-tight`}>
              Sizden <span className="font-serif italic text-5xl md:text-6xl">Gelenler</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Elif A.", comment: "Düğünüm için gelin başımı yaptırdım ve sonuç inanılmazdı! Her detay özenle düşünüldü, kendimi çok özel hissettim." },
              { name: "Seda K.", comment: "Saçımı boyattım ve rengi tam istediğim gibi oldu. Kullanılan ürünler çok kaliteliydi, saçım hiç yıpranmadı." },
              { name: "Derya M.", comment: "İlk kez saç kesimi yaptırdım ve sonuç harikaydı. Tam yüz hatlarıma uygun harika bir modern kesim uyguladılar." }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className={`${theme.card} p-10 flex flex-col justify-between border-none shadow-sm`}>
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className={`${theme.subtitle} text-base md:text-lg font-light italic leading-relaxed mb-8 flex-grow`}>"{item.comment}"</p>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full ${theme.soft} flex items-center justify-center font-bold text-sm uppercase`}>
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className={`${theme.title} text-xs font-bold uppercase tracking-widest`}>{item.name}</h4>
                    <span className={`${theme.subtitle} text-[10px] uppercase tracking-widest font-semibold`}>Google Yorumu</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER (NET VE TEMİZ İLETİŞİM) --- */}
      <footer className={`${theme.footerBg} ${theme.footerText} py-20 px-6 border-t border-black/10`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-black/10 pb-16">
            <div className="md:col-span-2">
              <span className="text-3xl font-light tracking-widest uppercase block mb-6">{content.salon.shortName}</span>
              <span className="text-3xl font-light tracking-widest uppercase block mb-6">{content.salon.name}</span>
              <p className="opacity-70 text-sm leading-relaxed max-w-sm font-light">
                {content.salon.slogan} <br /> {content.salon.location}
              </p>
            </div>
            
            <div className="flex flex-col space-y-4 text-xs font-bold uppercase tracking-widest">
              <h4 className="opacity-40 mb-2">Sayfalar</h4>
              <a href="#hizmetler" className="hover:opacity-60 transition">Menü / Hizmetler</a>
              <a href="#hakkimizda" className="hover:opacity-60 transition">Hakkımızda</a>
              <a href="#ekip" className="hover:opacity-60 transition">Ekip</a>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold opacity-40 mb-2">İletişim</h4>
              <a href={`tel:${content.salon.phone}`} className="text-xl md:text-2xl font-light hover:opacity-60 transition">{content.salon.phone}</a>
              <a href={`https://wa.me/${content.salon.whatsapp}`} target="_blank" rel="noreferrer" className="text-xs uppercase font-bold tracking-widest hover:opacity-60 transition flex items-center">
                WhatsApp İle Ulaşın <span className="ml-2">↗</span>
              </a>
              <a 
  href="https://maps.app.goo.gl/Y8anTCsEbc7DGK7q9?g_st=ic" 
  target="_blank" 
  rel="noreferrer"
  className="group text-xs uppercase font-bold tracking-widest flex items-center gap-2 transition"
>

  <FaMapMarkerAlt className="text-sm transition-transform duration-300 group-hover:scale-110 group-hover:text-red-500" />

<span className="group-hover:translate-x-1 transition-transform duration-300">
  Haritada Aç
</span>
</a>
            <a 
  href="https://instagram.com/kutaysuofficial" 
  target="_blank" 
  className="group text-[11px] font-bold tracking-widest flex items-center gap-2 transition"
>
  <FaInstagram className="text-base transition-transform duration-300 group-hover:scale-110 group-hover:text-pink-500" />
  <span className="group-hover:translate-x-1 transition-transform duration-300">
    KUTAY SU
  </span>
</a>

<a 
  href="https://instagram.com/service_hair_repair" 
  target="_blank" 
  className="group text-[11px] font-bold tracking-widest flex items-center gap-2 transition"
>
  <FaInstagram className="text-base transition-transform duration-300 group-hover:scale-110 group-hover:text-pink-500" />
  <span className="group-hover:translate-x-1 transition-transform duration-300">
    STUDIO
  </span>
</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs uppercase tracking-widest opacity-50 font-semibold">
            <p>{content.salon.copyright}</p>
            <p className="mt-4 md:mt-0">Premium Beauty Studio</p>
          </div>
        </div>
      </footer>
    </main>
  )
}