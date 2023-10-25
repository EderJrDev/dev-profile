import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-center">
      <div className="flex justify-center items-center rounded-full pt-20 mb-4">
        <Image
          width={300}
          height={300}
          alt="dev-image"
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/101297883?v=4"
        />
      <div>
        <p>Hello, I'm</p>
        <h1>John Doe</h1>
        <p>Frontend Developer</p>
        <div className="mb-4">
          <button className="mr-4">Download CV</button>
          <button>Contact Info</button>
        </div>
        <div>
          {/* Se você quiser adicionar ícones mais tarde */}
          {/* <img
            src="/assets/linkedin.png"
            alt="My LinkedIn profile"
            className={styles.icon}
          />
          <img
            src="/assets/github.png"
            alt="My Github profile"
            className={styles.icon}
          /> */}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
