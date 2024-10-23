import React from "react";
import "../styles/termsStyle.css";
import csLogo from "../IMAGES/cslogo.jpg";

const Terms = () => {
  return (
    <>
      <header className="logo-header">
        <div className="logoynombre">
          <img id="logo" src={csLogo} alt="cslogo" />
          <h1 id="nombre">
            Pibardo <br />
            Skins
          </h1>
        </div>
      </header>
      <div className="container">
        <h1 className="h1Terms">Términos y Condiciones</h1>
        <p className="term-description">
          Bienvenido a Pibardo Skins. Al utilizar nuestro sitio web para la
          compra de skins de CS:GO, aceptas cumplir con los siguientes términos
          y condiciones. Si no estás de acuerdo con alguno de estos términos, no
          podrás utilizar este sitio ni los servicios que ofrecemos.
        </p>

        <h2 className="h1Terms">1. Aceptación de los Términos</h2>
        <p className="term-description">
          Al acceder y utilizar el sitio web de Pibardo Skins, aceptas de manera
          íntegra y sin reservas los presentes términos y condiciones. Te
          recordamos que, al hacer uso de nuestra plataforma, quedas sujeto a
          las reglas y disposiciones aquí descritas, por lo que te recomendamos
          leer detenidamente el contenido de este documento. Nos reservamos el
          derecho de modificar, actualizar o cambiar estos términos en cualquier
          momento, sin necesidad de previo aviso, y será responsabilidad del
          usuario consultar periódicamente los mismos para estar al tanto de
          cualquier cambio. Cualquier modificación entrará en vigor en el
          momento en que sea publicada en nuestro sitio web. Si no estás de
          acuerdo con algún apartado de estos términos o con cualquier
          modificación futura, te recomendamos dejar de utilizar nuestra
          plataforma. El uso continuado del sitio web tras cualquier cambio será
          interpretado como aceptación implícita de los nuevos términos.
        </p>

        <h2 className="h1Terms">2. Uso del Sitio</h2>
        <p className="term-description">
          -Debes ser mayor de 18 años o contar con el consentimiento de un
          adulto responsable para utilizar nuestros servicios.
        </p>
        <p className="term-description">
          -No debes utilizar el sitio para ningún propósito ilegal o no
          autorizado.
        </p>
        <p className="term-description">
          -La compra de skins en Pibardo Skins es únicamente para el uso
          personal del comprador. Está prohibida la reventa o distribución no
          autorizada de los skins adquiridos.
        </p>
        <p className="term-description">
          -El usuario es responsable de mantener la confidencialidad de su
          cuenta y contraseña, así como de todas las actividades que ocurran
          bajo su cuenta.
        </p>
        <p className="term-description">
          -Nos reservamos el derecho de suspender o cancelar tu cuenta si
          consideramos que has violado alguna de estas condiciones o si
          detectamos actividades sospechosas relacionadas con tu cuenta.
        </p>
        <p className="term-description">
          -El contenido del sitio web, incluyendo texto, imágenes, gráficos,
          logotipos y cualquier otro material, está protegido por derechos de
          autor y no debe ser utilizado sin autorización expresa por escrito.
        </p>
        <p className="term-description">
          -Cualquier intento de hackear, modificar, o interferir con el
          funcionamiento del sitio será considerado una violación grave y podrá
          resultar en la cancelación inmediata de tu cuenta y posibles acciones
          legales.
        </p>
        <p className="term-description">
          -No garantizamos la disponibilidad continua o ininterrumpida del sitio
          web o de los servicios ofrecidos. Nos reservamos el derecho de
          modificar, suspender o interrumpir cualquier servicio sin previo
          aviso.
        </p>
        <p className="term-description">
          -Las compras de skins son finales y no se aceptan devoluciones o
          reembolsos, salvo en casos excepcionales a criterio de Pibardo Skins.
        </p>
        <p className="term-description">
          -El uso de bots, scripts automatizados o cualquier otro software para
          obtener ventaja en el proceso de compra está estrictamente prohibido y
          resultará en la suspensión de tu cuenta.
        </p>

        <h2 className="h1Terms">3. Políticas de Pago y Entrega</h2>
        <p className="term-description">
          Los pagos en Pibardo Skins se procesan de forma segura a través de
          plataformas de terceros confiables, sin que almacenemos información de
          pago en nuestros servidores. Una vez que el pago es confirmado,
          iniciamos el proceso de entrega de las skins adquiridas, el cual se
          realiza en un plazo máximo de 24 horas mediante el sistema de
          intercambio de Steam. Recomendamos que verifiques tu cuenta de Steam
          para asegurarte de que esté habilitada para recibir intercambios. Si
          surge algún problema con la entrega, nuestro equipo de soporte estará
          disponible para asistirte y garantizar que recibas las skins lo antes
          posible.
        </p>

        <h2 className="h1Terms">4. Política de Devolución</h2>
        <p className="term-description">
          Todas las compras de skins realizadas a través de Pibardo Skins son
          definitivas y no están sujetas a reembolsos, salvo en situaciones
          excepcionales, como errores técnicos en el proceso de compra o
          problemas relacionados con la entrega de los artículos adquiridos. En
          caso de que experimentes algún inconveniente con tu compra, te
          recomendamos que contactes a nuestro equipo de soporte lo antes
          posible para resolver el problema. Es fundamental que cualquier
          reclamación sea presentada dentro de los primeros 7 días posteriores a
          la fecha de compra, ya que pasado este período no podremos garantizar
          la resolución favorable de tu solicitud. Nuestro equipo de atención al
          cliente está disponible para ofrecer asistencia personalizada y
          trabajar contigo en la resolución de cualquier problema relacionado
          con tu compra, asegurando que tengas una experiencia satisfactoria y
          sin complicaciones.
        </p>

        <h2 className="h1Terms">5. Propiedad Intelectual</h2>
        <p className="term-description">
          Todo el contenido presente en el sitio web de Pibardo Skins,
          incluyendo pero no limitado a gráficos, logotipos, textos, imágenes,
          íconos, y cualquier otro material visual o textual, es propiedad
          exclusiva de Pibardo Skins o de sus respectivos licenciatarios, y se
          encuentra protegido bajo las leyes de derechos de autor y otras
          normativas aplicables sobre propiedad intelectual tanto a nivel
          nacional como internacional. Esto significa que cualquier uso no
          autorizado, reproducción, distribución, modificación o exhibición del
          contenido del sitio sin el previo consentimiento por escrito de
          Pibardo Skins o de los titulares de los derechos está estrictamente
          prohibido. La protección legal se extiende a todos los elementos que
          conforman la identidad visual y textual de la marca, con el objetivo
          de preservar la integridad y originalidad del sitio web. Nos
          reservamos el derecho de emprender acciones legales contra cualquier
          uso indebido o infracción que vulnere estos derechos. Si deseas
          utilizar alguno de los materiales presentes en el sitio para fines
          personales o comerciales, es imprescindible que solicites autorización
          expresa de los propietarios de los derechos correspondientes.
        </p>

        <h2 className="h1Terms">6. Modificaciones al Servicio</h2>
        <p className="term-description">
          Pibardo Skins se reserva el derecho, a su entera discreción, de
          modificar, actualizar, suspender temporalmente o descontinuar de
          manera permanente cualquiera de los servicios ofrecidos en su
          plataforma, en cualquier momento y sin la obligación de proporcionar
          un aviso previo a sus usuarios. Esto incluye, pero no se limita a, la
          modificación de las funcionalidades del sitio, la actualización de las
          políticas de uso, la incorporación o eliminación de productos o
          servicios, y cualquier otro cambio que consideremos necesario para
          mejorar la operatividad, cumplir con normativas legales o ajustarse a
          las necesidades del mercado. Pibardo Skins no será responsable ante
          los usuarios ni ante terceros por cualquier modificación, suspensión o
          interrupción del servicio, ya sea temporal o permanente. Te
          recomendamos que consultes regularmente el sitio web para estar al
          tanto de posibles cambios en los servicios, y en caso de tener alguna
          duda o inquietud, nuestro equipo de soporte estará disponible para
          ofrecer asistencia.
        </p>

        <h2 className="h1Terms">7. Contacto</h2>
        <p className="term-description">
          Si tienes alguna duda, inquietud o consulta relacionada con estos
          términos y condiciones, o si necesitas más información acerca del
          funcionamiento de nuestro sitio web, nuestros servicios o cualquier
          aspecto legal vinculado a Pibardo Skins, te invitamos a ponerte en
          contacto con nuestro equipo de atención al cliente. Estamos aquí para
          ayudarte y asegurarnos de que tu experiencia en nuestra plataforma sea
          clara, fluida y satisfactoria. Puedes comunicarte con nosotros a
          través de los medios de contacto disponibles en nuestra página web, ya
          sea mediante correo electrónico, formulario de contacto, o a través de
          nuestras redes sociales oficiales. Nos comprometemos a responder a tus
          consultas en el menor tiempo posible, brindándote la asistencia
          necesaria para resolver cualquier duda que puedas tener sobre los
          términos de uso, políticas de privacidad o cualquier otro aspecto
          relacionado con nuestros servicios. Tu satisfacción es nuestra
          prioridad, por lo que nuestro equipo estará siempre disponible para
          ayudarte y ofrecerte soluciones a medida de tus necesidades.{" "}
          <a className="contact-email" href="mailto:soporte@pibardoskins.com">
            soporte@pibardoskins.com
          </a>
          .
        </p>
      </div>
      <footer className="footer">
        <p className="footer-text">
          Derechos reservados a GiuseppeSkinsTecnolgi™
        </p>
        <p className="footer-text">Última Fecha de Modificaciones: 27/9/2024</p>
      </footer>
    </>
  );
};

export default Terms;
