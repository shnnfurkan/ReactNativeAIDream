<table align="center">
  <tr>
    <td><img src="https://github.com/user-attachments/assets/a87ec94e-185e-4e01-a068-0d19fcb9f0a8" width="200"></td>
    <td><img src="https://github.com/user-attachments/assets/8e141bf4-2baf-4891-b11e-6acd727c13ed" width="200"></td>
    <td><img src="https://github.com/user-attachments/assets/3b915d07-ad93-419c-bf7f-62f7eac45ad7" width="200"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/fbf49072-c454-44ea-94bc-3141a39773bb" width="200"></td>
    <td><img src="https://github.com/user-attachments/assets/6355f369-bf7f-44c5-bd1b-cd700a6e2575" width="200"></td>
    <td><img src="https://github.com/user-attachments/assets/532876f2-95de-475e-ac10-c4d441cb9f15" width="200"></td>
  </tr>
</table>

# 🤖 1- Proje Tanımı

## DREAM – Duygu Analizi Asistanı

DREAM, kullanıcının gün içinde nasıl hissettiğini yazdığı metni analiz eden
bir **React Native CLI** mobil uygulamasıdır.

Uygulama, kullanıcının yazdığı cümleyi **Hugging Face AI** servisine göndererek:

- Duygu analizi (Very Positive / Positive / Neutral / Negative / Very Negative)
- Güven skoru

bilgilerini alır.

Bu etiketlere göre uygulama;

- Özet  
- Öneri  

üreterek kullanıcıya özel bir duygu değerlendirmesi oluşturur.

# 🤖 2- Özellikler

## Duygu Asistanı
- Kullanıcı metni yazar → **Analiz Et** butonuna basar.
- Kullanıcı mesajı sağda mor baloncukta görünür.
- AI cevabı solda cam görünümlü baloncukta görünür.
- AI yalnızca *label* ve *score* verir.
- Özet ve öneri AI verileri kullanılarak uygulama tarafından oluşturulur.

## Duygu Arşivi
- Yapılan analizler cihazda **AsyncStorage** içinde saklanır.
- İnternet olmasa bile eski analizler görülebilir (offline çalışma).
- Her gün için yalnızca **son analiz** kaydedilir.


> Kart kenar rengi duyguya göre belirlenir:
  - Pozitif → yeşil
  - Negatif → kırmızı
  - Nötr → beyaz

# 🤖 3- Kullanılan Teknolojiler & Paketler

Aşağıda uygulamada kullanılan temel teknolojiler ve paketler listelenmiştir.

## Temel Teknolojiler
- React Native

## Navigasyon
- @react-navigation/native
- @react-navigation/native-stack

## UI Bileşenleri
- react-native-paper
- react-native-vector-icons

## HTTP İstekleri
- axios

## State Yönetimi
- @reduxjs/toolkit
- react-redux

## Yerel Depolama (Offline)
- @react-native-async-storage/async-storage

## AI Servisi (Hugging Face Inference API)
- tabularisai/multilingual-sentiment-analysis

# 🤖 4- Geliştirme Ortamı Gereksinimleri (React Native CLI)

> Eğer makinede zaten React Native CLI ortamı kuruluysa, bu adımların bir kısmı yapılmış olabilir.

React Native CLI ile geliştirme yapabilmek için aşağıdaki araçların sistemde kurulu olması gerekir.

## Node.js
React Native, Node.js üzerinde çalışır.

## Java JDK 17
Android derlemeleri için JDK 17 gereklidir.  
Önerilen sürüm: **Eclipse Temurin 17**

Kurulum sonrası ortam değişkenlerini ekleyin:

- Sistem Özellikleri - Gelişmiş - Ortam değişkenleri - Kullanıcı Değişkenleri - Yeni - Variable name: JAVA_HOME , Variable value: C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
- Sistem Özellikleri - Gelişmiş - Ortam değişkenleri - Sistem Değişkenleri - Path - Düzenle - Yeni - %JAVA_HOME%\bin

Not: Yukarıdaki `JAVA_HOME` yolu örnektir. Kendi sisteminizde JDK nereye kurulduysa, o yolu yazmanız gerekir.

## Android Studio
Android uygulamalarını derlemek için gereklidir.

React Native’in telefon/emülatörü görebilmesi için:

Sistem Özellikleri - Gelişmiş - Ortam değişkenleri - Sistem Değişkenleri - Path - Düzenle - Yeni - C:\Users\furka\AppData\Local\Android\Sdk\platform-tools

- Not: Yukarıdaki `platform-tools` yolu örnektir. 

---

Bu adımlar tamamlandıktan sonra React Native CLI projesi sorunsuz şekilde derlenebilir.

# 🤖 5- Projenin Kurulumu

Aşağıdaki adımları izleyerek projeyi kendi bilgisayarınızda çalıştırabilirsiniz.

## Depoyu Klonlayın

- **https://github.com/shnnfurkan/ReactNativeAIDream** adresinden DREAM projesini klonlayabilirsiniz.
- İndirdiğinizde ReactNativeAIDream dosyasını (VSCODE yada benzeri) açın. **cd AIDream** yapın.
- Daha sonra terminalde **npm install** komutunu çalıştırarak package.json dosyasındaki tüm gerekli paketler kurulacaktır.
- Android emülatörünü **Android Studio → Device Manager** üzerinden başlatın.
- **src/helpers/token.tsx** yerine girerek **hf_YOUR_TOKEN** huggingface den aldığınız tokeni yerleştirin.
- EK NOT;
Projeyi klonladıktan sonra `android` klasörü içinde `local.properties` dosyası bulunmuyorsa,
dosyayı kendiniz oluşturmalısınız. Bu dosya Android SDK yolunu belirtir. Örnekteki gibi yerleştirin. Örneğin: sdk.dir=C:\\Users\\<KullanıcıAdı>\\AppData\\Local\\Android\\Sdk

- Son olarak terminalde **npx react-native run-android** bu komutu kullanarak projeyi başlatabilirsiniz.

# 🤖 6- Kullanılan AI Modeli & API Açıklaması

Bu projede duygu analizi yapmak için **Hugging Face Inference API** kullanılmıştır.  
Model, metni analiz ederek sadece aşağıdaki iki bilgiyi döndürür:

- **label** (duygu etiketi)
- **score** (güven değeri)

- Kullanılan model; tabularisai/multilingual-sentiment-analysis
- Analiz istekleri şu endpoint’e yapılır: `https://router.huggingface.co/hf-inference/models/tabularisai/multilingual-sentiment-analysis`

> Örnek gönderilen istek; (json)

{
  "inputs": "Bugün kendimi biraz mutsuz hissediyorum."
}

> Örnek dönen cevap; (json)

[
  [
    { "label": "Negative", "score": 0.80 },
    { "label": "Very Negative", "score": 0.10 },
    { "label": "Neutral", "score": 0.05 },
    { "label": "Positive", "score": 0.02 },
    { "label": "Very Positive", "score": 0.03 }
  ]
]

**API birden fazla duygu skoru döndürür; uygulama her zaman en yüksek puanlı etiketi alır.**

API özet veya öneri döndürmez. Uygulama, dönen etikete göre kendi içinde bunları üreten bir helper fonksiyon (SentimentResult.tsx) çalıştırır.

> Örnek;

case "Negative":
  summary: "Bugün biraz zorlanmış gibisin.",
  advice: "Nefes egzersizi, müzik veya güvendiğin biriyle konuşmak iyi gelebilir."

# 🤖 7- Proje Klasör Yapısı

Projenin temel klasör ve dosya yapısı aşağıdaki gibidir: (AIDream)

📂 android/
→ React Native’in otomatik oluşturduğu Android proje klasörü.

📂 src/

## src/images/
→ Uygulamada kullanılan görseller.

## src/screens/
  >HomeScreen.tsx
  → Kullanıcıyı karşılayan giriş / ana ekran.

  >ChatScreen.tsx
  → Duygu Analizi Asistanı ile sohbet edilen ekran (AI etkileşimi burada).

  >HistoryScreen.tsx
  → Kullanıcıya ait geçmiş duygu analizlerinin listelendiği ekran.

## src/helpers/

JSX içermez, tamamen yardımcı fonksiyon dosyalarıdır.

  >SentimentResult.tsx
  → AI sonucuna göre özet & öneri üreten helper.

  >HistoryStorage.tsx
  → AsyncStorage arşiv yönetimi

  >token.tsx
  → HuggingFace API token (hf_TOKEN)

## src/store/

src/store/Redux/DreamStore/
→ Uygulamanın duygu analizi ile ilgili Redux modülü.

DreamSlice.tsx
→ State yapısı, initial state ve reducer tanımları buradadır.

DreamAction.tsx
→ API çağrısı + Redux güncelleme.

DreamCrud.tsx
→ API endpoint fonksiyonları.

src/store/MethodsExecutors.tsx
→ axios istek helper.

src/store/Store.tsx
→ Redux store konfigurasyonu.

---

📄 Ana dosyalar

App.tsx
→ Navigasyon yapısı, Redux Provider ve ana uygulama bağlayıcıları burada bulunur.

package.json
→ Projenin bağımlılık listesi ve çalıştırma scriptleri.

README.md
→ Projenin kendini anlatan dokümantasyon dosyası.

# 🤖 8- AI Şeffaflığı

Bu projeyi geliştirirken ve dokümantasyonunu hazırlarken ChatGPT’den aşağıdaki konularda destek alınmıştır:

- React Native CLI ortam kurulumu (JDK, Android SDK, ADB, ortam değişkenleri)
- Hugging Face ve DistilBERT hakkında genel bilgi alarak, kullanılan model ve paket seçimlerinin daha anlaşılır şekilde ifade edilmesi
- README dosyasındaki devrik veya anlaşılması zor cümlelerin düzenlenmesi
- Ayrıca geliştirme sürecinde alınan hatalarda yardım alınmıştır ve bazıları aşşağıda ektedir.
> `SDK location not found. Define location with sdk.dir in the local.properties file`  
  → `android/local.properties` dosyasına `sdk.dir=...` yolunun eklenmesi

> `ERROR: JAVA_HOME is not set and no 'java' command could be found...`  
  → `JAVA_HOME` ortam değişkeninin tanımlanması ve `%JAVA_HOME%\bin` yolunun `Path` içerisine eklenmesi

> `error: cannot find adb`  
  → `C:\Users\KULLANICI_ADI\AppData\Local\Android\Sdk\platform-tools` yolunun `Path` değişkenine eklenmesi

Bu bölüm, projede yapay zekâdan hangi noktalarda destek alındığını şeffaf şekilde göstermek için eklenmiştir.
