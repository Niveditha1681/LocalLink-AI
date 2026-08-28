import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* =========================================================
   SIGN UP PAGE
========================================================= */

function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Signup data:", formData);

    alert("Account created successfully!");

    navigate("/");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05050c] text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.10]
            [background-image:linear-gradient(rgba(139,92,246,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.16)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* Left glow */}

        <div
          className="
            absolute
            left-[-220px]
            top-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-700/10
            blur-[140px]
          "
        />

        {/* Center glow */}

        <div
          className="
            absolute
            left-[38%]
            top-[30%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-purple-700/10
            blur-[150px]
          "
        />

        {/* Right glow */}

        <div
          className="
            absolute
            right-[-220px]
            top-[15%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-fuchsia-600/10
            blur-[160px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            absolute
            bottom-[-250px]
            left-1/2
            h-[450px]
            w-[850px]
            -translate-x-1/2
            rounded-full
            bg-violet-700/10
            blur-[150px]
          "
        />

      </div>


      {/* =====================================================
          CITY BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px]">

        <div
          className="
            absolute
            bottom-0
            left-[2%]
            h-[140px]
            w-[65px]
            bg-[#0b0820]
            opacity-70
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-[10%]
            h-[190px]
            w-[80px]
            bg-[#0d0925]
            opacity-70
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-[19%]
            h-[120px]
            w-[55px]
            bg-[#0b0820]
            opacity-60
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-[29%]
            h-[160px]
            w-[70px]
            bg-[#0d0925]
            opacity-60
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-[22%]
            h-[180px]
            w-[75px]
            bg-[#0d0925]
            opacity-70
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-[11%]
            h-[220px]
            w-[85px]
            bg-[#0b0820]
            opacity-70
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-[3%]
            h-[145px]
            w-[65px]
            bg-[#0d0925]
            opacity-60
          "
        />

        <div
          className="
            absolute
            bottom-[28px]
            left-0
            right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-violet-500/40
            to-transparent
          "
        />

      </div>


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1350px]
          items-center
          px-5
          py-5
          lg:px-8
          xl:px-10
        "
      >

        <div
          className="
            grid
            w-full
            items-center
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
            xl:gap-10
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <section
            className="
              relative
              hidden
              min-h-[600px]
              lg:flex
              lg:flex-col
              lg:justify-center
            "
          >

            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              to="/"
              className="
                absolute
                left-0
                top-2
                z-50
                flex
                items-center
                gap-3
              "
            >

              <LocationLogo />

              <span className="text-[23px] font-extrabold tracking-tight">
                LocalLink{" "}

                <span
                  className="
                    bg-gradient-to-r
                    from-violet-400
                    to-fuchsia-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  AI
                </span>
              </span>

            </Link>


            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-30
                mt-8
                max-w-[320px]
              "
            >

              <h1
                className="
                  text-[36px]
                  font-extrabold
                  leading-[1.04]
                  tracking-[-1.5px]
                  xl:text-[42px]
                "
              >

                Find what you need.

                <br />

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
                  Right around you.
                </span>

              </h1>


              {/* Underline */}

              <div
                className="
                  mt-5
                  h-[3px]
                  w-16
                  rounded-full
                  bg-gradient-to-r
                  from-violet-500
                  to-fuchsia-500
                  shadow-[0_0_18px_rgba(168,85,247,0.8)]
                "
              />


              {/* Description */}

              <p
                className="
                  mt-5
                  max-w-[310px]
                  text-[14px]
                  leading-7
                  text-white/50
                "
              >
                Create your LocalLink AI account and discover tools,
                materials, and prototype components available near you.
              </p>


              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="mt-7 space-y-4">

                <FeatureItem
                  icon={<RobotIcon />}
                  title="AI Powered"
                  description="Smart resource recommendations"
                />

                <FeatureItem
                  icon={<LightningIcon />}
                  title="Real-time"
                  description="Live stock and availability"
                />

                <FeatureItem
                  icon={<LocationIcon />}
                  title="Nearby"
                  description="Find resources around you"
                />

              </div>

            </div>


            {/* =================================================
                BOY
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-[150px]
                z-20
                h-[520px]
                w-[225px]
                origin-top-right
                scale-[0.82]
                xl:right-[-2px]
                xl:top-[145px]
                xl:scale-[0.86]
              "
            >
              <BoyIllustration />
            </div>

          </section>


          {/* =================================================
              RIGHT SIDE — SIGNUP CARD
          ================================================== */}

          <section
            className="
              relative
              w-full
              rounded-[24px]
              border
              border-violet-500/50
              bg-[#080719]/95
              p-6
              shadow-[0_0_70px_rgba(124,58,237,0.18)]
              backdrop-blur-xl
              sm:p-7
              lg:p-8
              xl:p-8
            "
          >

            {/* Card glow */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[24px]
                bg-gradient-to-b
                from-violet-500/[0.05]
                to-transparent
              "
            />


            <div className="relative z-10">

              {/* =================================================
                  LOCATION ICON
              ================================================== */}

              <div className="flex justify-center">

                <div
                  className="
                    text-violet-400
                    drop-shadow-[0_0_14px_rgba(139,92,246,0.8)]
                  "
                >
                  <LargeLocationIcon />
                </div>

              </div>


              {/* =================================================
                  TITLE
              ================================================== */}

              <div className="mt-3 text-center">

                <h2
                  className="
                    text-[24px]
                    font-extrabold
                    leading-tight
                    tracking-[-0.8px]
                    sm:text-[29px]
                  "
                >

                  Create Your{" "}

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
                    LocalLink AI
                  </span>{" "}

                  Account

                </h2>


                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-[650px]
                    text-[13px]
                    leading-5
                    text-white/50
                  "
                >
                  Join our community and get instant access to nearby
                  tools, materials and prototype components.
                </p>

              </div>


              {/* =================================================
                  FORM
              ================================================== */}

              <form
                onSubmit={handleSubmit}
                className="mt-5"
              >

                {/* FULL NAME */}

                <FormField
                  label="Full Name"
                  icon={<UserIcon />}
                  required
                >

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className={inputClass}
                  />

                </FormField>


                {/* EMAIL */}

                <FormField
                  label="Email Address"
                  icon={<EmailIcon />}
                  required
                  className="mt-4"
                >

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    className={inputClass}
                  />

                </FormField>


                {/* PASSWORD */}

                <FormField
                  label="Create Password"
                  icon={<LockIcon />}
                  required
                  className="mt-4"
                >

                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter a strong password"
                      autoComplete="new-password"
                      className={`${inputClass} pr-12`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((previous) => !previous)
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-white/40
                        transition
                        hover:text-violet-400
                      "
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      <EyeIcon />
                    </button>

                  </div>

                </FormField>


                {/* CONFIRM PASSWORD */}

                <FormField
                  label="Confirm Password"
                  icon={<LockIcon />}
                  required
                  className="mt-4"
                >

                  <div className="relative">

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      autoComplete="new-password"
                      className={`${inputClass} pr-12`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          (previous) => !previous
                        )
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-white/40
                        transition
                        hover:text-violet-400
                      "
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      <EyeIcon />
                    </button>

                  </div>

                </FormField>


                {/* =================================================
                    FEATURES STRIP
                ================================================== */}

                <div
                  className="
                    mt-4
                    grid
                    overflow-hidden
                    rounded-xl
                    border
                    border-violet-500/20
                    bg-[#09091b]
                    md:grid-cols-3
                  "
                >

                  <MiniFeature
                    icon={<RobotIcon />}
                    title="AI Powered"
                    description="Smart suggestions"
                  />

                  <MiniFeature
                    icon={<LightningIcon />}
                    title="Real-time"
                    description="Live availability"
                    border
                  />

                  <MiniFeature
                    icon={<LocationIcon />}
                    title="Nearby"
                    description="Find local resources"
                  />

                </div>


                {/* =================================================
                    CREATE ACCOUNT
                ================================================== */}

                <button
                  type="submit"
                  className="
                    mt-4
                    flex
                    h-[50px]
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-600
                    via-purple-500
                    to-fuchsia-500
                    text-[15px]
                    font-bold
                    text-white
                    shadow-[0_12px_35px_rgba(124,58,237,0.35)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_18px_50px_rgba(168,85,247,0.45)]
                    active:translate-y-0
                  "
                >
                  Create Account
                </button>


                {/* =================================================
                    BOTTOM
                ================================================== */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    justify-between
                    text-[12px]
                    text-white/40
                  "
                >

                  <span>

                    Already have an account?{" "}

                    <button
                      type="button"
                      onClick={() => navigate("/login")}
                      className="
                        font-semibold
                        text-fuchsia-400
                        transition
                        hover:text-fuchsia-300
                      "
                    >
                      Login
                    </button>

                  </span>

                  <span>
                    Step 1 of 1
                  </span>

                </div>

              </form>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}


/* =========================================================
   INPUT CLASS
========================================================= */

const inputClass = `
  h-[48px]
  w-full
  rounded-xl
  border
  border-violet-500/30
  bg-[#060611]
  px-4
  text-[14px]
  text-white
  outline-none
  placeholder:text-white/30
  transition-all
  duration-200
  focus:border-violet-400
  focus:bg-[#080817]
  focus:shadow-[0_0_25px_rgba(139,92,246,0.12)]
`;


/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  label,
  icon,
  required,
  children,
  className = "",
}) {
  return (
    <div className={className}>

      <label
        className="
          mb-2
          flex
          items-center
          gap-2
          text-[13px]
          font-semibold
          text-white
        "
      >

        <span className="text-violet-400">
          {icon}
        </span>

        <span>
          {label}
        </span>

        {required && (
          <span className="text-fuchsia-400">
            *
          </span>
        )}

      </label>

      {children}

    </div>
  );
}


/* =========================================================
   LEFT FEATURE
========================================================= */

function FeatureItem({
  icon,
  title,
  description,
}) {
  return (
    <div className="flex items-center gap-3">

      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-violet-500/30
          bg-[#0c0820]
          text-violet-400
        "
      >
        {icon}
      </div>

      <div>

        <h3 className="text-[13px] font-bold text-white">
          {title}
        </h3>

        <p className="mt-0.5 text-[11px] text-white/40">
          {description}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   MINI FEATURE
========================================================= */

function MiniFeature({
  icon,
  title,
  description,
  border = false,
}) {
  return (
    <div
      className={`
        flex
        min-h-[58px]
        items-center
        gap-2.5
        px-3
        py-2.5
        ${border
          ? "border-y border-violet-500/20 md:border-x md:border-y-0"
          : ""}
      `}
    >

      <div className="shrink-0 text-violet-400">
        {icon}
      </div>

      <div>

        <h3 className="text-[11px] font-bold text-white">
          {title}
        </h3>

        <p className="mt-0.5 text-[10px] text-white/40">
          {description}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   CODE-BASED BOY
========================================================= */

function BoyIllustration() {
  return (
    <div
      className="
        relative
        h-full
        w-full
        drop-shadow-[0_0_30px_rgba(139,92,246,0.35)]
      "
    >

      {/* Ground */}

      <div
        className="
          absolute
          bottom-1
          left-1/2
          h-7
          w-32
          -translate-x-1/2
          rounded-full
          bg-violet-600/30
          blur-xl
        "
      />


      {/* Backpack */}

      <div
        className="
          absolute
          right-[15px]
          top-[178px]
          h-[200px]
          w-[58px]
          rounded-r-[35px]
          border-[4px]
          border-violet-500
          bg-transparent
        "
      />


      {/* Hair */}

      <div
        className="
          absolute
          left-[64px]
          top-[30px]
          z-30
          h-[70px]
          w-[105px]
          rounded-t-[55px]
          rounded-br-[30px]
          bg-[#151520]
          shadow-[inset_13px_5px_0_rgba(60,60,75,0.5)]
        "
      />


      {/* Face */}

      <div
        className="
          absolute
          left-[59px]
          top-[58px]
          z-20
          h-[94px]
          w-[111px]
          rounded-[45%]
          bg-[#f2b58f]
        "
      />


      {/* Left ear */}

      <div
        className="
          absolute
          left-[51px]
          top-[95px]
          z-10
          h-[33px]
          w-[22px]
          rounded-full
          bg-[#efad87]
        "
      />


      {/* Right ear */}

      <div
        className="
          absolute
          right-[46px]
          top-[95px]
          z-10
          h-[33px]
          w-[22px]
          rounded-full
          bg-[#efad87]
        "
      />


      {/* Glasses left */}

      <div
        className="
          absolute
          left-[58px]
          top-[89px]
          z-40
          h-[36px]
          w-[53px]
          rounded-[14px]
          border-[5px]
          border-[#16161f]
          bg-white/10
        "
      >

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[12px]
            w-[12px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#181820]
          "
        />

      </div>


      {/* Glasses right */}

      <div
        className="
          absolute
          left-[116px]
          top-[89px]
          z-40
          h-[36px]
          w-[53px]
          rounded-[14px]
          border-[5px]
          border-[#16161f]
          bg-white/10
        "
      >

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[12px]
            w-[12px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#181820]
          "
        />

      </div>


      {/* Glasses bridge */}

      <div
        className="
          absolute
          left-[108px]
          top-[102px]
          z-50
          h-[7px]
          w-[16px]
          rounded-full
          bg-[#16161f]
        "
      />


      {/* Smile */}

      <div
        className="
          absolute
          left-[97px]
          top-[132px]
          z-40
          h-[12px]
          w-[33px]
          rounded-b-full
          border-b-[3px]
          border-[#974f55]
        "
      />


      {/* Neck */}

      <div
        className="
          absolute
          left-[95px]
          top-[150px]
          z-10
          h-[34px]
          w-[36px]
          bg-[#efad87]
        "
      />


      {/* Hoodie */}

      <div
        className="
          absolute
          left-[39px]
          top-[170px]
          z-20
          h-[188px]
          w-[150px]
          rounded-[55px_55px_30px_30px]
          border-[4px]
          border-violet-500
          bg-gradient-to-b
          from-violet-600
          to-[#301078]
          shadow-[0_0_25px_rgba(124,58,237,0.3)]
        "
      />


      {/* Hoodie pocket */}

      <div
        className="
          absolute
          left-[66px]
          top-[290px]
          z-30
          h-[47px]
          w-[96px]
          rounded-b-[26px]
          bg-[#26105f]
        "
      />


      {/* Hoodie strings */}

      <div
        className="
          absolute
          left-[94px]
          top-[190px]
          z-40
          h-[62px]
          w-[3px]
          rotate-3
          rounded-full
          bg-violet-200/70
        "
      />

      <div
        className="
          absolute
          left-[118px]
          top-[190px]
          z-40
          h-[62px]
          w-[3px]
          -rotate-3
          rounded-full
          bg-violet-200/70
        "
      />


      {/* Left arm */}

      <div
        className="
          absolute
          left-[25px]
          top-[205px]
          z-10
          h-[128px]
          w-[47px]
          rotate-[15deg]
          rounded-[30px]
          border-[4px]
          border-violet-500
          bg-violet-700
        "
      />


      {/* Right arm */}

      <div
        className="
          absolute
          right-[29px]
          top-[205px]
          z-10
          h-[128px]
          w-[47px]
          -rotate-[15deg]
          rounded-[30px]
          border-[4px]
          border-violet-500
          bg-violet-700
        "
      />


      {/* Left hand */}

      <div
        className="
          absolute
          left-[21px]
          top-[310px]
          z-30
          h-[32px]
          w-[26px]
          rounded-full
          bg-[#f2b58f]
        "
      />


      {/* Right hand */}

      <div
        className="
          absolute
          right-[24px]
          top-[310px]
          z-30
          h-[32px]
          w-[26px]
          rounded-full
          bg-[#f2b58f]
        "
      />


      {/* Left leg */}

      <div
        className="
          absolute
          left-[64px]
          top-[338px]
          z-10
          h-[88px]
          w-[47px]
          rounded-b-[20px]
          bg-[#12121b]
        "
      />


      {/* Right leg */}

      <div
        className="
          absolute
          left-[117px]
          top-[338px]
          z-10
          h-[88px]
          w-[47px]
          rounded-b-[20px]
          bg-[#12121b]
        "
      />


      {/* Left shoe */}

      <div
        className="
          absolute
          bottom-0
          left-[39px]
          z-30
          h-[32px]
          w-[81px]
          rotate-[5deg]
          rounded-[22px_26px_12px_12px]
          border-[4px]
          border-violet-300
          bg-white
          shadow-[0_0_14px_rgba(139,92,246,0.5)]
        "
      />


      {/* Right shoe */}

      <div
        className="
          absolute
          bottom-0
          right-[21px]
          z-30
          h-[32px]
          w-[81px]
          -rotate-[5deg]
          rounded-[26px_22px_12px_12px]
          border-[4px]
          border-violet-300
          bg-white
          shadow-[0_0_14px_rgba(139,92,246,0.5)]
        "
      />

    </div>
  );
}


/* =========================================================
   LOCATION LOGO
========================================================= */

function LocationLogo() {
  return (
    <svg
      className="h-8 w-8 text-violet-400"
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
   LARGE LOCATION ICON
========================================================= */

function LargeLocationIcon() {
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
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
   USER ICON
========================================================= */

function UserIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >

      <circle
        cx="12"
        cy="7"
        r="4"
      />

      <path d="M5 21a7 7 0 0 1 14 0" />

    </svg>
  );
}


/* =========================================================
   EMAIL ICON
========================================================= */

function EmailIcon() {
  return (
    <svg
      className="h-4 w-4"
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
   LOCK ICON
========================================================= */

function LockIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >

      <rect
        x="5"
        y="10"
        width="14"
        height="11"
        rx="2"
      />

      <path d="M8 10V7a4 4 0 0 1 8 0v3" />

      <circle
        cx="12"
        cy="15"
        r="1"
      />

    </svg>
  );
}


/* =========================================================
   EYE ICON
========================================================= */

function EyeIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >

      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />

      <circle
        cx="12"
        cy="12"
        r="3"
      />

    </svg>
  );
}


/* =========================================================
   ROBOT ICON
========================================================= */

function RobotIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >

      <rect
        x="4"
        y="7"
        width="16"
        height="12"
        rx="3"
      />

      <path d="M12 3v4" />

      <circle
        cx="12"
        cy="2.5"
        r="1"
      />

      <circle
        cx="9"
        cy="13"
        r="1"
      />

      <circle
        cx="15"
        cy="13"
        r="1"
      />

      <path d="M8 16h8" />

    </svg>
  );
}


/* =========================================================
   LIGHTNING ICON
========================================================= */

function LightningIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >

      <path d="M13.2 2 5 13h6l-1.2 9L19 10h-6l.2-8Z" />

    </svg>
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


export default SignUp;