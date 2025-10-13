import { useEffect } from 'react';

/**
 * Custom hook for Google Analytics 4 event tracking
 */

const useGATracking = () => {
    // Check if gtag is available
    const isGAAvailable = () => {
        return typeof window !== 'undefined' && typeof window.gtag === 'function';
    };

    // Track page views automatically
    useEffect(() => {
        if (isGAAvailable()) {
            window.gtag('event', 'page_view', {
                page_path: window.location.pathname + window.location.search,
                page_title: document.title,
            });
        }
    }, []);

    // Generic event tracking function
    const trackEvent = (eventName, eventParams = {}) => {
        if (isGAAvailable()) {
            window.gtag('event', eventName, eventParams);
            console.log(`GA4 Event: ${eventName}`, eventParams);
        } else {
            console.warn('Google Analytics not loaded');
        }
    };

    // CV Download tracking
    const trackCVDownload = () => {
        trackEvent('cv_download', {
            file_name: 'Joey Wong CV 2025.pdf',
            file_extension: 'pdf',
            link_text: 'Download CV',
        });
    };

    // Project click tracking
    const trackProjectClick = (projectName, projectUrl) => {
        trackEvent('project_click', {
            project_name: projectName,
            project_url: projectUrl,
            link_type: 'project_card',
        });
    };

    // Case study view tracking
    const trackCaseStudyView = (caseStudyName) => {
        trackEvent('case_study_view', {
            case_study_name: caseStudyName,
            content_type: 'case_study',
        });
    };

    // Outbound link tracking (GitHub, Live Demo, etc.)
    const trackOutboundClick = (destination, url, linkText) => {
        trackEvent('outbound_click', {
            destination_type: destination, // 'github', 'live_demo', 'external'
            outbound_url: url,
            link_text: linkText,
        });
    };

    // Social media link tracking
    const trackSocialClick = (platform, url) => {
        trackEvent('social_click', {
            social_platform: platform, // 'github', 'linkedin', 'email'
            social_url: url,
        });
    };

    // Contact interaction tracking
    const trackContactInteraction = (interactionType) => {
        trackEvent('contact_interaction', {
            interaction_type: interactionType, // 'email_click', 'copy_email', etc.
        });
    };

    // Navigation tracking
    const trackNavigation = (navItem, navType = 'main_nav') => {
        trackEvent('navigation_click', {
            nav_item: navItem,
            nav_type: navType, // 'main_nav', 'footer', 'back_to_top'
        });
    };

    // Gallery interaction tracking
    const trackGalleryInteraction = (action, mediaType) => {
        trackEvent('gallery_interaction', {
            action: action, // 'play', 'pause', 'fullscreen', 'navigate'
            media_type: mediaType, // 'video', 'image'
        });
    };

    // Scroll depth tracking (custom)
    const trackScrollDepth = (percentage) => {
        trackEvent('scroll_depth', {
            scroll_percentage: percentage,
            page_path: window.location.pathname,
        });
    };

    // Time on page tracking
    const trackTimeOnPage = (seconds, pageName) => {
        trackEvent('time_on_page', {
            time_seconds: seconds,
            page_name: pageName,
        });
    };

    return {
        trackEvent,
        trackCVDownload,
        trackProjectClick,
        trackCaseStudyView,
        trackOutboundClick,
        trackSocialClick,
        trackContactInteraction,
        trackNavigation,
        trackGalleryInteraction,
        trackScrollDepth,
        trackTimeOnPage,
    };
};

export default useGATracking;