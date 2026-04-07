import { useState } from 'react';

interface VideoReelProps {
    videoSrc: string;
    coverImageSrc?: string;
}

export default function VideoReel({ videoSrc, coverImageSrc }: VideoReelProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            {!isPlaying ? (
                <div
                    id="videoCoverPlaceholder"
                    onClick={() => setIsPlaying(true)}
                    role="button"
                    tabIndex={0}
                    aria-label="Reproducir showreel"
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsPlaying(true); }}
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'var(--color-accent)',
                        backgroundImage: coverImageSrc ? `url(${coverImageSrc})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'filter 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                >
                    {/* Botón Play */}
                    <div style={{
                        width: '80px',
                        height: '60px',
                        backgroundColor: 'var(--color-light)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-accent)">
                            <path d="M5 3l14 9-14 9V3z" />
                        </svg>
                    </div>
                </div>
            ) : (
                <video
                    id="mainVideoPlayer"
                    src={videoSrc}
                    controls
                    autoPlay
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', outline: 'none', backgroundColor: '#000' }}
                ></video>
            )}
        </div>
    );
}