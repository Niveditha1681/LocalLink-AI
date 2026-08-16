function FeatureCard({ icon, title, description }) {
  return (
    <div
      className="
        group
        relative
        min-h-[145px]
        overflow-hidden
        rounded-2xl
        border
        border-violet-400/[0.14]
        bg-[#100c25]/80
        p-5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-violet-400/35
        hover:bg-[#15102f]
      "
    >

      {/* Glow */}

      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-600/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />


      <div className="relative">

        {/* Icon */}

        <div
          className="
            mb-4
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-violet-500/10
            text-violet-300
            transition-all
            duration-500
            group-hover:bg-violet-500/20
          "
        >
          {icon}
        </div>


        {/* Title */}

        <h3 className="text-[16px] font-semibold text-white">
          {title}
        </h3>


        {/* Description */}

        <p className="mt-2 text-[13px] leading-5 text-white/45">
          {description}
        </p>

      </div>

    </div>
  );
}

export default FeatureCard;