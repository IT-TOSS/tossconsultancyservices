import React from "react";

const teamMembers = [
    {
        name: "Avery Davis",
        title: "His Job Title",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum vulputate dignisoit diu-eii aliquaes vilacs pharetra ec.",
        // imgSrc: "./images/avery.jpg",
    },
    {
        name: "Olivia Wilson",
        title: "Her Job Title",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, loreoco vacidip-secrat, dimurnis viquadas. pharias eac etc.",
        // imgSrc: "./images/olivia.jpg",
    },
    {
        name: "Bailey Dupont",
        title: "His Job Title",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer termenum vulputate dignisoit diu-eii diquoss viacs pharetra ec.",
        // imgSrc: "./images/bailey.jpg",
    },
    {
        name: "Taylor Alonso",
        title: "Her Job Title",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed possat diascerat, aliquarias vita vilas pharetra ec-etc.",
        // imgSrc: "./images/taylor.jpg",
    },
];

const CreativeTeam = () => {
    return (
        <div className="max-w-6xl mx-auto py-12 px-12 pt-[150px] text-center">
            <h2 className="text-4xl font-bold text-blue-400 mb-2">
                Our <span className="text-blue-800">Creative Team</span>
            </h2>
            <p className="text-blue-500 font-medium mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum
                vulputate, vitae, dignissim dui tristique sed. Aliquam erat volutpat. Quisque
                anc enim dolor, eget leguus vitae ufriciulus.
            </p>

            <div className="flex flex-col space-y-16">
                {teamMembers.map((member, index) => (
                    <div
                        key={member.name}
                        className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        <div className="relative z-10">
                            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                <img
                                    src={member.imgSrc}
                                    alt={member.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[rgba(160,130,180,0.4)] via-[rgba(150,120,190,0.4)] via-[rgba(140,130,200,0.4)] via-[rgba(130,140,210,0.4)] to-[rgba(120,150,220,0.4)] text-white p-6 rounded-2xl shadow-xl max-w-xl w-full transform transition duration-300 ease-in-out hover:-translate-y-[3px] hover:shadow-lg">
                            <h3 className="text-xl font-bold text-blue-800 mb-1">{member.name}</h3>
                            <p className="font-semibold mb-2 text-black">{member.title}</p>
                            <p className="text-sm leading-relaxed text-black">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreativeTeam;
