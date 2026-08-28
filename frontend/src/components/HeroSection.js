import NeonCity from "./NeonCity";
import PhoneVisual from "./PhoneVisual";
import { Link } from "react-router-dom";


function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-120px)]
        overflow-hidden
        bg-[#05050c]
      "
    >

      {/* =====================================================
          NEON CITY BACKGROUND
      ====================================================== */}

      <NeonCity />


      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-[calc(100vh-120px)]
          max-w-[1400px]
          px-8
          pt-[130px]
          pb-16
          lg:px-12
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-30
            flex
            w-full
            max-w-[620px]
            flex-col
            justify-start
          "
        >

          {/* =================================================
              TOP BADGE
          ================================================== */}

          <div
            className="
              mb-8
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-violet-500/30
              bg-violet-950/20
              px-5
              py-3
              text-sm
              font-semibold
              tracking-wide
              text-violet-200
              backdrop-blur-md
            "
          >

            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-violet-400
                shadow-[0_0_12px_rgba(167,139,250,0.9)]
              "
            />

            <span>
              AI POWERED
            </span>

            <span className="text-white/30">
              •
            </span>

            <span>
              REAL TIME
            </span>

            <span className="text-white/30">
              •
            </span>

            <span>
              NEAR YOU
            </span>

          </div>


          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1
            className="
              text-[58px]
              font-extrabold
              leading-[0.98]
              tracking-[-3px]
              text-white
              sm:text-[68px]
              lg:text-[76px]
            "
          >

            Find Everything

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-violet-400
                via-purple-400
                to-fuchsia-400
                bg-clip-text
                text-transparent
              "
            >
              Around You
            </span>

          </h1>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-8
              max-w-[520px]
              text-lg
              leading-8
              text-white/60
              sm:text-xl
            "
          >

            Your smart local search assistant.

            <br />

            Find tools, materials, and components nearby

            <br />

            for your next prototype in real-time.

          </p>


          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >

            {/* =================================================
                SIGN UP BUTTON
            ================================================== */}

            <Link
              to="/signup"
              className="
                group
                flex
                h-[58px]
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-fuchsia-500
                px-8
                font-semibold
                text-white
                shadow-[0_15px_45px_rgba(124,58,237,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(168,85,247,0.5)]
              "
            >

              <span>
                Sign Up
              </span>

            </Link>


            {/* =================================================
                EXPLORE MAP BUTTON
            ================================================== */}

            <Link
              to="/search"
              className="
                flex
                h-[58px]
                items-center
                gap-4
                rounded-xl
                border
                border-violet-500/40
                bg-black/20
                px-7
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-400
                hover:bg-violet-500/10
              "
            >

              {/* Map Icon */}

              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >

                <path
                  d="
                    m3 6
                    6-3
                    6 3
                    6-3
                    v15
                    l-6 3
                    -6-3
                    -6 3
                    V6Z
                  "
                />

                <path
                  d="M9 3v15"
                />

                <path
                  d="M15 6v15"
                />

              </svg>


              <span>
                Explore Map
              </span>

            </Link>

          </div>


          {/* =================================================
              FEATURE CARDS
          ================================================== */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-3
            "
          >

            <FeatureCard
              icon="🤖"
              title="AI Powered"
              description="Smart tool & material recommendations"
            />

            <FeatureCard
              icon="⚡"
              title="Real-time"
              description="Live stock & availability updates"
            />

            <FeatureCard
              icon="📍"
              title="Nearby"
              description="Find prototype resources near you"
            />

          </div>

        </div>


        {/* =================================================
            PHONE VISUAL
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-40px]
            top-[52%]
            z-30
            hidden
            h-[720px]
            w-[700px]
            -translate-y-1/2
            lg:block
          "
        >

          <PhoneVisual />

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-violet-500/20
        bg-[#0c0920]/80
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-violet-500/40
        hover:bg-[#110d2b]
        hover:shadow-[0_15px_50px_rgba(124,58,237,0.15)]
      "
    >

      {/* =================================================
          ICON
      ================================================== */}

      <div
        className="
          mb-5
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-violet-500/10
          text-2xl
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >

        {icon}

      </div>


      {/* =================================================
          TITLE
      ================================================== */}

      <h3
        className="
          text-base
          font-bold
          text-white
        "
      >
        {title}
      </h3>


      {/* =================================================
          DESCRIPTION
      ================================================== */}

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-white/50
        "
      >
        {description}
      </p>

    </div>
  );
}


export default HeroSection;