"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "@/app/theme/theme"
import { content } from "@/data/content"

/* HEADER COMPONENT */
function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? `${theme.headerBg} ${theme.headerText} shadow-md py-3`
          : "bg-transparent text-white py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        <div className="text-2xl font-bold">
          {content.salon.shortName}
          <span className="block text-sm opacity-60 tracking-wide">
            {content.salon.name}
          </span>
        </div>

        <nav className="hidden md:flex space-x-10 text-sm font-medium">
          <a href="#hizmetler" className={`${theme.link}`}>Hizmetler</a>
          <a href="#ekip" className={`${theme.link}`}>Ekip</a>
          <a href="#galeri" className={`${theme.link}`}>Galeri</a>
          <a href="#yorumlar" className={`${theme.link}`}>Yorumlar</a>
        </nav>

        <Link
          href={content.links.randevu}
          className={`${theme.button} px-5 py-2 text-sm transition`}
        >
          {content.hero.buttonText}
        </Link>

      </div>
    </header>
  )
}

/* MAIN PAGE */
export default function Home() {
  const { theme } = useTheme()

  return (
    <main className={`${theme.bg} overflow-x-hidden`}>

      <Header />

      {/* HERO */}
      <section
        style={{ backgroundImage: `url(${content.hero.image})` }}
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      >
        <div className={`absolute inset-0 ${theme.heroOverlay}`}></div>

        <div className={`relative z-10 px-6 max-w-3xl space-y-6 ${theme.heroText}`}>
          <h1 className="text-5xl md:text-6xl font-bold">
            {content.salon.name}
          </h1>
          <p className="text-lg md:text-xl">
            {content.salon.slogan}
          </p>
          <Link
            href={content.links.randevu}
            className={`${theme.button} px-8 py-4 rounded-lg font-semibold transition`}
          >
            {content.hero.buttonText}
          </Link>
        </div>
      </section>

      {/* KAMPANYALAR */}
      <section className={`py-28 px-6 md:px-20 ${theme.sectionAlt} text-center`}>
        <h2 className="text-4xl font-bold mb-16">
          {content.sections.kampanyalarTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {content.kampanyalar.map((item, i) => (
            <div
              key={i}
              className={`relative ${theme.card} rounded-2xl p-8 text-left shadow-xl hover:-translate-y-2 transition duration-300`}
            >
              <span className={`absolute -top-3 left-6 ${theme.button} text-xs px-3 py-1 rounded-full`}>
                {item.badge}
              </span>

              <h3 className="text-xl font-semibold mt-4">
                {item.title}
              </h3>

              <p className="opacity-70 mt-3 text-sm">
                {item.desc}
              </p>

              <Link
                href={content.links.randevu}
                className={`inline-block mt-6 ${theme.button} px-6 py-2 rounded-lg`}
              >
                {content.hero.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* HİZMETLER */}
      <section id="hizmetler" className={`py-28 px-6 md:px-20 text-center ${theme.sectionAlt}`}>
        <h2 className="text-4xl font-bold mb-20">
          {content.sections.hizmetlerTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {content.hizmetler.map((item, i) => (
            <div
              key={i}
              className={`${theme.card} rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition duration-300`}
            >
              <img
                src={item.img}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                alt={item.title}
              />

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="opacity-70 text-sm">{item.desc}</p>

                <Link
                  href={content.links.randevu}
                  className={`inline-block ${theme.link} font-semibold hover:underline`}
                >
                  Randevu Al →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EKİP */}
      <section id="ekip" className={`py-24 ${theme.sectionAlt} text-center`}>
        <h2 className="text-4xl font-bold mb-12">
          {content.sections.ekipTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-10 px-6 md:px-20">
          {content.ekip.map((person, i) => (
            <div key={i} className="space-y-3">
              <div
                className="w-40 h-40 mx-auto rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${person.img})` }}
              ></div>
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="opacity-70 text-sm">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALERİ */}
      <section id="galeri" className="py-24 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-12">
          {content.sections.galeriTitle}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {content.galeri.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition"
              alt="Salon Galeri"
            />
          ))}
        </div>
      </section>

      {/* YORUMLAR */}
      <section id="yorumlar" className={`py-24 ${theme.sectionSoft} text-center`}>
        <h2 className="text-4xl font-bold mb-12">
          {content.sections.yorumlarTitle}
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {content.yorumlar.map((item, i) => (
            <div key={i} className={`${theme.card} p-6 rounded-lg shadow-md`}>
              <p className="italic opacity-80">“{item.text}”</p>
              <p className="italic opacity-80">— {item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 text-center ${theme.ctaBg} ${theme.ctaText}`}>
        <h3 className="text-3xl font-bold mb-4">
          {content.sections.ctaTitle}
        </h3>
        <Link
          href={content.links.randevu}
          className={`bg-white ${theme.link} px-8 py-3 rounded-lg font-semibold`}
        >
          {content.hero.buttonText}
        </Link>
      </section>

      {/* FOOTER */}
      <footer className={`${theme.footerBg} ${theme.footerText} text-center py-12`}>
        <p>{content.salon.location}</p>
        <p className="opacity-70 mt-1">{content.salon.phone}</p>
        <p className="opacity-50 mt-6 text-sm">{content.salon.copyright}</p>
      </footer>

    </main>
  )
}