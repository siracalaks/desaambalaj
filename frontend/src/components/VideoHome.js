import React from "react";
import ReactPlayer from "react-player";

import classed from "./VideoHome.module.css";
import PageTitle from "./PageTitle";

const VideoHome = () => {
  return (
    <React.Fragment>
      <PageTitle title="Üretim Şartlarımız" />
      <div className={classed.container}>
        <div className={classed.videoContainer}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=qQ_iJZhYN-I&pp=ygUXw7xyZXRpbSBhbWJhbGFqIHBwb8WfZXQ%3D"
            className={classed.video}
          />
        </div>
        <div className={classed.descriptionContainer}>
          <p className={classed.paragraph}>
            Poşet ambalajlar, birçok farklı boyutta ve şekilde üretilebilirler.
            Küçük boyutlu poşetler, küçük ürünleri paketlemek için
            kullanılırken, büyük boyutlu poşetler, büyük ürünlerin taşınması ve
            depolanması için kullanılırlar. Poşetler, tek katmanlı ya da çok
            katmanlı olarak üretilebilirler. Çok katmanlı poşetler, içerdikleri
            malzemelerin korunmasını sağlarlar ve daha dayanıklıdırlar. Poşet
            ambalajlar, birçok avantaja sahiptirler. İlk olarak, hafiftirler, bu
            nedenle taşıma ve depolama işlemleri daha kolaydır. İkincisi,
            maliyetleri düşüktür, bu nedenle üretim maliyetleri de düşük
            olabilir. Üçüncüsü, poşetler kolayca yeniden kullanılabilirler, bu
            nedenle çevre dostudurlar. Ancak, poşet ambalajları aynı zamanda
            çevre sorunlarına da neden olabilirler. Çok kullanımlı poşetler,
            atık oluşturabilirler ve doğal kaynakları tüketebilirler. Bu
            nedenle, biyolojik olarak parçalanabilen poşetler ve geri
            dönüştürülebilir poşetler, giderek daha popüler hale gelmektedirler.
            Poşet ambalaj üretimi, ürünlerin güvenli bir şekilde paketlenmesini
            ve taşınmasını sağlar. Ancak, bu ambalaj türünün çevre üzerindeki
            etkisi göz önüne alındığında, çevre dostu poşetlerin üretimi ve
            kullanımı giderek daha önemli hale gelmektedir.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoHome;
