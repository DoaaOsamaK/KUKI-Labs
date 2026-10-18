import { useEffect, useState, type ReactNode } from "react"

type Language = "ar" | "en"

const copy = {
  ar: {
    nav: ["الفكرة", "كيف نعمل", "الدورة الأولى"],
    contact: "خلينا نحكي",
    menu: "فتح القائمة",
    heroStatus: "فلسطين / الدفعة 01",
    heroTitle: ["الطلاب لا يحتاجون", "تدريباً آخر.", " يحتاجون حصة."],
    heroText:
      "KUKI Labs هو أول مصنع شركات طلابي في فلسطين: نكتشف الموهبة، نبني الفرق، ونحوّل شغلهم إلى منتجات وشركات",
    heroTextStrong: " يملكون جزءاً منها.",
    primaryAction: "شاهد التجربة الأولى",
    secondaryAction: "اقرأ الفكرة",
    visualLabel: "رسم يوضح تحويل المواهب إلى شركات",
    visual: {
      coreTop: "نَبني",
      coreMain: "قيمة",
      coreBottom: "لا ساعات",
      cards: [
        ["INPUT 01", "موهبة", "طلاب من كل الجامعات"],
        ["BUILD 02", "منتج", "مشكلة تستحق الحل"],
        ["OUTPUT 03", "شركة", "ملكية + نمو"],
      ],
    },
    declarationTop: "شركة تُبنى الآن",
    declarationLead: "الاستوديو يبيع ساعات الطلاب.",
    declarationTitle: ["نحن نبني أصولاً", "تكبر قيمتها معهم."],
    declarationText: [
      "الفرق الحقيقي بسيط: الطالب ليس مورداً رخيصاً.",
      "الطالب هنا مؤسس وشريك.",
    ],
    systemLabel: "النظام",
    systemTitle: ["ثلاثة محركات.", "نفس الاتجاه."],
    systemText:
      "شبكة تكتشف، Studio يدرّب ويموّل، وLabs يحوّل أفضل الفرص إلى شركات.",
    engines: [
      {
        id: "01",
        name: "Studio",
        label: "المحرّك النقدي",
        text: "فرق طلابية تنفّذ مشاريع مدفوعة لعملاء حقيقيين. دخل من البداية، تدريب من السوق، وتمويل لما سيأتي.",
        tag: "دخل حقيقي",
      },
      {
        id: "02",
        name: "Labs",
        label: "محرّك النمو",
        text: "أفضل الفرق تأخذ مشكلة حقيقية وتبنيها كمنتج. كوكي تضيف الإرشاد والتمويل والعلاقات، والطلاب يملكون حصة.",
        tag: "أصول تنمو",
      },
      {
        id: "03",
        name: "Network",
        label: "محرّك المواهب",
        text: "النوادي والقمة والمسابقات تكتشف المواهب، وملف كوكي يثبت المهارة ويحدد الفريق والفرصة المناسبة.",
        tag: "10 جامعات",
      },
    ],
    peopleLabel: "من هم؟",
    peopleTitle: ["ليسوا", "متدرّبين."],
    peopleText:
      "أفضل الطلاب من الجامعات الفلسطينية، داخل فرق صغيرة، أمام مشكلة حقيقية، ومع فرصة لامتلاك ما يبنونه.",
    photoAlt: "طلاب يعملون معاً على مشروع",
    stats: ["طالباً", "فرق", "أسابيع"],
    journeyLabel: "حلقة النمو",
    journeyLead: "كل دورة تبني التي بعدها",
    journeyTitle: "من النادي، إلى شركة.",
    journey: [
      ["شبكة الجامعات", "نصل للموهبة قبل الجميع"],
      ["فرق حقيقية", "نختبر الالتزام في السوق"],
      ["منتجات", "نحوّل المشاكل إلى حلول"],
      ["شركات", "نبني قيمة قابلة للنمو"],
      ["شبكة أقوى", "الخريجون يعودون مستثمرين"],
    ],
    returnNote: "الخريجون يعودون كمستثمرين ومرشدين",
    economyLabel: "اقتصاد النموذج",
    economyTitle: ["دخل اليوم،", "قيمة بكرا."],
    economyText:
      "النموذج لا ينتظر نجاح شركة واحدة. مصادر دخل متعددة تموّل التجارب وتراكم الملكية.",
    revenue: [
      ["01", "مشاريع Studio", "نسبة من المشاريع المدفوعة"],
      ["02", "حصص Equity", "ملكية في المنتجات الناجحة"],
      ["03", "شراكات", "رعاية تحديات وبرامج"],
      ["04", "صندوق الجسور", "استثمار صغير، أثر متراكم"],
    ],
    pilotLabel: "الخطوة الجاية",
    pilotTitle: ["نبدأ صغيراً.", "نثبتها فعلياً."],
    pilotText:
      "دورة تجريبية واحدة: ثلاثة فرق تبني ثلاثة منتجات لمشاكل حقيقية، وتنتهي بيوم عرض أمام شركات ومستثمرين.",
    pilotAction: "شارك في الدورة",
    weeks: [
      ["01—02", "اختيار المشكلة والفريق"],
      ["03—06", "بناء واختبار المنتج"],
      ["07—08", "البيع ويوم العرض"],
    ],
    result: "النتيجة",
    resultText: "3 منتجات قابلة للاختبار",
    risksLabel: "بصراحة",
    risksTitle: ["الطموح مهم.", "والوضوح أهم."],
    risksText: "نحن لا نخفي المخاطر؛ نصمّم النموذج من البداية حتى يتعامل معها.",
    risks: [
      ["الأسهم والقانون", "تصميم الحصص والعقود مع محامٍ من اليوم الأول."],
      ["فشل المنتجات", "محفظة تجارب كافية، والـStudio يغطي تكلفة البناء."],
      ["وقت الطالب", "أدوار واضحة، التزام محدد، ومخرجات قابلة للقياس."],
      ["خبرة الأعمال", "مرشدون في السوق والأعمال، وليس في التقنية فقط."],
    ],
    closingTitle: ["أي مشكلة تستحق", "أن نبني حولها", " أول شركة؟"],
    closingText: "Fintech؟ زراعة ذكية؟ تعليم؟ نريد أن نسمع المشكلة من أصحابها.",
    closingAction: "احكِ لنا",
    footer: "نبني شركات فلسطينية من جذورها.",
  },
  en: {
    nav: ["The idea", "How it works", "First cohort"],
    contact: "Let's talk",
    menu: "Open menu",
    heroStatus: "PALESTINE / COHORT 01",
    heroTitle: [
      "Students don't need",
      "another internship.",
      " They need equity.",
    ],
    heroText:
      "KUKI Labs is Palestine's first student venture factory. We find exceptional talent, form focused teams, and turn their work into products and companies",
    heroTextStrong: " they partly own.",
    primaryAction: "Explore the first cohort",
    secondaryAction: "Read the idea",
    visualLabel: "A visual showing talent becoming companies",
    visual: {
      coreTop: "WE BUILD",
      coreMain: "VALUE",
      coreBottom: "NOT HOURS",
      cards: [
        ["INPUT 01", "Talent", "From universities everywhere"],
        ["BUILD 02", "Product", "A problem worth solving"],
        ["OUTPUT 03", "Company", "Ownership + growth"],
      ],
    },
    declarationTop: "A COMPANY IN THE MAKING",
    declarationLead: "A studio sells student hours.",
    declarationTitle: ["We build assets", "that grow with them."],
    declarationText: [
      "The difference is simple: students are not cheap resources.",
      "Here, they are founders and partners.",
    ],
    systemLabel: "The system",
    systemTitle: ["Three engines.", "One direction."],
    systemText:
      "The network discovers. Studio trains and funds. Labs turns the strongest opportunities into companies.",
    engines: [
      {
        id: "01",
        name: "Studio",
        label: "The cash engine",
        text: "Student teams deliver paid work for real clients—generating revenue, market experience, and funding for what comes next.",
        tag: "Real revenue",
      },
      {
        id: "02",
        name: "Labs",
        label: "The growth engine",
        text: "The best teams turn real problems into products. KUKI adds mentorship, initial funding, and access—students retain ownership.",
        tag: "Growing assets",
      },
      {
        id: "03",
        name: "Network",
        label: "The talent engine",
        text: "Clubs, summits, and competitions reveal talent. The KUKI profile proves ability and matches people to the right team.",
        tag: "10 universities",
      },
    ],
    peopleLabel: "Who are they?",
    peopleTitle: ["Not", "interns."],
    peopleText:
      "Exceptional students from Palestinian universities, working in small teams on real problems—with the chance to own what they build.",
    photoAlt: "Students collaborating on a project",
    stats: ["Students", "Teams", "Weeks"],
    journeyLabel: "The flywheel",
    journeyLead: "Every cycle strengthens the next",
    journeyTitle: "From campus club to company.",
    journey: [
      ["University network", "Meet talent before anyone else"],
      ["Real teams", "Test commitment in the market"],
      ["Products", "Turn problems into solutions"],
      ["Companies", "Build value that can grow"],
      ["Stronger network", "Alumni return as investors"],
    ],
    returnNote: "Alumni return as investors and mentors",
    economyLabel: "The economics",
    economyTitle: ["Revenue today.", "Value tomorrow."],
    economyText:
      "The model does not wait for one breakout company. Diverse revenue funds experiments and compounds ownership.",
    revenue: [
      ["01", "Studio projects", "A share of paid client work"],
      ["02", "Equity", "Ownership in successful products"],
      ["03", "Partnerships", "Sponsored challenges and programs"],
      ["04", "Bridge Fund", "Small checks, compounding impact"],
    ],
    pilotLabel: "What's next",
    pilotTitle: ["Start small.", "Prove it for real."],
    pilotText:
      "One pilot cohort: three teams building three products for real problems, ending with a demo day for companies and investors.",
    pilotAction: "Join the cohort",
    weeks: [
      ["01—02", "Choose the problem and team"],
      ["03—06", "Build and test the product"],
      ["07—08", "Sell and present"],
    ],
    result: "The result",
    resultText: "3 testable products",
    risksLabel: "Honestly",
    risksTitle: ["Ambition matters.", "Clarity matters more."],
    risksText:
      "We do not hide the risks. We design the model to address them from day one.",
    risks: [
      [
        "Equity and legal",
        "Design ownership and contracts with legal counsel from day one.",
      ],
      [
        "Product failure",
        "Run enough experiments while Studio revenue covers the cost of building.",
      ],
      [
        "Student commitment",
        "Clear roles, defined commitments, and measurable outcomes.",
      ],
      [
        "Business experience",
        "Real business mentors—not only technical experts.",
      ],
    ],
    closingTitle: ["Which problem", "deserves our", " first company?"],
    closingText:
      "Fintech? Smart agriculture? Education? We want to hear the problem from the people living it.",
    closingAction: "Tell us",
    footer: "Building Palestinian companies from the roots up.",
  },
} as const

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M13 7l5 5-5 5" />
    </svg>
  )
}

function Logo() {
  return (
    <span className="logo-image" aria-label="KUKI Labs">
      <img src="/assets/kuki-labs-logo.png" alt="KUKI Labs" />
    </span>
  )
}

function Label({ number, children }: { number: string children: ReactNode }) {
  return (
    <div className="section-kicker">
      <span>{number}</span>
      <p>{children}</p>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Language>("ar")
  const t = copy[language]
  const isArabic = language === "ar"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("shown")
        })
      },
      { threshold: 0.13 },
    )
    document
      .querySelectorAll("[data-enter]")
      .forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isArabic ? "rtl" : "ltr"
  }, [isArabic, language])

  const switchLanguage = () => {
    setLanguage(isArabic ? "en" : "ar")
    setMenuOpen(false)
  }

  return (
    <main className="app-page" dir={isArabic ? "rtl" : "ltr"}>
      <nav
        className="navigation"
        aria-label={isArabic ? "التنقل الرئيسي" : "Main navigation"}
      >
        <a href="#home">
          <Logo />
        </a>
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <a href="#idea" onClick={() => setMenuOpen(false)}>
            {t.nav[0]}
          </a>
          <a href="#engines" onClick={() => setMenuOpen(false)}>
            {t.nav[1]}
          </a>
          <a href="#pilot" onClick={() => setMenuOpen(false)}>
            {t.nav[2]}
          </a>
          <button
            className="mobile-language"
            type="button"
            onClick={switchLanguage}
          >
            {isArabic ? "English" : "العربية"}
          </button>
        </div>
        <div className="nav-actions">
          <button
            className="language-switch"
            type="button"
            onClick={switchLanguage}
            aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
          >
            <span className={!isArabic ? "active" : ""}>EN</span>
            <i />
            <span className={isArabic ? "active" : ""}>ع</span>
          </button>
          <a className="nav-contact" href="#contact">
            {t.contact}
            <Arrow />
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label={t.menu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <i />
            <i />
          </button>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-copy" data-enter>
          <div className="status-pill">
            <i />
            {t.heroStatus}
          </div>
          <h1>
            {t.heroTitle[0]}
            <br />
            {t.heroTitle[1]}
            <strong>{t.heroTitle[2]}</strong>
          </h1>
          <p>
            {t.heroText}
            <b>{t.heroTextStrong}</b>
          </p>
          <div className="hero-actions">
            <a className="button dark" href="#pilot">
              {t.primaryAction}
              <Arrow />
            </a>
            <a className="underlink" href="#idea">
              {t.secondaryAction}
            </a>
          </div>
        </div>

        <div className="hero-lab" data-enter aria-label={t.visualLabel}>
          <div className="lab-grid" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="lab-core">
            <span>{t.visual.coreTop}</span>
            <strong>{t.visual.coreMain}</strong>
            <small>{t.visual.coreBottom}</small>
          </div>
          {t.visual.cards.map((card, index) => (
            <div
              className={`lab-card ${["talent", "product", "company"][index]}`}
              key={card[0]}
            >
              <span>{card[0]}</span>
              <b>{card[1]}</b>
              <small>{card[2]}</small>
            </div>
          ))}
          <div className="lab-stamp">STUDENT OWNED</div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>31°57′N</span>
          <span>KUKI / 2025</span>
        </div>
      </header>

      <section className="declaration" id="idea">
        <div className="declaration-top">
          <span>NOT ANOTHER AGENCY</span>
          <span>{t.declarationTop}</span>
        </div>
        <div className="declaration-copy" data-enter>
          <p>{t.declarationLead}</p>
          <h2>
            {t.declarationTitle[0]}
            <br />
            <em>{t.declarationTitle[1]}</em>
          </h2>
        </div>
        <div className="declaration-foot">
          <p>
            {t.declarationText[0]}
            <br />
            {t.declarationText[1]}
          </p>
          <div className="shift">
            <span>TRAINING</span>
            <i>
              <b />
            </i>
            <span>OWNERSHIP</span>
          </div>
        </div>
      </section>

      <section className="engines page-section" id="engines">
        <Label number="01">{t.systemLabel}</Label>
        <div className="section-intro" data-enter>
          <h2>
            {t.systemTitle[0]}
            <br />
            <em>{t.systemTitle[1]}</em>
          </h2>
          <p>{t.systemText}</p>
        </div>
        <div className="engine-list">
          {t.engines.map((engine) => (
            <article className="engine" data-enter key={engine.id}>
              <span className="engine-number">{engine.id}</span>
              <div className="engine-name">
                <small>{engine.label}</small>
                <h3>{engine.name}</h3>
              </div>
              <p>{engine.text}</p>
              <div className="engine-tag">{engine.tag}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="people-section">
        <div className="people-photo" data-enter>
          <img src="/assets/students-collaborating.jpg" alt={t.photoAlt} />
          <div className="image-label">FOUNDERS IN THE MAKING</div>
        </div>
        <div className="people-copy" data-enter>
          <Label number="02">{t.peopleLabel}</Label>
          <h2>
            {t.peopleTitle[0]}
            <br />
            <em>{t.peopleTitle[1]}</em>
          </h2>
          <p>{t.peopleText}</p>
          <div className="people-numbers">
            {["12", "03", "08"].map((number, index) => (
              <div key={number}>
                <strong>{number}</strong>
                <span>{t.stats[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="journey page-section">
        <Label number="03">{t.journeyLabel}</Label>
        <div className="journey-title" data-enter>
          <span>{t.journeyLead}</span>
          <h2>{t.journeyTitle}</h2>
        </div>
        <div className="journey-track">
          {t.journey.map(([title, text], index) => (
            <article data-enter key={title}>
              <div className="journey-dot">{index + 1}</div>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="return-note">
          <Arrow />
          {t.returnNote}
        </div>
      </section>

      <section className="economy page-section">
        <Label number="04">{t.economyLabel}</Label>
        <div className="economy-head" data-enter>
          <h2>
            {t.economyTitle[0]}
            <br />
            <em>{t.economyTitle[1]}</em>
          </h2>
          <p>{t.economyText}</p>
        </div>
        <div className="revenue-grid">
          {t.revenue.map(([id, title, text], index) => (
            <article
              className={`revenue-card card-${index + 1}`}
              data-enter
              key={id}
            >
              <span>{id}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <i>
                <Arrow />
              </i>
            </article>
          ))}
        </div>
      </section>

      <section className="pilot page-section" id="pilot">
        <div className="pilot-copy" data-enter>
          <Label number="05">{t.pilotLabel}</Label>
          <span className="pilot-status">
            <i />
            PILOT 01
          </span>
          <h2>
            {t.pilotTitle[0]}
            <br />
            <em>{t.pilotTitle[1]}</em>
          </h2>
          <p>{t.pilotText}</p>
          <a className="button light" href="#contact">
            {t.pilotAction}
            <Arrow />
          </a>
        </div>
        <div className="pilot-plan" data-enter>
          <div className="plan-head">
            <span>KUKI / COHORT 01</span>
            <b>8 WEEKS</b>
          </div>
          {t.weeks.map(([week, text]) => (
            <div className="plan-week" key={week}>
              <span>{week}</span>
              <b>{text}</b>
              <i />
            </div>
          ))}
          <div className="plan-result">
            <span>{t.result}</span>
            <strong>{t.resultText}</strong>
          </div>
        </div>
      </section>

      <section className="risks page-section">
        <Label number="06">{t.risksLabel}</Label>
        <div className="risks-layout">
          <div className="risks-copy" data-enter>
            <h2>
              {t.risksTitle[0]}
              <br />
              <em>{t.risksTitle[1]}</em>
            </h2>
            <p>{t.risksText}</p>
          </div>
          <div className="risk-list">
            {t.risks.map(([title, text], index) => (
              <details data-enter key={title}>
                <summary>
                  <span>0{index + 1}</span>
                  <b>{title}</b>
                  <i>+</i>
                </summary>
                <p>{text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="closing-copy" data-enter>
          <span>THE FIRST BET</span>
          <h2>
            {t.closingTitle[0]}
            <br />
            {t.closingTitle[1]}
            <em>{t.closingTitle[2]}</em>
          </h2>
          <p>{t.closingText}</p>
          <a className="button dark" href="mailto:hello@kukilabs.ps">
            {t.closingAction}
            <Arrow />
          </a>
        </div>
        <div className="closing-mark" aria-hidden="true">
          <span>K</span>
          <i>LABS</i>
        </div>
      </section>

      <footer>
        <Logo />
        <p>{t.footer}</p>
        <div>
          <span>PALESTINE</span>
          <span>2025</span>
        </div>
      </footer>
    </main>
  )
}
