'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play, ChevronRight, ExternalLink, Dumbbell, Flame, Apple, Zap, Trophy, BookOpen } from 'lucide-react';

// Helper: extract YouTube video/playlist ID and build proper embed URL
function getEmbedUrl(youtubeUrl: string): string {
  try {
    const url = new URL(youtubeUrl);

    // Shorts
    if (url.pathname.startsWith('/shorts/')) {
      const id = url.pathname.replace('/shorts/', '');
      return `https://www.youtube.com/embed/${id}`;
    }

    // Playlist
    if (url.searchParams.get('list') && !url.searchParams.get('v')) {
      const listId = url.searchParams.get('list');
      return `https://www.youtube.com/embed/videoseries?list=${listId}`;
    }

    // Standard watch URL
    const v = url.searchParams.get('v');
    if (v) return `https://www.youtube.com/embed/${v}`;
  } catch {}
  return youtubeUrl;
}

interface Video {
  title: string;
  youtube: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface Category {
  category: string;
  icon: React.ElementType;
  accentColor: string;
  videos: Video[];
}

const difficultyConfig: Record<string, { bg: string; color: string }> = {
  Beginner: { bg: 'rgba(34,197,94,0.12)', color: '#4ade80' },
  Intermediate: { bg: 'rgba(251,191,36,0.12)', color: '#fbbf24' },
  Advanced: { bg: 'rgba(255,26,26,0.15)', color: '#ff6b6b' },
};

const fitnessVideoLibrary: Category[] = [
  {
    category: 'Workout Routines',
    icon: Dumbbell,
    accentColor: '#ff1a1a',
    videos: [
      {
        title: 'Amma Crazy Workout',
        youtube: 'https://www.youtube.com/shorts/mT2WA7hgfZ4',
        description: 'Functional strength workout performed by a 60-year-old demonstrating mobility and endurance.',
        difficulty: 'Advanced',
      },
      {
        title: 'Daily Warmup Exercises',
        youtube: 'https://www.youtube.com/watch?v=wFgUnBGmJWY',
        description: '5-minute dynamic warmup routine focusing on hip mobility and injury prevention.',
        difficulty: 'Beginner',
      },
      {
        title: 'Real Men Workout',
        youtube: 'https://www.youtube.com/watch?v=uqeqzLyo8nU',
        description: 'High-intensity conditioning workout combining strength and endurance training.',
        difficulty: 'Advanced',
      },
      {
        title: 'Beginner Shoulder & Bicep Workout',
        youtube: 'https://www.youtube.com/watch?v=n_ZcEdOSiLM',
        description: 'Beginner-friendly upper body workout focusing on correct form and muscle activation.',
        difficulty: 'Beginner',
      },
    ],
  },
  {
    category: 'Fat Loss Training',
    icon: Flame,
    accentColor: '#ff4444',
    videos: [
      {
        title: '15kg Weight Loss Challenge',
        youtube: 'https://www.youtube.com/watch?v=e52coj94NDE',
        description: 'Structured home workout program designed for rapid fat loss.',
        difficulty: 'Intermediate',
      },
      {
        title: 'Weight Loss Drinks',
        youtube: 'https://www.youtube.com/watch?v=7hE2HOeepfY',
        description: 'Natural fat-burning drinks and metabolic boosters supporting weight loss.',
        difficulty: 'Beginner',
      },
      {
        title: 'Secret Weight Loss Recipe',
        youtube: 'https://www.youtube.com/watch?v=YigKivsG42o',
        description: 'High-fiber recipe designed to promote satiety and calorie deficit.',
        difficulty: 'Beginner',
      },
      {
        title: 'Intensity Upgrade Fat Loss Workout',
        youtube: 'https://www.youtube.com/watch?v=qspYZYQmDFs',
        description: 'HIIT workout designed to maximize fat oxidation and metabolic rate.',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    category: 'Diet & Nutrition',
    icon: Apple,
    accentColor: '#e53e3e',
    videos: [
      {
        title: 'Bodybuilding Diet Chart',
        youtube: 'https://www.youtube.com/playlist?list=PLemTG2xmbmNnnC_tbufa56Ig8xF6Nn2Zf',
        description: 'Complete macro breakdown diet plan designed for muscle gain.',
        difficulty: 'Intermediate',
      },
      {
        title: 'VRK Diet Changes',
        youtube: 'https://www.youtube.com/watch?v=61B8C7tGtp8',
        description: 'Explanation of VRK ketogenic diet and insulin control strategy.',
        difficulty: 'Advanced',
      },
      {
        title: 'Best Pre Workout Food',
        youtube: 'https://www.youtube.com/watch?v=FAcikTw2mHw',
        description: 'Guide explaining the best foods to boost workout energy.',
        difficulty: 'Beginner',
      },
      {
        title: 'Balanced Fat Loss Diet',
        youtube: 'https://www.youtube.com/watch?v=gDSQsUytXsM',
        description: 'Whole food nutrition strategy for sustainable fat loss.',
        difficulty: 'Beginner',
      },
    ],
  },
  {
    category: 'Muscle Building',
    icon: Zap,
    accentColor: '#cc0000',
    videos: [
      {
        title: 'Resistance Band Muscle Training',
        youtube: 'https://www.youtube.com/watch?v=YigKivsG42o',
        description: 'Strength workout using resistance bands to stimulate hypertrophy.',
        difficulty: 'Beginner',
      },
      {
        title: 'Muscle Endurance Phase Training',
        youtube: 'https://www.youtube.com/watch?v=qspYZYQmDFs',
        description: 'Workout program designed to increase muscle endurance and strength.',
        difficulty: 'Intermediate',
      },
      {
        title: 'Chest Workout Training',
        youtube: 'https://www.youtube.com/watch?v=n_ZcEdOSiLM',
        description: 'Chest strength training demonstrating progressive overload techniques.',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    category: 'Transformation Stories',
    icon: Trophy,
    accentColor: '#ff1a1a',
    videos: [
      {
        title: '25kg Transformation Story',
        youtube: 'https://www.youtube.com/watch?v=61B8C7tGtp8',
        description: 'Real client transformation documenting long-term fat loss success.',
        difficulty: 'Intermediate',
      },
      {
        title: 'Mother Weight Loss Journey',
        youtube: 'https://www.youtube.com/watch?v=Mbwq_-rCLbY',
        description: 'Inspirational transformation showing family fitness journey.',
        difficulty: 'Beginner',
      },
      {
        title: '3 Month Transformation Challenge',
        youtube: 'https://www.youtube.com/watch?v=ZWWLlFucWJY',
        description: '90-day transformation roadmap for full body recomposition.',
        difficulty: 'Intermediate',
      },
      {
        title: '30kg Fat Loss Transformation',
        youtube: 'https://www.youtube.com/watch?v=fBhAKpVPlEU',
        description: 'Extreme fat loss transformation showing discipline and consistency.',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    category: 'Fitness Education',
    icon: BookOpen,
    accentColor: '#e53e3e',
    videos: [
      {
        title: 'Weight Loss Mistakes',
        youtube: 'https://www.youtube.com/watch?v=61B8C7tGtp8',
        description: 'Common mistakes that slow down fat loss progress explained.',
        difficulty: 'Beginner',
      },
      {
        title: 'Morning vs Evening Workouts',
        youtube: 'https://www.youtube.com/watch?v=xu0LWfSiy80',
        description: 'Explains circadian rhythm and the best workout timing for results.',
        difficulty: 'Beginner',
      },
      {
        title: 'Keto Diet Explanation',
        youtube: 'https://www.youtube.com/watch?v=gDSQsUytXsM',
        description: 'Scientific explanation of ketogenic diet metabolism and fat burning.',
        difficulty: 'Intermediate',
      },
      {
        title: 'After Diet Precautions',
        youtube: 'https://www.youtube.com/watch?v=VPlUOJSSkqk',
        description: 'Guide to maintaining weight loss and avoiding rebound after a diet phase.',
        difficulty: 'Intermediate',
      },
    ],
  },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

function VideoCard({ video, index }: { video: Video; index: number }) {
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const embedUrl = getEmbedUrl(video.youtube);
  const diffStyle = difficultyConfig[video.difficulty];

  return (
    <motion.div
      variants={fadeUp}
      className="card-dark overflow-hidden flex flex-col group rounded-none"
      style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}
    >
      {/* Video Embed */}
      <div className="relative aspect-video bg-gray-900 overflow-hidden">
        {playing ? (
          <iframe
            src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <>
            {/* Thumbnail via YouTube API */}
            <div
              className="w-full h-full cursor-pointer relative flex items-center justify-center"
              onClick={() => setPlaying(true)}
              style={{ background: '#111' }}
            >
              <img
                src={`https://img.youtube.com/vi/${new URL(video.youtube.startsWith('https') ? video.youtube : `https://${video.youtube}`).searchParams.get('v') || video.youtube.split('/shorts/')[1]?.split('?')[0] || 'default'}/hqdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
              {/* Play button */}
              <div
                className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: '#ff1a1a', boxShadow: '0 0 30px rgba(255,26,26,0.5)' }}
              >
                <Play className="w-6 h-6 text-white ml-0.5 fill-white" />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Card Info */}
      <div className="p-4 flex flex-col flex-1">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-2.5 flex-wrap">
          <span
            className="text-xs font-semibold px-2 py-0.5"
            style={{
              background: diffStyle.bg,
              color: diffStyle.color,
              border: `1px solid ${diffStyle.color}30`,
              fontFamily: 'Oswald, sans-serif',
              letterSpacing: '0.08em',
            }}
          >
            {video.difficulty}
          </span>
        </div>

        {/* Title */}
        <h4
          className="text-white text-sm font-semibold mb-1.5 leading-snug group-hover:text-red-400 transition-colors cursor-pointer"
          onClick={() => setPlaying(true)}
        >
          {video.title}
        </h4>

        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed flex-1">{video.description}</p>

        {/* Watch on YouTube link */}
        <a
          href={video.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center gap-1 text-xs text-gray-500 hover:text-red-400 transition-colors self-start"
          style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em' }}
        >
          <ExternalLink className="w-3 h-3" /> WATCH ON YOUTUBE
        </a>
      </div>
    </motion.div>
  );
}

export default function ContentPage() {
  const totalVideos = fitnessVideoLibrary.reduce((acc, cat) => acc + cat.videos.length, 0);

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative py-28 flex items-center"
        style={{ paddingTop: 'calc(72px + 60px)', background: 'linear-gradient(180deg, #111 0%, #0f0f0f 100%)' }}
      >
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,26,26,0.12) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 text-center w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="section-tag mb-3">FREE FITNESS RESOURCES</motion.p>
            <motion.h1
              variants={fadeUp}
              style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(48px, 8vw, 90px)', letterSpacing: '0.03em', lineHeight: 0.95 }}
              className="text-white mb-5"
            >
              LEARN. TRAIN. <span style={{ color: '#ff1a1a' }}>TRANSFORM.</span>
            </motion.h1>
            <div className="divider-red mx-auto mb-5" />
            <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
              {totalVideos} curated videos across {fitnessVideoLibrary.length} categories — all free, all real, all proven.
            </motion.p>

            {/* Category pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center mt-7">
              {fitnessVideoLibrary.map((cat) => (
                <a
                  key={cat.category}
                  href={`#${cat.category.replace(/\s+/g, '-').toLowerCase()}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:border-red-500 hover:text-red-400"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    letterSpacing: '0.08em',
                    border: '1px solid #333',
                    color: '#999',
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  }}
                >
                  <cat.icon className="w-3 h-3" />
                  {cat.category.toUpperCase()}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== VIDEO LIBRARY ===== */}
      <div style={{ background: '#0f0f0f' }}>
        {fitnessVideoLibrary.map((cat, catIndex) => (
          <section
            key={cat.category}
            id={cat.category.replace(/\s+/g, '-').toLowerCase()}
            className="py-20"
            style={{ borderBottom: '1px solid #1a1a1a' }}
          >
            <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
              {/* Category Header */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
              >
                <div>
                  <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
                    <div
                      className="w-9 h-9 flex items-center justify-center"
                      style={{ background: 'rgba(255,26,26,0.1)', border: '1px solid rgba(255,26,26,0.3)' }}
                    >
                      <cat.icon className="w-4 h-4" style={{ color: '#ff1a1a' }} />
                    </div>
                    <span className="section-tag">{`${cat.videos.length} VIDEOS`}</span>
                  </motion.div>
                  <motion.h2
                    variants={fadeUp}
                    style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '0.03em' }}
                    className="text-white"
                  >
                    {cat.category.split(' ').map((word, i) =>
                      i === cat.category.split(' ').length - 1
                        ? <span key={i} style={{ color: '#ff1a1a' }}>{word} </span>
                        : <span key={i}>{word} </span>
                    )}
                  </motion.h2>
                  <motion.div variants={fadeUp} className="divider-red mt-2" />
                </div>

                {/* View Full Playlist button */}
                <motion.a
                  variants={fadeUp}
                  href="https://www.youtube.com/@PraveensFitnessFamily"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2 text-sm flex-shrink-0"
                  style={{ padding: '10px 20px', whiteSpace: 'nowrap' }}
                >
                  <Play className="w-3.5 h-3.5" /> View Full Playlist
                </motion.a>
              </motion.div>

              {/* Videos Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                {cat.videos.map((video, i) => (
                  <VideoCard key={`${cat.category}-${i}`} video={video} index={i} />
                ))}
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a0000 50%, #0f0f0f 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(255,26,26,0.15) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 grid-lines opacity-20" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-tag mb-4">TAKE THE NEXT STEP</p>
            <h2
              style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(40px, 7vw, 80px)', letterSpacing: '0.03em', lineHeight: 0.95 }}
              className="text-white mb-4"
            >
              READY TO START YOUR<br />
              <span style={{ color: '#ff1a1a' }}>TRANSFORMATION?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Videos are great — but a personalized coaching program gets you results 10× faster. Join 6000+ clients who transformed their bodies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base" style={{ padding: '16px 40px' }}>
                Join Coaching
              </Link>
              <a
                href="https://wa.me/917672096669?text=Hi Praveen, I want to start my transformation!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base inline-block"
                style={{ padding: '16px 40px' }}
              >
                💬 WhatsApp Coaching
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
