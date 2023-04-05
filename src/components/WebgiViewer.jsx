import { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from "react";

import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck
} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = forwardRef((props, ref) => {
    const canvasRef = useRef(null);
    const canvasContainerRef = useRef(null);
    const [viewerRef, setViewerRef] = useState(null);
    const [targetRef, setTargetRef] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [positionRef, setPositionRef] = useState(null);
    const [previewMode, setPreviewMode] = useState(false);
    const [isMobile, setIsMobile] = useState(null);

    useImperativeHandle(ref, () => ({
        triggerPreview() {
            setPreviewMode(true);
            canvasContainerRef.current.style.pointerEvents = 'all';
            props.contentRef.current.style.opacity = "0";

            gsap.to(positionRef, {
                x: 13.04,
                y: -2.01,
                z: 2.29,
                duration: 2,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            });
            gsap.to(targetRef, {
                x: 0.11,
                y: 0,
                z: 0,
                duration: 2,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                }
            });

            viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
        }
    }))

    const memoizedScrollAnimation = useCallback((position, target, onUpdate, isMobile) => {
        if (position && target && onUpdate) {
            scrollAnimation(position, target, onUpdate, isMobile);
        }
    }, []);

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        });

        setViewerRef(viewer);
        const isMobileOrTablet = mobileAndTabletCheck();
        setIsMobile(isMobileOrTablet);

        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera;
        const { position, target } = camera;
        setCameraRef(camera);
        setPositionRef(position);
        setTargetRef(target);

        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)

        viewer.renderer.refreshPipeline()

        await manager.addFromPath("scene-black.glb")

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

        if (isMobileOrTablet) {
            position.set(-16.7, 1.17, 11.7);
            target.set(0, 1.37, 0);
            props.contentRef.current.className = 'mobile-or-tablet';
        }

        window.scrollTo(0, 0);

        let needsUpdate = true;

        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        }

        viewer.addEventListener('preFrame', () => {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        });

        memoizedScrollAnimation(position, camera, onUpdate, isMobile);
    }, []);

    useEffect(() => {
        setupViewer()
    }, []);

    const handleExit = useCallback(() => {
        setPreviewMode(false);
        canvasContainerRef.current.style.pointerEvents = 'none';
        props.contentRef.current.style.opacity = "1";
        viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
        gsap.to(positionRef, {
            x: !isMobile ? 4.7395553226 : 9.36,
            y: !isMobile ? -12.5716620287 : 10.95,
            z: !isMobile ? -0.033204034 : 0.09,
            scrollTrigger: {
                trigger: '.display-section',
                start: 'top bottom',
                end: 'top top',
                scrub: 2,
                immediateRender: false
            },
            onUpdate: () => {
                viewerRef.setDirty();
                cameraRef.positionTargetUpdated(true);
            }
        });
        gsap.to(targetRef, {
            x: !isMobile ? 0 : -1.62,
            y: !isMobile ? 0 : 0.02,
            z: !isMobile ? 0 : -0.06,
            scrollTrigger: {
                trigger: '.display-section',
                start: 'top bottom',
                end: 'top top',
                scrub: 2,
                immediateRender: false
            },
            onUpdate: () => {
                viewerRef.setDirty();
                cameraRef.positionTargetUpdated(true);
            }
        });
    }, [canvasContainerRef, viewerRef, cameraRef])

    return (
        <div ref={canvasContainerRef} id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef} />
            {
                previewMode && (
                    <button className="button" onClick={handleExit}>Exit</button>
                )
            }
        </div>
    )
})

export default WebgiViewer;