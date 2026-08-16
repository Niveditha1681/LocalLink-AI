function NeonCity() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      {/* =====================================================
          ATMOSPHERIC PURPLE / PINK GLOW
      ====================================================== */}

      <div
        className="
          absolute
          right-[8%]
          top-[20%]
          h-[600px]
          w-[700px]
          rounded-full
          bg-violet-600/20
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          right-[20%]
          bottom-[0%]
          h-[450px]
          w-[700px]
          rounded-full
          bg-fuchsia-600/10
          blur-[130px]
        "
      />

      {/* =====================================================
          CODED CITY
      ====================================================== */}

      <svg
        className="
          absolute
          bottom-0
          right-[-5%]
          h-[78%]
          w-[72%]
          min-w-[700px]
        "
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMax slice"
      >

        <defs>

          {/* Sky gradient */}
          <linearGradient
            id="citySky"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#05050c"
              stopOpacity="0"
            />

            <stop
              offset="55%"
              stopColor="#17072e"
              stopOpacity="0.5"
            />

            <stop
              offset="100%"
              stopColor="#5b168f"
              stopOpacity="0.7"
            />
          </linearGradient>


          {/* Purple glow */}
          <radialGradient
            id="purpleGlow"
            cx="50%"
            cy="65%"
            r="60%"
          >
            <stop
              offset="0%"
              stopColor="#a855f7"
              stopOpacity="0.45"
            />

            <stop
              offset="45%"
              stopColor="#7c3aed"
              stopOpacity="0.18"
            />

            <stop
              offset="100%"
              stopColor="#05050c"
              stopOpacity="0"
            />
          </radialGradient>


          {/* Building gradient */}
          <linearGradient
            id="buildingGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#16132d"
            />

            <stop
              offset="100%"
              stopColor="#070711"
            />
          </linearGradient>


          {/* Neon purple */}
          <linearGradient
            id="neonPurple"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#7c3aed"
            />

            <stop
              offset="50%"
              stopColor="#c084fc"
            />

            <stop
              offset="100%"
              stopColor="#f0abfc"
            />
          </linearGradient>


          {/* Neon pink */}
          <linearGradient
            id="neonPink"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#7c3aed"
            />

            <stop
              offset="50%"
              stopColor="#ec4899"
            />

            <stop
              offset="100%"
              stopColor="#f472b6"
            />
          </linearGradient>


          {/* Glow filter */}
          <filter
            id="neonGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="7"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>


          {/* Strong glow */}
          <filter
            id="strongGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="14"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

        </defs>


        {/* =====================================================
            ATMOSPHERE
        ====================================================== */}

        <rect
          width="1000"
          height="700"
          fill="url(#citySky)"
        />

        <ellipse
          cx="600"
          cy="480"
          rx="500"
          ry="300"
          fill="url(#purpleGlow)"
        />


        {/* =====================================================
            DISTANT CITY
        ====================================================== */}

        {/* Building 1 */}
        <rect
          x="40"
          y="300"
          width="75"
          height="400"
          fill="url(#buildingGradient)"
        />

        {/* Building 2 */}
        <rect
          x="125"
          y="240"
          width="90"
          height="460"
          fill="url(#buildingGradient)"
        />

        {/* Building 3 */}
        <rect
          x="225"
          y="330"
          width="65"
          height="370"
          fill="url(#buildingGradient)"
        />

        {/* Building 4 */}
        <rect
          x="300"
          y="200"
          width="100"
          height="500"
          fill="url(#buildingGradient)"
        />

        {/* Building 5 */}
        <rect
          x="410"
          y="280"
          width="75"
          height="420"
          fill="url(#buildingGradient)"
        />

        {/* Building 6 */}
        <rect
          x="500"
          y="170"
          width="115"
          height="530"
          fill="url(#buildingGradient)"
        />

        {/* Building 7 */}
        <rect
          x="630"
          y="250"
          width="90"
          height="450"
          fill="url(#buildingGradient)"
        />

        {/* Building 8 */}
        <rect
          x="730"
          y="120"
          width="120"
          height="580"
          fill="url(#buildingGradient)"
        />

        {/* Building 9 */}
        <rect
          x="860"
          y="220"
          width="100"
          height="480"
          fill="url(#buildingGradient)"
        />


        {/* =====================================================
            BUILDING ROOFS
        ====================================================== */}

        <rect
          x="50"
          y="290"
          width="55"
          height="10"
          rx="5"
          fill="#8b5cf6"
          opacity="0.65"
          filter="url(#neonGlow)"
        />

        <rect
          x="305"
          y="190"
          width="90"
          height="8"
          rx="4"
          fill="#c084fc"
          opacity="0.65"
          filter="url(#neonGlow)"
        />

        <rect
          x="735"
          y="110"
          width="110"
          height="9"
          rx="4"
          fill="#ec4899"
          opacity="0.7"
          filter="url(#neonGlow)"
        />


        {/* =====================================================
            BUILDING WINDOWS
        ====================================================== */}

        {/* Building 1 windows */}

        <g fill="#a855f7" opacity="0.8">

          <rect x="55" y="330" width="8" height="18" />
          <rect x="78" y="330" width="8" height="18" />

          <rect x="55" y="370" width="8" height="18" />
          <rect x="78" y="370" width="8" height="18" />

          <rect x="55" y="410" width="8" height="18" />
          <rect x="78" y="410" width="8" height="18" />

          <rect x="55" y="450" width="8" height="18" />
          <rect x="78" y="450" width="8" height="18" />

        </g>


        {/* Building 2 windows */}

        <g fill="#ec4899" opacity="0.65">

          <rect x="140" y="270" width="9" height="20" />
          <rect x="165" y="270" width="9" height="20" />
          <rect x="190" y="270" width="9" height="20" />

          <rect x="140" y="310" width="9" height="20" />
          <rect x="165" y="310" width="9" height="20" />
          <rect x="190" y="310" width="9" height="20" />

          <rect x="140" y="350" width="9" height="20" />
          <rect x="165" y="350" width="9" height="20" />
          <rect x="190" y="350" width="9" height="20" />

        </g>


        {/* Building 4 windows */}

        <g fill="#8b5cf6" opacity="0.7">

          <rect x="320" y="235" width="10" height="18" />
          <rect x="345" y="235" width="10" height="18" />
          <rect x="370" y="235" width="10" height="18" />

          <rect x="320" y="275" width="10" height="18" />
          <rect x="345" y="275" width="10" height="18" />
          <rect x="370" y="275" width="10" height="18" />

          <rect x="320" y="315" width="10" height="18" />
          <rect x="345" y="315" width="10" height="18" />
          <rect x="370" y="315" width="10" height="18" />

        </g>


        {/* Tall center building */}

        <g fill="#c084fc" opacity="0.7">

          <rect x="525" y="210" width="10" height="20" />
          <rect x="550" y="210" width="10" height="20" />
          <rect x="575" y="210" width="10" height="20" />

          <rect x="525" y="250" width="10" height="20" />
          <rect x="550" y="250" width="10" height="20" />
          <rect x="575" y="250" width="10" height="20" />

          <rect x="525" y="290" width="10" height="20" />
          <rect x="550" y="290" width="10" height="20" />
          <rect x="575" y="290" width="10" height="20" />

          <rect x="525" y="330" width="10" height="20" />
          <rect x="550" y="330" width="10" height="20" />
          <rect x="575" y="330" width="10" height="20" />

        </g>


        {/* Right tall building */}

        <g fill="#ec4899" opacity="0.75">

          <rect x="755" y="160" width="11" height="22" />
          <rect x="785" y="160" width="11" height="22" />
          <rect x="815" y="160" width="11" height="22" />

          <rect x="755" y="205" width="11" height="22" />
          <rect x="785" y="205" width="11" height="22" />
          <rect x="815" y="205" width="11" height="22" />

          <rect x="755" y="250" width="11" height="22" />
          <rect x="785" y="250" width="11" height="22" />
          <rect x="815" y="250" width="11" height="22" />

          <rect x="755" y="295" width="11" height="22" />
          <rect x="785" y="295" width="11" height="22" />
          <rect x="815" y="295" width="11" height="22" />

        </g>


        {/* =====================================================
            CITY HAZE
        ====================================================== */}

        <ellipse
          cx="600"
          cy="440"
          rx="380"
          ry="130"
          fill="#8b5cf6"
          opacity="0.08"
          filter="url(#strongGlow)"
        />


        {/* =====================================================
            NEON ROAD
        ====================================================== */}

        <path
          d="
            M 0 700
            C 250 610,
              390 570,
              550 535
            C 720 495,
              850 480,
              1000 455
          "
          fill="none"
          stroke="#7c3aed"
          strokeWidth="4"
          opacity="0.55"
          filter="url(#neonGlow)"
        />

        <path
          d="
            M 0 680
            C 250 600,
              400 565,
              550 525
            C 720 485,
              850 470,
              1000 445
          "
          fill="none"
          stroke="url(#neonPink)"
          strokeWidth="2"
          opacity="0.9"
          filter="url(#neonGlow)"
        />


        {/* =====================================================
            LIGHT TRAILS
        ====================================================== */}

        <path
          d="
            M 170 700
            C 300 630,
              430 590,
              550 530
            C 650 480,
              760 420,
              850 300
          "
          fill="none"
          stroke="url(#neonPurple)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.8"
          filter="url(#strongGlow)"
        />

        <path
          d="
            M 250 700
            C 360 640,
              470 590,
              570 520
            C 680 445,
              750 390,
              820 270
          "
          fill="none"
          stroke="#ec4899"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
          filter="url(#neonGlow)"
        />


        {/* =====================================================
            HORIZON
        ====================================================== */}

        <path
          d="M 0 520 Q 500 470 1000 500"
          fill="none"
          stroke="#a855f7"
          strokeWidth="2"
          opacity="0.35"
          filter="url(#neonGlow)"
        />


        {/* =====================================================
            GLOWING LOCATION POINTS
        ====================================================== */}

        <g
          fill="#c084fc"
          filter="url(#strongGlow)"
        >

          <circle cx="650" cy="430" r="5" />

          <circle cx="740" cy="385" r="4" />

          <circle cx="570" cy="470" r="4" />

          <circle cx="820" cy="440" r="4" />

        </g>


        {/* =====================================================
            CITY REFLECTION
        ====================================================== */}

        <path
          d="
            M 50 620
            L 300 570
            L 300 700
            L 50 700
            Z
          "
          fill="#7c3aed"
          opacity="0.05"
        />

        <path
          d="
            M 400 590
            L 550 550
            L 550 700
            L 400 700
            Z
          "
          fill="#a855f7"
          opacity="0.06"
        />

        <path
          d="
            M 700 530
            L 850 500
            L 850 700
            L 700 700
            Z
          "
          fill="#ec4899"
          opacity="0.05"
        />

      </svg>


      {/* =====================================================
          BLACK FADE
          Makes the city disappear naturally behind the content
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#05050c]
          via-[#05050c]/55
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[220px]
          bg-gradient-to-t
          from-[#05050c]
          to-transparent
        "
      />

    </div>
  );
}

export default NeonCity;