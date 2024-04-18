import Image from 'next/image';

export default function Hero({ backgroundImage, title, subtitle }) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt="Background Image" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}