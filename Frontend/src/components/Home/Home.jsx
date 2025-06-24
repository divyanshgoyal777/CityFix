"use client";
import React, { useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import OtherPosts from "../Posts/OtherPosts/OtherPosts";
import {
  Landmark,
  Vote,
  ShieldCheck,
  Sparkles,
  ArrowRightCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, type: "spring" } },
};

const features = [
  {
    icon: Landmark,
    title: "Post a Problem",
    desc: "Report civic issues using geo-tagged photos and precise locations.",
  },
  {
    icon: Vote,
    title: "Vote & Support",
    desc: "Upvote posts to bring attention to urgent public issues.",
  },
  {
    icon: ShieldCheck,
    title: "Govt. Action",
    desc: "Track real-time government updates and resolution status.",
  },
];

const steps = [
  {
    number: "1",
    title: "Create & Post",
    desc: "Sign up and post issues with photos and locations.",
  },
  {
    number: "2",
    title: "Vote & Boost",
    desc: "More votes = more attention from local authorities.",
  },
  {
    number: "3",
    title: "Get Updates",
    desc: "Stay informed on progress made by the government.",
  },
];

const testimonials = [
  {
    name: "Amit Sharma",
    quote: "CityFix got a dangerous pothole fixed in just 3 days. Truly works!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Desai",
    quote: "This is how civic issues should always be reported. Love it!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Home = () => {
  const { role } = useAuth();
  const isLoggedIn = Boolean(localStorage.getItem("token") || role);

  useEffect(() => {
    console.log("User role:", role);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white text-gray-800 font-sans">
        {isLoggedIn ? (
          <div className="px-6 md:px-12 py-12">
            <OtherPosts />
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <section className="w-full py-24 px-6 md:px-12 text-center bg-gradient-to-tr from-blue-100 via-white to-green-50">
              <motion.div
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto"
              >
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight">
                  Revolutionize Civic Reporting with{" "}
                  <span className="text-blue-600">CityFix</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-700 mb-8">
                  Report. Engage. Resolve. Be part of a cleaner, better city.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                  <Link to={"/login"}>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg shadow-md hover:bg-blue-700 transition">
                      Get Started
                    </button>
                  </Link>
                  <a
                    href="/developers"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl text-lg shadow hover:bg-blue-600 hover:text-white transition"
                  >
                    About Developers
                  </a>
                </div>
              </motion.div>
            </section>

            {/* Mission */}
            <section className="py-20 px-6 md:px-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                CityFix empowers communities to report civic problems and bridge
                the communication gap between citizens and authorities with
                accountability and speed.
              </p>
            </section>

            {/* Features */}
            <section className="py-20 px-6 md:px-12 bg-gray-50">
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map(({ icon: Icon, title, desc }, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center border border-gray-100"
                  >
                    <Icon className="mx-auto text-blue-500 mb-4" size={44} />
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Steps */}
            <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                  How It Works
                </h2>
                <p className="text-gray-600 text-base">
                  Simple steps to raise, boost, and resolve civic issues.
                </p>
              </div>
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow hover:shadow-lg text-center"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-white bg-blue-600 rounded-full font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 md:px-12 bg-white">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  What Citizens Say
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {testimonials.map((t, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-blue-50 p-6 rounded-xl shadow flex gap-4 items-start"
                  >
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full border-2 border-blue-500"
                    />
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-1">
                        {t.name}
                      </h4>
                      <p className="italic text-gray-700">“{t.quote}”</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center py-20 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-6"
              >
                Ready to Fix Your City?
              </motion.h3>
              <Link to={"/login"}>
                <button className="bg-white text-blue-600 px-10 py-3 rounded-xl text-lg font-bold shadow hover:bg-gray-100 transition inline-flex items-center gap-2">
                  Get Started <ArrowRightCircle size={20} />
                </button>
              </Link>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
