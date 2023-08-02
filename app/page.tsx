import Image from 'next/image'
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Page() {

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-2 min-h-screen space-y-10">
        <div className="text-7xl font-bold">Brainscribe</div>
        <div className="text-3xl text-center font-medium"><span className="font-extrabold text-zinc-600">Fast</span> and <span className="font-extrabold text-emerald-500">Simple</span><span> Way to Craft Professional Blog Posts and <br />to 🚀 your blog</span></div>
        <Link href="/generate" className="bg-black text-white text-l border-2 border-black py-3 px-5 rounded-full hover:bg-white hover:text-black">
          <button>Get Started</button>
        </Link>
      </div>
      <Image className="absolute top-0 left-0 rotate-180 select-none pointer-events-none" src="/bg_pattern.png" alt='Background pattern lower right' width={576} height={305} />
      <Image className="absolute bottom-0 right-0 select-none pointer-events-none" src="/bg_pattern.png" alt='Background pattern lower right' width={576} height={305} />
    </div>
  );
}
