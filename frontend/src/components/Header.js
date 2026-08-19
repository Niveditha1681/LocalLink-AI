import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  return (
    <header className="absolute left-0 right-0 top-0 z-50">

      <div
        className="
          mx-auto
          flex
          h-[100px]
          max-w-[1450px]
          items-center
          justify-between
          border-b
          border-white/[0.06]
          px-8
          lg:px-10
        "
      >

        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="relative">

            {/* Logo glow */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-violet-500/30
                blur-xl
              "
            />

            {/* Location logo */}

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
                d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
              />

              <circle
                cx="12"
                cy="10"
                r="2.5"
              />
            </svg>

          </div>


          {/* Logo text */}

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

        </Link>


        {/* =================================================
            NAVIGATION
        ================================================== */}

        <nav
          className="
            hidden
            items-center
            gap-12
            md:flex
          "
        >

          {/* =================================================
              HOME
          ================================================== */}

          <Link
            to="/"
            className={`
              relative
              text-[16px]
              font-semibold
              transition-colors
              duration-300
              ${
                isHome
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }
            `}
          >
            Home

            {/* Active underline */}

            {isHome && (
              <span
                className="
                  absolute
                  -bottom-9
                  left-0
                  h-[2px]
                  w-full
                  bg-violet-500
                  shadow-[0_0_12px_rgba(139,92,246,0.8)]
                "
              />
            )}

          </Link>


          {/* =================================================
              ABOUT
          ================================================== */}

          <Link
            to="/about"
            className={`
              relative
              text-[16px]
              font-semibold
              transition-colors
              duration-300
              ${
                isAbout
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }
            `}
          >
            About

            {/* Active underline */}

            {isAbout && (
              <span
                className="
                  absolute
                  -bottom-9
                  left-0
                  h-[2px]
                  w-full
                  bg-violet-500
                  shadow-[0_0_12px_rgba(139,92,246,0.8)]
                "
              />
            )}

          </Link>

        </nav>


        {/* =================================================
            LOGIN BUTTON
        ================================================== */}

        <button
          className="
            flex
            items-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-purple-500
            px-8
            py-3.5
            text-[16px]
            font-semibold
            text-white
            shadow-[0_12px_30px_rgba(109,40,217,0.3)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_18px_40px_rgba(139,92,246,0.4)]
          "
        >

          {/* User icon */}

          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle
              cx="12"
              cy="8"
              r="4"
            />

            <path
              d="M5 21c0-3.5 3-6 7-6s7 2.5 7 6"
            />
          </svg>

          Login

        </button>

      </div>

    </header>
  );
}

export default Header;