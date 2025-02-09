"use client";
import React, { useState, useEffect, useRef } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const fetchVisitorCount = async () => {
      try {
        const response = await fetch("/api/visitor-counter", {
          method: "POST",
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || animatedCount === count) return;

    let start = animatedCount;
    const end = count;
    const duration = 2000; // 2 seconds total animation time
    const increment = Math.ceil((end - start) / 50); // Smaller steps for a slower update

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatedCount(end);
        clearInterval(timer);
      } else {
        setAnimatedCount(start);
      }
    }, 40); // Updates every 40ms (adjust to control speed)

    return () => clearInterval(timer);
  }, [count, isVisible]);

  return (
    <section
      ref={counterRef}
      className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg shadow-md border border-white/20 w-fit mx-auto mb-8 opacity-0 transition-opacity duration-700 ease-in-out"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="text-center">
        <h3 className="text-lg font-semibold">🌟 Visitors</h3>
        <p className="text-sm text-gray-200">Real-time engagement</p>
        <div className="bg-white/10 py-2 px-4 mt-2 rounded-lg shadow">
          <span className="text-3xl font-bold">
            {loading ? "..." : animatedCount}
          </span>
        </div>
      </div>
    </section>
  );
}
