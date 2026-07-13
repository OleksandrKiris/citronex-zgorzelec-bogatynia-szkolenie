(() => {
  const tx = (pl, en, ua, ru, az, es, fil, id, ne) => ({ pl, en, ua, ru, az, es, fil, id, ne });
  const D = window.CX_DATA;
  if (!D) return;

  const locationName = "Zgorzelec / Bogatynia";
  const appTitle = "Citronex Zgorzelec / Bogatynia";
  D.meta.version = "20260713-polskie-pomidory-logo1";
  D.meta.location = locationName;
  D.meta.appTitle = appTitle;
  D.meta.repo = "citronex-zgorzelec-bogatynia-szkolenie";
  D.meta.publicUrl = "https://oleksandrkiris.github.io/citronex-zgorzelec-bogatynia-szkolenie/";
  D.meta.logo = "assets/brand/polskie-pomidory-logo.png";
  D.meta.logoAlt = "Polskie Pomidory";

  D.ui.brand = tx(
    "SYSTEM INFORMACYJNO-UCZÄ„CY",
    "INFORMATION AND TRAINING SYSTEM",
    "Đ†ĐťĐ¤ĐžĐ ĐśĐĐ¦Đ†Đ™ĐťĐž-ĐťĐĐ’Đ§ĐĐ›Đ¬ĐťĐ ĐˇĐĐˇĐ˘Đ•ĐśĐ",
    "ĐĐťĐ¤ĐžĐ ĐśĐĐ¦ĐĐžĐťĐťĐž-ĐžĐ‘ĐŁĐ§ĐĐ®Đ©ĐĐŻ ĐˇĐĐˇĐ˘Đ•ĐśĐ",
    "MĆŹLUMAT VĆŹ TĆŹLÄ°M SÄ°STEMÄ°",
    "SISTEMA INFORMATIVO Y DE FORMACIĂ“N",
    "SISTEMA NG IMPORMASYON AT PAGSASANAY",
    "SISTEM INFORMASI DAN PELATIHAN",
    "ŕ¤¸ŕĄ‚ŕ¤šŕ¤¨ŕ¤ľ ŕ¤° ŕ¤¤ŕ¤ľŕ¤˛ŕ¤żŕ¤® ŕ¤ŞŕĄŤŕ¤°ŕ¤Łŕ¤ľŕ¤˛ŕĄ€"
  );
  D.ui.subtitle = tx(
    locationName + " - wybierz, czego potrzebujesz",
    locationName + " - choose what you need",
    locationName + " - ĐľĐ±ĐµŃ€Ń–Ń‚ŃŚ, Ń‰Đľ Đ˛Đ°ĐĽ ĐżĐľŃ‚Ń€Ń–Đ±Đ˝Đľ",
    locationName + " - Đ˛Ń‹Đ±ĐµŃ€Đ¸Ń‚Đµ, Ń‡Ń‚Đľ Đ˛Đ°ĐĽ Đ˝ŃĐ¶Đ˝Đľ",
    locationName + " - sizÉ™ lazÄ±m olanÄ± seĂ§in",
    locationName + " - elige lo que necesitas",
    locationName + " - piliin ang kailangan mo",
    locationName + " - pilih yang Anda butuhkan",
    locationName + " - ŕ¤¤ŕ¤Şŕ¤ľŕ¤ŕ¤‚ŕ¤˛ŕ¤ľŕ¤ ŕ¤šŕ¤ľŕ¤ąŕ¤żŕ¤Źŕ¤•ŕĄ‹ ŕ¤•ŕĄŕ¤°ŕ¤ľ ŕ¤›ŕ¤ľŕ¤¨ŕĄŤŕ¤¨ŕĄŕ¤ąŕĄ‹ŕ¤¸ŕĄŤ"
  );

  D.pages.mapa.lead = tx(
    "To jest wersja bazowa dla lokalizacji. UzupeĹ‚nij dokĹ‚adne wejĹ›cia, mapy i zdjÄ™cia, zanim wyĹ›lesz link pracownikom.",
    "This is a base version for the location. Add exact entrances, maps and photos before sending the link to workers.",
    "Đ¦Đµ Đ±Đ°Đ·ĐľĐ˛Đ° Đ˛ĐµŃ€ŃŃ–ŃŹ Đ´Đ»ŃŹ Đ»ĐľĐşĐ°Ń†Ń–Ń—. Đ”ĐľĐ´Đ°ĐąŃ‚Đµ Ń‚ĐľŃ‡Đ˝Ń– Đ˛Ń…ĐľĐ´Đ¸, ĐşĐ°Ń€Ń‚Đ¸ Ń– Ń„ĐľŃ‚Đľ ĐżĐµŃ€ĐµĐ´ Đ˛Ń–Đ´ĐżŃ€Đ°Đ˛ĐşĐľŃŽ ĐżĐľŃĐ¸Đ»Đ°Đ˝Đ˝ŃŹ ĐżŃ€Đ°Ń†Ń–Đ˛Đ˝Đ¸ĐşĐ°ĐĽ.",
    "Đ­Ń‚Đľ Đ±Đ°Đ·ĐľĐ˛Đ°ŃŹ Đ˛ĐµŃ€ŃĐ¸ŃŹ Đ´Đ»ŃŹ Đ»ĐľĐşĐ°Ń†Đ¸Đ¸. Đ”ĐľĐ±Đ°Đ˛ŃŚŃ‚Đµ Ń‚ĐľŃ‡Đ˝Ń‹Đµ Đ˛Ń…ĐľĐ´Ń‹, ĐşĐ°Ń€Ń‚Ń‹ Đ¸ Ń„ĐľŃ‚Đľ ĐżĐµŃ€ĐµĐ´ ĐľŃ‚ĐżŃ€Đ°Đ˛ĐşĐľĐą ŃŃŃ‹Đ»ĐşĐ¸ Ń€Đ°Đ±ĐľŃ‚Đ˝Đ¸ĐşĐ°ĐĽ.",
    "Bu lokasiya ĂĽĂ§ĂĽn baza versiyasÄ±dÄ±r. Linki iĹźĂ§ilÉ™rÉ™ gĂ¶ndÉ™rmÉ™zdÉ™n É™vvÉ™l dÉ™qiq giriĹźlÉ™ri, xÉ™ritÉ™lÉ™ri vÉ™ ĹźÉ™killÉ™ri É™lavÉ™ edin.",
    "Esta es una versiĂłn base para la ubicaciĂłn. AĂ±ade entradas exactas, mapas y fotos antes de enviar el enlace.",
    "Base version ito para sa lokasyon. Idagdag ang eksaktong pasukan, mapa at larawan bago ipadala ang link.",
    "Ini versi dasar untuk lokasi. Tambahkan pintu masuk, peta, dan foto yang tepat sebelum mengirim tautan.",
    "ŕ¤ŻŕĄ‹ ŕ¤¸ŕĄŤŕ¤Ąŕ¤ľŕ¤¨ŕ¤•ŕ¤ľ ŕ¤˛ŕ¤ľŕ¤—ŕ¤ż ŕ¤†ŕ¤§ŕ¤ľŕ¤° ŕ¤¸ŕ¤‚ŕ¤¸ŕĄŤŕ¤•ŕ¤°ŕ¤Ł ŕ¤ąŕĄ‹ŕĄ¤ ŕ¤˛ŕ¤żŕ¤‚ŕ¤• ŕ¤Şŕ¤ ŕ¤ľŕ¤‰ŕ¤¨ŕĄ ŕ¤…ŕ¤ŕ¤ż ŕ¤¸ŕ¤ąŕĄ€ ŕ¤ŞŕĄŤŕ¤°ŕ¤µŕĄ‡ŕ¤¶, ŕ¤¨ŕ¤•ŕĄŤŕ¤¸ŕ¤ľ ŕ¤° ŕ¤«ŕĄ‹ŕ¤źŕĄ‹ ŕ¤Ąŕ¤ŞŕĄŤŕ¤¨ŕĄŕ¤ąŕĄ‹ŕ¤¸ŕĄŤŕĄ¤"
  );

  D.maps = [
      { key: "zgorzelec", tone: "blue", title: tx("Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec", "Punkt spotkania - Zgorzelec"), note: tx("Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji."), url: "https://www.google.com/maps/search/?api=1&query=Zgorzelec" },
      { key: "bogatynia", tone: "blue", title: tx("Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia", "Punkt spotkania - Bogatynia"), note: tx("Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji.", "Najpierw uĹĽyj mapy ogĂłlnej. DokĹ‚adny adres trzeba uzupeĹ‚niÄ‡ po przekazaniu lokalizacji."), url: "https://www.google.com/maps/search/?api=1&query=Bogatynia" },
      { key: "warehouse", tone: "yellow", title: tx("Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia", "Magazyn / miejsce pracy - Zgorzelec / Bogatynia"), note: tx("Ten link jest tymczasowy. PodmieĹ„ go na dokĹ‚adny adres magazynu lub wejĹ›cia.", "Ten link jest tymczasowy. PodmieĹ„ go na dokĹ‚adny adres magazynu lub wejĹ›cia.", "Ten link jest tymczasowy. PodmieĹ„ go na dokĹ‚adny adres magazynu lub wejĹ›cia.", "Ten link jest tymczasowy. PodmieĹ„ go na dokĹ‚adny adres magazynu lub wejĹ›cia.", "Ten link jest tymczasowy. PodmieĹ„ go na dokĹ‚adny adres magazynu lub wejĹ›cia.", "Ten link jest tymczasowy. PodmieĹ„ go na dokĹ‚adny adres magazynu lub wejĹ›cia.", "Ten link jest tymczasowy. PodmieĹ„ go na dokĹ‚adny adres magazynu lub wejĹ›cia.", "Ten link jest tymczasowy. PodmieĹ„ go na dokĹ‚adny adres magazynu lub wejĹ›cia.", "Ten link jest tymczasowy. PodmieĹ„ go na dokĹ‚adny adres magazynu lub wejĹ›cia."), url: "https://www.google.com/maps/search/?api=1&query=Zgorzelec+Bogatynia+magazyn" }
  ];

  D.mapPhotos = [
    {
      tone: "yellow",
      title: tx("ZdjÄ™cia wejĹ›Ä‡ - do uzupeĹ‚nienia", "Entrance photos - to add", "Đ¤ĐľŃ‚Đľ Đ˛Ń…ĐľĐ´Ń–Đ˛ - Đ´ĐľĐ´Đ°Ń‚Đ¸", "Đ¤ĐľŃ‚Đľ Đ˛Ń…ĐľĐ´ĐľĐ˛ - Đ´ĐľĐ±Đ°Đ˛Đ¸Ń‚ŃŚ", "GiriĹź ĹźÉ™killÉ™ri - É™lavÉ™ edilÉ™cÉ™k", "Fotos de entradas - por aĂ±adir", "Larawan ng pasukan - idaragdag", "Foto pintu masuk - perlu ditambah", "ŕ¤ŞŕĄŤŕ¤°ŕ¤µŕĄ‡ŕ¤¶ ŕ¤«ŕĄ‹ŕ¤źŕĄ‹ - ŕ¤Ąŕ¤ŞŕĄŤŕ¤¨ŕĄ ŕ¤Şŕ¤°ŕĄŤŕ¤¨ŕĄ‡"),
      note: tx("Dodaj zdjÄ™cia konkretnego wejĹ›cia dla tej lokalizacji.", "Add photos of the exact entrance for this location.", "Đ”ĐľĐ´Đ°ĐąŃ‚Đµ Ń„ĐľŃ‚Đľ Ń‚ĐľŃ‡Đ˝ĐľĐłĐľ Đ˛Ń…ĐľĐ´Ń Đ´Đ»ŃŹ Ń†Ń–Ń”Ń— Đ»ĐľĐşĐ°Ń†Ń–Ń—.", "Đ”ĐľĐ±Đ°Đ˛ŃŚŃ‚Đµ Ń„ĐľŃ‚Đľ Ń‚ĐľŃ‡Đ˝ĐľĐłĐľ Đ˛Ń…ĐľĐ´Đ° Đ´Đ»ŃŹ ŃŤŃ‚ĐľĐą Đ»ĐľĐşĐ°Ń†Đ¸Đ¸.", "Bu lokasiya ĂĽĂ§ĂĽn dÉ™qiq giriĹź ĹźÉ™killÉ™rini É™lavÉ™ edin.", "AĂ±ade fotos de la entrada exacta.", "Idagdag ang larawan ng eksaktong pasukan.", "Tambahkan foto pintu masuk yang tepat.", "ŕ¤Żŕ¤¸ ŕ¤¸ŕĄŤŕ¤Ąŕ¤ľŕ¤¨ŕ¤•ŕĄ‹ ŕ¤¸ŕ¤ąŕĄ€ ŕ¤ŞŕĄŤŕ¤°ŕ¤µŕĄ‡ŕ¤¶ ŕ¤«ŕĄ‹ŕ¤źŕĄ‹ ŕ¤Ąŕ¤ŞŕĄŤŕ¤¨ŕĄŕ¤ąŕĄ‹ŕ¤¸ŕĄŤŕĄ¤"),
      photos: ["assets/location/entry-placeholder.svg"]
    }
  ];

  D.warehouseRules = [
    tx("Na magazynie nie uĹĽywa siÄ™ readerĂłw.", "Readers are not used in the warehouse.", "ĐťĐ° ŃĐşĐ»Đ°Đ´Ń– Ń€Ń–Đ´ĐµŃ€ Đ˝Đµ Đ˛Đ¸ĐşĐľŃ€Đ¸ŃŃ‚ĐľĐ˛ŃŃ”Ń‚ŃŚŃŃŹ.", "ĐťĐ° ŃĐşĐ»Đ°Đ´Đµ Ń€Đ¸Đ´ĐµŃ€ Đ˝Đµ Đ¸ŃĐżĐľĐ»ŃŚĐ·ŃĐµŃ‚ŃŃŹ.", "Anbarda reader istifadÉ™ olunmur.", "En almacĂ©n no se usa reader.", "Walang reader sa bodega.", "Di gudang tidak memakai reader.", "ŕ¤—ŕĄ‹ŕ¤¦ŕ¤ľŕ¤®ŕ¤®ŕ¤ľ reader ŕ¤ŞŕĄŤŕ¤°ŕ¤ŻŕĄ‹ŕ¤— ŕ¤ąŕĄŕ¤ŕ¤¦ŕĄŕ¤¨ŕĄ¤"),
    tx("Mapa i zdjÄ™cie wejĹ›cia sÄ… do uzupeĹ‚nienia dla tej lokalizacji.", "The map and entrance photo must be added for this location.", "ĐšĐ°Ń€Ń‚Ń Ń– Ń„ĐľŃ‚Đľ Đ˛Ń…ĐľĐ´Ń Ń‚Ń€ĐµĐ±Đ° Đ´ĐľĐ´Đ°Ń‚Đ¸ Đ´Đ»ŃŹ Ń†Ń–Ń”Ń— Đ»ĐľĐşĐ°Ń†Ń–Ń—.", "ĐšĐ°Ń€Ń‚Ń Đ¸ Ń„ĐľŃ‚Đľ Đ˛Ń…ĐľĐ´Đ° Đ˝ŃĐ¶Đ˝Đľ Đ´ĐľĐ±Đ°Đ˛Đ¸Ń‚ŃŚ Đ´Đ»ŃŹ ŃŤŃ‚ĐľĐą Đ»ĐľĐşĐ°Ń†Đ¸Đ¸.", "Bu lokasiya ĂĽĂ§ĂĽn xÉ™ritÉ™ vÉ™ giriĹź ĹźÉ™kli É™lavÉ™ edilmÉ™lidir.", "Hay que aĂ±adir mapa y foto de entrada para esta ubicaciĂłn.", "Kailangang idagdag ang mapa at larawan ng pasukan.", "Peta dan foto pintu masuk perlu ditambahkan.", "ŕ¤Żŕ¤¸ ŕ¤¸ŕĄŤŕ¤Ąŕ¤ľŕ¤¨ŕ¤•ŕ¤ľ ŕ¤˛ŕ¤ľŕ¤—ŕ¤ż ŕ¤¨ŕ¤•ŕĄŤŕ¤¸ŕ¤ľ ŕ¤° ŕ¤ŞŕĄŤŕ¤°ŕ¤µŕĄ‡ŕ¤¶ ŕ¤«ŕĄ‹ŕ¤źŕĄ‹ ŕ¤Ąŕ¤ŞŕĄŤŕ¤¨ŕĄ ŕ¤Şŕ¤°ŕĄŤŕ¤›ŕĄ¤"),
    tx("Przy spĂłĹşnieniu lub chorobie uĹĽyj kontaktĂłw po ich uzupeĹ‚nieniu.", "If late or sick, use contacts after they are added.", "ĐŻĐşŃ‰Đľ Đ·Đ°ĐżŃ–Đ·Đ˝ŃŽŃ”Ń‚ĐµŃŃŚ Đ°Đ±Đľ Ń…Đ˛ĐľŃ€Ń–Ń”Ń‚Đµ, Đ˛Đ¸ĐşĐľŃ€Đ¸ŃŃ‚Đ°ĐąŃ‚Đµ ĐşĐľĐ˝Ń‚Đ°ĐşŃ‚Đ¸ ĐżŃ–ŃĐ»ŃŹ Ń—Ń… Đ´ĐľĐ´Đ°Đ˛Đ°Đ˝Đ˝ŃŹ.", "Đ•ŃĐ»Đ¸ ĐľĐżĐ°Đ·Đ´Ń‹Đ˛Đ°ĐµŃ‚Đµ Đ¸Đ»Đ¸ Đ±ĐľĐ»ĐµĐµŃ‚Đµ, Đ¸ŃĐżĐľĐ»ŃŚĐ·ŃĐąŃ‚Đµ ĐşĐľĐ˝Ń‚Đ°ĐşŃ‚Ń‹ ĐżĐľŃĐ»Đµ Đ´ĐľĐ±Đ°Đ˛Đ»ĐµĐ˝Đ¸ŃŹ.", "GecikmÉ™ vÉ™ ya xÉ™stÉ™lik zamanÄ± kontaktlar É™lavÉ™ edilÉ™ndÉ™n sonra istifadÉ™ edin.", "Si llegas tarde o estĂˇs enfermo, usa contactos despuĂ©s de aĂ±adirlos.", "Kung late o may sakit, gamitin ang contacts kapag nadagdag na.", "Jika terlambat atau sakit, gunakan kontak setelah ditambahkan.", "ŕ¤˘ŕ¤żŕ¤˛ŕĄ‹ ŕ¤µŕ¤ľ ŕ¤¬ŕ¤żŕ¤°ŕ¤ľŕ¤®ŕĄ€ ŕ¤­ŕ¤Ź, ŕ¤¸ŕ¤®ŕĄŤŕ¤Şŕ¤°ŕĄŤŕ¤• ŕ¤Ąŕ¤Şŕ¤żŕ¤Źŕ¤Şŕ¤›ŕ¤ż ŕ¤ŞŕĄŤŕ¤°ŕ¤ŻŕĄ‹ŕ¤— ŕ¤—ŕ¤°ŕĄŤŕ¤¨ŕĄŕ¤ąŕĄ‹ŕ¤¸ŕĄŤŕĄ¤")
  ];

  D.contacts = {
    coordinators: [],
    warehouse: [],
    greenhouse: {}
  };

  D.medical = [
    {
      tone: "yellow",
      title: tx("Lekarz - do uzupeĹ‚nienia dla lokalizacji", "Doctor - to add for this location", "Đ›Ń–ĐşĐ°Ń€ - Đ´ĐľĐ´Đ°Ń‚Đ¸ Đ´Đ»ŃŹ Đ»ĐľĐşĐ°Ń†Ń–Ń—", "Đ’Ń€Đ°Ń‡ - Đ´ĐľĐ±Đ°Đ˛Đ¸Ń‚ŃŚ Đ´Đ»ŃŹ Đ»ĐľĐşĐ°Ń†Đ¸Đ¸", "HÉ™kim - lokasiya ĂĽĂ§ĂĽn É™lavÉ™ edin", "MĂ©dico - por aĂ±adir", "Doktor - idaragdag", "Dokter - perlu ditambah", "ŕ¤ˇŕ¤ľŕ¤•ŕĄŤŕ¤źŕ¤° - ŕ¤Ąŕ¤ŞŕĄŤŕ¤¨ŕĄ ŕ¤Şŕ¤°ŕĄŤŕ¤¨ŕĄ‡"),
      body: [
        tx("Dodaj najbliĹĽszÄ… przychodniÄ™, SOR i dentystÄ™ dla tej lokalizacji.", "Add the nearest clinic, emergency room and dentist for this location.", "Đ”ĐľĐ´Đ°ĐąŃ‚Đµ Đ˝Đ°ĐąĐ±Đ»Đ¸Đ¶Ń‡Ń ĐżĐľĐ»Ń–ĐşĐ»Ń–Đ˝Ń–ĐşŃ, SOR Ń– ŃŃ‚ĐľĐĽĐ°Ń‚ĐľĐ»ĐľĐłĐ° Đ´Đ»ŃŹ Ń†Ń–Ń”Ń— Đ»ĐľĐşĐ°Ń†Ń–Ń—.", "Đ”ĐľĐ±Đ°Đ˛ŃŚŃ‚Đµ Đ±Đ»Đ¸Đ¶Đ°ĐąŃŃŃŽ ĐżĐľĐ»Đ¸ĐşĐ»Đ¸Đ˝Đ¸ĐşŃ, SOR Đ¸ ŃŃ‚ĐľĐĽĐ°Ń‚ĐľĐ»ĐľĐłĐ° Đ´Đ»ŃŹ ŃŤŃ‚ĐľĐą Đ»ĐľĐşĐ°Ń†Đ¸Đ¸.", "Bu lokasiya ĂĽĂ§ĂĽn É™n yaxÄ±n poliklinika, tÉ™cili yardÄ±m vÉ™ diĹź hÉ™kimini É™lavÉ™ edin.", "AĂ±ade clĂ­nica, urgencias y dentista cercanos.", "Idagdag ang malapit na klinika, emergency at dentista.", "Tambahkan klinik, IGD, dan dokter gigi terdekat.", "ŕ¤Żŕ¤¸ ŕ¤¸ŕĄŤŕ¤Ąŕ¤ľŕ¤¨ŕ¤•ŕ¤ľ ŕ¤˛ŕ¤ľŕ¤—ŕ¤ż ŕ¤¨ŕ¤śŕ¤żŕ¤•ŕ¤•ŕĄ‹ ŕ¤•ŕĄŤŕ¤˛ŕ¤żŕ¤¨ŕ¤żŕ¤•, ŕ¤†ŕ¤Şŕ¤¤ŕ¤•ŕ¤ľŕ¤˛ŕĄ€ŕ¤¨ ŕ¤° ŕ¤¦ŕ¤¨ŕĄŤŕ¤¤ ŕ¤šŕ¤żŕ¤•ŕ¤żŕ¤¤ŕĄŤŕ¤¸ŕ¤• ŕ¤Ąŕ¤ŞŕĄŤŕ¤¨ŕĄŕ¤ąŕĄ‹ŕ¤¸ŕĄŤŕĄ¤"),
        tx("W nagĹ‚ym zagroĹĽeniu dzwoĹ„ pod numer 112.", "In emergency call 112.", "ĐŁ Đ˝ĐµĐ±ĐµĐ·ĐżĐµŃ†Ń– Đ´Đ·Đ˛ĐľĐ˝Ń–Ń‚ŃŚ 112.", "ĐźŃ€Đ¸ ĐľĐżĐ°ŃĐ˝ĐľŃŃ‚Đ¸ Đ·Đ˛ĐľĐ˝Đ¸Ń‚Đµ 112.", "TÉ™cili tÉ™hlĂĽkÉ™dÉ™ 112-yÉ™ zÉ™ng edin.", "En emergencia llama 112.", "Sa emergency tumawag sa 112.", "Dalam darurat hubungi 112.", "ŕ¤†ŕ¤Şŕ¤¤ŕ¤•ŕ¤ľŕ¤˛ŕ¤®ŕ¤ľ 112 ŕ¤®ŕ¤ľ ŕ¤«ŕĄ‹ŕ¤¨ ŕ¤—ŕ¤°ŕĄŤŕ¤¨ŕĄŕ¤ąŕĄ‹ŕ¤¸ŕĄŤŕĄ¤")
      ]
    }
  ];

  D.city = [
    {
      tone: "blue",
      icon: "city",
      tag: tx("Miasto", "City", "ĐśŃ–ŃŃ‚Đľ", "Đ“ĐľŃ€ĐľĐ´", "ĹžÉ™hÉ™r", "Ciudad", "Lungsod", "Kota", "ŕ¤¶ŕ¤ąŕ¤°"),
      title: tx("UrzÄ…d i sprawy miejskie - do uzupeĹ‚nienia", "Office and city matters - to add", "ĐŁŃŃ‚Đ°Đ˝ĐľĐ˛Đ° Ń– ĐĽŃ–ŃŃŚĐşŃ– ŃĐżŃ€Đ°Đ˛Đ¸ - Đ´ĐľĐ´Đ°Ń‚Đ¸", "ĐŁŃ‡Ń€ĐµĐ¶Đ´ĐµĐ˝Đ¸Đµ Đ¸ ĐłĐľŃ€ĐľĐ´ŃĐşĐ¸Đµ Đ´ĐµĐ»Đ° - Đ´ĐľĐ±Đ°Đ˛Đ¸Ń‚ŃŚ", "Ä°darÉ™ vÉ™ ĹźÉ™hÉ™r iĹźlÉ™ri - É™lavÉ™ edin", "Oficina y asuntos de ciudad - por aĂ±adir", "Opisina at city matters - idaragdag", "Kantor dan urusan kota - perlu ditambah", "ŕ¤•ŕ¤ľŕ¤°ŕĄŤŕ¤Żŕ¤ľŕ¤˛ŕ¤Ż ŕ¤° ŕ¤¶ŕ¤ąŕ¤°ŕ¤•ŕ¤ľ ŕ¤•ŕ¤ľŕ¤® - ŕ¤Ąŕ¤ŞŕĄŤŕ¤¨ŕĄ ŕ¤Şŕ¤°ŕĄŤŕ¤¨ŕĄ‡"),
      note: tx("Dodaj wĹ‚aĹ›ciwy urzÄ…d, banki i mapy dla tej lokalizacji.", "Add the right office, banks and maps for this location.", "Đ”ĐľĐ´Đ°ĐąŃ‚Đµ ĐżŃ€Đ°Đ˛Đ¸Đ»ŃŚĐ˝Ń ŃŃŃ‚Đ°Đ˝ĐľĐ˛Ń, Đ±Đ°Đ˝ĐşĐ¸ Ń– ĐşĐ°Ń€Ń‚Đ¸ Đ´Đ»ŃŹ Ń†Ń–Ń”Ń— Đ»ĐľĐşĐ°Ń†Ń–Ń—.", "Đ”ĐľĐ±Đ°Đ˛ŃŚŃ‚Đµ ĐżŃ€Đ°Đ˛Đ¸Đ»ŃŚĐ˝ĐľĐµ ŃŃ‡Ń€ĐµĐ¶Đ´ĐµĐ˝Đ¸Đµ, Đ±Đ°Đ˝ĐşĐ¸ Đ¸ ĐşĐ°Ń€Ń‚Ń‹ Đ´Đ»ŃŹ ŃŤŃ‚ĐľĐą Đ»ĐľĐşĐ°Ń†Đ¸Đ¸.", "Bu lokasiya ĂĽĂ§ĂĽn dĂĽzgĂĽn idarÉ™, banklar vÉ™ xÉ™ritÉ™lÉ™ri É™lavÉ™ edin.", "AĂ±ade oficina, bancos y mapas correctos.", "Idagdag ang tamang opisina, bangko at mapa.", "Tambahkan kantor, bank, dan peta yang benar.", "ŕ¤Żŕ¤¸ ŕ¤¸ŕĄŤŕ¤Ąŕ¤ľŕ¤¨ŕ¤•ŕ¤ľ ŕ¤˛ŕ¤ľŕ¤—ŕ¤ż ŕ¤¸ŕ¤ąŕĄ€ ŕ¤•ŕ¤ľŕ¤°ŕĄŤŕ¤Żŕ¤ľŕ¤˛ŕ¤Ż, ŕ¤¬ŕĄŕ¤‚ŕ¤• ŕ¤° ŕ¤¨ŕ¤•ŕĄŤŕ¤¸ŕ¤ľ ŕ¤Ąŕ¤ŞŕĄŤŕ¤¨ŕĄŕ¤ąŕĄ‹ŕ¤¸ŕĄŤŕĄ¤"),
      links: [
        { url: D.maps[0].url, label: tx("OtwĂłrz mapÄ™ lokalizacji", "Open location map", "Đ’Ń–Đ´ĐşŃ€Đ¸Ń‚Đ¸ ĐşĐ°Ń€Ń‚Ń Đ»ĐľĐşĐ°Ń†Ń–Ń—", "ĐžŃ‚ĐşŃ€Ń‹Ń‚ŃŚ ĐşĐ°Ń€Ń‚Ń Đ»ĐľĐşĐ°Ń†Đ¸Đ¸", "Lokasiya xÉ™ritÉ™sini aĂ§", "Abrir mapa de ubicaciĂłn", "Buksan ang mapa ng lokasyon", "Buka peta lokasi", "ŕ¤¸ŕĄŤŕ¤Ąŕ¤ľŕ¤¨ŕ¤•ŕĄ‹ ŕ¤¨ŕ¤•ŕĄŤŕ¤¸ŕ¤ľ ŕ¤–ŕĄ‹ŕ¤˛ŕĄŤŕ¤¨ŕĄŕ¤ąŕĄ‹ŕ¤¸ŕĄŤ"), tone: "blue" }
      ]
    }
  ];

  D.groups = [];
})();
