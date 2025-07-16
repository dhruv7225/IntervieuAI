import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { chatSession } from "@/scripts/ai-studio";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Loader } from "lucide-react";
import jsPDF from "jspdf";


const formSchema = z.object({
    topic: z.string().min(1, "Topic is required"),
    level: z.string().min(1, "Level is required"),
    numofquestions: z.coerce
        .number()
        .min(1, "Must be at least 1 question")
        .max(50, "Cannot request more than 50 questions"),
});

type FormData = z.infer<typeof formSchema>;

const Prepare = () => {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const cleanJsonResponse = (responseText: string) => {
        let cleanText = responseText.trim();
        cleanText = cleanText.replace(/(json|```|`)/gi, "");

        const jsonArrayMatch = cleanText.match(/\[.*\]/s);
        if (jsonArrayMatch) {
            cleanText = jsonArrayMatch[0];
        } else {
            throw new Error("No JSON array found in response");
        }

        try {
            return JSON.parse(cleanText);
        } catch (error) {
            throw new Error("Invalid JSON format: " + (error as Error)?.message);
        }
    };

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        setResults([]);

        const prompt = `
Generate a JSON array of ${data.numofquestions} mock interview questions and brief answers for the topic "${data.topic}" at "${data.level}" level.

Each object must follow:
{ "question": "...", "answer": "..." }

Respond strictly with a JSON array and no additional text.
`;

        try {
            const response = await chatSession.sendMessage(prompt);
            const cleaned = cleanJsonResponse(response.response.text());
            setResults(cleaned);
        } catch (error) {
            console.error("Parsing failed:", error);
            alert("Something went wrong while generating. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const exportToPDF = () => {
  const doc = new jsPDF();
  doc.setFontSize(14);
  doc.text("Mock Interview Questions", 20, 20);

  let y = 30;
  const lineHeight = 10;
  const pageHeight = 297; // A4 height in mm
  const marginBottom = 20;

  results.forEach((item, index) => {
    const question = `${index + 1}. Q: ${item.question}`;
    const answer = `A: ${item.answer}`;

    const wrappedQuestion = doc.splitTextToSize(question, 170);
    const wrappedAnswer = doc.splitTextToSize(answer, 170);

    const blockHeight =
      (wrappedQuestion.length + wrappedAnswer.length) * lineHeight + 5;

    // 🔁 Check before printing: Will it overflow?
    if (y + blockHeight > pageHeight - marginBottom) {
      doc.addPage();
      y = 20;
    }

    doc.text(wrappedQuestion, 20, y);
    y += wrappedQuestion.length * lineHeight;

    doc.text(wrappedAnswer, 20, y);
    y += wrappedAnswer.length * lineHeight + 5;
  });

  doc.save("mock-interview-questions.pdf");
};


    return (

        <div className="max-w-2xl mx-auto py-10 px-4 space-y-8">
            <div className=""></div>
            <h1 className="text-2xl md:text-5xl font-semibold leading-snug">
            <span className="text-black-700">
              Prepare for Interview
            </span>
          </h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="topic">Topic</Label>
                    <Input
                        id="topic"
                        {...form.register("topic")}
                        placeholder="e.g. React, Data Structures"
                    />
                    {form.formState.errors.topic && (
                        <p className="text-red-500 text-sm">{form.formState.errors.topic.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="level">Level</Label>
                    <Input
                        id="level"
                        {...form.register("level")}
                        placeholder="e.g. Easy, Medium, Hard"
                    />
                    {form.formState.errors.level && (
                        <p className="text-red-500 text-sm">{form.formState.errors.level.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="numofquestions">Number of Questions</Label>
                    <Input
                        id="numofquestions"
                        type="number"
                        {...form.register("numofquestions")}
                        placeholder="e.g. 5"
                    />
                    {form.formState.errors.numofquestions && (
                        <p className="text-red-500 text-sm">
                            {form.formState.errors.numofquestions.message}
                        </p>
                    )}
                </div>

                <Button type="submit" disabled={loading}>
                    {loading ? <Loader className="w-4 h-4 animate-spin" /> : "Generate"}
                </Button>
            </form>

            {/* Result Accordion */}
            {results.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Mock Interview Questions</h3>
                    <Accordion type="multiple">
                        {results.map((item, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger>Question {idx + 1}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="font-medium">{item.question}</p>
                                    <p className="text-muted-foreground mt-1">💡 {item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            )}
            {results.length > 0 && (

                <Button onClick={exportToPDF} className="mt-6">
                    Export as PDF
                </Button>
            )}

        </div>
    );
};

export default Prepare;
