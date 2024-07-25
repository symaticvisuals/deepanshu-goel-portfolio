import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"My Tech Journey: Innovating, Building, and Collaborating"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody text="Deepanshu Goel is a tech enthusiast 🤓 who is highly motivated and passionate about developing and designing software 🧠💻. He is always eager to learn new technologies and experiment with them 🤖💡, which has helped him gain a wealth of experience in building and publishing web apps using Reactjs 🔥💻. He also has experience building full-stack applications and possesses good knowledge of DevOps practices 🚀🔧." />

            <AnimatedBody
              delay={0.1}
              text="As a developer, Deepanshu possesses excellent communication skills 🗣️, which have enabled him to collaborate on various open-source projects 🤝 and work effectively in a team environment 👥. He believes that collaboration is essential for personal and professional growth, as it allows individuals to push their potential and learn from others 🤝💡."
            />

            <AnimatedBody
              delay={0.2}
              text="Currently, he is learning about CI/CD workflows, blockchain contract building 🔑📈, and large language models (LLMs) 🧠🤖. He is also exploring ideations in web3, which are exciting new technologies shaping the future of software development 🌐🚀. He is excited to be a part of this industry and to continue learning and growing as a developer."
            />
            <AnimatedBody
              delay={0.2}
              text="In addition to his development skills, Deepanshu is also skilled in design 🎨, adding a creative edge to his projects. He is highly motivated, passionate, and experienced, with a strong desire to learn new technologies and a proven track record of success in building and publishing web apps using NextJS 🔥💻📈. His excellent communication skills and collaborative approach to work enable him to contribute to open-source projects and work effectively in a team environment 👥. He is excited to continue growing as a developer and designer in the evolving tech landscape 🚀💻🚀."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
