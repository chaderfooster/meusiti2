"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { WhatsappButton } from "@/components/whatsapp-button";
import { PracticeAreas } from "@/components/practice-areas";
import { Testimonials } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer"; // <--- Changed from Footer to Footer
import { ProcessTimeline } from "@/components/visual-law/process-timeline";
import { LegalInfographic } from "@/components/visual-law/legal-infographic";
import { InfiniteScrollImages } from "@/components/infinite-scroll-images";
import { Navbar } from "@/components/navbar";
import { FaClock, FaComments, FaPhone, FaBriefcase, FaLaptop, FaCreditCard, FaBalanceScale, FaBuilding, FaShieldAlt, FaUserShield, FaCheckCircle, FaTrophy, FaChartLine, FaUserFriends } from 'react-icons/fa';

function LegalServicesSection() {
  return (
    <motion.section 
      className="bg-white py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="relative overflow-hidden rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src="/images/legal-services/gettyimages-1292362577-2048x2048.jpg" 
            alt="Serviços Jurídicos em Cuiabá" 
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </motion.div>
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Serviços Jurídicos Estratégicos</h2>
          <p className="text-gray-600 mb-6">Soluções jurídicas precisas e personalizadas para cada desafio legal.</p>
          
          <div className="space-y-4">
            {[
              { title: "Consultoria Estratégica", description: "Análise jurídica detalhada e orientação personalizada." },
              { title: "Representação Legal", description: "Defesa robusta e eficiente em todas as instâncias." },
              { title: "Resolução de Conflitos", description: "Mediação e negociação com foco em resultados." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="border-l-4 border-[#C45C24] pl-4 py-2 transition-colors hover:bg-gray-50"
                whileHover={{ x: 10 }}
              >
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.button 
            className="bg-[#C45C24] text-white px-6 py-3 rounded-full hover:bg-[#A34B1D] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Consulte Nossos Especialistas
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

function ProcessSection() {
  const processSteps = [
    { 
      title: "Consulta Inicial", 
      description: "Análise detalhada do seu caso e necessidades específicas.",
      icon: <FaComments className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Estratégia Jurídica", 
      description: "Desenvolvimento de uma abordagem personalizada e eficiente.",
      icon: <FaBriefcase className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Execução", 
      description: "Implementação precisa da estratégia jurídica definida.",
      icon: <FaLaptop className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Acompanhamento", 
      description: "Suporte contínuo e atualização sobre o andamento do caso.",
      icon: <FaClock className="text-[#C45C24] text-3xl" />
    }
  ];

  return (
    <motion.section 
      className="bg-gray-50 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Como Funciona Nosso Processo
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center transition-all"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
            >
              <div className="mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function PracticeAreasSection() {
  const practiceAreas = [
    { 
      title: "Direito Civil", 
      description: "Resolução de conflitos e proteção de interesses pessoais e patrimoniais.",
      icon: <FaBalanceScale className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Direito de Família", 
      description: "Assessoria jurídica em questões familiares e relacionamentos.",
      icon: <FaUserFriends className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Direito do Consumidor", 
      description: "Defesa dos direitos e interesses dos consumidores.",
      icon: <FaShieldAlt className="text-[#C45C24] text-3xl" />
    },
    { 
      title: "Direito Previdenciário", 
      description: "Consultoria e representação em questões previdenciárias.",
      icon: <FaUserShield className="text-[#C45C24] text-3xl" />
    }
  ];

  return (
    <motion.section 
      id="areas-de-atuacao"
      className="bg-white py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Nossas Áreas de Atuação
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl text-center transition-all group"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f9f9f9"
              }}
            >
              <div className="mb-4 flex justify-center">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#C45C24] transition-colors">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ExperienceNumbersSection() {
  const experienceStats = [
    { 
      number: "+500", 
      label: "Casos Resolvidos",
      icon: <FaCheckCircle className="text-[#C45C24] text-4xl" />
    },
    { 
      number: "+10", 
      label: "Anos de Experiência",
      icon: <FaTrophy className="text-[#C45C24] text-4xl" />
    },
    { 
      number: "+95%", 
      label: "Taxa de Sucesso",
      icon: <FaChartLine className="text-[#C45C24] text-4xl" />
    },
    { 
      number: "+50", 
      label: "Clientes Atendidos",
      icon: <FaUserFriends className="text-[#C45C24] text-4xl" />
    }
  ];

  return (
    <motion.section 
      className="bg-gray-100 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Nossa Experiência em Números
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {experienceStats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center transition-all group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
            >
              <div className="mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-[#C45C24] mb-2 group-hover:text-opacity-80 transition-colors">
                {stat.number}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FrequentQuestionsSection() {
  const frequentQuestions = [
    {
      icon: <FaComments className="text-[#C45C24] text-2xl" />, 
      question: "Quais são as áreas de atuação do escritório?",
      answer: "Atuamos em direito civil, família, consumidor e previdenciário, oferecendo soluções jurídicas completas e personalizadas."
    },
    {
      icon: <FaPhone className="text-[#C45C24] text-2xl" />, 
      question: "Como posso agendar uma consulta?",
      answer: "Você pode agendar uma consulta através do WhatsApp, telefone ou formulário de contato em nosso site."
    },
    {
      icon: <FaBriefcase className="text-[#C45C24] text-2xl" />, 
      question: "Oferecem serviços para empresas?",
      answer: "Sim, prestamos assessoria jurídica completa para empresas, incluindo consultoria estratégica e representação legal."
    },
    {
      icon: <FaLaptop className="text-[#C45C24] text-2xl" />, 
      question: "Atendem de forma online e presencial?",
      answer: "Oferecemos atendimento online e presencial para melhor atender às necessidades dos nossos clientes."
    }
  ];

  return (
    <motion.section 
      id="principais-duvidas"
      className="bg-white py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Principais Dúvidas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {frequentQuestions.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl group cursor-pointer"
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "#f5f5f5"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#C45C24] transition-colors">
                  {item.question}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function AboutUsSection() {
  return (
    <motion.section 
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa História
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fundado com a missão de oferecer serviços jurídicos excepcionais, nosso escritório combina expertise técnica com um compromisso inabalável com a justiça e os interesses de nossos clientes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { 
                  icon: <FaClock className="text-[#C45C24] text-3xl" />, 
                  title: "Agilidade", 
                  description: "Respostas rápidas e eficientes" 
                },
                { 
                  icon: <FaBalanceScale className="text-[#C45C24] text-3xl" />, 
                  title: "Precisão", 
                  description: "Análise jurídica detalhada" 
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl transition-all"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#f9f9f9"
                  }}
                >
                  <div className="flex items-center mb-2">
                    {item.icon}
                    <h3 className="text-lg font-semibold ml-3 text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <img 
              src="/images/legal-services/photo-1589829545856-d10d557cf95f.jpg" 
              alt="Escritório de Advocacia" 
              className="w-full h-[500px] object-cover rounded-xl shadow-lg transition-transform group-hover:scale-105"
            />
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <p className="text-white text-lg text-center px-4">
                Comprometidos com a excelência jurídica desde 2008
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          O Que Nossos Clientes Dizem
        </motion.h2>
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
          {[
            {
              name: "Mariana Lopes",
              rating: 5,
              text: "Escritório excepcional! Atendimento profissional e resultados surpreendentes. Resolveram meu caso com eficiência e dedicação.",
              date: "há 2 semanas",
              avatar: "https://randomuser.me/api/portraits/women/83.jpg"
            },
            {
              name: "Carlos Pereira",
              rating: 5,
              text: "Serviço jurídico de alta qualidade. Advogados extremamente competentes e prestativos. Superaram todas as minhas expectativas.",
              date: "há 1 mês",
              avatar: "https://randomuser.me/api/portraits/men/79.jpg"
            },
            {
              name: "Fernanda Costa",
              rating: 4,
              text: "Muito bom atendimento, profissionais muito atenciosos. Resolveram minha questão judicial de forma rápida e eficiente.",
              date: "há 3 semanas",
              avatar: "https://randomuser.me/api/portraits/women/67.jpg"
            }
          ].map((review, index) => (
            <motion.div 
              key={index} 
              className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full border border-gray-200"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center mb-4">
                <motion.img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full mr-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20 
                  }}
                />
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold ml-4">{review.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.svg 
                          key={i} 
                          className="w-5 h-5" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: i * 0.1,
                            type: "spring", 
                            stiffness: 300, 
                            damping: 10 
                          }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <motion.p 
                className="text-gray-700 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                "{review.text}"
              </motion.p>
              <motion.div 
                className="mt-4 flex items-center text-sm text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <svg 
                  className="w-5 h-5 mr-2 text-green-500" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Avaliação verificada
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <motion.section 
      id="entre-em-contato"
      className="bg-gray-50 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h2>
            <p className="text-gray-600 mb-8">
              Estamos prontos para ajudar. Preencha o formulário ou use nossos canais de comunicação.
            </p>
            
            <div className="space-y-4">
              {[
                { 
                  icon: <MapPin className="text-[#C45C24] text-2xl" />, 
                  text: "309 R. Antônio João - Centro Norte, Cuiabá - MT" 
                },
                { 
                  icon: <Phone className="text-[#C45C24] text-2xl" />, 
                  text: "(11) 9999-9999" 
                },
                { 
                  icon: <Mail className="text-[#C45C24] text-2xl" />, 
                  text: "contato@escritorio.com.br" 
                }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg transition-all"
                  whileHover={{ 
                    x: 10,
                    backgroundColor: "#f5f5f5"
                  }}
                >
                  {contact.icon}
                  <span className="text-gray-700">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Soluções Jurídicas Inteligentes
            </h2>
            <p className="text-lg text-gray-600">
              Transformando desafios legais em oportunidades estratégicas com expertise personalizada.
            </p>
            <div className="flex space-x-4 mt-8">
              <motion.a 
                href="tel:+5511999999999" 
                className="bg-[#C45C24] hover:bg-[#A34B1D] text-white px-6 py-3 rounded-full transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ligue Agora
              </motion.a>
              <motion.a 
                href="https://wa.me/5511999999999" 
                className="bg-[#C45C24] hover:bg-[#A34B1D] text-white px-6 py-3 rounded-full transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale no WhatsApp
              </motion.a>
            </div>
          </div>

          {/* Right Column - Infinite Scroll Images */}
          <div className="flex justify-end">
            <div className="w-full md:w-[calc(2/3*1.3)]">
              <InfiniteScrollImages />
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <LegalServicesSection />
      <ProcessSection />
      <PracticeAreasSection />
      <ExperienceNumbersSection />
      <FrequentQuestionsSection />

      {/* Sobre Nós */}
      <AboutUsSection />

      {/* Depoimentos */}
      <TestimonialsSection />

      {/* Contato */}
      <ContactSection />

      <Footer />
      
      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsappButton variant="default" size="lg" />
      </div>
    </div>
  );
}