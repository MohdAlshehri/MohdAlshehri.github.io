// ============================================================
// المشاريع — كل مشروع كتلة واحدة فيها العربي والإنجليزي
// group: "work" يظهر في «مشاريع مختارة»، و "product" في «منتجات رقمية وتجارب»
// mock: شكل المعاينة المرسومة (booking, attendance, portal, accreditation,
//        files, report, assistant, wathiq, library, legal, fund, excel)
// لإضافة مشروع: انسخ كتلة كاملة والصقها، وغيّر slug إلى اسم إنجليزي فريد بدون مسافات
// ============================================================

export const projects = [
  // ------------------------------------------------------------ WORK
  {
    slug: "hall-booking",
    group: "work",
    mock: "booking",
    year: "2026",
    title: { ar: "أتمتة حجز القاعات التدريبية", en: "Training hall booking automation" },
    summary: {
      ar: "عشر قاعات في نظام حجز واحد، مع نموذج ذكي لطلبات المستأجرين من داخل المستشفى وخارجه.",
      en: "Ten halls in one booking system, with a smart request form for internal and external tenants.",
    },
    sector: { ar: "أكاديمية طبية", en: "Medical academy" },
    role: { ar: "تحليل الإجراء، تصميم النظام، التشغيل والتدريب", en: "Process analysis, system design, rollout and training" },
    before: {
      ar: ["دفتر حجوزات ورقي", "اتصالات وتنسيق يدوي", "تعارض في المواعيد", "بيانات مستأجر ناقصة"],
      en: ["Paper booking log", "Calls and manual coordination", "Double bookings", "Incomplete tenant details"],
    },
    need: {
      ar: "كانت حجوزات القاعات تُدار يدوياً، فتتكرر التعارضات ويضيع وقت الفريق في التنسيق، ولا توجد صورة واضحة لإشغال القاعات.",
      en: "Hall bookings were managed by hand, so clashes kept happening, the team lost time coordinating, and nobody had a clear view of occupancy.",
    },
    approach: {
      ar: [
        "ربط القاعات العشر بتقويم رقمي موحد يُدار مركزياً.",
        "تصميم نموذج رقمي لطلبات المستأجرين يجمع كل البيانات المطلوبة من أول مرة.",
        "إشعارات بريدية تلقائية فور تسجيل أي طلب لضمان سرعة الاستجابة.",
        "إمكانية الإدارة من الجهاز المكتبي أو تطبيق الجوال.",
      ],
      en: [
        "Connected all ten halls to one centrally managed digital calendar.",
        "Designed a digital tenant request form that captures every required detail first time.",
        "Automatic email alerts the moment a request is submitted.",
        "Manageable from desktop or the mobile app.",
      ],
    },
    results: {
      ar: ["انتهاء التعارضات والأخطاء اليدوية", "انتقال كامل من الورق إلى الرقمي", "رفع الكفاءة التشغيلية في إدارة الحجوزات"],
      en: ["No more clashes or manual errors", "Full move from paper to digital", "Higher operational efficiency in bookings"],
    },
    tools: ["Teamup", "Google Forms", "Google Sheets"],
  },
  {
    slug: "smart-attendance",
    group: "work",
    mock: "attendance",
    year: "2026",
    title: { ar: "النظام الذكي لتتبع الحضور والمشاركة", en: "Smart attendance and participation tracking" },
    summary: {
      ar: "حضور الأطباء المقيمين يُسجّل رقمياً، وتُحفظ أوراق التحضير الموقعة تلقائياً، وتُستخرج الإحصاءات فوراً.",
      en: "Resident attendance recorded digitally, signed sheets archived automatically, and statistics generated instantly.",
    },
    sector: { ar: "التعليم الطبي", en: "Medical education" },
    role: { ar: "تصميم المسار والنماذج ولوحات المتابعة", en: "Flow, forms and dashboard design" },
    before: {
      ar: ["أوراق تحضير مطبوعة", "أرشفة في ملفات", "حساب النسب يدوياً", "تأخر في التقارير"],
      en: ["Printed sign-in sheets", "Filed in folders", "Rates calculated by hand", "Late reports"],
    },
    need: {
      ar: "متابعة حضور قرابة 150 متدرباً في عدة برامج كانت تعتمد على الورق، والتقارير تتأخر ولا تعكس الإجازات والتدوير.",
      en: "Tracking attendance for around 150 trainees across several programs relied on paper, and reports were late and ignored rotations and leave.",
    },
    approach: {
      ar: [
        "رصد الحضور عبر نماذج رقمية دقيقة لكل نشاط.",
        "إرفاق ورقة التحضير الموقعة وحفظها آلياً في أرشيف منظم.",
        "تحليلات حضور تلقائية لكل متدرب تراعي التدوير والإجازات.",
      ],
      en: [
        "Captured attendance through precise digital forms for each activity.",
        "Attached each signed sheet and archived it automatically.",
        "Automatic per-trainee attendance analytics that account for rotations and leave.",
      ],
    },
    results: {
      ar: ["تقارير وإحصاءات فورية", "توثيق مزدوج رقمي وورقي", "متابعة أسهل للتقييم الدوري"],
      en: ["Instant reports and statistics", "Dual digital and paper record", "Easier periodic evaluation"],
    },
    tools: ["Google Forms", "Google Drive", "Google Sheets", "Looker Studio"],
  },
  {
    slug: "academy-statistics-portal",
    group: "work",
    mock: "portal",
    year: "2026",
    title: { ar: "بوابة إحصاءات وفوترة الأكاديمية", en: "Academy statistics and billing portal" },
    summary: {
      ar: "بوابة حية ثنائية اللغة تجمع التدريب السريري والإقامة ودعم الحياة والتعليم المستمر في شاشة واحدة.",
      en: "A live bilingual portal bringing clinical training, residency, life support and CPD into one view.",
    },
    sector: { ar: "إدارة أكاديمية", en: "Academy management" },
    role: { ar: "تصميم البيانات واللوحات، بناء البوابة بأدوات الذكاء الاصطناعي", en: "Data and dashboard design, built with AI tools" },
    before: {
      ar: ["جداول متفرقة لكل برنامج", "تجميع يدوي للأرقام", "فواتير تُحسب بالآلة", "لا رؤية للإدارة"],
      en: ["Separate sheets per program", "Numbers compiled by hand", "Invoices on a calculator", "No view for management"],
    },
    need: {
      ar: "إدارة الأكاديمية تحتاج أرقاماً دقيقة ومحدثة عن المتدربين والإيرادات، بينما البيانات موزعة على ملفات كثيرة.",
      en: "Academy management needed accurate, current figures on trainees and revenue, while the data was spread across many files.",
    },
    approach: {
      ar: [
        "قالب بيانات رئيسي موحد لكل قسم: إعدادات، ملف المتدربين، سجل التدوير والفوترة، الملخص المالي.",
        "لوحات منفصلة للتدريب السريري والإقامة ودعم الحياة والتعليم المستمر.",
        "تحديث تلقائي كلما تغيّرت البيانات، وعرض خاص للجهات الشريكة.",
      ],
      en: [
        "A unified master data template per section: settings, trainee file, rotation and billing log, financial summary.",
        "Separate views for clinical training, residency, life support and CPD.",
        "Updates automatically when data changes, with a dedicated partner view.",
      ],
    },
    results: {
      ar: ["رؤية تنفيذية لحظية", "دقة أعلى في الفوترة", "قرارات أسرع مبنية على البيانات"],
      en: ["Real-time executive view", "More accurate billing", "Faster data-driven decisions"],
    },
    tools: ["Google Sheets", { ar: "أدوات الذكاء الاصطناعي", en: "AI tools" }],
  },
  {
    slug: "accreditation-readiness",
    group: "work",
    mock: "accreditation",
    year: "2026",
    title: { ar: "قالب الجاهزية لزيارات الاعتماد", en: "Accreditation visit readiness template" },
    summary: {
      ar: "نموذج تشغيلي موحد لمعايير الهيئة السعودية للتخصصات الصحية، أسهم في اعتماد برنامج الأعصاب ورفع درجة الحوكمة.",
      en: "A unified operating template for SCFHS standards that supported the Neurology program accreditation and a higher governance score.",
    },
    sector: { ar: "الحوكمة والاعتماد", en: "Governance and accreditation" },
    role: { ar: "منسق البرنامج، إعداد الشواهد وتقديمها في الزيارة", en: "Program coordinator, prepared and presented the evidence" },
    before: {
      ar: ["معايير في ملف PDF", "شواهد في مجلدات متفرقة", "سؤال: ماذا بقي؟", "قلق قبل الزيارة"],
      en: ["Standards in a PDF", "Evidence in scattered folders", "“What's still missing?”", "Pre-visit stress"],
    },
    need: {
      ar: "زيارات الاعتماد تتطلب شواهد كثيرة لكل معيار، ولم تكن هناك طريقة موحدة لمعرفة ما اكتمل وما بقي.",
      en: "Accreditation visits require extensive evidence per standard, and there was no single way to see what was complete and what wasn't.",
    },
    approach: {
      ar: [
        "قالب يربط كل معيار بشواهده وحالته ومسؤوله.",
        "أتمتة حوكمة بيانات المدربين: التصنيف المهني، عقود العمل، الشهادات.",
        "لوحة جاهزية لمراجعة حوكمة الربع الثالث ومعايير ATA1 وATA2.",
        "أرشيف منظم للسياسات والقرارات ومحاضر الاجتماعات لكل برنامج.",
      ],
      en: [
        "A template linking each standard to its evidence, status and owner.",
        "Automated governance of trainer records: classification, contracts, certificates.",
        "A readiness board for the Q3 governance review and ATA1 / ATA2 standards.",
        "An organised archive of policies, decisions and minutes for every program.",
      ],
    },
    results: {
      ar: ["اعتماد كامل لبرنامج الأعصاب", "الحوكمة من 64٪ إلى 77٪ خلال شهرين", "اعتماد القالب على مستوى المؤسسة والبرامج", "إشادة فريق تقييم الهيئة والإدارة"],
      en: ["Full accreditation for the Neurology program", "Governance from 64% to 77% in two months", "Template adopted institution-wide", "Praised by SCFHS surveyors and management"],
    },
    tools: ["Google Sheets", "Google Drive", "Notion"],
  },
  {
    slug: "trainee-trainer-files",
    group: "work",
    mock: "files",
    year: "2026",
    title: { ar: "ملفات المتدربين والمدربين", en: "Trainee and trainer files" },
    summary: {
      ar: "منصة مركزية لبيانات المتدربين ومرفقاتهم ونتائجهم، مع ترميز لوني ينبّه قبل انتهاء التراخيص والدورات.",
      en: "A central platform for trainee data, attachments and results, with colour-coded alerts before licences and courses expire.",
    },
    sector: { ar: "التعليم الطبي", en: "Medical education" },
    role: { ar: "تصميم هيكل البيانات ونظام التنبيهات", en: "Data structure and alert system design" },
    before: {
      ar: ["ملفات ورقية لكل طبيب", "تواريخ انتهاء منسية", "بحث طويل عن مرفق", "نتائج متفرقة"],
      en: ["A paper file per doctor", "Forgotten expiry dates", "Long hunts for attachments", "Scattered results"],
    },
    need: {
      ar: "متابعة تراخيص الهيئة ودورات BLS وACLS لكل طبيب مقيم يدوياً كانت تعرّض البرنامج لمخالفات غير مقصودة.",
      en: "Tracking SCFHS licences and BLS / ACLS courses for every resident by hand left the program exposed to unintentional non-compliance.",
    },
    approach: {
      ar: [
        "ملف رقمي موحد لكل متدرب: البيانات، المرفقات، نتائج الاختبارات الشهرية.",
        "ترميز لوني تلقائي: أخضر ساري، أصفر يقترب، أحمر منتهٍ.",
        "نفس المنطق لملفات المدربين وتصنيفاتهم وعقودهم.",
      ],
      en: [
        "One digital file per trainee: details, attachments and monthly exam results.",
        "Automatic colour coding: green valid, amber approaching, red expired.",
        "The same logic for trainer files, classifications and contracts.",
      ],
    },
    results: {
      ar: ["لا ترخيص ينتهي دون علم", "وصول فوري لأي مرفق", "استمرارية التوافق الإداري"],
      en: ["No licence expires unnoticed", "Instant access to any attachment", "Continuous administrative compliance"],
    },
    tools: ["Google Sheets", "Google Drive"],
  },
  {
    slug: "doctors-daily-report",
    group: "work",
    mock: "report",
    year: "2026",
    title: { ar: "التقرير اليومي للأطباء", en: "Doctors' daily report" },
    summary: {
      ar: "متابعة رقمية للتقرير الصباحي والأنشطة اليومية للأطباء المقيمين، بدل الكشوف المطبوعة.",
      en: "Digital tracking of the morning report and daily activities of residents, replacing printed sheets.",
    },
    sector: { ar: "التعليم الطبي", en: "Medical education" },
    role: { ar: "رقمنة الإجراء وتصميم التقرير", en: "Digitised the process and designed the report" },
    before: {
      ar: ["كشف يومي مطبوع", "تجميع أسبوعي يدوي", "صعوبة معرفة المتغيب", "لا مؤشرات"],
      en: ["A printed daily sheet", "Manual weekly compilation", "Hard to spot absences", "No indicators"],
    },
    need: {
      ar: "التقرير الصباحي نشاط تعليمي يومي، ومتابعته ورقياً لا تعطي البرنامج صورة عن الالتزام والمشاركة.",
      en: "The morning report is a daily teaching activity, and tracking it on paper gave the program no picture of commitment and participation.",
    },
    approach: {
      ar: [
        "تسجيل يومي سريع من الجوال لكل جلسة: المقدّم، الحالة، الحضور.",
        "ملخص تلقائي يومي وأسبوعي لكل برنامج.",
        "مؤشرات مشاركة لكل طبيب تُستخدم في التقييم.",
      ],
      en: [
        "Quick daily logging from mobile for each session: presenter, case, attendance.",
        "Automatic daily and weekly summary per program.",
        "Participation indicators per doctor, used in evaluation.",
      ],
    },
    results: {
      ar: ["صورة يومية واضحة للبرنامج", "توفير وقت التجميع الأسبوعي", "شواهد جاهزة للاعتماد"],
      en: ["A clear daily view of the program", "No more weekly compilation", "Evidence ready for accreditation"],
    },
    tools: ["Google Forms", "Google Sheets", "Looker Studio"],
  },
  {
    slug: "academy-assistant",
    group: "work",
    mock: "assistant",
    year: "2026",
    title: { ar: "مساعد الأكاديمية الذكي", en: "Smart academy assistant" },
    summary: {
      ar: "مساعد بالذكاء الاصطناعي يجيب الفريق والمتدربين عن الإجراءات والسياسات والنماذج المعتمدة.",
      en: "An AI assistant that answers staff and trainees on approved procedures, policies and forms.",
    },
    sector: { ar: "أكاديمية طبية", en: "Medical academy" },
    role: { ar: "الفكرة، تجهيز المعرفة، تصميم التجربة", en: "Concept, knowledge preparation, experience design" },
    before: {
      ar: ["نفس الأسئلة كل يوم", "سياسات في ملفات طويلة", "انتظار رد الموظف", "إجابات غير موحدة"],
      en: ["Same questions every day", "Policies buried in long files", "Waiting for staff replies", "Inconsistent answers"],
    },
    need: {
      ar: "أسئلة متكررة عن الإجراءات والنماذج تستهلك وقت الفريق، والإجابة موجودة أصلاً في سياسات معتمدة.",
      en: "Repeated questions about procedures and forms consumed staff time, while the answers already existed in approved policies.",
    },
    approach: {
      ar: [
        "تجميع السياسات والإجراءات والنماذج في قاعدة معرفة منظمة.",
        "مساعد يجيب بالعربية والإنجليزية ويشير إلى المصدر.",
        "توجيه السؤال للموظف المختص عندما لا تكفي الإجابة.",
      ],
      en: [
        "Compiled policies, procedures and forms into an organised knowledge base.",
        "An assistant that answers in Arabic and English and cites its source.",
        "Hands the question to the right staff member when an answer isn't enough.",
      ],
    },
    results: {
      ar: ["إجابات فورية وموحدة", "وقت أقل في الأسئلة المتكررة", "وصول أسهل للسياسات"],
      en: ["Instant, consistent answers", "Less time on repeat questions", "Easier access to policies"],
    },
    tools: [{ ar: "أدوات الذكاء الاصطناعي", en: "AI tools" }, "Google Drive"],
  },

  // ------------------------------------------------------------ PRODUCTS
  {
    slug: "wathiq",
    group: "product",
    mock: "wathiq",
    year: "2026",
    title: { ar: "واثق — نظام تشغيل الجمعيات", en: "Wathiq — an operating system for non-profits" },
    summary: {
      ar: "منصة اشتراك سحابية تدير بها الجمعيات الأهلية عملياتها وحوكمتها ومؤشراتها في مكان واحد.",
      en: "A cloud subscription platform where non-profit associations run their operations, governance and KPIs in one place.",
    },
    sector: { ar: "القطاع غير الربحي", en: "Non-profit sector" },
    role: { ar: "صاحب المنتج: التحليل، النموذج الأولي، قرارات النطاق", en: "Product owner: analysis, prototype, scope decisions" },
    before: {
      ar: ["ملفات إكسل لكل قسم", "حوكمة على الورق", "تقارير مجلس متأخرة", "كل جمعية تبدأ من الصفر"],
      en: ["An Excel file per department", "Governance on paper", "Late board reports", "Every association starts from zero"],
    },
    need: {
      ar: "الجمعيات الأهلية الصغيرة تحتاج نظاماً متكاملاً بسعر مناسب، بدل أدوات متفرقة لا تتحدث مع بعضها.",
      en: "Small associations need an integrated system at a fair price, instead of disconnected tools.",
    },
    approach: {
      ar: [
        "منصة متعددة الجمعيات، لكل جمعية بياناتها المعزولة.",
        "تسجيل بالترخيص وتجربة مجانية 15 يوماً.",
        "عند انتهاء الاشتراك تصبح البيانات للقراءة فقط ولا تُحذف أبداً.",
      ],
      en: [
        "A multi-tenant platform with isolated data per association.",
        "Sign-up with licence number and a 15-day free trial.",
        "When a subscription ends, data becomes read-only and is never deleted.",
      ],
    },
    results: {
      ar: ["نموذج أولي مكتمل", "مبني على تجربة جمعية حقيقية", "جاهز لمرحلة التطوير"],
      en: ["Complete prototype", "Built on a real association's experience", "Ready for development"],
    },
    tools: [{ ar: "أدوات الذكاء الاصطناعي", en: "AI tools" }],
  },
  {
    slug: "digital-libraries",
    group: "product",
    mock: "library",
    year: "2026",
    title: { ar: "المكتبات الرقمية", en: "Digital libraries" },
    summary: {
      ar: "مكتبة تصفح بأسلوب الكتاب الحقيقي لمؤلفات العلماء والمشايخ والأكاديميين، بلا تكلفة استضافة.",
      en: "Page-turning online libraries for the works of scholars and academics, with zero hosting cost.",
    },
    sector: { ar: "منتج رقمي", en: "Digital product" },
    role: { ar: "صاحب الخدمة: التصميم والبناء والتسليم", en: "Service owner: design, build and handover" },
    before: {
      ar: ["كتب PDF في مجلد مشترك", "روابط تضيع في القروبات", "لا واجهة تليق بالمؤلف", "صعوبة الوصول من الجوال"],
      en: ["PDFs in a shared folder", "Links lost in group chats", "No fitting showcase", "Hard to read on mobile"],
    },
    need: {
      ar: "المؤلفون ينشرون كتبهم كملفات متفرقة، ولا يوجد مكان واحد أنيق يجمعها ويسهل مشاركته.",
      en: "Authors share their books as scattered files, with no single elegant place to collect and share them.",
    },
    approach: {
      ar: [
        "موقع مكتبة ثابت بتصفح يشبه الكتاب الورقي.",
        "رفع الغلاف والكتاب بسهولة لإضافة إصدارات جديدة.",
        "تسليم كامل للعميل على حسابه دون اشتراكات شهرية.",
      ],
      en: [
        "A static library site with book-like page turning.",
        "Simple cover and book upload for new titles.",
        "Full handover to the client's own account with no monthly fees.",
      ],
    },
    results: {
      ar: ["أول مكتبة: 36 كتاباً", "طلب متزايد على الخدمة", "تحديثات شهرية للعملاء"],
      en: ["First library: 36 books", "Growing demand for the service", "Monthly updates for clients"],
    },
    tools: ["GitHub Pages", { ar: "أدوات الذكاء الاصطناعي", en: "AI tools" }],
  },
  {
    slug: "law-office-automation",
    group: "product",
    mock: "legal",
    year: "2026",
    title: { ar: "منظومة أتمتة مكتب محاماة", en: "Law office automation" },
    summary: {
      ar: "العقود والوكالات والجلسات في منظومة واحدة على أدوات Google، بتنبيهات تلقائية وتقويم موحد.",
      en: "Contracts, powers of attorney and court sessions in one Google-based system, with automatic alerts and a shared calendar.",
    },
    sector: { ar: "قطاع قانوني", en: "Legal sector" },
    role: { ar: "تحليل الاحتياج، تصميم المنظومة، التنفيذ", en: "Needs analysis, system design, delivery" },
    before: {
      ar: ["أكثر من 100 عقد ورقي", "مواعيد جلسات في الذاكرة", "وكالات تنتهي دون تنبيه", "عرض منافس مكلف ومعقد"],
      en: ["100+ paper contracts", "Session dates kept in memory", "Powers of attorney expiring unnoticed", "A costly, over-built competing offer"],
    },
    need: {
      ar: "مكتب يحتاج تنظيم عقوده وجلساته بأبسط طريقة ممكنة، دون أنظمة معقدة أو تكاليف تشغيل.",
      en: "An office needing its contracts and sessions organised as simply as possible, without complex systems or running costs.",
    },
    approach: {
      ar: [
        "نماذج إدخال للعقود والوكالات، وقاعدة بيانات في جداول Google.",
        "توليد المستندات تلقائياً من قوالب معتمدة.",
        "مزامنة الجلسات مع التقويم وتنبيهات بالبريد.",
      ],
      en: [
        "Entry forms for contracts and powers of attorney, with Google Sheets as the database.",
        "Documents generated automatically from approved templates.",
        "Sessions synced to the calendar with email reminders.",
      ],
    },
    results: {
      ar: ["تشغيل بلا تكلفة شهرية", "جاهز للانتقال إلى Workspace", "واجهة واضحة لفريق المكتب"],
      en: ["Zero monthly running cost", "Ready to move to Workspace", "A clear interface for the office team"],
    },
    tools: ["Google Forms", "Google Sheets", "Google Docs", "Google Calendar"],
  },
  {
    slug: "cooperative-fund",
    group: "product",
    mock: "fund",
    year: "2026",
    title: { ar: "نظام صندوق تعاوني للقروض الحسنة", en: "Cooperative interest-free loan fund" },
    summary: {
      ar: "تطبيق ويب بلا تكلفة تشغيل لإدارة اشتراكات الأعضاء والقروض والسداد في صندوق تعاوني.",
      en: "A zero-running-cost web app managing member contributions, loans and repayments for a cooperative fund.",
    },
    sector: { ar: "صناديق تعاونية", en: "Cooperative funds" },
    role: { ar: "تحليل الاحتياج وتصميم النموذج الأولي", en: "Needs analysis and prototype design" },
    before: {
      ar: ["دفتر اشتراكات", "حوالات تُطابق يدوياً", "أسئلة متكررة عن الرصيد", "شفافية محدودة"],
      en: ["A contributions notebook", "Transfers matched by hand", "Repeated balance questions", "Limited transparency"],
    },
    need: {
      ar: "صندوق تعاوني يحتاج سجلاً دقيقاً وشفافاً للاشتراكات والقروض، دون اشتراك في برامج مدفوعة.",
      en: "A cooperative fund needing an accurate, transparent record of contributions and loans, without paid software.",
    },
    approach: {
      ar: [
        "مرحلة تحليل كاملة للأدوار والإجراءات قبل أي بناء.",
        "قاعدة بيانات في جداول Google وتطبيق ويب فوقها.",
        "لوحة للعضو تعرض رصيده وأقساطه.",
      ],
      en: [
        "A full analysis phase of roles and procedures before building.",
        "Google Sheets as the database with a web app on top.",
        "A member view showing balance and instalments.",
      ],
    },
    results: {
      ar: ["تحليل مكتمل ومعتمد", "نموذج أولي قيد البناء", "صفر تكلفة تشغيل"],
      en: ["Approved analysis", "Prototype in progress", "Zero running cost"],
    },
    tools: ["Google Sheets", "Google Apps Script"],
  },
  {
    slug: "nonprofit-excel-systems",
    group: "product",
    mock: "excel",
    year: "2025",
    title: { ar: "أنظمة إدارية للقطاع غير الربحي", en: "Management systems for non-profits" },
    summary: {
      ar: "أربعة أنظمة جاهزة: لوحة الحوكمة، الحضور والإجازات، الموارد البشرية، الرواتب ونهاية الخدمة.",
      en: "Four ready-made systems: governance dashboard, attendance and leave, HR, and payroll with end-of-service.",
    },
    sector: { ar: "القطاع غير الربحي", en: "Non-profit sector" },
    role: { ar: "تصميم وبيع عبر متجر إلكتروني", en: "Designed and sold through an online store" },
    before: {
      ar: ["حسابات رواتب يدوية", "إجازات في رسائل", "مؤشرات حوكمة غير واضحة", "لا قوالب موحدة"],
      en: ["Payroll by hand", "Leave requests in messages", "Unclear governance indicators", "No standard templates"],
    },
    need: {
      ar: "الجمعيات الصغيرة لا تملك ميزانية أنظمة كبيرة، لكنها تحتاج أدوات منضبطة لإدارة الموظفين والحوكمة.",
      en: "Small associations can't afford large systems but need disciplined tools for staff and governance.",
    },
    approach: {
      ar: [
        "أنظمة إكسل جاهزة للاستخدام بلا تدريب طويل.",
        "معادلات محمية ولوحات ملخصة تلقائية.",
        "بيع وتوزيع عبر متجر إلكتروني.",
      ],
      en: [
        "Ready-to-use Excel systems with no lengthy training.",
        "Protected formulas and automatic summary dashboards.",
        "Sold and distributed through an online store.",
      ],
    },
    results: {
      ar: ["أربعة منتجات منشورة", "مستخدمة في جمعيات فعلية", "أساس لمنصة واثق"],
      en: ["Four published products", "In use by real associations", "The foundation for Wathiq"],
    },
    tools: ["Microsoft Excel", { ar: "متجر سلة", en: "Salla store" }],
  },
];

export const workProjects = projects.filter((p) => p.group === "work");
export const productProjects = projects.filter((p) => p.group === "product");
