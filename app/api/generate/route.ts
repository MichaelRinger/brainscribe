import openai from "@/lib/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { title, style, outline, outputFormat, language } = await request.json();
    const prompt = `Generate a blog post with the following information:
    title: ${title},
    style: ${style},
    outline: ${outline},
    output format: ${outputFormat},
    language: ${language},`;

    const completion = await openai.createChatCompletion({
        // model: "gpt-3.5-turbo",
        // temperature: 0.7,
        // n: 1,
        // stream: false,
        // prompt: prompt,
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
    });
    return NextResponse.json(completion.data.choices[0].message?.content);
}