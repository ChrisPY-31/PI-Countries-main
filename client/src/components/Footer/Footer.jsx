import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__countries">
          <div className="footer__compani">
            <h5>Nuesta Empresa</h5>
            <div className="footer__compani--information">
              <p>Quienes somos</p>
            </div>
            <div className="footer__compani--information">
              <p>Empleo</p>
            </div>
            <div className="footer__compani--information">
              <p>Movil</p>
            </div>
            <div className="footer__compani--information">
              <p>Blog</p>
            </div>
            <div className="footer__compani--information">
              <p>Como funciona nuestra Web</p>
            </div>
          </div>
          <div className="footer__compani">
            <h5>Contacto</h5>
            <div className="footer__compani--information">
              <p>Ayuda/Preguntas Frecuentes</p>
            </div>
            <div className="footer__compani--information">
              <p>Prensa</p>
            </div>
            <div className="footer__compani--information">
              <p>Afiliados</p>
            </div>
            <div className="footer__compani--information">
              <p>Propietarios de hoteles</p>
            </div>
            <div className="footer__compani--information">
              <p>Como funciona nuestra Web</p>
            </div>
          </div>
          <div className="footer__compani">
            <h5>Mas</h5>
            <div className="footer__compani--information">
              <p>Tazas de aerolineas</p>
            </div>
            <div className="footer__compani--information">
              <p>Aerolineas</p>
            </div>
            <div className="footer__compani--information">
              <p>Tips de tarifas bajas</p>
            </div>
            <div className="footer__compani--information">
              <p>Insignias y certificados</p>
            </div>
          </div>
          <div className="footer__compani">
            <h5>Region / Divisa</h5>
          </div>
        </div>

        <div className="footer__terminos">
          <div className="footer__privacidad">
            <p className="footer__privacidad--empresa">Privacidad</p>
            <p className="footer__privacidad--empresa">
              Terminos y Condiciones
            </p>
            <p className="footer__privacidad--empresa">Aviso legal</p>
            <p className="footer__privacidad--empresa">2020 Countries</p>
          </div>
          <div className="footer__description">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              nulla unde accusamus, consectetur earum vel sint illo architecto
              similique at aperiam delectus dolor numquam molestiae, suscipit
              possimus eum veniam.
            </p>
          </div>

          <div className="footer__redes">
            <a href="https://www.facebook.com/profile.php?id=100010858303361" target="_blank"><img className="footer__redes--logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/christianpeya01/" target="_blank"><img className="footer__redes--logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></a>
            <a href="https://github.com/ChrisPY-31" target="_blank"><img className="footer__redes--logo" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894__480.png" alt="" /></a>
            <a href="file:///C:/Users/gokuy/Downloads/Curr%C3%ADculum+Vitae+Hombre-Programador-2.pdf" target="_blank"><img className="footer__redes--logo" src="https://www.shutterstock.com/image-vector/cv-curriculum-vitae-acronym-business-260nw-1746105188.jpg" alt="" /></a>
          </div>
        </div>
        <div className="footer__empresas">
          <p>
            Countries es parte de Booking Holdings Inc , Lider mundial de viajes
            online y servicios relacionados
          </p>
          <div className="footer__redes">
            <img className="footer__redes--logo" src="https://mir-s3-cdn-cf.behance.net/projects/404/d5f468144562697.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg" alt="" />
            <img className="footer__redes--logo" src="https://www.eleconomista.com.mx/__export/1660698219457/sites/eleconomista/img/2022/08/16/mercado_libre_4.jpg_423682103.jpg" alt="" />
            <img className="footer__redes--logo" src="https://brandemia.org/contenido/subidas/2022/11/tipografia-y-paleta-de-color-1024x576.png" alt="" />
            <img className="footer__redes--logo" src="https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg" alt="" />
            <img className="footer__redes--logo" src="https://assets.soyhenry.com/logoOG.png" alt="" />
            <img className="footer__redes--logo" src="https://thumbs.dreamstime.com/b/apple-logo-editorial-vector-illustration-136504759.jpg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
