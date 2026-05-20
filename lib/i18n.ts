export type Language = 'en' | 'tr';

export const translations = {
  en: {
    nav: { about: "Services", services: "Industries", industries: "Industries", contact: "Contact" },
    hero: {
      titleLine1: "Automate Repetitive",
      titleLine2: "Business Workflows",
      titleLine3: "With AI",
      titleHighlight1: "AI",
      titleHighlight2: "With AI",
      title: "Automate Repetitive Business Workflows With AI",
      subtitle: "KlexAI helps businesses automate sales, support, and operations using custom AI workflows tailored to their business processes.",
      microLine: "Custom AI workflows • AI agents • Business automation • Fast deployment",
      cta1: "Book Free AI Audit",
      cta2: "Explore Use Cases",
      badge1: { title: "Fast Deployment", desc: "Most systems live in days" },
      badge2: { title: "Custom Workflows", desc: "Built for your operations" },
    },
    services: {
      title: "AI Automation Services",
      coreLabel: "Most Popular",
      card1: { title: "AI Lead Generation", desc: "Automatically find, enrich, organize, and qualify leads for your sales pipeline.", features: ["Lead scraping", "Data enrichment", "Lead qualification", "CRM syncing"] },
      card2: { title: "AI Customer Support", desc: "Deploy AI agents that instantly handle repetitive support conversations across multiple channels.", features: ["Website chatbots", "WhatsApp AI", "Instant replies", "Smart human handoff"] },
      card3: { title: "Workflow Automation", desc: "Automate repetitive internal workflows and connect business tools together.", features: ["CRM automation", "Reporting systems", "Internal workflows", "Operational automation"] },
      cta: "See all automation services →"
    },
    industries: {
      title: "Industries We Help Automate",
      subtitle: "Custom AI workflows tailored for different operational needs.",
      items: [
        { title: "Clinics & Healthcare", desc: "Patient communication, appointments, follow-ups" },
        { title: "Marketing Agencies", desc: "Lead generation, outreach, reporting" },
        { title: "Real Estate", desc: "Inquiries, follow-ups, lead workflows" },
        { title: "Ecommerce", desc: "Customer support, retention workflows" },
        { title: "SaaS Companies", desc: "Onboarding, support, internal workflows" },
        { title: "Dental Clinics", desc: "Patient communication, appointments" },
        { title: "Beauty Clinics", desc: "Instagram inquiries, bookings" },
        { title: "Consulting Firms", desc: "Client onboarding, scheduling" },
        { title: "Law Firms", desc: "Client intake, document workflows" },
        { title: "Financial Services", desc: "Operational workflows, reporting" },
        { title: "Recruitment", desc: "Candidate workflows, outreach" },
        { title: "Enterprise Teams", desc: "Complex operational environments" },
      ]
    },
    process: {
      title: "Simple Process. Fast Execution.",
      steps: [
        { num: "01", title: "Business Audit", desc: "We analyze your workflows and identify automation opportunities with the highest operational impact." },
        { num: "02", title: "Build & Integrate", desc: "We design and integrate custom AI systems tailored to your workflows and business operations." },
        { num: "03", title: "Optimize & Scale", desc: "We continuously improve performance and help scale your automation systems as your business grows." },
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "How long does implementation take?", a: "Most automation systems can be deployed within days or weeks depending on complexity." },
        { q: "Can your systems work with our existing tools?", a: "Yes. KlexAI integrates with CRMs, communication platforms, and operational systems." },
        { q: "Is this suitable for small businesses?", a: "Yes. Our systems are designed for both growing businesses and larger operations." },
        { q: "Do you provide custom workflows?", a: "Every automation system is tailored specifically to the client's workflows and goals." },
        { q: "What tasks can be automated?", a: "Lead management, support operations, scheduling, reporting, outreach, CRM workflows, and more." },
      ]
    },
    contact: {
      title: "Let's Explore Automation Opportunities",
      subtitle: "Tell us about your workflows, operational bottlenecks, or repetitive tasks — and we'll show you where automation can create immediate value.",
      name: "Your Name",
      email: "Business Email",
      message: "Describe your workflows or challenges",
      submit: "Request Free Consultation",
      sending: "Sending...",
      success: "✓ Sent! We'll get back within 24 hours.",
      error: "✗ Failed. Please try again or reach out on LinkedIn.",
      trust: "No commitment • Fast response • Business-focused solutions"
    },
    footer: {
      kvkk: "KVKK",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "hello@klexai.com",
      copyright: "© 2025 KLEXAI. All Rights Reserved."
    }
  },
  tr: {
    nav: { about: "Hizmetler", services: "Sektörler", industries: "Sektörler", contact: "İletişim" },
    hero: {
      titleLine1: "Tekrarlayan İş",
      titleLine2: "Süreçlerinizi",
      titleLine3: "AI ile Otomatikleştirin",
      titleHighlight1: "AI",
      titleHighlight2: "AI ile Otomatikleştirin",
      title: "Tekrarlayan İş Süreçlerinizi AI ile Otomatikleştirin",
      subtitle: "KlexAI, işletmelerin satış, destek ve operasyonlarını iş süreçlerine özel AI otomasyonlarıyla otomatikleştirmesine yardımcı olur.",
      microLine: "Özel AI iş akışları • AI ajanları • İş otomasyonu • Hızlı kurulum",
      cta1: "Ücretsiz AI Analizi",
      cta2: "Kullanım Örnekleri",
      badge1: { title: "Hızlı Kurulum", desc: "Çoğu sistem günler içinde devrede" },
      badge2: { title: "Özel İş Akışları", desc: "Operasyonlarınıza özel tasarım" },
    },
    services: {
      title: "AI Otomasyon Hizmetleri",
      coreLabel: "En Çok Tercih Edilen",
      card1: { title: "AI Lead Oluşturma", desc: "Satış hattınız için otomatik olarak potansiyel müşteri bulun, zenginleştirin ve nitelendirin.", features: ["Lead toplama", "Veri zenginleştirme", "Lead nitelendirme", "CRM senkronizasyonu"] },
      card2: { title: "AI Müşteri Desteği", desc: "Birden fazla kanalda tekrarlayan destek konuşmalarını anında yöneten AI ajanları devreye alın.", features: ["Web sitesi chatbotları", "WhatsApp AI", "Anında yanıtlar", "Akıllı insan aktarımı"] },
      card3: { title: "İş Akışı Otomasyonu", desc: "Tekrarlayan dahili iş akışlarını otomatikleştirin ve iş araçlarınızı birbirine bağlayın.", features: ["CRM otomasyonu", "Raporlama sistemleri", "Dahili iş akışları", "Operasyonel otomasyon"] },
      cta: "Tüm otomasyon hizmetlerini görün →"
    },
    industries: {
      title: "Otomatikleştirdiğimiz Sektörler",
      subtitle: "Farklı operasyonel ihtiyaçlara özel AI iş akışları.",
      items: [
        { title: "Klinikler & Sağlık", desc: "Hasta iletişimi, randevular, takipler" },
        { title: "Pazarlama Ajansları", desc: "Lead oluşturma, outreach, raporlama" },
        { title: "Gayrimenkul", desc: "Sorular, takipler, lead iş akışları" },
        { title: "E-ticaret", desc: "Müşteri desteği, sadakat iş akışları" },
        { title: "SaaS Şirketleri", desc: "Onboarding, destek, dahili iş akışları" },
        { title: "Diş Klinikleri", desc: "Hasta iletişimi, randevu sistemleri" },
        { title: "Güzellik Merkezleri", desc: "Instagram soruları, rezervasyonlar" },
        { title: "Danışmanlık Firmaları", desc: "Müşteri onboarding, planlama" },
        { title: "Hukuk Büroları", desc: "Müşteri alımı, belge iş akışları" },
        { title: "Finansal Hizmetler", desc: "Operasyonel iş akışları, raporlama" },
        { title: "İşe Alım Ajansları", desc: "Aday iş akışları, outreach" },
        { title: "Kurumsal Ekipler", desc: "Karmaşık operasyonel ortamlar" },
      ]
    },
    process: {
      title: "Basit Süreç. Hızlı Uygulama.",
      steps: [
        { num: "01", title: "İş Analizi", desc: "İş akışlarınızı analiz eder ve en yüksek operasyonel etkiye sahip otomasyon fırsatlarını belirleriz." },
        { num: "02", title: "Geliştirme & Entegrasyon", desc: "İş akışlarınıza ve operasyonlarınıza özel AI sistemleri tasarlar ve entegre ederiz." },
        { num: "03", title: "Optimizasyon & Ölçeklendirme", desc: "Performansı sürekli iyileştirir ve işletmeniz büyüdükçe otomasyon sistemlerinizi ölçeklendiririz." },
      ]
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      items: [
        { q: "Kurulum ne kadar sürer?", a: "Çoğu otomasyon sistemi karmaşıklığa bağlı olarak günler veya haftalar içinde devreye alınabilir." },
        { q: "Mevcut araçlarımızla çalışabilir mi?", a: "Evet. KlexAI, CRM'ler, iletişim platformları ve operasyonel sistemlerle entegre olur." },
        { q: "Küçük işletmeler için uygun mu?", a: "Evet. Sistemlerimiz hem büyüyen işletmeler hem de büyük operasyonlar için tasarlanmıştır." },
        { q: "Özel iş akışları sunuyor musunuz?", a: "Her otomasyon sistemi, müşterinin iş akışlarına ve hedeflerine özel olarak tasarlanır." },
        { q: "Hangi görevler otomatikleştirilebilir?", a: "Lead yönetimi, destek operasyonları, planlama, raporlama, outreach, CRM iş akışları ve daha fazlası." },
      ]
    },
    contact: {
      title: "İşletmeniz İçin Otomasyon Fırsatlarını Keşfedelim",
      subtitle: "İş akışlarınızı, operasyonel darboğazlarınızı veya tekrarlayan görevlerinizi anlatın — otomasyonun nerede anında değer yaratabileceğini gösterelim.",
      name: "Adınız Soyadınız",
      email: "Kurumsal E-posta",
      message: "İş akışlarınızı veya zorluklarınızı anlatın",
      submit: "Ücretsiz Danışmanlık Talep Edin",
      sending: "Gönderiliyor...",
      success: "✓ Gönderildi! 24 saat içinde dönüş yapacağız.",
      error: "✗ Gönderilemedi. Lütfen tekrar deneyin veya LinkedIn üzerinden ulaşın.",
      trust: "Taahhüt yok • Hızlı yanıt • İş odaklı çözümler"
    },
    footer: {
      kvkk: "KVKK",
      privacy: "Gizlilik Politikası",
      terms: "Hizmet Şartları",
      contact: "hello@klexai.com",
      copyright: "© 2025 KLEXAI. Tüm Hakları Saklıdır."
    }
  }
};

export function getTranslation(lang: Language) {
  return translations[lang];
}
