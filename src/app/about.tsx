import Image from "next/image";
import { Award } from "lucide-react";

const About = () => {
  return (
    <section className="text-center pt-40">
      <div className="lg:flex-row justify-center items-center lg:pt-10 px-52 mb-4">
        <div className="">
          <p className="font-medium text-2xl text-gray-500">
            Me conheça um pouco mais
          </p>
        </div>

        <div>
          <h1 className="font-bold text-4xl pt-3">Sobre Mim</h1>
        </div>

        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-1">
            <Image
              width={300}
              height={300}
              alt="dev-image"
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/101297883?v=4"
            />
          </div>

          <div className="p-10 text-center m-auto justify-center border border-black rounded-3xl">
            <div className="text-center">
              <Award />
            </div>
            <p>Experience </p>
            <p>2+ years Frontend Development</p>
          </div>

          <div className="p-10 text-center m-auto justify-center border border-black rounded-full">
            <div className="text-center">
              <Award />
            </div>
            <p>Experience </p>
            <p>2+ years Frontend Development</p>
          </div>
        </div>
        {/* <Image
          width={300}
          height={300}
          alt="dev-image"
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/101297883?v=4"
        /> */}
      </div>
    </section>
  );
};

export default About;
