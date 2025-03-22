import React from 'react';
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
    ReactCompareSliderHandle
} from 'react-compare-slider';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
    beforeImage,
    afterImage,
    beforeLabel = "Prima",
    afterLabel = "Dopo"
}) => {
    return (
        <div className="relative rounded-2xl overflow-hidden">
            <ReactCompareSlider
                itemOne={
                    <div className="relative h-[400px]">
                        <ReactCompareSliderImage
                            src={beforeImage}
                            alt="Prima del trattamento"
                            className="w-full h-full object-cover"
                        />
                    </div>
                }
                itemTwo={
                    <div className="relative h-[400px]">
                        <ReactCompareSliderImage
                            src={afterImage}
                            alt="Dopo il trattamento"
                            className="w-full h-full object-cover"
                        />
                    </div>
                }
                handle={
                    <ReactCompareSliderHandle
                        buttonStyle={{
                            backdropFilter: 'none',
                            background: 'white',
                            border: 0,
                            color: '#333'
                        }}
                    />
                }
                position={50}
                className="h-[400px] transition-all"
                style={{
                    borderRadius: '1rem',
                }}
            />

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-dental/90 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                {beforeLabel}
            </div>
            <div className="absolute top-4 right-4 bg-dental/90 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                {afterLabel}
            </div>
        </div>
    );
};

export default BeforeAfterSlider;