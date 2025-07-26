import { FeatureList } from "@/constants/root";
import React from "react";

export default function Features() {
  return (
    <section id="features" className="bg-two section">
      <div className="section-container">
        <div className="section-sub-container">
          <span className="badge-gray">Features</span>
          <h1 className="title-bold-xl">
            Everything You Need to Build & Scale
          </h1>
          <p className="sub-title-lg">
            From initial setup to production deployment, QSoftX provides all the
            tools and configurations you need for professional full stack
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FeatureList.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg space-y-4 border"
            >
              <div
                className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center`}
              >
                <service.icon className={`icon-md ${service.iconColor}`} />
              </div>
              <div className="space-y-2">
                <h3 className="title-semi-md">{service.title}</h3>
                <p className="sub-title-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
