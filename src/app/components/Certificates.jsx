import CertificateCard from "./CertificateCard";

export default function Certificates() {
  return (
    <section
      className="
        flex
        flex-col
        lg:flex-row
        items-center
        justify-center 
        gap-1
        lg:gap-4
        sm:mx-auto
      "
    >
      <CertificateCard frontSrc="/certificate2.svg" backSrc="/certificate2.svg" />
      <CertificateCard frontSrc="/certificate11.svg" backSrc="/certificate11.svg" />
      <CertificateCard frontSrc="/certificate3.svg" backSrc="/certificate3.svg" />
    </section>
  );
}
