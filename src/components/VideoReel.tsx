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
                    {/* Botón Play: Caja blanca con sombra */}
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'var(--color-light)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        /* Sombra leve aplicada SOLO a la caja blanca */
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                        transition: 'transform 0.2s ease',
                    }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        {/* SVG del triángulo limpio, sin sombra */}
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="var(--color-accent)">
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