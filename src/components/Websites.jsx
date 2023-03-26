import { ButtonLink } from "@/components/Button"
import { Container } from "@/components/Container"
import { websites } from "@/data/features"
import backgroundImage from "@/images/background-faqs.jpg"
import { Tab } from "@headlessui/react"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Websites() {
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
      id="websites"
      aria-labelledby="websites-title"
      className="relative overflow-hidden bg-slate-50 pt-20 pb-28 sm:py-32"
    >
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <Image src={backgroundImage} alt="" width={2245} height={1636} unoptimized />
      </div>
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2
            id="websites-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
          >
            Websites
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-700">
            Websites built by Christopher Pezza available to the public to view and explore.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal">
                  {websites.map((website, websiteIndex) => (
                    <div
                      key={website.title}
                      className={clsx(
                        "group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6",
                        {
                          "bg-blue-600 lg:bg-blue-600/10 lg:ring-1 lg:ring-inset lg:ring-blue-600/10":
                            selectedIndex === websiteIndex,
                          "hover:bg-blue-600/10 lg:hover:bg-blue-600/5":
                            selectedIndex !== websiteIndex,
                        }
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            "font-display text-lg [&:not(:focus-visible)]:focus:outline-none",
                            {
                              "text-blue-800": selectedIndex === websiteIndex,
                              "text-blue-600 hover:text-slate-800 lg:text-slate-700":
                                selectedIndex !== websiteIndex,
                            }
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {website.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx("mt-2 hidden text-sm lg:block", {
                          "text-slate-900": selectedIndex === websiteIndex,
                          "text-blue-600 group-hover:text-slate-900":
                            selectedIndex !== websiteIndex,
                        })}
                      >
                        {website.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {websites.map((website) => (
                  <Tab.Panel key={website.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-slate-900 sm:text-center">
                        {website.description}
                      </p>
                    </div>
                    <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        src={website.image}
                        alt=""
                        fill
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                    <div className="mt-3">
                      <ButtonLink href={website.href} variant="solid">
                        <span className="mr-3">Vist</span>
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
