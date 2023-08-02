import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { classNames } from '../../lib/utils'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'



export default function Step2({ introduction, setIntroduction, mainPart, setMainPart, conclusion, setConclusion, setStep, setDoneWizard, generating }: {
    introduction: string,
    setIntroduction: Dispatch<SetStateAction<string>>,
    mainPart: string,
    setMainPart: Dispatch<SetStateAction<string>>,
    conclusion: string,
    setConclusion: Dispatch<SetStateAction<string>>,
    setStep: Dispatch<SetStateAction<number>>,
    setDoneWizard: Dispatch<SetStateAction<boolean>>,
    generating: boolean,
}) {
    function validated(): boolean {
        return [introduction, mainPart, conclusion].every((e) => e.trim() !== "");
    }
    return (
        <form>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-[38rem] mx-4 min-h-full space-y-5">
                    {!generating ?
                        (<><div className="text-black text-2xl font-bold mb-4">Please provide a basic outline for your post </div><AutoResizeTextarea
                            id="introduction"
                            label="Introduction"
                            text={introduction}
                            setText={setIntroduction}
                            placeholder="Type your introduction here"
                            required={true} /><AutoResizeTextarea
                                id="main-part"
                                label="Main Part"
                                text={mainPart}
                                setText={setMainPart}
                                placeholder="Type the main content of your post here"
                                required={true} /><AutoResizeTextarea
                                id="conclusion"
                                label="Conclusion"
                                text={conclusion}
                                setText={setConclusion}
                                placeholder="Conclude your post"
                                required={true} /><div className="flex justify-between">
                                <div onClick={() => setStep(1)} className="bg-black cursor-pointer border-black hover:bg-white hover:text-black text-white text-sm border-2 py-2 px-4 rounded-full select-none">
                                    <ArrowForwardRoundedIcon className="rotate-180" /> Back
                                </div>
                                <div onClick={() => validated() ? setDoneWizard(true) : null} className={classNames(validated() == false ? "bg-gray-300 border-gray" : "bg-black border-black hover:bg-white hover:text-black cursor-pointer", " text-white text-sm border-2 py-2 px-4 rounded-full select-none")}>
                                    Generate
                                </div>
                            </div></>)
                        : <div className="text-4xl font-light">Generating ...</div>}
                </div>
            </div >
        </form >
    );
}


interface AutoResizeTextareaProps {
    id: string;
    label: string;
    text: string;
    setText: Dispatch<SetStateAction<string>>;
    placeholder?: string;
    required?: boolean;

}

const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({
    id,
    label,
    text,
    setText,
    placeholder = '',
    required = false,

}) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Function to adjust the textarea height based on its content
    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    // useEffect hook to adjust the textarea height when its content changes
    useEffect(() => {
        adjustTextareaHeight();
    }, [text]);

    return (
        <div>
            <label htmlFor={id} className="block text-lg font-bold">
                {label}
            </label>
            <textarea
                id={id}
                placeholder={placeholder}
                required={required}
                className="text-black text-2xl font-light outline-none w-full mt-2 resize-none"
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
};