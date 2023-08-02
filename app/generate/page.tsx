'use client'
import { useEffect, useState } from 'react'
import { languages, styles } from '../data'
import Step1 from './step1'
import Step2 from './step2'
import OutputViewer from './output-viewer'

export default function Page() {
    // Step 1 data
    const [title, setTitle] = useState("Top Travel Destinations for 2023");
    const [style, setStyle] = useState(styles[0]);
    const [language, setLanguage] = useState(languages[0]);
    const [step, setStep] = useState(1);
    const [generating, setGenerating] = useState(false);
    const [doneWizard, setDoneWizard] = useState(false);
    const [blogPost, setBlogPost] = useState("");

    // Step 2 data
    const [introduction, setIntroduction] = useState("Excitingly introduce the blog post and the upcoming top travel destinations for 2023.");
    const [mainPart, setMainPart] = useState(`Bali, Indonesia Stunning beaches, vibrant culture, and tropical paradise vibes.
    Kyoto, Japan Traditional charm meets modernity with temples and beautiful gardens.
    Barcelona, Spain Breathtaking architecture, art, and delicious cuisine.
    Cape Town, South Africa Diverse experiences from wildlife safaris to beautiful coastlines.
    Vancouver, Canada Mountains, water, and outdoor adventures for nature lovers.`);
    const [conclusion, setConclusion] = useState("Encourage readers to explore these top destinations  and make unforgettable memories in 2023.");

    const generateBlogPost = async () => {
        setGenerating(true)
        const res = await fetch("/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                style: style,
                language: language,
                outputFormat: 'markdown',
                outline: `
                Introduction:
                ${introduction}
                Main Part:
                ${mainPart}
                Conclusion:
                ${conclusion}
                `,
            }),
        });
        const data = await res.json();
        setBlogPost(data)
        setGenerating(false);
        console.log("Done generating.")
    }

    useEffect(() => {
        if (doneWizard) {
            generateBlogPost()
        }
    }, [doneWizard])

    if (blogPost != "" && doneWizard)
        return OutputViewer({ blogPost, setBlogPost, setDoneWizard })
    else
        return (step == 1 ? Step1({ title, setTitle, style, setStyle, language, setLanguage, setStep }) : step == 2 ? Step2({ introduction, setIntroduction, mainPart, setMainPart, conclusion, setConclusion, setStep, setDoneWizard, generating }) : null);
}

