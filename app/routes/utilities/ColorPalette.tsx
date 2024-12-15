import React from "react";

const ColorPalette = () => {
    const colors1 = [
        { name: "warm-beige", hex: "#d3c5bd" },
        { name: "soft-cream", hex: "#efe8dc" },
        { name: "muted-sand", hex: "#d8c5a2" },
        { name: "golden-tan", hex: "#b68e6d" },
        { name: "earthy-brown", hex: "#4e3b31" },
        { name: "deeper-brown", hex: "#6f4f32" },
    ];
    const colors2 = [
        // { name: "", hex: "#d1cfe2" },
        // { name: "", hex: "#bfa6d1" },
        // { name: "", hex: "#fde8d0" },
        // { name: "", hex: "#fad4a6" },
    ];

    return (
        <>
        
            <div className="flex w-full">
                {colors1.map((color) => (
                    <div
                        key={color.name}
                        className="flex-1 h-[120px] text-white flex items-center justify-center"
                        style={{ backgroundColor: color.hex }}
                    >
                        <div className="text-center text-white">
                            <p className="font-bold capitalize">{color.name}</p>
                            <p>{color.hex}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex w-full">
                {colors2.map((color) => (
                    <div
                        key={color.name}
                        className="flex-1 h-[120px] text-white flex items-center justify-center"
                        style={{ backgroundColor: color.hex }}
                    >
                        <div className="text-center text-white">
                            <p className="font-bold capitalize">{color.name}</p>
                            <p>{color.hex}</p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default ColorPalette;
