import React from "react";

import AboutContent from "../components/AboutContent";
import PageTitle from "../components/PageTitle";
import PageContent from "../components/PageContent";
import Footer from "../components/Footer";
import MisyonAbout from "../components/MisyonAbout";
import SlideAbout from "../components/SlideAbout";
import AboutImg from "../assets/aboutPage.jpg";

const AboutUs = () => {
  const contentTitle = "Daha Fazla Üretim Daha Fazla İstihdam ";
  const contentDesc =
    "Bölgeye kurmuş olduğumuz tesisimiz ile 650 kişiye istihdam sağlanmaktadır. Yöre halkının ve milletimizin desteği ile dünyada ihracat liderleri arasında girmekten gurur duyuyoruz. Teknoloji ve bilime dayalı üretime destek vererek kısa/uzun vadede değişiklikleri göz önünde bulundurarak yenilikçi politika ile başarının merdivenlerini çıkıyoruz. ";
  const misyonTitle = "Misyonumuz";
  const misyoncontent =
    "Ambalaj, ürünlerin güvenli bir şekilde taşınmasına, depolanmasına ve müşterilere sunulmasına yardımcı olan önemli bir unsurdur. Bizim misyonumuz, müşterilerimize yüksek kaliteli, yenilikçi ve çevre dostu ambalaj çözümleri sunarak, ürünlerinin en iyi şekilde korunmasını ve müşterilerine en iyi şekilde sunulmasını sağlamaktır. Müşteri memnuniyeti bizim için en önemli önceliktir ve bu nedenle, müşterilerimizin özel ihtiyaçlarını karşılamak için her zaman esnek bir yaklaşım benimseriz. Kaliteli hizmet, zamanında teslimat, rekabetçi fiyatlar ve sürdürülebilir çözümler sunarak müşteri memnuniyetini artırmayı hedefliyoruz. Aynı zamanda, çevreyi de korumak için çalışıyoruz. Sürdürülebilir ambalaj çözümleri sunarak, doğal kaynakların korunmasına ve atık azaltımına katkıda bulunuyoruz. Misyonumuz, müşterilerimize en iyi hizmeti sunarken aynı zamanda çevre dostu bir yaklaşım benimsemektir.";
  const misyonTitleAbout = "Hakkımızda";
  const misyonAboutContent =
    "Ambalaj sektöründe yıllardır faaliyet gösteren firmamız, kaliteli ve yenilikçi ambalaj çözümleri sunmaktadır. Müşterilerimizin ihtiyaçlarına yönelik çözümler üretmek, sektördeki gelişmeleri yakından takip etmek ve teknolojik yenilikleri uygulamak, firmamızın temel prensiplerindendir. Firmamızın hizmetleri arasında, çeşitli sektörlerde kullanılan kağıt, karton, plastik ve metal ambalaj ürünleri yer almaktadır. Ürünlerimiz, müşterilerimizin ürünlerinin güvenli bir şekilde taşınmasını ve muhafaza edilmesini sağlamaktadır. Ayrıca, çevre dostu ambalaj malzemeleri kullanarak, doğaya karşı duyarlı bir tutum sergilemekteyiz. Müşteri memnuniyeti, firmamızın en önemli önceliklerindendir. Bu nedenle, müşterilerimizle yakın iş birliği içerisinde çalışarak, özelleştirilmiş ambalaj çözümleri sunmaktayız. Ayrıca, hizmetlerimizi sürekli geliştirerek ve kalitemizi artırarak, müşterilerimizin ihtiyaçlarını en üst seviyede karşılamayı hedeflemekteyiz. Firmamızın misyonu, müşterilerimize en kaliteli ambalaj çözümlerini sunmak, çevreye karşı sorumlu bir tutum sergilemek ve çalışanlarımızın mutluluğu için gerekli tüm önlemleri alarak, sektörde lider bir konuma gelmektir. Eğer siz de kaliteli, yenilikçi ve çevre dostu ambalaj çözümleri arıyorsanız, firmamızın uzman kadrosuyla iletişime geçebilirsiniz.";
  return (
    <section>
      <PageTitle title="Bilimsel Gelişmeye Bağlı Gelişim" />
      <PageContent
        image={AboutImg}
        title={contentTitle}
        description={contentDesc}
      />
      <PageTitle title="Üretim Bölgelerimiz" />
      <AboutContent />
      <PageTitle title="Örnek Ürünlerimiz" />
      <SlideAbout />
      <MisyonAbout title={misyonTitle} content={misyoncontent} />
      <MisyonAbout title={misyonTitleAbout} content={misyonAboutContent} />
      <Footer />
    </section>
  );
};

export default AboutUs;
