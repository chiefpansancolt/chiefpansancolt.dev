'use client'

import { ButtonLink } from "@/components/Button"
import { Container } from "@/components/Container"
import { rubygems } from "@/data/features"
import backgroundImage from "@/images/background-features.jpg"
import { Tab } from "@headlessui/react"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"

export function RubyGems() {
  let [tabOrientation, setTabOrientation] = useState("horizontal")

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)")

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal")
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener("change", onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="rubygems"
      aria-labelledby="rubygems-title"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-[44%] -translate-y-[42%]">
        <Image src={backgroundImage} alt="" width={2245} height={1636} unoptimized />
      </div>
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2
            id="rubygems-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Ruby Gems
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Ruby Gems Available to install via Ruby.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-x-0 lg:space-y-1 lg:whitespace-normal">
                  {rubygems.map((rubygem, rubygemIndex) => (
                    <div
                      key={rubygem.title}
                      className={clsx(
                        "group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6",
                        {
                          "bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10":
                            selectedIndex === rubygemIndex,
                          "hover:bg-white/10 lg:hover:bg-white/5": selectedIndex !== rubygemIndex,
                        }
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            "font-display text-lg [&:not(:focus-visible)]:focus:outline-none",
                            {
                              "text-blue-600 lg:text-white": selectedIndex === rubygemIndex,
                              "text-blue-100 hover:text-white lg:text-white":
                                selectedIndex !== rubygemIndex,
                            }
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {rubygem.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx("mt-2 hidden text-sm lg:block", {
                          "text-white": selectedIndex === rubygemIndex,
                          "text-blue-100 group-hover:text-white": selectedIndex !== rubygemIndex,
                        })}
                      >
                        {rubygem.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {rubygems.map((rubygem) => (
                  <Tab.Panel key={rubygem.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -bottom-[4.25rem] -top-[6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {rubygem.description}
                      </p>
                    </div>
                    <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        src={rubygem.image}
                        alt=""
                        fill
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                    <div className="mt-3">
                      <ButtonLink href={rubygem.href} variant="solid">
                        <span className="mr-3">Documentation</span>
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </ButtonLink>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
