"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "FREE Plan",
      desc: "Limited access to course countent and exercises",
      price: 0,
      isMostPop: false,
      features: [
        "Access to the basic segments of courses",
        "Access at most 10 exercises per language"
      ],
    },
    {
      name: "PRO Plan",
      desc: "MONTHLY unlimited access to course content and exercises",
      price: 5.99,
      isMostPop: true,
      features: [
        "Unlimited access to all courses",
        "Unlimited access to all exercises",
        "Eligible for end-course certifications",
        "Chat for personal assistance",
      ],
    },
    {
      name: "KINDER Plan",
      desc: "LIFETIME unlimited access to course content and exercises",
      price: 53.99,
      isMostPop: false,
      features: [
        "Unlimited access to all courses",
        "Unlimited access to all exercises",
        "Eligible for end-course certifications",
        "Chat for personal assistance",
      ],
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-screen-xl mx-auto px-4 md:px-8"
      >
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
            Skyrocket Your Learning Speed!
          </h3>
          <div className="mt-3 max-w-xl text-foreground/80">
            <p>Access a lot more course content and exercises beyond the basics.</p>
          </div>
        </div>
        <div className="mt-16 gap-10 grid lg:grid-cols-3 place-content-center">
          {plans.map((item, idx) => (
            <Card
              key={idx}
              className={
                item.isMostPop ? "border-2 border-primary sm:scale-110" : ""
              }
            >
              <CardHeader>
                <span className="font-medium">{item.name}</span>
              </CardHeader>
              <Divider />
              <CardBody className="gap-3">
                <div className="text-3xl font-semibold">
                  {item.name.startsWith("KINDER") ? (
                    <>${item.price}</>
                  ) : (
                    <>
                      ${item.price} <span className="text-xl font-normal">/month</span>
                    </>
                  )}
                </div>

                <p>{item.desc}</p>
                <ul className="p-8 space-y-3">
                  <li className="font-medium">
                    <p>Features</p>
                  </li>
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <Check size={20} />
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  className="w-full"
                  variant="solid"
                  color={item.isMostPop ? "primary" : "default"}
                >
                  Subscribe
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>
    </section >
  );
}
