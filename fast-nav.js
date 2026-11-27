/**
 * fast-nav.js - High-Performance Instant Navigation & Speculative Prefetcher
 * Gives multipage static sites instantaneous (0-50ms) page-to-page navigation.
 */
(function () {
    'use strict';

    var prefetched = new Set();
    var isSupported = 'fetch' in window;
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // 1. Create top progress bar for instant click feedback
    var progress = document.createElement('div');
    progress.id = 'fastNavProgress';
    progress.style.cssText = 'position:fixed;top:0;left:0;height:3px;width:0;background:#2563eb;z-index:999999;transition:width 0.2s ease,opacity 0.2s ease;pointer-events:none;opacity:0;';
    if (document.body) {
        document.body.appendChild(progress);
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            document.body.appendChild(progress);
        });
    }

    function showProgress() {
        progress.style.transition = 'width 0.25s ease';
        progress.style.opacity = '1';
        progress.style.width = '70%';
    }

    function isInternal(url) {
        if (!url) return false;
        if (url.startsWith('#') || url.startsWith('tel:') || url.startsWith('mailto:') || url.startsWith('javascript:')) return false;
        try {
            var target = new URL(url, window.location.href);
            return target.origin === window.location.origin && target.pathname.endsWith('.html');
        } catch (e) {
            return false;
        }
    }

    function prefetch(url) {
        if (!url || prefetched.has(url)) return;
        var targetUrl;
        try {
            targetUrl = new URL(url, window.location.href).href;
        } catch (e) {
            return;
        }
        if (prefetched.has(targetUrl)) return;
        prefetched.add(targetUrl);

        // Try link prefetch first, fallback to fetch
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = targetUrl;
        link.as = 'document';
        document.head.appendChild(link);

        if (isSupported) {
            fetch(targetUrl, { priority: 'low', cache: 'force-cache' }).catch(function () {});
        }
    }

    // 2. Hover & Touch Prefetching
    function onPointerEnter(e) {
        var link = e.target.closest('a');
        if (!link) return;
        var href = link.getAttribute('href');
        if (isInternal(href)) {
            prefetch(href);
        }
    }

    document.addEventListener('mouseover', onPointerEnter, { passive: true });
    document.addEventListener('touchstart', onPointerEnter, { passive: true });

    // 3. Instant Visual Feedback on Click
    document.addEventListener('click', function (e) {
        var link = e.target.closest('a');
        if (!link) return;
        var href = link.getAttribute('href');
        if (link.target === '_blank' || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        if (isInternal(href)) {
            showProgress();
        }
    });

    // 4. Idle prefetch of primary navbar routes
    var primaryRoutes = [
        'index.html',
        'screen-repair.html',
        'battery-replacement.html',
        'charging-port.html',
        'laptopscreen.html',
        'devices.html',
        'trade-in.html',
        'call-out-services.html',
        'catalogue.html',
        'contact.html'
    ];

    function prefetchPrimary() {
        primaryRoutes.forEach(function (page) {
            if (page !== currentPath) {
                prefetch(page);
            }
        });
    }

    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(prefetchPrimary, { timeout: 2000 });
    } else {
        window.addEventListener('load', function () {
            setTimeout(prefetchPrimary, 200);
        });
    }
})();
