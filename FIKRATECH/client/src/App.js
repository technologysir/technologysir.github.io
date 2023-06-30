import  ReactDOM  from "react-dom";
import './index.css';
import logo from'./fikralogo.png';
import i from'./20944338.jpg';
import ii from './25452.jpg';
import iii from'./20944733.jpg';

const App = () => {
    return(
   <div>
  <header>
    <a href="#" className="logofikra">
      FIKRA TECH
    </a>
    <div className="tomu">≡</div>
    <ul className="nav">
      <li className="active">
        <a href="#home">الرئيسية</a>
      </li>
      <li>
        <a href="#about">حول</a>
      </li>
      <li>
        <a href="#comeus">انضم معنا</a>
      </li>
      <li>
        <a href="#contact">للتواصل</a>
      </li>
    </ul>
  </header>
  <section id="home">
    <div className="content">
      <h2>جمعية فكرتك الشبانية</h2>
      <p>.لتكوين الناشئة وتعليمهم التقنية والاعلام الالي من اجل مستقبل افضل</p>
      <a href="#" className="btn">
        انضم الينا الان
      </a>
    </div>
    <img src={logo} alt="" className="binar" />
  </section>
  <section id="about">
    <div className="nabda">
      <h2>نبذة عن الجمعية</h2>
      <p>
        تأسست جمعية فكرتك الشبانية في 15 أكتوبر 2017 و تسعى الجمعية من خلال
        نشاطاتها إلى تطوير إستعمال التقنية للكفاءات المحلية وتشجيع الشباب على
        إستعمال التقنية وتدريب تلاميذ المدارس على البرمجة في مجال الإعلام الألي
        والإبتكار في مجال الروبوتيك وتنشر الجمعية الوعي في المجتمع بجميع فئاته
        بمحاسن التقنية للتحكم فيها ومخاطرها لمواجهتها والتغلب عليها .{" "}
      </p>
    </div>
    <div className="content">
      <div className="sbx">
        <img src={i} alt="" />
        <h3>دورات تكوينية</h3>
      </div>
      <div className="sbx">
        <img src={ii} alt="" />
        <h3>معارض ورحلات</h3>
      </div>
      <div className="sbx">
        <img src={iii} alt="" />
        <h3>جوائز ومسابقات</h3>
      </div>
    </div>
    <div className="center">
      <a href="" className="btn">
        انضم الان وشارك
      </a>
    </div>
  </section>
  <section id="comeus">
    <div className="nabda">
      <h2>للانضمام</h2>
      <p>سجل الدخول او اذلم يكن بحوزتك حساب انشأ واحدا</p>
    </div>
    <div className="center">
      <a href="./login.html" className="btn">
        تسجيل الدخول
      </a>
      <a href="./singin.html" className="btnL">
        حسابا جديدا
      </a>
    </div>
  </section>
  <section id="contact">
    <div className="nabda">
      <h2>للإتصال</h2>
      <p>يمكنك متابعتنا او الاتصال بنا من:</p>
    </div>
    <div className="content">
      <a href="https://www.youtube.com/@user-jt6vk6nt7s/">
        <ion-icon
          name="logo-youtube"
          role="img"
          className="md hydrated"
          aria-label="logo youtube"
        />
        fikratechinfo
      </a>
      <a href="#">
        <ion-icon
          name="mail"
          role="img"
          className="md hydrated"
          aria-label="mail"
        />
        fikratechinfo@gmail.com
      </a>
      <a href="#">
        <ion-icon
          name="call"
          role="img"
          className="md hydrated"
          aria-label="call"
        />
        +213 556 46 07 96
      </a>
      <a href="https://www.facebook.com/fikratechinfo/">
        <ion-icon
          name="logo-facebook"
          role="img"
          className="md hydrated"
          aria-label="logo facebook"
        />
        fikratechinfo
      </a>
    </div>
    <div className="center">
      <p className="copyris">
        copyrights © 2023
        <a href="#">Ahmed Siradj Eddine Belahbib</a> &amp;
        <a href="#">sir technology</a>&amp;
        <a href="https://www.freepik.com/">freepik</a>
        .All Right Reserved.
      </p>
    </div>
  </section>
  </div>
    )
};
export default App;