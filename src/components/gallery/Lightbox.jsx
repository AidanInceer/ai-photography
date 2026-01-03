import React, { useEffect, useCallback, useState } from 'react';

const Lightbox = ({ src, alt, onClose, onNext, onPrev }) => {
    // Keep track of internal source to enable smooth transitions if props change quickly
    const [currentSrc, setCurrentSrc] = useState(src);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (src !== currentSrc) {
            setIsTransitioning(true);
            const timer = setTimeout(() => {
                setCurrentSrc(src);
                setIsTransitioning(false);
            }, 200); // Fast fade out/in
            return () => clearTimeout(timer);
        }
    }, [src, currentSrc]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') onNext();
        if (e.key === 'ArrowLeft') onPrev();
    }, [onClose, onNext, onPrev]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [handleKeyDown]);

    return (
        <div
            className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-[var(--overlay)] backdrop-blur-sm
        animate-fadeIn
      "
            onClick={onClose}
        >
            {/* Nav Left */}
            <button
                className="
                    absolute left-4 md:left-8 z-20
                    p-2 rounded-full
                    text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]
                    transition-all duration-200
                "
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous image"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Nav Right */}
            <button
                className="
                    absolute right-4 md:right-8 z-20
                    p-2 rounded-full
                    text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]
                    transition-all duration-200
                "
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next image"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Close button */}
            <button
                className="
          absolute top-6 right-6 z-20
          w-10 h-10 rounded-full
          flex items-center justify-center
          text-[var(--text-muted)] hover:text-[var(--text-primary)]
          transition-colors duration-200
        "
                onClick={onClose}
                aria-label="Close"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            {/* Image container */}
            <div
                className={`relative max-w-[85vw] max-h-[85vh] transition-opacity duration-200 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={src} // Use prop directly for instant responsive feel, logic handled by transition state for smoothness if needed
                    alt={alt}
                    className="
            max-w-full max-h-[85vh]
            object-contain
            shadow-2xl
            rounded-sm
          "
                />
            </div>
        </div>
    );
};

export default Lightbox;
