function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05050c] text-white">

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        {/* Left glow */}
        <div
          className="
            absolute
            left-[-120px]
            top-[18%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-600/10
            blur-[140px]
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            right-[-120px]
            top-[28%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-fuchsia-600/10
            blur-[160px]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-180px]
            left-1/2
            h-[450px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/10
            blur-[160px]
          "
        />

      </div>


      {/* =====================================================
          ABOUT INTRODUCTION
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
          px-8
          pb-10
          pt-[150px]
          lg:px-10
        "
      >

        <div className="max-w-[900px]">

          {/* ABOUT LABEL */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-violet-500/30
              bg-violet-950/20
              px-5
              py-2.5
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
                rounded-full
                bg-violet-400
                shadow-[0_0_14px_rgba(167,139,250,0.9)]
              "
            />

            ABOUT LOCALLINK AI

          </div>


          {/* MAIN HEADING */}

          <h1
            className="
              mt-7
              text-[52px]
              font-extrabold
              leading-[1]
              tracking-[-2px]
              text-white
              sm:text-[64px]
            "
          >

            Connecting You

            <span
              className="
                block
                bg-gradient-to-r
                from-violet-400
                via-purple-400
                to-fuchsia-400
                bg-clip-text
                text-transparent
              "
            >
              With Local Resources.
            </span>

          </h1>


          {/* UNDERLINE */}

          <div
            className="
              mt-7
              h-[3px]
              w-14
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-fuchsia-500
              shadow-[0_0_15px_rgba(139,92,246,0.8)]
            "
          />


          {/* PROJECT DESCRIPTION */}

          <p
            className="
              mt-7
              max-w-[720px]
              text-lg
              leading-8
              text-white/55
              sm:text-xl
            "
          >
            LocalLink AI connects students and prototype builders
            with nearby tools, materials, and components, making it
            easier to find the right resources when you need them.
          </p>

        </div>

      </div>


      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <div
        id="contact"
        className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
          px-8
          pb-24
          pt-[70px]
          lg:px-10
        "
      >

        {/* =================================================
            CONTACT HEADER
        ================================================== */}

        <div className="mb-16 max-w-[700px]">

          <h2
            className="
              text-[52px]
              font-extrabold
              leading-[1]
              tracking-[-2px]
              text-white
              sm:text-[64px]
            "
          >

            Get in{" "}

            <span
              className="
                bg-gradient-to-r
                from-violet-400
                via-purple-400
                to-fuchsia-400
                bg-clip-text
                text-transparent
              "
            >
              touch
            </span>

          </h2>


          {/* PURPLE UNDERLINE */}

          <div
            className="
              mt-7
              h-[3px]
              w-14
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-fuchsia-500
              shadow-[0_0_15px_rgba(139,92,246,0.8)]
            "
          />


          {/* CONTACT DESCRIPTION */}

          <p
            className="
              mt-8
              max-w-[700px]
              text-lg
              leading-8
              text-white/55
            "
          >
            Ready to connect with LocalLink AI? Have a question,
            suggestion, or want to know more about our platform?
            Reach out to us.
          </p>

        </div>


        {/* =================================================
            CONTACT CONTENT
            z-20 keeps this ABOVE the city background
        ================================================== */}

        <div
          className="
            relative
            z-20
            grid
            gap-12
            lg:grid-cols-[0.75fr_1.25fr]
            lg:items-start
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div className="relative z-20 space-y-10">

            {/* EMAIL */}

            <ContactInfo
              type="email"
              title="Email us"
              value="hello@locallinkai.com"
            />


            {/* PHONE */}

            <ContactInfo
              type="phone"
              title="Call us"
              value="+91 98765 43210"
            />


            {/* LOCATION */}

            <ContactInfo
              type="location"
              title="Visit us"
              value={
                <>
                  Innovation Hub,
                  <br />
                  Coimbatore, Tamil Nadu
                  <br />
                  India
                </>
              }
            />

          </div>


          {/* =================================================
              RIGHT SIDE — CONTACT FORM
          ================================================== */}

          <div
            className="
              relative
              z-20
              rounded-[28px]
              border
              border-violet-500/40
              bg-[#080719]
              p-7
              shadow-[0_0_70px_rgba(124,58,237,0.14)]
              backdrop-blur-xl
              sm:p-10
            "
          >

            <form>

              {/* NAME + COLLEGE */}

              <div
                className="
                  grid
                  gap-6
                  md:grid-cols-2
                "
              >

                <InputField
                  label="Your Name"
                  placeholder="Enter your name"
                  type="text"
                />

                <InputField
                  label="College / Organization"
                  placeholder="Enter your college"
                  type="text"
                />

              </div>


              {/* EMAIL */}

              <div className="mt-7">

                <InputField
                  label="Email Address"
                  placeholder="your@email.com"
                  type="email"
                />

              </div>


              {/* MESSAGE */}

              <div className="mt-7">

                <label
                  className="
                    mb-3
                    block
                    text-[16px]
                    font-semibold
                    text-white
                  "
                >
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell us how we can help..."
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-violet-500/40
                    bg-[#09091b]
                    px-5
                    py-4
                    text-white
                    outline-none
                    placeholder:text-white/30
                    transition
                    duration-300
                    focus:border-violet-400
                    focus:shadow-[0_0_25px_rgba(139,92,246,0.15)]
                  "
                />

              </div>


              {/* =================================================
                  SEND MESSAGE BUTTON
              ================================================== */}

              <button
                type="submit"
                className="send-message-button"
              >

                <SendIcon />

                <span>
                  Send Message
                </span>

              </button>

            </form>

          </div>

        </div>


        {/* =================================================
            BOTTOM CITY / BUILDING EFFECT

            IMPORTANT:
            z-0 keeps buildings BEHIND the contact content.
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            z-0
            h-[240px]
            overflow-hidden
            opacity-30
          "
        >

          {/* Building 1 */}

          <div
            className="
              absolute
              bottom-0
              left-[5%]
              h-[150px]
              w-[70px]
              bg-[#0d0920]
            "
          />

          {/* Building 2 */}

          <div
            className="
              absolute
              bottom-0
              left-[14%]
              h-[210px]
              w-[90px]
              bg-[#100b25]
            "
          />

          {/* Building 3 */}

          <div
            className="
              absolute
              bottom-0
              left-[25%]
              h-[130px]
              w-[65px]
              bg-[#0d0920]
            "
          />

          {/* Building 4 */}

          <div
            className="
              absolute
              bottom-0
              right-[20%]
              h-[190px]
              w-[80px]
              bg-[#100b25]
            "
          />

          {/* Building 5 */}

          <div
            className="
              absolute
              bottom-0
              right-[9%]
              h-[220px]
              w-[90px]
              bg-[#0d0920]
            "
          />

          {/* Building 6 */}

          <div
            className="
              absolute
              bottom-0
              right-[2%]
              h-[150px]
              w-[70px]
              bg-[#100b25]
            "
          />


          {/* Horizon */}

          <div
            className="
              absolute
              bottom-[45px]
              left-0
              right-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-violet-500/60
              to-transparent
              shadow-[0_0_15px_rgba(139,92,246,0.7)]
            "
          />

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   CONTACT INFO
========================================================= */

function ContactInfo({
  type,
  title,
  value,
}) {
  return (
    <div className="relative z-20 flex items-start gap-6">

      {/* ICON */}

      <div
        className="
          flex
          h-[72px]
          w-[72px]
          shrink-0
          items-center
          justify-center
          rounded-2xl
          border
          border-violet-500/50
          bg-[#09091b]
          text-violet-400
          shadow-[0_0_30px_rgba(124,58,237,0.12)]
        "
      >

        {type === "email" && <EmailIcon />}

        {type === "phone" && <PhoneIcon />}

        {type === "location" && <LocationIcon />}

      </div>


      {/* TEXT */}

      <div>

        <h3
          className="
            text-lg
            font-bold
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-base
            leading-7
            text-white/50
          "
        >
          {value}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   INPUT FIELD
========================================================= */

function InputField({
  label,
  placeholder,
  type,
}) {
  return (
    <div>

      <label
        className="
          mb-3
          block
          text-[16px]
          font-semibold
          text-white
        "
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          h-[62px]
          w-full
          rounded-xl
          border
          border-violet-500/40
          bg-[#09091b]
          px-5
          text-white
          outline-none
          placeholder:text-white/30
          transition
          duration-300
          focus:border-violet-400
          focus:shadow-[0_0_25px_rgba(139,92,246,0.15)]
        "
      />

    </div>
  );
}


/* =========================================================
   LOCATION ICON
========================================================= */

function LocationIcon() {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />

      <circle
        cx="12"
        cy="10"
        r="2.5"
      />
    </svg>
  );
}


/* =========================================================
   EMAIL ICON
========================================================= */

function EmailIcon() {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />

      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}


/* =========================================================
   PHONE ICON
========================================================= */

function PhoneIcon() {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="
          M22 16.92v3a2 2 0 0 1-2.18 2
          A19.8 19.8 0 0 1 3.08 5.18
          A2 2 0 0 1 5.06 3h3
          a2 2 0 0 1 2 1.72
          c.12.9.33 1.78.62 2.63
          a2 2 0 0 1-.45 2.11L9 10.73
          a16 16 0 0 0 4.27 4.27l1.27-1.23
          a2 2 0 0 1 2.11-.45
          c.85.29 1.73.5 2.63.62
          A2 2 0 0 1 22 16.92Z
        "
      />
    </svg>
  );
}


/* =========================================================
   SEND ICON
========================================================= */

function SendIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}


export default About;