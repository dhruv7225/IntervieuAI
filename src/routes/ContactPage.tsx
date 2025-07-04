import { Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export const ContactPage = () => {
  return (
    <div className="flex-col w-full pb-24 bg-gradient-to-b from-white via-slate-50 to-gray-100">
      <Container>
        {/* Header Section */}
        <section className="my-16 text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500">
              Let's Connect
            </span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Have questions, suggestions, or want to collaborate? We’d love to hear from you. Drop us a message and we’ll get back to you shortly.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-purple-100">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none resize-none"
              />
            </div>

            <div className="flex justify-center">
              <Button type="submit" className="px-6 py-3 text-base font-semibold flex items-center gap-2 shadow-md hover:shadow-xl transition-all duration-200">
                Send Message <Sparkles className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </section>
      </Container>
    </div>
  );
};
