import Footer from "../components/Footer";
import PageContent from "../components/PageContent";
import Swiper from "../components/Swiper";
import Image from "../assets/swiper/bakliyat-naylon-torba.jpg";
import Image2 from "../assets/swiper/baskili-atlet-poset.jpg";
import Image3 from "../assets/swiper/yumusak-sapli-poset.jpg";
import PageTitle from "../components/PageTitle";
import VideoHome from "../components/VideoHome";
import SliderHome from "./SliderHome";

function HomePage() {
  const naylonTorba = 'Ambalaj poşetleri için malzeme seçimi oldukça önemlidir çünkü malzeme, ürünün korunmasını sağlar ve ambalaj poşetinin dayanıklılığını belirler. Bu nedenle, ambalaj poşetleri için seçilen malzemeler, ürünün özelliklerine ve kullanım amacına uygun olmalıdır. Ambalaj poşetleri için en yaygın olarak kullanılan malzemeler polietilen (PE), polipropilen (PP) ve naylon (PA) gibi plastik malzemelerdir. Ancak son yıllarda, daha çevre dostu seçenekler arasında kağıt, biyolojik olarak parçalanabilen malzemeler ve geri dönüştürülebilir malzemeler de kullanılmaktadır.'
  const baskiliAtlet = 'Ambalaj poşetleri için tasarım ve ölçü seçimi, ürünün ambalajlama gereksinimlerine ve müşteri isteklerine göre belirlenir. Bu aşamada, poşetin şekli, boyutu, kalınlığı, renk ve baskı özellikleri gibi faktörler dikkate alınır.Ambalaj poşetlerinin kalitesini kontrol etmek için, üretim sürecinin farklı aşamalarında testler yapılır. Kalite kontrol testleri, poşetlerin dayanıklılığı, sızdırmazlığı, renkleri ve baskı kalitesi gibi özelliklerini kontrol etmek için yapılır.'
  const sapliPoset = 'Ambalaj poşetlerinin üretimi, çeşitli teknikler kullanılarak gerçekleştirilir. Bu teknikler arasında ekstrüzyon, laminasyon, kaplama, kesme ve şekillendirme gibi yöntemler yer alır. Üretim aşamasında, ambalaj poşetlerinin kalitesini ve dayanıklılığını artırmak için, çeşitli malzeme katmanları kullanılabilir ve farklı kaplama ve işleme teknikleri uygulanabilir.Laminasyon, iki veya daha fazla malzemenin bir araya getirilmesi ve yapıştırılması işlemidir. Kaplama, farklı bir malzemenin bir yüzey üzerine yapıştırılması işlemidir. Kesme ve şekillendirme, ambalaj poşetlerinin istenilen boyutta kesilmesi ve şekillendirilmesi işlemidir.'
  const brands = [
    {
      "name": "Marka 1",
      "logo": "https://www.azdavayambalaj.com.tr/images/0-azdavay/logolar/glora2.jpg"
    },
    {
      "name": "Marka 2",
      "logo": "https://www.azdavayambalaj.com.tr/images/0-azdavay/logolar/mirada.jpg"
    },
    {
      "name": "Marka 3",
      "logo": "https://www.azdavayambalaj.com.tr/images/0-azdavay/logolar/beste.jpg"
    }
  ]
  return (
    <>
        <Swiper />
        <VideoHome />
        <SliderHome brands={brands} />
        <PageTitle title='Ürünlerimizin Kalitesi' />
        <PageContent
            title="Bakliyat Naylon Torba"
            description={naylonTorba}
            image={Image}
        />
        <PageContent
            title="Baskılı Atlet Poşet"
            description={baskiliAtlet}
            image={Image2}
        />
        <PageContent
            title="Yumuşak Saplı Poşet"
            description={sapliPoset}
            image={Image3}
        />
      <Footer />
    </>
  );
}

export default HomePage;
