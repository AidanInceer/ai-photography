import React, { useState, useRef, useEffect } from 'react';

const ImageCard = ({ src, type, index, onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, []);

    // Determine grid span classes
    // NOTE: Aspect ratio classes are removed for Highlight and Portrait to allow 
    // them to stretch to fill the grid rows defined by Landscapes (which set the standard).
    const getLayoutClasses = () => {
        switch (type) {
            case 'highlight':
                // Spans 2x2. let grid stretch it.
                return 'col-span-2 row-span-2';

            case 'portrait':
                // Spans 1x2. let grid stretch it.
                return 'col-span-1 row-span-2';

            case 'landscape':
                // Standard Unit. Defines the 16:9 row height.
                return 'col-span-1 row-span-1 aspect-video';

            default:
                return 'aspect-square';
        }
    };

    return (
        <div
            ref={containerRef}
            className={`
        group relative
        cursor-pointer 
        overflow-hidden rounded-md
        bg-[var(--bg-tertiary)]
        transition-all duration-500
        ${getLayoutClasses()}
        h-full w-full /* Ensure it fills the grid cell */
      `}
            onClick={() => onClick(src)}
        >
            {/* Skeleton */}
            {!isLoaded && (
                <div className="skeleton w-full h-full absolute inset-0" />
            )}

            {/* Image */}
            {isInView && (
                <img
                    src={src}
                    alt=""
                    onLoad={() => setIsLoaded(true)}
                    className={`
            w-full h-full object-cover
            transition-all duration-700 ease-out
            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
            group-hover:scale-105 group-hover:brightness-110
          `}
                />
            )}

            {/* Overlay */}
            <div className="
        absolute inset-0
        bg-black/0 group-hover:bg-black/10
        transition-colors duration-300
        pointer-events-none
      " />
        </div>
    );
};

export default ImageCard;
