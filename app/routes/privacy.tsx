import type { MetaFunction } from "@remix-run/node";

import CommonRouteWrapper, {
  commonLoader,
  commonAction,
} from "~/components/CommonRouteWrapper";
import ContentLimiter from "~/components/ContentLimiter";
import Footer from "~/components/Footer";
import { H1, H2, P } from "~/components/Typography";
import logo from "~/assets/images/logo.svg";

export const meta: MetaFunction = () => ({
  title: "Política de Privacidad · Nozzmo",
  description:
    "Cómo Nozzmo, S.A. trata los datos de sus clientes y visitantes.",
});

export async function loader() {
  return await commonLoader();
}

export { commonAction as action };

export default function Privacy() {
  return (
    <CommonRouteWrapper>
      <main className="bg-black text-white">
        <ContentLimiter>
          <div className="py-10">
            <a href="/" className="inline-block">
              <img src={logo} className="h-7 w-auto" alt="Nozzmo" />
            </a>
          </div>

          <article className="max-w-3xl pb-16 md:pb-24">
            <H1 title="Política de Privacidad" />
            <P
              className="text-white/70"
              text="Última actualización: junio de 2026."
            />

            <H2 className="mt-12" title="Quién opera este sitio" />
            <P
              className="mt-4 text-white/80"
              text="nozzmo.com es operado por Nozzmo, S.A., sociedad legalmente constituida en Guatemala (NIT [por confirmar], con domicilio en [por confirmar]). Para cualquier asunto de privacidad puedes escribir a info@nozzmo.com."
            />

            <H2 className="mt-12" title="Qué datos recolectamos" />
            <P
              className="mt-4 text-white/80"
              text="Cuando nos contactas o solicitas una consulta recolectamos los datos que nos compartes: tu nombre, correo electrónico, empresa y el contenido de tu mensaje. También recolectamos datos técnicos básicos —dirección IP, tipo de navegador, marcas de tiempo— para operar el sitio de forma segura y prevenir abuso."
            />

            <H2 className="mt-12" title="Para qué los usamos" />
            <P
              className="mt-4 text-white/80"
              text="Usamos tus datos para responder tus consultas, prestar nuestros servicios de diseño y desarrollo, y mejorar el sitio. No vendemos tus datos ni los usamos para publicidad de terceros."
            />

            <H2 className="mt-12" title="Con quién los compartimos" />
            <P
              className="mt-4 text-white/80"
              text="Solo con los proveedores que necesitamos para operar: nuestro proveedor de hosting, nuestro proveedor de correo y herramientas de analítica. Cada uno trata los datos según su propio acuerdo de tratamiento y solo accede a lo necesario para su función."
            />

            <H2 className="mt-12" title="Tus derechos" />
            <P
              className="mt-4 text-white/80"
              text="Puedes solicitar acceso a tus datos, corregir lo que esté incorrecto, pedir que los eliminemos, u oponerte a usos específicos. Para ejercer cualquiera de estos derechos, escríbenos a info@nozzmo.com y te responderá una persona real."
            />

            <H2 className="mt-12" title="Cuánto tiempo los conservamos" />
            <P
              className="mt-4 text-white/80"
              text="Conservamos los datos de contacto mientras exista una relación comercial o el interés de evaluarla. Si solicitas su eliminación, los borramos salvo que estemos legalmente obligados a conservarlos (por razones contables o fiscales)."
            />

            <H2 className="mt-12" title="Seguridad" />
            <P
              className="mt-4 text-white/80"
              text="Los datos se transmiten cifrados y el acceso está limitado al equipo que opera Nozzmo. Si llegáramos a tener un incidente de seguridad que te afecte, te avisaremos."
            />

            <H2 className="mt-12" title="Cookies" />
            <P
              className="mt-4 text-white/80"
              text="Usamos cookies mínimas para que el sitio funcione y para medir su uso de forma agregada. No te rastreamos en otros sitios ni usamos cookies publicitarias de terceros."
            />

            <H2 className="mt-12" title="Cambios a esta política" />
            <P
              className="mt-4 text-white/80"
              text="Si cambiamos algo relevante, lo publicaremos en esta página con una nueva fecha de actualización."
            />

            <H2 className="mt-12" title="Contacto" />
            <P
              className="mt-4 text-white/80"
              text="Nozzmo, S.A. · NIT [por confirmar] · [dirección por confirmar], Guatemala · info@nozzmo.com"
            />
          </article>
        </ContentLimiter>
        <Footer onOptionClick={() => {}} />
      </main>
    </CommonRouteWrapper>
  );
}
