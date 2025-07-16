import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="flex-col w-full bg-gray-50 text-gray-800">
      <Container>
        <section className="text-center mt-16 space-y-5 max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
            <span className="text-indigo-700">
              Interview Smarter, Not Harder
            </span>
          </h1>
          <h2 className="text-md md:text-xl text-gray-600 font-normal">
            A calm and reliable AI partner to help you prepare
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Practice questions made just for you, based on your skills. No stress, just real progress — step by step.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-14">
          {[
            { value: "300K+", label: "Mock Interviews Done", color: "text-indigo-600" },
            { value: "150K+", label: "Users Got Offers", color: "text-pink-600" },
            { value: "95%", label: "People Feel Confident", color: "text-purple-600" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border p-5 shadow-sm hover:shadow transition"
            >
              <p className={`text-3xl font-semibold ${stat.color}`}>{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="relative mt-16 rounded-lg overflow-hidden shadow h-[480px]">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5582e684e4b077043cc7b379/17a42d18-e4a6-4365-8d03-4f78b2e7d53c/Attack+Of+The+Robots+How+To+Prepare+For+The+AI+Job+Interview.jpg"
            alt="AI Interview Assistant"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-5 right-5 bg-white rounded-md shadow p-5 w-full max-w-sm hidden md:block">
            <h3 className="text-base font-semibold text-gray-800">Quick Start</h3>
            <p className="text-sm text-gray-500 mt-1">
              Just answer a few questions — and we’ll generate your custom interview right away.
            </p>
            <Link to="/generate">
              <Button className="mt-4 w-full gap-2 text-sm">
                Generate <Sparkles className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </Container>

      <section className="w-full my-10 bg-white py-4 border-y">
        <Marquee pauseOnHover speed={30} gradient={false}>
          {[
            "firebase.png", "meet.png", "zoom.png", "firebase.png",
            "microsoft.png", "meet.png", "tailwindcss.png", "microsoft.png",
          ].map((logo, i) => (
            <MarqueImg key={i} img={`/img/logo/${logo}`} />
          ))}
        </Marquee>
      </section>

      <Container className="py-16 text-center">
        <div className="bg-white border rounded-2xl px-6 py-10 shadow-md space-y-5 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Build your confidence with every step
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto">
            Our AI guides you through personalized interviews and gives helpful feedback — just like a real coach.
          </p>
          <div className="flex justify-center">
            <Link to="/generate">
              <Button className="px-6 py-2 text-sm font-medium flex items-center gap-2 shadow-sm hover:shadow-md">
                Try It Now <Sparkles className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
