import { Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="flex-col w-full pb-24 bg-gradient-to-b from-white via-slate-50 to-gray-100">
      <Container>
        {/* Intro Section */}
        <section className="my-16 text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            <span className="text-black-700">
              About Us
            </span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Our mission is simple: to make interview preparation smarter, more accessible, and tailored to every individual using the power of AI.
          </p>
        </section>

        {/* Main Content Section */}
        <section className="max-w-3xl mx-auto text-gray-800 space-y-6 text-justify leading-relaxed">
          <h2 className="text-2xl font-semibold">Why We Exist</h2>
          <p>
            Interviews are high-stakes moments, and yet, most people prepare with outdated methods or generic advice. We wanted to change that. Our platform simulates real-world interviews using AI, helping you build confidence, get structured feedback, and practice anytime, anywhere.
          </p>

          <h2 className="text-2xl font-semibold">How We Help</h2>
          <p>
            With tailored mock interviews, question generation based on roles and skillsets, and instant AI feedback, we provide a complete prep experience. Whether it's technical interviews, HR rounds, or behavioral sessions — we’ve got you covered.
          </p>

          <h2 className="text-2xl font-semibold">Who It’s For</h2>
          <p>
            Our tool is built for students, fresh graduates, career switchers, and professionals aiming to level up. If you're prepping for campus placements, tech roles, or product management positions — you’ll find value here.
          </p>

          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p>
            We envision a world where no one feels underprepared before an interview. As we grow, we’re working on voice-based simulations, recruiter dashboards, peer-to-peer feedback systems, and more to make preparation holistic and adaptive.
          </p>
        </section>

        {/* Final CTA Section */}
        <Container className="py-20 text-center">
          <div className="bg-gradient-to-br from-indigo-100 via-white to-purple-50 rounded-2xl px-8 py-12 shadow-lg space-y-6 max-w-3xl mx-auto border border-purple-100">
            <h2 className="text-3xl font-bold text-gray-800">
              Take the next step toward interview success.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Stop guessing. Start practicing with AI-driven simulations and real-time feedback that’s built to help you grow.
            </p>
            <div className="flex justify-center">
              <Link to="/generate">
                <Button className="px-8 py-3 text-base font-semibold flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-200">
                  Try It Now <Sparkles className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};
