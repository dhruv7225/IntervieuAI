import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="flex-col w-full bg-gradient-to-b from-white via-slate-50 to-gray-100">
      <Container>
        {/* Hero Section */}
        <section className="text-center mt-20 space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
              Crack Interviews with Confidence
            </span>
          </h1>
          <h2 className="text-lg md:text-2xl text-gray-700 font-medium">
            Your AI-powered preparation partner
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Personalized practice. Instant feedback. Smarter preparation. Everything you need to ace your next interview — backed by AI.
          </p>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16">
          {[
            { value: "300K+", label: "Interviews Completed", color: "text-indigo-600" },
            { value: "150K+", label: "Successful Offers", color: "text-pink-500" },
            { value: "95%", label: "User Satisfaction", color: "text-purple-600" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-6"
            >
              <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-gray-600 text-base">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Image CTA Section */}
        <section className="relative mt-20 rounded-xl overflow-hidden shadow-lg h-[520px]">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5582e684e4b077043cc7b379/17a42d18-e4a6-4365-8d03-4f78b2e7d53c/Attack+Of+The+Robots+How+To+Prepare+For+The+AI+Job+Interview.jpg"
            alt="AI Interview Assistant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
          <div className="absolute top-4 left-4 px-5 py-2 rounded-md bg-white/80 backdrop-blur-md font-medium text-sm shadow">
            Your AI Interview Assistant&copy;
          </div>
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-lg shadow-md p-6 w-full max-w-xs hidden md:block">
            <h3 className="text-lg font-semibold text-gray-900">Get Started in Seconds</h3>
            <p className="text-sm text-gray-600 mt-2">
              Answer a few questions, and let AI generate tailored mock interview questions just for you.
            </p>
            <Link to="/generate">
            <Button className="mt-4 w-full gap-2">
              Generate <Sparkles className="h-4 w-4" />
            </Button>
            </Link>
          </div>
        </section>
      </Container>

      {/* Marquee Section */}
      <section className="w-full my-12 bg-white py-4 border-y">
        <Marquee pauseOnHover speed={40} gradient={false}>
          {[
            "firebase.png", "meet.png", "zoom.png", "firebase.png",
            "microsoft.png", "meet.png", "tailwindcss.png", "microsoft.png",
          ].map((logo, i) => (
            <MarqueImg key={i} img={`/img/logo/${logo}`} />
          ))}
        </Marquee>
      </section>

      {/* Final CTA */}
      <Container className="py-20 text-center">
        <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl px-8 py-12 shadow-xl space-y-6 max-w-3xl mx-auto border border-purple-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Start practicing smarter — not harder.
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Say goodbye to generic prep. Get personalized AI-driven mock interviews, instant analysis, and the confidence to impress.
          </p>
          <div className="flex justify-center">
            <Link to="/generate">
              <Button className="px-8 py-3 text-base font-semibold flex items-center gap-2 shadow hover:shadow-lg transition-all">
                Try It Now <Sparkles className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
