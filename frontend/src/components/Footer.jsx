function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#05050c] text-white">

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-[10%]
            top-[20%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-violet-600/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[10%]
            top-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-fuchsia-600/10
            blur-[140px]
          "
        />

      </div>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
          px-8
          py-16
          lg:px-10
        "
      >

        <div
          className="
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]
          "
        >

          {/* =================================================
              BRAND
          ================================================== */}

          <div className="max-w-[330px]">

            {/* LOGO */}

            <div className="flex items-center gap-3">

              <div className="relative">

                {/* Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-violet-500/30
                    blur-xl
                  "
                />

                {/* Location Icon */}

                <svg
                  className="
                    relative
                    h-10
                    w-10
                    text-violet-500
                  "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    d="
                      M20 10
                      c0 5-8 11-8 11
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


              {/* Logo Text */}

              <span
                className="
                  text-[24px]
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                LocalLink{" "}
                <span className="text-violet-500">
                  AI
                </span>
              </span>

            </div>


            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                text-[15px]
                leading-7
                text-white/50
              "
            >
              LocalLink AI connects students and prototype builders
              with nearby tools, materials, and components, making it
              easier to find the right resources when you need them.
            </p>


            {/* SOCIAL ICONS */}

            <div className="mt-7 flex items-center gap-3">

              <SocialButton>
                <GithubIcon />
              </SocialButton>

              <SocialButton>
                <LinkedInIcon />
              </SocialButton>

              <SocialButton>
                <InstagramIcon />
              </SocialButton>

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>

            <h3
              className="
                text-[16px]
                font-bold
                text-white
              "
            >
              Quick Links
            </h3>


            <div className="mt-6 space-y-4">

              <FooterLink href="/">
                Home
              </FooterLink>

              <FooterLink href="/about">
                About
              </FooterLink>

              <FooterLink href="/search">
                Search Resources
              </FooterLink>

              <FooterLink href="/dashboard">
                Dashboard
              </FooterLink>

            </div>

          </div>


          {/* =================================================
              EXPLORE
          ================================================== */}

          <div>

            <h3
              className="
                text-[16px]
                font-bold
                text-white
              "
            >
              Explore
            </h3>


            <div className="mt-6 space-y-4">

              <FooterLink href="/search">
                Nearby Resources
              </FooterLink>

              <FooterLink href="/search">
                Tools & Materials
              </FooterLink>

              <FooterLink href="/search">
                Prototype Components
              </FooterLink>

              <FooterLink href="/about#contact">
                Contact Us
              </FooterLink>

            </div>

          </div>


          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <h3
              className="
                text-[16px]
                font-bold
                text-white
              "
            >
              Contact Us
            </h3>


            {/* LOCATION */}

            <div
              className="
                mt-6
                flex
                items-start
                gap-4
              "
            >

              <div className="mt-1 text-violet-400">
                <LocationIcon />
              </div>

              <p
                className="
                  text-[15px]
                  leading-6
                  text-white/55
                "
              >
                Innovation Hub,
                <br />
                Coimbatore, Tamil Nadu
                <br />
                India
              </p>

            </div>


            {/* PHONE */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-4
              "
            >

              <div className="text-violet-400">
                <PhoneIcon />
              </div>

              <p className="text-[15px] text-white/55">
                +91 98765 43210
              </p>

            </div>


            {/* EMAIL */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-4
              "
            >

              <div className="text-violet-400">
                <EmailIcon />
              </div>

              <p className="text-[15px] text-white/55">
                hello@locallinkai.com
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div
          className="
            mt-14
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-violet-500/20
            to-transparent
          "
        />


        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            pt-7
            text-sm
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* COPYRIGHT */}

          <p className="text-white/40">
            © 2026 LocalLink AI. All rights reserved.
          </p>


          {/* POLICIES */}

          <div className="flex items-center gap-7">

            <a
              href="#"
              className="
                text-white/40
                transition
                hover:text-violet-400
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                text-white/40
                transition
                hover:text-violet-400
              "
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="
        block
        text-[15px]
        text-white/50
        transition-all
        duration-200
        hover:translate-x-1
        hover:text-violet-400
      "
    >
      {children}
    </a>
  );
}


/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({ children }) {
  return (
    <a
      href="#"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-violet-500/20
        bg-violet-500/5
        text-white/50
        transition-all
        duration-300
        hover:border-violet-500/50
        hover:bg-violet-500/15
        hover:text-violet-400
        hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
      "
    >
      {children}
    </a>
  );
}


/* =========================================================
   LOCATION ICON
========================================================= */

function LocationIcon() {
  return (
    <svg
      className="h-5 w-5"
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
   PHONE ICON
========================================================= */

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5"
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
   EMAIL ICON
========================================================= */

function EmailIcon() {
  return (
    <svg
      className="h-5 w-5"
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
   GITHUB ICON
========================================================= */

function GithubIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="
          M12 .5
          C5.65 .5.5 5.65.5 12
          c0 5.08 3.29 9.39 7.86 10.91
          .57.1.78-.25.78-.55
          0-.27-.01-1-.02-1.96
          -3.2.7-3.88-1.54-3.88-1.54
          -.52-1.33-1.28-1.69-1.28-1.69
          -1.04-.71.08-.7.08-.7
          1.15.08 1.76 1.18 1.76 1.18
          1.02 1.75 2.68 1.25 3.33.96
          .1-.74.4-1.25.73-1.54
          -2.55-.29-5.23-1.28-5.23-5.69
          0-1.26.45-2.29 1.18-3.1
          -.12-.29-.51-1.47.11-3.06
          0 0 .96-.31 3.15 1.18
          a10.94 10.94 0 0 1 5.74 0
          c2.19-1.49 3.15-1.18 3.15-1.18
          .62 1.59.23 2.77.11 3.06
          .73.81 1.18 1.84 1.18 3.1
          0 4.42-2.69 5.39-5.25 5.68
          .41.36.78 1.08.78 2.18
          0 1.57-.01 2.84-.01 3.23
          0 .3.21.66.79.55
          A11.51 11.51 0 0 0 23.5 12
          C23.5 5.65 18.35.5 12 .5Z
        "
      />
    </svg>
  );
}


/* =========================================================
   LINKEDIN ICON
========================================================= */

function LinkedInIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="
          M4.98 3.5
          A2.48 2.48 0 1 1 0 3.5
          a2.48 2.48 0 0 1 4.98 0ZM.5 8.5h4.9V23H.5V8.5ZM8.5 8.5h4.7v1.98h.07
          c.65-1.23 2.25-2.52 4.63-2.52
          4.95 0 5.86 3.26 5.86 7.5V23h-4.9v-6.69
          c0-1.6-.03-3.66-2.23-3.66
          -2.23 0-2.57 1.74-2.57 3.54V23H8.5V8.5Z
        "
      />
    </svg>
  );
}


/* =========================================================
   INSTAGRAM ICON
========================================================= */

function InstagramIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}


export default Footer;