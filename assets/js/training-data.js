(() => {
  const tx = (pl, en, ua, ru, az, es, fil, id, ne) => ({ pl, en, ua, ru, az, es, fil, id, ne });

  const gozMap = "https://www.google.com/maps/place/GOZ+Siechnice/@51.0312338,17.1495451,274m/data=!3m2!1e3!4b1!4m12!1m5!3m4!2zNTHCsDAxJzAyLjUiTiAxN8KwMDknMjUuMyJF!8m2!3d51.0173459!4d17.1570148!3m5!1s0x470fdd006716aeb7:0x34fbd349a5cac4d5!8m2!3d51.031233!4d17.1501888!16s%2Fg%2F11yycs9lf9?entry=ttu";

  window.CX_DATA = {
    meta: {
      version: "20260706-human-polish1"
    },

    languages: [
      { id: "pl", label: "Polski" },
      { id: "en", label: "English" },
      { id: "ua", label: "Українська" },
      { id: "ru", label: "Русский" },
      { id: "az", label: "Azərbaycanca" },
      { id: "es", label: "Español" },
      { id: "fil", label: "Filipino" },
      { id: "id", label: "Indonesia" },
      { id: "ne", label: "नेपाली" }
    ],

    ui: {
      brand: tx("SYSTEM INFORMACYJNO-UCZĄCY CITRONEX", "CITRONEX INFORMATION AND TRAINING SYSTEM", "ІНФОРМАЦІЙНО-НАВЧАЛЬНА СИСТЕМА CITRONEX", "ИНФОРМАЦИОННО-ОБУЧАЮЩАЯ СИСТЕМА CITRONEX", "CITRONEX MƏLUMAT VƏ TƏLİM SİSTEMİ", "SISTEMA INFORMATIVO Y DE FORMACIÓN CITRONEX", "SISTEMA NG IMPORMASYON AT PAGSASANAY CITRONEX", "SISTEM INFORMASI DAN PELATIHAN CITRONEX", "CITRONEX सूचना र तालिम प्रणाली"),
      subtitle: tx("Siechnice - wybierz, czego potrzebujesz", "Siechnice - choose what you need", "Сєхніце - оберіть, що вам потрібно", "Сехнице - выберите, что вам нужно", "Siechnice - sizə lazım olanı seçin", "Siechnice - elige lo que necesitas", "Siechnice - piliin ang kailangan mo", "Siechnice - pilih yang Anda butuhkan", "Siechnice - तपाईंलाई चाहिएको कुरा छान्नुहोस्"),
      home: tx("Start", "Start", "Старт", "Старт", "Başla", "Inicio", "Simula", "Mulai", "सुरु"),
      back: tx("Wróć", "Back", "Назад", "Назад", "Geri", "Volver", "Bumalik", "Kembali", "फर्कनुहोस्"),
      open: tx("Otwórz", "Open", "Відкрити", "Открыть", "Aç", "Abrir", "Buksan", "Buka", "खोल्नुहोस्"),
      openMap: tx("Otwórz w Google Maps", "Open in Google Maps", "Відкрити в Google Maps", "Открыть в Google Maps", "Google Maps-da aç", "Abrir en Google Maps", "Buksan sa Google Maps", "Buka di Google Maps", "Google Maps मा खोल्नुहोस्"),
      call: tx("Zadzwoń", "Call", "Подзвонити", "Позвонить", "Zəng et", "Llamar", "Tumawag", "Telepon", "फोन गर्नुहोस्"),
      whatsapp: tx("WhatsApp", "WhatsApp", "WhatsApp", "WhatsApp", "WhatsApp", "WhatsApp", "WhatsApp", "WhatsApp", "WhatsApp"),
      viber: tx("Viber", "Viber", "Viber", "Viber", "Viber", "Viber", "Viber", "Viber", "Viber"),
      telegram: tx("Telegram", "Telegram", "Telegram", "Telegram", "Telegram", "Telegram", "Telegram", "Telegram", "Telegram"),
      sendResult: tx("Wyślij wynik", "Send result", "Надіслати результат", "Отправить результат", "Nəticəni göndər", "Enviar resultado", "Ipadala ang resulta", "Kirim hasil", "नतिजा पठाउनुहोस्"),
      important: tx("Ważne", "Important", "Важливо", "Важно", "Vacibdir", "Importante", "Mahalaga", "Penting", "महत्त्वपूर्ण"),
      yes: tx("Tak", "Yes", "Так", "Да", "Bəli", "Sí", "Oo", "Ya", "हो"),
      no: tx("Nie", "No", "Ні", "Нет", "Xeyr", "No", "Hindi", "Tidak", "होइन"),
      score: tx("Wynik", "Score", "Результат", "Результат", "Nəticə", "Resultado", "Iskor", "Nilai", "नतिजा"),
      showFullImage: tx("Pokaż pełny obraz szklarni", "Show full greenhouse image", "Показати повний вигляд теплиці", "Показать полный вид теплицы", "İstixananın tam görünüşünü göstər", "Mostrar imagen completa del invernadero", "Ipakita ang buong larawan ng bahay-taniman", "Tampilkan gambar penuh rumah kaca", "पूरा ग्रीनहाउस चित्र देखाउनुहोस्")
    },

    pages: {
      home: {
        title: tx("Co chcesz zrobić?", "What do you need?", "Що вам потрібно?", "Что вам нужно?", "Nə lazımdır?", "¿Qué necesitas?", "Ano ang kailangan mo?", "Apa yang Anda butuhkan?", "तपाईंलाई के चाहिन्छ?"),
        lead: tx("Wybierz jeden kafelek. Na telefonie zobaczysz tylko ten moduł, bez mieszania informacji.", "Choose one tile. On the phone you will see only that module, without mixed information.", "Оберіть один блок. На телефоні ви побачите тільки цей модуль без зайвої інформації.", "Выберите один блок. На телефоне будет только этот модуль без лишней информации.", "Bir bölmə seçin. Telefonda yalnız həmin modul görünəcək.", "Elige una tarjeta. En el teléfono verás solo ese módulo.", "Pumili ng isang tile. Sa telepono, iyon lang ang makikita mo.", "Pilih satu kartu. Di ponsel hanya modul itu yang tampil.", "एउटा टाइल छान्नुहोस्। फोनमा त्यही मोड्युल मात्र देखिन्छ।")
      },
      mapa: {
        title: tx("Dojazd i mapy", "Route and maps", "Дорога і карти", "Дорога и карты", "Yol və xəritələr", "Ruta y mapas", "Ruta at mapa", "Rute dan peta", "बाटो र नक्सा"),
        lead: tx("Najpierw wybierz miejsce. Przycisk otworzy mapę albo trasę w telefonie.", "First choose the place. The button opens the map or route on your phone.", "Спочатку оберіть місце. Кнопка відкриє карту або маршрут у телефоні.", "Сначала выберите место. Кнопка откроет карту или маршрут в телефоне.", "Əvvəl yeri seçin. Düymə telefonda xəritəni və ya marşrutu açır.", "Primero elige el lugar. El botón abre el mapa o la ruta.", "Piliin muna ang lugar. Bubuksan ng button ang mapa o ruta.", "Pilih tempat dulu. Tombol membuka peta atau rute.", "पहिले ठाउँ छान्नुहोस्। बटनले नक्सा वा बाटो खोल्छ।")
      },
      magazyn: {
        title: tx("Magazyn", "Warehouse", "Склад", "Склад", "Anbar", "Almacén", "Bodega", "Gudang", "गोदाम"),
        lead: tx("Dla magazynu nie pokazujemy readera. Tu są tylko mapy, wejście i podstawowe zasady magazynu.", "For warehouse work we do not show the reader. Here you only have maps, entrance and warehouse rules.", "Для складу рідер не показуємо. Тут тільки карти, вхід і основні правила складу.", "Для склада ридер не показываем. Здесь только карты, вход и основные правила склада.", "Anbar üçün reader göstərilmir. Burada yalnız xəritə, giriş və əsas qaydalar var.", "Para almacén no mostramos reader. Aquí solo están mapas, entrada y reglas básicas.", "Para sa bodega, walang reader. Narito ang mapa, pasukan at pangunahing patakaran.", "Untuk gudang tidak ada reader. Di sini hanya peta, pintu masuk, dan aturan dasar.", "गोदामका लागि reader छैन। यहाँ नक्सा, प्रवेश र आधारभूत नियम मात्र छन्।")
      },
      tablet: {
        title: tx("Tablet - rejestracja pracy", "Tablet - work registration", "Планшет - реєстрація роботи", "Планшет - регистрация работы", "Planşet - işin qeydiyyatı", "Tablet - registro de trabajo", "Tablet - pag-register ng trabaho", "Tablet - pencatatan kerja", "ट्याबलेट - काम दर्ता"),
        lead: tx("Ten sam system tabletu działa na szklarni i na magazynie. Instrukcja pokazuje: logowanie PIN, początek pracy, czynność, przerwę, koniec pracy i wylogowanie.", "The same tablet system is used in the greenhouse and warehouse. The instruction shows: PIN login, work start, activity, break, work end and logout.", "Однакова система планшета працює в теплиці і на складі. Інструкція показує: вхід PIN, початок роботи, дію, перерву, кінець роботи і вихід.", "Одна и та же система планшета работает в теплице и на складе. Инструкция показывает: вход PIN, начало работы, деятельность, перерыв, конец работы и выход.", "Eyni planşet sistemi istixanada və anbarda işləyir. Təlimat göstərir: PIN ilə giriş, işin başlanğıcı, fəaliyyət, fasilə, işin sonu və çıxış.", "El mismo sistema de tablet funciona en invernadero y almacén. La instrucción muestra: PIN, inicio de trabajo, actividad, descanso, fin de trabajo y cierre de sesión.", "Parehong tablet system ang gamit sa greenhouse at bodega. Ipinapakita ng instruksyon: PIN login, simula ng trabaho, activity, break, tapos ng trabaho at logout.", "Sistem tablet yang sama dipakai di rumah kaca dan gudang. Instruksi menunjukkan: login PIN, mulai kerja, aktivitas, istirahat, selesai kerja dan logout.", "एउटै ट्याबलेट प्रणाली ग्रीनहाउस र गोदाममा प्रयोग हुन्छ। निर्देशनले PIN login, काम सुरु, गतिविधि, ब्रेक, काम अन्त्य र logout देखाउँछ।")
      },
      szklarnia: {
        title: tx("Orientacja w szklarni", "Greenhouse orientation", "Орієнтація в теплиці", "Ориентация в теплице", "İstixanada istiqamət", "Orientación en el invernadero", "Pagkilala sa bahay-taniman", "Orientasi rumah kaca", "ग्रीनहाउसमा बाटो बुझ्ने"),
        lead: tx("Szklarnia jest pokazana w 3 prostych krokach: całość, jedna nawa, wejście do rzędu.", "The greenhouse is shown in 3 simple steps: whole greenhouse, one nave, one passage.", "Теплиця показана у 3 простих кроках: вся теплиця, одна нава, вхід у ряд.", "Теплица показана в 3 шагах: вся теплица, одна нава, вход в ряд.", "İstixana 3 sadə addımda göstərilir: hamısı, bir nava, sıraya giriş.", "El invernadero se muestra en 3 pasos: completo, una nave, entrada al pasillo.", "Ipinapakita ang bahay-taniman sa 3 hakbang: buong lugar, isang nawa, pasukan sa hanay.", "Rumah kaca ditampilkan dalam 3 langkah: keseluruhan, satu nave, pintu masuk baris.", "ग्रीनहाउस ३ चरणमा देखाइएको छ: पूरै, एउटा नावा, पङ्क्तिमा प्रवेश।")
      },
      reader: {
        title: tx("Reader - instruktaż", "Reader - training", "Рідер - інструктаж", "Ридер - инструктаж", "Reader - təlimat", "Reader - instrucción", "Reader - pagsasanay", "Reader - instruksi", "Reader - निर्देशन"),
        lead: tx("Reader dotyczy pracy na szklarni. Magazyn nie używa readerów.", "Reader is for greenhouse work. The warehouse does not use readers.", "Рідер стосується роботи в теплиці. На складі рідер не використовується.", "Ридер относится к работе в теплице. На складе ридер не используется.", "Reader istixana işi üçündür. Anbarda reader istifadə olunmur.", "Reader es para el trabajo en invernadero. En almacén no se usa reader.", "Ang reader ay para sa trabaho sa bahay-taniman. Walang reader sa bodega.", "Reader untuk kerja rumah kaca. Gudang tidak memakai reader.", "Reader ग्रीनहाउसको कामका लागि हो। गोदाममा reader प्रयोग हुँदैन।")
      },
      lekarz: {
        title: tx("Gdzie szukać lekarza?", "Where to find a doctor?", "Де шукати лікаря?", "Где искать врача?", "Həkimi harada tapmaq olar?", "¿Dónde buscar médico?", "Saan maghahanap ng doktor?", "Di mana mencari dokter?", "डाक्टर कहाँ खोज्ने?"),
        lead: tx("Najpierw wybierz: przychodnia, SOR albo dentysta. W nagłym zagrożeniu dzwoń 112.", "First choose: clinic, emergency room or dentist. In danger call 112.", "Спочатку оберіть: поліклініка, SOR або стоматолог. При небезпеці телефонуйте 112.", "Сначала выберите: поликлиника, SOR или стоматолог. При опасности звоните 112.", "Əvvəl seçin: poliklinika, təcili yardım və ya diş həkimi. Təhlükədə 112-yə zəng edin.", "Primero elige: clínica, urgencias o dentista. En peligro llama al 112.", "Piliin muna: klinika, emergency room o dentista. Kung delikado, tumawag sa 112.", "Pilih dulu: klinik, IGD, atau dokter gigi. Jika darurat hubungi 112.", "पहिले छान्नुहोस्: क्लिनिक, आपतकालीन वा दन्त चिकित्सक। खतरा भए 112 मा फोन गर्नुहोस्।")
      },
      kontakty: {
        title: tx("Kontakty", "Contacts", "Контакти", "Контакты", "Əlaqələr", "Contactos", "Mga contact", "Kontak", "सम्पर्क"),
        lead: tx("Najpierw wybierz dział. Przy brygadzistach są tylko przyciski telefonu i WhatsApp.", "Choose the department first. Brigadiers have only phone and WhatsApp buttons.", "Спочатку оберіть відділ. Біля бригадирів є тільки кнопки телефону і WhatsApp.", "Сначала выберите отдел. У бригадиров есть только кнопки телефона и WhatsApp.", "Əvvəl şöbəni seçin. Briqadirlərdə yalnız telefon və WhatsApp düymələri var.", "Primero elige el departamento. Los encargados tienen solo botones de teléfono y WhatsApp.", "Piliin muna ang departamento. Sa brigadier, phone at WhatsApp buttons lang.", "Pilih departemen dulu. Mandor hanya punya tombol telepon dan WhatsApp.", "पहिले विभाग छान्नुहोस्। ब्रिगेडियरमा फोन र WhatsApp बटन मात्र छन्।")
      },
      grupy: {
        title: tx("Grupy informacyjne", "Information groups", "Інформаційні групи", "Информационные группы", "Məlumat qrupları", "Grupos informativos", "Mga grupo ng impormasyon", "Grup informasi", "सूचना समूहहरू"),
        lead: tx("Tu są tylko linki do oficjalnych grup. Do brygadzistów piszemy przez kontakty.", "Here are only official group links. To message brigadiers, use Contacts.", "Тут тільки посилання на офіційні групи. Бригадирам пишіть через Контакти.", "Здесь только ссылки на официальные группы. Бригадирам пишите через Контакты.", "Burada yalnız rəsmi qrup linkləri var. Briqadirlərə Kontaktlar bölməsindən yazın.", "Aquí solo están los enlaces a grupos oficiales. Para brigadistas usa Contactos.", "Narito lang ang opisyal na link ng mga grupo. Para sumulat sa brigadier, gamitin ang Mga contact.", "Di sini hanya tautan grup resmi. Untuk mandor gunakan Kontak.", "यहाँ आधिकारिक समूह लिंक मात्र छन्। ब्रिगेडियरका लागि सम्पर्क प्रयोग गर्नुहोस्।")
      },
      miasto: {
        title: tx("Miasto, urząd i banki", "City, office and banks", "Місто, установи і банки", "Город, учреждения и банки", "Şəhər, idarələr və banklar", "Ciudad, oficina y bancos", "Lungsod, opisina at bangko", "Kota, kantor dan bank", "शहर, कार्यालय र बैंक"),
        lead: tx("Praktyczne miejsca: urząd, karta pobytu, aplikacje do transportu i podstawowe sprawy w mieście.", "Practical places: office, residence card, transport apps and basic city matters.", "Практичні місця: установа, карта побиту, транспортні додатки та міські справи.", "Практичные места: учреждение, карта побыту, транспортные приложения и городские дела.", "Lazımlı yerlər: idarə, yaşayış kartı, nəqliyyat tətbiqləri və şəhər işləri.", "Lugares útiles: oficina, tarjeta de residencia, apps de transporte y asuntos básicos.", "Mahahalagang lugar: opisina, card ng paninirahan, app sa transportasyon at pangunahing asunto sa lungsod.", "Tempat penting: kantor, kartu tinggal, aplikasi transportasi dan urusan kota.", "काम लाग्ने ठाउँहरू: कार्यालय, residence card, यातायात एप र शहरका काम।")
      },
      zakazy: {
        title: tx("Zakazy i zasady", "Bans and rules", "Заборони і правила", "Запреты и правила", "Qadağalar və qaydalar", "Prohibiciones y reglas", "Mga bawal at patakaran", "Larangan dan aturan", "निषेध र नियम"),
        lead: tx("Te zasady dotyczą szklarni i magazynu. To ma być proste: czego nie wolno wnosić i robić.", "These rules apply to greenhouse and warehouse. Simple: what you cannot bring and do.", "Ці правила стосуються теплиці і складу. Просто: що не можна вносити і робити.", "Эти правила для теплицы и склада. Просто: что нельзя приносить и делать.", "Bu qaydalar istixana və anbardadır. Sadə: nə gətirmək və etmək olmaz.", "Estas reglas son para invernadero y almacén. Simple: qué no se puede traer ni hacer.", "Para ito sa bahay-taniman at bodega. Simple: ano ang bawal dalhin at gawin.", "Aturan ini untuk rumah kaca dan gudang. Sederhana: apa yang tidak boleh dibawa dan dilakukan.", "यी नियम ग्रीनहाउस र गोदामका लागि हुन्। सरल: के ल्याउन र गर्न पाइँदैन।")
      },
      test: {
        title: tx("Test ogólny", "General test", "Загальний тест", "Общий тест", "Ümumi test", "Test general", "Pangkalahatang test", "Tes umum", "सामान्य परीक्षण"),
        lead: tx("30 krótkich pytań. Po zakończeniu wyślij wynik wiadomością.", "30 short questions. After finishing, send the result by message.", "30 коротких питань. Після завершення надішліть результат повідомленням.", "30 коротких вопросов. После завершения отправьте результат сообщением.", "30 qısa sual. Bitirdikdən sonra nəticəni mesajla göndərin.", "30 preguntas cortas. Al terminar envía el resultado por mensaje.", "30 maikling tanong. Pagkatapos, ipadala ang resulta sa mensahe.", "30 pertanyaan singkat. Setelah selesai kirim hasil lewat pesan.", "३० छोटा प्रश्न। सकेपछि नतिजा सन्देशबाट पठाउनुहोस्।")
      }
    },

    tiles: [
      { page: "mapa", tone: "blue", icon: "map", title: tx("Dojazd / mapa", "Route / map", "Дорога / карта", "Дорога / карта", "Yol / xəritə", "Ruta / mapa", "Ruta / mapa", "Rute / peta", "बाटो / नक्सा"), text: tx("Szklarnie, magazyn, stary magazyn.", "Greenhouses, warehouse, old warehouse.", "Теплиці, склад, старий склад.", "Теплицы, склад, старый склад.", "İstixanalar, anbar, köhnə anbar.", "Invernaderos, almacén, antiguo almacén.", "Mga bahay-taniman, bodega, lumang bodega.", "Rumah kaca, gudang, gudang lama.", "ग्रीनहाउस, गोदाम, पुरानो गोदाम।") },
      { page: "magazyn", tone: "green", icon: "warehouse", title: tx("Magazyn", "Warehouse", "Склад", "Склад", "Anbar", "Almacén", "Bodega", "Gudang", "गोदाम"), text: tx("Wejście, zdjęcie, zasady. Bez readera.", "Map, entrance, rules. No reader.", "Вхід, фото, правила. Без рідера.", "Вход, фото, правила. Без ридера.", "Giriş, şəkil, qaydalar. Reader yoxdur.", "Mapa, entrada, reglas. Sin reader.", "Mapa, pasukan, patakaran. Walang reader.", "Peta, pintu masuk, aturan. Tanpa reader.", "प्रवेश, फोटो, नियम। reader छैन।") },
      { page: "tablet", tone: "yellow", icon: "tablet", title: tx("Tablet", "Tablet", "Планшет", "Планшет", "Planşet", "Tablet", "Tablet", "Tablet", "ट्याबलेट"), text: tx("Jedna instrukcja dla szklarni i magazynu.", "One instruction for greenhouse and warehouse.", "Одна інструкція для теплиці і складу.", "Одна инструкция для теплицы и склада.", "İstixana və anbar üçün bir təlimat.", "Una instrucción para invernadero y almacén.", "Isang instruksyon para sa greenhouse at bodega.", "Satu instruksi untuk rumah kaca dan gudang.", "ग्रीनहाउस र गोदामका लागि एउटै निर्देशन।") },
      { page: "szklarnia", tone: "green", icon: "greenhouse", title: tx("Szklarnia", "Greenhouse", "Теплиця", "Теплица", "İstixana", "Invernadero", "Bahay-taniman", "Rumah kaca", "ग्रीनहाउस"), text: tx("Orientacja w 3 prostych krokach.", "Orientation in 3 simple steps.", "Орієнтація у 3 простих кроках.", "Ориентация в 3 простых шагах.", "3 sadə addımda istiqamət.", "Orientación en 3 pasos.", "Pagkilala sa 3 hakbang.", "Orientasi dalam 3 langkah.", "३ सरल चरणमा बाटो।") },
      { page: "reader", tone: "yellow", icon: "reader", title: tx("Reader", "Reader", "Рідер", "Ридер", "Reader", "Reader", "Reader", "Reader", "Reader"), text: tx("Start, rzędy, poza rzędami, wózki, restart.", "Start, rows, outside rows, carts, restart.", "Старт, ряди, поза рядами, візки, рестарт.", "Старт, ряды, вне рядов, тележки, рестарт.", "Start, sıralar, sıradan kənar, arabalar, restart.", "Inicio, filas, fuera de filas, carros, reinicio.", "Start, rows, labas ng rows, carts, restart.", "Mulai, baris, di luar baris, troli, restart.", "सुरु, पङ्क्ति, बाहिर, ट्रली, restart।") },
      { page: "lekarz", tone: "red", icon: "medical", title: tx("Lekarz", "Doctor", "Лікар", "Врач", "Həkim", "Médico", "Doktor", "Dokter", "डाक्टर"), text: tx("Przychodnia, SOR, dentysta.", "Clinic, emergency room, dentist.", "Поліклініка, SOR, стоматолог.", "Поликлиника, SOR, стоматолог.", "Poliklinika, təcili, diş həkimi.", "Clínica, urgencias, dentista.", "Klinika, emergency, dentista.", "Klinik, IGD, dokter gigi.", "क्लिनिक, आपतकालीन, दन्त चिकित्सक।") },
      { page: "kontakty", tone: "blue", icon: "phone", title: tx("Kontakty", "Contacts", "Контакти", "Контакты", "Əlaqələr", "Contactos", "Mga contact", "Kontak", "सम्पर्क"), text: tx("Brygadziści, magazyn i koordynatorzy.", "Brigadiers, warehouse and coordinators.", "Бригадири, склад і координатори.", "Бригадиры, склад и координаторы.", "Briqadirlər, anbar və koordinatorlar.", "Brigadistas, almacén y coordinadores.", "Brigadier, bodega at mga coordinator.", "Mandor, gudang, koordinator.", "ब्रिगेडियर, गोदाम र कोर्डिनेटर।") },
      { page: "grupy", tone: "blue", icon: "groups", title: tx("Grupy", "Groups", "Групи", "Группы", "Qruplar", "Grupos", "Mga grupo", "Grup", "समूहहरू"), text: tx("Viber, Telegram, Telegram AZ.", "Viber, Telegram, Telegram AZ.", "Viber, Telegram, Telegram AZ.", "Viber, Telegram, Telegram AZ.", "Viber, Telegram, Telegram AZ.", "Viber, Telegram, Telegram AZ.", "Viber, Telegram, Telegram AZ.", "Viber, Telegram, Telegram AZ.", "Viber, Telegram, Telegram AZ.") },
      { page: "miasto", tone: "blue", icon: "city", title: tx("Miasto / urząd", "City / office", "Місто / установа", "Город / учреждение", "Şəhər / idarə", "Ciudad / oficina", "Lungsod / opisina", "Kota / kantor", "शहर / कार्यालय"), text: tx("DUW, karta pobytu, banki i aplikacje.", "DUW, residence card, banks and apps.", "DUW, карта побиту, банки і додатки.", "DUW, карта побыту, банки и приложения.", "DUW, yaşayış kartı, banklar və tətbiqlər.", "DUW, residencia, bancos y apps.", "DUW, card ng paninirahan, bangko at app.", "DUW, kartu tinggal, bank dan aplikasi.", "DUW, residence card, बैंक र एपहरू।") },
      { page: "zakazy", tone: "red", icon: "ban", title: tx("Zakazy", "Bans", "Заборони", "Запреты", "Qadağalar", "Prohibiciones", "Bawal", "Larangan", "निषेध"), text: tx("Czego nie wolno wnosić i robić.", "What is not allowed.", "Що заборонено.", "Что запрещено.", "Nə qadağandır.", "Qué está prohibido.", "Ano ang bawal.", "Apa yang dilarang.", "के निषेध छ।") },
      { page: "test", tone: "yellow", icon: "test", title: tx("Test", "Test", "Тест", "Тест", "Test", "Test", "Test", "Tes", "परीक्षण"), text: tx("Jeden ogólny test na 30 pytań.", "One 30-question general test.", "Один загальний тест на 30 питань.", "Один общий тест на 30 вопросов.", "30 suallıq ümumi test.", "Un test general de 30 preguntas.", "Isang general test na 30 tanong.", "Satu tes umum 30 pertanyaan.", "३० प्रश्नको एउटा सामान्य परीक्षण।") }
    ],

    install: {
      title: tx("Dodaj do ekranu telefonu", "Add to phone screen", "Додати на екран телефону", "Добавить на экран телефона", "Telefon ekranına əlavə et", "Añadir a la pantalla del teléfono", "Idagdag sa screen ng telepono", "Tambahkan ke layar ponsel", "फोनको स्क्रिनमा राख्नुहोस्"),
      lead: tx("Po pierwszym otwarciu możesz mieć ten link jak aplikację. Potem szybciej wrócisz do szkolenia.", "After opening once, you can keep this link like an app. Then you can return to training faster.", "Після першого відкриття можна мати це посилання як додаток. Потім швидше повернетеся до навчання.", "После первого открытия можно сохранить ссылку как приложение. Потом быстрее вернетесь к обучению.", "Bir dəfə açdıqdan sonra bu linki tətbiq kimi saxlaya bilərsiniz. Sonra təlimə daha tez qayıdarsınız.", "Después de abrirlo una vez, puedes guardar este enlace como una app. Luego vuelves más rápido a la formación.", "Pagkatapos buksan, puwede itong ilagay na parang app. Mas mabilis kang babalik sa training.", "Setelah dibuka sekali, link ini bisa disimpan seperti aplikasi. Nanti lebih cepat kembali ke pelatihan.", "पहिलो पटक खोलेपछि यो लिंक एप जस्तै राख्न सकिन्छ। पछि तालिममा छिटो फर्कन सकिन्छ।"),
      android: tx("Android: otwórz menu przeglądarki i wybierz „Dodaj do ekranu głównego”.", "Android: open the browser menu and choose “Add to Home screen”.", "Android: відкрийте меню браузера і виберіть «Додати на головний екран».", "Android: откройте меню браузера и выберите «Добавить на главный экран».", "Android: brauzer menyusunu açın və “Əsas ekrana əlavə et” seçin.", "Android: abre el menú del navegador y elige “Añadir a pantalla de inicio”.", "Android: buksan ang menu ng browser at piliin ang “Add to Home screen”.", "Android: buka menu browser lalu pilih “Tambahkan ke layar utama”.", "Android: ब्राउजर मेनु खोलेर “Home screen मा थप्नुहोस्” छान्नुहोस्।"),
      iphone: tx("iPhone: naciśnij Udostępnij i wybierz „Do ekranu początkowego”.", "iPhone: tap Share and choose “Add to Home Screen”.", "iPhone: натисніть Поділитися і виберіть «На початковий екран».", "iPhone: нажмите Поделиться и выберите «На экран Домой».", "iPhone: Paylaş düyməsini basın və “Əsas ekrana əlavə et” seçin.", "iPhone: toca Compartir y elige “Añadir a pantalla de inicio”.", "iPhone: pindutin ang Share at piliin ang “Add to Home Screen”.", "iPhone: tekan Bagikan lalu pilih “Tambahkan ke Layar Utama”.", "iPhone: Share थिचेर “Home Screen मा थप्नुहोस्” छान्नुहोस्।")
    },

    firstDay: {
      title: tx("Pierwszy dzień / pierwsze wejście", "First day / first entry", "Перший день / перший вхід", "Первый день / первый вход", "İlk gün / ilk giriş", "Primer día / primera entrada", "Unang araw / unang pasok", "Hari pertama / masuk pertama", "पहिलो दिन / पहिलो प्रवेश"),
      lead: tx("Najpierw wybierz miejsce, otwórz mapę i kieruj się do wejścia. Po przyjściu czekaj na osobę odpowiedzialną. Nie wchodź sam.", "First choose the place, open the map and go to the entrance. After arrival, wait for the responsible person. Do not enter alone.", "Спочатку оберіть місце, відкрийте карту і прямуйте до входу. Після приходу чекайте відповідальну особу. Не заходьте самі.", "Сначала выберите место, откройте карту и идите ко входу. После прихода ждите ответственного человека. Не входите сами.", "Əvvəl yeri seçin, xəritəni açın və girişə tərəf gedin. Gələndən sonra məsul şəxsi gözləyin. Tək daxil olmayın.", "Primero elige el lugar, abre el mapa y dirígete a la entrada. Al llegar, espera a la persona responsable. No entres solo.", "Piliin muna ang lugar, buksan ang mapa at pumunta sa pasukan. Pagdating, hintayin ang taong responsable. Huwag pumasok mag-isa.", "Pilih tempat dulu, buka peta, lalu menuju pintu masuk. Setelah tiba, tunggu orang yang bertanggung jawab. Jangan masuk sendiri.", "पहिले ठाउँ छान्नुहोस्, नक्सा खोल्नुहोस् र प्रवेशतिर जानुहोस्। पुगेपछि जिम्मेवार व्यक्तिलाई पर्खनुहोस्। एक्लै नजानुहोस्।"),
      steps: [
        { title: tx("Wybierz miejsce", "Choose the place", "Оберіть місце", "Выберите место", "Yeri seçin", "Elige el lugar", "Piliin ang lugar", "Pilih tempat", "ठाउँ छान्नुहोस्"), note: tx("Etap, magazyn albo punkt spotkania wybierasz zgodnie z wiadomością startową.", "Choose the stage, warehouse or meeting point according to the start message.", "Етап, склад або пункт зустрічі обирайте згідно зі стартовим повідомленням.", "Этап, склад или место встречи выбирайте по стартовому сообщению.", "Etap, anbar və ya görüş yerini başlanğıc mesajına görə seçin.", "Elige etapa, almacén o punto de encuentro según el mensaje inicial.", "Piliin ang etap, bodega o lugar ng pagkikita ayon sa unang mensahe.", "Pilih tahap, gudang, atau titik temu sesuai pesan awal.", "सुरुको सन्देश अनुसार चरण, गोदाम वा भेट्ने ठाउँ छान्नुहोस्।") },
        { title: tx("Otwórz mapę", "Open the map", "Відкрийте карту", "Откройте карту", "Xəritəni açın", "Abre el mapa", "Buksan ang mapa", "Buka peta", "नक्सा खोल्नुहोस्"), note: tx("Przycisk otwiera Google Maps albo trasę do wybranego miejsca.", "The button opens Google Maps or a route to the selected place.", "Кнопка відкриває Google Maps або маршрут до вибраного місця.", "Кнопка открывает Google Maps или маршрут к выбранному месту.", "Düymə Google Maps və ya seçilmiş yerə marşrutu açır.", "El botón abre Google Maps o una ruta al lugar elegido.", "Bubuksan ng button ang Google Maps o ruta sa piniling lugar.", "Tombol membuka Google Maps atau rute ke tempat pilihan.", "बटनले Google Maps वा छानेको ठाउँसम्मको बाटो खोल्छ।") },
        { title: tx("Kieruj się do wejścia", "Go to the entrance", "Прямуйте до входу", "Идите ко входу", "Girişə tərəf gedin", "Dirígete a la entrada", "Pumunta sa pasukan", "Menuju pintu masuk", "प्रवेशतिर जानुहोस्"), note: tx("To nie jest polecenie jazdy samochodem. Po prostu kieruj się trasą do punktu.", "This does not mean driving a car. Simply follow the route to the point.", "Це не означає їхати машиною. Просто рухайтесь за маршрутом до пункту.", "Это не значит ехать на машине. Просто идите по маршруту к точке.", "Bu maşınla getmək demək deyil. Sadəcə marşrutla nöqtəyə gedin.", "No significa ir en coche. Simplemente sigue la ruta hasta el punto.", "Hindi ibig sabihin nito na magmaneho. Sundan lang ang ruta papunta sa punto.", "Ini bukan berarti harus naik mobil. Ikuti saja rute ke titik.", "यसको अर्थ गाडी चलाउनु होइन। केवल बाटो पछ्याएर ठाउँसम्म जानुहोस्।") },
        { title: tx("Po przyjściu czekaj", "After arrival, wait", "Після приходу чекайте", "После прихода ждите", "Gələndən sonra gözləyin", "Al llegar, espera", "Pagdating, maghintay", "Setelah tiba, tunggu", "पुगेपछि पर्खनुहोस्"), note: tx("Czekaj przy wejściu lub w miejscu wskazanym w wiadomości. Nie wchodź sam na szklarnię ani magazyn.", "Wait at the entrance or at the place shown in the message. Do not enter the greenhouse or warehouse alone.", "Чекайте біля входу або в місці з повідомлення. Не заходьте самі в теплицю або склад.", "Ждите у входа или в месте из сообщения. Не входите сами в теплицу или склад.", "Girişdə və ya mesajda göstərilən yerdə gözləyin. İstixanaya və ya anbara tək girməyin.", "Espera en la entrada o en el lugar indicado. No entres solo al invernadero ni al almacén.", "Maghintay sa pasukan o sa lugar sa mensahe. Huwag pumasok mag-isa sa bahay-taniman o bodega.", "Tunggu di pintu masuk atau tempat yang tertulis di pesan. Jangan masuk sendiri ke rumah kaca atau gudang.", "प्रवेशमा वा सन्देशमा दिएको ठाउँमा पर्खनुहोस्। ग्रीनहाउस वा गोदाममा एक्लै नजानुहोस्।") }
      ]
    },

    mapPhotos: [],

    maps: [
      { tone: "blue", title: tx("Droga do biura / punkt spotkania", "Route to office / meeting point", "Дорога до офісу / місце зустрічі", "Дорога в офис / место встречи", "Ofisə yol / görüş yeri", "Ruta a la oficina / punto de encuentro", "Ruta papuntang opisina / meeting point", "Rute ke kantor / titik temu", "कार्यालय जाने बाटो / भेट्ने ठाउँ"), note: tx("To jest trasa do biura. Szukaj czerwonego ceglanego budynku, wejście od rogu, 2 piętro, pokój nr 2.", "This is the route to the office. Look for the red brick building, corner entrance, 2nd floor, room no. 2.", "Це маршрут до офісу. Шукайте червону цегляну будівлю, вхід з кута, 2 поверх, кабінет № 2.", "Это маршрут в офис. Ищите красное кирпичное здание, вход с угла, 2 этаж, кабинет № 2.", "Bu ofisə gedən yoldur. Qırmızı kərpic binanı axtarın, giriş küncdəndir, 2-ci mərtəbə, otaq № 2.", "Es la ruta a la oficina. Busca el edificio rojo de ladrillo, entrada por la esquina, 2.º piso, sala 2.", "Ito ang ruta papuntang opisina. Hanapin ang pulang brick building, pasukan sa kanto, 2nd floor, room no. 2.", "Ini rute ke kantor. Cari gedung bata merah, masuk dari sudut, lantai 2, ruang no. 2.", "यो कार्यालय जाने बाटो हो। रातो इँटाको भवन खोज्नुहोस्, कुनाबाट प्रवेश, दोस्रो तला, कोठा नं. २।"), url: "https://maps.app.goo.gl/55Bq5cMM5omaDihv6" },
      { tone: "blue", title: tx("Mapa wejść", "Entrance map", "Карта входів", "Карта входов", "Giriş xəritəsi", "Mapa de entradas", "Mapa ng pasukan", "Peta pintu masuk", "प्रवेश नक्सा"), note: tx("Pokazuje wejścia na teren i do pracy.", "Shows entrances to the site and work.", "Показує входи на територію і до роботи.", "Показывает входы на территорию и на работу.", "Əraziyə və işə girişləri göstərir.", "Muestra las entradas al lugar y al trabajo.", "Ipinapakita ang mga pasukan sa lugar at trabaho.", "Menunjukkan pintu masuk area dan kerja.", "क्षेत्र र काममा प्रवेश देखाउँछ।"), url: "https://www.google.com/maps/d/viewer?mid=1VcKjk2pZ1RgER3GV2DrH8u699hZnnts" },
      { tone: "green", title: tx("Szklarnia E1 / E2", "Greenhouse E1 / E2", "Теплиця E1 / E2", "Теплица E1 / E2", "İstixana E1 / E2", "Invernadero E1 / E2", "Bahay-taniman E1 / E2", "Rumah kaca E1 / E2", "ग्रीनहाउस E1 / E2"), note: tx("Kieruj się do właściwego etapu.", "Go to the correct stage.", "Прямуйте до правильного етапу.", "Идите к правильному этапу.", "Düzgün etapa gedin.", "Dirígete a la etapa correcta.", "Pumunta sa tamang etap.", "Pergi ke tahap yang benar.", "सही चरणमा जानुहोस्।"), url: "https://maps.app.goo.gl/kG99UiAv9FRvb6DG9?g_st=ic" },
      { tone: "green", title: tx("Szklarnia E3 / E4", "Greenhouse E3 / E4", "Теплиця E3 / E4", "Теплица E3 / E4", "İstixana E3 / E4", "Invernadero E3 / E4", "Bahay-taniman E3 / E4", "Rumah kaca E3 / E4", "ग्रीनहाउस E3 / E4"), note: tx("Sprawdź etap przed wejściem.", "Check the stage before entering.", "Перевірте етап перед входом.", "Проверьте этап перед входом.", "Girməzdən əvvəl etapı yoxlayın.", "Comprueba la etapa antes de entrar.", "Suriin ang etap bago pumasok.", "Cek tahap sebelum masuk.", "प्रवेश अघि चरण जाँच गर्नुहोस्।"), url: "https://maps.google.com?q=51.0173459,17.1570148&entry=gps" },
      { tone: "green", title: tx("Szklarnia E5", "Greenhouse E5", "Теплиця E5", "Теплица E5", "İstixana E5", "Invernadero E5", "Bahay-taniman E5", "Rumah kaca E5", "ग्रीनहाउस E5"), note: tx("Mapa doprowadzi do etapu E5.", "The map leads to stage E5.", "Карта доведе до етапу E5.", "Карта доведет до этапа E5.", "Xəritə E5 etapına aparır.", "El mapa lleva a E5.", "Dadalhin ka ng mapa sa E5.", "Peta menuju E5.", "नक्साले E5 मा पुर्याउँछ।"), url: "https://maps.app.goo.gl/ccG5vb6oE26NDsS76?g_st=ic" },
      { tone: "green", title: tx("Szklarnia E6", "Greenhouse E6", "Теплиця E6", "Теплица E6", "İstixana E6", "Invernadero E6", "Bahay-taniman E6", "Rumah kaca E6", "ग्रीनहाउस E6"), note: tx("Mapa doprowadzi do etapu E6.", "The map leads to stage E6.", "Карта доведе до етапу E6.", "Карта доведет до этапа E6.", "Xəritə E6 etapına aparır.", "El mapa lleva a E6.", "Dadalhin ka ng mapa sa E6.", "Peta menuju E6.", "नक्साले E6 मा पुर्याउँछ।"), url: "https://maps.app.goo.gl/DH8J1Rtea55mXsoTA?g_st=ic" },
      { key: "warehouse", tone: "yellow", title: tx("Magazyn - lokalizacja", "Warehouse - location", "Склад - локація", "Склад - локация", "Anbar - yer", "Almacén - ubicación", "Bodega - lokasyon", "Gudang - lokasi", "गोदाम - स्थान"), note: tx("To jest właściwe miejsce magazynu. Otwórz mapę i kieruj się do wskazanego wejścia.", "This is the correct warehouse location. Open the map and go to the indicated entrance.", "Це правильне місце складу. Відкрийте карту і прямуйте до вказаного входу.", "Это правильное место склада. Откройте карту и идите к указанному входу.", "Bu anbarın düzgün yeridir. Xəritəni açın və göstərilən girişə gedin.", "Esta es la ubicación correcta del almacén. Abre el mapa y ve a la entrada indicada.", "Ito ang tamang lokasyon ng bodega. Buksan ang mapa at pumunta sa nakatakdang pasukan.", "Ini lokasi gudang yang benar. Buka peta dan menuju pintu masuk yang ditunjukkan.", "यो गोदामको सही स्थान हो। नक्सा खोल्नुहोस् र देखाइएको प्रवेशतिर जानुहोस्।"), url: "https://maps.app.goo.gl/vVWEFUUHDt8qxzVw9" },
      { key: "oldWarehouse", tone: "yellow", title: tx("Stary magazyn", "Old warehouse", "Старий склад", "Старый склад", "Köhnə anbar", "Almacén antiguo", "Lumang bodega", "Gudang lama", "पुरानो गोदाम"), note: tx("Użyj tylko, gdy masz informację, że jedziesz do starego magazynu.", "Use only when you were told to go to the old warehouse.", "Використовуйте тільки якщо вам сказали йти на старий склад.", "Используйте только если вам сказали идти на старый склад.", "Yalnız köhnə anbara getmək deyildikdə istifadə edin.", "Úsalo solo si te dijeron ir al almacén antiguo.", "Gamitin lang kung sinabing sa lumang bodega ka pupunta.", "Gunakan hanya jika diminta ke gudang lama.", "पुरानो गोदाम जानु भनिएको छ भने मात्र प्रयोग गर्नुहोस्।"), url: "https://maps.app.goo.gl/5B47Av1GDhEUBM7M7" }
    ],

    warehouseRules: [
      tx("Na magazynie nie używa się readerów.", "Readers are not used in the warehouse.", "На складі рідер не використовується.", "На складе ридер не используется.", "Anbarda reader istifadə olunmur.", "En almacén no se usa reader.", "Walang reader sa bodega.", "Di gudang tidak memakai reader.", "गोदाममा reader प्रयोग हुँदैन।"),
      tx("Najpierw sprawdź mapę i wejście.", "First check the map and entrance.", "Спочатку перевірте карту і вхід.", "Сначала проверьте карту и вход.", "Əvvəl xəritəni və girişi yoxlayın.", "Primero revisa el mapa y la entrada.", "Tingnan muna ang mapa at pasukan.", "Pertama cek peta dan pintu masuk.", "पहिले नक्सा र प्रवेश हेर्नुहोस्।"),
      tx("W razie spóźnienia lub choroby kontaktuj się z brygadzistą magazynu.", "If you are late or sick, contact the warehouse brigadier.", "Якщо запізнюєтесь або хворієте, зв'яжіться з бригадиром складу.", "Если опаздываете или болеете, свяжитесь с бригадиром склада.", "Gecikirsinizsə və ya xəstəsinizsə, anbar briqadiri ilə əlaqə saxlayın.", "Si llegas tarde o estás enfermo, contacta al jefe de almacén.", "Kung late o may sakit, kontakin ang brigadier ng bodega.", "Jika terlambat atau sakit, hubungi mandor gudang.", "ढिलो वा बिरामी भए गोदाम ब्रिगेडियरलाई सम्पर्क गर्नुहोस्।")
    ],

    tabletGuide: {
      tag: tx("Tablet - jeden system", "Tablet - one system", "Планшет - одна система", "Планшет - одна система", "Planşet - bir sistem", "Tablet - un sistema", "Tablet - isang system", "Tablet - satu sistem", "ट्याबलेट - एउटै प्रणाली"),
      title: tx("Tablet - rejestracja pracy", "Tablet - work registration", "Планшет - реєстрація роботи", "Планшет - регистрация работы", "Planşet - işin qeydiyyatı", "Tablet - registro de trabajo", "Tablet - pag-register ng trabaho", "Tablet - pencatatan kerja", "ट्याबलेट - काम दर्ता"),
      lead: tx("Tablet działa tak samo na szklarni i na magazynie. Używaj swojego nazwiska i PIN-u, a potem wybieraj tylko czynność, którą naprawdę wykonujesz.", "The tablet works the same in the greenhouse and warehouse. Use your surname and PIN, then choose only the activity you are really doing.", "Планшет працює однаково в теплиці і на складі. Використовуйте своє прізвище і PIN, потім обирайте тільки дію, яку справді виконуєте.", "Планшет работает одинаково в теплице и на складе. Используйте свою фамилию и PIN, затем выбирайте только деятельность, которую реально выполняете.", "Planşet istixanada və anbarda eyni işləyir. Öz soyadınızı və PIN-inizi istifadə edin, sonra yalnız həqiqətən etdiyiniz fəaliyyəti seçin.", "La tablet funciona igual en invernadero y almacén. Usa tu apellido y PIN, después elige solo la actividad que realmente haces.", "Pareho ang gamit ng tablet sa greenhouse at bodega. Gamitin ang sariling apelyido at PIN, pagkatapos piliin lang ang activity na ginagawa mo talaga.", "Tablet bekerja sama di rumah kaca dan gudang. Gunakan nama keluarga dan PIN sendiri, lalu pilih hanya aktivitas yang benar-benar dikerjakan.", "ट्याबलेट ग्रीनहाउस र गोदाममा उस्तै चल्छ। आफ्नै थर र PIN प्रयोग गर्नुहोस्, अनि आफूले साँच्चै गर्ने गतिविधि मात्र छान्नुहोस्।"),
      important: tx("Używaj tylko swojego nazwiska i swojego PIN-u. Nie wolno używać danych innej osoby.", "Use only your own surname and your own PIN. Do not use another person's data.", "Використовуйте тільки своє прізвище і свій PIN. Не можна використовувати дані іншої людини.", "Используйте только свою фамилию и свой PIN. Нельзя использовать данные другого человека.", "Yalnız öz soyadınızı və öz PIN-inizi istifadə edin. Başqa şəxsin məlumatlarından istifadə etmək olmaz.", "Usa solo tu apellido y tu PIN. No se pueden usar datos de otra persona.", "Gamitin lang ang sariling apelyido at sariling PIN. Bawal gumamit ng data ng ibang tao.", "Gunakan hanya nama keluarga sendiri dan PIN sendiri. Tidak boleh memakai data orang lain.", "आफ्नै थर र आफ्नै PIN मात्र प्रयोग गर्नुहोस्। अरूको डाटा प्रयोग गर्न पाइँदैन।"),
      steps: [
        {
          title: tx("Znajdź swoje nazwisko i zaloguj się", "Find your surname and log in", "Знайдіть своє прізвище і увійдіть", "Найдите свою фамилию и войдите", "Soyadınızı tapın və daxil olun", "Busca tu apellido e inicia sesión", "Hanapin ang apelyido at mag-log in", "Cari nama keluarga dan login", "आफ्नो थर खोजेर लगइन गर्नुहोस्"),
          note: tx("Rozpoczynając pracę znajdź swoje imię i nazwisko. Zaloguj się swoim numerem PIN.", "When starting work, find your first name and surname. Log in with your PIN number.", "Починаючи роботу, знайдіть своє ім'я та прізвище. Увійдіть своїм PIN-кодом.", "Начиная работу, найдите свое имя и фамилию. Войдите своим PIN-кодом.", "İşə başlayanda adınızı və soyadınızı tapın. Öz PIN kodunuzla daxil olun.", "Al empezar el trabajo, busca tu nombre y apellido. Entra con tu PIN.", "Sa simula ng trabaho, hanapin ang pangalan at apelyido. Mag-login gamit ang sariling PIN.", "Saat mulai kerja, cari nama depan dan nama keluarga Anda. Login dengan PIN sendiri.", "काम सुरु गर्दा आफ्नो नाम र थर खोज्नुहोस्। आफ्नै PIN बाट लगइन गर्नुहोस्।"),
          image: "assets/tablet/tablet-login-pin.jpg",
          screen: tx("Nazwisko + PIN", "Surname + PIN", "Прізвище + PIN", "Фамилия + PIN", "Soyad + PIN", "Apellido + PIN", "Apelyido + PIN", "Nama + PIN", "थर + PIN")
        },
        {
          title: tx("Kliknij „Początek pracy”", "Tap “Work start”", "Натисніть «Початок роботи»", "Нажмите «Начало работы»", "“İşin başlanğıcı” seçin", "Pulsa “Inicio de trabajo”", "Pindutin ang “Simula ng trabaho”", "Klik “Mulai kerja”", "“काम सुरु” थिच्नुहोस्"),
          note: tx("Znajdź czynność „Początek pracy” i kliknij ją.", "Find the activity “Work start” and tap it.", "Знайдіть дію «Початок роботи» і натисніть її.", "Найдите действие «Начало работы» и нажмите его.", "“İşin başlanğıcı” fəaliyyətini tapın və seçin.", "Busca la actividad “Inicio de trabajo” y selecciónala.", "Hanapin ang activity na “Simula ng trabaho” at pindutin.", "Cari aktivitas “Mulai kerja” lalu klik.", "“काम सुरु” गतिविधि खोजेर थिच्नुहोस्।"),
          image: "assets/tablet/tablet-start-work.jpg",
          screen: tx("Początek pracy", "Work start", "Початок роботи", "Начало работы", "İşin başlanğıcı", "Inicio de trabajo", "Simula ng trabaho", "Mulai kerja", "काम सुरु")
        },
        {
          title: tx("Wybierz wykonywaną czynność", "Choose the activity you do", "Оберіть дію, яку виконуєте", "Выберите выполняемую деятельность", "Gördüyünüz fəaliyyəti seçin", "Elige la actividad que haces", "Piliin ang ginagawa mong activity", "Pilih aktivitas yang dikerjakan", "आफूले गर्ने गतिविधि छान्नुहोस्"),
          note: tx("Zaloguj się ponownie i wybierz wykonywaną czynność.", "Log in again and choose the activity you are doing.", "Увійдіть знову і виберіть дію, яку виконуєте.", "Войдите снова и выберите выполняемую деятельность.", "Yenidən daxil olun və gördüyünüz fəaliyyəti seçin.", "Inicia sesión otra vez y elige la actividad que realizas.", "Mag-login ulit at piliin ang ginagawa mong activity.", "Login lagi dan pilih aktivitas yang dikerjakan.", "फेरि लगइन गरेर आफूले गर्ने गतिविधि छान्नुहोस्।"),
          image: "assets/tablet/tablet-activity.jpg",
          screen: tx("Czynność", "Activity", "Дія", "Деятельность", "Fəaliyyət", "Actividad", "Activity", "Aktivitas", "गतिविधि")
        },
        {
          title: tx("Zmiana czynności", "Changing activity", "Зміна дії", "Смена деятельности", "Fəaliyyəti dəyişmək", "Cambio de actividad", "Pagpalit ng activity", "Ganti aktivitas", "गतिविधि बदल्ने"),
          note: tx("Jeśli zmieniasz wykonywaną czynność, zaloguj się ponownie i wybierz nową czynność.", "If you change the activity, log in again and choose the new activity.", "Якщо змінюєте дію, увійдіть знову і виберіть нову дію.", "Если меняете деятельность, войдите снова и выберите новую деятельность.", "Fəaliyyəti dəyişirsinizsə, yenidən daxil olun və yeni fəaliyyəti seçin.", "Si cambias de actividad, inicia sesión otra vez y elige la nueva actividad.", "Kung magpapalit ng activity, mag-login ulit at piliin ang bagong activity.", "Jika ganti aktivitas, login lagi dan pilih aktivitas baru.", "गतिविधि बदल्दा फेरि लगइन गरेर नयाँ गतिविधि छान्नुहोस्।"),
          image: "assets/tablet/tablet-change-activity.jpg",
          screen: tx("Nowa czynność", "New activity", "Нова дія", "Новая деятельность", "Yeni fəaliyyət", "Nueva actividad", "Bagong activity", "Aktivitas baru", "नयाँ गतिविधि")
        },
        {
          title: tx("Początek przerwy", "Break start", "Початок перерви", "Начало перерыва", "Fasilənin başlanğıcı", "Inicio de descanso", "Simula ng pahinga", "Mulai istirahat", "ब्रेक सुरु"),
          note: tx("Zaczynając przerwę zaloguj się i wybierz „Przerwa”.", "When starting a break, log in and choose “Break”.", "Починаючи перерву, увійдіть і виберіть «Перерва».", "Начиная перерыв, войдите и выберите «Перерыв».", "Fasiləyə başlayanda daxil olun və “Fasilə” seçin.", "Al empezar descanso, inicia sesión y elige “Descanso”.", "Kapag magsisimula ng break, mag-login at piliin ang “Break”.", "Saat mulai istirahat, login dan pilih “Istirahat”.", "ब्रेक सुरु गर्दा लगइन गरेर “ब्रेक” छान्नुहोस्।"),
          image: "assets/tablet/tablet-break-start.jpg",
          screen: tx("Przerwa", "Break", "Перерва", "Перерыв", "Fasilə", "Descanso", "Break", "Istirahat", "ब्रेक")
        },
        {
          title: tx("Koniec przerwy", "Break end", "Кінець перерви", "Конец перерыва", "Fasilənin sonu", "Fin de descanso", "Tapos ng pahinga", "Selesai istirahat", "ब्रेक अन्त्य"),
          note: tx("Kończąc przerwę zaloguj się i wybierz wykonywaną czynność.", "When ending a break, log in and choose the activity you are doing.", "Закінчуючи перерву, увійдіть і виберіть дію, яку виконуєте.", "Заканчивая перерыв, войдите и выберите выполняемую деятельность.", "Fasiləni bitirəndə daxil olun və gördüyünüz fəaliyyəti seçin.", "Al terminar descanso, inicia sesión y elige la actividad que realizas.", "Pagkatapos ng pahinga, mag-login at piliin ang ginagawa mong gawain.", "Saat selesai istirahat, login dan pilih aktivitas yang dikerjakan.", "ब्रेक सकेपछि लगइन गरेर आफूले गर्ने गतिविधि छान्नुहोस्।"),
          image: "assets/tablet/tablet-after-break-activity.jpg",
          screen: tx("Czynność", "Activity", "Дія", "Деятельность", "Fəaliyyət", "Actividad", "Activity", "Aktivitas", "गतिविधि")
        },
        {
          title: tx("Koniec pracy", "Work end", "Кінець роботи", "Конец работы", "İşin sonu", "Fin de trabajo", "Tapos ng trabaho", "Selesai kerja", "काम अन्त्य"),
          note: tx("Kończąc pracę zaloguj się ponownie i wybierz „Koniec pracy”.", "When finishing work, log in again and choose “Work end”.", "Закінчуючи роботу, увійдіть знову і виберіть «Кінець роботи».", "Заканчивая работу, войдите снова и выберите «Конец работы».", "İşi bitirəndə yenidən daxil olun və “İşin sonu” seçin.", "Al terminar el trabajo, inicia sesión otra vez y elige “Fin de trabajo”.", "Kapag tapos na ang trabaho, mag-login ulit at piliin ang “Tapos ng trabaho”.", "Saat selesai kerja, login lagi dan pilih “Selesai kerja”.", "काम सकेपछि फेरि लगइन गरेर “काम अन्त्य” छान्नुहोस्।"),
          image: "assets/tablet/tablet-work-end.jpg",
          screen: tx("Koniec pracy", "Work end", "Кінець роботи", "Конец работы", "İşin sonu", "Fin de trabajo", "Tapos ng trabaho", "Selesai kerja", "काम अन्त्य")
        },
        {
          title: tx("Wyloguj się", "Log out", "Вийдіть із системи", "Выйдите из системы", "Çıxış edin", "Cerrar sesión", "Mag-log out", "Logout", "Logout गर्नुहोस्"),
          note: tx("Zaloguj się ponownie i wybierz „Wyloguj się”.", "Log in again and choose “Log out”.", "Увійдіть знову і виберіть «Вийти».", "Войдите снова и выберите «Выйти».", "Yenidən daxil olun və “Çıxış” seçin.", "Inicia sesión otra vez y elige “Cerrar sesión”.", "Mag-login ulit at piliin ang “Log out”.", "Login lagi lalu pilih “Logout”.", "फेरि लगइन गरेर “Logout” छान्नुहोस्।"),
          image: "assets/tablet/tablet-logout.jpg",
          screen: tx("Wyloguj się", "Log out", "Вийти", "Выйти", "Çıxış", "Cerrar sesión", "Log out", "Logout", "Logout")
        }
      ],
      tips: [
        tx("Jeśli tablet nie działa, nie widzisz swojego nazwiska albo nie znasz PIN-u, zgłoś to swojemu brygadziście.", "If the tablet does not work, you do not see your surname or you do not know your PIN, report it to your brigadier.", "Якщо планшет не працює, не бачите свого прізвища або не знаєте PIN, повідомте свого бригадира.", "Если планшет не работает, вы не видите свою фамилию или не знаете PIN, сообщите своему бригадиру.", "Planşet işləmirsə, soyadınızı görmürsünüzsə və ya PIN bilmirsinizsə, öz briqadirinizə deyin.", "Si la tablet no funciona, no ves tu apellido o no sabes el PIN, avisa a tu encargado.", "Kung hindi gumagana ang tablet, wala ang apelyido mo o hindi mo alam ang PIN, sabihin sa iyong brigadier.", "Jika tablet tidak berfungsi, nama Anda tidak terlihat atau tidak tahu PIN, laporkan ke mandor Anda.", "ट्याबलेट चलेन, आफ्नो थर देखिएन वा PIN थाहा छैन भने आफ्नो ब्रिगेडियरलाई भन्नुहोस्।"),
        tx("Nie zostawiaj swojej sesji zalogowanej dla kolejnej osoby.", "Do not leave your session logged in for the next person.", "Не залишайте свою сесію відкритою для наступної людини.", "Не оставляйте свою сессию открытой для следующего человека.", "Sessiyanızı növbəti şəxs üçün açıq saxlamayın.", "No dejes tu sesión abierta para otra persona.", "Huwag iwanang naka-login ang session para sa susunod na tao.", "Jangan tinggalkan sesi Anda masih login untuk orang berikutnya.", "अर्को व्यक्तिका लागि आफ्नो session खुला नछोड्नुहोस्।")
      ]
    },

    readerTabs: [
      {
        id: "start",
        title: tx("Pełna kolejność", "Full order", "Повна послідовність", "Полная последовательность", "Tam ardıcıllıq", "Orden completo", "Buong pagkakasunod", "Urutan lengkap", "पूरा क्रम"),
        lead: tx("To jest obrazkowy start pracy z readerem. Używaj centralnego przycisku readera.", "This is the visual start order for the reader. Use the reader's middle button.", "Це наочний порядок початку роботи з рідером. Використовуйте центральну кнопку рідера.", "Это наглядный порядок начала работы с ридером. Используйте центральную кнопку ридера.", "Bu reader ilə işə başlama ardıcıllığıdır. Reader-in orta düyməsindən istifadə edin.", "Este es el orden visual de inicio con el reader. Usa el botón central del reader.", "Ito ang visual na simula ng reader. Gamitin ang gitnang button ng reader.", "Ini urutan awal kerja dengan reader. Gunakan tombol tengah reader.", "यो reader सुरु गर्ने चित्रसहितको क्रम हो। reader को बीचको बटन प्रयोग गर्नुहोस्।"),
        image: "assets/inline/reader_start.jpg",
        imageCaption: tx("Instrukcja obrazkowa readera - 9 kroków.", "Reader visual instruction - 9 steps.", "Інструкція рідера з картинками - 9 кроків.", "Инструкция ридера с картинками - 9 шагов.", "Reader şəkilli təlimatı - 9 addım.", "Instrucción visual del reader - 9 pasos.", "Reader visual instruction - 9 steps.", "Instruksi gambar reader - 9 langkah.", "reader चित्र निर्देशन - ९ चरण।"),
        imageSteps: [
          tx("Weź reader", "Take reader", "Візьміть рідер", "Возьмите ридер", "Reader götürün", "Toma reader", "Kunin reader", "Ambil reader", "reader लिनुहोस्"),
          tx("Tag personalny", "Personal tag", "Персональний тег", "Персональный тег", "Şəxsi tag", "Tag personal", "Personal tag", "Tag pribadi", "व्यक्तिगत tag"),
          tx("Początek pracy", "Work start", "Початок роботи", "Начало работы", "İşin başlanğıcı", "Inicio trabajo", "Simula trabaho", "Mulai kerja", "काम सुरु"),
          tx("Czynność", "Activity", "Дія", "Деятельность", "Fəaliyyət", "Actividad", "Gawain", "Aktivitas", "गतिविधि"),
          tx("Wejdź do rzędu", "Enter row", "Зайдіть у ряд", "Зайдите в ряд", "Sıraya girin", "Entra a fila", "Pumasok sa row", "Masuk baris", "पङ्क्तिमा जानुहोस्"),
          tx("Początek przerwy", "Break start", "Початок перерви", "Начало перерыва", "Fasilə başlanğıcı", "Inicio descanso", "Simula break", "Mulai istirahat", "ब्रेक सुरु"),
          tx("Koniec przerwy", "Break end", "Кінець перерви", "Конец перерыва", "Fasilə sonu", "Fin descanso", "Tapos break", "Selesai istirahat", "ब्रेक अन्त्य"),
          tx("Koniec pracy", "Work end", "Кінець роботи", "Конец работы", "İşin sonu", "Fin trabajo", "Tapos trabaho", "Selesai kerja", "काम अन्त्य"),
          tx("Odłóż reader", "Return reader", "Покладіть рідер", "Положите ридер", "Reader-i qoyun", "Devuelve reader", "Ibalik reader", "Kembalikan reader", "reader राख्नुहोस्")
        ],
        steps: [
          tx("Weź reader z ładowarki z wyznaczonego miejsca z numerem.", "Take the reader from the numbered charger in the assigned place.", "Візьміть рідер із зарядки з призначеного місця з номером.", "Возьмите ридер с зарядки с назначенного места с номером.", "Reader-i nömrəli təyin olunmuş şarj yerindən götürün.", "Toma el reader del cargador numerado en el lugar asignado.", "Kunin ang reader sa numbered charger sa nakatalagang lugar.", "Ambil reader dari charger bernomor di tempat yang ditentukan.", "तोकिएको नम्बर भएको चार्जरबाट reader लिनुहोस्।"),
          tx("Odbij swój tag personalny centralnym przyciskiem readera zgodnie z informacją startową.", "Scan your personal tag with the middle reader button according to the start information.", "Відбийте свій персональний тег центральною кнопкою рідера згідно стартової інформації.", "Отметьте свой персональный тег центральной кнопкой ридера согласно стартовой информации.", "Şəxsi tagınızı start məlumatına uyğun reader-in orta düyməsi ilə vurun.", "Marca tu tag personal con el botón central según la información de inicio.", "I-scan ang personal tag gamit ang gitnang button ayon sa start info.", "Scan tag pribadi dengan tombol tengah sesuai info awal.", "सुरु जानकारी अनुसार बीचको बटनले आफ्नो व्यक्तिगत tag स्क्यान गर्नुहोस्।"),
          tx("Na tablicy odbij tag 'początek pracy'.", "On the board, scan the 'start work' tag.", "На дошці відбийте тег 'початок роботи'.", "На доске отметьте тег 'начало работы'.", "Lövhədə 'işin başlanğıcı' tagını vurun.", "En el tablero, marca el tag 'inicio de trabajo'.", "Sa board, i-scan ang 'start work' tag.", "Di papan, scan tag 'mulai kerja'.", "बोर्डमा 'काम सुरु' tag स्क्यान गर्नुहोस्।"),
          tx("Na tablicy odbij przydzieloną czynność.", "On the board, scan the assigned activity.", "На дошці відбийте призначену дію.", "На доске отметьте назначенную деятельность.", "Lövhədə təyin olunan fəaliyyəti vurun.", "En el tablero, marca la actividad asignada.", "Sa board, i-scan ang nakatalagang gawain.", "Di papan, scan aktivitas yang ditugaskan.", "बोर्डमा तोकेको गतिविधि स्क्यान गर्नुहोस्।"),
          tx("Jeżeli pracujesz w rzędzie, wejdź do wyznaczonego rzędu. Tag rzędu odbijasz dopiero przy wyjściu z rzędu.", "If you work in a row, enter the assigned row. Scan the row tag only when leaving the row.", "Якщо працюєте в ряду, зайдіть у призначений ряд. Тег ряду відбивайте тільки при виході з ряду.", "Если работаете в ряду, зайдите в назначенный ряд. Тег ряда отмечайте только при выходе из ряда.", "Sırada işləyirsinizsə, təyin olunan sıraya girin. Sıra tagını yalnız sıradan çıxanda vurun.", "Si trabajas en una fila, entra en la fila asignada. Marca el tag de fila solo al salir.", "Kung nagtatrabaho sa row, pumasok sa assigned row. I-scan ang row tag paglabas lang.", "Jika bekerja di baris, masuk ke baris yang ditentukan. Scan tag baris hanya saat keluar.", "यदि पङ्क्तिमा काम गर्नुहुन्छ भने तोकिएको पङ्क्तिमा जानुहोस्। row tag निस्किँदा मात्र स्क्यान गर्नुहोस्।"),
          tx("Gdy zaczynasz przerwę, najpierw wyjdź z rzędu i odbij tag rzędu, potem odbij 'początek przerwy'.", "When starting a break, first leave the row and scan the row tag, then scan 'break start'.", "Коли починаєте перерву, спочатку вийдіть з ряду і відбийте тег ряду, потім 'початок перерви'.", "Когда начинаете перерыв, сначала выйдите из ряда и отметьте тег ряда, потом 'начало перерыва'.", "Fasiləyə başlayanda əvvəl sıradan çıxın və sıra tagını vurun, sonra 'fasilə başlanğıcı' vurun.", "Al empezar descanso, primero sal de la fila y marca el tag de fila, luego 'inicio de descanso'.", "Pag magsisimula ng break, lumabas muna sa row at i-scan ang row tag, pagkatapos 'break start'.", "Saat mulai istirahat, keluar dulu dari baris dan scan tag baris, lalu scan 'mulai istirahat'.", "ब्रेक सुरु गर्दा पहिले पङ्क्तिबाट निस्केर row tag स्क्यान गर्नुहोस्, त्यसपछि 'ब्रेक सुरु'।"),
          tx("Po powrocie z przerwy odbij 'koniec przerwy' i dalej pracuj według swojej procedury.", "After returning from break, scan 'break end' and continue according to your procedure.", "Після повернення з перерви відбийте 'кінець перерви' і працюйте далі за своєю процедурою.", "После возвращения с перерыва отметьте 'конец перерыва' и продолжайте по своей процедуре.", "Fasilədən qayıdanda 'fasilə sonu' vurun və prosedurunuza uyğun davam edin.", "Al volver del descanso, marca 'fin de descanso' y continúa según tu procedimiento.", "Pagbalik galing break, i-scan ang 'break end' at magpatuloy ayon sa iyong procedure.", "Setelah kembali dari istirahat, scan 'selesai istirahat' dan lanjut sesuai prosedur.", "ब्रेकबाट फर्केपछि 'ब्रेक समाप्त' स्क्यान गरेर आफ्नो प्रक्रियाअनुसार जारी राख्नुहोस्।"),
          tx("Na koniec pracy odbij 'koniec pracy'. Jeżeli byłeś w rzędzie, najpierw wychodząc odbij tag rzędu.", "At the end of work, scan 'end work'. If you were in a row, first scan the row tag while leaving.", "В кінці роботи відбийте 'кінець роботи'. Якщо були в ряду, спочатку при виході відбийте тег ряду.", "В конце работы отметьте 'конец работы'. Если были в ряду, сначала при выходе отметьте тег ряда.", "İşin sonunda 'işin sonu' vurun. Sırada idinizsə, əvvəl çıxanda sıra tagını vurun.", "Al terminar el trabajo, marca 'fin de trabajo'. Si estabas en una fila, primero marca el tag de fila al salir.", "Sa pagtatapos ng trabaho, i-scan ang 'end work'. Kung nasa row ka, i-scan muna ang row tag paglabas.", "Di akhir kerja, scan 'selesai kerja'. Jika berada di baris, scan dulu tag baris saat keluar.", "काम सकिँदा 'काम समाप्त' स्क्यान गर्नुहोस्। पङ्क्तिमा हुनुहुन्थ्यो भने पहिले निस्कँदा row tag स्क्यान गर्नुहोस्।"),
          tx("Odłóż reader na ładowarkę na wyznaczone miejsce z numerem.", "Put the reader back on the numbered charger in the assigned place.", "Покладіть рідер на зарядку на призначене місце з номером.", "Положите ридер на зарядку на назначенное место с номером.", "Reader-i nömrəli təyin olunmuş şarj yerinə qoyun.", "Deja el reader en el cargador numerado asignado.", "Ibalik ang reader sa numbered charger sa nakatalagang lugar.", "Taruh reader kembali di charger bernomor yang ditentukan.", "reader लाई तोकिएको नम्बर भएको चार्जरमा राख्नुहोस्।")
        ],
        tips: [
          tx("Nie zabieraj readera do domu i nie używaj cudzego taga.", "Do not take the reader home and do not use someone else's tag.", "Не забирайте рідер додому і не використовуйте чужий тег.", "Не забирайте ридер домой и не используйте чужой тег.", "Reader-i evə aparmayın və başqasının tagını istifadə etməyin.", "No lleves el reader a casa y no uses el tag de otra persona.", "Huwag iuwi ang reader at huwag gumamit ng tag ng iba.", "Jangan bawa reader pulang dan jangan pakai tag orang lain.", "reader घर नलैजानुहोस् र अरूको tag प्रयोग नगर्नुहोस्।"),
          tx("Magazyn nie używa readerów. Tablet ma jedną wspólną instrukcję dla magazynu i szklarni.", "The warehouse does not use readers. The tablet has one shared instruction for warehouse and greenhouse.", "На складі рідер не використовується. Планшет має одну спільну інструкцію для складу і теплиці.", "На складе ридер не используется. У планшета одна общая инструкция для склада и теплицы.", "Anbarda reader istifadə olunmur. Planşet üçün anbar və istixana üzrə bir ümumi təlimat var.", "En almacén no se usa reader. La tablet tiene una instrucción común para almacén e invernadero.", "Walang reader sa bodega. Ang tablet ay may isang shared instruction para sa bodega at greenhouse.", "Gudang tidak memakai reader. Tablet punya satu instruksi bersama untuk gudang dan rumah kaca.", "गोदाममा reader प्रयोग हुँदैन। ट्याबलेटको गोदाम र ग्रीनहाउसका लागि एउटै साझा निर्देशन छ।")
        ]
      },
      {
        id: "rows",
        title: tx("Praca w rzędach", "Work in rows", "Робота в рядах", "Работа в рядах", "Sıralarda iş", "Trabajo en filas", "Trabaho sa rows", "Kerja di baris", "पङ्क्तिमा काम"),
        lead: tx("Ta procedura jest dla osób pracujących w rzędach szklarni. Najważniejsze: tag rzędu odbijasz przy WYJŚCIU.", "This procedure is for people working in greenhouse rows. Most important: scan the row tag when LEAVING.", "Ця процедура для роботи в рядах теплиці. Найважливіше: тег ряду відбивається при ВИХОДІ.", "Эта процедура для работы в рядах теплицы. Главное: тег ряда отмечается при ВЫХОДЕ.", "Bu prosedur istixana sıralarında işləyənlər üçündür. Əsas: sıra tagı ÇIXANDA vurulur.", "Este procedimiento es para trabajar en filas del invernadero. Lo más importante: el tag se marca al SALIR.", "Para ito sa nagtatrabaho sa mga hanay ng bahay-taniman. Pinakamahalaga: i-scan ang tag ng hanay PAGLABAS.", "Prosedur ini untuk kerja di baris rumah kaca. Yang paling penting: scan tag baris SAAT KELUAR.", "यो ग्रीनहाउस पङ्क्तिमा काम गर्नेहरूका लागि हो। मुख्य कुरा: row tag निस्कँदा स्क्यान हुन्छ।"),
        sections: [
          {
            title: tx("Start pracy w rzędach", "Start work in rows", "Початок роботи в рядах", "Начало работы в рядах", "Sıralarda işin başlanğıcı", "Inicio en filas", "Simula sa rows", "Mulai kerja di baris", "पङ्क्तिमा काम सुरु"),
            steps: [
              tx("Weź reader i odbij swój tag personalny zgodnie z informacją startową.", "Take the reader and scan your personal tag according to the start information.", "Візьміть рідер і відбийте свій персональний тег згідно стартової інформації.", "Возьмите ридер и отметьте свой персональный тег согласно стартовой информации.", "Reader-i götürün və şəxsi tagınızı start məlumatına uyğun vurun.", "Toma el reader y marca tu tag personal según la información de inicio.", "Kunin ang reader at i-scan ang personal tag ayon sa start info.", "Ambil reader dan scan tag pribadi sesuai info awal.", "reader लिएर सुरु जानकारी अनुसार आफ्नो व्यक्तिगत tag स्क्यान गर्नुहोस्।"),
              tx("Odbij 'początek pracy'.", "Scan 'start work'.", "Відбийте 'початок роботи'.", "Отметьте 'начало работы'.", "'İşin başlanğıcı' vurun.", "Marca 'inicio de trabajo'.", "I-scan ang 'start work'.", "Scan 'mulai kerja'.", "'काम सुरु' स्क्यान गर्नुहोस्।"),
              tx("Odbij przydzieloną czynność.", "Scan the assigned activity.", "Відбийте призначену дію.", "Отметьте назначенную деятельность.", "Təyin olunan fəaliyyəti vurun.", "Marca la actividad asignada.", "I-scan ang nakatalagang gawain.", "Scan aktivitas yang ditugaskan.", "तोकेको गतिविधि स्क्यान गर्नुहोस्।"),
              tx("Wejdź do wyznaczonego rzędu. Przy wejściu do rzędu nie odbijasz tagu rzędu.", "Enter the assigned row. Do not scan the row tag when entering.", "Зайдіть у призначений ряд. При вході в ряд тег ряду не відбивається.", "Зайдите в назначенный ряд. При входе в ряд тег ряда не отмечается.", "Təyin olunan sıraya girin. Girişdə sıra tagını vurmayın.", "Entra en la fila asignada. Al entrar no marques el tag de fila.", "Pumasok sa assigned row. Huwag i-scan ang row tag sa pagpasok.", "Masuk ke baris yang ditentukan. Jangan scan tag baris saat masuk.", "तोकिएको पङ्क्तिमा जानुहोस्। प्रवेश गर्दा row tag स्क्यान नगर्नुहोस्।")
            ]
          },
          {
            title: tx("Wyjście z rzędu", "Leaving the row", "Вихід з ряду", "Выход из ряда", "Sıradan çıxış", "Salida de la fila", "Paglabas sa row", "Keluar dari baris", "पङ्क्तिबाट निस्कने"),
            steps: [
              { tone: "warn", text: tx("Tag rzędu odbijasz dopiero wtedy, gdy wychodzisz z rzędu.", "Scan the row tag only when you leave the row.", "Тег ряду відбивайте тільки тоді, коли виходите з ряду.", "Тег ряда отмечайте только тогда, когда выходите из ряда.", "Sıra tagını yalnız sıradan çıxanda vurun.", "Marca el tag de fila solo cuando sales de la fila.", "I-scan ang row tag kapag lalabas ka na sa row.", "Scan tag baris hanya saat keluar dari baris.", "row tag पङ्क्तिबाट निस्कँदा मात्र स्क्यान गर्नुहोस्।") },
              tx("Jeżeli rząd jest skończony - odbij tag rzędu jeden raz.", "If the row is finished - scan the row tag once.", "Якщо ряд закінчений - відбийте тег ряду один раз.", "Если ряд закончен - отметьте тег ряда один раз.", "Sıra bitibsə - sıra tagını bir dəfə vurun.", "Si la fila está terminada - marca el tag una vez.", "Kung tapos ang row - i-scan ang row tag isang beses.", "Jika baris selesai - scan tag baris sekali.", "पङ्क्ति सकिएको भए row tag एक पटक स्क्यान गर्नुहोस्।"),
              tx("Jeżeli rząd nie jest skończony - odbij tag rzędu dwa razy.", "If the row is not finished - scan the row tag twice.", "Якщо ряд не закінчений - відбийте тег ряду два рази.", "Если ряд не закончен - отметьте тег ряда два раза.", "Sıra bitməyibsə - sıra tagını iki dəfə vurun.", "Si la fila no está terminada - marca el tag dos veces.", "Kung hindi tapos ang row - i-scan ang row tag dalawang beses.", "Jika baris belum selesai - scan tag baris dua kali.", "पङ्क्ति नसकिएको भए row tag दुई पटक स्क्यान गर्नुहोस्।"),
              tx("Jeżeli zbierasz pomidor do wózka, użyj zakładki 'Wózki'.", "If you pick tomatoes to a cart, use the 'Carts' tab.", "Якщо збираєте помідор у візок, відкрийте вкладку 'Візки'.", "Если собираете помидор в тележку, откройте вкладку 'Тележки'.", "Pomidoru arabaya yığırsınızsa, 'Arabalar' bölməsindən istifadə edin.", "Si recoges tomate al carro, usa la pestaña 'Carros'.", "Kung nagpipitas ng kamatis sa cart, gamitin ang tab na 'Carts'.", "Jika memetik tomat ke troli, gunakan tab 'Troli'.", "ट्रलीमा टमाटर टिप्दा 'ट्रली' ट्याब प्रयोग गर्नुहोस्।")
            ]
          },
          {
            title: tx("Przerwa zwykła", "Regular break", "Звичайна перерва", "Обычный перерыв", "Adi fasilə", "Descanso normal", "Karaniwang break", "Istirahat biasa", "सामान्य ब्रेक"),
            steps: [
              tx("Idziesz na przerwę: wyjdź z rzędu i odbij tag rzędu.", "Going on break: leave the row and scan the row tag.", "Йдете на перерву: вийдіть з ряду і відбийте тег ряду.", "Идете на перерыв: выйдите из ряда и отметьте тег ряда.", "Fasiləyə gedirsiniz: sıradan çıxın və sıra tagını vurun.", "Vas al descanso: sal de la fila y marca el tag de fila.", "Pupunta sa break: lumabas sa row at i-scan ang row tag.", "Pergi istirahat: keluar dari baris dan scan tag baris.", "ब्रेकमा जाँदा: पङ्क्तिबाट निस्केर row tag स्क्यान गर्नुहोस्।"),
              tx("Na tablicy odbij 'początek przerwy'.", "On the board, scan 'break start'.", "На дошці відбийте 'початок перерви'.", "На доске отметьте 'начало перерыва'.", "Lövhədə 'fasilə başlanğıcı' vurun.", "En el tablero, marca 'inicio de descanso'.", "Sa board, i-scan ang 'break start'.", "Di papan, scan 'mulai istirahat'.", "बोर्डमा 'ब्रेक सुरु' स्क्यान गर्नुहोस्।"),
              tx("Po przerwie odbij 'koniec przerwy'.", "After the break, scan 'break end'.", "Після перерви відбийте 'кінець перерви'.", "После перерыва отметьте 'конец перерыва'.", "Fasilədən sonra 'fasilə sonu' vurun.", "Después del descanso, marca 'fin de descanso'.", "Pagkatapos ng break, i-scan ang 'break end'.", "Setelah istirahat, scan 'selesai istirahat'.", "ब्रेकपछि 'ब्रेक समाप्त' स्क्यान गर्नुहोस्।"),
              tx("Idź do rzędu nieskończonego albo nowego. Tag rzędu znowu odbijasz dopiero przy wyjściu.", "Go to the unfinished row or a new row. Scan the row tag again only when leaving.", "Йдіть у незакінчений або новий ряд. Тег ряду знову відбивається тільки при виході.", "Идите в незаконченный или новый ряд. Тег ряда снова отмечается только при выходе.", "Bitməmiş və ya yeni sıraya gedin. Sıra tagını yenə yalnız çıxanda vurun.", "Ve a la fila no terminada o a una nueva. Marca el tag de fila otra vez solo al salir.", "Pumunta sa hindi tapos o bagong row. I-scan ulit ang row tag paglabas lang.", "Pergi ke baris yang belum selesai atau baru. Scan tag baris lagi hanya saat keluar.", "नसकिएको वा नयाँ पङ्क्तिमा जानुहोस्। row tag फेरि निस्कँदा मात्र स्क्यान गर्नुहोस्।")
            ]
          },
          {
            title: tx("Przerwa socjalna", "Social break", "Соціальна перерва", "Социальный перерыв", "Sosial fasilə", "Pausa social", "Social break", "Istirahat sosial", "सामाजिक ब्रेक"),
            steps: [
              tx("Idziesz na socjal: wyjdź z rzędu i odbij tag rzędu.", "Going to social break: leave the row and scan the row tag.", "Йдете на соціальну перерву: вийдіть з ряду і відбийте тег ряду.", "Идете на социальный перерыв: выйдите из ряда и отметьте тег ряда.", "Sosial fasiləyə gedirsiniz: sıradan çıxın və sıra tagını vurun.", "Vas a pausa social: sal de la fila y marca el tag de fila.", "Pupunta sa social break: lumabas sa row at i-scan ang row tag.", "Pergi istirahat sosial: keluar dari baris dan scan tag baris.", "सामाजिक ब्रेकमा जाँदा: पङ्क्तिबाट निस्केर row tag स्क्यान गर्नुहोस्।"),
              tx("Na tablicy odbij 'początek socjal przerwa'.", "On the board, scan 'social break start'.", "На дошці відбийте 'початок соціальної перерви'.", "На доске отметьте 'начало социального перерыва'.", "Lövhədə 'sosial fasilə başlanğıcı' vurun.", "En el tablero, marca 'inicio pausa social'.", "Sa board, i-scan ang 'social break start'.", "Di papan, scan 'mulai istirahat sosial'.", "बोर्डमा 'सामाजिक ब्रेक सुरु' स्क्यान गर्नुहोस्।"),
              tx("Po socjalu odbij 'koniec socjal przerwa'.", "After social break, scan 'social break end'.", "Після соціальної перерви відбийте 'кінець соціальної перерви'.", "После социального перерыва отметьте 'конец социального перерыва'.", "Sosial fasilədən sonra 'sosial fasilə sonu' vurun.", "Después de la pausa social, marca 'fin pausa social'.", "Pagkatapos ng social break, i-scan ang 'social break end'.", "Setelah istirahat sosial, scan 'selesai istirahat sosial'.", "सामाजिक ब्रेकपछि 'सामाजिक ब्रेक समाप्त' स्क्यान गर्नुहोस्।"),
              tx("Wracasz do rzędu nieskończonego albo nowego. Tag rzędu odbijasz przy następnym wyjściu.", "Return to the unfinished row or a new row. Scan the row tag at the next exit.", "Повертаєтесь у незакінчений або новий ряд. Тег ряду відбивається при наступному виході.", "Возвращаетесь в незаконченный или новый ряд. Тег ряда отмечается при следующем выходе.", "Bitməmiş və ya yeni sıraya qayıdın. Sıra tagını növbəti çıxışda vurun.", "Vuelve a la fila no terminada o nueva. Marca el tag en la próxima salida.", "Bumalik sa hindi tapos o bagong row. I-scan ang row tag sa susunod na paglabas.", "Kembali ke baris belum selesai atau baru. Scan tag baris saat keluar berikutnya.", "नसकिएको वा नयाँ पङ्क्तिमा फर्कनुहोस्। अर्को पटक निस्कँदा row tag स्क्यान गर्नुहोस्।")
            ]
          },
          {
            title: tx("Zmiana czynności i koniec pracy", "Changing activity and end of work", "Зміна дії і кінець роботи", "Смена деятельности и конец работы", "Fəaliyyət dəyişikliyi və işin sonu", "Cambio de actividad y fin de trabajo", "Pagpalit ng gawain at end of work", "Ganti aktivitas dan selesai kerja", "गतिविधि परिवर्तन र काम समाप्त"),
            steps: [
              tx("Każda zmiana czynności: wyjdź z rzędu, odbij tag rzędu, potem na tablicy odbij nową czynność.", "Every activity change: leave the row, scan the row tag, then scan the new activity on the board.", "Кожна зміна дії: вийдіть з ряду, відбийте тег ряду, потім на дошці нову дію.", "Каждая смена деятельности: выйдите из ряда, отметьте тег ряда, потом на доске новую деятельность.", "Hər fəaliyyət dəyişikliyi: sıradan çıxın, sıra tagını vurun, sonra lövhədə yeni fəaliyyəti vurun.", "Cada cambio de actividad: sal de la fila, marca tag de fila y luego nueva actividad en el tablero.", "Bawat palit ng gawain: lumabas sa row, scan row tag, pagkatapos bagong gawain sa board.", "Setiap ganti aktivitas: keluar dari baris, scan tag baris, lalu scan aktivitas baru di papan.", "हरेक गतिविधि बदल्दा: पङ्क्तिबाट निस्केर row tag स्क्यान गर्नुहोस्, त्यसपछि बोर्डमा नयाँ गतिविधि।"),
              tx("Kończysz pracę w rzędach: wychodząc z rzędu odbij tag rzędu, potem odbij 'koniec pracy'.", "Ending work in rows: when leaving the row, scan the row tag, then scan 'end work'.", "Закінчуєте роботу в рядах: при виході з ряду відбийте тег ряду, потім 'кінець роботи'.", "Заканчиваете работу в рядах: при выходе из ряда отметьте тег ряда, потом 'конец работы'.", "Sıralarda işi bitirirsiniz: çıxanda sıra tagını vurun, sonra 'işin sonu' vurun.", "Terminas trabajo en filas: al salir marca el tag de fila, luego 'fin de trabajo'.", "Tatapusin ang trabaho sa rows: paglabas scan row tag, pagkatapos 'end work'.", "Selesai kerja di baris: saat keluar scan tag baris, lalu 'selesai kerja'.", "पङ्क्तिको काम सक्दा: निस्कँदा row tag स्क्यान गर्नुहोस्, त्यसपछि 'काम समाप्त'।"),
              tx("Jeżeli kończysz pracę w rzędach i przechodzisz do pracy poza rzędami, dalej użyj procedury 'Poza rzędami'.", "If you finish work in rows and move to work outside rows, continue with the 'Outside rows' procedure.", "Якщо закінчуєте роботу в рядах і переходите до роботи поза рядами, далі використовуйте процедуру 'Поза рядами'.", "Если заканчиваете работу в рядах и переходите к работе вне рядов, дальше используйте процедуру 'Вне рядов'.", "Sıralarda işi bitirib sıradan kənar işə keçirsinizsə, 'Sıradan kənar' proseduru ilə davam edin.", "Si terminas en filas y pasas a trabajo fuera de filas, sigue con 'Fuera de filas'.", "Kung tapos ka sa rows at lilipat sa work outside rows, sundin ang 'Outside rows'.", "Jika selesai di baris dan pindah ke kerja di luar baris, lanjut dengan prosedur 'Di luar baris'.", "यदि पङ्क्तिको काम सकेर पङ्क्ति बाहिर काममा जानुहुन्छ भने 'पङ्क्ति बाहिर' प्रक्रिया प्रयोग गर्नुहोस्।")
            ]
          }
        ]
      },
      {
        id: "outside",
        title: tx("Poza rzędami", "Outside rows", "Поза рядами", "Вне рядов", "Sıradan kənar", "Fuera de filas", "Labas ng rows", "Di luar baris", "पङ्क्ति बाहिर"),
        lead: tx("Procedura dla osób, które pracują na szklarni, ale nie pracują w rzędach.", "Procedure for people who work in the greenhouse but do not work in rows.", "Процедура для людей, які працюють у теплиці, але не працюють у рядах.", "Процедура для людей, которые работают в теплице, но не работают в рядах.", "İstixanada işləyən, amma sıralarda işləməyən şəxslər üçün prosedur.", "Procedimiento para personas que trabajan en invernadero pero no en filas.", "Proseso para sa nagtatrabaho sa bahay-taniman pero hindi sa mga hanay.", "Prosedur untuk orang yang bekerja di rumah kaca tetapi tidak di baris.", "ग्रीनहाउसमा काम गर्ने तर पङ्क्तिमा काम नगर्ने व्यक्तिका लागि प्रक्रिया।"),
        sections: [
          {
            title: tx("Start pracy poza rzędami", "Start outside rows", "Початок роботи поза рядами", "Начало работы вне рядов", "Sıradan kənar işin başlanğıcı", "Inicio fuera de filas", "Simula outside rows", "Mulai di luar baris", "पङ्क्ति बाहिर काम सुरु"),
            steps: [
              tx("Odbij tag personalny zgodnie z informacją startową.", "Scan your personal tag according to the start information.", "Відбийте персональний тег згідно стартової інформації.", "Отметьте персональный тег согласно стартовой информации.", "Şəxsi tagı start məlumatına uyğun vurun.", "Marca tu tag personal según la información de inicio.", "I-scan ang personal tag ayon sa start info.", "Scan tag pribadi sesuai info awal.", "सुरु जानकारी अनुसार व्यक्तिगत tag स्क्यान गर्नुहोस्।"),
              tx("Odbij 'początek pracy'.", "Scan 'start work'.", "Відбийте 'початок роботи'.", "Отметьте 'начало работы'.", "'İşin başlanğıcı' vurun.", "Marca 'inicio de trabajo'.", "I-scan ang 'start work'.", "Scan 'mulai kerja'.", "'काम सुरु' स्क्यान गर्नुहोस्।"),
              tx("Odbij przydzieloną czynność.", "Scan the assigned activity.", "Відбийте призначену дію.", "Отметьте назначенную деятельность.", "Təyin olunan fəaliyyəti vurun.", "Marca la actividad asignada.", "I-scan ang nakatalagang gawain.", "Scan aktivitas yang ditugaskan.", "तोकेको गतिविधि स्क्यान गर्नुहोस्।")
            ]
          },
          {
            title: tx("Przerwa socjalna", "Social break", "Соціальна перерва", "Социальный перерыв", "Sosial fasilə", "Pausa social", "Social break", "Istirahat sosial", "सामाजिक ब्रेक"),
            steps: [
              tx("Przed socjalem odbij aktualną czynność, jeżeli wymaga tego tablica.", "Before social break, scan the current activity if the board requires it.", "Перед соціальною перервою відбийте актуальну дію, якщо цього вимагає дошка.", "Перед социальным перерывом отметьте текущую деятельность, если это требуется на доске.", "Sosial fasilədən əvvəl lövhə tələb edirsə cari fəaliyyəti vurun.", "Antes de la pausa social, marca la actividad actual si el tablero lo requiere.", "Bago social break, i-scan ang kasalukuyang gawain kung kailangan sa board.", "Sebelum istirahat sosial, scan aktivitas saat ini jika papan memintanya.", "सामाजिक ब्रेकअघि बोर्डले मागेमा हालको गतिविधि स्क्यान गर्नुहोस्।"),
              tx("Odbij 'początek socjal przerwa'.", "Scan 'social break start'.", "Відбийте 'початок соціальної перерви'.", "Отметьте 'начало социального перерыва'.", "'Sosial fasilə başlanğıcı' vurun.", "Marca 'inicio pausa social'.", "I-scan ang 'social break start'.", "Scan 'mulai istirahat sosial'.", "'सामाजिक ब्रेक सुरु' स्क्यान गर्नुहोस्।"),
              tx("Po powrocie odbij 'koniec socjal przerwa', a potem ponownie czynność.", "After returning, scan 'social break end', then scan the activity again.", "Після повернення відбийте 'кінець соціальної перерви', потім знову дію.", "После возвращения отметьте 'конец социального перерыва', потом снова деятельность.", "Qayıdanda 'sosial fasilə sonu' vurun, sonra fəaliyyəti yenidən vurun.", "Al volver, marca 'fin pausa social' y luego la actividad otra vez.", "Pagbalik, i-scan ang 'social break end', pagkatapos gawain ulit.", "Setelah kembali, scan 'selesai istirahat sosial', lalu scan aktivitas lagi.", "फर्केपछि 'सामाजिक ब्रेक समाप्त' स्क्यान गर्नुहोस्, त्यसपछि फेरि गतिविधि।")
            ]
          },
          {
            title: tx("Przerwa zwykła", "Regular break", "Звичайна перерва", "Обычный перерыв", "Adi fasilə", "Descanso normal", "Karaniwang break", "Istirahat biasa", "सामान्य ब्रेक"),
            steps: [
              tx("Odbij 'początek przerwy'.", "Scan 'break start'.", "Відбийте 'початок перерви'.", "Отметьте 'начало перерыва'.", "'Fasilə başlanğıcı' vurun.", "Marca 'inicio de descanso'.", "I-scan ang 'break start'.", "Scan 'mulai istirahat'.", "'ब्रेक सुरु' स्क्यान गर्नुहोस्।"),
              tx("Po powrocie odbij 'koniec przerwy', a potem ponownie czynność.", "After returning, scan 'break end', then scan the activity again.", "Після повернення відбийте 'кінець перерви', потім знову дію.", "После возвращения отметьте 'конец перерыва', потом снова деятельность.", "Qayıdanda 'fasilə sonu' vurun, sonra fəaliyyəti yenidən vurun.", "Al volver, marca 'fin de descanso' y luego la actividad otra vez.", "Pagbalik, i-scan ang 'break end', pagkatapos gawain ulit.", "Setelah kembali, scan 'selesai istirahat', lalu scan aktivitas lagi.", "फर्केपछि 'ब्रेक समाप्त' स्क्यान गर्नुहोस्, त्यसपछि फेरि गतिविधि।")
            ]
          },
          {
            title: tx("Zmiana czynności i koniec pracy", "Changing activity and end of work", "Зміна дії і кінець роботи", "Смена деятельности и конец работы", "Fəaliyyət dəyişikliyi və işin sonu", "Cambio de actividad y fin de trabajo", "Pagpalit ng gawain at end of work", "Ganti aktivitas dan selesai kerja", "गतिविधि परिवर्तन र काम समाप्त"),
            steps: [
              tx("Gdy zmieniasz pracę poza rzędami, odbij nową czynność na tablicy.", "When you change work outside rows, scan the new activity on the board.", "Коли змінюєте роботу поза рядами, відбийте нову дію на дошці.", "Когда меняете работу вне рядов, отметьте новую деятельность на доске.", "Sıradan kənar işi dəyişəndə lövhədə yeni fəaliyyəti vurun.", "Cuando cambias trabajo fuera de filas, marca la nueva actividad en el tablero.", "Kapag nagpapalit ng work outside rows, i-scan ang bagong gawain sa board.", "Saat ganti kerja di luar baris, scan aktivitas baru di papan.", "पङ्क्ति बाहिर काम बदल्दा बोर्डमा नयाँ गतिविधि स्क्यान गर्नुहोस्।"),
              tx("Na koniec pracy odbij 'koniec pracy'.", "At the end of work, scan 'end work'.", "В кінці роботи відбийте 'кінець роботи'.", "В конце работы отметьте 'конец работы'.", "İşin sonunda 'işin sonu' vurun.", "Al terminar, marca 'fin de trabajo'.", "Sa pagtatapos, i-scan ang 'end work'.", "Di akhir kerja, scan 'selesai kerja'.", "काम सकिँदा 'काम समाप्त' स्क्यान गर्नुहोस्।"),
              tx("Po zakończeniu odłóż reader na ładowarkę na swoje miejsce z numerem.", "After finishing, put the reader back on its numbered charger.", "Після завершення покладіть рідер на зарядку на своє місце з номером.", "После окончания положите ридер на зарядку на свое место с номером.", "Bitirdikdən sonra reader-i öz nömrəli şarj yerinə qoyun.", "Después, deja el reader en su cargador numerado.", "Pagkatapos, ibalik ang reader sa numbered charger nito.", "Setelah selesai, taruh reader di charger bernomornya.", "सकेपछि reader लाई आफ्नो नम्बर भएको चार्जरमा राख्नुहोस्।")
            ]
          }
        ]
      },
      {
        id: "carts",
        title: tx("Wózki", "Carts", "Візки", "Тележки", "Arabalar", "Carros", "Carts", "Troli", "ट्रली"),
        lead: tx("Przy zbiorach używaj kolejności z obrazka: zawsze wychodząc z rzędu.", "During picking, use the order from the picture: always while leaving the row.", "Під час збору використовуйте порядок з картинки: завжди при виході з ряду.", "При сборе используйте порядок с картинки: всегда при выходе из ряда.", "Yığım zamanı şəkildəki ardıcıllıqdan istifadə edin: həmişə sıradan çıxanda.", "En la cosecha usa el orden de la imagen: siempre al salir de la fila.", "Sa pagpitas, sundin ang ayos sa larawan: palaging paglabas sa hanay.", "Saat panen, gunakan urutan pada gambar: selalu saat keluar dari baris.", "टिपाइमा चित्रको क्रम प्रयोग गर्नुहोस्: सधैं पङ्क्तिबाट निस्कँदा।"),
        images: [
          { src: "assets/inline/cart_pl.jpg", caption: tx("Wózki - wersja polska.", "Carts - Polish version.", "Візки - польська версія.", "Тележки - польская версия.", "Arabalar - polyak versiyası.", "Carros - versión polaca.", "Carts - Polish version.", "Troli - versi Polandia.", "ट्रली - पोलिश संस्करण।") },
          { src: "assets/inline/cart_ua.jpg", caption: tx("Wózki - wersja ukraińska.", "Carts - Ukrainian version.", "Візки - українська версія.", "Тележки - украинская версия.", "Arabalar - ukrayna versiyası.", "Carros - versión ucraniana.", "Carts - Ukrainian version.", "Troli - versi Ukraina.", "ट्रली - युक्रेनी संस्करण।") }
        ],
        imageSteps: [
          tx("Tag wózka", "Cart tag", "Тег візка", "Тег тележки", "Araba tagı", "Tag del carro", "Cart tag", "Tag troli", "ट्रली tag"),
          tx("Tag rzędu", "Row tag", "Тег ряду", "Тег ряда", "Sıra tagı", "Tag de fila", "Row tag", "Tag baris", "row tag"),
          tx("Skończony: 1 raz", "Finished: once", "Закінчений: 1 раз", "Закончен: 1 раз", "Bitib: 1 dəfə", "Terminada: 1 vez", "Tapos: 1 beses", "Selesai: 1 kali", "सकिएको: १ पटक"),
          tx("Nieskończony: 2 razy", "Unfinished: twice", "Не закінчений: 2 рази", "Не закончен: 2 раза", "Bitməyib: 2 dəfə", "No terminada: 2 veces", "Hindi tapos: 2 beses", "Belum selesai: 2 kali", "नसकिएको: २ पटक"),
          tx("Wyślij po skanach", "Send after scans", "Надішліть після сканів", "Отправьте после сканов", "Skanlardan sonra göndərin", "Envía tras escanear", "Ipadala pagkatapos", "Kirim setelah scan", "स्क्यानपछि पठाउनुहोस्")
        ],
        steps: [
          { tone: "warn", text: tx("Przy zbiorach skanujesz zawsze wychodząc z rzędu.", "During picking, always scan while leaving the row.", "Під час збору скануйте завжди при виході з ряду.", "При сборе всегда сканируйте при выходе из ряда.", "Yığım zamanı həmişə sıradan çıxanda skan edin.", "Durante la cosecha, escanea siempre al salir de la fila.", "Sa pagpitas, palaging mag-scan paglabas sa hanay.", "Saat panen, selalu scan saat keluar dari baris.", "टिपाइमा सधैं पङ्क्तिबाट निस्कँदा स्क्यान गर्नुहोस्।") },
          tx("Najpierw skanuj tag wózka - zawsze jeden raz.", "First scan the cart tag - always once.", "Спочатку скануйте тег візка - завжди один раз.", "Сначала сканируйте тег тележки - всегда один раз.", "Əvvəl araba tagını skan edin - həmişə bir dəfə.", "Primero marca el tag del carro - siempre una vez.", "Una, i-scan ang cart tag - laging isang beses.", "Pertama scan tag troli - selalu sekali.", "पहिले cart tag स्क्यान गर्नुहोस् - सधैं एक पटक।"),
          tx("Następnie skanuj tag rzędu: skończony jeden raz, nieskończony dwa razy.", "Then scan the row tag: finished once, unfinished twice.", "Потім скануйте тег ряду: закінчений один раз, незакінчений два рази.", "Потом сканируйте тег ряда: законченный один раз, незаконченный два раза.", "Sonra sıra tagını skan edin: bitmiş bir dəfə, bitməmiş iki dəfə.", "Después marca el tag de fila: terminada una vez, no terminada dos veces.", "Pagkatapos scan row tag: tapos isang beses, hindi tapos dalawang beses.", "Lalu scan tag baris: selesai sekali, belum selesai dua kali.", "त्यसपछि row tag स्क्यान गर्नुहोस्: सकिएको एक पटक, नसकिएको दुई पटक।"),
          tx("Dopiero po tych skanach wyślij informację/przycisk na readerze.", "Only after these scans send the information/button on the reader.", "Тільки після цих сканів надсилайте інформацію/кнопку на рідері.", "Только после этих сканов отправляйте информацию/кнопку на ридере.", "Yalnız bu skanlardan sonra reader-də məlumatı/düyməni göndərin.", "Solo después de estos escaneos envía la información/botón en el reader.", "Pagkatapos lang ng scans na ito, ipadala ang info/button sa reader.", "Baru setelah scan ini kirim informasi/tombol di reader.", "यी स्क्यानपछि मात्र reader मा जानकारी/बटन पठाउनुहोस्।"),
          tx("Jeżeli nie zbierasz do wózka, wróć do zwykłej procedury rzędu.", "If you are not picking to a cart, return to the normal row procedure.", "Якщо не збираєте у візок, поверніться до звичайної процедури ряду.", "Если не собираете в тележку, вернитесь к обычной процедуре ряда.", "Arabaya yığmırsınızsa, adi sıra proseduruna qayıdın.", "Si no recoges al carro, vuelve al procedimiento normal de fila.", "Kung hindi sa cart ang pagpitas, bumalik sa normal na proseso ng hanay.", "Jika tidak memetik ke troli, kembali ke prosedur baris biasa.", "यदि ट्रलीमा टिप्नुहुन्न भने सामान्य row प्रक्रिया प्रयोग गर्नुहोस्।")
        ]
      },
      {
        id: "restart",
        title: tx("Restart", "Restart", "Рестарт", "Рестарт", "Restart", "Reinicio", "Restart", "Restart", "Restart"),
        lead: tx("Restart wykonuj tylko wtedy, gdy reader się zawiesi.", "Restart only when the reader freezes.", "Рестарт робіть тільки тоді, коли рідер завис.", "Рестарт делайте только когда ридер завис.", "Restartı yalnız reader donanda edin.", "Haz reinicio solo cuando el reader se bloquea.", "Mag-restart lang kapag nag-freeze ang reader.", "Restart hanya saat reader macet.", "reader अड्किएपछि मात्र restart गर्नुहोस्।"),
        images: [
          { src: "assets/inline/restart_1.jpg", caption: tx("Przyciski readera: lewy, środkowy, prawy.", "Reader buttons: left, middle, right.", "Кнопки рідера: ліва, середня, права.", "Кнопки ридера: левая, средняя, правая.", "Reader düymələri: sol, orta, sağ.", "Botones del reader: izquierdo, central, derecho.", "Reader buttons: left, middle, right.", "Tombol reader: kiri, tengah, kanan.", "reader बटन: बायाँ, बीच, दायाँ।") },
          { src: "assets/inline/restart_2.jpg", caption: tx("Menu serwisowe: YES, SELECT, DOWN.", "Service menu: YES, SELECT, DOWN.", "Сервісне меню: YES, SELECT, DOWN.", "Сервисное меню: YES, SELECT, DOWN.", "Servis menyusu: YES, SELECT, DOWN.", "Menú de servicio: YES, SELECT, DOWN.", "Service menu: YES, SELECT, DOWN.", "Menu servis: YES, SELECT, DOWN.", "service menu: YES, SELECT, DOWN।") }
        ],
        imageSteps: [
          tx("Trzymaj lewy", "Hold left", "Тримайте ліву", "Держите левую", "Solu saxlayın", "Mantén izquierdo", "Hawakan left", "Tahan kiri", "बायाँ थिचिराख्नुहोस्"),
          tx("Prawy, środkowy, prawy", "Right, middle, right", "Права, середня, права", "Правая, средняя, правая", "Sağ, orta, sağ", "Derecho, central, derecho", "Right, middle, right", "Kanan, tengah, kanan", "दायाँ, बीच, दायाँ"),
          tx("Puść lewy", "Release left", "Відпустіть ліву", "Отпустите левую", "Solu buraxın", "Suelta izquierdo", "Bitawan left", "Lepas kiri", "बायाँ छोड्नुहोस्"),
          tx("DOWN x5", "DOWN x5", "DOWN x5", "DOWN x5", "DOWN x5", "DOWN x5", "DOWN x5", "DOWN x5", "DOWN x5"),
          tx("SELECT", "SELECT", "SELECT", "SELECT", "SELECT", "SELECT", "SELECT", "SELECT", "SELECT"),
          tx("YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES"),
          tx("Kontynuuj normalnie", "Continue normally", "Продовжуйте нормально", "Продолжайте нормально", "Normal davam edin", "Continúa normal", "Ituloy normal", "Lanjut normal", "सामान्य जारी राख्नुहोस्")
        ],
        steps: [
          tx("Trzymaj LEWY przycisk.", "Hold the LEFT button.", "Тримайте ЛІВУ кнопку.", "Держите ЛЕВУЮ кнопку.", "SOL düyməni saxlayın.", "Mantén presionado el botón IZQUIERDO.", "Hawakan ang LEFT button.", "Tahan tombol KIRI.", "बायाँ बटन थिचिराख्नुहोस्।"),
          tx("Trzymając lewy, wciśnij po kolei: PRAWY, ŚRODKOWY, PRAWY.", "While holding left, press in order: RIGHT, MIDDLE, RIGHT.", "Тримаючи ліву, натисніть по черзі: ПРАВА, СЕРЕДНЯ, ПРАВА.", "Держа левую, нажмите по очереди: ПРАВАЯ, СРЕДНЯЯ, ПРАВАЯ.", "Solu saxlayaraq ardıcıllıqla basın: SAĞ, ORTA, SAĞ.", "Manteniendo izquierdo, pulsa: DERECHO, CENTRAL, DERECHO.", "Habang hawak ang left, pindutin: RIGHT, MIDDLE, RIGHT.", "Sambil menahan kiri, tekan: KANAN, TENGAH, KANAN.", "बायाँ थिचिराखेर क्रमशः दायाँ, बीच, दायाँ थिच्नुहोस्।"),
          tx("Gdy pojawi się nowe menu, puść LEWY przycisk.", "When the new menu appears, release the LEFT button.", "Коли з'явиться нове меню, відпустіть ЛІВУ кнопку.", "Когда появится новое меню, отпустите ЛЕВУЮ кнопку.", "Yeni menyu çıxanda SOL düyməni buraxın.", "Cuando aparezca el nuevo menú, suelta el botón IZQUIERDO.", "Kapag lumabas ang bagong menu, bitawan ang LEFT button.", "Saat menu baru muncul, lepas tombol KIRI.", "नयाँ menu आएपछि बायाँ बटन छोड्नुहोस्।"),
          tx("W nowym menu naciśnij PRAWY przycisk pięć razy: DOWN.", "In the new menu, press the RIGHT button five times: DOWN.", "У новому меню натисніть ПРАВУ кнопку п'ять разів: DOWN.", "В новом меню нажмите ПРАВУЮ кнопку пять раз: DOWN.", "Yeni menyuda SAĞ düyməni beş dəfə basın: DOWN.", "En el nuevo menú, pulsa el botón DERECHO cinco veces: DOWN.", "Sa bagong menu, pindutin ang RIGHT button limang beses: DOWN.", "Di menu baru, tekan tombol KANAN lima kali: DOWN.", "नयाँ menu मा दायाँ बटन पाँच पटक थिच्नुहोस्: DOWN।"),
          tx("Naciśnij ŚRODKOWY przycisk: SELECT.", "Press the MIDDLE button: SELECT.", "Натисніть СЕРЕДНЮ кнопку: SELECT.", "Нажмите СРЕДНЮЮ кнопку: SELECT.", "ORTA düyməni basın: SELECT.", "Pulsa el botón CENTRAL: SELECT.", "Pindutin ang MIDDLE button: SELECT.", "Tekan tombol TENGAH: SELECT.", "बीचको बटन थिच्नुहोस्: SELECT।"),
          tx("Naciśnij LEWY przycisk: YES.", "Press the LEFT button: YES.", "Натисніть ЛІВУ кнопку: YES.", "Нажмите ЛЕВУЮ кнопку: YES.", "SOL düyməni basın: YES.", "Pulsa el botón IZQUIERDO: YES.", "Pindutin ang LEFT button: YES.", "Tekan tombol KIRI: YES.", "बायाँ बटन थिच्नुहोस्: YES।"),
          tx("Po restarcie kontynuuj normalnie. Nie zmieniaj logiki odbijania.", "After restart, continue normally. Do not change the scanning logic.", "Після рестарту продовжуйте нормально. Не змінюйте логіку відбиття.", "После рестарта продолжайте нормально. Не меняйте логику отметок.", "Restartdan sonra normal davam edin. Vurma məntiqini dəyişməyin.", "Después del reinicio continúa normal. No cambies la lógica.", "Pagkatapos ng restart, ituloy nang normal. Huwag baguhin ang scan logic.", "Setelah restart lanjutkan normal. Jangan ubah logika scan.", "Restart पछि सामान्य रूपमा जारी राख्नुहोस्। स्क्यान नियम नबदल्नुहोस्।")
        ]
      }
    ],

    contacts: {
      coordinators: [
        { name: "Yuliia", phone: "+48506845667", role: "Koordynator" },
        { name: "Yana", phone: "+48797066987", role: "Koordynator" },
        { name: "Fariz", phone: "+48504165739", role: "Koordynator" },
        { name: "Pomoc brygadzisty starego magazynu", phone: "+48504724605", role: "Stary magazyn" },
        { name: "Oleksandr", phone: "+48502251384", role: "Koordynator" }
      ],
      greenhouse: {
        E1: [
          { name: "A. Wrzeszcz", phone: "+48785990340" },
          { name: "B. Jaworska", phone: "+48785881173" },
          { name: "A. Popesku", phone: "+48511468984" }
        ],
        E2: [
          { name: "Cz. Zawiślak", phone: "+48511469158" },
          { name: "J. Kelman", phone: "+48785881151" },
          { name: "K. Kozachenko", phone: "+48517409176" }
        ],
        E3: [
          { name: "I. Kuc", phone: "+48785881152" },
          { name: "K. Woźniak", phone: "+48504169536" },
          { name: "I. Pavlenko", phone: "+48508995415" }
        ],
        E4: [
          { name: "B. Zdankiewicz", phone: "+48506914307" },
          { name: "K. Skrzypiec", phone: "+48504159296" },
          { name: "A. Tural", phone: "+48785881168" },
          { name: "B. Azamat", phone: "+48690212695" }
        ],
        E5: [
          { name: "V. Pavliukova", phone: "+48797683290" },
          { name: "A. Nazarets", phone: "+48453673305" }
        ],
        E6: [
          { name: "O. Budivska", phone: "+48508994844" },
          { name: "A. Mazur", phone: "+48453673316" }
        ]
      },
      warehouse: [
        { name: "Paweł", phone: "+48785881165", role: "Magazyn" },
        { name: "Mateusz", phone: "+48606770754", role: "Magazyn" },
        { name: "Beata", phone: "+48500533643", role: "Magazyn" }
      ]
    },

    medical: [
      {
        tone: "blue",
        title: tx("Przychodnia - GOZ Siechnice", "Clinic - GOZ Siechnice", "Поліклініка - GOZ Siechnice", "Поликлиника - GOZ Siechnice", "Poliklinika - GOZ Siechnice", "Clínica - GOZ Siechnice", "Klinika - GOZ Siechnice", "Klinik - GOZ Siechnice", "क्लिनिक - GOZ Siechnice"),
        body: [
          tx("Zapisy są od godziny 8:00.", "Registration starts at 8:00.", "Запис з 8:00.", "Запись с 8:00.", "Qeydiyyat saat 8:00-dan başlayır.", "El registro empieza a las 8:00.", "Registration ay mula 8:00.", "Pendaftaran mulai pukul 8:00.", "दर्ता बिहान ८:०० देखि हुन्छ।"),
          tx("Przyjdź o 8:00, nie później, bo może nie być miejsc.", "Come at 8:00, not later, because places may run out.", "Прийдіть о 8:00, не пізніше, бо місць може не бути.", "Приходите в 8:00, не позже, потому что мест может не быть.", "Saat 8:00-da gəlin, gecikməyin, yer qalmaya bilər.", "Ven a las 8:00, no más tarde, porque puede no haber plazas.", "Dumating ng 8:00, huwag mas late, baka maubos ang lugar.", "Datang pukul 8:00, jangan terlambat, kuota bisa habis.", "८:०० बजे आउनुहोस्, ढिलो भए ठाउँ नहुन सक्छ।"),
          tx("Weź PESEL, paszport i telefon.", "Take PESEL, passport and phone.", "Візьміть PESEL, паспорт і телефон.", "Возьмите PESEL, паспорт и телефон.", "PESEL, pasport və telefonu götürün.", "Lleva PESEL, pasaporte y teléfono.", "Dalhin ang PESEL, pasaporte at telepono.", "Bawa PESEL, paspor, dan telepon.", "PESEL, पासपोर्ट र फोन लैजानुहोस्।")
        ],
        map: gozMap
      },
      {
        tone: "red",
        title: tx("SOR - nagłe przypadki", "Emergency room", "SOR - термінові випадки", "SOR - срочные случаи", "Təcili yardım şöbəsi", "Urgencias", "Emergency room", "IGD", "आपतकालीन"),
        body: [
          tx("Jedź na SOR przy silnym bólu, urazie, gorączce, problemach z oddychaniem, omdleniu albo poważnym pogorszeniu zdrowia.", "Go to emergency for severe pain, injury, fever, breathing problems, fainting or serious worsening.", "Їдьте на SOR при сильному болю, травмі, температурі, проблемах з диханням, непритомності або різкому погіршенні.", "Езжайте на SOR при сильной боли, травме, температуре, проблемах с дыханием, обмороке или сильном ухудшении.", "Güclü ağrı, zədə, qızdırma, nəfəs problemi, huş itirmə və ya ciddi pisləşmə varsa təciliyə gedin.", "Ve a urgencias por dolor fuerte, lesión, fiebre, problemas respiratorios, desmayo o empeoramiento serio.", "Pumunta sa emergency kung matinding sakit, injury, lagnat, hirap huminga, nahimatay o malubhang lumala.", "Ke IGD jika nyeri berat, cedera, demam, sesak napas, pingsan, atau kondisi memburuk.", "धेरै दुखाइ, चोट, ज्वरो, सास समस्या, बेहोस वा स्वास्थ्य धेरै बिग्रिए आपतकालीन जानुहोस्।")
        ],
        maps: [
          { label: "SOR Oława", url: "https://maps.app.goo.gl/9oCDLCRmdZHyJ6wi8" },
          { label: "SOR Wrocław", url: "https://maps.app.goo.gl/PTFDRQC7fnsVRqhY8" }
        ]
      },
      {
        tone: "yellow",
        title: tx("Pogotowie dentystyczne", "Dental emergency", "Стоматологічна допомога", "Стоматологическая помощь", "Təcili diş yardımı", "Urgencia dental", "Dental emergency", "Darurat gigi", "दन्त आपतकालीन"),
        body: [
          tx("Najpierw zadzwoń. NFZ działa zwykle 19:00-7:00 w dni robocze, a w weekendy i święta całodobowo.", "Call first. NFZ usually works 19:00-7:00 on workdays and 24h on weekends/holidays.", "Спочатку подзвоніть. NFZ зазвичай працює 19:00-7:00 у робочі дні, у вихідні та свята цілодобово.", "Сначала позвоните. NFZ обычно работает 19:00-7:00 в будни, в выходные и праздники круглосуточно.", "Əvvəl zəng edin. NFZ iş günləri adətən 19:00-7:00, həftəsonu və bayramlarda 24 saat işləyir.", "Primero llama. NFZ suele funcionar 19:00-7:00 en días laborales y 24h fines de semana/festivos.", "Tumawag muna. NFZ karaniwang 19:00-7:00 weekdays at 24h weekends/holidays.", "Telepon dulu. NFZ biasanya 19:00-7:00 hari kerja dan 24 jam akhir pekan/libur.", "पहिले फोन गर्नुहोस्। NFZ कामका दिन 19:00-7:00 र सप्ताहन्त/बिदा २४ घण्टा हुन्छ।"),
          tx("Przy dużej opuchliźnie twarzy, gorączce, problemie z oddychaniem albo połykaniem jedź na SOR albo dzwoń 112.", "With large face swelling, fever, breathing or swallowing problems, go to emergency or call 112.", "При великому набряку обличчя, температурі, проблемі з диханням або ковтанням їдьте на SOR або дзвоніть 112.", "При сильном отеке лица, температуре, проблеме с дыханием или глотанием езжайте на SOR или звоните 112.", "Üzdə böyük şiş, qızdırma, nəfəs və ya udma problemi varsa təciliyə gedin və ya 112-yə zəng edin.", "Con mucha hinchazón de cara, fiebre, problemas para respirar o tragar, ve a urgencias o llama 112.", "Kung malaking pamamaga ng mukha, lagnat, hirap huminga o lumunok, pumunta sa emergency o tumawag 112.", "Jika wajah bengkak besar, demam, sulit bernapas/menelan, ke IGD atau hubungi 112.", "अनुहार धेरै सुन्निए, ज्वरो, सास/निल्न समस्या भए आपतकालीन जानुहोस् वा 112 फोन गर्नुहोस्।")
        ],
        phones: [
          { label: "ArtMedis, ul. Sienkiewicza 47, Wrocław", phone: "+48665339982" },
          { label: "Centrum Medyczne Estomedica, ul. Słowiańska 27B, Wrocław", phone: "+48713721310" },
          { label: "Q-Clinic, ul. Pretficza 21/1, Wrocław", phone: "+48717915555" },
          { label: "Dental-Art, ul. Komandorska 53A/3b, Wrocław", phone: "+48713672262" }
        ]
      }
    ],

    groups: [
      { title: "Viber - Citronex", url: "https://invite.viber.com/?g2=AQBkAFR0EI%2F5S1YUZP23%2Fc6MRVsnc6wfhgi%2FQig%2B1XKt3Z7mb2YPUdlazS0qoc4L", tone: "blue" },
      { title: "Telegram - robota Citronex", url: "https://t.me/robota_citronex", tone: "blue" },
      { title: "Telegram AZ - Polonia Work Citronex", url: "https://t.me/poloniawork_citronex", tone: "blue" }
    ],

    city: [
      {
        tone: "blue",
        icon: "document",
        tag: tx("Karta pobytu", "Residence card", "Карта побиту", "Карта побыту", "Yaşayış kartı", "Tarjeta de residencia", "Card ng paninirahan", "Kartu tinggal", "Card ng paninirahan"),
        title: tx("DUW - karta pobytu", "DUW - residence card", "DUW - карта побиту", "DUW - карта побыту", "DUW - yaşayış kartı", "DUW - tarjeta de residencia", "DUW - card ng paninirahan", "DUW - kartu tinggal", "DUW - card ng paninirahan"),
        note: tx("Tu składa się dokumenty na kartę pobytu i odbiera gotową kartę.", "Here you submit residence card documents and collect the ready card.", "Тут подають документи на карту побиту і забирають готову карту.", "Здесь подают документы на карту побыту и забирают готовую карту.", "Burada yaşayış kartı sənədləri verilir və hazır kart götürülür.", "Aquí se entregan documentos para la residencia y se recoge la tarjeta lista.", "Dito nagsusumite ng dokumento para sa card ng paninirahan at kinukuha ang handa na card.", "Di sini mengajukan dokumen kartu tinggal dan mengambil kartu yang sudah jadi.", "यहाँ residence card का कागज बुझाउने र बनेको कार्ड लिने।"),
        list: [
          tx("Zabierz paszport, telefon i dokumenty ze sprawy.", "Take your passport, phone and documents for the case.", "Візьміть паспорт, телефон і документи до справи.", "Возьмите паспорт, телефон и документы по делу.", "Pasport, telefon və işə aid sənədləri götürün.", "Lleva pasaporte, teléfono y documentos del trámite.", "Dalhin ang pasaporte, telepono at dokumento.", "Bawa paspor, telepon dan dokumen urusan.", "पासपोर्ट, फोन र कागजात लैजानुहोस्।")
        ],
        links: [
          { url: "https://maps.app.goo.gl/NySReoBkGW3aoziv9", label: tx("Otwórz mapę DUW", "Open DUW map", "Відкрити карту DUW", "Открыть карту DUW", "DUW xəritəsini aç", "Abrir mapa DUW", "Buksan ang mapa ng DUW", "Buka peta DUW", "DUW नक्सा खोल्नुहोस्"), tone: "blue" }
        ]
      },
      {
        tone: "blue",
        icon: "city",
        tag: tx("Urząd", "Office", "Установа", "Ужонд", "İdarə", "Oficina", "Opisina", "Kantor", "कार्यालय"),
        title: tx("Urząd Miejski w Siechnicach", "Siechnice City Office", "Міська рада в Siechnice", "Городская администрация в Siechnice", "Siechnice şəhər idarəsi", "Ayuntamiento de Siechnice", "Opisina ng lungsod sa Siechnice", "Kantor kota Siechnice", "Siechnice नगर कार्यालय"),
        note: tx("Tu załatwia się sprawy miejskie: PESEL, meldunek, dokumenty, Profil Zaufany i informacje o mObywatel.", "Here you handle city matters: PESEL, registration, documents, Trusted Profile and mObywatel information.", "Тут вирішують міські справи: PESEL, реєстрацію, документи, Profil Zaufany та інформацію про mObywatel.", "Здесь решают городские дела: PESEL, meldunek, документы, Profil Zaufany и информацию по mObywatel.", "Burada şəhər işləri həll olunur: PESEL, qeydiyyat, sənədlər, Profil Zaufany və mObywatel məlumatı.", "Aquí se hacen trámites de ciudad: PESEL, registro, documentos, Perfil de confianza e información de mObywatel.", "Dito inaasikaso ang mga asunto sa lungsod: PESEL, rehistrasyon, dokumento, Profil Zaufany at mObywatel.", "Di sini mengurus urusan kota: PESEL, registrasi, dokumen, Profil Zaufany dan info mObywatel.", "यहाँ शहरका काम हुन्छ: PESEL, दर्ता, कागजात, Profil Zaufany र mObywatel जानकारी।"),
        list: [
          tx("Przed wizytą sprawdź godziny pracy i potrzebne dokumenty.", "Before visiting, check opening hours and required documents.", "Перед візитом перевірте години роботи і потрібні документи.", "Перед визитом проверьте часы работы и нужные документы.", "Getməzdən əvvəl iş saatlarını və lazım olan sənədləri yoxlayın.", "Antes de ir, revisa el horario y los documentos necesarios.", "Bago pumunta, tingnan ang oras at kailangang dokumento.", "Sebelum pergi, cek jam buka dan dokumen yang dibutuhkan.", "जानु अघि खुल्ने समय र चाहिने कागजात जाँच गर्नुहोस्।")
        ],
        links: [
          { url: "https://www.google.com/maps/search/?api=1&query=Urz%C4%85d+Miejski+w+Siechnicach", label: tx("Otwórz mapę urzędu", "Open office map", "Відкрити карту установи", "Открыть карту ужонда", "İdarənin xəritəsini aç", "Abrir mapa de la oficina", "Buksan ang mapa ng opisina", "Buka peta kantor", "कार्यालयको नक्सा खोल्नुहोस्"), tone: "blue" },
          { url: "https://www.siechnice.gmina.pl/", label: tx("Otwórz stronę urzędu", "Open office website", "Відкрити сайт установи", "Открыть сайт ужонда", "İdarənin saytını aç", "Abrir web de la oficina", "Buksan ang opisyal na site ng opisina", "Buka situs kantor", "कार्यालयको वेबसाइट खोल्नुहोस्"), tone: "blue" }
        ]
      },
      {
        tone: "yellow",
        icon: "bank",
        tag: tx("Bank", "Bank", "Банк", "Банк", "Bank", "Banco", "Bangko", "Bank", "बैंक"),
        title: tx("PKO Bank Polski", "PKO Bank Polski", "PKO Bank Polski", "PKO Bank Polski", "PKO Bank Polski", "PKO Bank Polski", "PKO Bank Polski", "PKO Bank Polski", "PKO Bank Polski"),
        address: "ul. Jana Pawła II 28/30, Siechnice",
        phone: "800 302 302",
        note: tx("Bank w Siechnicach. Przydatny do konta, karty i spraw bankowych.", "Bank in Siechnice. Useful for account, card and banking matters.", "Банк у Siechnice. Корисно для рахунку, картки і банківських справ.", "Банк в Siechnice. Полезно для счета, карты и банковских дел.", "Siechnice-də bank. Hesab, kart və bank işləri üçün faydalıdır.", "Banco en Siechnice. Útil para cuenta, tarjeta y trámites bancarios.", "Bangko sa Siechnice. Para sa account, card at mga asunto sa bangko.", "Bank di Siechnice. Untuk rekening, kartu dan urusan bank.", "Siechnice मा बैंक। खाता, कार्ड र बैंकका कामका लागि।"),
        links: [
          { url: "https://www.google.com/maps/search/?api=1&query=PKO+Bank+Polski+Jana+Paw%C5%82a+II+28%2F30+Siechnice", label: tx("Otwórz mapę do PKO Bank Polski", "Open map to PKO Bank Polski", "Відкрити карту до PKO Bank Polski", "Открыть карту к PKO Bank Polski", "PKO Bank Polski xəritəsini aç", "Abrir mapa a PKO Bank Polski", "Buksan ang mapa papuntang PKO Bank Polski", "Buka peta ke PKO Bank Polski", "PKO Bank Polski को नक्सा खोल्नुहोस्"), tone: "yellow" }
        ]
      },
      {
        tone: "yellow",
        icon: "bank",
        tag: tx("Bank", "Bank", "Банк", "Банк", "Bank", "Banco", "Bangko", "Bank", "बैंक"),
        title: tx("Alior Bank", "Alior Bank", "Alior Bank", "Alior Bank", "Alior Bank", "Alior Bank", "Alior Bank", "Alior Bank", "Alior Bank"),
        address: "ul. Jarzębinowa 7-13/lok.2, Siechnice",
        phone: "71 303 22 40",
        note: tx("Drugi bank w Siechnicach. Sprawdź godziny przed wizytą.", "Another bank in Siechnice. Check opening hours before visiting.", "Другий банк у Siechnice. Перевірте години перед візитом.", "Еще один банк в Siechnice. Проверьте часы перед визитом.", "Siechnice-də başqa bank. Getməzdən əvvəl iş saatlarını yoxlayın.", "Otro banco en Siechnice. Revisa el horario antes de ir.", "Isa pang bangko sa Siechnice. Tingnan ang oras bago pumunta.", "Bank lain di Siechnice. Cek jam buka sebelum pergi.", "Siechnice मा अर्को बैंक। जानु अघि समय जाँच गर्नुहोस्।"),
        links: [
          { url: "https://www.google.com/maps/search/?api=1&query=Alior+Bank+Jarz%C4%99binowa+7-13+lok.2+Siechnice", label: tx("Otwórz mapę do Alior Bank", "Open map to Alior Bank", "Відкрити карту до Alior Bank", "Открыть карту к Alior Bank", "Alior Bank xəritəsini aç", "Abrir mapa a Alior Bank", "Buksan ang mapa papuntang Alior Bank", "Buka peta ke Alior Bank", "Alior Bank को नक्सा खोल्नुहोस्"), tone: "yellow" }
        ]
      },
      {
        tone: "yellow",
        icon: "bank",
        tag: tx("Bankomat", "ATM", "Банкомат", "Банкомат", "Bankomat", "Cajero", "ATM", "ATM", "ATM"),
        title: tx("Banki i bankomaty w pobliżu", "Nearby banks and ATMs", "Банки і банкомати поруч", "Банки и банкоматы рядом", "Yaxındakı banklar və bankomatlar", "Bancos y cajeros cerca", "Malapit na bangko at ATM", "Bank dan ATM terdekat", "नजिकका बैंक र ATM"),
        note: tx("Użyj, gdy potrzebujesz najbliższego bankomatu albo innego banku.", "Use this when you need the nearest ATM or another bank.", "Використовуйте, коли потрібен найближчий банкомат або інший банк.", "Используйте, когда нужен ближайший банкомат или другой банк.", "Ən yaxın bankomat və ya başqa bank lazım olduqda istifadə edin.", "Úsalo si necesitas el cajero más cercano u otro banco.", "Gamitin kung kailangan ang pinakamalapit na ATM o ibang bangko.", "Gunakan jika perlu ATM terdekat atau bank lain.", "नजिकको ATM वा अर्को बैंक चाहिँदा प्रयोग गर्नुहोस्।"),
        links: [
          { url: "https://www.google.com/maps/search/?api=1&query=bank+bankomat+Siechnice", label: tx("Pokaż banki i bankomaty", "Show banks and ATMs", "Показати банки і банкомати", "Показать банки и банкоматы", "Bankları və bankomatları göstər", "Mostrar bancos y cajeros", "Ipakita ang bangko at ATM", "Tampilkan bank dan ATM", "बैंक र ATM देखाउनुहोस्"), tone: "yellow" }
        ]
      },
      {
        tone: "blue",
        icon: "document",
        tag: tx("Aplikacje urzędowe", "Official apps", "Державні додатки", "Гос. приложения", "Rəsmi tətbiqlər", "Apps oficiales", "Official apps", "Aplikasi resmi", "सरकारी एपहरू"),
        title: tx("PESEL / Profil Zaufany / mObywatel", "PESEL / Trusted Profile / mObywatel", "PESEL / Profil Zaufany / mObywatel", "PESEL / Profil Zaufany / mObywatel", "PESEL / Profil Zaufany / mObywatel", "PESEL / Perfil de confianza / mObywatel", "PESEL / Trusted Profile / mObywatel", "PESEL / Profil Zaufany / mObywatel", "PESEL / Profil Zaufany / mObywatel"),
        note: tx("Do spraw urzędowych możesz potrzebować PESEL, Profil Zaufany i aplikację mObywatel.", "For official matters you may need PESEL, Trusted Profile and the mObywatel app.", "Для урядових справ можуть бути потрібні PESEL, Profil Zaufany і додаток mObywatel.", "Для официальных дел могут понадобиться PESEL, Profil Zaufany и приложение mObywatel.", "Rəsmi işlər üçün PESEL, Profil Zaufany və mObywatel tətbiqi lazım ola bilər.", "Para trámites oficiales puedes necesitar PESEL, Perfil de confianza y la app mObywatel.", "Para sa opisyal na asunto, maaaring kailanganin ang PESEL, Profil Zaufany at mObywatel app.", "Untuk urusan resmi mungkin perlu PESEL, Profil Zaufany dan aplikasi mObywatel.", "सरकारी कामका लागि PESEL, Profil Zaufany र mObywatel एप चाहिन सक्छ।"),
        links: [
          { url: "https://www.gov.pl/web/mobywatel", label: tx("Otwórz mObywatel", "Open mObywatel", "Відкрити mObywatel", "Открыть mObywatel", "mObywatel aç", "Abrir mObywatel", "Buksan mObywatel", "Buka mObywatel", "mObywatel खोल्नुहोस्"), tone: "blue" },
          { url: "https://www.gov.pl/web/profilzaufany", label: tx("Otwórz Profil Zaufany", "Open Trusted Profile", "Відкрити Profil Zaufany", "Открыть Profil Zaufany", "Profil Zaufany aç", "Abrir Perfil de confianza", "Buksan Trusted Profile", "Buka Profil Zaufany", "Profil Zaufany खोल्नुहोस्"), tone: "blue" }
        ]
      },
      {
        tone: "blue",
        icon: "map",
        tag: tx("Dojazd", "Transport", "Доїзд", "Проезд", "Nəqliyyat", "Transporte", "Biyahe", "Transportasi", "यातायात"),
        title: tx("Jakdojade", "Jakdojade", "Jakdojade", "Jakdojade", "Jakdojade", "Jakdojade", "Jakdojade", "Jakdojade", "Jakdojade"),
        note: tx("Aplikacja do autobusów i komunikacji miejskiej.", "App for buses and public transport.", "Додаток для автобусів і громадського транспорту.", "Приложение для автобусов и городского транспорта.", "Avtobuslar və ictimai nəqliyyat üçün tətbiq.", "App para buses y transporte público.", "App para sa bus at public transport.", "Aplikasi untuk bus dan transportasi umum.", "बस र सार्वजनिक यातायातको एप।"),
        links: [
          { url: "https://jakdojade.pl/", label: tx("Otwórz Jakdojade", "Open Jakdojade", "Відкрити Jakdojade", "Открыть Jakdojade", "Jakdojade aç", "Abrir Jakdojade", "Buksan Jakdojade", "Buka Jakdojade", "Jakdojade खोल्नुहोस्"), tone: "blue" }
        ]
      },
      {
        tone: "blue",
        icon: "map",
        tag: tx("Pociąg", "Train", "Поїзд", "Поезд", "Qatar", "Tren", "Tren", "Kereta", "रेल"),
        title: tx("KOLEO", "KOLEO", "KOLEO", "KOLEO", "KOLEO", "KOLEO", "KOLEO", "KOLEO", "KOLEO"),
        note: tx("Aplikacja do pociągów. Przydatna, gdy jedziesz koleją do Wrocławia albo Siechnic.", "Train app. Useful when you travel by train to Wrocław or Siechnice.", "Додаток для поїздів. Корисно, коли їдете поїздом до Wrocław або Siechnice.", "Приложение для поездов. Полезно, если едете поездом во Вроцлав или Siechnice.", "Qatar tətbiqi. Wrocław və ya Siechnice-yə qatarla gedəndə faydalıdır.", "App de trenes. Útil si viajas en tren a Wrocław o Siechnice.", "Train app. Kapaki-pakinabang kung sasakay ng tren papuntang Wrocław o Siechnice.", "Aplikasi kereta. Berguna jika naik kereta ke Wrocław atau Siechnice.", "रेल एप। Wrocław वा Siechnice रेलमा जाँदा उपयोगी हुन्छ।"),
        links: [
          { url: "https://koleo.pl/", label: tx("Otwórz KOLEO", "Open KOLEO", "Відкрити KOLEO", "Открыть KOLEO", "KOLEO aç", "Abrir KOLEO", "Buksan KOLEO", "Buka KOLEO", "KOLEO खोल्नुहोस्"), tone: "blue" }
        ]
      }
    ],

    cityExtras: [],

    cityRules: [
      {
        tone: "yellow",
        icon: "document",
        tag: tx("Dokumenty", "Documents", "Документи", "Документы", "Sənədlər", "Documentos", "Dokumento", "Dokumen", "कागजात"),
        title: tx("Ważne - dokument przy sobie", "Important - keep ID with you", "Важливо - документ із собою", "Важно - документ с собой", "Vacib - sənəd yanınızda olsun", "Importante - lleva documento", "Mahalaga - dalhin ang ID", "Penting - bawa dokumen", "महत्त्वपूर्ण - कागजात साथमा"),
        note: tx("Kiedy wychodzisz do miasta, miej przy sobie paszport albo kartę pobytu.", "When you go to the city, keep your passport or residence card with you.", "Коли виходите в місто, майте при собі паспорт або карту побиту.", "Когда выходите в город, имейте при себе паспорт или карту побыту.", "Şəhərə çıxanda pasport və ya yaşayış kartı yanınızda olsun.", "Cuando sales a la ciudad, lleva pasaporte o tarjeta de residencia.", "Kapag lalabas sa lungsod, dalhin ang pasaporte o card ng paninirahan.", "Saat pergi ke kota, bawa paspor atau kartu tinggal.", "शहर जाँदा पासपोर्ट वा residence card साथमा राख्नुहोस्।"),
        list: [
          tx("Dokument może być potrzebny przy kontroli, w urzędzie albo w banku.", "You may need the document during a check, at the office or in the bank.", "Документ може знадобитися при перевірці, в установі або банку.", "Документ может понадобиться при проверке, в ужонде или банке.", "Sənəd yoxlama zamanı, idarədə və ya bankda lazım ola bilər.", "El documento puede hacer falta en un control, oficina o banco.", "Maaaring kailanganin ang dokumento sa check, opisina o bangko.", "Dokumen bisa dibutuhkan saat pemeriksaan, di kantor atau bank.", "जाँच, कार्यालय वा बैंकमा कागजात चाहिन सक्छ।")
        ]
      },
      {
        tone: "red",
        icon: "document",
        tag: tx("Wejście", "Entrance", "Вхід", "Вход", "Giriş", "Entrada", "Pasukan", "Masuk", "प्रवेश"),
        title: tx("Wejście na teren firmy", "Entering company premises", "Вхід на територію фірми", "Вход на территорию фирмы", "Firma ərazisinə giriş", "Entrada al terreno de la empresa", "Pagpasok sa kumpanya", "Masuk area perusahaan", "कम्पनी क्षेत्रमा प्रवेश"),
        note: tx("Przy wejściu trzeba mieć przepustkę. Bez przepustki ochrona nie przepuści.", "At the entrance you need a pass. Without a pass, security will not let you in.", "При вході потрібна перепустка. Без перепустки охорона не пропустить.", "При входе нужен пропуск. Без пропуска охрана не пропустит.", "Girişdə keçid kartı olmalıdır. Keçid kartı olmadan mühafizə buraxmayacaq.", "En la entrada necesitas pase. Sin pase, seguridad no deja entrar.", "Sa pasukan kailangan ang pass. Kung walang pass, hindi papapasukin ng security.", "Di pintu masuk perlu kartu akses. Tanpa kartu, security tidak mengizinkan masuk.", "प्रवेशमा पास चाहिन्छ। पास बिना सुरक्षा भित्र छिर्न दिँदैन।")
      },
      {
        tone: "yellow",
        icon: "parcel",
        tag: tx("Paczki", "Parcels", "Посилки", "Посылки", "Bağlamalar", "Paquetes", "Parcels", "Paket", "पार्सल"),
        title: tx("Zamówienia i paczki", "Orders and parcels", "Замовлення і посилки", "Заказы и посылки", "Sifarişlər və bağlamalar", "Pedidos y paquetes", "Orders at parcels", "Pesanan dan paket", "अर्डर र पार्सल"),
        note: tx("AliExpress, Allegro i inne paczki zamawiaj tylko do paczkomatu. Nie zamawiaj na adres firmy.", "Order AliExpress, Allegro and other parcels only to a parcel locker. Do not order to the company address.", "AliExpress, Allegro та інші посилки замовляйте тільки до Paczkomat. Не замовляйте на адресу фірми.", "AliExpress, Allegro и другие посылки заказывайте только в Paczkomat. Не заказывайте на адрес фирмы.", "AliExpress, Allegro və başqa bağlamaları yalnız Paczkomat-a sifariş edin. Firma ünvanına sifariş etməyin.", "Pide AliExpress, Allegro y otros paquetes solo a Paczkomat. No pidas a la dirección de la empresa.", "Ipadala ang AliExpress, Allegro at ibang parcel sa Paczkomat lang. Huwag sa address ng kumpanya.", "Pesan AliExpress, Allegro dan paket lain hanya ke Paczkomat. Jangan ke alamat perusahaan.", "AliExpress, Allegro र अरू पार्सल Paczkomat मा मात्र मगाउनुहोस्। कम्पनी ठेगानामा नमगाउनुहोस्।"),
        list: [
          tx("Ochrona nie przyjmuje paczek zamówionych na firmę.", "Security does not accept parcels ordered to the company.", "Охорона не приймає посилки, замовлені на фірму.", "Охрана не принимает посылки, заказанные на фирму.", "Mühafizə firmaya sifariş olunan bağlamaları qəbul etmir.", "Seguridad no acepta paquetes enviados a la empresa.", "Hindi tinatanggap ng security ang parcels na naka-address sa kumpanya.", "Security tidak menerima paket yang dikirim ke perusahaan.", "कम्पनीमा आएको पार्सल सुरक्षा लेिँदैन।")
        ]
      }
    ],

    bans: [
      tx("Jedzenie i napoje w strefie pracy.", "Food and drinks in the work zone.", "Їжа і напої у робочій зоні.", "Еда и напитки в рабочей зоне.", "İş zonasında yemək və içki.", "Comida y bebidas en zona de trabajo.", "Pagkain at inumin sa work zone.", "Makanan dan minuman di area kerja.", "काम क्षेत्रमा खाना र पेय।"),
      tx("Guma, cukierki, orzechy i prywatne przekąski.", "Gum, candy, nuts and private snacks.", "Жуйка, цукерки, горіхи і приватні перекуси.", "Жвачка, конфеты, орехи и личные перекусы.", "Saqqız, konfet, qoz-fındıq və şəxsi qəlyanaltılar.", "Chicle, dulces, nueces y snacks privados.", "Gum, candy, nuts at sariling snacks.", "Permen karet, permen, kacang dan camilan pribadi.", "चुइङगम, क्यान्डी, नट्स र निजी खाजा।"),
      tx("Telefon w produkcji bez pozwolenia.", "Phone in production without permission.", "Телефон на продукції без дозволу.", "Телефон на производстве без разрешения.", "İstehsalatda icazəsiz telefon.", "Teléfono en producción sin permiso.", "Telepono sa production nang walang pahintulot.", "Telepon di produksi tanpa izin.", "अनुमति बिना उत्पादन क्षेत्रमा फोन।"),
      tx("Papierosy, e-papierosy i zapalniczki w strefie pracy.", "Cigarettes, e-cigarettes and lighters in the work zone.", "Сигарети, електронні сигарети і запальнички у робочій зоні.", "Сигареты, электронные сигареты и зажигалки в рабочей зоне.", "İş zonasında siqaret, elektron siqaret və alışqan.", "Cigarrillos, vape y encendedores en zona de trabajo.", "Sigarilyo, vape at lighter sa work zone.", "Rokok, vape dan korek di area kerja.", "काम क्षेत्रमा चुरोट, vape र लाइटर।"),
      tx("Biżuteria, sztuczne paznokcie i sztuczne rzęsy.", "Jewelry, artificial nails and artificial eyelashes.", "Біжутерія, штучні нігті і штучні вії.", "Украшения, искусственные ногти и ресницы.", "Zinət əşyası, süni dırnaq və süni kirpik.", "Joyería, uñas postizas y pestañas postizas.", "Alahas, artificial nails at eyelashes.", "Perhiasan, kuku palsu dan bulu mata palsu.", "गहना, कृत्रिम नङ र कृत्रिम परेला।"),
      tx("Prywatne rzeczy w miejscu pracy.", "Private items in the work place.", "Приватні речі на робочому місці.", "Личные вещи на рабочем месте.", "İş yerində şəxsi əşyalar.", "Objetos personales en el lugar de trabajo.", "Personal na gamit sa work place.", "Barang pribadi di tempat kerja.", "काम ठाउँमा निजी सामान।"),
      tx("Wchodzenie samemu do niewłaściwej szklarni lub strefy.", "Entering the wrong greenhouse or zone alone.", "Самостійний вхід у неправильну теплицю або зону.", "Самостоятельный вход в неправильную теплицу или зону.", "Yanlış istixana və ya zonaya tək girmək.", "Entrar solo al invernadero o zona equivocada.", "Pagpasok mag-isa sa maling bahay-taniman o zone.", "Masuk sendiri ke rumah kaca atau zona yang salah.", "गलत ग्रीनहाउस वा क्षेत्रमा एक्लै प्रवेश।"),
      tx("Używanie cudzego PIN-u, taga albo readera.", "Using someone else's PIN, tag or reader.", "Використання чужого PIN, тегу або рідера.", "Использование чужого PIN, тега или ридера.", "Başqasının PIN, tag və ya reader-ini istifadə etmək.", "Usar PIN, tag o reader de otra persona.", "Paggamit ng PIN, tag o reader ng iba.", "Memakai PIN, tag atau reader orang lain.", "अरूको PIN, tag वा reader प्रयोग।")
    ],

    test: [
      { ok: true, text: tx("W magazynie nie używa się readerów.", "Readers are not used in the warehouse.", "На складі рідер не використовується.", "На складе ридер не используется.", "Anbarda reader istifadə olunmur.", "En almacén no se usa reader.", "Walang reader sa bodega.", "Di gudang tidak memakai reader.", "गोदाममा reader प्रयोग हुँदैन।") },
      { ok: true, text: tx("Język zmienia się tylko na górze strony.", "Language is changed only at the top of the page.", "Мова змінюється тільки зверху сторінки.", "Язык меняется только сверху страницы.", "Dil yalnız səhifənin yuxarısında dəyişir.", "El idioma se cambia solo arriba de la página.", "Ang wika ay pinapalitan lang sa itaas ng pahina.", "Bahasa diganti hanya di bagian atas halaman.", "भाषा पृष्ठको माथिबाट मात्र बदलिन्छ।") },
      { ok: false, text: tx("Do pracy można wejść samemu do dowolnej szklarni.", "You may enter any greenhouse alone.", "Можна самому зайти в будь-яку теплицю.", "Можно самому зайти в любую теплицу.", "İstənilən istixanaya tək girmək olar.", "Puedes entrar solo a cualquier invernadero.", "Puwedeng pumasok mag-isa sa kahit anong bahay-taniman.", "Boleh masuk sendiri ke rumah kaca mana saja.", "कुनै पनि ग्रीनहाउसमा एक्लै पस्न पाइन्छ।") },
      { ok: true, text: tx("Przy chorobie lub spóźnieniu kontaktujesz się z brygadzistą.", "If sick or late, contact the brigadier.", "Якщо хворієте або запізнюєтесь, контактуйте з бригадиром.", "Если болеете или опаздываете, свяжитесь с бригадиром.", "Xəstə və ya geciksəniz briqadirlə əlaqə saxlayın.", "Si estás enfermo o tarde, contacta al encargado.", "Kung may sakit o late, kontakin ang brigadier.", "Jika sakit atau terlambat, hubungi mandor.", "बिरामी वा ढिलो भए ब्रिगेडियरलाई सम्पर्क गर्नुहोस्।") },
      { ok: true, text: tx("Tag rzędu odbija się przy wyjściu z rzędu.", "The row tag is scanned when leaving the row.", "Тег ряду відбивається при виході з ряду.", "Тег ряда отмечается при выходе из ряда.", "Sıra tagı sıradan çıxanda vurulur.", "El tag de fila se marca al salir.", "Ang tag ng hanay ay i-scan sa paglabas.", "Tag baris discan saat keluar.", "row tag निस्कँदा स्क्यान हुन्छ।") },
      { ok: false, text: tx("Tag rzędu zawsze odbija się przy wejściu do rzędu.", "The row tag is always scanned when entering the row.", "Тег ряду завжди відбивається при вході.", "Тег ряда всегда отмечается при входе.", "Sıra tagı həmişə girişdə vurulur.", "El tag siempre se marca al entrar.", "Laging ini-scan ang tag ng hanay sa pagpasok.", "Tag baris selalu discan saat masuk.", "row tag सधैं प्रवेश गर्दा स्क्यान हुन्छ।") },
      { ok: true, text: tx("Rząd skończony oznacza jedno odbicie tagu rzędu.", "A finished row means one row-tag scan.", "Закінчений ряд означає одне відбиття тегу.", "Законченный ряд означает одну отметку.", "Bitmiş sıra bir tag vurmaq deməkdir.", "Fila terminada significa una marca.", "Tapos na hanay = isang scan.", "Baris selesai = satu scan.", "पङ्क्ति सकिएको = एक स्क्यान।") },
      { ok: true, text: tx("Rząd nieskończony oznacza dwa odbicia tagu rzędu.", "An unfinished row means two row-tag scans.", "Незакінчений ряд означає два відбиття тегу.", "Незаконченный ряд означает две отметки.", "Bitməmiş sıra iki tag vurmaq deməkdir.", "Fila no terminada significa dos marcas.", "Hindi tapos na hanay = dalawang scan.", "Baris belum selesai = dua scan.", "पङ्क्ति नसकिएको = दुई स्क्यान।") },
      { ok: true, text: tx("Po pracy reader odkłada się na ładowarkę.", "After work the reader is put back on the charger.", "Після роботи рідер кладеться на зарядку.", "После работы ридер кладется на зарядку.", "İşdən sonra reader şarja qoyulur.", "Después del trabajo, el reader vuelve al cargador.", "Pagkatapos, ibalik ang reader sa charger.", "Setelah kerja reader dikembalikan ke charger.", "कामपछि reader चार्जरमा राखिन्छ।") },
      { ok: false, text: tx("Reader można zabrać do domu.", "You can take the reader home.", "Рідер можна забрати додому.", "Ридер можно забрать домой.", "Reader-i evə aparmaq olar.", "Puedes llevar el reader a casa.", "Puwedeng dalhin ang reader sa bahay.", "Reader boleh dibawa pulang.", "reader घर लैजान पाइन्छ।") },
      { ok: true, text: tx("Przy zbiorach najpierw skanujesz wózek, potem rząd.", "During picking, first scan the cart, then the row.", "Під час збору спочатку скануєте візок, потім ряд.", "При сборе сначала сканируете тележку, потом ряд.", "Yığım zamanı əvvəl arabani, sonra sıranı skan edirsiniz.", "En cosecha primero marcas el carro, luego la fila.", "Sa pagpitas, una ang cart, pagkatapos ang hanay.", "Saat panen, scan troli dulu, lalu baris.", "टिपाइमा पहिले ट्रली, त्यसपछि पङ्क्ति स्क्यान गर्नुहोस्।") },
      { ok: false, text: tx("Przy zbiorach najpierw wysyłasz informację, a potem skanujesz wózek.", "During picking, first you send information, then scan the cart.", "Під час збору спочатку надсилаєте інформацію, потім скануєте візок.", "При сборе сначала отправляете информацию, потом сканируете тележку.", "Yığım zamanı əvvəl məlumat göndərirsiniz, sonra arabani skan edirsiniz.", "En cosecha primero envías información y luego marcas el carro.", "Sa pagpitas, una ipadala ang impormasyon, pagkatapos i-scan ang cart.", "Saat panen, kirim info dulu, lalu scan troli.", "टिपाइमा पहिले जानकारी पठाएर त्यसपछि ट्रली स्क्यान गर्नुहुन्छ।") },
      { ok: true, text: tx("Po restarcie readera kontynuujesz tę samą logikę odbijania.", "After reader restart, continue the same scanning logic.", "Після рестарту рідера продовжуєте ту саму логіку відбиття.", "После рестарта ридера продолжаете ту же логику отметок.", "Reader restartdan sonra eyni vurma məntiqi ilə davam edirsiniz.", "Después del reinicio del reader sigues la misma lógica.", "Pagkatapos ng reader restart, parehong scan logic pa rin.", "Setelah restart reader, lanjutkan logika scan yang sama.", "reader restart पछि उही स्क्यान नियम जारी राख्नुहोस्।") },
      { ok: true, text: tx("Na SOR jedzie się w nagłych przypadkach.", "Emergency room is for urgent cases.", "На SOR їдуть у термінових випадках.", "На SOR едут в срочных случаях.", "Təcili yardıma təcili hallarda gedilir.", "Urgencias es para casos urgentes.", "Emergency room para sa urgent cases.", "IGD untuk keadaan darurat.", "आपतकालीन urgent अवस्थामा हो।") },
      { ok: true, text: tx("Do GOZ Siechnice najlepiej przyjść o 8:00.", "It is best to come to GOZ Siechnice at 8:00.", "До GOZ Siechnice краще прийти о 8:00.", "В GOZ Siechnice лучше прийти в 8:00.", "GOZ Siechnice-yə saat 8:00-da gəlmək yaxşıdır.", "Es mejor ir a GOZ Siechnice a las 8:00.", "Mas mabuting pumunta sa GOZ Siechnice ng 8:00.", "Sebaiknya datang ke GOZ Siechnice pukul 8:00.", "GOZ Siechnice मा ८:०० बजे आउनु राम्रो।") },
      { ok: true, text: tx("Do lekarza zabierasz PESEL, paszport i telefon.", "For the doctor take PESEL, passport and phone.", "До лікаря берете PESEL, паспорт і телефон.", "К врачу берете PESEL, паспорт и телефон.", "Həkimə PESEL, pasport və telefon götürün.", "Al médico lleva PESEL, pasaporte y teléfono.", "Sa doktor dalhin PESEL, pasaporte at telepono.", "Ke dokter bawa PESEL, paspor, telepon.", "डाक्टरकहाँ PESEL, पासपोर्ट र फोन लैजानुहोस्।") },
      { ok: false, text: tx("W strefie pracy można jeść i pić.", "You may eat and drink in the work zone.", "У робочій зоні можна їсти і пити.", "В рабочей зоне можно есть и пить.", "İş zonasında yemək və içmək olar.", "Se puede comer y beber en la zona de trabajo.", "Puwedeng kumain at uminom sa work zone.", "Boleh makan dan minum di area kerja.", "काम क्षेत्रमा खान र पिउन पाइन्छ।") },
      { ok: false, text: tx("Można używać cudzego PIN-u.", "You may use someone else's PIN.", "Можна використовувати чужий PIN.", "Можно использовать чужой PIN.", "Başqasının PIN-dən istifadə etmək olar.", "Puedes usar el PIN de otra persona.", "Puwedeng gumamit ng PIN ng iba.", "Boleh memakai PIN orang lain.", "अरूको PIN प्रयोग गर्न पाइन्छ।") },
      { ok: true, text: tx("Telefon w produkcji jest zakazany bez pozwolenia.", "Phone in production is forbidden without permission.", "Телефон на продукції заборонений без дозволу.", "Телефон на производстве запрещен без разрешения.", "İstehsalatda icazəsiz telefon qadağandır.", "Teléfono en producción está prohibido sin permiso.", "Bawal ang telepono sa production nang walang pahintulot.", "Telepon di produksi dilarang tanpa izin.", "अनुमति बिना उत्पादनमा फोन निषेध छ।") },
      { ok: true, text: tx("Szklarnia ma lewą i prawą stronę od drogi środkowej.", "The greenhouse has left and right sides from the middle road.", "Теплиця має ліву і праву сторону від центральної дороги.", "У теплицы есть левая и правая сторона от центральной дороги.", "İstixanada orta yoldan sol və sağ tərəf var.", "El invernadero tiene lado izquierdo y derecho desde el camino central.", "May kaliwa at kanang bahagi mula sa gitnang daan.", "Rumah kaca punya sisi kiri dan kanan dari jalan tengah.", "बीच बाटोबाट बायाँ र दायाँ भाग हुन्छ।") },
      { ok: true, text: tx("W jednej nawie pokazujemy 5 wejść i 10 rzędów.", "In one nave we show 5 entrances and 10 rows.", "В одній наві показуємо 5 входів і 10 рядів.", "В одной наве показываем 5 входов и 10 рядов.", "Bir navada 5 giriş və 10 sıra göstərilir.", "En una nave mostramos 5 entradas y 10 filas.", "Sa isang nawa may 5 pasukan at 10 hanay.", "Dalam satu nave ada 5 pintu masuk dan 10 baris.", "एउटा नावामा ५ प्रवेश र १० पङ्क्ति हुन्छ।") },
      { ok: true, text: tx("W przejściu po lewej jest lewa strona, czyli lewy rząd, a po prawej prawa strona, czyli prawy rząd.", "In the passage, on the left is the left side, the left row; on the right is the right side, the right row.", "У проході зліва ліва сторона, тобто лівий ряд, а справа права сторона, тобто правий ряд.", "В проходе слева левая сторона, то есть левый ряд, а справа правая сторона, то есть правый ряд.", "Keçiddə solda sol tərəf, yəni sol sıra, sağda isə sağ tərəf, yəni sağ sıra var.", "En el pasillo, a la izquierda está el lado izquierdo, la fila izquierda; a la derecha está el lado derecho, la fila derecha.", "Sa daanan, sa kaliwa ang kaliwang bahagi, ang kaliwang hanay; sa kanan ang kanang bahagi, ang kanang hanay.", "Di lorong, di kiri ada sisi kiri, baris kiri; di kanan ada sisi kanan, baris kanan.", "पासेजमा बायाँतिर बायाँ भाग, बायाँ लाइन हुन्छ; दायाँतिर दायाँ भाग, दायाँ लाइन हुन्छ।") },
      { ok: true, text: tx("Numer przęsła sprawdza się na podłodze w przejściu, bo w różnych szklarniach numeracja może być inna.", "Check the section number on the floor in the passage, because numbering may differ between greenhouses.", "Номер секції перевіряється на підлозі в проході, бо в різних теплицях нумерація може бути різна.", "Номер секции проверяется на полу в проходе, потому что в разных теплицах нумерация может отличаться.", "Bölmə nömrəsini keçiddə yerdə yoxlayın, çünki müxtəlif istixanalarda nömrələmə fərqli ola bilər.", "El número de sección se revisa en el suelo del pasillo, porque la numeración puede ser diferente en cada invernadero.", "Tingnan ang numero ng seksyon sa sahig ng daanan, dahil maaaring iba ang bilang sa bawat bahay-taniman.", "Cek nomor bagian di lantai lorong, karena penomoran bisa berbeda di tiap rumah kaca.", "सेक्शन नम्बर पासेजको भुइँमा जाँच गर्नुहोस्, किनकि फरक ग्रीनहाउसमा नम्बरिङ फरक हुन सक्छ।") },
      { ok: false, text: tx("Wszystkie szklarnie zawsze mają dokładnie 39 naw.", "All greenhouses always have exactly 39 naves.", "Усі теплиці завжди мають рівно 39 нав.", "Все теплицы всегда имеют ровно 39 нав.", "Bütün istixanalar həmişə dəqiq 39 navadır.", "Todos los invernaderos siempre tienen exactamente 39 naves.", "Lahat ng bahay-taniman ay laging eksaktong 39 nawa.", "Semua rumah kaca selalu tepat 39 nave.", "सबै ग्रीनहाउसमा सधैं ठीक ३९ नावा हुन्छ।") },
      { ok: true, text: tx("Liczba naw może być różna: 37, 38 albo 39.", "The number of naves may differ: 37, 38 or 39.", "Кількість нав може бути різна: 37, 38 або 39.", "Количество нав может быть разным: 37, 38 или 39.", "Nava sayı fərqli ola bilər: 37, 38 və ya 39.", "El número de naves puede variar: 37, 38 o 39.", "Puwedeng magkaiba ang bilang ng nawa: 37, 38 o 39.", "Jumlah nave bisa berbeda: 37, 38 atau 39.", "नावाको संख्या फरक हुन सक्छ: ३७, ३८ वा ३९।") },
      { ok: true, text: tx("Zmieniając czynność, najpierw kończysz poprzednią logikę odbicia.", "When changing activity, first finish the previous scan logic.", "Змінюючи дію, спочатку закінчуєте попередню логіку відбиття.", "Меняя деятельность, сначала заканчиваете предыдущую логику отметки.", "Fəaliyyəti dəyişəndə əvvəl əvvəlki vurma məntiqini bitirin.", "Al cambiar actividad, primero termina la lógica anterior.", "Pagpalit ng gawain, tapusin muna ang dating scan logic.", "Saat ganti aktivitas, selesaikan dulu logika scan sebelumnya.", "गतिविधि बदल्दा पहिले अघिल्लो स्क्यान नियम पूरा गर्नुहोस्।") },
      { ok: false, text: tx("Przerwę można zacząć bez odbijania rzędu przy wyjściu.", "You can start break without scanning the row when leaving.", "Можна почати перерву без відбиття ряду при виході.", "Можно начать перерыв без отметки ряда при выходе.", "Çıxanda sıra tagı vurmadan fasiləyə başlamaq olar.", "Puedes empezar descanso sin marcar la fila al salir.", "Puwedeng magpahinga nang hindi nag-scan ng hanay paglabas.", "Boleh istirahat tanpa scan baris saat keluar.", "निस्कँदा row tag स्क्यान नगरी ब्रेक सुरु गर्न पाइन्छ।") },
      { ok: true, text: tx("Przy problemie z oddychaniem dzwoni się 112 albo jedzie na SOR.", "With breathing problems call 112 or go to emergency.", "При проблемі з диханням дзвоніть 112 або їдьте на SOR.", "При проблеме с дыханием звоните 112 или едьте на SOR.", "Nəfəs problemi varsa 112-yə zəng edin və ya təciliyə gedin.", "Con problemas respiratorios llama 112 o ve a urgencias.", "Kung hirap huminga, tumawag 112 o pumunta sa emergency.", "Jika sulit bernapas, hubungi 112 atau ke IGD.", "सास फेर्न समस्या भए 112 फोन वा आपतकालीन जानुहोस्।") },
      { ok: true, text: tx("Brygadziści mają przyciski telefon i WhatsApp.", "Brigadiers have phone and WhatsApp buttons.", "Бригадири мають кнопки телефону і WhatsApp.", "У бригадиров есть кнопки телефон и WhatsApp.", "Briqadirlərdə telefon və WhatsApp düymələri var.", "Los encargados tienen botones de teléfono y WhatsApp.", "Brigadier ay may phone at WhatsApp buttons.", "Mandor punya tombol telepon dan WhatsApp.", "ब्रिगेडियरसँग फोन र WhatsApp बटन छन्।") },
      { ok: false, text: tx("U brygadzistów musi być Viber.", "Brigadiers must have Viber.", "У бригадирів має бути Viber.", "У бригадиров должен быть Viber.", "Briqadirlərdə mütləq Viber olmalıdır.", "Los encargados deben tener Viber.", "Dapat may Viber ang brigadier.", "Mandor harus punya Viber.", "ब्रिगेडियरसँग Viber हुनै पर्छ।") }
    ]
  };

window.CX_DATA.pages.mowa = {
  title: tx("Powiedz po polsku", "Say it in Polish", "Скажи польською", "Скажи по-польски", "Polyakca de", "Dilo en polaco", "Sabihin sa Polish", "Katakan dalam bahasa Polandia", "पोलिसमा भन्नुहोस्"),
  lead: tx("Gotowe zdania do pracy. Wybierz zdanie w swoim języku, a telefon powie je po polsku.", "Ready sentences for work. Choose a sentence in your language and the phone will say it in Polish.", "Готові речення для роботи. Оберіть речення своєю мовою, і телефон скаже його польською.", "Готовые фразы для работы. Выберите фразу на своём языке, и телефон скажет её по-польски.", "İş üçün hazır cümlələr. Cümləni öz dilinizdə seçin, telefon onu polyakca deyəcək.", "Frases listas para el trabajo. Elige una frase en tu idioma y el teléfono la dirá en polaco.", "Mga handang pangungusap para sa trabaho. Pumili sa iyong wika at sasabihin ito ng telepono sa Polish.", "Kalimat siap pakai untuk kerja. Pilih dalam bahasa Anda, telepon akan mengucapkannya dalam bahasa Polandia.", "कामका लागि तयार वाक्यहरू। आफ्नो भाषामा वाक्य छान्नुहोस्, फोनले पोलिसमा भन्छ।")
};

window.CX_DATA.tiles.splice(
  window.CX_DATA.tiles.findIndex((tile) => tile.page === "slownik"),
  0,
  {
    page: "mowa",
    tone: "blue",
    icon: "speech",
    title: tx("Powiedz po polsku", "Say it in Polish", "Скажи польською", "Скажи по-польски", "Polyakca de", "Dilo en polaco", "Sabihin sa Polish", "Katakan Polandia", "पोलिसमा भन्नुहोस्"),
    text: tx("Kliknij zdanie w swoim języku, telefon powie je po polsku.", "Tap a sentence in your language; the phone will say it in Polish.", "Натисніть речення своєю мовою, телефон скаже його польською.", "Нажмите фразу на своём языке, телефон скажет её по-польски.", "Cümləyə öz dilinizdə toxunun, telefon polyakca deyəcək.", "Toca una frase en tu idioma y el teléfono la dirá en polaco.", "Pindutin ang pangungusap sa iyong wika, sasabihin ito ng telepono sa Polish.", "Tekan kalimat dalam bahasa Anda, telepon akan mengucapkannya dalam bahasa Polandia.", "आफ्नो भाषामा वाक्य थिच्नुहोस्, फोनले पोलिसमा भन्छ।")
  }
);

window.CX_DATA.speechGroups = [
  { id: "understand", tone: "blue", icon: "speech", title: tx("Nie rozumiem", "I do not understand", "Не розумію", "Не понимаю", "Başa düşmürəm", "No entiendo", "Hindi ko maintindihan", "Saya tidak mengerti", "मैले बुझिनँ") },
  { id: "place", tone: "green", icon: "map", title: tx("Gdzie mam iść", "Where should I go", "Куди мені йти", "Куда мне идти", "Hara getməliyəm", "Dónde debo ir", "Saan ako pupunta", "Saya harus ke mana", "म कहाँ जानु") },
  { id: "contacts", tone: "blue", icon: "phone", title: tx("Kontakt i wiadomość", "Contact and message", "Контакт і повідомлення", "Контакт и сообщение", "Əlaqə və mesaj", "Contacto y mensaje", "Contact at mensahe", "Kontak dan pesan", "सम्पर्क र सन्देश") },
  { id: "greenhouse", tone: "green", icon: "greenhouse", title: tx("Szklarnia i rzędy", "Greenhouse and rows", "Теплиця і ряди", "Теплица и ряды", "İstixana və sıralar", "Invernadero y filas", "Greenhouse at rows", "Rumah kaca dan baris", "ग्रीनहाउस र लाइन") },
  { id: "equipment", tone: "yellow", icon: "reader", title: tx("Reader, tablet, tag", "Reader, tablet, tag", "Рідер, планшет, тег", "Ридер, планшет, тег", "Reader, tablet, tag", "Reader, tablet, tag", "Reader, tablet, tag", "Reader, tablet, tag", "reader, tablet, tag") },
  { id: "transport", tone: "blue", icon: "map", title: tx("Dojazd i mapa", "Travel and map", "Дорога і карта", "Дорога и карта", "Yol və xəritə", "Ruta y mapa", "Biyahe at mapa", "Perjalanan dan peta", "यात्रा र नक्सा") },
  { id: "break", tone: "blue", icon: "city", title: tx("Przerwa i socjal", "Break and social room", "Перерва і соціал", "Перерыв и социал", "Fasilə və sosial otaq", "Pausa y sala social", "Break at social room", "Istirahat dan ruang sosial", "ब्रेक र सोसियल") },
  { id: "health", tone: "red", icon: "medical", title: tx("Zdrowie i spóźnienie", "Health and lateness", "Здоров'я і запізнення", "Здоровье и опоздание", "Sağlamlıq və gecikmə", "Salud y retraso", "Kalusugan at late", "Kesehatan dan terlambat", "स्वास्थ्य र ढिलो") },
  { id: "warehouse", tone: "yellow", icon: "warehouse", title: tx("Magazyn", "Warehouse", "Склад", "Склад", "Anbar", "Almacén", "Bodega", "Gudang", "गोदाम") },
  { id: "documents", tone: "blue", icon: "document", title: tx("Dokumenty, urząd i bank", "Documents, office and bank", "Документи, установа і банк", "Документы, учреждение и банк", "Sənədlər, idarə və bank", "Documentos, oficina y banco", "Dokumento, opisina at bangko", "Dokumen, kantor dan bank", "कागजात, कार्यालय र बैंक") },
  { id: "safety", tone: "red", icon: "ban", title: tx("Zasady i bezpieczeństwo", "Rules and safety", "Правила і безпека", "Правила и безопасность", "Qaydalar və təhlükəsizlik", "Reglas y seguridad", "Mga patakaran at kaligtasan", "Aturan dan keselamatan", "नियम र सुरक्षा") },
  { id: "homeLife", tone: "yellow", icon: "city", title: tx("Mieszkanie i życie", "Housing and daily life", "Житло і життя", "Жильё и жизнь", "Yaşayış və gündəlik həyat", "Vivienda y vida diaria", "Tirahan at araw-araw", "Tempat tinggal dan hidup harian", "बसोबास र दैनिक जीवन") },
  { id: "shopping", tone: "green", icon: "food", title: tx("Sklep, bilet, telefon", "Shop, ticket, phone", "Магазин, квиток, телефон", "Магазин, билет, телефон", "Mağaza, bilet, telefon", "Tienda, billete, teléfono", "Tindahan, ticket, telepono", "Toko, tiket, telepon", "पसल, टिकट, फोन") }
];

const speechPhrase = (group, polish, en, ua, ru, az, es, fil, id, ne) => ({ group, say: polish, label: tx(polish, en, ua, ru, az, es, fil, id, ne) });

window.CX_DATA.speechPhrases = [
  speechPhrase("understand", "Nie rozumiem.", "I do not understand.", "Я не розумію.", "Я не понимаю.", "Başa düşmürəm.", "No entiendo.", "Hindi ko maintindihan.", "Saya tidak mengerti.", "मैले बुझिनँ।"),
  speechPhrase("understand", "Proszę powiedzieć wolniej.", "Please speak more slowly.", "Будь ласка, говоріть повільніше.", "Пожалуйста, говорите медленнее.", "Zəhmət olmasa daha yavaş deyin.", "Por favor, hable más despacio.", "Pakisabi nang mas mabagal.", "Tolong bicara lebih pelan.", "कृपया बिस्तारै भन्नुहोस्।"),
  speechPhrase("understand", "Proszę pokazać jeszcze raz.", "Please show me one more time.", "Будь ласка, покажіть ще раз.", "Пожалуйста, покажите ещё раз.", "Zəhmət olmasa bir dəfə də göstərin.", "Por favor, muéstreme otra vez.", "Pakipakita ulit.", "Tolong tunjukkan sekali lagi.", "कृपया फेरि देखाउनुहोस्।"),
  speechPhrase("understand", "Proszę powtórzyć.", "Please repeat.", "Будь ласка, повторіть.", "Пожалуйста, повторите.", "Zəhmət olmasa təkrar edin.", "Por favor, repita.", "Pakiulit.", "Tolong ulangi.", "कृपया दोहोर्याउनुहोस्।"),
  speechPhrase("understand", "Proszę napisać mi to w wiadomości.", "Please write it to me in a message.", "Будь ласка, напишіть мені це в повідомленні.", "Пожалуйста, напишите мне это в сообщении.", "Zəhmət olmasa bunu mənə mesajda yazın.", "Por favor, escríbamelo en un mensaje.", "Pakisulat ito sa mensahe.", "Tolong tuliskan ini di pesan.", "कृपया यो मलाई सन्देशमा लेख्नुहोस्।"),
  speechPhrase("understand", "Proszę pokazać ręką, gdzie mam iść.", "Please show with your hand where I should go.", "Будь ласка, покажіть рукою, куди мені йти.", "Пожалуйста, покажите рукой, куда мне идти.", "Zəhmət olmasa əlinizlə hara getməli olduğumu göstərin.", "Por favor, indíqueme con la mano dónde debo ir.", "Pakitudlo gamit ang kamay kung saan ako pupunta.", "Tolong tunjukkan dengan tangan saya harus ke mana.", "कृपया हातले देखाउनुहोस् म कहाँ जानु।"),

  speechPhrase("place", "Gdzie mam iść?", "Where should I go?", "Куди мені йти?", "Куда мне идти?", "Hara getməliyəm?", "¿Dónde debo ir?", "Saan ako pupunta?", "Saya harus ke mana?", "म कहाँ जानु?"),
  speechPhrase("place", "Gdzie jest wejście?", "Where is the entrance?", "Де вхід?", "Где вход?", "Giriş haradadır?", "¿Dónde está la entrada?", "Nasaan ang pasukan?", "Di mana pintu masuk?", "प्रवेश कहाँ छ?"),
  speechPhrase("place", "Gdzie jest biuro?", "Where is the office?", "Де офіс?", "Где офис?", "Ofis haradadır?", "¿Dónde está la oficina?", "Nasaan ang opisina?", "Di mana kantor?", "कार्यालय कहाँ छ?"),
  speechPhrase("place", "Gdzie mam czekać?", "Where should I wait?", "Де мені чекати?", "Где мне ждать?", "Harada gözləməliyəm?", "¿Dónde debo esperar?", "Saan ako maghihintay?", "Saya harus menunggu di mana?", "म कहाँ कुर्नु?"),
  speechPhrase("place", "Szukam brygadzisty.", "I am looking for the brigadier.", "Я шукаю бригадира.", "Я ищу бригадира.", "Briqadiri axtarıram.", "Busco al encargado.", "Hinahanap ko ang brigadier.", "Saya mencari mandor.", "म ब्रिगेडियर खोज्दैछु।"),
  speechPhrase("place", "Czy to jest moja grupa?", "Is this my group?", "Це моя група?", "Это моя группа?", "Bu mənim qrupumdur?", "¿Este es mi grupo?", "Ito ba ang grupo ko?", "Apakah ini grup saya?", "यो मेरो समूह हो?"),
  speechPhrase("place", "Gdzie jest moja szklarnia?", "Where is my greenhouse?", "Де моя теплиця?", "Где моя теплица?", "Mənim istixanam haradadır?", "¿Dónde está mi invernadero?", "Nasaan ang greenhouse ko?", "Di mana rumah kaca saya?", "मेरो ग्रीनहाउस कहाँ छ?"),
  speechPhrase("place", "Gdzie jest magazyn?", "Where is the warehouse?", "Де склад?", "Где склад?", "Anbar haradadır?", "¿Dónde está el almacén?", "Nasaan ang bodega?", "Di mana gudang?", "गोदाम कहाँ छ?"),
  speechPhrase("place", "Gdzie jest stary magazyn?", "Where is the old warehouse?", "Де старий склад?", "Где старый склад?", "Köhnə anbar haradadır?", "¿Dónde está el almacén antiguo?", "Nasaan ang lumang bodega?", "Di mana gudang lama?", "पुरानो गोदाम कहाँ छ?"),

  speechPhrase("greenhouse", "Do której nawy mam iść?", "Which nave should I go to?", "До якої нави мені йти?", "В какую наву мне идти?", "Hansı navaya getməliyəm?", "¿A qué nave debo ir?", "Saang nave ako pupunta?", "Saya harus ke nave yang mana?", "म कुन नावामा जानु?"),
  speechPhrase("greenhouse", "Nie wiem, jaka to nawa.", "I do not know which nave this is.", "Я не знаю, яка це нава.", "Я не знаю, какая это нава.", "Bunun hansı nava olduğunu bilmirəm.", "No sé qué nave es.", "Hindi ko alam kung anong nave ito.", "Saya tidak tahu ini nave yang mana.", "मलाई थाहा छैन यो कुन नावा हो।"),
  speechPhrase("greenhouse", "Nie wiem, jaki to rząd.", "I do not know which row this is.", "Я не знаю, який це ряд.", "Я не знаю, какой это ряд.", "Bunun hansı sıra olduğunu bilmirəm.", "No sé qué fila es.", "Hindi ko alam kung anong row ito.", "Saya tidak tahu ini baris yang mana.", "मलाई थाहा छैन यो कुन लाइन हो।"),
  speechPhrase("greenhouse", "Nie wiem, które to przęsło.", "I do not know which section this is.", "Я не знаю, яка це секція.", "Я не знаю, какая это секция.", "Bunun hansı bölmə olduğunu bilmirəm.", "No sé qué sección es.", "Hindi ko alam kung anong section ito.", "Saya tidak tahu ini bagian yang mana.", "मलाई थाहा छैन यो कुन सेक्सन हो।"),
  speechPhrase("greenhouse", "Gdzie jest lewa strona?", "Where is the left side?", "Де ліва сторона?", "Где левая сторона?", "Sol tərəf haradadır?", "¿Dónde está el lado izquierdo?", "Nasaan ang kaliwang bahagi?", "Di mana sisi kiri?", "बायाँ साइड कहाँ छ?"),
  speechPhrase("greenhouse", "Gdzie jest prawa strona?", "Where is the right side?", "Де права сторона?", "Где правая сторона?", "Sağ tərəf haradadır?", "¿Dónde está el lado derecho?", "Nasaan ang kanang bahagi?", "Di mana sisi kanan?", "दायाँ साइड कहाँ छ?"),
  speechPhrase("greenhouse", "Skończyłem rząd.", "I finished the row.", "Я закінчив ряд.", "Я закончил ряд.", "Sıranı bitirdim.", "Terminé la fila.", "Natapos ko ang row.", "Saya sudah selesai baris.", "मैले लाइन सकेँ।"),
  speechPhrase("greenhouse", "Nie skończyłem rzędu.", "I did not finish the row.", "Я не закінчив ряд.", "Я не закончил ряд.", "Sıranı bitirməmişəm.", "No terminé la fila.", "Hindi ko natapos ang row.", "Saya belum selesai baris.", "मैले लाइन सकेको छैन।"),
  speechPhrase("greenhouse", "Potrzebuję nowego zadania.", "I need a new task.", "Мені потрібне нове завдання.", "Мне нужно новое задание.", "Mənə yeni tapşırıq lazımdır.", "Necesito una nueva tarea.", "Kailangan ko ng bagong gawain.", "Saya butuh tugas baru.", "मलाई नयाँ काम चाहिन्छ।"),

  speechPhrase("equipment", "Reader nie działa.", "The reader does not work.", "Рідер не працює.", "Ридер не работает.", "Reader işləmir.", "El reader no funciona.", "Hindi gumagana ang reader.", "Reader tidak berfungsi.", "reader चलेन।"),
  speechPhrase("equipment", "Tablet nie działa.", "The tablet does not work.", "Планшет не працює.", "Планшет не работает.", "Tablet işləmir.", "La tablet no funciona.", "Hindi gumagana ang tablet.", "Tablet tidak berfungsi.", "tablet चलेन।"),
  speechPhrase("equipment", "Nie mogę się zalogować.", "I cannot log in.", "Я не можу увійти.", "Я не могу войти.", "Daxil ola bilmirəm.", "No puedo iniciar sesión.", "Hindi ako maka-login.", "Saya tidak bisa login.", "म login गर्न सक्दिनँ।"),
  speechPhrase("equipment", "Nie wiem, jaki tag odbić.", "I do not know which tag to scan.", "Я не знаю, який тег відбити.", "Я не знаю, какой тег отметить.", "Hansı tagı vurmalı olduğumu bilmirəm.", "No sé qué tag marcar.", "Hindi ko alam kung aling tag ang i-scan.", "Saya tidak tahu tag mana yang harus discan.", "कुन tag स्क्यान गर्ने थाहा छैन।"),
  speechPhrase("equipment", "Zapomniałem odbić tag.", "I forgot to scan the tag.", "Я забув відбити тег.", "Я забыл отметить тег.", "Tag vurmağı unutdum.", "Olvidé marcar el tag.", "Nakalimutan kong i-scan ang tag.", "Saya lupa scan tag.", "मैले tag स्क्यान गर्न बिर्सिएँ।"),
  speechPhrase("equipment", "Gdzie mam odłożyć reader?", "Where should I put the reader back?", "Куди покласти рідер?", "Куда положить ридер?", "Reader-i hara qoymalıyam?", "¿Dónde debo dejar el reader?", "Saan ko ibabalik ang reader?", "Reader harus saya taruh di mana?", "reader कहाँ राख्नु?"),
  speechPhrase("equipment", "Nie mam internetu w telefonie.", "I do not have internet on my phone.", "У мене немає інтернету в телефоні.", "У меня нет интернета в телефоне.", "Telefonumda internet yoxdur.", "No tengo internet en el teléfono.", "Wala akong internet sa telepono.", "Saya tidak punya internet di telepon.", "मेरो फोनमा इन्टरनेट छैन।"),
  speechPhrase("equipment", "Nie widzę mojego nazwiska na tablecie.", "I cannot see my surname on the tablet.", "Я не бачу свого прізвища на планшеті.", "Я не вижу свою фамилию на планшете.", "Planşetdə soyadımı görmürəm.", "No veo mi apellido en la tablet.", "Hindi ko makita ang apelyido ko sa tablet.", "Saya tidak melihat nama saya di tablet.", "tablet मा आफ्नो थर देखिनँ।"),
  speechPhrase("equipment", "Nie pamiętam PIN-u.", "I do not remember the PIN.", "Я не пам'ятаю PIN.", "Я не помню PIN.", "PIN-i xatırlamıram.", "No recuerdo el PIN.", "Hindi ko maalala ang PIN.", "Saya tidak ingat PIN.", "मलाई PIN याद छैन।"),
  speechPhrase("equipment", "Tablet pokazuje błąd.", "The tablet shows an error.", "Планшет показує помилку.", "Планшет показывает ошибку.", "Planşet xəta göstərir.", "La tablet muestra un error.", "May error ang tablet.", "Tablet menampilkan error.", "tablet ले त्रुटि देखाउँछ।"),
  speechPhrase("equipment", "Czy mam wybrać tę czynność?", "Should I choose this activity?", "Чи маю вибрати цю дію?", "Мне выбрать эту деятельность?", "Bu fəaliyyəti seçməliyəm?", "¿Debo elegir esta actividad?", "Ito ba ang pipiliin kong activity?", "Apakah saya harus memilih aktivitas ini?", "के मैले यो गतिविधि छान्ने?"),

  speechPhrase("break", "Idę na przerwę.", "I am going on break.", "Я йду на перерву.", "Я иду на перерыв.", "Fasiləyə gedirəm.", "Voy a la pausa.", "Magbe-break ako.", "Saya pergi istirahat.", "म ब्रेकमा जाँदैछु।"),
  speechPhrase("break", "Wracam z przerwy.", "I am coming back from break.", "Я повертаюся з перерви.", "Я возвращаюсь с перерыва.", "Fasilədən qayıdıram.", "Vuelvo de la pausa.", "Babalik ako mula sa break.", "Saya kembali dari istirahat.", "म ब्रेकबाट फर्किँदैछु।"),
  speechPhrase("break", "Kończę pracę.", "I am finishing work.", "Я закінчую роботу.", "Я заканчиваю работу.", "İşi bitirirəm.", "Termino el trabajo.", "Tatapusin ko ang trabaho.", "Saya selesai kerja.", "म काम सक्दैछु।"),
  speechPhrase("break", "Gdzie jest socjal?", "Where is the social room?", "Де соціал?", "Где социал?", "Sosial otaq haradadır?", "¿Dónde está la sala social?", "Nasaan ang social room?", "Di mana ruang sosial?", "सोसियल कहाँ छ?"),
  speechPhrase("break", "Gdzie jest toaleta?", "Where is the toilet?", "Де туалет?", "Где туалет?", "Tualet haradadır?", "¿Dónde está el baño?", "Nasaan ang banyo?", "Di mana toilet?", "शौचालय कहाँ छ?"),
  speechPhrase("break", "Potrzebuję wody.", "I need water.", "Мені потрібна вода.", "Мне нужна вода.", "Mənə su lazımdır.", "Necesito agua.", "Kailangan ko ng tubig.", "Saya butuh air.", "मलाई पानी चाहिन्छ।"),
  speechPhrase("break", "Potrzebuję rękawiczek.", "I need gloves.", "Мені потрібні рукавички.", "Мне нужны перчатки.", "Mənə əlcək lazımdır.", "Necesito guantes.", "Kailangan ko ng guwantes.", "Saya butuh sarung tangan.", "मलाई पञ्जा चाहिन्छ।"),

  speechPhrase("health", "Spóźnię się.", "I will be late.", "Я запізнюся.", "Я опоздаю.", "Gecikəcəyəm.", "Llegaré tarde.", "Male-late ako.", "Saya akan terlambat.", "म ढिलो हुनेछु।"),
  speechPhrase("health", "Jestem chory.", "I am sick.", "Я хворий.", "Я болею.", "Xəstəyəm.", "Estoy enfermo.", "May sakit ako.", "Saya sakit.", "म बिरामी छु।"),
  speechPhrase("health", "Źle się czuję.", "I feel unwell.", "Я погано себе почуваю.", "Мне плохо.", "Özümü pis hiss edirəm.", "Me siento mal.", "Masama ang pakiramdam ko.", "Saya merasa tidak enak badan.", "मलाई सन्चो छैन।"),
  speechPhrase("health", "Potrzebuję lekarza.", "I need a doctor.", "Мені потрібен лікар.", "Мне нужен врач.", "Mənə həkim lazımdır.", "Necesito un médico.", "Kailangan ko ng doktor.", "Saya butuh dokter.", "मलाई डाक्टर चाहिन्छ।"),
  speechPhrase("health", "Boli mnie głowa.", "My head hurts.", "У мене болить голова.", "У меня болит голова.", "Başım ağrıyır.", "Me duele la cabeza.", "Masakit ang ulo ko.", "Kepala saya sakit.", "मेरो टाउको दुख्छ।"),
  speechPhrase("health", "Boli mnie brzuch.", "My stomach hurts.", "У мене болить живіт.", "У меня болит живот.", "Qarnım ağrıyır.", "Me duele el estómago.", "Masakit ang tiyan ko.", "Perut saya sakit.", "मेरो पेट दुख्छ।"),
  speechPhrase("health", "Potrzebuję pomocy.", "I need help.", "Мені потрібна допомога.", "Мне нужна помощь.", "Mənə kömək lazımdır.", "Necesito ayuda.", "Kailangan ko ng tulong.", "Saya butuh bantuan.", "मलाई सहयोग चाहिन्छ।"),
  speechPhrase("health", "Muszę zadzwonić do brygadzisty.", "I need to call the brigadier.", "Мені треба подзвонити бригадиру.", "Мне нужно позвонить бригадиру.", "Briqadirə zəng etməliyəm.", "Necesito llamar al encargado.", "Kailangan kong tumawag sa brigadier.", "Saya perlu menelepon mandor.", "मलाई ब्रिगेडियरलाई फोन गर्नुपर्छ।"),

  speechPhrase("warehouse", "Pracuję na magazynie.", "I work in the warehouse.", "Я працюю на складі.", "Я работаю на складе.", "Mən anbarda işləyirəm.", "Trabajo en el almacén.", "Nagtatrabaho ako sa bodega.", "Saya bekerja di gudang.", "म गोदाममा काम गर्छु।"),
  speechPhrase("warehouse", "Szukam wejścia do magazynu.", "I am looking for the warehouse entrance.", "Я шукаю вхід до складу.", "Я ищу вход на склад.", "Anbar girişini axtarıram.", "Busco la entrada del almacén.", "Hinahanap ko ang pasukan ng bodega.", "Saya mencari pintu masuk gudang.", "म गोदामको प्रवेश खोज्दैछु।"),
  speechPhrase("warehouse", "Szukam starego magazynu.", "I am looking for the old warehouse.", "Я шукаю старий склад.", "Я ищу старый склад.", "Köhnə anbarı axtarıram.", "Busco el almacén antiguo.", "Hinahanap ko ang lumang bodega.", "Saya mencari gudang lama.", "म पुरानो गोदाम खोज्दैछु।"),
  speechPhrase("warehouse", "Nie wiem, gdzie mam iść na magazynie.", "I do not know where to go in the warehouse.", "Я не знаю, куди йти на складі.", "Я не знаю, куда идти на складе.", "Anbarda hara getməli olduğumu bilmirəm.", "No sé adónde ir en el almacén.", "Hindi ko alam saan pupunta sa bodega.", "Saya tidak tahu harus ke mana di gudang.", "गोदाममा कहाँ जानु थाहा छैन।"),
  speechPhrase("warehouse", "Gdzie mam zostawić rzeczy?", "Where should I leave my things?", "Де мені залишити речі?", "Где мне оставить вещи?", "Əşyalarımı harada qoymalıyam?", "¿Dónde debo dejar mis cosas?", "Saan ko iiwan ang gamit ko?", "Barang saya harus ditaruh di mana?", "मेरा सामान कहाँ राख्नु?"),
  speechPhrase("warehouse", "Mam problem z zadaniem.", "I have a problem with the task.", "У мене проблема із завданням.", "У меня проблема с заданием.", "Tapşırıqla bağlı problemim var.", "Tengo un problema con la tarea.", "May problema ako sa gawain.", "Saya punya masalah dengan tugas.", "मलाई काममा समस्या छ।"),
  speechPhrase("warehouse", "Potrzebuję pomocy brygadzisty magazynu.", "I need help from the warehouse brigadier.", "Мені потрібна допомога бригадира складу.", "Мне нужна помощь бригадира склада.", "Anbar briqadirinin köməyinə ehtiyacım var.", "Necesito ayuda del encargado del almacén.", "Kailangan ko ng tulong ng brigadier ng bodega.", "Saya butuh bantuan mandor gudang.", "मलाई गोदाम ब्रिगेडियरको सहयोग चाहिन्छ।"),
  speechPhrase("warehouse", "To jest mój pierwszy dzień na magazynie.", "This is my first day in the warehouse.", "Це мій перший день на складі.", "Это мой первый день на складе.", "Bu anbarda birinci günümdür.", "Es mi primer día en el almacén.", "Unang araw ko ito sa bodega.", "Ini hari pertama saya di gudang.", "यो गोदाममा मेरो पहिलो दिन हो।"),
  speechPhrase("warehouse", "Proszę pokazać moje stanowisko.", "Please show me my work station.", "Будь ласка, покажіть моє робоче місце.", "Пожалуйста, покажите мое рабочее место.", "Zəhmət olmasa iş yerimi göstərin.", "Por favor, muéstreme mi puesto.", "Pakipakita ang puwesto ko.", "Tolong tunjukkan tempat kerja saya.", "कृपया मेरो काम गर्ने ठाउँ देखाउनुहोस्।"),
  speechPhrase("warehouse", "Nie wiem, gdzie jest wejście dla personelu.", "I do not know where the staff entrance is.", "Я не знаю, де вхід для персоналу.", "Я не знаю, где вход для персонала.", "Personal girişinin harada olduğunu bilmirəm.", "No sé dónde está la entrada del personal.", "Hindi ko alam nasaan ang staff entrance.", "Saya tidak tahu pintu masuk staf di mana.", "कर्मचारी प्रवेश कहाँ छ थाहा छैन।"),
  speechPhrase("warehouse", "Czy mam iść do nowego czy starego magazynu?", "Should I go to the new or old warehouse?", "Мені йти на новий чи старий склад?", "Мне идти на новый или старый склад?", "Yeni anbara, yoxsa köhnə anbara getməliyəm?", "¿Debo ir al almacén nuevo o antiguo?", "Sa bagong bodega ba o lumang bodega ako pupunta?", "Saya harus ke gudang baru atau lama?", "नयाँ गोदाम कि पुरानो गोदाम जानु?"),

  speechPhrase("contacts", "Proszę zadzwonić do mnie.", "Please call me.", "Будь ласка, подзвоніть мені.", "Пожалуйста, позвоните мне.", "Zəhmət olmasa mənə zəng edin.", "Por favor, llámeme.", "Pakisawagan ako.", "Tolong telepon saya.", "कृपया मलाई फोन गर्नुहोस्।"),
  speechPhrase("contacts", "Proszę wysłać mi lokalizację.", "Please send me the location.", "Будь ласка, надішліть мені локацію.", "Пожалуйста, отправьте мне локацию.", "Zəhmət olmasa mənə lokasiya göndərin.", "Por favor, envíeme la ubicación.", "Pakipadala sa akin ang lokasyon.", "Tolong kirim lokasi kepada saya.", "कृपया मलाई लोकेसन पठाउनुहोस्।"),
  speechPhrase("contacts", "Napiszę na WhatsApp.", "I will write on WhatsApp.", "Я напишу у WhatsApp.", "Я напишу в WhatsApp.", "WhatsApp-da yazacağam.", "Escribiré por WhatsApp.", "Magsusulat ako sa WhatsApp.", "Saya akan menulis di WhatsApp.", "म WhatsApp मा लेख्छु।"),
  speechPhrase("contacts", "Nie mam numeru brygadzisty.", "I do not have the brigadier's number.", "У мене немає номера бригадира.", "У меня нет номера бригадира.", "Briqadirin nömrəsi məndə yoxdur.", "No tengo el número del encargado.", "Wala akong numero ng brigadier.", "Saya tidak punya nomor mandor.", "मसँग ब्रिगेडियरको नम्बर छैन।"),
  speechPhrase("contacts", "Kto jest moim brygadzistą?", "Who is my brigadier?", "Хто мій бригадир?", "Кто мой бригадир?", "Mənim briqadirim kimdir?", "¿Quién es mi encargado?", "Sino ang brigadier ko?", "Siapa mandor saya?", "मेरो ब्रिगेडियर को हो?"),
  speechPhrase("contacts", "Proszę sprawdzić moją wiadomość.", "Please check my message.", "Будь ласка, перевірте моє повідомлення.", "Пожалуйста, проверьте моё сообщение.", "Zəhmət olmasa mesajımı yoxlayın.", "Por favor, revise mi mensaje.", "Pakitingnan ang mensahe ko.", "Tolong cek pesan saya.", "कृपया मेरो सन्देश हेर्नुहोस्।"),
  speechPhrase("contacts", "Czy może mi Pan/Pani pomóc zadzwonić?", "Can you help me make a call?", "Чи можете допомогти мені подзвонити?", "Можете помочь мне позвонить?", "Mənə zəng etməyə kömək edə bilərsiniz?", "¿Puede ayudarme a llamar?", "Maaari mo ba akong tulungang tumawag?", "Bisakah Anda membantu saya menelepon?", "के तपाईं मलाई फोन गर्न मद्दत गर्न सक्नुहुन्छ?"),
  speechPhrase("contacts", "Proszę mówić po polsku bardzo prosto.", "Please speak very simple Polish.", "Будь ласка, говоріть польською дуже просто.", "Пожалуйста, говорите по-польски очень просто.", "Zəhmət olmasa polyakca çox sadə danışın.", "Por favor, hable polaco muy sencillo.", "Pakisabi sa napakasimpleng Polish.", "Tolong bicara bahasa Polandia sangat sederhana.", "कृपया धेरै सरल पोलिस बोल्नुहोस्।"),

  speechPhrase("transport", "Nie wiem, gdzie wysiąść.", "I do not know where to get off.", "Я не знаю, де вийти.", "Я не знаю, где выйти.", "Harada düşməli olduğumu bilmirəm.", "No sé dónde bajarme.", "Hindi ko alam saan bababa.", "Saya tidak tahu harus turun di mana.", "म कहाँ ओर्लनु थाहा छैन।"),
  speechPhrase("transport", "Czy to jest dobry autobus?", "Is this the correct bus?", "Це правильний автобус?", "Это правильный автобус?", "Bu düzgün avtobusdur?", "¿Este es el autobús correcto?", "Ito ba ang tamang bus?", "Apakah ini bus yang benar?", "यो सही बस हो?"),
  speechPhrase("transport", "Potrzebuję trasy w Google Maps.", "I need the route in Google Maps.", "Мені потрібен маршрут у Google Maps.", "Мне нужен маршрут в Google Maps.", "Mənə Google Maps-də marşrut lazımdır.", "Necesito la ruta en Google Maps.", "Kailangan ko ng ruta sa Google Maps.", "Saya butuh rute di Google Maps.", "मलाई Google Maps मा बाटो चाहिन्छ।"),
  speechPhrase("transport", "Jestem przy wejściu.", "I am at the entrance.", "Я біля входу.", "Я у входа.", "Girişin yanındayam.", "Estoy en la entrada.", "Nasa pasukan ako.", "Saya di pintu masuk.", "म प्रवेशद्वारमा छु।"),
  speechPhrase("transport", "Jestem przy bramie.", "I am at the gate.", "Я біля воріт.", "Я у ворот.", "Darvazanın yanındayam.", "Estoy en la puerta.", "Nasa gate ako.", "Saya di gerbang.", "म गेटमा छु।"),
  speechPhrase("transport", "Zgubiłem się.", "I got lost.", "Я заблукав.", "Я потерялся.", "Yolu itirmişəm.", "Me perdí.", "Naliligaw ako.", "Saya tersesat.", "म बाटो हराएँ।"),
  speechPhrase("transport", "Proszę wysłać dokładny adres.", "Please send the exact address.", "Будь ласка, надішліть точну адресу.", "Пожалуйста, отправьте точный адрес.", "Zəhmət olmasa dəqiq ünvanı göndərin.", "Por favor, envíe la dirección exacta.", "Pakipadala ang eksaktong address.", "Tolong kirim alamat yang tepat.", "कृपया सही ठेगाना पठाउनुहोस्।"),
  speechPhrase("transport", "Czy mam iść pieszo czy czekać?", "Should I walk or wait?", "Мені йти пішки чи чекати?", "Мне идти пешком или ждать?", "Piyada getməliyəm, yoxsa gözləməliyəm?", "¿Debo caminar o esperar?", "Maglalakad ba ako o maghihintay?", "Saya harus jalan kaki atau menunggu?", "म पैदल जानु कि कुर्नु?"),

  speechPhrase("documents", "Potrzebuję numeru PESEL.", "I need a PESEL number.", "Мені потрібен номер PESEL.", "Мне нужен номер PESEL.", "Mənə PESEL nömrəsi lazımdır.", "Necesito número PESEL.", "Kailangan ko ng PESEL number.", "Saya butuh nomor PESEL.", "मलाई PESEL नम्बर चाहिन्छ।"),
  speechPhrase("documents", "Mam sprawę w urzędzie.", "I have a matter at the office.", "У мене справа в установі.", "У меня дело в учреждении.", "İdarədə işim var.", "Tengo un trámite en la oficina.", "May aasikasuhin ako sa opisina.", "Saya ada urusan di kantor.", "मेरो कार्यालयमा काम छ।"),
  speechPhrase("documents", "Chcę zapytać o kartę pobytu.", "I want to ask about the residence card.", "Я хочу запитати про карту побиту.", "Я хочу спросить о карте побыту.", "Yaşayış kartı haqqında soruşmaq istəyirəm.", "Quiero preguntar por la tarjeta de residencia.", "Gusto kong magtanong tungkol sa residence card.", "Saya ingin bertanya tentang kartu tinggal.", "म residence card बारे सोध्न चाहन्छु।"),
  speechPhrase("documents", "Gdzie jest urząd?", "Where is the office?", "Де установа?", "Где учреждение?", "İdarə haradadır?", "¿Dónde está la oficina?", "Nasaan ang opisina?", "Di mana kantor?", "कार्यालय कहाँ छ?"),
  speechPhrase("documents", "Potrzebuję pomocy z bankiem.", "I need help with the bank.", "Мені потрібна допомога з банком.", "Мне нужна помощь с банком.", "Bankla bağlı köməyə ehtiyacım var.", "Necesito ayuda con el banco.", "Kailangan ko ng tulong sa bangko.", "Saya butuh bantuan dengan bank.", "मलाई बैंकको लागि सहयोग चाहिन्छ।"),
  speechPhrase("documents", "Chcę otworzyć konto bankowe.", "I want to open a bank account.", "Я хочу відкрити банківський рахунок.", "Я хочу открыть банковский счёт.", "Bank hesabı açmaq istəyirəm.", "Quiero abrir una cuenta bancaria.", "Gusto kong magbukas ng bank account.", "Saya ingin membuka rekening bank.", "म बैंक खाता खोल्न चाहन्छु।"),
  speechPhrase("documents", "Gdzie jest bankomat?", "Where is an ATM?", "Де банкомат?", "Где банкомат?", "Bankomat haradadır?", "¿Dónde hay un cajero automático?", "Nasaan ang ATM?", "Di mana ATM?", "ATM कहाँ छ?"),
  speechPhrase("documents", "Nie rozumiem tego dokumentu.", "I do not understand this document.", "Я не розумію цей документ.", "Я не понимаю этот документ.", "Bu sənədi başa düşmürəm.", "No entiendo este documento.", "Hindi ko naiintindihan ang dokumentong ito.", "Saya tidak mengerti dokumen ini.", "मैले यो कागजात बुझिनँ।"),
  speechPhrase("documents", "Zgubiłem paszport.", "I lost my passport.", "Я загубив паспорт.", "Я потерял паспорт.", "Pasportumu itirmişəm.", "Perdí mi pasaporte.", "Nawala ang pasaporte ko.", "Saya kehilangan paspor.", "मेरो पासपोर्ट हरायो।"),

  speechPhrase("safety", "Czy mogę tu wejść?", "Can I enter here?", "Чи можна мені сюди зайти?", "Можно мне сюда войти?", "Buraya girə bilərəm?", "¿Puedo entrar aquí?", "Maaari ba akong pumasok dito?", "Bolehkah saya masuk di sini?", "के म यहाँ जान सक्छु?"),
  speechPhrase("safety", "Czy to jest bezpieczne?", "Is this safe?", "Це безпечно?", "Это безопасно?", "Bu təhlükəsizdir?", "¿Esto es seguro?", "Ligtas ba ito?", "Apakah ini aman?", "यो सुरक्षित हो?"),
  speechPhrase("safety", "Nie mam rękawiczek.", "I do not have gloves.", "У мене немає рукавичок.", "У меня нет перчаток.", "Əlcəyim yoxdur.", "No tengo guantes.", "Wala akong guwantes.", "Saya tidak punya sarung tangan.", "मसँग पञ्जा छैन।"),
  speechPhrase("safety", "Zauważyłem problem.", "I noticed a problem.", "Я помітив проблему.", "Я заметил проблему.", "Problem gördüm.", "Noté un problema.", "May napansin akong problema.", "Saya melihat masalah.", "मैले समस्या देखेँ।"),
  speechPhrase("safety", "Coś się zepsuło.", "Something broke.", "Щось зламалося.", "Что-то сломалось.", "Nəsə xarab oldu.", "Algo se rompió.", "May nasira.", "Ada yang rusak.", "केही बिग्रियो।"),
  speechPhrase("safety", "Potrzebuję przełożonego.", "I need a supervisor.", "Мені потрібен керівник.", "Мне нужен руководитель.", "Mənə rəhbər lazımdır.", "Necesito un supervisor.", "Kailangan ko ng supervisor.", "Saya butuh atasan.", "मलाई सुपरभाइजर चाहिन्छ।"),
  speechPhrase("safety", "Nie wiem, czy to jest dozwolone.", "I do not know if this is allowed.", "Я не знаю, чи це дозволено.", "Я не знаю, разрешено ли это.", "Bunun icazəli olub-olmadığını bilmirəm.", "No sé si esto está permitido.", "Hindi ko alam kung pwede ito.", "Saya tidak tahu apakah ini diperbolehkan.", "यो अनुमति छ कि छैन थाहा छैन।"),
  speechPhrase("safety", "Proszę pokazać zasady.", "Please show me the rules.", "Будь ласка, покажіть правила.", "Пожалуйста, покажите правила.", "Zəhmət olmasa qaydaları göstərin.", "Por favor, muéstreme las reglas.", "Pakipakita ang mga patakaran.", "Tolong tunjukkan aturan.", "कृपया नियम देखाउनुहोस्।"),
  speechPhrase("safety", "Mam rzecz zakazaną. Gdzie mogę ją zostawić?", "I have a forbidden item. Where can I leave it?", "У мене є заборонена річ. Де я можу її залишити?", "У меня есть запрещенная вещь. Где я могу ее оставить?", "Qadağan olunmuş əşyam var. Onu harada qoya bilərəm?", "Tengo una cosa prohibida. ¿Dónde puedo dejarla?", "May bawal akong gamit. Saan ko ito iiwan?", "Saya membawa barang terlarang. Di mana bisa ditinggalkan?", "मसँग निषेधित सामान छ। कहाँ छोड्न सक्छु?"),
  speechPhrase("safety", "Nie wiem, czy mogę wnieść tę rzecz.", "I do not know if I can bring this item in.", "Я не знаю, чи можу внести цю річ.", "Я не знаю, можно ли принести эту вещь.", "Bu əşyanı içəri gətirə biləcəyimi bilmirəm.", "No sé si puedo traer esta cosa.", "Hindi ko alam kung puwedeng dalhin ito.", "Saya tidak tahu apakah barang ini boleh dibawa masuk.", "यो सामान भित्र ल्याउन मिल्छ कि मिल्दैन थाहा छैन।"),
  speechPhrase("safety", "Proszę sprawdzić, czy dobrze rozumiem.", "Please check if I understand correctly.", "Будь ласка, перевірте, чи я правильно розумію.", "Пожалуйста, проверьте, правильно ли я понимаю.", "Zəhmət olmasa düzgün başa düşdüyümü yoxlayın.", "Por favor, compruebe si entiendo bien.", "Pakicheck kung tama ang pagkaintindi ko.", "Tolong cek apakah saya mengerti dengan benar.", "मैले सही बुझेँ कि भनेर जाँच्नुहोस्।"),

  speechPhrase("homeLife", "Gdzie jest mój pokój?", "Where is my room?", "Де моя кімната?", "Где моя комната?", "Mənim otağım haradadır?", "¿Dónde está mi habitación?", "Nasaan ang kuwarto ko?", "Di mana kamar saya?", "मेरो कोठा कहाँ छ?"),
  speechPhrase("homeLife", "Nie działa ogrzewanie.", "The heating does not work.", "Опалення не працює.", "Отопление не работает.", "İsitmə işləmir.", "La calefacción no funciona.", "Hindi gumagana ang heating.", "Pemanas tidak berfungsi.", "हिटर चलेन।"),
  speechPhrase("homeLife", "Nie działa prysznic.", "The shower does not work.", "Душ не працює.", "Душ не работает.", "Duş işləmir.", "La ducha no funciona.", "Hindi gumagana ang shower.", "Shower tidak berfungsi.", "नुहाउने ठाउँ चलेन।"),
  speechPhrase("homeLife", "Zgubiłem klucz.", "I lost the key.", "Я загубив ключ.", "Я потерял ключ.", "Açarı itirmişəm.", "Perdí la llave.", "Nawala ang susi ko.", "Saya kehilangan kunci.", "मेरो चाबी हरायो।"),
  speechPhrase("homeLife", "Potrzebuję pościeli.", "I need bedding.", "Мені потрібна постіль.", "Мне нужно постельное бельё.", "Mənə yataq dəsti lazımdır.", "Necesito ropa de cama.", "Kailangan ko ng bedding.", "Saya butuh perlengkapan tidur.", "मलाई ओछ्यानको सामान चाहिन्छ।"),
  speechPhrase("homeLife", "Mam problem w mieszkaniu.", "I have a problem in the accommodation.", "У мене проблема в житлі.", "У меня проблема в жилье.", "Yaşayış yerində problemim var.", "Tengo un problema en la vivienda.", "May problema ako sa tirahan.", "Saya punya masalah di tempat tinggal.", "बस्ने ठाउँमा समस्या छ।"),
  speechPhrase("homeLife", "Gdzie mogę zrobić zakupy?", "Where can I do shopping?", "Де я можу зробити покупки?", "Где я могу купить продукты?", "Harada alış-veriş edə bilərəm?", "¿Dónde puedo comprar?", "Saan ako puwedeng mamili?", "Di mana saya bisa belanja?", "म कहाँ किनमेल गर्न सक्छु?"),
  speechPhrase("homeLife", "Potrzebuję apteki.", "I need a pharmacy.", "Мені потрібна аптека.", "Мне нужна аптека.", "Mənə aptek lazımdır.", "Necesito una farmacia.", "Kailangan ko ng botika.", "Saya butuh apotek.", "मलाई फार्मेसी चाहिन्छ।"),

  speechPhrase("shopping", "Gdzie jest najbliższy sklep?", "Where is the nearest shop?", "Де найближчий магазин?", "Где ближайший магазин?", "Ən yaxın mağaza haradadır?", "¿Dónde está la tienda más cercana?", "Nasaan ang pinakamalapit na tindahan?", "Di mana toko terdekat?", "नजिकको पसल कहाँ छ?"),
  speechPhrase("shopping", "Czy mogę zapłacić kartą?", "Can I pay by card?", "Чи можна заплатити карткою?", "Можно заплатить картой?", "Kartla ödəyə bilərəm?", "¿Puedo pagar con tarjeta?", "Puwede ba akong magbayad gamit ang card?", "Bisakah saya bayar dengan kartu?", "के म कार्डले तिर्न सक्छु?"),
  speechPhrase("shopping", "Potrzebuję kupić bilet.", "I need to buy a ticket.", "Мені потрібно купити квиток.", "Мне нужно купить билет.", "Bilet almaq lazımdır.", "Necesito comprar un billete.", "Kailangan kong bumili ng ticket.", "Saya perlu membeli tiket.", "मलाई टिकट किन्नु छ।"),
  speechPhrase("shopping", "Gdzie kupić kartę SIM?", "Where can I buy a SIM card?", "Де купити SIM-карту?", "Где купить SIM-карту?", "SIM kartı haradan ala bilərəm?", "¿Dónde puedo comprar una tarjeta SIM?", "Saan makakabili ng SIM card?", "Di mana membeli kartu SIM?", "SIM कार्ड कहाँ किन्नु?"),
  speechPhrase("shopping", "Nie działa moja karta płatnicza.", "My payment card does not work.", "Моя платіжна картка не працює.", "Моя банковская карта не работает.", "Ödəniş kartım işləmir.", "Mi tarjeta de pago no funciona.", "Hindi gumagana ang payment card ko.", "Kartu pembayaran saya tidak berfungsi.", "मेरो भुक्तानी कार्ड चलेन।"),
  speechPhrase("shopping", "Potrzebuję doładować telefon.", "I need to top up my phone.", "Мені потрібно поповнити телефон.", "Мне нужно пополнить телефон.", "Telefonumu balansla doldurmalıyam.", "Necesito recargar el teléfono.", "Kailangan kong mag-load ng telepono.", "Saya perlu isi pulsa telepon.", "मलाई फोन रिचार्ज गर्नुपर्छ।"),
  speechPhrase("shopping", "Czy sklep jest dzisiaj otwarty?", "Is the shop open today?", "Магазин сьогодні відкритий?", "Магазин сегодня открыт?", "Mağaza bu gün açıqdır?", "¿La tienda está abierta hoy?", "Bukas ba ang tindahan ngayon?", "Apakah toko buka hari ini?", "पसल आज खुला छ?"),
  speechPhrase("shopping", "Proszę pokazać cenę.", "Please show me the price.", "Будь ласка, покажіть ціну.", "Пожалуйста, покажите цену.", "Zəhmət olmasa qiyməti göstərin.", "Por favor, muéstreme el precio.", "Pakipakita ang presyo.", "Tolong tunjukkan harganya.", "कृपया मूल्य देखाउनुहोस्।")
];

window.CX_DATA.pages.slownik = {
  title: tx("Słownik prostych słów", "Simple work words", "Словник простих слів", "Словарь простых слов", "Sadə iş sözləri", "Palabras simples del trabajo", "Simpleng salita sa trabaho", "Kata kerja sederhana", "सरल कामका शब्दहरू"),
  lead: tx("Krótko i praktycznie: polskie słowo, znaczenie w Twoim języku i przykład z pracy.", "Short and practical: Polish word, meaning in your language and a work example.", "Коротко і практично: польське слово, значення вашою мовою і приклад з роботи.", "Коротко и практично: польское слово, значение на вашем языке и пример с работы.", "Qısa və praktik: polyak sözü, öz dilinizdə məna və iş nümunəsi.", "Corto y práctico: palabra polaca, significado en tu idioma y ejemplo del trabajo.", "Maikli at praktikal: Polish na salita, kahulugan sa iyong wika at halimbawa sa trabaho.", "Singkat dan praktis: kata Polandia, arti dalam bahasa Anda dan contoh kerja.", "छोटो र उपयोगी: पोलिस शब्द, तपाईंको भाषामा अर्थ र कामको उदाहरण।")
};

window.CX_DATA.tiles.splice(
  window.CX_DATA.tiles.findIndex((tile) => tile.page === "zakazy"),
  0,
  {
    page: "slownik",
    tone: "blue",
    icon: "document",
    title: tx("Słownik", "Dictionary", "Словник", "Словарь", "Lüğət", "Diccionario", "Diksyunaryo", "Kamus", "शब्दकोश"),
    text: tx("Proste słowa z pracy: szklarnia, magazyn, reader, tablet, urząd.", "Simple work words: greenhouse, warehouse, reader, tablet, office.", "Прості слова з роботи: теплиця, склад, рідер, планшет, установа.", "Простые рабочие слова: теплица, склад, ридер, планшет, учреждение.", "Sadə iş sözləri: istixana, anbar, reader, planşet, idarə.", "Palabras simples: invernadero, almacén, reader, tablet, oficina.", "Simpleng salita: greenhouse, bodega, reader, tablet, opisina.", "Kata sederhana: rumah kaca, gudang, reader, tablet, kantor.", "सरल शब्दहरू: ग्रीनहाउस, गोदाम, reader, tablet, कार्यालय।")
  }
);

window.CX_DATA.glossaryGroups = [
  { id: "greenhouse", tone: "green", title: tx("Szklarnia", "Greenhouse", "Теплиця", "Теплица", "İstixana", "Invernadero", "Greenhouse", "Rumah kaca", "ग्रीनहाउस") },
  { id: "direction", tone: "blue", title: tx("Kierunki i orientacja", "Directions and orientation", "Напрямки і орієнтація", "Направления и ориентация", "İstiqamət və orientasiya", "Direcciones y orientación", "Direksyon at orientasyon", "Arah dan orientasi", "दिशा र बाटो") },
  { id: "device", tone: "yellow", title: tx("Sprzęt i rejestracja", "Equipment and registration", "Обладнання і реєстрація", "Оборудование и регистрация", "Avadanlıq və qeydiyyat", "Equipo y registro", "Kagamitan at rehistro", "Alat dan pencatatan", "सामान र दर्ता") },
  { id: "tablet", tone: "yellow", title: tx("Tablet i system", "Tablet and system", "Планшет і система", "Планшет и система", "Planşet və sistem", "Tablet y sistema", "Tablet at system", "Tablet dan sistem", "ट्याबलेट र सिस्टम") },
  { id: "people", tone: "blue", title: tx("Ludzie", "People", "Люди", "Люди", "İnsanlar", "Personas", "Mga tao", "Orang", "मानिसहरू") },
  { id: "place", tone: "blue", title: tx("Miejsca", "Places", "Місця", "Места", "Yerlər", "Lugares", "Mga lugar", "Tempat", "ठाउँहरू") },
  { id: "message", tone: "green", title: tx("Komunikaty w pracy", "Work messages", "Повідомлення на роботі", "Сообщения на работе", "İşdə mesajlar", "Mensajes en el trabajo", "Mga mensahe sa trabaho", "Pesan di kerja", "कामका सन्देशहरू") },
  { id: "documents", tone: "blue", title: tx("Dokumenty i miasto", "Documents and city", "Документи і місто", "Документы и город", "Sənədlər və şəhər", "Documentos y ciudad", "Dokumento at lungsod", "Dokumen dan kota", "कागजात र शहर") }
];

window.CX_DATA.glossary = [
  {
    group: "greenhouse",
    term: "nawa",
    local: tx("nawa / część szklarni", "nave / greenhouse section", "нава / частина теплиці", "нава / часть теплицы", "nava / istixana hissəsi", "nave / parte del invernadero", "nave / bahagi ng greenhouse", "nave / bagian rumah kaca", "नावा / ग्रीनहाउसको भाग"),
    meaning: tx("Duża część szklarni. W jednej nawie są wejścia i rzędy pracy.", "A large part of the greenhouse. One nave has entrances and work rows.", "Велика частина теплиці. В одній наві є входи і робочі ряди.", "Большая часть теплицы. В одной наве есть входы и рабочие ряды.", "İstixananın böyük hissəsi. Bir navada girişlər və iş sıraları var.", "Una parte grande del invernadero. En una nave hay entradas y filas de trabajo.", "Malaking bahagi ng greenhouse. Sa isang nave may mga pasukan at work rows.", "Bagian besar rumah kaca. Dalam satu nave ada pintu masuk dan baris kerja.", "ग्रीनहाउसको ठूलो भाग। एउटा नावामा प्रवेश र काम गर्ने लाइन हुन्छ।"),
    example: tx("Przykład: idziesz do nawy 12.", "Example: go to nave 12.", "Приклад: йдете до нави 12.", "Пример: идёте в наву 12.", "Məsələn: 12-ci navaya gedirsiniz.", "Ejemplo: vas a la nave 12.", "Halimbawa: pumunta sa nave 12.", "Contoh: pergi ke nave 12.", "उदाहरण: नावा 12 मा जानुहोस्।")
  },
  {
    group: "greenhouse",
    term: "rząd",
    local: tx("rząd / linia pracy", "row / work row", "ряд / робочий ряд", "ряд / рабочий ряд", "sıra / iş sırası", "fila / fila de trabajo", "row / hanay ng trabaho", "baris / baris kerja", "लाइन / काम गर्ने लाइन"),
    meaning: tx("Miejsce, w którym pracujesz przy roślinach. Praca jest w rzędzie, nie obok rzędu.", "The place where you work with plants. Work is in the row, not next to the row.", "Місце, де ви працюєте біля рослин. Робота в ряду, не біля ряду.", "Место, где вы работаете с растениями. Работа в ряду, не возле ряда.", "Bitkilərlə işlədiyiniz yer. İş sıranın içindədir, yanında deyil.", "Lugar donde trabajas con plantas. Se trabaja dentro de la fila, no al lado.", "Lugar kung saan nagtatrabaho sa halaman. Ang trabaho ay sa loob ng row, hindi sa tabi.", "Tempat bekerja dengan tanaman. Kerja di dalam baris, bukan di samping baris.", "बिरुवासँग काम गर्ने ठाउँ। काम लाइनभित्र हुन्छ, लाइनको छेउमा होइन।"),
    example: tx("Przykład: pracujesz w rzędzie 4.", "Example: you work in row 4.", "Приклад: працюєте в ряду 4.", "Пример: работаете в ряду 4.", "Məsələn: 4-cü sırada işləyirsiniz.", "Ejemplo: trabajas en la fila 4.", "Halimbawa: nagtatrabaho ka sa row 4.", "Contoh: Anda bekerja di baris 4.", "उदाहरण: तपाईं लाइन 4 मा काम गर्नुहुन्छ।")
  },
  {
    group: "greenhouse",
    term: "przęsło",
    local: tx("przęsło / numer odcinka", "section / numbered part", "секція / номер частини", "секция / номер участка", "bölmə / nömrəli hissə", "sección / parte numerada", "section / may numerong bahagi", "bagian / nomor bagian", "सेक्सन / नम्बर भएको भाग"),
    meaning: tx("Numerowany odcinek w przejściu. Numer przęsła sprawdzasz na podłodze w przejściu.", "A numbered part in the passage. Check the section number on the floor in the passage.", "Пронумерована частина в проході. Номер секції перевіряйте на підлозі в проході.", "Пронумерованный участок в проходе. Номер секции проверяйте на полу в проходе.", "Keçiddə nömrəli hissə. Bölmə nömrəsini keçiddə yerdə yoxlayın.", "Parte numerada del pasillo. Revisa el número en el suelo del pasillo.", "May numerong bahagi sa daanan. Tingnan ang numero sa sahig ng daanan.", "Bagian bernomor di lorong. Cek nomor di lantai lorong.", "बाटोमा नम्बर भएको भाग। सेक्सन नम्बर बाटोको भुइँमा हेर्नुहोस्।"),
    example: tx("Przykład: przęsło 1-27, ale numeracja może być różna.", "Example: section 1-27, but numbering may differ.", "Приклад: секція 1-27, але нумерація може бути різна.", "Пример: секция 1-27, но нумерация может отличаться.", "Məsələn: bölmə 1-27, amma nömrələmə fərqli ola bilər.", "Ejemplo: sección 1-27, pero puede variar.", "Halimbawa: section 1-27, pero maaaring iba ang numbering.", "Contoh: bagian 1-27, tetapi nomor bisa berbeda.", "उदाहरण: सेक्सन 1-27, तर नम्बर फरक हुन सक्छ।")
  },
  {
    group: "device",
    term: "tag",
    local: tx("tag / znacznik do odbicia", "tag / scan marker", "тег / мітка для сканування", "тег / метка для отметки", "tag / vurmaq üçün nişan", "tag / marcador para escanear", "tag / marker na ini-scan", "tag / penanda untuk scan", "tag / स्क्यान गर्ने चिन्ह"),
    meaning: tx("Mała tabliczka albo punkt, który odbijasz readerem. Tag mówi systemowi, co robisz albo gdzie pracujesz.", "A small plate or point scanned with the reader. The tag tells the system what you do or where you work.", "Маленька табличка або точка, яку скануєте рідером. Тег показує системі, що ви робите або де працюєте.", "Маленькая табличка или точка, которую отмечаете ридером. Тег показывает системе, что вы делаете или где работаете.", "Reader ilə vurulan kiçik lövhə və ya nöqtə. Tag sistemə nə etdiyinizi və harada işlədiyinizi göstərir.", "Pequeña placa o punto que marcas con el reader. El tag dice al sistema qué haces o dónde trabajas.", "Maliit na plate o point na ini-scan ng reader. Sinasabi ng tag sa system kung ano ang ginagawa mo o saan ka nagtatrabaho.", "Papan kecil atau titik yang discan dengan reader. Tag memberi tahu sistem apa yang Anda lakukan atau di mana bekerja.", "reader ले स्क्यान गर्ने सानो चिन्ह। tag ले सिस्टमलाई तपाईं के गर्दै हुनुहुन्छ वा कहाँ काम गर्दै हुनुहुन्छ भन्छ।"),
    example: tx("Przykład: odbij tag początku pracy.", "Example: scan the work-start tag.", "Приклад: відбийте тег початку роботи.", "Пример: отметьте тег начала работы.", "Məsələn: işin başlanğıc tagını vurun.", "Ejemplo: marca el tag de inicio de trabajo.", "Halimbawa: i-scan ang tag ng simula ng trabaho.", "Contoh: scan tag mulai kerja.", "उदाहरण: काम सुरु tag स्क्यान गर्नुहोस्।")
  },
  {
    group: "device",
    term: "reader",
    local: tx("reader / urządzenie do odbijania", "reader / scanning device", "рідер / пристрій для відміток", "ридер / устройство для отметок", "reader / qeyd cihazı", "reader / aparato para marcar", "reader / device para mag-scan", "reader / alat scan", "reader / स्क्यान गर्ने उपकरण"),
    meaning: tx("Urządzenie używane na szklarni do odbijania tagów. Na magazynie readerów nie używa się.", "A device used in the greenhouse to scan tags. Readers are not used in the warehouse.", "Пристрій на теплиці для сканування тегів. На складі рідери не використовуються.", "Устройство на теплице для отметки тегов. На складе ридеры не используются.", "İstixanada tag vurmaq üçün cihaz. Anbarda reader istifadə olunmur.", "Aparato usado en invernadero para marcar tags. En almacén no se usa reader.", "Device sa greenhouse para mag-scan ng tags. Sa bodega walang reader.", "Alat di rumah kaca untuk scan tag. Di gudang tidak memakai reader.", "ग्रीनहाउसमा tag स्क्यान गर्ने उपकरण। गोदाममा reader प्रयोग हुँदैन।"),
    example: tx("Przykład: po pracy odłóż reader na ładowarkę.", "Example: after work put the reader back on the charger.", "Приклад: після роботи покладіть рідер на зарядку.", "Пример: после работы положите ридер на зарядку.", "Məsələn: işdən sonra reader-i şarja qoyun.", "Ejemplo: después del trabajo deja el reader en el cargador.", "Halimbawa: pagkatapos ng trabaho ibalik ang reader sa charger.", "Contoh: setelah kerja taruh reader di charger.", "उदाहरण: कामपछि reader चार्जरमा राख्नुहोस्।")
  },
  {
    group: "people",
    term: "brygadzista",
    local: tx("brygadzista / osoba prowadząca grupę", "brigadier / team leader", "бригадир / керівник групи", "бригадир / руководитель группы", "briqadir / qrup rəhbəri", "encargado / jefe de grupo", "brigadier / team leader", "mandor / pemimpin tim", "ब्रिगेडियर / समूह प्रमुख"),
    meaning: tx("Osoba, która mówi, gdzie pracujesz i co robisz. Do brygadzisty piszesz, gdy chorujesz, spóźniasz się albo masz problem.", "The person who tells you where you work and what to do. Contact the brigadier if you are sick, late or have a problem.", "Людина, яка каже, де працювати і що робити. Бригадиру пишете, якщо хворієте, запізнюєтесь або маєте проблему.", "Человек, который говорит, где работать и что делать. Бригадиру пишете, если болеете, опаздываете или есть проблема.", "Harada işləyəcəyinizi və nə edəcəyinizi deyən şəxs. Xəstə, gecikmə və ya problem olanda briqadirə yazın.", "Persona que dice dónde trabajas y qué haces. Contacta al encargado si estás enfermo, tarde o tienes problema.", "Taong nagsasabi kung saan ka magtatrabaho at ano ang gagawin. Kontakin ang brigadier kung may sakit, late o may problema.", "Orang yang memberi tahu tempat kerja dan tugas. Hubungi mandor jika sakit, terlambat, atau ada masalah.", "कहाँ काम गर्ने र के गर्ने भनेर बताउने व्यक्ति। बिरामी, ढिलो वा समस्या हुँदा ब्रिगेडियरलाई लेख्नुहोस्।"),
    example: tx("Przykład: napisz do brygadzisty, że się spóźnisz.", "Example: write to the brigadier that you will be late.", "Приклад: напишіть бригадиру, що запізнитесь.", "Пример: напишите бригадиру, что опоздаете.", "Məsələn: gecikəcəyinizi briqadirə yazın.", "Ejemplo: escribe al encargado que llegarás tarde.", "Halimbawa: isulat sa brigadier na male-late ka.", "Contoh: tulis ke mandor bahwa Anda terlambat.", "उदाहरण: ढिलो हुन्छ भनेर ब्रिगेडियरलाई लेख्नुहोस्।")
  },
  {
    group: "place",
    term: "socjal",
    local: tx("socjal / pomieszczenie socjalne", "social room / break room", "соціал / кімната для перерви", "социал / комната для перерыва", "sosial otaq / fasilə yeri", "sala social / sala de descanso", "social room / break room", "ruang sosial / ruang istirahat", "सोसियल / विश्राम कोठा"),
    meaning: tx("Miejsce na przerwę, przebranie się albo sprawy pracownicze. Nie jest to miejsce pracy w rzędzie.", "A place for breaks, changing clothes or staff matters. It is not the work row.", "Місце для перерви, переодягання або робочих справ. Це не місце роботи в ряду.", "Место для перерыва, переодевания или рабочих дел. Это не место работы в ряду.", "Fasilə, paltar dəyişmək və işçi məsələləri üçün yer. Bu iş sırası deyil.", "Lugar para descanso, cambiarse o asuntos de empleados. No es la fila de trabajo.", "Lugar para break, pagpapalit ng damit o staff matters. Hindi ito work row.", "Tempat istirahat, ganti baju atau urusan karyawan. Ini bukan baris kerja.", "ब्रेक, कपडा फेर्न वा कर्मचारी कामको ठाउँ। यो काम गर्ने लाइन होइन।"),
    example: tx("Przykład: idziesz na socjal po wyjściu z rzędu i odbiciu tagu.", "Example: go to the social room after leaving the row and scanning the tag.", "Приклад: йдете в соціал після виходу з ряду і сканування тегу.", "Пример: идёте в социал после выхода из ряда и отметки тега.", "Məsələn: sıradan çıxıb tag vurandan sonra sosial otağa gedirsiniz.", "Ejemplo: vas a la sala social después de salir de la fila y marcar el tag.", "Halimbawa: pumunta sa social room pagkatapos lumabas sa row at mag-scan ng tag.", "Contoh: pergi ke ruang sosial setelah keluar dari baris dan scan tag.", "उदाहरण: लाइनबाट निस्केर tag स्क्यान गरेपछि सोसियलमा जानुहोस्।")
  },
  {
    group: "place",
    term: "stary magazyn",
    local: tx("stary magazyn / druga lokalizacja magazynu", "old warehouse / second warehouse location", "старий склад / друга локація складу", "старый склад / вторая локация склада", "köhnə anbar / ikinci anbar yeri", "almacén antiguo / segunda ubicación", "lumang bodega / pangalawang lokasyon", "gudang lama / lokasi gudang kedua", "पुरानो गोदाम / दोस्रो गोदाम स्थान"),
    meaning: tx("Osobne miejsce magazynowe. Jeśli wiadomość mówi stary magazyn, nie idź automatycznie do głównego magazynu.", "A separate warehouse place. If the message says old warehouse, do not automatically go to the main warehouse.", "Окреме складське місце. Якщо в повідомленні написано старий склад, не йдіть автоматично на головний склад.", "Отдельное складское место. Если в сообщении написано старый склад, не идите автоматически на главный склад.", "Ayrı anbar yeridir. Mesajda köhnə anbar yazılıbsa, avtomatik əsas anbara getməyin.", "Lugar de almacén separado. Si el mensaje dice almacén antiguo, no vayas automáticamente al almacén principal.", "Hiwalay na lugar ng bodega. Kung ang mensahe ay lumang bodega, huwag awtomatikong pumunta sa main bodega.", "Tempat gudang terpisah. Jika pesan mengatakan gudang lama, jangan langsung pergi ke gudang utama.", "अलग गोदाम स्थान। सन्देशमा पुरानो गोदाम भए मुख्य गोदाममा सिधै नजानुहोस्।"),
    example: tx("Przykład: w mapie wybierz przycisk Stary magazyn.", "Example: in the map choose the Old warehouse button.", "Приклад: на карті виберіть кнопку Старий склад.", "Пример: на карте выберите кнопку Старый склад.", "Məsələn: xəritədə Köhnə anbar düyməsini seçin.", "Ejemplo: en el mapa elige el botón Almacén antiguo.", "Halimbawa: sa mapa piliin ang button na Lumang bodega.", "Contoh: di peta pilih tombol Gudang lama.", "उदाहरण: नक्सामा पुरानो गोदाम बटन छान्नुहोस्।")
  },
  {
    group: "greenhouse",
    term: "przejście",
    local: tx("przejście / wejście między rzędami", "passage / way between rows", "прохід / вхід між рядами", "проход / вход между рядами", "keçid / sıralar arasında yol", "pasillo / entrada entre filas", "daanan / pasukan sa pagitan ng rows", "lorong / jalan antar baris", "बाटो / लाइनबीचको प्रवेश"),
    meaning: tx("Długi korytarz w nawie. Z przejścia wchodzisz do pracy po lewej albo prawej stronie.", "A long corridor in the nave. From the passage you enter work on the left or right side.", "Довгий коридор у наві. З проходу заходите працювати з лівого або правого боку.", "Длинный коридор в наве. Из прохода заходите работать с левой или правой стороны.", "Navada uzun yol. Keçiddən sol və ya sağ tərəfdə işə girirsiniz.", "Pasillo largo en la nave. Desde allí entras a trabajar al lado izquierdo o derecho.", "Mahabang daanan sa nave. Mula rito papasok sa trabaho sa kaliwa o kanan.", "Lorong panjang di nave. Dari lorong masuk kerja di sisi kiri atau kanan.", "नावामा लामो बाटो। त्यहाँबाट बायाँ वा दायाँतर्फ काममा जानुहुन्छ।"),
    example: tx("Przykład: wejdź w pierwsze przejście.", "Example: enter the first passage.", "Приклад: зайдіть у перший прохід.", "Пример: зайдите в первый проход.", "Məsələn: birinci keçidə girin.", "Ejemplo: entra al primer pasillo.", "Halimbawa: pumasok sa unang daanan.", "Contoh: masuk lorong pertama.", "उदाहरण: पहिलो बाटोमा पस्नुहोस्।")
  },
  {
    group: "greenhouse",
    term: "lewa strona",
    local: tx("lewa strona / lewy rząd", "left side / left row", "ліва сторона / лівий ряд", "левая сторона / левый ряд", "sol tərəf / sol sıra", "lado izquierdo / fila izquierda", "kaliwang side / kaliwang row", "sisi kiri / baris kiri", "बायाँ साइड / बायाँ लाइन"),
    meaning: tx("Strona po lewej, gdy stoisz w przejściu i patrzysz w głąb rzędu.", "The side on your left when you stand in the passage and look along the row.", "Сторона зліва, коли стоїте в проході і дивитесь у ряд.", "Сторона слева, когда стоите в проходе и смотрите в ряд.", "Keçiddə dayanıb sıraya baxanda sol tərəf.", "El lado a la izquierda cuando estás en el pasillo mirando la fila.", "Side sa kaliwa kapag nakatayo sa daanan at nakatingin sa row.", "Sisi kiri saat berdiri di lorong dan melihat ke baris.", "बाटोमा उभिएर लाइनतर्फ हेर्दा बायाँ साइड।"),
    example: tx("Przykład: pracujesz lewa strona, rząd 3.", "Example: you work left side, row 3.", "Приклад: працюєте ліва сторона, ряд 3.", "Пример: работаете левая сторона, ряд 3.", "Məsələn: sol tərəf, 3-cü sıra.", "Ejemplo: trabajas lado izquierdo, fila 3.", "Halimbawa: trabaho sa kaliwang side, row 3.", "Contoh: kerja sisi kiri, baris 3.", "उदाहरण: बायाँ साइड, लाइन 3 मा काम।")
  },
  {
    group: "greenhouse",
    term: "prawa strona",
    local: tx("prawa strona / prawy rząd", "right side / right row", "права сторона / правий ряд", "правая сторона / правый ряд", "sağ tərəf / sağ sıra", "lado derecho / fila derecha", "kanang side / kanang row", "sisi kanan / baris kanan", "दायाँ साइड / दायाँ लाइन"),
    meaning: tx("Strona po prawej, gdy stoisz w przejściu i patrzysz w głąb rzędu.", "The side on your right when you stand in the passage and look along the row.", "Сторона справа, коли стоїте в проході і дивитесь у ряд.", "Сторона справа, когда стоите в проходе и смотрите в ряд.", "Keçiddə dayanıb sıraya baxanda sağ tərəf.", "El lado a la derecha cuando estás en el pasillo mirando la fila.", "Side sa kanan kapag nakatayo sa daanan at nakatingin sa row.", "Sisi kanan saat berdiri di lorong dan melihat ke baris.", "बाटोमा उभिएर लाइनतर्फ हेर्दा दायाँ साइड।"),
    example: tx("Przykład: przejdź na prawą stronę.", "Example: move to the right side.", "Приклад: перейдіть на праву сторону.", "Пример: перейдите на правую сторону.", "Məsələn: sağ tərəfə keçin.", "Ejemplo: pasa al lado derecho.", "Halimbawa: lumipat sa kanang side.", "Contoh: pindah ke sisi kanan.", "उदाहरण: दायाँ साइडमा जानुहोस्।")
  },
  {
    group: "greenhouse",
    term: "początek rzędu",
    local: tx("początek rzędu / start pracy w rzędzie", "row start / start of work in row", "початок ряду / старт роботи в ряду", "начало ряда / старт работы в ряду", "sıranın başlanğıcı / işin başlanğıcı", "inicio de fila / comienzo del trabajo", "simula ng row / simula ng trabaho", "awal baris / mulai kerja", "लाइन सुरु / काम सुरु"),
    meaning: tx("Miejsce, gdzie zaczynasz pracę w danym rzędzie.", "The place where you start work in that row.", "Місце, де починаєте роботу в цьому ряду.", "Место, где начинаете работу в этом ряду.", "Həmin sırada işi başladığınız yer.", "Lugar donde empiezas el trabajo en esa fila.", "Lugar kung saan nagsisimula ang trabaho sa row.", "Tempat mulai kerja di baris itu.", "त्यो लाइनमा काम सुरु गर्ने ठाउँ।"),
    example: tx("Przykład: odbij początek pracy i początek rzędu.", "Example: scan work start and row start.", "Приклад: відбийте початок роботи і початок ряду.", "Пример: отметьте начало работы и начало ряда.", "Məsələn: işin başlanğıcını və sıranın başlanğıcını vurun.", "Ejemplo: marca inicio de trabajo e inicio de fila.", "Halimbawa: i-scan ang simula ng trabaho at simula ng row.", "Contoh: scan mulai kerja dan awal baris.", "उदाहरण: काम सुरु र लाइन सुरु scan गर्नुहोस्।")
  },
  {
    group: "greenhouse",
    term: "koniec rzędu",
    local: tx("koniec rzędu / zakończenie pracy w rzędzie", "row end / finish in row", "кінець ряду / завершення в ряду", "конец ряда / завершение в ряду", "sıranın sonu / sırada işin bitməsi", "fin de fila / terminar en fila", "dulo ng row / tapos sa row", "akhir baris / selesai di baris", "लाइन अन्त्य / लाइनमा काम सकियो"),
    meaning: tx("Miejsce albo moment, gdy kończysz pracę w rzędzie.", "The place or moment when you finish work in the row.", "Місце або момент, коли закінчуєте роботу в ряду.", "Место или момент, когда заканчиваете работу в ряду.", "Sırada işi bitirdiyiniz yer və ya vaxt.", "Lugar o momento cuando terminas en la fila.", "Lugar o oras kapag tapos na sa row.", "Tempat atau saat selesai kerja di baris.", "लाइनमा काम सकिने ठाउँ वा समय।"),
    example: tx("Przykład: jeśli rząd skończony, odbijasz jeden raz.", "Example: if the row is finished, scan once.", "Приклад: якщо ряд закінчений, відбийте один раз.", "Пример: если ряд закончен, отметьте один раз.", "Məsələn: sıra bitibsə, bir dəfə vurun.", "Ejemplo: si la fila está terminada, marca una vez.", "Halimbawa: kung tapos ang row, i-scan isang beses.", "Contoh: jika baris selesai, scan satu kali.", "उदाहरण: लाइन सकियो भने एक पटक scan गर्नुहोस्।")
  },
  {
    group: "direction",
    term: "wejście",
    local: tx("wejście / drzwi lub miejsce wejścia", "entrance / door or entry place", "вхід / двері або місце входу", "вход / дверь или место входа", "giriş / qapı və ya giriş yeri", "entrada / puerta o lugar de entrada", "pasukan / pinto o entry place", "pintu masuk / tempat masuk", "प्रवेश / ढोका वा पस्ने ठाउँ"),
    meaning: tx("Miejsce, którym wchodzisz do budynku, magazynu albo szklarni.", "The place where you enter a building, warehouse or greenhouse.", "Місце, яким заходите в будівлю, склад або теплицю.", "Место, где входите в здание, склад или теплицу.", "Bina, anbar və ya istixanaya girdiyiniz yer.", "Lugar por donde entras al edificio, almacén o invernadero.", "Lugar kung saan papasok sa building, bodega o greenhouse.", "Tempat masuk ke gedung, gudang atau rumah kaca.", "भवन, गोदाम वा ग्रीनहाउसमा पस्ने ठाउँ।"),
    example: tx("Przykład: szukaj wejścia dla personelu.", "Example: look for the staff entrance.", "Приклад: шукайте вхід для персоналу.", "Пример: ищите вход для персонала.", "Məsələn: personal girişini axtarın.", "Ejemplo: busca la entrada del personal.", "Halimbawa: hanapin ang staff entrance.", "Contoh: cari pintu masuk staf.", "उदाहरण: कर्मचारी प्रवेश खोज्नुहोस्।")
  },
  {
    group: "direction",
    term: "wyjście",
    local: tx("wyjście / droga na zewnątrz", "exit / way out", "вихід / дорога назовні", "выход / дорога наружу", "çıxış / bayıra yol", "salida / camino hacia fuera", "labasan / daan palabas", "keluar / jalan keluar", "निकास / बाहिर जाने बाटो"),
    meaning: tx("Miejsce, którym wychodzisz. W pracy często: wychodzisz z rzędu i dopiero odbijasz tag.", "The place where you leave. At work often: leave the row first, then scan the tag.", "Місце, яким виходите. На роботі часто: спочатку виходите з ряду, потім скануєте тег.", "Место, где выходите. На работе часто: сначала выходите из ряда, потом отмечаете тег.", "Çıxdığınız yer. İşdə çox vaxt: əvvəl sıradan çıxın, sonra tag vurun.", "Lugar por donde sales. En trabajo: primero sales de la fila, luego marcas tag.", "Lugar kung saan lalabas. Sa trabaho: lumabas muna sa row, saka scan tag.", "Tempat keluar. Di kerja: keluar dari baris dulu, lalu scan tag.", "बाहिर निस्कने ठाउँ। काममा पहिले लाइनबाट निस्कनुहोस्, अनि tag scan गर्नुहोस्।"),
    example: tx("Przykład: przy przerwie wychodzisz z rzędu.", "Example: on break you leave the row.", "Приклад: на перерву виходите з ряду.", "Пример: на перерыв выходите из ряда.", "Məsələn: fasiləyə çıxanda sıradan çıxırsınız.", "Ejemplo: para pausa sales de la fila.", "Halimbawa: kapag break, lalabas sa row.", "Contoh: saat istirahat keluar dari baris.", "उदाहरण: ब्रेकमा लाइनबाट निस्कनुहोस्।")
  },
  {
    group: "direction",
    term: "droga główna",
    local: tx("droga główna / szerokie przejście", "main road / wide passage", "головна дорога / широкий прохід", "главная дорога / широкий проход", "əsas yol / geniş keçid", "camino principal / pasillo ancho", "main road / malawak na daanan", "jalan utama / lorong lebar", "मुख्य बाटो / फराकिलो बाटो"),
    meaning: tx("Szeroka droga między częściami szklarni albo przy budynkach.", "A wide road between greenhouse parts or near buildings.", "Широка дорога між частинами теплиці або біля будівель.", "Широкая дорога между частями теплицы или возле зданий.", "İstixana hissələri arasında və ya binaların yanında geniş yol.", "Camino ancho entre partes del invernadero o junto a edificios.", "Malawak na daan sa pagitan ng greenhouse parts o building.", "Jalan lebar antara bagian rumah kaca atau dekat gedung.", "ग्रीनहाउसका भागहरू वा भवन नजिकको फराकिलो बाटो।"),
    example: tx("Przykład: idź drogą główną do biura.", "Example: go by the main road to the office.", "Приклад: йдіть головною дорогою до офісу.", "Пример: идите главной дорогой к офису.", "Məsələn: ofisə əsas yolla gedin.", "Ejemplo: ve por el camino principal a la oficina.", "Halimbawa: dumaan sa main road papunta sa opisina.", "Contoh: lewat jalan utama ke kantor.", "उदाहरण: कार्यालयमा मुख्य बाटोबाट जानुहोस्।")
  },
  {
    group: "direction",
    term: "łącznik",
    local: tx("łącznik / przejście między budynkami", "connector / passage between buildings", "з'єднання / прохід між будівлями", "соединение / проход между зданиями", "birləşdirici keçid / binalar arası yol", "conector / paso entre edificios", "connector / daanan sa pagitan ng building", "penghubung / lorong antar gedung", "जोड्ने बाटो / भवनबीचको बाटो"),
    meaning: tx("Przejście, które łączy dwie części miejsca pracy.", "A passage that connects two parts of the workplace.", "Прохід, який з'єднує дві частини місця роботи.", "Проход, который соединяет две части рабочего места.", "İş yerinin iki hissəsini birləşdirən keçid.", "Paso que conecta dos partes del lugar de trabajo.", "Daan na nagdudugtong ng dalawang bahagi ng trabaho.", "Lorong yang menghubungkan dua bagian tempat kerja.", "काम ठाउँका दुई भाग जोड्ने बाटो।"),
    example: tx("Przykład: przejdź łącznikiem do drugiej części.", "Example: use the connector to the second part.", "Приклад: пройдіть з'єднанням до другої частини.", "Пример: пройдите через соединение во вторую часть.", "Məsələn: ikinci hissəyə birləşdirici keçidlə gedin.", "Ejemplo: pasa por el conector a la segunda parte.", "Halimbawa: dumaan sa connector papunta sa pangalawang bahagi.", "Contoh: lewat penghubung ke bagian kedua.", "उदाहरण: जोड्ने बाटोबाट दोस्रो भागमा जानुहोस्।")
  },
  {
    group: "direction",
    term: "tablica",
    local: tx("tablica / miejsce z tagami lub informacją", "board / place with tags or information", "дошка / місце з тегами або інформацією", "доска / место с тегами или информацией", "lövhə / tag və ya məlumat yeri", "tablero / lugar con tags o información", "board / lugar ng tags o impormasyon", "papan / tempat tag atau informasi", "बोर्ड / tag वा जानकारी भएको ठाउँ"),
    meaning: tx("Miejsce, gdzie mogą wisieć tagi, czynności albo informacje.", "A place where tags, activities or information may be hanging.", "Місце, де можуть висіти теги, дії або інформація.", "Место, где могут висеть теги, действия или информация.", "Taglar, fəaliyyətlər və ya məlumat ola bilən yer.", "Lugar donde pueden estar tags, actividades o información.", "Lugar kung saan may tags, activities o impormasyon.", "Tempat tag, aktivitas atau informasi.", "tag, गतिविधि वा जानकारी भएको ठाउँ।"),
    example: tx("Przykład: na tablicy wybierz czynność.", "Example: choose the activity on the board.", "Приклад: на дошці виберіть дію.", "Пример: на доске выберите деятельность.", "Məsələn: lövhədə fəaliyyəti seçin.", "Ejemplo: en el tablero elige la actividad.", "Halimbawa: sa board piliin ang activity.", "Contoh: di papan pilih aktivitas.", "उदाहरण: बोर्डमा गतिविधि छान्नुहोस्।")
  },
  {
    group: "device",
    term: "tag personalny",
    local: tx("tag personalny / Twój osobisty tag", "personal tag / your own tag", "персональний тег / ваш особистий тег", "персональный тег / ваш личный тег", "personal tag / şəxsi tagınız", "tag personal / tu tag propio", "personal tag / sariling tag mo", "tag pribadi / tag Anda sendiri", "व्यक्तिगत tag / तपाईंको आफ्नै tag"),
    meaning: tx("Tag przypisany do Ciebie. Na nim system rozpoznaje osobę.", "A tag assigned to you. The system uses it to identify the person.", "Тег, призначений вам. Система розпізнає людину по ньому.", "Тег, назначенный вам. Система узнаёт человека по нему.", "Sizə verilən tag. Sistem şəxsi onunla tanıyır.", "Tag asignado a ti. El sistema reconoce a la persona con él.", "Tag na para sa iyo. Nakikilala ng system ang tao gamit ito.", "Tag yang diberikan kepada Anda. Sistem mengenali orang dengan ini.", "तपाईंलाई दिइएको tag। सिस्टमले यसबाट व्यक्ति चिन्छ।"),
    example: tx("Przykład: tag personalny odbij zgodnie z informacją startową.", "Example: scan the personal tag according to start information.", "Приклад: персональний тег відбийте згідно зі стартовою інформацією.", "Пример: персональный тег отметьте согласно стартовой информации.", "Məsələn: personal tagı start məlumatına görə vurun.", "Ejemplo: marca el tag personal según la información inicial.", "Halimbawa: i-scan ang personal tag ayon sa start info.", "Contoh: scan tag pribadi sesuai info start.", "उदाहरण: व्यक्तिगत tag सुरु जानकारी अनुसार scan गर्नुहोस्।")
  },
  {
    group: "device",
    term: "czynność",
    local: tx("czynność / rodzaj pracy", "activity / type of work", "дія / вид роботи", "деятельность / вид работы", "fəaliyyət / iş növü", "actividad / tipo de trabajo", "activity / uri ng trabaho", "aktivitas / jenis kerja", "गतिविधि / कामको प्रकार"),
    meaning: tx("To, co masz robić w pracy, na przykład zbiór, pielęgnacja albo inne zadanie.", "What you have to do at work, for example harvesting, care or another task.", "Те, що маєте робити на роботі, наприклад збір, догляд або інше завдання.", "То, что нужно делать на работе, например сбор, уход или другое задание.", "İşdə etməli olduğunuz şey, məsələn yığım, qulluq və ya başqa tapşırıq.", "Lo que debes hacer en el trabajo, por ejemplo cosecha, cuidado u otra tarea.", "Ang gagawin sa trabaho, halimbawa ani, pag-aalaga o ibang task.", "Yang harus dikerjakan, misalnya panen, perawatan atau tugas lain.", "काममा गर्नुपर्ने कुरा, जस्तै टिप्ने, हेरचाह वा अर्को काम।"),
    example: tx("Przykład: przed pracą wybierz właściwą czynność.", "Example: before work choose the correct activity.", "Приклад: перед роботою виберіть правильну дію.", "Пример: перед работой выберите правильную деятельность.", "Məsələn: işdən əvvəl düzgün fəaliyyəti seçin.", "Ejemplo: antes del trabajo elige la actividad correcta.", "Halimbawa: bago magtrabaho piliin ang tamang activity.", "Contoh: sebelum kerja pilih aktivitas yang benar.", "उदाहरण: काम अघि सही गतिविधि छान्नुहोस्।")
  },
  {
    group: "device",
    term: "początek pracy",
    local: tx("początek pracy / start w systemie", "work start / start in system", "початок роботи / старт у системі", "начало работы / старт в системе", "işin başlanğıcı / sistemdə start", "inicio de trabajo / inicio en sistema", "simula ng trabaho / start sa system", "mulai kerja / mulai di sistem", "काम सुरु / सिस्टममा सुरु"),
    meaning: tx("Moment, gdy zaczynasz pracę i trzeba to zarejestrować.", "The moment when you start work and must register it.", "Момент, коли починаєте роботу і треба це зареєструвати.", "Момент, когда начинаете работу и нужно это зарегистрировать.", "İşə başladığınız və bunu qeyd etməli olduğunuz an.", "Momento cuando empiezas el trabajo y debes registrarlo.", "Oras ng pagsisimula ng trabaho at kailangan i-record.", "Saat mulai kerja dan harus dicatat.", "काम सुरु गर्ने र दर्ता गर्नुपर्ने समय।"),
    example: tx("Przykład: odbij początek pracy na readerze albo tablecie.", "Example: register work start on the reader or tablet.", "Приклад: відбийте початок роботи на рідері або планшеті.", "Пример: отметьте начало работы на ридере или планшете.", "Məsələn: işin başlanğıcını reader və ya planşetdə qeyd edin.", "Ejemplo: marca inicio de trabajo en reader o tablet.", "Halimbawa: i-record ang simula sa reader o tablet.", "Contoh: catat mulai kerja di reader atau tablet.", "उदाहरण: reader वा tablet मा काम सुरु दर्ता गर्नुहोस्।")
  },
  {
    group: "device",
    term: "koniec pracy",
    local: tx("koniec pracy / zakończenie w systemie", "work end / finish in system", "кінець роботи / завершення в системі", "конец работы / завершение в системе", "işin sonu / sistemdə bitirmə", "fin de trabajo / terminar en sistema", "tapos ng trabaho / finish sa system", "selesai kerja / selesai di sistem", "काम अन्त्य / सिस्टममा अन्त्य"),
    meaning: tx("Moment, gdy kończysz pracę i trzeba zamknąć rejestrację.", "The moment when you finish work and must close registration.", "Момент, коли закінчуєте роботу і треба закрити реєстрацію.", "Момент, когда заканчиваете работу и нужно закрыть регистрацию.", "İşi bitirdiyiniz və qeydiyyatı bağlamalı olduğunuz an.", "Momento cuando terminas y debes cerrar el registro.", "Oras kapag tapos na at kailangan isara ang record.", "Saat selesai kerja dan harus menutup catatan.", "काम सकिँदा दर्ता बन्द गर्नुपर्ने समय।"),
    example: tx("Przykład: po pracy odbij koniec pracy.", "Example: after work register work end.", "Приклад: після роботи відбийте кінець роботи.", "Пример: после работы отметьте конец работы.", "Məsələn: işdən sonra işin sonunu qeyd edin.", "Ejemplo: después del trabajo marca fin de trabajo.", "Halimbawa: pagkatapos ng trabaho i-record ang tapos.", "Contoh: setelah kerja catat selesai kerja.", "उदाहरण: कामपछि काम अन्त्य दर्ता गर्नुहोस्।")
  },
  {
    group: "device",
    term: "przerwa początek",
    local: tx("przerwa początek / start przerwy", "break start / start of break", "початок перерви / старт перерви", "начало перерыва / старт перерыва", "fasilə başlanğıcı / fasilənin startı", "inicio de pausa / empezar pausa", "simula ng break / start break", "mulai istirahat / awal istirahat", "ब्रेक सुरु / विश्राम सुरु"),
    meaning: tx("Rejestracja momentu, gdy zaczynasz przerwę.", "Registration of the moment when you start a break.", "Реєстрація моменту, коли починаєте перерву.", "Регистрация момента, когда начинаете перерыв.", "Fasiləyə başladığınız anın qeydiyyatı.", "Registro del momento cuando empiezas pausa.", "Pag-record ng oras kapag nagsisimula ang break.", "Pencatatan saat mulai istirahat.", "ब्रेक सुरु भएको समय दर्ता।"),
    example: tx("Przykład: przed przerwą wyjdź z rzędu i odbij tag.", "Example: before break leave the row and scan the tag.", "Приклад: перед перервою вийдіть з ряду і відбийте тег.", "Пример: перед перерывом выйдите из ряда и отметьте тег.", "Məsələn: fasilədən əvvəl sıradan çıxın və tag vurun.", "Ejemplo: antes de pausa sal de la fila y marca tag.", "Halimbawa: bago break, lumabas sa row at i-scan ang tag.", "Contoh: sebelum istirahat keluar dari baris dan scan tag.", "उदाहरण: ब्रेक अघि लाइनबाट निस्केर tag scan गर्नुहोस्।")
  },
  {
    group: "device",
    term: "przerwa koniec",
    local: tx("przerwa koniec / powrót po przerwie", "break end / return after break", "кінець перерви / повернення після перерви", "конец перерыва / возврат после перерыва", "fasilə sonu / fasilədən qayıtma", "fin de pausa / vuelta después de pausa", "tapos ng break / balik pagkatapos", "akhir istirahat / kembali setelah istirahat", "ब्रेक अन्त्य / ब्रेकपछि फर्कने"),
    meaning: tx("Rejestracja momentu, gdy kończysz przerwę i wracasz do pracy.", "Registration of the moment when you end break and return to work.", "Реєстрація моменту, коли закінчуєте перерву і повертаєтесь до роботи.", "Регистрация момента, когда заканчиваете перерыв и возвращаетесь к работе.", "Fasiləni bitirib işə qayıtdığınız anın qeydiyyatı.", "Registro cuando terminas pausa y vuelves al trabajo.", "Pag-record kapag tapos ang break at balik sa trabaho.", "Pencatatan saat selesai istirahat dan kembali kerja.", "ब्रेक सकिएर काममा फर्किएको समय दर्ता।"),
    example: tx("Przykład: po przerwie odbij koniec przerwy i czynność.", "Example: after break register break end and activity.", "Приклад: після перерви відбийте кінець перерви і дію.", "Пример: после перерыва отметьте конец перерыва и деятельность.", "Məsələn: fasilədən sonra fasilə sonunu və fəaliyyəti qeyd edin.", "Ejemplo: después de pausa marca fin de pausa y actividad.", "Halimbawa: pagkatapos ng break, i-record ang end break at activity.", "Contoh: setelah istirahat catat akhir istirahat dan aktivitas.", "उदाहरण: ब्रेकपछि ब्रेक अन्त्य र गतिविधि दर्ता गर्नुहोस्।")
  },
  {
    group: "device",
    term: "ładowarka",
    local: tx("ładowarka / miejsce ładowania", "charger / charging place", "зарядка / місце заряджання", "зарядка / место зарядки", "şarj yeri / şarj cihazı", "cargador / lugar de carga", "charger / charging place", "charger / tempat mengisi daya", "चार्जर / चार्ज गर्ने ठाउँ"),
    meaning: tx("Miejsce, gdzie reader ma wrócić po pracy.", "The place where the reader must return after work.", "Місце, куди рідер має повернутися після роботи.", "Место, куда ридер нужно вернуть после работы.", "Reader işdən sonra qaytarılmalı olan yer.", "Lugar donde debe volver el reader después del trabajo.", "Lugar kung saan ibabalik ang reader pagkatapos ng trabaho.", "Tempat reader dikembalikan setelah kerja.", "कामपछि reader राख्नुपर्ने ठाउँ।"),
    example: tx("Przykład: odłóż reader na ładowarkę z numerem.", "Example: put the reader on the numbered charger.", "Приклад: покладіть рідер на зарядку з номером.", "Пример: положите ридер на зарядку с номером.", "Məsələn: reader-i nömrəli şarja qoyun.", "Ejemplo: deja el reader en el cargador con número.", "Halimbawa: ilagay ang reader sa charger na may numero.", "Contoh: taruh reader di charger bernomor.", "उदाहरण: reader नम्बर भएको चार्जरमा राख्नुहोस्।")
  },
  {
    group: "tablet",
    term: "PIN",
    local: tx("PIN / osobisty kod", "PIN / personal code", "PIN / особистий код", "PIN / личный код", "PIN / şəxsi kod", "PIN / código personal", "PIN / personal code", "PIN / kode pribadi", "PIN / व्यक्तिगत कोड"),
    meaning: tx("Kod do logowania na tablecie. Nie podawaj go innej osobie.", "Code for logging in on the tablet. Do not give it to another person.", "Код для входу на планшеті. Не передавайте його іншій людині.", "Код для входа на планшете. Не передавайте его другому человеку.", "Planşetə giriş kodu. Başqa şəxsə verməyin.", "Código para entrar en tablet. No lo des a otra persona.", "Code para mag-login sa tablet. Huwag ibigay sa iba.", "Kode untuk login tablet. Jangan berikan ke orang lain.", "tablet मा login गर्ने कोड। अरूलाई नदिनुहोस्।"),
    example: tx("Przykład: wpisz swój PIN na tablecie.", "Example: enter your PIN on the tablet.", "Приклад: введіть свій PIN на планшеті.", "Пример: введите свой PIN на планшете.", "Məsələn: planşetdə öz PIN-inizi yazın.", "Ejemplo: introduce tu PIN en la tablet.", "Halimbawa: ilagay ang PIN mo sa tablet.", "Contoh: masukkan PIN Anda di tablet.", "उदाहरण: tablet मा आफ्नो PIN लेख्नुहोस्।")
  },
  {
    group: "tablet",
    term: "zaloguj",
    local: tx("zaloguj / wejdź do systemu", "log in / enter the system", "увійти / зайти в систему", "войти / зайти в систему", "daxil ol / sistemə gir", "iniciar sesión / entrar al sistema", "mag-login / pumasok sa system", "login / masuk sistem", "login / सिस्टममा पस्नु"),
    meaning: tx("Wejście do systemu na swoim koncie.", "Entering the system on your own account.", "Вхід у систему на своєму акаунті.", "Вход в систему на своём аккаунте.", "Öz hesabınızla sistemə giriş.", "Entrar al sistema con tu cuenta.", "Pagpasok sa system gamit ang sariling account.", "Masuk sistem dengan akun sendiri.", "आफ्नो खाताबाट सिस्टममा पस्ने।"),
    example: tx("Przykład: zaloguj się przed rozpoczęciem pracy.", "Example: log in before starting work.", "Приклад: увійдіть перед початком роботи.", "Пример: войдите перед началом работы.", "Məsələn: işə başlamazdan əvvəl daxil olun.", "Ejemplo: inicia sesión antes de trabajar.", "Halimbawa: mag-login bago magtrabaho.", "Contoh: login sebelum mulai kerja.", "उदाहरण: काम सुरु गर्नु अघि login गर्नुहोस्।")
  },
  {
    group: "tablet",
    term: "wyloguj",
    local: tx("wyloguj / wyjdź z systemu", "log out / leave the system", "вийти / вийти з системи", "выйти / выйти из системы", "çıx / sistemdən çıx", "cerrar sesión / salir del sistema", "mag-logout / lumabas sa system", "logout / keluar sistem", "logout / सिस्टमबाट निस्कनु"),
    meaning: tx("Zamknięcie swojego konta na tablecie po pracy.", "Closing your account on the tablet after work.", "Закриття свого акаунта на планшеті після роботи.", "Закрытие своего аккаунта на планшете после работы.", "İşdən sonra planşetdə hesabdan çıxmaq.", "Cerrar tu cuenta en la tablet después del trabajo.", "Pagsara ng account sa tablet pagkatapos ng trabaho.", "Keluar dari akun tablet setelah kerja.", "कामपछि tablet बाट आफ्नो खाता बन्द गर्नु।"),
    example: tx("Przykład: po zakończeniu pracy wyloguj się.", "Example: after finishing work, log out.", "Приклад: після завершення роботи вийдіть із системи.", "Пример: после окончания работы выйдите из системы.", "Məsələn: işi bitirdikdən sonra çıxın.", "Ejemplo: al terminar el trabajo, cierra sesión.", "Halimbawa: pagkatapos ng trabaho, mag-logout.", "Contoh: setelah selesai kerja, logout.", "उदाहरण: काम सकिएपछि logout गर्नुहोस्।")
  },
  {
    group: "tablet",
    term: "produkcja",
    local: tx("produkcja / praca wykonywana w systemie", "production / work recorded in system", "продукція / робота в системі", "производство / работа в системе", "istehsalat / sistemdə iş", "producción / trabajo en sistema", "production / trabaho sa system", "produksi / kerja di sistem", "उत्पादन / सिस्टममा काम"),
    meaning: tx("Część systemu tabletu, gdzie wybierasz pracę i czynność.", "The tablet system part where you choose work and activity.", "Частина системи планшета, де вибираєте роботу і дію.", "Часть системы планшета, где выбираете работу и деятельность.", "Planşet sistemində iş və fəaliyyəti seçdiyiniz hissə.", "Parte de la tablet donde eliges trabajo y actividad.", "Bahagi ng tablet kung saan pipili ng trabaho at activity.", "Bagian tablet untuk memilih kerja dan aktivitas.", "tablet मा काम र गतिविधि छान्ने भाग।"),
    example: tx("Przykład: w produkcji wybierz właściwą czynność.", "Example: in production choose the correct activity.", "Приклад: у продукції виберіть правильну дію.", "Пример: в производстве выберите правильную деятельность.", "Məsələn: istehsalatda düzgün fəaliyyəti seçin.", "Ejemplo: en producción elige la actividad correcta.", "Halimbawa: sa production piliin ang tamang activity.", "Contoh: di produksi pilih aktivitas yang benar.", "उदाहरण: उत्पादनमा सही गतिविधि छान्नुहोस्।")
  },
  {
    group: "people",
    term: "koordynator",
    local: tx("koordynator / osoba z biura", "coordinator / office person", "координатор / людина з офісу", "координатор / человек из офиса", "koordinator / ofisdən şəxs", "coordinador / persona de oficina", "coordinator / tao sa opisina", "koordinator / orang kantor", "समन्वयक / कार्यालयको व्यक्ति"),
    meaning: tx("Osoba, która pomaga w sprawach organizacyjnych, dokumentach i informacji.", "A person who helps with organization, documents and information.", "Людина, яка допомагає з організацією, документами та інформацією.", "Человек, который помогает с организацией, документами и информацией.", "Təşkilat, sənəd və məlumat məsələlərində kömək edən şəxs.", "Persona que ayuda con organización, documentos e información.", "Taong tumutulong sa organisasyon, dokumento at impormasyon.", "Orang yang membantu urusan organisasi, dokumen dan informasi.", "व्यवस्था, कागजात र जानकारीमा सहयोग गर्ने व्यक्ति।"),
    example: tx("Przykład: w sprawie dokumentów pisz do koordynatora.", "Example: for documents write to the coordinator.", "Приклад: щодо документів пишіть координатору.", "Пример: по документам пишите координатору.", "Məsələn: sənədlər üçün koordinatora yazın.", "Ejemplo: por documentos escribe al coordinador.", "Halimbawa: tungkol sa dokumento, sumulat sa coordinator.", "Contoh: untuk dokumen tulis ke koordinator.", "उदाहरण: कागजातका लागि समन्वयकलाई लेख्नुहोस्।")
  },
  {
    group: "people",
    term: "brygada",
    local: tx("brygada / grupa pracowników", "brigade / worker group", "бригада / група працівників", "бригада / группа работников", "briqada / işçi qrupu", "brigada / grupo de trabajadores", "brigada / grupo ng workers", "tim / kelompok pekerja", "टोली / कामदार समूह"),
    meaning: tx("Grupa ludzi pracująca z tym samym brygadzistą albo na tym samym dziale.", "A group of people working with the same brigadier or department.", "Група людей, яка працює з тим самим бригадиром або у тому самому відділі.", "Группа людей, которая работает с одним бригадиром или в одном отделе.", "Eyni briqadir və ya şöbə ilə işləyən insanlar qrupu.", "Grupo de personas con el mismo encargado o departamento.", "Grupo ng tao na may parehong brigadier o department.", "Kelompok orang dengan mandor atau departemen yang sama.", "एउटै ब्रिगेडियर वा विभागसँग काम गर्ने समूह।"),
    example: tx("Przykład: jesteś w brygadzie E3.", "Example: you are in brigade E3.", "Приклад: ви в бригаді E3.", "Пример: вы в бригаде E3.", "Məsələn: siz E3 briqadasındasınız.", "Ejemplo: estás en la brigada E3.", "Halimbawa: nasa brigada E3 ka.", "Contoh: Anda di tim E3.", "उदाहरण: तपाईं E3 टोलीमा हुनुहुन्छ।")
  },
  {
    group: "people",
    term: "zmiana",
    local: tx("zmiana / czas pracy grupy", "shift / work time of a group", "зміна / час роботи групи", "смена / время работы группы", "növbə / qrupun iş vaxtı", "turno / tiempo de trabajo", "shift / oras ng trabaho", "shift / waktu kerja", "शिफ्ट / काम गर्ने समय"),
    meaning: tx("Godziny, w których dana grupa pracuje.", "The hours when a given group works.", "Години, коли працює дана група.", "Часы, когда работает данная группа.", "Müəyyən qrupun işlədiyi saatlar.", "Horas en las que trabaja el grupo.", "Oras kung kailan nagtatrabaho ang grupo.", "Jam kerja kelompok tertentu.", "कुनै समूहले काम गर्ने समय।"),
    example: tx("Przykład: Twoja zmiana zaczyna się według informacji startowej.", "Example: your shift starts according to start information.", "Приклад: ваша зміна починається згідно зі стартовою інформацією.", "Пример: ваша смена начинается по стартовой информации.", "Məsələn: növbəniz start məlumatına görə başlayır.", "Ejemplo: tu turno empieza según la información inicial.", "Halimbawa: ang shift mo ay ayon sa start info.", "Contoh: shift Anda mulai sesuai info start.", "उदाहरण: तपाईंको शिफ्ट सुरु जानकारी अनुसार सुरु हुन्छ।")
  },
  {
    group: "place",
    term: "magazyn",
    local: tx("magazyn / miejsce pracy poza szklarnią", "warehouse / work place outside greenhouse", "склад / місце роботи поза теплицею", "склад / место работы вне теплицы", "anbar / istixanadan kənar iş yeri", "almacén / lugar fuera del invernadero", "bodega / lugar sa labas ng greenhouse", "gudang / tempat kerja di luar rumah kaca", "गोदाम / ग्रीनहाउस बाहिरको काम ठाउँ"),
    meaning: tx("Osobny dział pracy. Na magazynie nie ma readerów szklarniowych.", "A separate work department. The warehouse does not use greenhouse readers.", "Окремий відділ роботи. На складі немає тепличних рідерів.", "Отдельный отдел работы. На складе нет тепличных ридеров.", "Ayrı iş şöbəsi. Anbarda istixana readerləri yoxdur.", "Departamento separado. En almacén no hay readers de invernadero.", "Hiwalay na department. Sa bodega walang greenhouse reader.", "Departemen terpisah. Di gudang tidak ada reader rumah kaca.", "अलग काम विभाग। गोदाममा ग्रीनहाउस reader हुँदैन।"),
    example: tx("Przykład: jeśli pracujesz na magazynie, wybierz kafelek Magazyn.", "Example: if you work in warehouse, choose Warehouse tile.", "Приклад: якщо працюєте на складі, виберіть блок Склад.", "Пример: если работаете на складе, выберите блок Склад.", "Məsələn: anbarda işləyirsinizsə, Anbar bölməsini seçin.", "Ejemplo: si trabajas en almacén, elige Almacén.", "Halimbawa: kung bodega ang trabaho, piliin ang Bodega.", "Contoh: jika kerja di gudang, pilih Gudang.", "उदाहरण: गोदाममा काम भए गोदाम टाइल छान्नुहोस्।")
  },
  {
    group: "place",
    term: "biuro",
    local: tx("biuro / miejsce spraw organizacyjnych", "office / place for organization matters", "офіс / місце організаційних справ", "офис / место организационных вопросов", "ofis / təşkilati məsələlər yeri", "oficina / lugar de asuntos organizativos", "opisina / lugar ng admin matters", "kantor / tempat urusan organisasi", "कार्यालय / व्यवस्थापन कामको ठाउँ"),
    meaning: tx("Miejsce, gdzie załatwia się sprawy z koordynatorem albo dokumentami.", "A place for coordinator or document matters.", "Місце, де вирішують справи з координатором або документами.", "Место, где решают вопросы с координатором или документами.", "Koordinator və ya sənəd məsələləri üçün yer.", "Lugar para asuntos con coordinador o documentos.", "Lugar para coordinator o dokumento.", "Tempat urusan koordinator atau dokumen.", "समन्वयक वा कागजातको काम गर्ने ठाउँ।"),
    example: tx("Przykład: droga do biura jest w module mapy.", "Example: route to the office is in the map module.", "Приклад: дорога до офісу є в модулі карти.", "Пример: дорога в офис есть в модуле карты.", "Məsələn: ofisə yol xəritə modulundadır.", "Ejemplo: la ruta a la oficina está en el módulo mapa.", "Halimbawa: ruta sa opisina ay nasa map module.", "Contoh: rute ke kantor ada di modul peta.", "उदाहरण: कार्यालय जाने बाटो नक्सा मोड्युलमा छ।")
  },
  {
    group: "place",
    term: "punkt spotkania",
    local: tx("punkt spotkania / miejsce czekania", "meeting point / waiting place", "пункт зустрічі / місце очікування", "точка встречи / место ожидания", "görüş yeri / gözləmə yeri", "punto de encuentro / lugar de espera", "meeting point / hintayan", "titik temu / tempat menunggu", "भेट्ने ठाउँ / पर्खने ठाउँ"),
    meaning: tx("Miejsce, gdzie czekasz na informację albo osobę z firmy.", "A place where you wait for information or a company person.", "Місце, де чекаєте інформацію або людину з фірми.", "Место, где ждёте информацию или человека из фирмы.", "Məlumatı və ya firmadan şəxsi gözlədiyiniz yer.", "Lugar donde esperas información o una persona de la empresa.", "Lugar kung saan naghihintay ng info o tao ng company.", "Tempat menunggu informasi atau orang perusahaan.", "कम्पनीको जानकारी वा व्यक्तिलाई पर्खने ठाउँ।"),
    example: tx("Przykład: przyjdź do punktu spotkania i czekaj.", "Example: come to the meeting point and wait.", "Приклад: прийдіть у пункт зустрічі і чекайте.", "Пример: придите в точку встречи и ждите.", "Məsələn: görüş yerinə gəlin və gözləyin.", "Ejemplo: ven al punto de encuentro y espera.", "Halimbawa: pumunta sa meeting point at maghintay.", "Contoh: datang ke titik temu dan tunggu.", "उदाहरण: भेट्ने ठाउँमा आएर पर्खनुहोस्।")
  },
  {
    group: "place",
    term: "toaleta",
    local: tx("toaleta / WC", "toilet / WC", "туалет / WC", "туалет / WC", "tualet / WC", "baño / WC", "toilet / CR", "toilet / WC", "शौचालय / WC"),
    meaning: tx("Miejsce, gdzie możesz iść do toalety. Jeśli nie wiesz gdzie, zapytaj brygadzistę.", "The place where you can use the toilet. If you do not know where, ask the brigadier.", "Місце, де можна піти в туалет. Якщо не знаєте де, запитайте бригадира.", "Место, где можно пойти в туалет. Если не знаете где, спросите бригадира.", "Tualetə gedə biləcəyiniz yer. Bilmirsinizsə, briqadirdən soruşun.", "Lugar para ir al baño. Si no sabes dónde, pregunta al encargado.", "Lugar para mag-CR. Kung hindi alam, tanungin ang brigadier.", "Tempat toilet. Jika tidak tahu, tanya mandor.", "शौचालय जाने ठाउँ। थाहा छैन भने ब्रिगेडियरलाई सोध्नुहोस्।"),
    example: tx("Przykład: gdzie jest toaleta?", "Example: where is the toilet?", "Приклад: де туалет?", "Пример: где туалет?", "Məsələn: tualet haradadır?", "Ejemplo: ¿dónde está el baño?", "Halimbawa: nasaan ang toilet?", "Contoh: di mana toilet?", "उदाहरण: शौचालय कहाँ छ?")
  },
  {
    group: "message",
    term: "skończony",
    local: tx("skończony / zrobiony do końca", "finished / done to the end", "закінчений / зроблений до кінця", "законченный / сделанный до конца", "bitmiş / sona qədər edilmiş", "terminado / hecho hasta el final", "tapos / natapos hanggang dulo", "selesai / dikerjakan sampai akhir", "सकिएको / अन्त्यसम्म गरिएको"),
    meaning: tx("Używane przy rzędzie lub zadaniu, gdy praca jest wykonana do końca.", "Used for a row or task when work is completed.", "Використовується для ряду або завдання, коли робота зроблена до кінця.", "Используется для ряда или задания, когда работа сделана до конца.", "Sıra və ya tapşırıq tam bitəndə istifadə olunur.", "Se usa para fila o tarea cuando está completa.", "Ginagamit kapag tapos ang row o task.", "Dipakai jika baris atau tugas sudah selesai.", "लाइन वा काम पूरा हुँदा प्रयोग हुन्छ।"),
    example: tx("Przykład: rząd skończony.", "Example: the row is finished.", "Приклад: ряд закінчений.", "Пример: ряд закончен.", "Məsələn: sıra bitib.", "Ejemplo: la fila está terminada.", "Halimbawa: tapos ang row.", "Contoh: baris selesai.", "उदाहरण: लाइन सकियो।")
  },
  {
    group: "message",
    term: "nieskończony",
    local: tx("nieskończony / nie zrobiony do końca", "not finished / not done to the end", "не закінчений / не зроблений до кінця", "незаконченный / не сделан до конца", "bitməmiş / sona qədər edilməmiş", "no terminado / no hecho hasta el final", "hindi tapos / hindi pa natapos", "belum selesai / belum sampai akhir", "नसकिएको / अन्त्यसम्म नभएको"),
    meaning: tx("Używane, gdy zostaje jeszcze praca w rzędzie albo zadaniu.", "Used when work remains in a row or task.", "Використовується, коли ще лишається робота в ряду або завданні.", "Используется, когда ещё осталась работа в ряду или задании.", "Sırada və ya tapşırıqda hələ iş qalanda istifadə olunur.", "Se usa cuando queda trabajo en la fila o tarea.", "Ginagamit kapag may natitirang trabaho sa row o task.", "Dipakai jika masih ada kerja di baris atau tugas.", "लाइन वा काममा अझै काम बाँकी हुँदा प्रयोग हुन्छ।"),
    example: tx("Przykład: rząd nieskończony, odbij dwa razy.", "Example: row not finished, scan twice.", "Приклад: ряд не закінчений, відбийте два рази.", "Пример: ряд не закончен, отметьте два раза.", "Məsələn: sıra bitməyib, iki dəfə vurun.", "Ejemplo: fila no terminada, marca dos veces.", "Halimbawa: row hindi tapos, i-scan dalawang beses.", "Contoh: baris belum selesai, scan dua kali.", "उदाहरण: लाइन सकिएको छैन, दुई पटक scan गर्नुहोस्।")
  },
  {
    group: "message",
    term: "spóźnię się",
    local: tx("spóźnię się / będę później", "I will be late / I will arrive later", "запізнюся / буду пізніше", "опоздаю / буду позже", "gecikəcəyəm / gec gələcəyəm", "llegaré tarde / estaré más tarde", "male-late ako / darating ako mamaya", "saya terlambat / datang lebih lambat", "म ढिलो हुन्छु / पछि आउँछु"),
    meaning: tx("Informacja, którą wysyłasz, gdy nie zdążysz na czas.", "Information you send when you will not arrive on time.", "Інформація, яку надсилаєте, якщо не встигаєте вчасно.", "Информация, которую отправляете, если не успеваете вовремя.", "Vaxtında gəlməyəndə göndərdiyiniz məlumat.", "Información que envías si no llegas a tiempo.", "Impormasyon na ipinapadala kung hindi aabot sa oras.", "Informasi yang dikirim jika tidak datang tepat waktu.", "समयमा नपुग्दा पठाउने जानकारी।"),
    example: tx("Przykład: spóźnię się 15 minut.", "Example: I will be 15 minutes late.", "Приклад: запізнюся на 15 хвилин.", "Пример: опоздаю на 15 минут.", "Məsələn: 15 dəqiqə gecikəcəyəm.", "Ejemplo: llegaré 15 minutos tarde.", "Halimbawa: male-late ako ng 15 minuto.", "Contoh: saya terlambat 15 menit.", "उदाहरण: म 15 मिनेट ढिलो हुन्छु।")
  },
  {
    group: "message",
    term: "jestem chory",
    local: tx("jestem chory / źle się czuję", "I am sick / I feel unwell", "я хворий / погано себе почуваю", "я болею / плохо себя чувствую", "xəstəyəm / özümü pis hiss edirəm", "estoy enfermo / me siento mal", "may sakit ako / masama pakiramdam", "saya sakit / merasa tidak enak", "म बिरामी छु / मलाई ठीक छैन"),
    meaning: tx("Informacja do brygadzisty, gdy nie możesz pracować albo potrzebujesz lekarza.", "Information for the brigadier when you cannot work or need a doctor.", "Інформація для бригадира, коли не можете працювати або потрібен лікар.", "Информация для бригадира, когда не можете работать или нужен врач.", "İşləyə bilməyəndə və ya həkim lazım olanda briqadirə məlumat.", "Información al encargado si no puedes trabajar o necesitas médico.", "Info sa brigadier kung hindi makapagtrabaho o kailangan ng doktor.", "Info ke mandor jika tidak bisa kerja atau butuh dokter.", "काम गर्न नसक्दा वा डाक्टर चाहिँदा ब्रिगेडियरलाई जानकारी।"),
    example: tx("Przykład: jestem chory, potrzebuję lekarza.", "Example: I am sick, I need a doctor.", "Приклад: я хворий, потрібен лікар.", "Пример: я болею, нужен врач.", "Məsələn: xəstəyəm, həkim lazımdır.", "Ejemplo: estoy enfermo, necesito médico.", "Halimbawa: may sakit ako, kailangan ko ng doktor.", "Contoh: saya sakit, butuh dokter.", "उदाहरण: म बिरामी छु, डाक्टर चाहिन्छ।")
  },
  {
    group: "documents",
    term: "PESEL",
    local: tx("PESEL / polski numer osoby", "PESEL / Polish personal number", "PESEL / польський номер особи", "PESEL / польский номер человека", "PESEL / Polşa şəxsi nömrəsi", "PESEL / número personal polaco", "PESEL / Polish personal number", "PESEL / nomor pribadi Polandia", "PESEL / पोलिस व्यक्तिगत नम्बर"),
    meaning: tx("Numer potrzebny w wielu sprawach w Polsce, na przykład u lekarza.", "A number needed for many matters in Poland, for example at a doctor.", "Номер, потрібний у багатьох справах у Польщі, наприклад у лікаря.", "Номер, нужный во многих делах в Польше, например у врача.", "Polşada çox iş üçün lazım olan nömrə, məsələn həkimdə.", "Número necesario para muchos trámites en Polonia, por ejemplo médico.", "Numero na kailangan sa Poland, halimbawa sa doktor.", "Nomor yang dibutuhkan untuk banyak urusan di Polandia, misalnya dokter.", "पोल्याण्डमा धेरै काममा चाहिने नम्बर, जस्तै डाक्टरमा।"),
    example: tx("Przykład: do przychodni zabierz PESEL.", "Example: take PESEL to the clinic.", "Приклад: у поліклініку візьміть PESEL.", "Пример: в поликлинику возьмите PESEL.", "Məsələn: poliklinikaya PESEL götürün.", "Ejemplo: lleva PESEL a la clínica.", "Halimbawa: dalhin ang PESEL sa clinic.", "Contoh: bawa PESEL ke klinik.", "उदाहरण: क्लिनिकमा PESEL लिएर जानुहोस्।")
  },
  {
    group: "documents",
    term: "paszport",
    local: tx("paszport / dokument tożsamości", "passport / identity document", "паспорт / документ особи", "паспорт / документ личности", "pasport / şəxsiyyət sənədi", "pasaporte / documento de identidad", "pasaporte / ID document", "paspor / dokumen identitas", "पासपोर्ट / परिचय कागजात"),
    meaning: tx("Dokument, który potwierdza kim jesteś.", "A document that confirms who you are.", "Документ, який підтверджує, хто ви.", "Документ, который подтверждает, кто вы.", "Kim olduğunuzu təsdiqləyən sənəd.", "Documento que confirma quién eres.", "Dokumento na nagpapatunay kung sino ka.", "Dokumen yang membuktikan identitas.", "तपाईं को हो भनेर देखाउने कागजात।"),
    example: tx("Przykład: do lekarza zabierz paszport.", "Example: take your passport to the doctor.", "Приклад: до лікаря візьміть паспорт.", "Пример: к врачу возьмите паспорт.", "Məsələn: həkimə pasport götürün.", "Ejemplo: lleva pasaporte al médico.", "Halimbawa: dalhin ang pasaporte sa doktor.", "Contoh: bawa paspor ke dokter.", "उदाहरण: डाक्टरकहाँ पासपोर्ट लिएर जानुहोस्।")
  },
  {
    group: "documents",
    term: "karta pobytu",
    local: tx("karta pobytu / dokument pobytowy", "residence card / stay document", "карта побиту / документ перебування", "карта побыту / документ пребывания", "yaşayış kartı / qalma sənədi", "tarjeta de residencia / documento de estancia", "residence card / stay document", "kartu tinggal / dokumen tinggal", "residence card / बसाइ कागजात"),
    meaning: tx("Dokument związany z legalnym pobytem w Polsce.", "A document connected with legal stay in Poland.", "Документ, пов'язаний з легальним перебуванням у Польщі.", "Документ, связанный с легальным пребыванием в Польше.", "Polşada qanuni qalmaqla bağlı sənəd.", "Documento relacionado con estancia legal en Polonia.", "Dokumento para legal stay sa Poland.", "Dokumen untuk tinggal legal di Polandia.", "पोल्याण्डमा कानुनी बसाइसँग सम्बन्धित कागजात।"),
    example: tx("Przykład: w DUW składasz albo odbierasz kartę pobytu.", "Example: in DUW you submit or collect the residence card.", "Приклад: у DUW подаєте або забираєте карту побиту.", "Пример: в DUW подаете или забираете карту побыту.", "Məsələn: DUW-da yaşayış kartını verirsiniz və ya götürürsünüz.", "Ejemplo: en DUW entregas o recoges la tarjeta de residencia.", "Halimbawa: sa DUW nagsusumite o kumukuha ng residence card.", "Contoh: di DUW mengajukan atau mengambil kartu tinggal.", "उदाहरण: DUW मा residence card पेश वा लिनुहुन्छ।")
  },
  {
    group: "documents",
    term: "urząd",
    local: tx("urząd / instytucja publiczna", "office / public institution", "установа / державна інституція", "учреждение / государственная организация", "idarə / dövlət qurumu", "oficina / institución pública", "opisina / public office", "kantor pemerintah / instansi publik", "कार्यालय / सरकारी संस्था"),
    meaning: tx("Miejsce, gdzie załatwia się sprawy oficjalne, na przykład dokumenty.", "A place for official matters, for example documents.", "Місце, де вирішують офіційні справи, наприклад документи.", "Место, где решают официальные дела, например документы.", "Rəsmi işlər üçün yer, məsələn sənədlər.", "Lugar para trámites oficiales, por ejemplo documentos.", "Lugar para official matters, halimbawa dokumento.", "Tempat urusan resmi, misalnya dokumen.", "आधिकारिक काम गर्ने ठाउँ, जस्तै कागजात।"),
    example: tx("Przykład: urząd otworzysz z mapy w module Miasto.", "Example: open the office from the map in City module.", "Приклад: установу відкрийте з карти в модулі Місто.", "Пример: учреждение откройте с карты в модуле Город.", "Məsələn: idarəni Şəhər modulunda xəritədən açın.", "Ejemplo: abre la oficina desde el mapa en Ciudad.", "Halimbawa: buksan ang opisina sa mapa sa City module.", "Contoh: buka kantor dari peta di modul Kota.", "उदाहरण: शहर मोड्युलको नक्साबाट कार्यालय खोल्नुहोस्।")
  },
  {
    group: "documents",
    term: "bank",
    local: tx("bank / miejsce konta i pieniędzy", "bank / place for account and money", "банк / місце рахунку і грошей", "банк / место счёта и денег", "bank / hesab və pul yeri", "banco / cuenta y dinero", "bangko / account at pera", "bank / rekening dan uang", "बैंक / खाता र पैसा"),
    meaning: tx("Miejsce, gdzie można załatwić konto, kartę albo sprawy z pieniędzmi.", "A place for account, card or money matters.", "Місце, де можна вирішити справи з рахунком, карткою або грошима.", "Место, где можно решить вопросы со счётом, картой или деньгами.", "Hesab, kart və pul məsələləri üçün yer.", "Lugar para cuenta, tarjeta o dinero.", "Lugar para account, card o pera.", "Tempat urusan rekening, kartu atau uang.", "खाता, कार्ड वा पैसाको काम गर्ने ठाउँ।"),
    example: tx("Przykład: linki do banków są w module Miasto.", "Example: bank links are in the City module.", "Приклад: посилання на банки є в модулі Місто.", "Пример: ссылки на банки есть в модуле Город.", "Məsələn: bank linkləri Şəhər modulundadır.", "Ejemplo: los enlaces de bancos están en Ciudad.", "Halimbawa: bank links ay nasa City module.", "Contoh: link bank ada di modul Kota.", "उदाहरण: बैंक लिंक शहर मोड्युलमा छन्।")
  },
  {
    group: "documents",
    term: "przychodnia",
    local: tx("przychodnia / lekarz rodzinny", "clinic / family doctor", "поліклініка / сімейний лікар", "поликлиника / семейный врач", "poliklinika / ailə həkimi", "clínica / médico de familia", "clinic / family doctor", "klinik / dokter keluarga", "क्लिनिक / परिवार डाक्टर"),
    meaning: tx("Miejsce, gdzie szukasz lekarza w normalnych sprawach zdrowotnych.", "A place where you look for a doctor for normal health issues.", "Місце, де шукаєте лікаря у звичайних питаннях здоров'я.", "Место, где ищете врача по обычным вопросам здоровья.", "Adi sağlamlıq məsələləri üçün həkim axtardığınız yer.", "Lugar para buscar médico en casos normales de salud.", "Lugar para doktor sa normal health problems.", "Tempat mencari dokter untuk masalah kesehatan biasa.", "सामान्य स्वास्थ्य समस्यामा डाक्टर खोज्ने ठाउँ।"),
    example: tx("Przykład: do GOZ Siechnice przyjdź o 8:00.", "Example: come to GOZ Siechnice at 8:00.", "Приклад: до GOZ Siechnice прийдіть о 8:00.", "Пример: в GOZ Siechnice приходите в 8:00.", "Məsələn: GOZ Siechnice-yə saat 8:00-da gəlin.", "Ejemplo: llega a GOZ Siechnice a las 8:00.", "Halimbawa: pumunta sa GOZ Siechnice ng 8:00.", "Contoh: datang ke GOZ Siechnice jam 8:00.", "उदाहरण: GOZ Siechnice मा 8:00 बजे आउनुहोस्।")
  },
  {
    group: "greenhouse",
    term: "wózek",
    local: tx("wózek / cart do zbioru", "cart / picking cart", "візок / візок для збору", "тележка / тележка для сбора", "araba / yığım arabası", "carro / carro de cosecha", "cart / pang-pitas", "troli / troli panen", "ट्रली / टिप्ने ट्रली"),
    meaning: tx("Wózek używany przy zbiorze, na przykład pomidorów. Przy wózku mogą być osobne tagi.", "A cart used during picking, for example tomatoes. The cart may have separate tags.", "Візок для збору, наприклад помідорів. Біля візка можуть бути окремі теги.", "Тележка для сбора, например помидоров. У тележки могут быть отдельные теги.", "Məsələn pomidor yığımı üçün araba. Arabada ayrıca tag ola bilər.", "Carro usado en cosecha, por ejemplo tomates. Puede tener tags separados.", "Cart na gamit sa pagpitas, halimbawa kamatis. Puwedeng may sariling tag.", "Troli untuk panen, misalnya tomat. Bisa ada tag khusus.", "टमाटर जस्ता चीज टिप्दा प्रयोग हुने ट्रली। ट्रलीमा अलग tag हुन सक्छ।"),
    example: tx("Przykład: przy zbiorze najpierw odbij tag wózka.", "Example: during picking, scan the cart tag first.", "Приклад: при зборі спочатку відбийте тег візка.", "Пример: при сборе сначала отметьте тег тележки.", "Məsələn: yığımda əvvəl araba tagını vurun.", "Ejemplo: en cosecha primero marca el tag del carro.", "Halimbawa: sa pagpitas, unahin ang cart tag.", "Contoh: saat panen scan tag troli dulu.", "उदाहरण: टिपाइमा पहिले ट्रली tag स्क्यान गर्नुहोस्।")
  },
  {
    group: "greenhouse",
    term: "zbiór",
    local: tx("zbiór / zbieranie produktu", "picking / harvesting product", "збір / збирання продукту", "сбор / сбор продукта", "yığım / məhsul toplama", "cosecha / recoger producto", "pagpitas / pag-ani", "panen / memetik produk", "टिपाइ / उत्पादन टिप्ने"),
    meaning: tx("Praca polegająca na zbieraniu produktu z roślin.", "Work that means collecting product from plants.", "Робота, коли збираєте продукт з рослин.", "Работа, когда собираете продукт с растений.", "Bitkilərdən məhsul toplamaq işi.", "Trabajo de recoger producto de las plantas.", "Trabaho ng pagkuha ng produkto sa halaman.", "Pekerjaan mengambil produk dari tanaman.", "बिरुवाबाट उत्पादन टिप्ने काम।"),
    example: tx("Przykład: dziś masz zbiór pomidora.", "Example: today you have tomato picking.", "Приклад: сьогодні у вас збір помідора.", "Пример: сегодня у вас сбор помидора.", "Məsələn: bu gün pomidor yığımınız var.", "Ejemplo: hoy tienes cosecha de tomate.", "Halimbawa: ngayon ay pagpitas ng kamatis.", "Contoh: hari ini panen tomat.", "उदाहरण: आज टमाटर टिपाइ छ।")
  },
  {
    group: "place",
    term: "brama",
    local: tx("brama / wjazd lub wejście na teren", "gate / site entrance", "брама / в'їзд або вхід на територію", "ворота / въезд или вход на территорию", "darvaza / əraziyə giriş", "puerta / entrada al terreno", "gate / pasukan sa area", "gerbang / pintu area", "गेट / क्षेत्र प्रवेश"),
    meaning: tx("Miejsce wejścia albo wjazdu na teren firmy.", "A place to enter the company site.", "Місце входу або в'їзду на територію фірми.", "Место входа или въезда на территорию фирмы.", "Firma ərazisinə giriş yeri.", "Lugar de entrada al terreno de la empresa.", "Lugar ng pasukan sa kumpanya.", "Tempat masuk area perusahaan.", "कम्पनी क्षेत्रमा प्रवेश गर्ने ठाउँ।"),
    example: tx("Przykład: jestem przy bramie.", "Example: I am at the gate.", "Приклад: я біля брами.", "Пример: я у ворот.", "Məsələn: darvazanın yanındayam.", "Ejemplo: estoy en la puerta.", "Halimbawa: nasa gate ako.", "Contoh: saya di gerbang.", "उदाहरण: म गेटमा छु।")
  },
  {
    group: "people",
    term: "ochrona",
    local: tx("ochrona / security", "security / guards", "охорона / security", "охрана / security", "mühafizə / security", "seguridad / vigilancia", "security / guwardiya", "security / satpam", "सुरक्षा / गार्ड"),
    meaning: tx("Osoby przy wejściu, które pilnują terenu i przepustek.", "People at the entrance who control the site and passes.", "Люди при вході, які контролюють територію і перепустки.", "Люди на входе, которые контролируют территорию и пропуска.", "Girişdə əraziyə və keçid kartlarına nəzarət edən şəxslər.", "Personas en entrada que controlan el terreno y pases.", "Mga tao sa pasukan na nagche-check ng area at pass.", "Orang di pintu masuk yang memeriksa area dan kartu akses.", "प्रवेशमा क्षेत्र र पास जाँच गर्ने मानिसहरू।"),
    example: tx("Przykład: ochrona może poprosić o przepustkę.", "Example: security may ask for a pass.", "Приклад: охорона може попросити перепустку.", "Пример: охрана может попросить пропуск.", "Məsələn: mühafizə keçid kartı istəyə bilər.", "Ejemplo: seguridad puede pedir pase.", "Halimbawa: maaaring hingin ng security ang pass.", "Contoh: security bisa meminta kartu akses.", "उदाहरण: सुरक्षाले पास माग्न सक्छ।")
  },
  {
    group: "documents",
    term: "przepustka",
    local: tx("przepustka / karta wejścia", "pass / entry card", "перепустка / карта входу", "пропуск / карта входа", "keçid kartı / giriş kartı", "pase / tarjeta de entrada", "pass / entry card", "kartu akses / kartu masuk", "पास / प्रवेश कार्ड"),
    meaning: tx("Karta albo zgoda potrzebna do wejścia na teren firmy.", "A card or permission needed to enter the company site.", "Карта або дозвіл, потрібний для входу на територію фірми.", "Карта или разрешение для входа на территорию фирмы.", "Firma ərazisinə girmək üçün kart və ya icazə.", "Tarjeta o permiso para entrar al terreno de la empresa.", "Card o permiso para pumasok sa kumpanya.", "Kartu atau izin untuk masuk area perusahaan.", "कम्पनी क्षेत्रमा प्रवेश गर्न चाहिने कार्ड वा अनुमति।"),
    example: tx("Przykład: bez przepustki ochrona może nie wpuścić.", "Example: without a pass, security may not let you in.", "Приклад: без перепустки охорона може не впустити.", "Пример: без пропуска охрана может не пустить.", "Məsələn: keçid kartı olmadan mühafizə buraxmaya bilər.", "Ejemplo: sin pase, seguridad puede no dejar entrar.", "Halimbawa: kung walang pass, hindi ka papapasukin.", "Contoh: tanpa kartu akses, security bisa menolak masuk.", "उदाहरण: पास बिना सुरक्षा भित्र जान नदिन सक्छ।")
  },
  {
    group: "documents",
    term: "bankomat",
    local: tx("bankomat / ATM", "ATM / cash machine", "банкомат / ATM", "банкомат / ATM", "bankomat / ATM", "cajero automático / ATM", "ATM / cash machine", "ATM / mesin uang", "ATM / पैसा निकाल्ने मेसिन"),
    meaning: tx("Maszyna do wypłaty pieniędzy z karty.", "A machine for withdrawing cash from a card.", "Машина для зняття грошей з картки.", "Машина для снятия денег с карты.", "Kartdan pul çıxarmaq üçün cihaz.", "Máquina para sacar dinero con tarjeta.", "Makina para mag-withdraw ng pera.", "Mesin untuk tarik uang dari kartu.", "कार्डबाट पैसा निकाल्ने मेसिन।"),
    example: tx("Przykład: najbliższy bankomat znajdziesz w module Miasto.", "Example: find the nearest ATM in the City module.", "Приклад: найближчий банкомат знайдете в модулі Місто.", "Пример: ближайший банкомат найдете в модуле Город.", "Məsələn: ən yaxın bankomatı Şəhər modulunda tapın.", "Ejemplo: busca el cajero más cercano en Ciudad.", "Halimbawa: hanapin ang ATM sa City module.", "Contoh: cari ATM terdekat di modul Kota.", "उदाहरण: नजिकको ATM शहर मोड्युलमा खोज्नुहोस्।")
  },
  {
    group: "documents",
    term: "paczkomat",
    local: tx("paczkomat / automat na paczki", "parcel locker / package machine", "поштомат / автомат для посилок", "постамат / автомат для посылок", "paczkomat / bağlama avtomatı", "taquilla de paquetes / Paczkomat", "parcel locker / lagayan ng package", "loker paket / mesin paket", "parcel locker / पार्सल मेसिन"),
    meaning: tx("Automat, do którego zamawia się paczki. Nie zamawiaj paczek na adres firmy.", "A machine where parcels are delivered. Do not order parcels to the company address.", "Автомат, куди замовляють посилки. Не замовляйте посилки на адресу фірми.", "Автомат, куда заказывают посылки. Не заказывайте посылки на адрес фирмы.", "Bağlamaların gəldiyi avtomat. Bağlamaları firma ünvanına sifariş etməyin.", "Máquina donde llegan paquetes. No pidas paquetes a la dirección de la empresa.", "Machine kung saan dumadating ang parcel. Huwag magpadala sa address ng kumpanya.", "Mesin tempat paket dikirim. Jangan pesan paket ke alamat perusahaan.", "पार्सल आउने मेसिन। कम्पनी ठेगानामा पार्सल नमगाउनुहोस्।"),
    example: tx("Przykład: paczkę zamów do paczkomatu.", "Example: order the parcel to a parcel locker.", "Приклад: посилку замовте до поштомату.", "Пример: посылку закажите в постамат.", "Məsələn: bağlamanı paczkomat-a sifariş edin.", "Ejemplo: pide el paquete al Paczkomat.", "Halimbawa: ipadala ang parcel sa parcel locker.", "Contoh: kirim paket ke loker paket.", "उदाहरण: पार्सल parcel locker मा मगाउनुहोस्।")
  },
  {
    group: "documents",
    term: "SOR",
    local: tx("SOR / szpitalny oddział ratunkowy", "ER / emergency department", "SOR / відділення невідкладної допомоги", "SOR / приемное отделение скорой помощи", "SOR / təcili yardım şöbəsi", "urgencias / emergencia hospitalaria", "ER / emergency department", "IGD / unit gawat darurat", "ER / आपतकालीन विभाग"),
    meaning: tx("Miejsce w szpitalu na nagłe przypadki, np. silny ból, uraz, problemy z oddychaniem.", "A hospital place for emergencies, e.g. strong pain, injury, breathing problems.", "Місце в лікарні для термінових випадків, напр. сильний біль, травма, проблеми з диханням.", "Место в больнице для срочных случаев, например сильная боль, травма, проблемы с дыханием.", "Güclü ağrı, zədə, nəfəs problemi kimi təcili hallar üçün xəstəxana şöbəsi.", "Lugar del hospital para urgencias: dolor fuerte, lesión, problemas respiratorios.", "Lugar sa ospital para emergency: matinding sakit, injury, hirap huminga.", "Tempat di rumah sakit untuk darurat: sakit parah, cedera, sulit bernapas.", "अस्पतालको आपतकालीन ठाउँ: धेरै दुखाइ, चोट, सास समस्या।"),
    example: tx("Przykład: przy problemie z oddychaniem jedź na SOR albo dzwoń 112.", "Example: with breathing problems go to ER or call 112.", "Приклад: при проблемі з диханням їдьте на SOR або дзвоніть 112.", "Пример: при проблеме с дыханием едьте в SOR или звоните 112.", "Məsələn: nəfəs problemi varsa SOR-a gedin və ya 112-yə zəng edin.", "Ejemplo: con problemas respiratorios ve a urgencias o llama 112.", "Halimbawa: kung hirap huminga, pumunta sa ER o tumawag 112.", "Contoh: jika sulit bernapas, ke IGD atau hubungi 112.", "उदाहरण: सास समस्या भए ER जानुहोस् वा 112 फोन गर्नुहोस्।")
  }
];

window.CX_DATA.banQuickRules = [
  {
    tone: "red",
    icon: "ban",
    title: tx("Nie wnoś do pracy", "Do not bring to work", "Не вносити на роботу", "Не приносить на работу", "İşə gətirməyin", "No traer al trabajo", "Huwag dalhin sa trabaho", "Jangan bawa ke area kerja", "काममा नल्याउनुहोस्"),
    text: tx("Jedzenia, napojów, papierosów, prywatnych rzeczy i paczek do strefy pracy.", "Food, drinks, cigarettes, private items and parcels into the work zone.", "Їжу, напої, сигарети, особисті речі та посилки в робочу зону.", "Еду, напитки, сигареты, личные вещи и посылки в рабочую зону.", "Yemək, içki, siqaret, şəxsi əşya və bağlamaları iş zonasına gətirməyin.", "Comida, bebidas, cigarrillos, cosas personales y paquetes a la zona de trabajo.", "Pagkain, inumin, sigarilyo, personal na gamit at parcel sa work zone.", "Makanan, minuman, rokok, barang pribadi dan paket ke area kerja.", "खाना, पेय, चुरोट, निजी सामान र पार्सल काम क्षेत्रमा नल्याउनुहोस्।")
  },
  {
    tone: "yellow",
    icon: "phone",
    title: tx("Nie używaj bez zgody", "Do not use without permission", "Не користуватися без дозволу", "Не использовать без разрешения", "İcazəsiz istifadə etməyin", "No usar sin permiso", "Huwag gamitin nang walang pahintulot", "Jangan pakai tanpa izin", "अनुमति बिना प्रयोग नगर्नुहोस्"),
    text: tx("Telefonu, cudzego PIN-u, cudzego taga, readera albo danych innej osoby.", "Phone, another person's PIN, tag, reader or personal data.", "Телефон, чужий PIN, чужий тег, рідер або дані іншої людини.", "Телефон, чужой PIN, чужой тег, ридер или данные другого человека.", "Telefon, başqasının PIN-i, tagı, reader-i və ya şəxsi məlumatları.", "Teléfono, PIN, tag, reader o datos de otra persona.", "Telepono, PIN, tag, reader o data ng ibang tao.", "Telepon, PIN, tag, reader atau data orang lain.", "फोन, अरूको PIN, tag, reader वा व्यक्तिगत डाटा।")
  },
  {
    tone: "blue",
    icon: "greenhouse",
    title: tx("Nie wchodź sam", "Do not enter alone", "Не заходити самому", "Не входить одному", "Tək girməyin", "No entrar solo", "Huwag pumasok mag-isa", "Jangan masuk sendiri", "एक्लै नजानुहोस्"),
    text: tx("Do niewłaściwej szklarni, magazynu, strefy albo przejścia bez polecenia.", "Into the wrong greenhouse, warehouse, zone or passage without instruction.", "У неправильну теплицю, склад, зону або прохід без вказівки.", "В неправильную теплицу, склад, зону или проход без указания.", "Tapşırıq olmadan səhv istixana, anbar, zona və ya keçidə girməyin.", "A un invernadero, almacén, zona o pasillo equivocado sin indicación.", "Sa maling greenhouse, bodega, zone o daanan kung walang utos.", "Ke rumah kaca, gudang, zona atau lorong yang salah tanpa instruksi.", "निर्देशन बिना गलत ग्रीनहाउस, गोदाम, क्षेत्र वा बाटोमा नजानुहोस्।")
  }
];

window.CX_DATA.banGroups = [
  {
    id: "food",
    tone: "red",
    icon: "food",
    title: tx("Jedzenie, napoje, palenie", "Food, drinks, smoking", "Їжа, напої, куріння", "Еда, напитки, курение", "Yemək, içki, siqaret", "Comida, bebidas, fumar", "Pagkain, inumin, paninigarilyo", "Makanan, minuman, merokok", "खाना, पेय, धूम्रपान"),
    lead: tx("Do strefy pracy nie wnosimy niczego, co może zabrudzić produkt albo miejsce pracy.", "Do not bring anything into the work zone that can contaminate the product or workplace.", "У робочу зону не вносимо нічого, що може забруднити продукт або місце роботи.", "В рабочую зону не приносим ничего, что может загрязнить продукт или место работы.", "Məhsulu və ya iş yerini çirkləndirə bilən heç nə iş zonasına gətirməyin.", "No traemos nada que pueda contaminar el producto o el lugar de trabajo.", "Huwag magdala ng maaaring dumumi sa produkto o lugar ng trabaho.", "Jangan bawa apa pun yang bisa mengotori produk atau area kerja.", "उत्पादन वा काम गर्ने ठाउँ फोहोर बनाउन सक्ने कुरा काम क्षेत्रमा नल्याउनुहोस्।")
  },
  {
    id: "hygiene",
    tone: "red",
    icon: "jewelry",
    title: tx("Higiena i wygląd", "Hygiene and appearance", "Гігієна і зовнішній вигляд", "Гигиена и внешний вид", "Gigiyena və görünüş", "Higiene y apariencia", "Kalinisan at hitsura", "Kebersihan dan penampilan", "स्वच्छता र रूप"),
    lead: tx("Te zasady chronią żywność, rośliny i pracownika.", "These rules protect food, plants and the worker.", "Ці правила захищають їжу, рослини і працівника.", "Эти правила защищают еду, растения и работника.", "Bu qaydalar qidanı, bitkiləri və işçini qoruyur.", "Estas reglas protegen alimentos, plantas y al trabajador.", "Pinoprotektahan nito ang pagkain, halaman at manggagawa.", "Aturan ini melindungi makanan, tanaman dan pekerja.", "यी नियमले खाना, बिरुवा र कामदारलाई जोगाउँछन्।")
  },
  {
    id: "private",
    tone: "yellow",
    icon: "parcel",
    title: tx("Rzeczy prywatne i paczki", "Private items and parcels", "Особисті речі та посилки", "Личные вещи и посылки", "Şəxsi əşyalar və bağlamalar", "Cosas personales y paquetes", "Personal na gamit at parcel", "Barang pribadi dan paket", "निजी सामान र पार्सल"),
    lead: tx("Rzeczy prywatne zostawiamy poza miejscem pracy albo w miejscu wskazanym.", "Leave private items outside the workplace or in the indicated place.", "Особисті речі залишаємо поза місцем роботи або у вказаному місці.", "Личные вещи оставляем вне рабочего места или в указанном месте.", "Şəxsi əşyaları iş yerindən kənarda və ya göstərilən yerdə saxlayın.", "Deja las cosas personales fuera del lugar de trabajo o en el sitio indicado.", "Iwan ang personal na gamit sa labas ng work area o sa itinalagang lugar.", "Tinggalkan barang pribadi di luar area kerja atau di tempat yang ditunjuk.", "निजी सामान काम गर्ने ठाउँ बाहिर वा देखाइएको ठाउँमा छोड्नुहोस्।")
  },
  {
    id: "phone",
    tone: "yellow",
    icon: "phone",
    title: tx("Telefon i zdjęcia", "Phone and photos", "Телефон і фото", "Телефон и фото", "Telefon və şəkillər", "Teléfono y fotos", "Telepono at larawan", "Telepon dan foto", "फोन र फोटो"),
    lead: tx("Telefon nie może przeszkadzać w pracy i bezpieczeństwie.", "The phone must not disturb work or safety.", "Телефон не може заважати роботі та безпеці.", "Телефон не должен мешать работе и безопасности.", "Telefon işə və təhlükəsizliyə mane olmamalıdır.", "El teléfono no debe molestar el trabajo ni la seguridad.", "Hindi dapat makaistorbo ang telepono sa trabaho at kaligtasan.", "Telepon tidak boleh mengganggu kerja dan keselamatan.", "फोनले काम र सुरक्षामा बाधा पुर्‍याउनु हुँदैन।")
  },
  {
    id: "access",
    tone: "blue",
    icon: "greenhouse",
    title: tx("Wejście i poruszanie się", "Entry and movement", "Вхід і пересування", "Вход и передвижение", "Giriş və hərəkət", "Entrada y movimiento", "Pagpasok at paggalaw", "Masuk dan bergerak", "प्रवेश र हिँडडुल"),
    lead: tx("Idziemy tylko tam, gdzie mamy zadanie albo zgodę przełożonego.", "Go only where you have a task or supervisor permission.", "Йдемо тільки туди, де є завдання або дозвіл керівника.", "Идем только туда, где есть задание или разрешение руководителя.", "Yalnız tapşırıq və ya rəhbər icazəsi olan yerə gedin.", "Ve solo donde tienes tarea o permiso del supervisor.", "Pumunta lang kung saan may task o pahintulot ng supervisor.", "Pergi hanya ke tempat tugas atau dengan izin atasan.", "काम वा सुपरभाइजरको अनुमति भएको ठाउँमा मात्र जानुहोस्।")
  },
  {
    id: "data",
    tone: "red",
    icon: "id",
    title: tx("Dane, PIN, tag, reader", "Data, PIN, tag, reader", "Дані, PIN, тег, рідер", "Данные, PIN, тег, ридер", "Məlumat, PIN, tag, reader", "Datos, PIN, tag, reader", "Data, PIN, tag, reader", "Data, PIN, tag, reader", "डाटा, PIN, tag, reader"),
    lead: tx("Każdy pracuje na swoich danych. Nie wolno używać danych innej osoby.", "Everyone works on their own data. Do not use another person's data.", "Кожен працює на своїх даних. Не можна використовувати дані іншої людини.", "Каждый работает на своих данных. Нельзя использовать данные другого человека.", "Hər kəs öz məlumatı ilə işləyir. Başqasının məlumatından istifadə etmək olmaz.", "Cada persona trabaja con sus propios datos. No uses datos de otra persona.", "Sariling data lang ang gamit. Bawal gumamit ng data ng iba.", "Setiap orang memakai data sendiri. Jangan gunakan data orang lain.", "सबैले आफ्नै डाटामा काम गर्छन्। अरूको डाटा प्रयोग गर्न पाइँदैन।")
  }
];

window.CX_DATA.bans = [
  {
    group: "food",
    icon: "food",
    title: tx("Jedzenie w strefie pracy", "Food in the work zone", "Їжа в робочій зоні", "Еда в рабочей зоне", "İş zonasında yemək", "Comida en zona de trabajo", "Pagkain sa work zone", "Makanan di area kerja", "काम क्षेत्रमा खाना"),
    detail: tx("Nie jedz i nie wnoś jedzenia do miejsca pracy.", "Do not eat or bring food into the workplace.", "Не їжте і не вносьте їжу на місце роботи.", "Не ешьте и не приносите еду на рабочее место.", "İş yerində yeməyin və yemək gətirməyin.", "No comas ni traigas comida al lugar de trabajo.", "Huwag kumain o magdala ng pagkain sa work area.", "Jangan makan atau membawa makanan ke tempat kerja.", "काम गर्ने ठाउँमा खाना नखानुहोस् र नल्याउनुहोस्।")
  },
  {
    group: "food",
    icon: "food",
    title: tx("Napoje w strefie pracy", "Drinks in the work zone", "Напої в робочій зоні", "Напитки в рабочей зоне", "İş zonasında içki", "Bebidas en zona de trabajo", "Inumin sa work zone", "Minuman di area kerja", "काम क्षेत्रमा पेय"),
    detail: tx("Napoje zostaw poza strefą pracy. Korzystaj tylko z miejsca wskazanego.", "Leave drinks outside the work zone. Use only the indicated place.", "Напої залишайте поза робочою зоною. Користуйтеся тільки вказаним місцем.", "Напитки оставляйте вне рабочей зоны. Используйте только указанное место.", "İçkiləri iş zonasından kənarda saxlayın. Yalnız göstərilən yerdən istifadə edin.", "Deja bebidas fuera de la zona de trabajo. Usa solo el lugar indicado.", "Iwan ang inumin sa labas ng work zone. Gamitin lang ang itinalagang lugar.", "Tinggalkan minuman di luar area kerja. Gunakan hanya tempat yang ditunjuk.", "पेय काम क्षेत्र बाहिर राख्नुहोस्। देखाइएको ठाउँ मात्र प्रयोग गर्नुहोस्।")
  },
  {
    group: "food",
    icon: "food",
    title: tx("Guma, cukierki, orzechy", "Gum, candy, nuts", "Жуйка, цукерки, горіхи", "Жвачка, конфеты, орехи", "Saqqız, konfet, qoz-fındıq", "Chicle, dulces, nueces", "Gum, candy, mani", "Permen karet, permen, kacang", "चुइंगम, मिठाई, नट्स"),
    detail: tx("Nie żuj gumy i nie trzymaj przekąsek przy stanowisku.", "Do not chew gum or keep snacks at the work station.", "Не жуйте жуйку і не тримайте перекуси біля робочого місця.", "Не жуйте жвачку и не держите перекусы у рабочего места.", "Saqqız çeynəməyin və iş yerində qəlyanaltı saxlamayın.", "No mastiques chicle ni guardes snacks en el puesto.", "Huwag mag-chewing gum o magtago ng snacks sa puwesto.", "Jangan mengunyah permen karet atau menyimpan camilan di tempat kerja.", "चुइंगम नचपाउनुहोस् र काम ठाउँमा खाजा नराख्नुहोस्।")
  },
  {
    group: "food",
    icon: "smoke",
    title: tx("Papierosy i e-papierosy", "Cigarettes and e-cigarettes", "Сигарети та електронні сигарети", "Сигареты и электронные сигареты", "Siqaret və elektron siqaret", "Cigarrillos y vape", "Sigarilyo at vape", "Rokok dan vape", "चुरोट र vape"),
    detail: tx("Nie wnoś papierosów, e-papierosów ani zapalniczek do strefy pracy.", "Do not bring cigarettes, e-cigarettes or lighters into the work zone.", "Не вносьте сигарети, електронні сигарети або запальнички в робочу зону.", "Не приносите сигареты, электронные сигареты или зажигалки в рабочую зону.", "İş zonasına siqaret, elektron siqaret və alışqan gətirməyin.", "No traigas cigarrillos, vape ni encendedores a la zona de trabajo.", "Huwag magdala ng sigarilyo, vape o lighter sa work zone.", "Jangan bawa rokok, vape atau korek ke area kerja.", "काम क्षेत्रमा चुरोट, vape वा लाइटर नल्याउनुहोस्।")
  },
  {
    group: "hygiene",
    icon: "jewelry",
    title: tx("Biżuteria", "Jewelry", "Біжутерія", "Украшения", "Zinət əşyası", "Joyería", "Alahas", "Perhiasan", "गहना"),
    detail: tx("Nie wnoś biżuterii do strefy pracy, jeśli zasady tego zabraniają.", "Do not bring jewelry into the work zone if the rules prohibit it.", "Не вносьте біжутерію в робочу зону, якщо правила це забороняють.", "Не приносите украшения в рабочую зону, если правила это запрещают.", "Qaydalar qadağan edirsə, zinət əşyasını iş zonasına gətirməyin.", "No traigas joyería a la zona si las reglas lo prohíben.", "Huwag magdala ng alahas kung bawal sa rules.", "Jangan bawa perhiasan jika aturan melarang.", "नियमले रोक्छ भने काम क्षेत्रमा गहना नल्याउनुहोस्।")
  },
  {
    group: "hygiene",
    icon: "jewelry",
    title: tx("Sztuczne paznokcie i rzęsy", "Artificial nails and eyelashes", "Штучні нігті та вії", "Искусственные ногти и ресницы", "Süni dırnaq və kirpik", "Uñas y pestañas postizas", "Artipisyal na kuko at pilikmata", "Kuku dan bulu mata palsu", "कृत्रिम नङ र परेला"),
    detail: tx("Nie używaj ich w strefie pracy, jeśli obowiązuje zakaz higieniczny.", "Do not use them in the work zone if hygiene rules prohibit them.", "Не використовуйте їх у робочій зоні, якщо діє гігієнічна заборона.", "Не используйте их в рабочей зоне, если действует гигиенический запрет.", "Gigiyena qaydası qadağan edirsə, iş zonasında istifadə etməyin.", "No los uses en la zona si hay prohibición higiénica.", "Huwag gamitin sa work zone kung bawal sa hygiene rules.", "Jangan gunakan di area kerja jika dilarang aturan kebersihan.", "स्वच्छता नियमले रोक्छ भने काम क्षेत्रमा प्रयोग नगर्नुहोस्।")
  },
  {
    group: "hygiene",
    icon: "ban",
    title: tx("Brudne ręce lub rękawiczki", "Dirty hands or gloves", "Брудні руки або рукавички", "Грязные руки или перчатки", "Çirkli əl və ya əlcək", "Manos o guantes sucios", "Maruming kamay o guwantes", "Tangan atau sarung tangan kotor", "फोहोर हात वा पञ्जा"),
    detail: tx("Przed pracą i po zabrudzeniu zadbaj o czystość rąk albo rękawiczek.", "Before work and after getting dirty, make sure hands or gloves are clean.", "Перед роботою і після забруднення подбайте про чисті руки або рукавички.", "Перед работой и после загрязнения следите за чистотой рук или перчаток.", "İşdən əvvəl və çirklənəndə əllərin və ya əlcəklərin təmizliyinə baxın.", "Antes del trabajo y después de ensuciarse, cuida manos o guantes limpios.", "Bago magtrabaho at kapag nadumihan, siguraduhing malinis ang kamay o guwantes.", "Sebelum kerja dan setelah kotor, pastikan tangan atau sarung tangan bersih.", "काम अघि र फोहोर भएपछि हात वा पञ्जा सफा राख्नुहोस्।")
  },
  {
    group: "private",
    icon: "parcel",
    title: tx("Prywatne rzeczy", "Private items", "Особисті речі", "Личные вещи", "Şəxsi əşyalar", "Cosas personales", "Personal na gamit", "Barang pribadi", "निजी सामान"),
    detail: tx("Torby, ubrania i prywatne rzeczy nie mogą leżeć w miejscu pracy.", "Bags, clothes and private items must not be kept at the workplace.", "Сумки, одяг і особисті речі не можуть лежати на місці роботи.", "Сумки, одежда и личные вещи не должны лежать на рабочем месте.", "Çanta, paltar və şəxsi əşyalar iş yerində olmamalıdır.", "Bolsos, ropa y cosas personales no deben estar en el puesto.", "Bag, damit at personal na gamit ay hindi dapat nasa work area.", "Tas, pakaian dan barang pribadi tidak boleh berada di tempat kerja.", "झोला, कपडा र निजी सामान काम गर्ने ठाउँमा राख्न पाइँदैन।")
  },
  {
    group: "private",
    icon: "parcel",
    title: tx("Paczki i zakupy", "Parcels and shopping", "Посилки і покупки", "Посылки и покупки", "Bağlama və alış-veriş", "Paquetes y compras", "Parcel at pinamili", "Paket dan belanja", "पार्सल र किनमेल"),
    detail: tx("Nie zamawiaj paczek na adres firmy. Korzystaj z paczkomatu albo własnego adresu.", "Do not order parcels to the company address. Use a parcel locker or your own address.", "Не замовляйте посилки на адресу фірми. Користуйтеся поштоматом або власною адресою.", "Не заказывайте посылки на адрес фирмы. Используйте постамат или свой адрес.", "Bağlamaları firma ünvanına sifariş etməyin. Paczkomat və ya öz ünvanınızdan istifadə edin.", "No pidas paquetes a la dirección de la empresa. Usa Paczkomat o tu dirección.", "Huwag ipadala ang parcel sa company address. Gumamit ng parcel locker o sariling address.", "Jangan kirim paket ke alamat perusahaan. Gunakan loker paket atau alamat sendiri.", "कम्पनीको ठेगानामा पार्सल नमगाउनुहोस्। parcel locker वा आफ्नो ठेगाना प्रयोग गर्नुहोस्।")
  },
  {
    group: "private",
    icon: "document",
    title: tx("Dokumenty prywatne", "Private documents", "Особисті документи", "Личные документы", "Şəxsi sənədlər", "Documentos privados", "Personal na dokumento", "Dokumen pribadi", "निजी कागजात"),
    detail: tx("Nie zostawiaj paszportu, karty pobytu ani pieniędzy w miejscu pracy.", "Do not leave passport, residence card or money at the workplace.", "Не залишайте паспорт, карту побиту або гроші на місці роботи.", "Не оставляйте паспорт, карту побыту или деньги на рабочем месте.", "Pasport, yaşayış kartı və pulu iş yerində qoymayın.", "No dejes pasaporte, tarjeta de residencia ni dinero en el puesto.", "Huwag iwan ang pasaporte, residence card o pera sa work area.", "Jangan tinggalkan paspor, kartu tinggal atau uang di tempat kerja.", "पासपोर्ट, residence card वा पैसा काम ठाउँमा नछोड्नुहोस्।")
  },
  {
    group: "phone",
    icon: "phone",
    title: tx("Telefon bez pozwolenia", "Phone without permission", "Телефон без дозволу", "Телефон без разрешения", "İcazəsiz telefon", "Teléfono sin permiso", "Telepono nang walang pahintulot", "Telepon tanpa izin", "अनुमति बिना फोन"),
    detail: tx("W produkcji nie używaj telefonu bez zgody przełożonego.", "In production, do not use the phone without supervisor permission.", "На продукції не користуйтеся телефоном без дозволу керівника.", "На производстве не используйте телефон без разрешения руководителя.", "İstehsalatda rəhbər icazəsi olmadan telefon istifadə etməyin.", "En producción no uses teléfono sin permiso del supervisor.", "Sa production, huwag gumamit ng phone kung walang pahintulot ng supervisor.", "Di produksi jangan gunakan telepon tanpa izin atasan.", "उत्पादन क्षेत्रमा सुपरभाइजरको अनुमति बिना फोन प्रयोग नगर्नुहोस्।")
  },
  {
    group: "phone",
    icon: "phone",
    title: tx("Zdjęcia i nagrania", "Photos and recordings", "Фото і відео", "Фото и видео", "Şəkil və video", "Fotos y grabaciones", "Larawan at video", "Foto dan rekaman", "फोटो र भिडियो"),
    detail: tx("Nie rób zdjęć ani nagrań w pracy bez zgody.", "Do not take photos or recordings at work without permission.", "Не робіть фото або відео на роботі без дозволу.", "Не делайте фото или видео на работе без разрешения.", "İşdə icazəsiz şəkil və video çəkməyin.", "No hagas fotos ni grabaciones en el trabajo sin permiso.", "Huwag kumuha ng larawan o video sa trabaho nang walang pahintulot.", "Jangan foto atau merekam di tempat kerja tanpa izin.", "काममा अनुमति बिना फोटो वा भिडियो नखिच्नुहोस्।")
  },
  {
    group: "phone",
    icon: "phone",
    title: tx("Słuchawki", "Headphones", "Навушники", "Наушники", "Qulaqlıq", "Auriculares", "Headphones", "Headphone", "हेडफोन"),
    detail: tx("Nie używaj słuchawek w pracy, jeśli przeszkadzają w bezpieczeństwie lub komunikacji.", "Do not use headphones at work if they disturb safety or communication.", "Не використовуйте навушники, якщо вони заважають безпеці або комунікації.", "Не используйте наушники, если они мешают безопасности или общению.", "Təhlükəsizlik və ünsiyyətə mane olursa, işdə qulaqlıq istifadə etməyin.", "No uses auriculares si molestan la seguridad o comunicación.", "Huwag gumamit ng headphones kung nakakaistorbo sa safety o komunikasyon.", "Jangan pakai headphone jika mengganggu keselamatan atau komunikasi.", "सुरक्षा वा कुराकानीमा बाधा भए काममा हेडफोन प्रयोग नगर्नुहोस्।")
  },
  {
    group: "access",
    icon: "greenhouse",
    title: tx("Wejście do złej strefy", "Entering the wrong zone", "Вхід у неправильну зону", "Вход в неправильную зону", "Səhv zonaya giriş", "Entrar a zona equivocada", "Pagpasok sa maling zone", "Masuk ke zona yang salah", "गलत क्षेत्रमा प्रवेश"),
    detail: tx("Nie wchodź do szklarni, magazynu, przejścia ani strefy bez polecenia.", "Do not enter a greenhouse, warehouse, passage or zone without instruction.", "Не заходьте в теплицю, склад, прохід або зону без вказівки.", "Не входите в теплицу, склад, проход или зону без указания.", "Tapşırıq olmadan istixana, anbar, keçid və zonaya girməyin.", "No entres a invernadero, almacén, pasillo o zona sin indicación.", "Huwag pumasok sa greenhouse, bodega, daanan o zone kung walang utos.", "Jangan masuk rumah kaca, gudang, lorong atau zona tanpa instruksi.", "निर्देशन बिना ग्रीनहाउस, गोदाम, बाटो वा क्षेत्रमा नजानुहोस्।")
  },
  {
    group: "access",
    icon: "greenhouse",
    title: tx("Przechodzenie na cudze miejsce", "Moving to another person's place", "Перехід на чуже місце", "Переход на чужое место", "Başqasının yerinə keçmək", "Pasar al lugar de otra persona", "Paglipat sa puwesto ng iba", "Pindah ke tempat orang lain", "अरूको ठाउँमा जानु"),
    detail: tx("Nie zmieniaj rzędu, strony ani zadania bez informacji od brygadzisty.", "Do not change row, side or task without information from the brigadier.", "Не змінюйте ряд, сторону або завдання без інформації від бригадира.", "Не меняйте ряд, сторону или задание без информации от бригадира.", "Briqadirdən məlumat olmadan sıra, tərəf və tapşırığı dəyişməyin.", "No cambies fila, lado o tarea sin información del encargado.", "Huwag lumipat ng row, side o task kung walang sinabi ang brigadier.", "Jangan ganti baris, sisi atau tugas tanpa informasi dari mandor.", "ब्रिगेडियरको जानकारी बिना लाइन, साइड वा काम नबदल्नुहोस्।")
  },
  {
    group: "access",
    icon: "warehouse",
    title: tx("Magazyn bez zadania", "Warehouse without task", "Склад без завдання", "Склад без задания", "Tapşırıqsız anbar", "Almacén sin tarea", "Bodega nang walang task", "Gudang tanpa tugas", "काम बिना गोदाम"),
    detail: tx("Na magazyn idziesz tylko wtedy, gdy masz tam pracę albo polecenie.", "Go to the warehouse only when you have work there or an instruction.", "На склад йдіть тільки тоді, коли маєте там роботу або вказівку.", "На склад идите только если у вас там работа или указание.", "Anbara yalnız orada işiniz və ya tapşırığınız olduqda gedin.", "Ve al almacén solo si tienes trabajo allí o indicación.", "Pumunta lang sa bodega kung may trabaho o utos doon.", "Pergi ke gudang hanya jika ada tugas atau instruksi.", "त्यहाँ काम वा निर्देशन हुँदा मात्र गोदाम जानुहोस्।")
  },
  {
    group: "data",
    icon: "id",
    title: tx("Cudzy PIN", "Another person's PIN", "Чужий PIN", "Чужой PIN", "Başqasının PIN-i", "PIN de otra persona", "PIN ng ibang tao", "PIN orang lain", "अरूको PIN"),
    detail: tx("Nie używaj PIN-u innej osoby. To powoduje błędną rejestrację pracy.", "Do not use another person's PIN. It causes wrong work registration.", "Не використовуйте PIN іншої людини. Це дає неправильну реєстрацію роботи.", "Не используйте PIN другого человека. Это дает неправильную регистрацию работы.", "Başqasının PIN-indən istifadə etməyin. Bu iş qeydiyyatını səhv edir.", "No uses PIN de otra persona. Causa registro incorrecto del trabajo.", "Huwag gumamit ng PIN ng iba. Magiging mali ang work registration.", "Jangan pakai PIN orang lain. Ini membuat pencatatan kerja salah.", "अरूको PIN प्रयोग नगर्नुहोस्। यसले कामको रेकर्ड गलत बनाउँछ।")
  },
  {
    group: "data",
    icon: "reader",
    title: tx("Cudzy tag albo reader", "Another person's tag or reader", "Чужий тег або рідер", "Чужой тег или ридер", "Başqasının tagı və ya reader-i", "Tag o reader de otra persona", "Tag o reader ng ibang tao", "Tag atau reader orang lain", "अरूको tag वा reader"),
    detail: tx("Używaj tylko tego, co zostało Ci wydane albo wskazane.", "Use only what was given or indicated to you.", "Використовуйте тільки те, що вам видали або вказали.", "Используйте только то, что вам выдали или указали.", "Yalnız sizə verilən və ya göstərilən şeyi istifadə edin.", "Usa solo lo que te dieron o indicaron.", "Gamitin lang ang ibinigay o itinuro sa iyo.", "Gunakan hanya yang diberikan atau ditunjukkan kepada Anda.", "तपाईंलाई दिइएको वा देखाइएको कुरा मात्र प्रयोग गर्नुहोस्।")
  },
  {
    group: "data",
    icon: "document",
    title: tx("Dane innej osoby", "Another person's data", "Дані іншої людини", "Данные другого человека", "Başqasının məlumatı", "Datos de otra persona", "Data ng ibang tao", "Data orang lain", "अरूको डाटा"),
    detail: tx("Nie loguj się i nie zapisuj pracy na dane innej osoby.", "Do not log in or register work on another person's data.", "Не входьте і не записуйте роботу на дані іншої людини.", "Не входите и не записывайте работу на данные другого человека.", "Başqasının məlumatı ilə daxil olmayın və iş qeyd etməyin.", "No inicies sesión ni registres trabajo con datos de otra persona.", "Huwag mag-login o mag-record ng trabaho gamit ang data ng iba.", "Jangan login atau mencatat kerja dengan data orang lain.", "अरूको डाटामा लगइन वा काम रेकर्ड नगर्नुहोस्।")
  }
];
})();
