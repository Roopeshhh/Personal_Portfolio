import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 650,
    blur = true,
}) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.05,
                rootMargin: '0px 0px 60px 0px', // Pre-triggers 60px before scrolling into viewport
            }
        );

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const getDirectionTransform = () => {
        if (isVisible) return 'translate3d(0, 0, 0)';
        switch (direction) {
            case 'up':
                return 'translate3d(0, 24px, 0)';
            case 'down':
                return 'translate3d(0, -24px, 0)';
            case 'left':
                return 'translate3d(24px, 0, 0)';
            case 'right':
                return 'translate3d(-24px, 0, 0)';
            default:
                return 'translate3d(0, 24px, 0)';
        }
    };

    return (
        <div
            ref={domRef}
            style={{
                transform: getDirectionTransform(),
                opacity: isVisible ? 1 : 0,
                filter: blur ? (isVisible ? 'blur(0px)' : 'blur(6px)') : 'none',
                transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                willChange: 'opacity, transform, filter',
            }}
            className={className}
        >
            {children}
        </div>
    );
}