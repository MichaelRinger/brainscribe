import { Dispatch, SetStateAction } from "react";
import ReactMarkdown from "react-markdown";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { copyToClipBoard } from "@/lib/utils";

export default function OutputViewer({ blogPost, setBlogPost, setDoneWizard }: {
    blogPost: string,
    setBlogPost: Dispatch<SetStateAction<string>>,
    setDoneWizard: Dispatch<SetStateAction<boolean>>,
}) {


    return (
        <div className="flex justify-center my-12 min-h-screen">
            <div className="w-[52rem] mx-4 min-h-full space-y-10">
                <div className="flex justify-between">
                    <div onClick={() => { setBlogPost(""); setDoneWizard(false) }} className="bg-black cursor-pointer border-black hover:bg-white hover:text-black text-white text-sm border-2 py-2 px-4 rounded-full select-none">
                        <ArrowForwardRoundedIcon className="rotate-180" /> Back
                    </div>
                    <div onClick={copyToClipBoard.bind(null, blogPost)} className="bg-black cursor-pointer border-black hover:bg-white hover:text-black text-white text-sm border-2 py-2 px-4 rounded-full select-none">
                        <ContentCopyIcon /> Copy
                    </div>
                </div>
                <ReactMarkdown className="prose lg:prose-xl">{blogPost}</ReactMarkdown>
            </div>
        </div >
    );
}
