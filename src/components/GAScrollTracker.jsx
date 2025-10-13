import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useGATracking from '../hooks/useGATracking';

/**
 * Component to track scroll depth
 * Place this file in: src/components/GAScrollTracker.jsx
 * 
 * Usage: Add <GAScrollTracker /> once in your App.jsx or main layout
 */

const GAScrollTracker = () => {
    const { trackScrollDepth } = useGATracking();
    const trackedMilestones = useRef(new Set());
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

            // Track milestones: 25%, 50%, 75%, 90%
            const milestones = [25, 50, 75, 90];

            milestones.forEach(milestone => {
                if (scrollPercentage >= milestone && !trackedMilestones.current.has(milestone)) {
                    trackedMilestones.current.add(milestone);
                    trackScrollDepth(milestone);
                }
            });
        };

        // Throttle scroll events
        let timeoutId;
        const throttledScroll = () => {
            if (timeoutId) return;
            timeoutId = setTimeout(() => {
                handleScroll();
                timeoutId = null;
            }, 500);
        };

        window.addEventListener('scroll', throttledScroll);

        return () => {
            window.removeEventListener('scroll', throttledScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [trackScrollDepth]);

    // Reset tracked milestones when route changes
    useEffect(() => {
        trackedMilestones.current.clear();
    }, [location.pathname]);

    return null; // This component doesn't render anything
};

export default GAScrollTracker;