function PhoneVisual() {
  return (
    <div className="relative h-[720px] w-[700px]">

      {/* =====================================================
          BIG PURPLE GLOW
      ====================================================== */}

      <div
        className="
          absolute
          right-[170px]
          top-[100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-600/25
          blur-[130px]
        "
      />


      {/* =====================================================
          PHONE GROUP
          
          PHONE MOVED SLIGHTLY LEFT
          PHONE DANCE IS UNCHANGED
      ====================================================== */}

      <div
        className="
          group
          absolute

          right-[200px]
          top-[15px]

          z-30

          h-[680px]
          w-[380px]

          rotate-[7deg]

          animate-phone-dance

          transition-all
          duration-700
          ease-out

          hover:scale-[1.035]
          hover:rotate-[5deg]
        "
      >

        {/* =================================================
            PHONE OUTER FRAME
        ================================================== */}

        <div
          className="
            relative
            h-full
            w-full
            overflow-hidden

            rounded-[58px]

            border-[5px]
            border-violet-500

            bg-gradient-to-br
            from-[#4c1d95]
            via-[#111034]
            to-[#05050c]

            shadow-[0_0_35px_rgba(139,92,246,0.65)]
          "
        >

          {/* =================================================
              INNER PHONE SCREEN
          ================================================== */}

          <div
            className="
              absolute
              inset-[7px]

              overflow-hidden

              rounded-[48px]

              border
              border-violet-400/20

              bg-[#050b20]
            "
          >

            {/* =================================================
                MAP GRID
            ================================================== */}

            <div
              className="
                absolute
                inset-0

                opacity-70

                bg-[linear-gradient(rgba(91,78,180,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(91,78,180,0.12)_1px,transparent_1px)]

                bg-[size:45px_45px]
              "
            />


            {/* =================================================
                MAP GLOW
            ================================================== */}

            <div
              className="
                absolute

                left-[35%]
                top-[42%]

                h-[180px]
                w-[180px]

                rounded-full

                bg-violet-600/20

                blur-[60px]
              "
            />


            {/* =================================================
                STATUS BAR
            ================================================== */}

            <div
              className="
                absolute
                left-8
                right-8
                top-5

                z-20

                flex
                items-center
                justify-between

                text-[11px]
                font-semibold
                text-white/70
              "
            >
              <span>9:41</span>

              <div className="flex items-center gap-2">
                <span>●</span>
                <span>●</span>
                <span>▮▮</span>
              </div>
            </div>


            {/* =================================================
                DYNAMIC ISLAND
            ================================================== */}

            <div
              className="
                absolute

                left-1/2
                top-4

                z-30

                h-7
                w-28

                -translate-x-1/2

                rounded-full

                bg-black
              "
            />


            {/* =================================================
                SEARCH BAR
            ================================================== */}

            <div
              className="
                absolute

                left-6
                right-6
                top-[85px]

                z-30

                flex
                h-[58px]
                items-center
                gap-3

                rounded-2xl

                border
                border-violet-400/20

                bg-[#111a35]/90

                px-4

                shadow-[0_10px_35px_rgba(0,0,0,0.3)]
              "
            >

              {/* Search icon */}

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="shrink-0 text-white"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />

                <path
                  d="m20 20-3.5-3.5"
                />
              </svg>


              <span
                className="
                  whitespace-nowrap
                  text-sm
                  italic
                  text-white/70
                "
              >
                Search for tools & materials...
              </span>


              <div className="ml-auto shrink-0 text-white/50">
                ☷
              </div>

            </div>


            {/* =================================================
                PHONE NOTIFICATIONS

                BOTH NOTIFICATIONS STAY INSIDE PHONE
            ================================================== */}

            <div
              className="
                absolute

                left-5
                right-5
                top-[155px]

                z-40

                space-y-2
              "
            >

              {/* =================================================
                  NOTIFICATION 1
                  NEARBY STORES
              ================================================== */}

              <div
                className="
                  flex
                  items-center
                  gap-3

                  rounded-2xl

                  border
                  border-violet-400/30

                  bg-[#11152f]/95

                  px-3
                  py-2.5

                  shadow-[0_8px_30px_rgba(124,58,237,0.35)]

                  backdrop-blur-md
                "
              >

                {/* Store icon */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0

                    items-center
                    justify-center

                    rounded-xl

                    bg-gradient-to-br
                    from-violet-500
                    to-fuchsia-500

                    text-lg

                    shadow-[0_0_18px_rgba(168,85,247,0.5)]
                  "
                >
                  🏪
                </div>


                {/* Notification text */}

                <div className="min-w-0 flex-1">

                  <div className="flex items-center justify-between">

                    <h4
                      className="
                        truncate
                        text-[12px]
                        font-bold
                        text-white
                      "
                    >
                      Nearby Stores
                    </h4>

                    <span
                      className="
                        ml-2
                        shrink-0
                        text-[8px]
                        text-violet-300
                      "
                    >
                      now
                    </span>

                  </div>


                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      text-white/65
                    "
                  >
                    12+ stores found near you
                  </p>


                  <p
                    className="
                      mt-0.5
                      text-[8px]
                      text-violet-300
                    "
                  >
                    View tools & materials →
                  </p>

                </div>

              </div>


              {/* =================================================
                  NOTIFICATION 2
                  ARDUINO UNO R3
              ================================================== */}

              <div
                className="
                  flex
                  items-center
                  gap-3

                  rounded-2xl

                  border
                  border-violet-400/30

                  bg-[#11152f]/95

                  px-3
                  py-2.5

                  shadow-[0_8px_30px_rgba(124,58,237,0.35)]

                  backdrop-blur-md
                "
              >

                {/* Arduino icon */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0

                    items-center
                    justify-center

                    rounded-xl

                    bg-gradient-to-br
                    from-violet-500
                    to-purple-700

                    text-lg

                    shadow-[0_0_18px_rgba(168,85,247,0.5)]
                  "
                >
                  🔧
                </div>


                {/* Notification text */}

                <div className="min-w-0 flex-1">

                  <div className="flex items-center justify-between">

                    <h4
                      className="
                        truncate
                        text-[12px]
                        font-bold
                        text-white
                      "
                    >
                      Arduino UNO R3
                    </h4>

                    <span
                      className="
                        ml-2
                        shrink-0
                        text-[8px]
                        text-violet-300
                      "
                    >
                      now
                    </span>

                  </div>


                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      text-white/60
                    "
                  >
                    TechPoint Electronics
                  </p>


                  <div
                    className="
                      mt-1
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <span
                      className="
                        text-[9px]
                        text-pink-300
                      "
                    >
                      📍 1.2 km
                    </span>


                    <span
                      className="
                        rounded-full

                        bg-emerald-500/15

                        px-2
                        py-0.5

                        text-[8px]
                        font-semibold

                        text-emerald-300

                        ring-1
                        ring-emerald-400/20
                      "
                    >
                      In Stock
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                MAP CONNECTION LINES
            ================================================== */}

            <div
              className="
                absolute

                left-[15%]
                top-[32%]

                h-[1px]
                w-[70%]

                rotate-[25deg]

                bg-violet-400/30
              "
            />


            <div
              className="
                absolute

                left-[18%]
                top-[60%]

                h-[1px]
                w-[65%]

                rotate-[-20deg]

                bg-violet-400/30
              "
            />


            <div
              className="
                absolute

                left-[35%]
                top-[38%]

                h-[1px]
                w-[45%]

                rotate-[60deg]

                bg-violet-400/20
              "
            />


            {/* =================================================
                SMALL MAP POINTS
            ================================================== */}

            <MapPin
              top="35%"
              left="27%"
              small
            />

            <MapPin
              top="38%"
              left="70%"
              small
            />

            <MapPin
              top="62%"
              left="30%"
              small
            />

            <MapPin
              top="65%"
              left="68%"
              small
            />


            {/* =================================================
                MAIN LOCATION PIN

                IMPORTANT:
                Moved below the notifications.

                This keeps the location pin and its waves
                clearly visible instead of being hidden behind
                the Arduino notification.
            ================================================== */}

            <div
              className="
                absolute

                left-[50%]
                top-[62%]

                -translate-x-1/2
                -translate-y-1/2

                relative

                h-[150px]
                w-[150px]

                flex
                items-center
                justify-center

                z-30
              "
            >

              {/* RADAR WAVE 1 */}

              <div
                className="
                  location-ring
                  ring-one
                "
              />


              {/* RADAR WAVE 2 */}

              <div
                className="
                  location-ring
                  ring-two
                "
              />


              {/* RADAR WAVE 3 */}

              <div
                className="
                  location-ring
                  ring-three
                "
              />


              {/* PURPLE GLOW */}

              <div className="location-glow" />


              {/* MAIN LOCATION CIRCLE */}

              <div
                className="
                  relative
                  z-30

                  flex
                  h-20
                  w-20

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-violet-400/50

                  bg-violet-500/10

                  shadow-[0_0_45px_rgba(139,92,246,0.55)]
                "
              >

                {/* Inner circle */}

                <div
                  className="
                    flex
                    h-12
                    w-12

                    items-center
                    justify-center

                    rounded-full

                    bg-violet-500/20

                    shadow-[0_0_35px_rgba(139,92,246,0.9)]
                  "
                >

                  {/* Location icon */}

                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  >

                    <path
                      d="
                        M20 10
                        c0 5-8 12-8 12
                        S4 15 4 10
                        a8 8 0 1 1 16 0Z
                      "
                    />

                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                    />

                  </svg>

                </div>

              </div>

            </div>


            {/* =================================================
                LOWER RESOURCE PANEL
            ================================================== */}

            <div
              className="
                absolute

                bottom-6
                left-6
                right-6

                rounded-2xl

                border
                border-violet-400/20

                bg-[#11162e]/90

                p-4

                backdrop-blur-xl
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-xl

                    bg-violet-500/20

                    text-xl
                  "
                >
                  🔧
                </div>


                <div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Prototype Resources
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-white/40
                    "
                  >
                    Tools & materials near you
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   MAP PIN
========================================================= */

function MapPin({ top, left, small = false }) {
  return (
    <div
      className="
        absolute

        -translate-x-1/2
        -translate-y-1/2

        z-20

        rounded-full

        bg-violet-400

        shadow-[0_0_20px_rgba(167,139,250,0.9)]

        animate-pulse
      "
      style={{
        top,
        left,
        width: small ? "10px" : "16px",
        height: small ? "10px" : "16px",
      }}
    />
  );
}


export default PhoneVisual;