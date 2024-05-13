import chef1 from "../../assets/images/masterChef1.jpg";
import chef2 from "../../assets/images/masterChef2.webp";
import chef3 from "../../assets/images/masterChef3.webp";

const OurChef = () => {
    return (
        <div className="mt-10">
            <h1 className="font-semibold text-primary_btn_color text-center py-10 text-4xl lg:text-5xl">Master Chef</h1>

            <div className="grid md:grid-cols-2">
                <div>
                    <img className="h-full w-full" src={chef1} alt="" />
                </div>
                <div className="bg-primary_color group hover:bg-black hover:bg-opacity-85 duration-500">
                    <div className="opacity-0 px-10 py-5 flex flex-col gap-4 justify-center hover:opacity-100 duration-500 h-full w-full">
                        <h1 className="text-3xl font-semibold text-white">Our Master Chef</h1>
                        <h3 className="text-xl text-white">Name: Christopher Martinez</h3>
                        <h3 className="text-white text-lg">From: Italy</h3>
                        <h3 className="text-white">Experience: As an experienced chef, I have honed my skills and expertise through various roles in the culinary industry. Serving as Head Chef at La Bella Cucina in New York City since 2018, I lead a dedicated team in crafting exquisite Italian cuisine, emphasizing local ingredients and seasonal flavors while maintaining cost-efficiency and adhering to rigorous health and safety standards. Prior to this, my tenure as Sous Chef at Le Petit Bistro in San Francisco allowed me to refine my managerial abilities.</h3>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2">
                <div className="bg-primary_color group hover:bg-black hover:bg-opacity-85 duration-500">
                    <div className="opacity-0 px-10 py-5 flex flex-col gap-4 justify-center hover:opacity-100 duration-500 h-full w-full">
                        <h1 className="text-3xl font-semibold text-white">Our Master Chef</h1>
                        <h3 className="text-xl text-white">Name: Javier Lopez</h3>
                        <h3 className="text-white text-lg">From: Turkiea</h3>
                        <h3 className="text-white">Experience: As an experienced chef, I have honed my skills and expertise through various roles in the culinary industry. Serving as Head Chef at La Bella Cucina in New York City since 2018, I lead a dedicated team in crafting exquisite Italian cuisine, emphasizing local ingredients and seasonal flavors while maintaining cost-efficiency and adhering to rigorous health and safety standards. Prior to this, my tenure as Sous Chef at Le Petit Bistro in San Francisco allowed me to refine my managerial abilities.</h3>
                    </div>
                </div>
                <div>
                    <img className="h-full w-full" src={chef2} alt="" />
                </div>
            </div>
            <div className="grid md:grid-cols-2">
                <div>
                    <img className="h-full w-full" src={chef3} alt="" />
                </div>
                <div className="bg-primary_color group hover:bg-black hover:bg-opacity-85 duration-500">
                    <div className="opacity-0 px-10 py-5 flex flex-col gap-4 justify-center hover:opacity-100 duration-500 h-full w-full">
                        <h1 className="text-3xl font-semibold text-white">Our Master Chef</h1>
                        <h3 className="text-xl text-white">Name: Carlos Rodriguez</h3>
                        <h3 className="text-white text-lg">From: Spain</h3>
                        <h3 className="text-white">Experience: As an experienced chef, I have honed my skills and expertise through various roles in the culinary industry. Serving as Head Chef at La Bella Cucina in New York City since 2018, I lead a dedicated team in crafting exquisite Italian cuisine, emphasizing local ingredients and seasonal flavors while maintaining cost-efficiency and adhering to rigorous health and safety standards. Prior to this, my tenure as Sous Chef at Le Petit Bistro in San Francisco allowed me to refine my managerial abilities.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurChef;