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
  title: "Términos de Servicio · Nozzmo",
  description:
    "Términos que rigen los servicios de agencia de Nozzmo, S.A.",
});

export async function loader() {
  return await commonLoader();
}

export { commonAction as action };

export default function Terms() {
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
            <H1 title="Términos de Servicio" />
            <P
              className="text-white/70"
              text="Última actualización: junio de 2026."
            />

            <H2 className="mt-12" title="Quiénes somos" />
            <P
              className="mt-4 text-white/80"
              text="Estos términos rigen los servicios prestados por Nozzmo, S.A., sociedad legalmente constituida en Guatemala (NIT 12003296-1, con domicilio en 18av A 3-01A, Vista Hermosa 1, Zona 15, Ciudad de Guatemala). Al contratar nuestros servicios o usar este sitio, aceptas estos términos."
            />

            <H2 className="mt-12" title="Nuestros servicios" />
            <P
              className="mt-4 text-white/80"
              text="Nozzmo es una agencia de diseño y desarrollo de software y producto. El alcance específico de cada proyecto —entregables, plazos y precio— se define en la propuesta o contrato que acordemos por escrito con cada cliente."
            />

            <H2 className="mt-12" title="Propuestas y alcance" />
            <P
              className="mt-4 text-white/80"
              text="Lo que entra y lo que no entra en un proyecto es lo que esté detallado en su propuesta. Cualquier trabajo fuera de ese alcance se acuerda y cotiza por separado antes de ejecutarse."
            />

            <H2 className="mt-12" title="Pagos" />
            <P
              className="mt-4 text-white/80"
              text="Los honorarios, la moneda y el calendario de pagos se establecen en cada propuesta o contrato. Salvo acuerdo distinto, las facturas vencen según los plazos ahí indicados."
            />

            <H2 className="mt-12" title="Propiedad intelectual y entregables" />
            <P
              className="mt-4 text-white/80"
              text="Salvo que el contrato diga lo contrario, los entregables finales pasan a ser propiedad del cliente una vez pagados en su totalidad. Nozzmo conserva sus herramientas, frameworks y know-how preexistentes."
            />

            <H2 className="mt-12" title="Confidencialidad" />
            <P
              className="mt-4 text-white/80"
              text="Tratamos como confidencial la información no pública que un cliente nos comparta para un proyecto, y esperamos lo mismo respecto de la nuestra."
            />

            <H2 className="mt-12" title="Garantías y responsabilidad" />
            <P
              className="mt-4 text-white/80"
              text="Prestamos nuestros servicios con cuidado profesional. En la medida que la ley lo permita, nuestra responsabilidad total por un proyecto se limita a los montos efectivamente pagados por ese proyecto."
            />

            <H2 className="mt-12" title="Vigencia y terminación" />
            <P
              className="mt-4 text-white/80"
              text="Cualquiera de las partes puede terminar una relación según lo previsto en el contrato correspondiente; el trabajo realizado hasta ese momento se paga conforme a lo acordado."
            />

            <H2 className="mt-12" title="Ley aplicable" />
            <P
              className="mt-4 text-white/80"
              text="Estos términos se rigen por las leyes de la República de Guatemala."
            />

            <H2 className="mt-12" title="Contacto" />
            <P
              className="mt-4 text-white/80"
              text="Nozzmo, S.A. · NIT 12003296-1 · 18av A 3-01A, Vista Hermosa 1, Zona 15, Ciudad de Guatemala · info@nozzmo.com"
            />
          </article>
        </ContentLimiter>
        <Footer onOptionClick={() => {}} />
      </main>
    </CommonRouteWrapper>
  );
}
