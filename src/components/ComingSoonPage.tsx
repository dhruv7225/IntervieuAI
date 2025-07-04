import { Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export const ComingSoonPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white via-slate-50 to-gray-100">
      <Container className="text-center px-6 py-12 space-y-8 max-w-2xl rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm border border-purple-100">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Something Amazing is Coming Soon
        </h1>
        <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto">
          We’re working hard behind the scenes to bring you an AI-powered experience that will change the way you prepare for interviews.
        </p>

        {/* Placeholder for future countdown or animation */}
        <div className="text-2xl font-semibold text-purple-600">
          Stay Tuned! 🚀
        </div>

        <Button className="px-6 py-3 text-base font-medium flex items-center gap-2 mx-auto shadow-md hover:shadow-lg transition-all">
          Notify Me <Sparkles className="h-5 w-5" />
        </Button>
      </Container>
    </div>
  );
};
