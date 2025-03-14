import React from "react";
//importing images
import Heart from "../images/Heart.PNG";
import Kidney from "../images/Kidney.PNG";
import Pain from "../images/Pain.PNG";
import Skin from "../images/Skin.PNG";
import Stomach from "../images/Stomach.PNG";
import Joint from "../images/Joint.PNG";
import Derma from "../images/Derma.PNG";
import Diabetes from "../images/Diabetes.PNG";
import Count from "../images/Count.PNG";

const Care: React.FC = () => {
    const careItems = [
        { image: Diabetes, label: "Diabetes" },
        { image: Heart, label: "Heart Care" },
        { image: Stomach, label: "Stomach Care" },
        { image: Skin, label: "Skin Care" },
        { image: Pain, label: "Diabetes Pain" },
        { image: Joint, label: "Bone, Joint & Muscle care" },
        { image: Kidney, label: "KidneyCare" },
        { image: Derma, label: "Derma Care" },
    ];

    return (
        <div className="relative w-full px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-4">
                {careItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center"
                    >
                        <img 
                            src={item.image} 
                            alt={item.label} 
                            className="rounded-lg w-full max-w-[127px] h-auto aspect-square object-cover"
                        />
                        <p 
                            className="text-center mt-2 text-sm sm:text-base font-normal break-words w-full"
                            style={{ 
                                fontFamily: "GT Walsheim Pro, sans-serif",
                                lineHeight: "110%"
                            }}
                        >
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* CBC component*/}
            <div className="flex justify-center md:justify-start mt-12 mb-6">
                <div 
                    className="flex items-center w-full max-w-[328px] h-auto p-4"
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        borderRadius: "10px"
                    }}
                >
                    <div className="flex justify-center items-center" style={{ minWidth: "80px" }}>
                        <div 
                            className="flex justify-center items-center p-2"
                            style={{
                                border: "1px solid rgba(0, 0, 0, 0.3)",
                                borderRadius: "10px"
                            }}
                        >
                            <div 
                                className="flex justify-center items-center p-1"
                                style={{
                                    border: "1px solid rgba(0, 0, 0, 0.3)",
                                    borderRadius: "4px"
                                }}
                            >
                                <img 
                                    src={Count} 
                                    alt="Blood Count" 
                                    className="w-12 h-12"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-4">
                        <p 
                            className="font-medium text-base"
                            style={{
                                fontFamily: "GT Walsheim Pro, sans-serif",
                                lineHeight: "100%"
                            }}
                        >
                            Complete Blood Count
                        </p>
                        <p 
                            className="font-medium text-base mt-1 text-custom-blue"
                            style={{
                                fontFamily: "GT Walsheim Pro, sans-serif",
                                lineHeight: "100%",
                            }}
                        >
                            (CBC)
                        </p>
                        <p 
                            className="font-normal text-base mt-1"
                            style={{
                                fontFamily: "GT Walsheim Pro, sans-serif",
                                lineHeight: "100%"
                            }}
                        >
                            39 tests included
                        </p>
                    </div>
                </div>
            </div>

            {/* button component */}
            <div className="flex justify-center md:justify-start mb-8">
                <div className="flex items-center">
                    <button
                        className="text-gray text-xs font-medium px-2"
                    >
                        Previous
                    </button>
                    
                    <div className="flex mx-2">
                        <button
                            className="flex items-center justify-center mx-1 text-white bg-custom-blue w-8 h-8 rounded-lg font-medium"
                        >
                            1
                        </button>
                        
                        <button
                            className="flex items-center justify-center mx-1 bg-gray-200 w-8 h-8 rounded-lg font-medium"
                        >
                            2
                        </button>
                        
                        <button
                            className="flex items-center justify-center mx-1 bg-gray-200 w-8 h-8 rounded-lg font-medium"
                        >
                            3
                        </button>
                    </div>
                    
                    <button
                        className="text-black text-xs font-medium px-2"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Care;