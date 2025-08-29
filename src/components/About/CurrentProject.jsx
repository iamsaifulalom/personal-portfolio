import Marquee from "react-fast-marquee";

export default function CurrentProject() {
    return (
        <div className="bg-background rounded-xl border-4  md:col-span-2">
            <Marquee direction="right" pauseOnHover={true} gradient={false} speed={50}>
                <div className="px-6 py-4 blur-[1px] hover:blur-none bg-red-400 text-white rounded mx-2">Item 1</div>
                <div className="px-6 py-4 bg-green-400 text-white rounded mx-2">Item 2</div>
                <div className="px-6 py-4 bg-blue-400 text-white rounded mx-2">Item 3</div>
                <div className="px-6 py-4 bg-yellow-400 text-white rounded mx-2">Item 4</div>
            </Marquee>
        </div>

    );
}
