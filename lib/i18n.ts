export type Language = 'en' | 'tr';

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      titleLine1: "AI Assistant",
      titleLine2: "Trained On",
      titleLine3: "Your Data",
      titleHighlight1: "AI",
      titleHighlight2: "Your Data",
      title: "AI Assistant Trained On Your Data",
      subtitle: "We build private AI assistants trained exclusively on your company data — no data sharing, no generic answers, complete enterprise control.",
      microLine: "Your data never leaves your infrastructure",
      cta1: "Request Demo",
      cta2: "See How It Works",
      topBadge: "Enterprise AI Platform",
      badge1: {
        title: "On Your Infrastructure",
        desc: "Your data never leaves your servers"
      },
      badge2: {
        title: "5x Faster",
        desc: "Response time improvement"
      },
      stats: {
        clients: "Designed for Enterprise Use",
        support: "Trained on Your Brand Knowledge"
      },
      trustNote: ""
    },
    problem: {
      tag: "The Problem",
      title: "Generic AI Wasn't Built for Your Business",
      subtitle: "Off-the-shelf AI tools expose your sensitive data, deliver generic responses, and give you zero control over what AI says on your behalf.",
      pain1: {
        title: "Your Data Gets Exposed",
        desc: "Shared AI platforms use your documents to train models that competitors can access"
      },
      pain2: {
        title: "Generic, Off-Brand Answers",
        desc: "AI doesn't know your products, terminology, or brand voice — and it shows"
      },
      pain3: {
        title: "Zero Control Over AI Behavior",
        desc: "You can't govern what the AI says, what it avoids, or how it represents your company"
      },
      bridge: "There's a better way"
    },
    howWeSolve: {
      tag: "How It Works",
      title: "Your Data. Your AI. Your Control.",
      subtitle: "We build, deploy, and maintain a private AI assistant that runs on your infrastructure — trained exclusively on your data.",
      listen: {
        title: "Connect Your Data",
        desc: "We securely connect to your company data — documents, CRM, knowledge base — without moving it off your servers. On-premise or private cloud."
      },
      learn: {
        title: "Train the AI",
        desc: "Your AI assistant learns your brand tone, products, and workflows using MCP protocol. Zero data leakage. Stays 100% private to your organization."
      },
      act: {
        title: "Deploy & Scale",
        desc: "Goes live on your channels in days — WhatsApp, Slack, web, custom API. Fully private, fully controlled, fully yours."
      },
      bridge: "Powered by the system below"
    },
    technology: {
      tag: "Technology",
      title: "Built on Advanced Architecture",
      subtitle: "Enterprise-grade technology stack designed for security, privacy, and scale",
      t1: {
        tag: "RAG",
        title: "Retrieval-Augmented Generation",
        desc: "Real-time retrieval from your knowledge base. Every answer is grounded in your actual data — never hallucinated, always accurate and current."
      },
      t2: {
        tag: "MCP",
        title: "Model Context Protocol",
        desc: "A secure bridge between your data and the AI model. Zero data leakage guaranteed. Your information never trains external shared models."
      },
      t3: {
        tag: "On-Premise",
        title: "Private Infrastructure",
        desc: "Deploy entirely within your own servers. Full data sovereignty with GDPR, KVKK, and enterprise security standards compliance."
      },
      t4: {
        tag: "Frontier AI",
        title: "Latest Language Models",
        desc: "Powered by the most advanced AI models available — fine-tuned on your data for your specific industry, tone, and use case."
      }
    },
    expertise: {
      our: "Our",
      title: "Solution",
      subtitle: "AI assistants built on your data, with enterprise-grade privacy",
      card1: {
        title: "Custom AI Assistant",
        desc: "Trained exclusively on your company data — understands your brand, products, and workflows",
        icon: "brain"
      },
      card2: {
        title: "Privacy-First Architecture",
        desc: "Your data never leaves your infrastructure. Full compliance with GDPR, KVKK, and enterprise security standards",
        icon: "message"
      },
      card3: {
        title: "MCP Protocol Security",
        desc: "Built on Model Context Protocol for secure, controlled AI interactions with zero data leakage",
        icon: "settings"
      },
      card4: {
        title: "Seamless Integration",
        desc: "Connects to your existing tools — CRM, WhatsApp, Slack, and custom APIs in days, not months",
        icon: "zap"
      }
    },
    services: {
      title: "Services",
      heading: "What You Get",
      coreLabel: "Core Service",
      card1: {
        title: "Private Knowledge AI",
        desc: "An internal AI assistant trained on your docs, policies, and manuals — answers employee questions instantly",
        features: ["Trained on your documents", "Brand-voice responses", "Multi-language support"]
      },
      card2: {
        title: "Customer Support AI",
        desc: "Deploy an AI that handles customer queries 24/7 — on-brand, always accurate, seamlessly hands off to humans",
        features: ["24/7 availability", "Seamless human handoff", "WhatsApp, web & custom channels"]
      },
      card3: {
        title: "Workflow Automation",
        desc: "Automate repetitive business processes and connect your AI to the tools your team already uses",
        features: ["Process automation", "CRM & API integration", "Smart triggers & scheduling"]
      },
      cta: "See how these work together →"
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
        desc: "Personalize your assistant's personality, tone, and responses. Our AI learns from your brand voice and customer interactions."
      },
      step3: {
        title: "Deploy & Scale",
        desc: "Launch your AI assistant across multiple channels. Monitor performance and let AI handle thousands of conversations simultaneously."
      }
    },
    whyUs: {
      title: "WHY TEAMS CHOOSE US",
      subtitle: "What makes us different",
      card1: {
        title: "Multilingual AI",
        desc: "Native understanding in 50+ languages including Turkish, English, Arabic"
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
      title: "Real Results",
      subtitle: "Outcome-based metrics measured across real client deployments",
      note: "Measured across real client deployments",
      metric1: {
        value: "70%",
        label: "Cost Reduction",
        desc: "Lower support & operational costs"
      },
      metric2: {
        value: "5x",
        label: "Faster Response",
        desc: "Instant answers around the clock"
      },
      metric3: {
        value: "95%",
        label: "Satisfaction",
        desc: "Higher customer happiness scores"
      },
      metric4: {
        value: "100%",
        label: "Data Privacy",
        desc: "Zero data leaves your infrastructure"
      }
    },
    testimonials: {
      proven: "Proven",
      title: "SUCCESS STORIES",
      subtitle: "Real teams. Real deployments. Real impact.",
      card1: {
        quote: "KLEXAI reduced our support costs by 70% while improving response quality.",
        author: "Sarah Johnson",
        role: "CEO, TechStart Inc"
      },
      card2: {
        quote: "KLEXAI's natural Turkish conversation flow is incredible. Our customers love the authentic interactions.",
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
      title: "Frequently Asked Questions",
      q1: "Why can't we just use ChatGPT or other public AI models?",
      a1: "Public AI models don't know your business — they give generic answers, can't access your internal data, and every conversation is stored on their servers. Your company data, customer info, and trade secrets become their training data. KLEXAI builds a private AI on YOUR infrastructure, trained only on YOUR data, with zero data leakage. It answers exactly what your team or customers need — not generic internet knowledge.",
      q2: "How is our company data protected?",
      a2: "Your data never leaves your infrastructure. We use MCP (Model Context Protocol) to create a secure bridge between the AI and your data — the AI reads and understands your documents, but nothing is sent to external servers. Full GDPR and KVKK compliance, end-to-end encryption, and you maintain complete ownership at all times. Unlike ChatGPT or Gemini, your data is never used to train anyone else's model.",
      q3: "What does the pricing look like?",
      a3: "Every project is different — pricing depends on your data volume, number of channels, and complexity of workflows. We offer flexible monthly plans that scale with your needs. Book a free consultation and we'll give you a clear quote based on your specific use case. No hidden fees, no long-term lock-in.",
      q4: "How long does setup take and what do we need to provide?",
      a4: "Most teams go live in 5-10 business days. You provide access to your documents, knowledge base, or CRM — we handle everything else. No complex technical setup required on your end. We connect, train the AI on your brand tone and workflows, test thoroughly, and deploy across your channels.",
      q5: "What if the AI gives a wrong answer or can't handle a question?",
      a5: "The AI knows its limits. When it encounters something outside its training data or a complex situation requiring human judgment, it seamlessly escalates to your team with full conversation context. No customer is ever left hanging. Plus, every interaction improves the system — it learns from corrections and gets more accurate over time."
    },
    cta: {
      title: "Ready to Give Your Company Its Own AI?",
      subtitle: "Book a free consultation — we'll show you exactly what a private AI assistant looks like for your specific use case.",
      btn1: "Request a Demo",
      btn2: "Free Consultation",
      trust: {
        commitment: "No Commitment",
        security: "Enterprise-Grade Security",
        speed: "Live in Days"
      }
    },
    contact: {
      title: "Talk to an AI Expert",
      subtitle: "Tell us about your use case and we'll show you exactly how a private AI assistant can work for your team.",
      name: "Your Name",
      email: "Your Email",
      message: "Describe your use case, team size, or the challenge you want to solve",
      submit: "Request Free Consultation",
      sending: "Sending...",
      success: "✓ Message sent! We'll get back to you within 24 hours.",
      error: "✗ Failed to send. Please try again or reach out on LinkedIn.",
      trust: "No commitment · We reply within 24 hours · Enterprise-ready"
    },
    footer: {
      kvkk: "KVKK",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "korhan.kucuk@academiadanismanlik.com",
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
      titleLine1: "Şirketinize Özel",
      titleLine2: "Güvenli AI",
      titleLine3: "Asistanı",
      titleHighlight1: "AI",
      titleHighlight2: "Asistanı",
      title: "Şirketinize Özel Güvenli AI Asistanı",
      subtitle: "Kurumsal verilerinizle eğitilmiş, altyapınızdan çıkmayan, tam kontrol sizde olan özel AI çözümleri geliştiriyoruz.",
      microLine: "Verileriniz asla üçüncü taraflarla paylaşılmaz",
      cta1: "Ücretsiz Keşif Görüşmesi",
      cta2: "Nasıl Çalışır?",
      topBadge: "Kurumsal AI Platformu",
      badge1: {
        title: "Tam Veri Güvenliği",
        desc: "MCP protokolü ile sıfır veri sızıntısı"
      },
      badge2: {
        title: "5-10 Günde Devrede",
        desc: "Hızlı kurulum, kesintisiz entegrasyon"
      },
      stats: {
        clients: "Kurumsal Kullanım İçin Tasarlandı",
        support: "Marka Bilginizle Eğitildi"
      },
      trustNote: ""
    },
    problem: {
      tag: "Problem",
      title: "Genel AI İşletmeniz İçin Tasarlanmadı",
      subtitle: "Hazır AI araçları hassas verilerinizi ifşa eder, genel yanıtlar üretir ve adınıza ne söylediği üzerinde size sıfır kontrol bırakır.",
      pain1: {
        title: "Verileriniz İfşa Oluyor",
        desc: "Paylaşımlı AI platformları belgelerinizi rakiplerin erişebildiği modelleri eğitmek için kullanıyor"
      },
      pain2: {
        title: "Genel, Marka Dışı Yanıtlar",
        desc: "AI ürünlerinizi, terminolojinizi veya marka sesinizi bilmiyor — ve bu belli oluyor"
      },
      pain3: {
        title: "AI Davranışı Üzerinde Kontrol Yok",
        desc: "AI'ın ne söyleyeceğini, nelerden kaçınacağını veya şirketinizi nasıl temsil edeceğini yönetemiyorsunuz"
      },
      bridge: "Daha iyi bir yol var"
    },
    howWeSolve: {
      tag: "Nasıl Çalışır",
      title: "Süreç Nasıl İşliyor?",
      subtitle: "Verileriniz sizde kalır. AI'nız yalnızca sizin bilginizle çalışır.",
      listen: {
        title: "Veri Entegrasyonu",
        desc: "Mevcut sistemlerinize güvenli şekilde bağlanırız — CRM, belgeler, bilgi tabanı. Verileriniz sunucularınızdan çıkmaz, on-premise veya özel bulut altyapısında kalır."
      },
      learn: {
        title: "Özel Eğitim",
        desc: "AI asistanınız şirketinizin dilini, ürünlerini ve iş süreçlerini öğrenir. MCP protokolü sayesinde eğitim sırasında bile veri güvenliği tam olarak korunur."
      },
      act: {
        title: "Devreye Alma",
        desc: "5-10 iş günü içinde tüm kanallarınızda aktif olur — WhatsApp, web, Slack, özel API. Tam kontrol sizde, ölçeklendirme sınırsız."
      },
      bridge: "Aşağıdaki sistem tarafından desteklenir"
    },
    technology: {
      tag: "Teknoloji",
      title: "İleri Mimari Üzerine İnşa",
      subtitle: "Güvenlik, gizlilik ve ölçek için tasarlanmış kurumsal düzey teknoloji yığını",
      t1: {
        tag: "RAG",
        title: "Retrieval-Augmented Generation",
        desc: "Bilgi tabanınızdan gerçek zamanlı erişim. Her yanıt gerçek verilerinize dayalı — asla halüsinasyon yok, her zaman doğru ve güncel."
      },
      t2: {
        tag: "MCP",
        title: "Model Context Protocol",
        desc: "Verileriniz ile AI modeli arasında güvenli bir köprü. Sıfır veri sızıntısı garantisi. Bilgileriniz harici paylaşımlı modelleri asla eğitmez."
      },
      t3: {
        tag: "On-Premise",
        title: "Özel Altyapı",
        desc: "Tamamen kendi sunucularınızda deploy edin. GDPR, KVKK ve kurumsal güvenlik standartları uyumluluğuyla tam veri egemenliği."
      },
      t4: {
        tag: "Frontier AI",
        title: "En Son Dil Modelleri",
        desc: "Mevcut en gelişmiş AI modelleriyle güçlendirilmiş — verilerinizle sektörünüze ve kullanım durumunuza özel ince ayar yapılmış."
      }
    },
    expertise: {
      our: "Bizim",
      title: "Çözümümüz",
      subtitle: "Şirket verilerinize dayalı, kurumsal düzeyde gizlilikle AI asistanlar",
      card1: {
        title: "Özel AI Asistanı",
        desc: "Yalnızca şirket verilerinizle eğitilir — markanızı, ürünlerinizi ve iş akışlarınızı anlar",
        icon: "brain"
      },
      card2: {
        title: "Gizlilik Öncelikli Mimari",
        desc: "Verileriniz altyapınızdan asla çıkmaz. GDPR, KVKK ve kurumsal güvenlik standartlarına tam uyum",
        icon: "message"
      },
      card3: {
        title: "MCP Protokol Güvenliği",
        desc: "Sıfır veri sızıntısıyla güvenli, kontrollü AI etkileşimleri için Model Context Protocol üzerine inşa edildi",
        icon: "settings"
      },
      card4: {
        title: "Sorunsuz Entegrasyon",
        desc: "Mevcut araçlarınıza bağlanır — CRM, WhatsApp, Slack ve özel API'ler, aylar değil günler içinde",
        icon: "zap"
      }
    },
    services: {
      title: "Hizmetlerimiz",
      heading: "Ne Elde Edersiniz",
      coreLabel: "En Çok Tercih Edilen",
      card1: {
        title: "Kurumsal Bilgi Asistanı",
        desc: "Şirket içi belgeler, politikalar ve prosedürlerle eğitilmiş AI — ekibinizin sorularına saniyeler içinde doğru yanıt verir",
        features: ["Şirket verilerinizle eğitilmiş", "Marka dilinizle yanıt verir", "50+ dil desteği"]
      },
      card2: {
        title: "Müşteri İletişim AI'ı",
        desc: "7/24 müşteri sorularını markanızın tonuyla yanıtlar — doğru, tutarlı ve gerektiğinde insan temsilciye sorunsuz aktarım",
        features: ["Kesintisiz 7/24 hizmet", "Akıllı insan aktarımı", "WhatsApp, web, özel kanallar"]
      },
      card3: {
        title: "Süreç Otomasyonu",
        desc: "Tekrarlayan iş akışlarını otomatikleştirin — CRM güncellemeleri, raporlama, bildirimler ve ekip koordinasyonu",
        features: ["İş akışı otomasyonu", "CRM ve API entegrasyonu", "Akıllı tetikleyiciler"]
      },
      cta: "Detaylı bilgi için görüşme talep edin →"
    },
    howItWorks: {
      title: "NASIL ÇALIŞIR",
      subtitle: "3 basit adımda başlayın",
      step1: {
        title: "Verilerinizi Paylaşın",
        desc: "Belgelerinizi, SSS'lerinizi yükleyin veya bilgi tabanınızı bağlayın. AI'ı işletmenize özel bilgilerle eğitiriz."
      },
      step2: {
        title: "Özelleştirin ve Eğitin",
        desc: "AI asistanınızın kişiliğini, tonunu ve yanıtlarını özelleştirin. Marka sesinizden ve müşteri etkileşimlerinizden öğrenir."
      },
      step3: {
        title: "Devreye Alın ve Ölçeklendirin",
        desc: "AI asistanınızı birden fazla kanalda başlatın. Performansı izleyin, binlerce konuşmayı aynı anda yönetin."
      }
    },
    whyUs: {
      title: "NEDEN BİZ?",
      subtitle: "Bizi farklı kılan özellikler",
      card1: {
        title: "Çok Dilli AI",
        desc: "Türkçe, İngilizce, Arapça dahil 50+ dilde doğal anlama"
      },
      card2: {
        title: "Ton Uyarlama",
        desc: "Kullanıcının iletişim tarzına uyum sağlar"
      },
      card3: {
        title: "Veri Güvenliği",
        desc: "Verileriniz güvende ve özel kalır"
      },
      card4: {
        title: "Hızlı Kurulum",
        desc: "Aylar değil, günler içinde devreye alın"
      },
      card5: {
        title: "Ölçeklenebilir",
        desc: "İşletmenizle birlikte büyür"
      }
    },
    results: {
      title: "Gerçek Sonuçlar",
      subtitle: "Gerçek müşteri projelerinden ölçülen sonuç odaklı metrikler",
      note: "Gerçek müşteri projelerinden ölçülmüştür",
      metric1: {
        value: "70%",
        label: "Maliyet Tasarrufu",
        desc: "Daha düşük destek ve operasyonel maliyet"
      },
      metric2: {
        value: "5x",
        label: "Daha Hızlı",
        desc: "7/24 anında yanıt"
      },
      metric3: {
        value: "95%",
        label: "Memnuniyet",
        desc: "Yüksek müşteri memnuniyeti puanları"
      },
      metric4: {
        value: "100%",
        label: "Veri Gizliliği",
        desc: "Altyapınızdan sıfır veri çıkışı"
      }
    },
    testimonials: {
      proven: "Kanıtlanmış",
      title: "BAŞARI HİKAYELERİ",
      subtitle: "Gerçek ekipler. Gerçek sonuçlar. Gerçek etki.",
      card1: {
        quote: "KLEXAI destek maliyetlerimizi %70 azalttı ve yanıt kalitesini artırdı.",
        author: "Sarah Johnson",
        role: "CEO, TechStart Inc"
      },
      card2: {
        quote: "KLEXAI'nin doğal Türkçe konuşma akışı harika. Müşterilerimiz otantik etkileşimleri çok beğeniyor.",
        author: "Michael Chen",
        role: "CTO, DataFlow Solutions"
      },
      card3: {
        quote: "Ekibimiz artık stratejik işlere odaklanıyor. AI rutin görevleri mükemmel yönetiyor.",
        author: "Emma Rodriguez",
        role: "Operasyon Müdürü, GrowthCo"
      }
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      q1: "Neden ChatGPT veya diğer halka açık AI modellerini kullanamıyoruz?",
      a1: "Halka açık AI modelleri işletmenizi tanımaz — genel yanıtlar verir, dahili verilerinize erişemez ve her konuşma sunucularında saklanır. Şirket verileriniz, müşteri bilgileriniz ve ticari sırlarınız onların eğitim verisi olur. KLEXAI, SİZİN altyapınızda, yalnızca SİZİN verilerinizle eğitilmiş, sıfır veri sızıntısıyla özel bir AI oluşturur.",
      q2: "Şirket verilerimiz nasıl korunuyor?",
      a2: "Verileriniz altyapınızdan asla çıkmaz. MCP (Model Context Protocol) kullanarak AI ile verileriniz arasında güvenli bir köprü oluştururuz — AI belgelerinizi okur ve anlar, ancak hiçbir şey harici sunuculara gönderilmez. Tam GDPR ve KVKK uyumu, uçtan uca şifreleme. ChatGPT veya Gemini'den farklı olarak verileriniz başka hiçbir modeli eğitmek için kullanılmaz.",
      q3: "Fiyatlandırma nasıl çalışıyor?",
      a3: "Her proje farklıdır — fiyatlandırma veri hacminize, kanal sayınıza ve iş akışlarınızın karmaşıklığına bağlıdır. İhtiyaçlarınızla birlikte ölçeklenen esnek aylık planlar sunuyoruz. Ücretsiz danışmanlık randevusu alın, kullanım durumunuza özel net bir teklif sunalım. Gizli ücret yok, uzun vadeli bağlayıcılık yok.",
      q4: "Kurulum ne kadar sürer ve bizden ne gerekiyor?",
      a4: "Çoğu ekip 5-10 iş günü içinde yayına geçer. Belgelerinize, bilgi tabanınıza veya CRM'inize erişim sağlarsınız — gerisini biz hallederiz. Sizin tarafınızda karmaşık teknik kurulum gerekmez. Bağlanır, AI'ı marka tonunuz ve iş akışlarınızla eğitir, kapsamlı test eder ve kanallarınızda devreye alırız.",
      q5: "AI yanlış yanıt verirse veya bir soruyu cevaplayamazsa ne olur?",
      a5: "AI sınırlarını bilir. Eğitim verilerinin dışında bir şeyle karşılaştığında veya insan muhakemesi gerektiren karmaşık bir durumda, tam konuşma bağlamıyla ekibinize sorunsuz şekilde yönlendirir. Hiçbir müşteri asla cevapsız bırakılmaz. Ayrıca her etkileşim sistemi geliştirir — düzeltmelerden öğrenir ve zamanla daha doğru hale gelir."
    },
    cta: {
      title: "Şirketinize Özel AI'a Hazır mısınız?",
      subtitle: "Ücretsiz danışmanlık için randevu alın — özel kullanım durumunuz için özel AI asistanın nasıl görüneceğini size gösterelim.",
      btn1: "Demo Talep Et",
      btn2: "Ücretsiz Görüşme",
      trust: {
        commitment: "Taahhüt Yok",
        security: "Kurumsal Güvenlik",
        speed: "Günler İçinde Devrede"
      }
    },
    contact: {
      title: "Projenizi Konuşalım",
      subtitle: "İhtiyacınızı anlatalım, şirketinize özel AI çözümünün nasıl çalışacağını birlikte planlayalım.",
      name: "Ad Soyad",
      email: "Kurumsal E-posta",
      message: "Hangi süreçleri otomatikleştirmek istiyorsunuz? Ekip büyüklüğünüz ve sektörünüz nedir?",
      submit: "Ücretsiz Keşif Görüşmesi Talep Et",
      sending: "Gönderiliyor...",
      success: "✓ Talebiniz alındı! 24 saat içinde size dönüş yapacağız.",
      error: "✗ Gönderilemedi. Lütfen tekrar deneyin veya LinkedIn üzerinden ulaşın.",
      trust: "Taahhüt yok · 24 saat içinde yanıt · KVKK uyumlu"
    },
    footer: {
      kvkk: "KVKK",
      privacy: "Gizlilik Politikası",
      terms: "Hizmet Şartları",
      contact: "korhan.kucuk@academiadanismanlik.com",
      copyright: "© 2025 KLEXAI STUDIO. Tüm Hakları Saklıdır."
    }
  }
};

export function getTranslation(lang: Language) {
  return translations[lang];
}
