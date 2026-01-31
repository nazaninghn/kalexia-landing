export type Language = 'en' | 'tr';

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "AI Assistant That Speaks Your Tone and Automates Your Work",
      subtitle: "Chatbot, Voice Assistant, and Smart Automation for Businesses",
      cta1: "Request Demo",
      cta2: "Free Consultation",
    },
    about: {
      why: "Problems",
      title: "WE SOLVE",
      problem1: {
        title: "Time Waste",
        desc: "Repetitive tasks consume your team's valuable time"
      },
      problem2: {
        title: "Slow Response",
        desc: "Customers wait too long for answers"
      },
      problem3: {
        title: "High Costs",
        desc: "Human workforce expenses keep growing"
      },
      problem4: {
        title: "Poor UX",
        desc: "Inconsistent customer experience"
      },
      solution: "We solve these with AI, not just simple chatbots.",
      cta: "See How",
    },
    expertise: {
      our: "Our",
      title: "SOLUTION",
      card1: {
        title: "Tone & Emotion Understanding",
        desc: "AI that understands user tone and emotions",
        icon: "brain"
      },
      card2: {
        title: "Natural Text & Voice Response",
        desc: "Natural responses in text and voice",
        icon: "message"
      },
      card3: {
        title: "Business Personalization",
        desc: "Customized for every business",
        icon: "settings"
      },
      card4: {
        title: "Process Automation",
        desc: "Automate workflows intelligently",
        icon: "zap"
      }
    },
    services: {
      our: "Our",
      title: "SERVICES",
      card1: {
        title: "Smart Personal Assistant",
        desc: "Text and voice chatbot with intelligent responses",
        features: ["Voice to Text", "Text to Voice", "Tone adaptation"]
      },
      card2: {
        title: "Process Automation",
        desc: "Automate your business workflows",
        features: ["Workflow automation", "Task scheduling", "Smart triggers"]
      },
      card3: {
        title: "API & Integration",
        desc: "Connect with your existing systems",
        features: ["REST API", "Webhooks", "Custom integration"]
      }
    },
    howItWorks: {
      title: "HOW IT WORKS",
      subtitle: "Get started in 3 simple steps",
      step1: {
        title: "Share Your Data",
        desc: "Upload your documents, FAQs, or connect your knowledge base. We'll train the AI on your specific business information."
      },
      step2: {
        title: "Customize & Train",
        desc: "Personalize your chatbot's personality, tone, and responses. Our AI learns from your brand voice and customer interactions."
      },
      step3: {
        title: "Deploy & Scale",
        desc: "Launch your chatbot across multiple channels. Monitor performance and let AI handle thousands of conversations simultaneously."
      }
    },
    whyUs: {
      title: "WHY US?",
      subtitle: "What makes us different",
      card1: {
        title: "Persian Language Support",
        desc: "Native Persian understanding and response"
      },
      card2: {
        title: "Tone Adaptation",
        desc: "AI adapts to user's communication style"
      },
      card3: {
        title: "Data Security",
        desc: "Your data stays private and secure"
      },
      card4: {
        title: "Fast Deployment",
        desc: "Get started in days, not months"
      },
      card5: {
        title: "Scalable",
        desc: "Grows with your business needs"
      }
    },
    results: {
      title: "REAL RESULTS",
      subtitle: "Outcome-based metrics",
      metric1: {
        value: "70%",
        label: "Cost Reduction",
        desc: "Lower support costs"
      },
      metric2: {
        value: "5x",
        label: "Faster Response",
        desc: "Instant answers 24/7"
      },
      metric3: {
        value: "95%",
        label: "Satisfaction",
        desc: "Higher customer happiness"
      },
      metric4: {
        value: "100%",
        label: "Team Focus",
        desc: "Focus on important work"
      }
    },
    testimonials: {
      proven: "Proven",
      title: "SUCCESS STORIES",
      card1: {
        quote: "KLEXAI reduced our support costs by 70% while improving response quality.",
        author: "Sarah Johnson",
        role: "CEO, TechStart Inc"
      },
      card2: {
        quote: "The Persian tone adaptation is incredible. Customers love the natural conversations.",
        author: "Michael Chen",
        role: "CTO, DataFlow Solutions"
      },
      card3: {
        quote: "Our team now focuses on strategic work. AI handles the repetitive tasks perfectly.",
        author: "Emma Rodriguez",
        role: "Operations Manager, GrowthCo"
      }
    },
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS",
      q1: "How long does it take to set up a chatbot?",
      a1: "Most chatbots can be set up and deployed within 1-2 weeks, depending on complexity and customization requirements.",
      q2: "Can the chatbot integrate with my existing systems?",
      a2: "Yes! Our chatbots integrate with popular CRMs, messaging platforms (WhatsApp, Telegram, Instagram), and custom APIs.",
      q3: "What languages does the chatbot support?",
      a3: "Our AI chatbots support 50+ languages including English, Turkish, Persian, Arabic, Spanish, and more.",
      q4: "How does the RAG system work?",
      a4: "RAG (Retrieval-Augmented Generation) searches your documents and knowledge base to provide accurate, context-aware answers based on your actual data.",
      q5: "What happens if the chatbot can't answer a question?",
      a5: "The chatbot can seamlessly transfer the conversation to a human agent or collect contact information for follow-up."
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Join hundreds of companies using AI to automate their workflow and boost productivity",
      btn1: "Get Started Now",
      btn2: "Learn More"
    },
    contact: {
      getIn: "Get in",
      title: "TOUCH",
      name: "Your Name",
      email: "Your Email",
      message: "Tell us about your business needs",
      submit: "Send Message",
      sending: "Sending...",
      success: "✓ Message sent successfully! We'll get back to you soon.",
      error: "✗ Failed to send message. Please try again or contact us via WhatsApp."
    },
    footer: {
      copyright: "© 2025 KLEXAI STUDIO. All Rights Reserved."
    }
  },
  tr: {
    nav: {
      about: "Hakkımızda",
      services: "Hizmetler",
      contact: "İletişim",
    },
    hero: {
      title: "Sizin Tonunuzla Konuşan ve İşlerinizi Otomatikleştiren AI Asistan",
      subtitle: "İşletmeler için Chatbot, Sesli Asistan ve Akıllı Otomasyon",
      cta1: "Demo Talep Et",
      cta2: "Ücretsiz Danışmanlık",
    },
    about: {
      why: "Çözdüğümüz",
      title: "SORUNLAR",
      problem1: {
        title: "Zaman Kaybı",
        desc: "Tekrarlayan görevler ekibinizin değerli zamanını tüketiyor"
      },
      problem2: {
        title: "Yavaş Yanıt",
        desc: "Müşteriler cevap için çok uzun bekliyor"
      },
      problem3: {
        title: "Yüksek Maliyetler",
        desc: "İnsan gücü masrafları sürekli artıyor"
      },
      problem4: {
        title: "Zayıf Deneyim",
        desc: "Tutarsız müşteri deneyimi"
      },
      solution: "Bunları basit chatbot'larla değil, AI ile çözüyoruz.",
      cta: "Nasıl Olduğunu Gör",
    },
    expertise: {
      our: "Bizim",
      title: "ÇÖZÜMÜMÜZ",
      card1: {
        title: "Ton ve Duygu Anlama",
        desc: "Kullanıcı tonunu ve duygularını anlayan AI",
        icon: "brain"
      },
      card2: {
        title: "Doğal Metin ve Ses Yanıtı",
        desc: "Metin ve seste doğal yanıtlar",
        icon: "message"
      },
      card3: {
        title: "İşletme Kişiselleştirme",
        desc: "Her işletme için özelleştirilmiş",
        icon: "settings"
      },
      card4: {
        title: "Süreç Otomasyonu",
        desc: "İş akışlarını akıllıca otomatikleştir",
        icon: "zap"
      }
    },
    services: {
      our: "Bizim",
      title: "HİZMETLER",
      card1: {
        title: "Akıllı Kişisel Asistan",
        desc: "Akıllı yanıtlarla metin ve sesli chatbot",
        features: ["Ses'ten Metin'e", "Metin'den Ses'e", "Ton uyarlama"]
      },
      card2: {
        title: "Süreç Otomasyonu",
        desc: "İş akışlarınızı otomatikleştirin",
        features: ["İş akışı otomasyonu", "Görev planlama", "Akıllı tetikleyiciler"]
      },
      card3: {
        title: "API ve Entegrasyon",
        desc: "Mevcut sistemlerinizle bağlantı kurun",
        features: ["REST API", "Webhook'lar", "Özel entegrasyon"]
      }
    },
    howItWorks: {
      title: "NASIL ÇALIŞIR",
      subtitle: "3 basit adımda başlayın",
      step1: {
        title: "Verilerinizi Paylaşın",
        desc: "Belgelerinizi, SSS'lerinizi yükleyin veya bilgi tabanınızı bağlayın. Yapay zekayı özel iş bilgileriniz üzerinde eğiteceğiz."
      },
      step2: {
        title: "Özelleştirin ve Eğitin",
        desc: "Chatbotunuzun kişiliğini, tonunu ve yanıtlarını kişiselleştirin. Yapay zekamız marka sesinizden ve müşteri etkileşimlerinden öğrenir."
      },
      step3: {
        title: "Dağıtın ve Ölçeklendirin",
        desc: "Chatbotunuzu birden fazla kanalda başlatın. Performansı izleyin ve yapay zekanın aynı anda binlerce konuşmayı yönetmesine izin verin."
      }
    },
    whyUs: {
      title: "NEDEN BİZ?",
      subtitle: "Bizi farklı kılan nedir",
      card1: {
        title: "Farsça Dil Desteği",
        desc: "Yerel Farsça anlama ve yanıt"
      },
      card2: {
        title: "Ton Uyarlama",
        desc: "AI kullanıcının iletişim tarzına uyum sağlar"
      },
      card3: {
        title: "Veri Güvenliği",
        desc: "Verileriniz özel ve güvende kalır"
      },
      card4: {
        title: "Hızlı Dağıtım",
        desc: "Aylar değil, günler içinde başlayın"
      },
      card5: {
        title: "Ölçeklenebilir",
        desc: "İşletmenizle birlikte büyür"
      }
    },
    results: {
      title: "GERÇEK SONUÇLAR",
      subtitle: "Sonuç odaklı metrikler",
      metric1: {
        value: "70%",
        label: "Maliyet Azaltma",
        desc: "Daha düşük destek maliyetleri"
      },
      metric2: {
        value: "5x",
        label: "Daha Hızlı Yanıt",
        desc: "7/24 anında cevaplar"
      },
      metric3: {
        value: "95%",
        label: "Memnuniyet",
        desc: "Daha yüksek müşteri mutluluğu"
      },
      metric4: {
        value: "100%",
        label: "Ekip Odağı",
        desc: "Önemli işlere odaklanın"
      }
    },
    testimonials: {
      proven: "Kanıtlanmış",
      title: "BAŞARI HİKAYELERİ",
      card1: {
        quote: "KLEXAI destek maliyetlerimizi %70 azalttı ve yanıt kalitesini artırdı.",
        author: "Sarah Johnson",
        role: "CEO, TechStart Inc"
      },
      card2: {
        quote: "Farsça ton uyarlaması inanılmaz. Müşteriler doğal konuşmaları seviyor.",
        author: "Michael Chen",
        role: "CTO, DataFlow Solutions"
      },
      card3: {
        quote: "Ekibimiz artık stratejik işlere odaklanıyor. AI tekrarlayan görevleri mükemmel hallediyor.",
        author: "Emma Rodriguez",
        role: "Operasyon Müdürü, GrowthCo"
      }
    },
    faq: {
      title: "SIK SORULAN SORULAR",
      q1: "Bir chatbot kurmak ne kadar sürer?",
      a1: "Çoğu chatbot, karmaşıklığa ve özelleştirme gereksinimlerine bağlı olarak 1-2 hafta içinde kurulabilir ve devreye alınabilir.",
      q2: "Chatbot mevcut sistemlerimle entegre olabilir mi?",
      a2: "Evet! Chatbotlarımız popüler CRM'ler, mesajlaşma platformları (WhatsApp, Telegram, Instagram) ve özel API'lerle entegre olur.",
      q3: "Chatbot hangi dilleri destekliyor?",
      a3: "Yapay zeka chatbotlarımız İngilizce, Türkçe, Farsça, Arapça, İspanyolca ve daha fazlası dahil olmak üzere 50'den fazla dili destekler.",
      q4: "RAG sistemi nasıl çalışır?",
      a4: "RAG (Retrieval-Augmented Generation), belgelerinizi ve bilgi tabanınızı arayarak gerçek verilerinize dayalı doğru, bağlama duyarlı yanıtlar sağlar.",
      q5: "Chatbot bir soruyu yanıtlayamazsa ne olur?",
      a5: "Chatbot, konuşmayı sorunsuz bir şekilde insan temsilciye aktarabilir veya takip için iletişim bilgilerini toplayabilir."
    },
    cta: {
      title: "İşinizi Dönüştürmeye Hazır mısınız?",
      subtitle: "İş akışlarını otomatikleştirmek ve üretkenliği artırmak için yapay zeka kullanan yüzlerce şirkete katılın",
      btn1: "Hemen Başlayın",
      btn2: "Daha Fazla Bilgi"
    },
    contact: {
      getIn: "İletişime",
      title: "GEÇİN",
      name: "Adınız",
      email: "E-posta Adresiniz",
      message: "İş ihtiyaçlarınız hakkında bize bilgi verin",
      submit: "Mesaj Gönder",
      sending: "Gönderiliyor...",
      success: "✓ Mesaj başarıyla gönderildi! En kısa sürede size geri döneceğiz.",
      error: "✗ Mesaj gönderilemedi. Lütfen tekrar deneyin veya WhatsApp üzerinden bize ulaşın."
    },
    footer: {
      copyright: "© 2025 KLEXAI STUDIO. Tüm Hakları Saklıdır."
    }
  }
};

export function getTranslation(lang: Language) {
  return translations[lang];
}
