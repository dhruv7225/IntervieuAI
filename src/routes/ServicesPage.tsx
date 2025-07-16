import { Container } from "@/components/container";

export const ServicesPage = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white via-slate-50 to-gray-100 pb-24">
      <Container>
        {/* Header */}
        <section className="my-16 text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Services Offered by the Platform
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Explore all the tools and capabilities available to help you master interviews with confidence.
          </p>
        </section>

        {/* Services List */}
        <section className="max-w-5xl mx-auto space-y-12 text-gray-800 text-justify leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Mock Interview Practice</h2>
            <p>
              Simulate real-life interviews with dynamic, AI-generated questions tailored to your target role.
              Choose domains like software engineering, product management, data analysis, and more. Each session mimics time constraints, question types, and pressure similar to actual interviews.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Real-Time AI Feedback</h2>
            <p>
              Immediately after your mock interview, receive detailed feedback on your answers — including content quality,
              clarity, structure, and tone. Our AI evaluates both technical accuracy and communication effectiveness, helping you improve instantly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Performance Reports & Session Review</h2>
            <p>
              Each completed session is logged and analyzed. You’ll get a visual summary of your strengths and weaknesses,
              track improvement across sessions, and revisit your past answers and AI evaluations for deep reflection.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Domain-Specific Question Generation</h2>
            <p>
              Our platform allows you to choose your interview goal — whether it’s for frontend development, system design, behavioral HR, or product thinking. The questions adapt accordingly, so every session feels personal and relevant.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Behavioral and HR Question Training</h2>
            <p>
              Not every interview is technical. Practice soft skills, scenario-based questions, and HR-style interviews
              that focus on your mindset, attitude, and professionalism. You'll receive guidance on how to structure thoughtful, clear, and concise answers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Communication & Delivery Scoring</h2>
            <p>
              It’s not just *what* you say — it’s *how* you say it. The platform measures pacing, filler words, sentence structure, and coherence. You'll get actionable suggestions to improve your delivery, making your speech more professional and confident.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Resume & Interview Strategy Guidance</h2>
            <p>
              While the core focus is interview simulation, we also provide quick prompts and smart suggestions for
              resume alignment and preparation strategy. This helps you ensure that what you practice aligns with what recruiters are looking for.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Progress Tracking Dashboard (Coming Soon)</h2>
            <p>
              A personalized dashboard will allow you to view your performance trends, past sessions, upcoming mock interviews,
              and milestones. It's built to keep you motivated and on track throughout your preparation journey.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
};
