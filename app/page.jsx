import './my.css'

export default function Home() {
    return (
        <div className="">
            <div className="absolute overflow-auto top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <div className="text-3x  w-full p-5 text-center text-xl">
                    <div className="h-[66vh] flex justify-center flex-col gap-2 items-center">
                        <div className="font-bold flex gap-2 justify-center items-center text-5xl">
                            <span>Buy me a chai </span><span><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2FBTabWiklufsAAAAj%2Fcoffee-lover.gif&f=1&nofb=1&ipt=6690cc4865eaf8c1553ff9ec9214d2718c2d820a2647ed7a8ece4b04f4274caa" className="w-25" alt="chaiGif" /></span>
                        </div>
                        <p className="text-gray-200 hover:text-white">A crowdfunding platform for creators. Get funds by you fans and followers. Start now!</p>
                        <div className="flex gap-1 my-1 ">
                            <button type="button" className="text-white font-semibold hover:font-bold bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-bl focus:ring-4 border-blue-600  rounded-xl border hover:border-2 transition-all duration-300 m-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-base text-sm px-4 py-2.5 text-center leading-5">Start here</button>
                            <button type="button" className="text-white font-semibold hover:font-bold bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 border-green-600  rounded-xl border hover:border-2 transition-all duration-300 m-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-base text-sm px-4 py-2.5 text-center leading-5">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white opacity-10 h-0.5"></div>
                <div className="flex gap-10 justify-around items-center h-fit px-20 py-10">
                    <div className="flex flex-col justify-center gap-10 items-start px-4">
                        <h2 className="text-4xl font-semibold ">Fans can buy you a chai!</h2>
                        <p className="text-gray-200 text-balance">Welcome to my Patreon page! Your support enables me to create exclusive content, share behind-the-scenes insights, and connect with a vibrant community of fellow fans. Join me on this journey and enjoy special perks just for you!</p>
                    </div>
                    <img className="w-[42%] border-red-600 border-2 rounded-4xl" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-global.website-files.com%2F624c384f8381545e20dec7ac%2F633be870e65ed7986905bef8_Sources%2520of%2520Funding%2520for%2520Startups.gif&f=1&nofb=1&ipt=aa27a95983039ba2ee06b659b44146d8f1a9a3029ee4e17a02372e10dcd22fda" alt="illustration" />
                </div>

                <div className="bg-white my-1 opacity-10 h-0.5"></div>
                <h2 className="py-7 text-center text-4xl font-semibold px-20">Features</h2>
                <div className="FEATURES mb-16 flex h-[28vh] justify-center items-center flex-col py-10 ">
                    <div className="flex justify-around gap-96 py-6 px-2">

                        <div className="CARD flex flex-col gap-2 justify-center items-center">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2FdnJbv4gbSigAAAAd%2Fanimation-man.gif&f=1&nofb=1&ipt=82003a1e0177baef8e7cbf451f660e85422ffed4e367ed1756798fa7393e1a1c" className="w-35 border-2 rounded-full" alt="man" />
                            <p>Fund yourself</p>
                        </div>


                        <div className="CARD flex flex-col gap-2 justify-center items-center">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20221020%2Foriginal%2Fpngtree-diversity-of-people-background-flat-design-png-image_8708592.png&f=1&nofb=1&ipt=e134f8801a5c0a5e5887ef78a8bec2093158a888db21b33cc7cbda640f6058a0" className=" bg-[#24c897] w-35 h-35 border-2 rounded-full" alt="man" />
                            <p>Make groups</p>
                        </div>


                        <div className="CARD flex flex-col gap-2 justify-center items-center">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia4.giphy.com%2Fmedia%2FOccMlQrNO0YU4zFchY%2Fgiphy.gif&f=1&nofb=1&ipt=ab07978258faa710422b9f9b8162ca870b87e47589473d3983d32432c5f39cef" className="w-35 border bg-[#24c897] rounded-full" alt="man" />
                            <p>Feel yourself</p>
                        </div>

                    </div>

                </div>
                <div className="bg-white my-1 opacity-10 h-0.5"></div>

                <h2 className="py-7 text-center text-4xl font-semibold px-20">Learn more about us</h2>

                <div className="FEATURES mb-16 flex h-fit justify-center items-center flex-col pb-10 pt-2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=MauMq8zcbN0iQITj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <div className="bg-white my-1 opacity-10 h-0.5 mb-5"></div>


            </div>
        </div>
    );
}
