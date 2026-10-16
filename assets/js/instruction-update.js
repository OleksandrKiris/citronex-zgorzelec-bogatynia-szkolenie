/* Owner-provided READER / TABLET instructions, confirmed for all three sites on 2026-10-16.
 * PL/EN/UA are supplied source languages. Other supported languages are translated from them.
 * Technical/source review is not native-speaker approval; original PDFs remain unchanged.
 * Original source data, images, contacts and location customizations are retained.
 */
(() => {
  const D = window.CX_DATA;
  if (!D || D.instructionRevision === "20261016") return;
  const translatedSteps = {
    "Take the reader and scan your personal tag only from 05:50 to 06:00. A working reader displays the number and makes a sound.": {
      "ru": "Возьмите ридер и отсканируйте свой персональный тег только с 05:50 до 06:00. Исправный ридер показывает номер и подаёт звуковой сигнал.",
      "az": "Readeri götürün və şəxsi etiketinizi yalnız 05:50–06:00 arasında skan edin. İşlək reader nömrəni göstərir və səs siqnalı verir.",
      "es": "Toma el lector y escanea tu etiqueta personal únicamente entre las 05:50 y las 06:00. Un lector que funciona correctamente muestra el número y emite un sonido.",
      "fil": "Kunin ang scanner at i-scan ang iyong personal na tag mula 05:50 hanggang 06:00 lamang. Ang maayos na scanner ay nagpapakita ng numero at tumutunog.",
      "id": "Ambil pemindai dan pindai tag pribadi Anda hanya antara pukul 05:50 dan 06:00. Pemindai yang berfungsi dengan baik menampilkan nomor dan mengeluarkan bunyi.",
      "ne": "स्क्यानर लिनुहोस् र आफ्नो व्यक्तिगत ट्याग 05:50 देखि 06:00 बीचमा मात्र स्क्यान गर्नुहोस्। ठीकसँग काम गर्ने स्क्यानरले नम्बर देखाउँछ र आवाज निकाल्छ।"
    },
    "Check the reader before work: blue LED and at least 3 battery bars; system connection: crosshair and Wi-Fi symbol. Take it from its assigned charger position.": {
      "ru": "Перед работой проверьте ридер: синий светодиод и не менее 3 делений батареи; соединение с системой — значок прицела и Wi-Fi. Возьмите ридер с закреплённого за ним места на зарядном устройстве.",
      "az": "İşə başlamazdan əvvəl readeri yoxlayın: mavi LED və batareyada ən azı 3 zolaq; sistemə bağlantı üçün nişangah və Wi-Fi işarəsi görünməlidir. Readeri şarj cihazında ona ayrılmış yerdən götürün.",
      "es": "Revisa el lector antes de trabajar: LED azul y al menos 3 barras de batería; la conexión al sistema se indica con la mira y el símbolo de Wi-Fi. Retíralo de su posición asignada en el cargador.",
      "fil": "Suriin ang scanner bago magtrabaho: dapat may asul na LED at hindi bababa sa 3 guhit ng baterya; ang simbolo ng puntirya at Wi-Fi ay nagpapakita ng koneksyon sa sistema. Kunin ito mula sa nakatalagang puwesto nito sa charger.",
      "id": "Periksa pemindai sebelum bekerja: LED biru dan sedikitnya 3 garis baterai; koneksi ke sistem ditandai dengan simbol bidik dan Wi-Fi. Ambil pemindai dari posisi pengisian daya yang ditetapkan untuknya.",
      "ne": "कामअघि स्क्यानर जाँच्नुहोस्: नीलो LED र ब्याट्रीमा कम्तीमा 3 धर्का हुनुपर्छ; प्रणालीसँगको जडानका लागि निशाना र Wi-Fi चिन्ह देखिनुपर्छ। चार्जरमा तोकिएको ठाउँबाट स्क्यानर लिनुहोस्।"
    },
    "Scan “Start of Work” on the board. The reader should make a sound and show the hand symbol and number 900.": {
      "ru": "Отсканируйте тег «Начало работы» на доске. Ридер должен подать звуковой сигнал и показать символ ладони и номер 900.",
      "az": "Lövhədə «İşin başlanğıcı» etiketini skan edin. Reader səs siqnalı verməli, əl işarəsini və 900 nömrəsini göstərməlidir.",
      "es": "Escanea «Inicio del trabajo» en el tablero. El lector debe emitir un sonido y mostrar el símbolo de la mano y el número 900.",
      "fil": "I-scan ang tag na «Simula ng trabaho» sa pisara. Dapat tumunog ang scanner at ipakita ang simbolo ng kamay at numerong 900.",
      "id": "Pindai tag «Mulai bekerja» di papan. Pemindai harus mengeluarkan bunyi serta menampilkan simbol tangan dan nomor 900.",
      "ne": "बोर्डमा रहेको «काम सुरु» ट्याग स्क्यान गर्नुहोस्। स्क्यानरले आवाज निकाल्नुपर्छ र हातको चिन्ह तथा 900 नम्बर देखाउनुपर्छ।"
    },
    "After the break, scan “Break End”, then scan the activity you were performing before the break again.": {
      "ru": "После перерыва отсканируйте «Конец перерыва», затем снова тег действия, которое выполняли до перерыва.",
      "az": "Fasilədən sonra «Fasilənin sonu» etiketini, sonra isə fasilədən əvvəl yerinə yetirdiyiniz fəaliyyətin etiketini yenidən skan edin.",
      "es": "Después de la pausa, escanea «Fin de la pausa» y vuelve a escanear la actividad que realizabas antes de la pausa.",
      "fil": "Pagkatapos ng pahinga, i-scan ang «Katapusan ng pahinga», pagkatapos ay i-scan muli ang gawaing ginagawa mo bago magpahinga.",
      "id": "Setelah istirahat, pindai «Selesai istirahat», lalu pindai kembali aktivitas yang Anda lakukan sebelum istirahat.",
      "ne": "विश्रामपछि «विश्राम समाप्त» स्क्यान गर्नुहोस्, त्यसपछि विश्रामअघि गरिरहेको कामको ट्याग फेरि स्क्यान गर्नुहोस्।"
    },
    "When finishing work in a row, scan the row tag first. Outside rows, scan your activity first. Then scan “End of Work” — hand symbol and number 110.": {
      "ru": "Завершая работу в ряду, сначала отсканируйте тег ряда. Вне рядов сначала отсканируйте выполняемое действие. Затем отсканируйте «Конец работы» — символ ладони и номер 110.",
      "az": "Sırada işi bitirərkən əvvəlcə sıra etiketini skan edin. Sıralardan kənarda əvvəlcə yerinə yetirdiyiniz fəaliyyətin etiketini skan edin. Sonra «İşin sonu» etiketini skan edin — əl işarəsi və 110 nömrəsi.",
      "es": "Al terminar el trabajo en una fila, escanea primero la etiqueta de la fila. Fuera de las filas, escanea primero tu actividad. Después escanea «Fin del trabajo»: símbolo de la mano y número 110.",
      "fil": "Kapag tinatapos ang trabaho sa hanay, i-scan muna ang tag ng hanay. Sa labas ng mga hanay, i-scan muna ang iyong gawain. Pagkatapos, i-scan ang «Katapusan ng trabaho» — simbolo ng kamay at numerong 110.",
      "id": "Saat menyelesaikan pekerjaan di baris, pindai tag baris terlebih dahulu. Di luar baris, pindai aktivitas Anda terlebih dahulu. Kemudian pindai «Selesai bekerja» — simbol tangan dan nomor 110.",
      "ne": "पङ्क्तिमा काम समाप्त गर्दा पहिले पङ्क्तिको ट्याग स्क्यान गर्नुहोस्। पङ्क्तिबाहिर पहिले आफूले गरिरहेको कामको ट्याग स्क्यान गर्नुहोस्। त्यसपछि «काम समाप्त» स्क्यान गर्नुहोस् — हातको चिन्ह र 110 नम्बर।"
    },
    "Return the reader to its assigned charger position in your stage and press it into place so charging starts.": {
      "ru": "Верните ридер на закреплённое место на зарядном устройстве в своём секторе теплицы и прижмите его, чтобы началась зарядка.",
      "az": "Readeri öz istixana bölmənizdəki şarj cihazında ona ayrılmış yerə qaytarın və şarjın başlaması üçün yerinə möhkəm oturdun.",
      "es": "Devuelve el lector a su posición asignada en el cargador de tu sector del invernadero y presiónalo hasta que quede colocado y empiece a cargar.",
      "fil": "Ibalik ang scanner sa nakatalagang puwesto nito sa charger sa iyong seksyon ng bahay-taniman at idiin ito sa puwesto upang magsimulang mag-charge.",
      "id": "Kembalikan pemindai ke posisi yang ditetapkan pada pengisi daya di bagian rumah kaca Anda dan tekan hingga terpasang agar pengisian daya dimulai.",
      "ne": "आफ्नो ग्रीनहाउस खण्डको चार्जरमा तोकिएको ठाउँमा स्क्यानर फिर्ता राख्नुहोस् र चार्ज सुरु हुनका लागि राम्रोसँग थिचेर जडान गर्नुहोस्।"
    },
    "When leaving for a break, scan an unfinished row twice. When harvesting, first scan the trolley where you leave it, then scan the row tag as soon as possible.": {
      "ru": "Уходя на перерыв, отсканируйте незаконченный ряд дважды. При сборе сначала отсканируйте тележку там, где её оставляете, затем как можно скорее тег ряда.",
      "az": "Fasiləyə gedərkən tamamlanmamış sıranın etiketini iki dəfə skan edin. Məhsul yığarkən əvvəlcə arabanı saxladığınız yerdə onun etiketini, sonra mümkün qədər tez sıra etiketini skan edin.",
      "es": "Al salir a una pausa, escanea dos veces la etiqueta de la fila sin terminar. Durante la cosecha, escanea primero el carro donde lo dejas y después la etiqueta de la fila lo antes posible.",
      "fil": "Kapag aalis para magpahinga, i-scan nang dalawang beses ang tag ng hindi pa tapos na hanay. Kapag nag-aani, i-scan muna ang kariton kung saan mo ito iniiwan, pagkatapos ay i-scan ang tag ng hanay sa lalong madaling panahon.",
      "id": "Saat pergi istirahat, pindai tag baris yang belum selesai dua kali. Saat memanen, pindai troli terlebih dahulu di tempat Anda meninggalkannya, kemudian pindai tag baris sesegera mungkin.",
      "ne": "विश्राममा जाँदा नसकिएको पङ्क्तिको ट्याग दुई पटक स्क्यान गर्नुहोस्। बाली टिप्दा पहिले ट्रली छोडेको ठाउँमै ट्रली स्क्यान गर्नुहोस्, त्यसपछि सकेसम्म चाँडो पङ्क्तिको ट्याग स्क्यान गर्नुहोस्।"
    },
    "After the break, scan “Break End”, then scan your activity again.": {
      "ru": "После перерыва отсканируйте «Конец перерыва», затем снова выполняемое действие.",
      "az": "Fasilədən sonra «Fasilənin sonu» etiketini, sonra isə fəaliyyətinizin etiketini yenidən skan edin.",
      "es": "Después de la pausa, escanea «Fin de la pausa» y vuelve a escanear tu actividad.",
      "fil": "Pagkatapos ng pahinga, i-scan ang «Katapusan ng pahinga», pagkatapos ay i-scan muli ang iyong gawain.",
      "id": "Setelah istirahat, pindai «Selesai istirahat», lalu pindai kembali aktivitas Anda.",
      "ne": "विश्रामपछि «विश्राम समाप्त» स्क्यान गर्नुहोस्, त्यसपछि आफ्नो कामको ट्याग फेरि स्क्यान गर्नुहोस्।"
    },
    "After the social break, scan “End Social Break”, then scan your activity again.": {
      "ru": "После социального перерыва отсканируйте «Конец социального перерыва», затем снова выполняемое действие.",
      "az": "Sosial fasilədən sonra «Sosial fasilənin sonu» etiketini, sonra isə fəaliyyətinizin etiketini yenidən skan edin.",
      "es": "Después de la pausa social, escanea «Fin de la pausa social» y vuelve a escanear tu actividad.",
      "fil": "Pagkatapos ng social na pahinga, i-scan ang «Katapusan ng social na pahinga», pagkatapos ay i-scan muli ang iyong gawain.",
      "id": "Setelah istirahat sosial, pindai «Selesai istirahat sosial», lalu pindai kembali aktivitas Anda.",
      "ne": "सामाजिक विश्रामपछि «सामाजिक विश्राम समाप्त» स्क्यान गर्नुहोस्, त्यसपछि आफ्नो कामको ट्याग फेरि स्क्यान गर्नुहोस्।"
    },
    "At the end of work, scan your activity first, then “End of Work” (110).": {
      "ru": "В конце работы сначала отсканируйте выполняемое действие, затем «Конец работы» (110).",
      "az": "İşin sonunda əvvəlcə fəaliyyətinizin etiketini, sonra «İşin sonu» (110) etiketini skan edin.",
      "es": "Al finalizar el trabajo, escanea primero tu actividad y después «Fin del trabajo» (110).",
      "fil": "Sa pagtatapos ng trabaho, i-scan muna ang iyong gawain, pagkatapos ay ang «Katapusan ng trabaho» (110).",
      "id": "Pada akhir pekerjaan, pindai aktivitas Anda terlebih dahulu, kemudian «Selesai bekerja» (110).",
      "ne": "कामको अन्त्यमा पहिले आफ्नो कामको ट्याग, त्यसपछि «काम समाप्त» (110) स्क्यान गर्नुहोस्।"
    },
    "For the social break, leave the reader in the designated basket. Take your reader from the basket after the break.": {
      "ru": "На время социального перерыва оставьте ридер в предназначенной корзине. После перерыва заберите свой ридер из корзины.",
      "az": "Sosial fasilə zamanı readeri ayrılmış səbətdə qoyun. Fasilədən sonra öz readerinizi səbətdən götürün.",
      "es": "Durante la pausa social, deja el lector en la cesta indicada. Recoge tu lector de la cesta después de la pausa.",
      "fil": "Sa social na pahinga, iwan ang scanner sa nakatalagang basket. Kunin ang sarili mong scanner mula sa basket pagkatapos ng pahinga.",
      "id": "Selama istirahat sosial, tinggalkan pemindai di keranjang yang ditentukan. Ambil pemindai Anda sendiri dari keranjang setelah istirahat.",
      "ne": "सामाजिक विश्राममा स्क्यानर तोकिएको टोकरीमा राख्नुहोस्। विश्रामपछि टोकरीबाट आफ्नै स्क्यानर लिनुहोस्।"
    },
    "Scan the trolley after every row, not only when it is full and moved to the warehouse.": {
      "ru": "Сканируйте тележку после каждого ряда, а не только после её заполнения и отправки на склад.",
      "az": "Arabanın etiketini yalnız araba dolub anbara aparıldıqda deyil, hər sıradan sonra skan edin.",
      "es": "Escanea el carro después de cada fila, no solo cuando esté lleno y se lleve al almacén.",
      "fil": "I-scan ang kariton pagkatapos ng bawat hanay, hindi lamang kapag puno na ito at dinala sa bodega.",
      "id": "Pindai troli setelah setiap baris, bukan hanya saat troli sudah penuh dan dipindahkan ke gudang.",
      "ne": "ट्रली भरिएर गोदाममा लगिएपछि मात्र होइन, प्रत्येक पङ्क्तिपछि ट्रली स्क्यान गर्नुहोस्।"
    },
    "Restart for connection or charging problems, or a white screen. After restarting, wait for the reader to reconnect to the system.": {
      "ru": "Перезапустите ридер при проблемах с соединением, зарядкой или белым экраном. После перезапуска дождитесь повторного соединения с системой.",
      "az": "Bağlantı və ya şarj problemi olduqda, yaxud ekran ağ olduqda readeri yenidən başladın. Sonra onun sistemə yenidən qoşulmasını gözləyin.",
      "es": "Reinicia el lector si hay problemas de conexión o de carga, o si la pantalla está en blanco. Después del reinicio, espera a que vuelva a conectarse al sistema.",
      "fil": "I-restart ang scanner kung may problema sa koneksyon o pag-charge, o kung puti ang screen. Pagkatapos mag-restart, hintaying kumonekta muli ang scanner sa sistema.",
      "id": "Mulai ulang pemindai jika ada masalah koneksi, pengisian daya, atau layar putih. Setelah dimulai ulang, tunggu hingga pemindai terhubung kembali ke sistem.",
      "ne": "जडान वा चार्जमा समस्या भएमा अथवा स्क्रिन सेतो भएमा स्क्यानर पुनः सुरु गर्नुहोस्। पुनः सुरु गरेपछि प्रणालीसँग फेरि जडान नभएसम्म पर्खनुहोस्।"
    },
    "Check the connection after restarting. If the problem remains, replace the reader and report the faulty device to the foreman for repair.": {
      "ru": "Проверьте соединение после перезапуска. Если проблема осталась, замените ридер и сообщите бригадиру о неисправном устройстве для ремонта.",
      "az": "Yenidən başlatdıqdan sonra bağlantını yoxlayın. Problem qalarsa, readeri dəyişdirin və nasaz cihazın təmiri üçün briqadirə məlumat verin.",
      "es": "Comprueba la conexión después del reinicio. Si el problema persiste, cambia el lector e informa al encargado del dispositivo averiado para su reparación.",
      "fil": "Suriin ang koneksyon pagkatapos mag-restart. Kung naroon pa rin ang problema, palitan ang scanner at ipaalam sa tagapangasiwa na kailangang ipaayos ang sirang aparato.",
      "id": "Periksa koneksi setelah memulai ulang. Jika masalah tetap ada, ganti pemindai dan laporkan perangkat yang rusak kepada mandor untuk diperbaiki.",
      "ne": "पुनः सुरु गरेपछि जडान जाँच्नुहोस्। समस्या बाँकी रहेमा स्क्यानर बदल्नुहोस् र बिग्रिएको उपकरण मर्मतका लागि टोली प्रमुखलाई जानकारी दिनुहोस्।"
    },
    "Before work": {
      "ru": "Перед работой",
      "az": "İşdən əvvəl",
      "es": "Antes de trabajar",
      "fil": "Bago magtrabaho",
      "id": "Sebelum bekerja",
      "ne": "कामअघि"
    },
    "Check the reader before registering the start of work.": {
      "ru": "Проверьте ридер перед регистрацией начала работы.",
      "az": "İşin başlanğıcını qeyd etməzdən əvvəl readeri yoxlayın.",
      "es": "Revisa el lector antes de registrar el inicio del trabajo.",
      "fil": "Suriin ang scanner bago itala ang simula ng trabaho.",
      "id": "Periksa pemindai sebelum mencatat awal pekerjaan.",
      "ne": "काम सुरु भएको दर्ता गर्नुअघि स्क्यानर जाँच्नुहोस्।"
    },
    "An incorrectly placed reader may not charge. Check its position. An incorrect full-charge indicator requires a restart using the “Restart” tab.": {
      "ru": "Неправильно установленный ридер может не заряжаться. Проверьте его положение. Если индикатор ошибочно показывает полный заряд, выполните перезапуск по вкладке «Рестарт».",
      "az": "Düzgün yerləşdirilməmiş reader şarj olmaya bilər. Onun yerini yoxlayın. Göstərici səhvən tam şarj göstərirsə, «Yenidən başlatma» bölməsindəki qaydaya əməl edin.",
      "es": "Si el lector está mal colocado, puede que no se cargue. Comprueba su posición. Si el indicador muestra por error una carga completa, reinícialo siguiendo la pestaña «Reinicio».",
      "fil": "Maaaring hindi mag-charge ang scanner kung mali ang pagkakalagay nito. Suriin ang puwesto nito. Kung mali ang ipinapakitang buong karga ng baterya, i-restart ito ayon sa tab na «I-restart».",
      "id": "Pemindai yang tidak diletakkan dengan benar mungkin tidak mengisi daya. Periksa posisinya. Jika indikator keliru menunjukkan daya penuh, mulai ulang sesuai petunjuk pada tab «Mulai ulang».",
      "ne": "स्क्यानर ठीकसँग नराखिएमा चार्ज नहुन सक्छ। यसको स्थिति जाँच्नुहोस्। सूचकले गलत रूपमा पूरा चार्ज देखाएमा «पुनः सुरु» ट्याबको निर्देशनअनुसार पुनः सुरु गर्नुहोस्।"
    },
    "A reader without a system connection cannot scan tags or send data. Restart it and wait for reconnection. If this does not help, replace it and inform the foreman.": {
      "ru": "Ридер без соединения с системой не сканирует теги и не отправляет данные. Перезапустите его и дождитесь соединения. Если это не помогает, замените устройство и сообщите бригадиру.",
      "az": "Sistemə qoşulmayan reader etiketləri skan edə və məlumat göndərə bilmir. Onu yenidən başladın və bağlantını gözləyin. Bu kömək etmirsə, cihazı dəyişdirin və briqadirə məlumat verin.",
      "es": "Un lector sin conexión al sistema no puede escanear etiquetas ni enviar datos. Reinícialo y espera a que se conecte. Si esto no ayuda, cambia el dispositivo e informa al encargado.",
      "fil": "Ang scanner na walang koneksyon sa sistema ay hindi makakapag-scan ng mga tag o makakapagpadala ng datos. I-restart ito at hintaying kumonekta. Kung hindi ito nakatulong, palitan ang aparato at ipaalam sa tagapangasiwa.",
      "id": "Pemindai tanpa koneksi ke sistem tidak dapat memindai tag atau mengirim data. Mulai ulang dan tunggu hingga terhubung kembali. Jika ini tidak membantu, ganti perangkat dan beri tahu mandor.",
      "ne": "प्रणालीसँग जडान नभएको स्क्यानरले ट्याग स्क्यान गर्न वा डेटा पठाउन सक्दैन। यसलाई पुनः सुरु गर्नुहोस् र जडानको प्रतीक्षा गर्नुहोस्। यसले काम नगरेमा उपकरण बदल्नुहोस् र टोली प्रमुखलाई जानकारी दिनुहोस्।"
    },
    "Starting PRIVA": {
      "ru": "Запуск PRIVA",
      "az": "PRIVA-nın işə salınması",
      "es": "Inicio de PRIVA",
      "fil": "Pagbubukas ng PRIVA",
      "id": "Menjalankan PRIVA",
      "ne": "PRIVA सुरु गर्ने"
    },
    "If the program is closed, click the PRIVA icon once.": {
      "ru": "Если программа закрыта, нажмите значок PRIVA один раз.",
      "az": "Proqram bağlıdırsa, PRIVA işarəsinə bir dəfə klikləyin.",
      "es": "Si el programa está cerrado, haz clic una sola vez en el icono de PRIVA.",
      "fil": "Kung sarado ang programa, i-click nang isang beses ang icon ng PRIVA.",
      "id": "Jika program ditutup, klik ikon PRIVA satu kali.",
      "ne": "कार्यक्रम बन्द छ भने PRIVA को आइकनमा एक पटक मात्र क्लिक गर्नुहोस्।"
    },
    "Wait about 15–25 seconds. Do not click again: additional program instances will not register employees.": {
      "ru": "Подождите примерно 15–25 секунд. Не нажимайте повторно: дополнительные запущенные экземпляры программы не будут регистрировать работников.",
      "az": "Təxminən 15–25 saniyə gözləyin. Yenidən klikləməyin: əlavə açılan proqram nüsxələri işçiləri qeydiyyata almayacaq.",
      "es": "Espera unos 15–25 segundos. No vuelvas a hacer clic: las copias adicionales del programa que se abran no registrarán a los trabajadores.",
      "fil": "Maghintay nang mga 15–25 segundo. Huwag mag-click muli: hindi makakapagtala ng mga manggagawa ang mga karagdagang kopya ng programang mabubuksan.",
      "id": "Tunggu sekitar 15–25 detik. Jangan klik lagi: salinan program tambahan yang terbuka tidak akan mencatat pekerja.",
      "ne": "करिब 15–25 सेकेन्ड पर्खनुहोस्। फेरि क्लिक नगर्नुहोस्: थप खुलेका कार्यक्रमका प्रतिलिपिहरूले कामदारको दर्ता गर्दैनन्।"
    },
    "Press START in the program and wait.": {
      "ru": "Нажмите START в программе и подождите.",
      "az": "Proqramda START düyməsini basın və gözləyin.",
      "es": "Pulsa START en el programa y espera.",
      "fil": "Pindutin ang START sa programa at maghintay.",
      "id": "Tekan START di program dan tunggu.",
      "ne": "कार्यक्रममा START थिच्नुहोस् र पर्खनुहोस्।"
    },
    "Workshop": {
      "ru": "Мастерская",
      "az": "Emalatxana",
      "es": "Taller",
      "fil": "Pagawaan",
      "id": "Bengkel",
      "ne": "कार्यशाला"
    },
    "Tablet — workshop": {
      "ru": "Планшет — мастерская",
      "az": "Planşet — emalatxana",
      "es": "Tableta — taller",
      "fil": "Tablet — pagawaan",
      "id": "Tablet — bengkel",
      "ne": "ट्याब्लेट — कार्यशाला"
    },
    "Sequence from the workshop instructions.": {
      "ru": "Последовательность из инструкции для мастерской.",
      "az": "Emalatxana təlimatındakı ardıcıllıq.",
      "es": "Secuencia de las instrucciones del taller.",
      "fil": "Pagkakasunod-sunod mula sa mga tagubilin para sa pagawaan.",
      "id": "Urutan dari petunjuk untuk bengkel.",
      "ne": "कार्यशालाको निर्देशनअनुसारको क्रम।"
    }
  };
  const source = (pl, en, ua) => Object.fromEntries(D.languages.map(({id}) =>
    [id, ({pl, en, ua})[id] || translatedSteps[en]?.[id] || `[English] ${en}`]));
  const revise = (target, pl, en, ua) => Object.assign(target, source(pl, en, ua));
  const tabs = Object.fromEntries(D.readerTabs.map(tab => [tab.id, tab]));

  // Only the personal tag has the 05:50–06:00 window in the supplied procedure.
  const personal = source(
    "Weź reader i odbij swój tag personalny tylko od 05:50 do 06:00. Sprawny reader wyświetla numer i wydaje dźwięk.",
    "Take the reader and scan your personal tag only from 05:50 to 06:00. A working reader displays the number and makes a sound.",
    "Візьміть рідер і відскануйте свій персональний тег лише з 05:50 до 06:00. Справний рідер показує номер і видає звуковий сигнал.");
  Object.assign(tabs.start.steps[1], personal);
  Object.assign(tabs.rows.sections[0].steps[0], personal);
  Object.assign(tabs.outside.sections[0].steps[0], personal);
  revise(tabs.start.steps[0],
    "Sprawdź reader przed pracą: niebieska dioda i co najmniej 3 kreski baterii; połączenie z systemem: celownik i symbol Wi-Fi. Weź reader ze swojego miejsca na ładowarce.",
    "Check the reader before work: blue LED and at least 3 battery bars; system connection: crosshair and Wi-Fi symbol. Take it from its assigned charger position.",
    "Перед роботою перевірте рідер: синій світлодіод і щонайменше 3 поділки батареї; з’єднання із системою: приціл і символ Wi-Fi. Візьміть рідер зі свого місця на зарядці.");
  revise(tabs.start.steps[2],
    "Odbij tag „Początek pracy” na tablicy. Reader powinien wydać dźwięk i pokazać symbol dłoni oraz numer 900.",
    "Scan “Start of Work” on the board. The reader should make a sound and show the hand symbol and number 900.",
    "Відскануйте тег «Початок роботи» на дошці. Рідер має видати звук і показати символ долоні та номер 900.");
  revise(tabs.start.steps[6],
    "Po przerwie odbij „Przerwa koniec”, a następnie ponownie czynność, którą wykonywałeś przed przerwą.",
    "After the break, scan “Break End”, then scan the activity you were performing before the break again.",
    "Після перерви відскануйте «Кінець перерви», а потім знову тег дії, яку виконували перед перервою.");
  revise(tabs.start.steps[7],
    "Kończąc pracę w rzędzie, najpierw odbij tag rzędu. Poza rzędami najpierw odbij wykonywaną czynność. Następnie odbij „Koniec pracy” — symbol dłoni i numer 110.",
    "When finishing work in a row, scan the row tag first. Outside rows, scan your activity first. Then scan “End of Work” — hand symbol and number 110.",
    "Завершуючи роботу в ряду, спочатку відскануйте тег ряду. Поза рядами спочатку відскануйте виконувану дію. Потім відскануйте «Кінець роботи» — символ долоні та номер 110.");
  revise(tabs.start.steps[8],
    "Odłóż reader na przypisane miejsce na ładowarce na swoim etapie i dociśnij go, aby rozpoczął ładowanie.",
    "Return the reader to its assigned charger position in your stage and press it into place so charging starts.",
    "Поверніть рідер на призначене місце зарядного пристрою на своєму етапі та притисніть його, щоб почалося заряджання.");
  for (const index of [2, 3]) {
    const social = index === 3;
    revise(tabs.rows.sections[index].steps[0],
      "Wychodząc na przerwę, odbij nieskończony rząd dwa razy. Przy zbiorze najpierw odbij wózek tam, gdzie go zostawiasz, a następnie możliwie szybko tag rzędu.",
      "When leaving for a break, scan an unfinished row twice. When harvesting, first scan the trolley where you leave it, then scan the row tag as soon as possible.",
      "Ідучи на перерву, відскануйте незавершений ряд двічі. Під час збору спочатку відскануйте візок там, де його залишаєте, а потім якнайшвидше тег ряду.");
    revise(tabs.rows.sections[index].steps[2],
      social ? "Po socjalu odbij „Koniec Socjal przerwa”, a następnie ponownie wykonywaną czynność." : "Po przerwie odbij „Przerwa koniec”, a następnie ponownie wykonywaną czynność.",
      social ? "After the social break, scan “End Social Break”, then scan your activity again." : "After the break, scan “Break End”, then scan your activity again.",
      social ? "Після соціальної перерви відскануйте «Кінець соціальної перерви», а потім знову виконувану дію." : "Після перерви відскануйте «Кінець перерви», а потім знову виконувану дію.");
  }
  revise(tabs.outside.sections[3].steps[1],
    "Na koniec pracy najpierw odbij wykonywaną czynność, następnie „Koniec pracy” (110).",
    "At the end of work, scan your activity first, then “End of Work” (110).",
    "Наприкінці роботи спочатку відскануйте виконувану дію, потім «Кінець роботи» (110).");
  const basket = source(
    "Na przerwę socjalną zostaw reader w wyznaczonym koszyku. Po przerwie zabierz swój reader z koszyka.",
    "For the social break, leave the reader in the designated basket. Take your reader from the basket after the break.",
    "На соціальну перерву залиште рідер у призначеному кошику. Після перерви заберіть свій рідер із кошика.");
  tabs.rows.tips = [...(tabs.rows.tips || []), basket];
  tabs.outside.tips = [...(tabs.outside.tips || []), basket];
  tabs.carts.tips = [...(tabs.carts.tips || []), source(
    "Wózek odbijaj po każdym rzędzie, nie dopiero po jego zapełnieniu i odstawieniu na magazyn.",
    "Scan the trolley after every row, not only when it is full and moved to the warehouse.",
    "Скануйте візок після кожного ряду, а не лише після заповнення та відправлення на склад.")];
  revise(tabs.restart.lead,
    "Restart stosuje się przy problemach z połączeniem, ładowaniem lub białym ekranie. Po restarcie poczekaj na ponowne połączenie z systemem.",
    "Restart for connection or charging problems, or a white screen. After restarting, wait for the reader to reconnect to the system.",
    "Перезапустіть рідер у разі проблем зі з’єднанням, заряджанням або білим екраном. Після перезапуску дочекайтеся повторного з’єднання із системою.");
  revise(tabs.restart.steps[6],
    "Sprawdź połączenie po restarcie. Jeżeli problem pozostał, wymień reader i zgłoś uszkodzone urządzenie brygadziście do naprawy.",
    "Check the connection after restarting. If the problem remains, replace the reader and report the faulty device to the foreman for repair.",
    "Після перезапуску перевірте з’єднання. Якщо проблема залишилася, замініть рідер і повідомте бригадира про несправний пристрій для ремонту.");

  D.readerTabs.push({
    id: "prepare",
    title: source("Przed pracą", "Before work", "Перед роботою"),
    lead: source("Sprawdź stan techniczny readera przed rejestracją początku pracy.", "Check the reader before registering the start of work.", "Перевірте технічний стан рідера перед реєстрацією початку роботи."),
    steps: [tabs.start.steps[0], source(
      "Jeżeli reader jest źle odłożony, może nie ładować się. Sprawdź jego ułożenie. Błędny wskaźnik naładowania wymaga restartu według zakładki „Restart”.",
      "An incorrectly placed reader may not charge. Check its position. An incorrect full-charge indicator requires a restart using the “Restart” tab.",
      "Неправильно встановлений рідер може не заряджатися. Перевірте його положення. Якщо індикатор помилково показує повний заряд, виконайте перезапуск за вкладкою «Рестарт»."), source(
      "Reader bez połączenia z systemem nie skanuje tagów i nie wysyła danych. Zrestartuj go i poczekaj na połączenie. Jeśli to nie pomaga, wymień urządzenie i poinformuj brygadzistę.",
      "A reader without a system connection cannot scan tags or send data. Restart it and wait for reconnection. If this does not help, replace it and inform the foreman.",
      "Рідер без з’єднання із системою не сканує теги й не надсилає дані. Перезапустіть його та зачекайте на з’єднання. Якщо це не допомогло, замініть пристрій і повідомте бригадира."), personal, tabs.start.steps[2]]
  });

  const tablet = D.tabletGuide;
  D.tabletStartup = {
    title: source("Uruchomienie PRIVA", "Starting PRIVA", "Запуск PRIVA"),
    steps: [source(
      "Jeżeli program jest wyłączony, kliknij ikonę PRIVA jeden raz.",
      "If the program is closed, click the PRIVA icon once.",
      "Якщо програму вимкнено, натисніть іконку PRIVA один раз."), source(
      "Poczekaj około 15–25 sekund. Nie klikaj ponownie: dodatkowe uruchomione programy nie będą rejestrować pracowników.",
      "Wait about 15–25 seconds. Do not click again: additional program instances will not register employees.",
      "Зачекайте приблизно 15–25 секунд. Не натискайте повторно: додаткові запущені програми не реєструватимуть працівників."), source(
      "Naciśnij START w programie i poczekaj.",
      "Press START in the program and wait.",
      "Натисніть START у програмі та зачекайте.")]
  };
  D.tabletWorkshop = {
    ...tablet,
    tag: source("Warsztat", "Workshop", "Майстерня"),
    title: source("Tablet — warsztat", "Tablet — workshop", "Планшет — майстерня"),
    lead: source("Kolejność z instrukcji dla warsztatu.", "Sequence from the workshop instructions.", "Послідовність з інструкції для майстерні."),
    steps: [0, 1, 2, 6, 7].map(index => tablet.steps[index])
  };
  D.tabletWorkshop.sourceDocument = "workshop";
  D.instructionDocuments = ["priva", "workshop", "restart"];
  D.instructionRevision = "20261016";
  D.instructionSourceLanguages = ["pl", "en", "ua"];
  D.instructionTextLanguages = D.languages.map(({id}) => id);
})();
