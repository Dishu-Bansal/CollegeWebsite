<div className="bg-white/70 h-screen backdrop-blur-md w-full max-w-4/5 rounded-xl px-4 sm:px-8 md:px-12 py-8 sm:py-10 md:py-14 border-2 border-green-300">
          <div className="text-center ">
            <h1
              className="font-bold text-[#1E3851] leading-relaxed
              text-[clamp(2rem,6vw,4rem)]"
            >
              Empowering{" "}
              <span className="relative inline-block">
                Educators.
                <span className="absolute left-0 lg:left-30 -bottom-2 w-full h-2 sm:h-3 bg-[url('/vector.svg')] bg-contain bg-no-repeat" />
              </span>
              <br />
              {/* SVG + Text responsive container */}
              <span className="flex flex-col lg:flex-row items-center justify-center mt-4 gap-2">
                {/* Responsive SVG visible only on large screens */}
                <span className="hidden lg:inline-block w-[clamp(90px,8vw,126px)] h-auto">
                  <Image
                    src="/sunshine.svg"
                    alt="Sunshine"
                    width={126}
                    height={63}
                    className="w-full h-auto"
                  />
                </span>

                <span className="text-[clamp(2rem,6vw,4rem)] font-bold">
                  Transforming Futures.
                </span>
              </span>
            </h1>
          </div>
          {/* intro para in hero  */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-center mt-5 px-4 sm:px-6 gap-4 border border-red-400 p-2">
            {/* First 2 images */}
            <div className="flex gap-4 mb-4 lg:mb-0">
              <HeroImages src="/hero1.jpg" alt="Hero 1" />
              <HeroImages src="/hero2.jpg" alt="Hero 2" />
            </div>

            {/* Paragraph */}
            <p className="text-center text-base font-semibold sm:text-md md:text-xl lg:text-xl xl:text-xl max-w-3xl">
              Welcome to Guru Dronacharya College of Education.
              <br />
              Empowering passionate learners to become impactful teachers of
              tomorrow
            </p>

            {/* Next 2 images */}
            <div className="flex gap-4 mt-4 lg:mt-0">
              <HeroImages src="/hero3.jpg" alt="Hero 3" />
              <HeroImages src="/hero4.jpg" alt="Hero 4" />
            </div>
          </div>

          {/* contact button */}
          <ContactButton />
          {/* hero image */}
          {/* hero image */}
          <div className="w-full flex justify-center mt-6">
            <Image
              src="/heroImage.jpg"
              alt="hero image"
              width={800}
              height={800}
              className="max-w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>