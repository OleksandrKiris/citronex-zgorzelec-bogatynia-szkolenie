(() => {
  const tx = (pl, en, ua, ru, az, es, fil, id, ne) => ({ pl, en, ua, ru, az, es, fil, id, ne });
  const D = window.CX_DATA;
  if (!D) return;

  const locationName = "Zgorzelec / Bogatynia";
  const appTitle = "Citronex Zgorzelec / Bogatynia";
  D.meta.version = "20260713-zgorzelec-bogatynia-base1";
  D.meta.location = locationName;
  D.meta.appTitle = appTitle;
  D.meta.repo = "citronex-zgorzelec-bogatynia-szkolenie";
  D.meta.publicUrl = "https://oleksandrkiris.github.io/citronex-zgorzelec-bogatynia-szkolenie/";

  D.ui.brand = tx(
    "SYSTEM INFORMACYJNO-UCZĄCY",
    "INFORMATION AND TRAINING SYSTEM",
    "ІНФОРМАЦІЙНО-НАВЧАЛЬНА СИСТЕМА",
    "ИНФОРМАЦИОННО-ОБУЧАЮЩАЯ СИСТЕМА",
    "MƏLUMAT VƏ TƏLİM SİSTEMİ",
    "SISTEMA INFORMATIVO Y DE FORMACIÓN",
    "SISTEMA NG IMPORMASYON AT PAGSASANAY",
    "SISTEM INFORMASI DAN PELATIHAN",
    "सूचना र तालिम प्रणाली"
  );
  D.ui.subtitle = tx(
    locationName + " - wybierz, czego potrzebujesz",
    locationName + " - choose what you need",
    locationName + " - оберіть, що вам потрібно",
    locationName + " - выберите, что вам нужно",
    locationName + " - sizə lazım olanı seçin",
    locationName + " - elige lo que necesitas",
    locationName + " - piliin ang kailangan mo",
    locationName + " - pilih yang Anda butuhkan",
    locationName + " - तपाईंलाई चाहिएको कुरा छान्नुहोस्"
  );

  D.pages.mapa.lead = tx(
    "To jest wersja bazowa dla lokalizacji. Uzupełnij dokładne wejścia, mapy i zdjęcia, zanim wyślesz link pracownikom.",
    "This is a base version for the location. Add exact entrances, maps and photos before sending the link to workers.",
    "Це базова версія для локації. Додайте точні входи, карти і фото перед відправкою посилання працівникам.",
    "Это базовая версия для локации. Добавьте точные входы, карты и фото перед отправкой ссылки работникам.",
    "Bu lokasiya üçün baza versiyasıdır. Linki işçilərə göndərməzdən əvvəl dəqiq girişləri, xəritələri və şəkilləri əlavə edin.",
    "Esta es una versión base para la ubicación. Añade entradas exactas, mapas y fotos antes de enviar el enlace.",
    "Base version ito para sa lokasyon. Idagdag ang eksaktong pasukan, mapa at larawan bago ipadala ang link.",
    "Ini versi dasar untuk lokasi. Tambahkan pintu masuk, peta, dan foto yang tepat sebelum mengirim tautan.",
    "यो स्थानका लागि आधार संस्करण हो। लिंक पठाउनु अघि सही प्रवेश, नक्सा र फोटो थप्नुहोस्।"
  );

  D.maps = [
      { key: "zgorzelec", tone: "blue", title: tx("Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec"), note: tx("Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji."), url: "https://www.google.com/maps/search/?api=1&query=Zgorzelec" },
      { key: "bogatynia", tone: "blue", title: tx("Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia"), note: tx("Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji.", "Najpierw użyj mapy ogólnej. Dokładny adres trzeba uzupełnić po przekazaniu lokalizacji."), url: "https://www.google.com/maps/search/?api=1&query=Bogatynia" },
      { key: "warehouse", tone: "yellow", title: tx("Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia"), note: tx("Ten link jest tymczasowy. Podmień go na dokładny adres magazynu lub wejścia.", "Ten link jest tymczasowy. Podmień go na dokładny adres magazynu lub wejścia.", "Ten link jest tymczasowy. Podmień go na dokładny adres magazynu lub wejścia.", "Ten link jest tymczasowy. Podmień go na dokładny adres magazynu lub wejścia.", "Ten link jest tymczasowy. Podmień go na dokładny adres magazynu lub wejścia.", "Ten link jest tymczasowy. Podmień go na dokładny adres magazynu lub wejścia.", "Ten link jest tymczasowy. Podmień go na dokładny adres magazynu lub wejścia.", "Ten link jest tymczasowy. Podmień go na dokładny adres magazynu lub wejścia.", "Ten link jest tymczasowy. Podmień go na dokładny adres magazynu lub wejścia."), url: "https://www.google.com/maps/search/?api=1&query=Zgorzelec+Bogatynia+magazyn" }
  ];

  D.mapPhotos = [
    {
      tone: "yellow",
      title: tx("Zdjęcia wejść - do uzupełnienia", "Entrance photos - to add", "Фото входів - додати", "Фото входов - добавить", "Giriş şəkilləri - əlavə ediləcək", "Fotos de entradas - por añadir", "Larawan ng pasukan - idaragdag", "Foto pintu masuk - perlu ditambah", "प्रवेश फोटो - थप्नु पर्ने"),
      note: tx("Dodaj zdjęcia konkretnego wejścia dla tej lokalizacji.", "Add photos of the exact entrance for this location.", "Додайте фото точного входу для цієї локації.", "Добавьте фото точного входа для этой локации.", "Bu lokasiya üçün dəqiq giriş şəkillərini əlavə edin.", "Añade fotos de la entrada exacta.", "Idagdag ang larawan ng eksaktong pasukan.", "Tambahkan foto pintu masuk yang tepat.", "यस स्थानको सही प्रवेश फोटो थप्नुहोस्।"),
      photos: ["assets/location/entry-placeholder.svg"]
    }
  ];

  D.warehouseRules = [
    tx("Na magazynie nie używa się readerów.", "Readers are not used in the warehouse.", "На складі рідер не використовується.", "На складе ридер не используется.", "Anbarda reader istifadə olunmur.", "En almacén no se usa reader.", "Walang reader sa bodega.", "Di gudang tidak memakai reader.", "गोदाममा reader प्रयोग हुँदैन।"),
    tx("Mapa i zdjęcie wejścia są do uzupełnienia dla tej lokalizacji.", "The map and entrance photo must be added for this location.", "Карту і фото входу треба додати для цієї локації.", "Карту и фото входа нужно добавить для этой локации.", "Bu lokasiya üçün xəritə və giriş şəkli əlavə edilməlidir.", "Hay que añadir mapa y foto de entrada para esta ubicación.", "Kailangang idagdag ang mapa at larawan ng pasukan.", "Peta dan foto pintu masuk perlu ditambahkan.", "यस स्थानका लागि नक्सा र प्रवेश फोटो थप्नु पर्छ।"),
    tx("Przy spóźnieniu lub chorobie użyj kontaktów po ich uzupełnieniu.", "If late or sick, use contacts after they are added.", "Якщо запізнюєтесь або хворієте, використайте контакти після їх додавання.", "Если опаздываете или болеете, используйте контакты после добавления.", "Gecikmə və ya xəstəlik zamanı kontaktlar əlavə ediləndən sonra istifadə edin.", "Si llegas tarde o estás enfermo, usa contactos después de añadirlos.", "Kung late o may sakit, gamitin ang contacts kapag nadagdag na.", "Jika terlambat atau sakit, gunakan kontak setelah ditambahkan.", "ढिलो वा बिरामी भए, सम्पर्क थपिएपछि प्रयोग गर्नुहोस्।")
  ];

  D.contacts = {
    coordinators: [],
    warehouse: [],
    greenhouse: {}
  };

  D.medical = [
    {
      tone: "yellow",
      title: tx("Lekarz - do uzupełnienia dla lokalizacji", "Doctor - to add for this location", "Лікар - додати для локації", "Врач - добавить для локации", "Həkim - lokasiya üçün əlavə edin", "Médico - por añadir", "Doktor - idaragdag", "Dokter - perlu ditambah", "डाक्टर - थप्नु पर्ने"),
      body: [
        tx("Dodaj najbliższą przychodnię, SOR i dentystę dla tej lokalizacji.", "Add the nearest clinic, emergency room and dentist for this location.", "Додайте найближчу поліклініку, SOR і стоматолога для цієї локації.", "Добавьте ближайшую поликлинику, SOR и стоматолога для этой локации.", "Bu lokasiya üçün ən yaxın poliklinika, təcili yardım və diş həkimini əlavə edin.", "Añade clínica, urgencias y dentista cercanos.", "Idagdag ang malapit na klinika, emergency at dentista.", "Tambahkan klinik, IGD, dan dokter gigi terdekat.", "यस स्थानका लागि नजिकको क्लिनिक, आपतकालीन र दन्त चिकित्सक थप्नुहोस्।"),
        tx("W nagłym zagrożeniu dzwoń pod numer 112.", "In emergency call 112.", "У небезпеці дзвоніть 112.", "При опасности звоните 112.", "Təcili təhlükədə 112-yə zəng edin.", "En emergencia llama 112.", "Sa emergency tumawag sa 112.", "Dalam darurat hubungi 112.", "आपतकालमा 112 मा फोन गर्नुहोस्।")
      ]
    }
  ];

  D.city = [
    {
      tone: "blue",
      icon: "city",
      tag: tx("Miasto", "City", "Місто", "Город", "Şəhər", "Ciudad", "Lungsod", "Kota", "शहर"),
      title: tx("Urząd i sprawy miejskie - do uzupełnienia", "Office and city matters - to add", "Установа і міські справи - додати", "Учреждение и городские дела - добавить", "İdarə və şəhər işləri - əlavə edin", "Oficina y asuntos de ciudad - por añadir", "Opisina at city matters - idaragdag", "Kantor dan urusan kota - perlu ditambah", "कार्यालय र शहरका काम - थप्नु पर्ने"),
      note: tx("Dodaj właściwy urząd, banki i mapy dla tej lokalizacji.", "Add the right office, banks and maps for this location.", "Додайте правильну установу, банки і карти для цієї локації.", "Добавьте правильное учреждение, банки и карты для этой локации.", "Bu lokasiya üçün düzgün idarə, banklar və xəritələri əlavə edin.", "Añade oficina, bancos y mapas correctos.", "Idagdag ang tamang opisina, bangko at mapa.", "Tambahkan kantor, bank, dan peta yang benar.", "यस स्थानका लागि सही कार्यालय, बैंक र नक्सा थप्नुहोस्।"),
      links: [
        { url: D.maps[0].url, label: tx("Otwórz mapę lokalizacji", "Open location map", "Відкрити карту локації", "Открыть карту локации", "Lokasiya xəritəsini aç", "Abrir mapa de ubicación", "Buksan ang mapa ng lokasyon", "Buka peta lokasi", "स्थानको नक्सा खोल्नुहोस्"), tone: "blue" }
      ]
    }
  ];

  D.groups = [];
})();