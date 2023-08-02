import { Dispatch, SetStateAction } from "react";
import { classNames } from '../../lib/utils'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { languages, styles } from "../data";
import Link from "next/link";



export default function Step1({ title, setTitle, style, setStyle, language, setLanguage, setStep }: {
    title: string,
    setTitle: Dispatch<SetStateAction<string>>,
    style: string,
    setStyle: Dispatch<SetStateAction<string>>,
    language: string,
    setLanguage: Dispatch<SetStateAction<string>>,
    setStep: Dispatch<SetStateAction<number>>,
}) {

    function validated(): boolean {
        return [title, style, language].every((e) => e !== "");
    }

    return (
        <form>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-[38rem] space-y-10 mx-4">
                    <div>
                        <label htmlFor="title" className=" block text-black text-lg font-bold">Title</label>
                        <input id="title" type="text" placeholder="Please type in a title" autoFocus required className="text-black text-4xl font-light outline-none w-full mt-2" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label className="text-black text-lg font-bold">Style</label>
                        <div className="grid grid-flow-col justify-stretch select-none text-center divide-x divide-black border border-black rounded-full text-sm mt-2">
                            {styles.map((s, i) => (
                                <div key={i} onClick={() => setStyle(s)} className={classNames(s == style ? "bg-black text-white" : "", i == 0 ? "rounded-l-full" : "", i == (styles.length - 1) ? "rounded-r-full" : "", "py-2 cursor-pointer")}>{s}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-black text-lg font-bold">Language</label>
                        <div className="w-min border border-black rounded-full  text-sm mt-2">
                            <select className="border-8 border-transparent rounded-full outline-none" required onChange={e => setLanguage(e.target.value)} value={language}>
                                {
                                    languages.map((l, i) => (
                                        <option key={i} value={l}>{l}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <Link href="/" className="bg-black cursor-pointer border-black hover:bg-white hover:text-black text-white text-sm border-2 py-2 px-4 rounded-full select-none">
                            <ArrowForwardRoundedIcon className="rotate-180" /> Back
                        </Link>
                        <div onClick={() => validated() ? setStep(2) : null} className={classNames(validated() == false ? "bg-gray-300 border-gray cursor-default" : "bg-black cursor-pointer border-black hover:bg-white hover:text-black", " text-white text-sm border-2 py-2 px-4 rounded-full select-none")}>
                            Next <ArrowForwardRoundedIcon />
                        </div>
                    </div>
                </div>
            </div >
        </form >
    );
}
