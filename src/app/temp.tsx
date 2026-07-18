"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  MapPin, 
  Check, 
  X, 
  ChevronDown, 
  Hotel, 
  Sparkles, 
  PhoneCall, 
  FileText, 
  Clock 
} from "lucide-react";
import { TourCategory, TourPackage } from "@/types/packages";

interface TourCatalogProps {
  packages: TourPackage[];
  agencyPhone?: string;
}

export const TourCatalog: React.FC<TourCatalogProps> = ({ 
  packages, 
  agencyPhone = "+917201919911" 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<"All" | TourCategory>("All");
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  const filteredPackages = selectedCategory === "All"
    ? packages
    : packages.filter((pkg) => pkg.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedPackage(expandedPackage === id ? null : id);
  };

  return (
    <section className="bg-slate-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Handcrafted Itineraries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Explore Holiday Packages
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Transparent pricing, 100% custom plans, and complete on-trip human support.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex justify-center items-center gap-2 mt-6 p-1.5 bg-slate-200/60 rounded-xl max-w-md mx-auto">
            {(["All", "International", "Domestic"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const isExpanded = expandedPackage === pkg.id;
            const heroImage = pkg.media.find((m) => m.isHero)?.url || pkg.media[0]?.url || "/images/placeholder.webp";

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Media Container */}
                <div className="relative h-56 w-full bg-slate-100">
                  <Image
                    src={heroImage}
                    alt={pkg.media[0]?.altText || pkg.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                      {pkg.category}
                    </span>
                    {pkg.isFeatured && (
                      <span className="bg-amber-500 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3 fill-slate-950" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5" />
                    {pkg.duration.nights} Nights / {pkg.duration.days} Days
                  </div>
                </div>

                {/* Card Content Header */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 line-clamp-1">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      {pkg.destinations.join(" • ")}
                    </p>
                    <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Highlights Summary Pills */}
                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {pkg.highlights.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                        >
                          {item}
                        </span>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="text-[11px] text-slate-400 px-1 py-0.5">
                          +{pkg.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  <hr className="my-4 border-slate-100" />

                  {/* Pricing Display */}
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 font-medium block">Starting From</span>
                      <span className="text-2xl font-black text-slate-900">
                        ₹{pkg.pricing.startingPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-slate-500"> / adult</span>
                    </div>

                    {pkg.pricing.taxes && (
                      <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded">
                        {pkg.pricing.taxes}
                      </span>
                    )}
                  </div>

                  {/* Expandable Section Accordion Button */}
                  <button
                    onClick={() => toggleExpand(pkg.id)}
                    className="mt-4 w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
                  >
                    {isExpanded ? "Hide Details" : "View Full Inclusions & Itinerary"}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  {/* Expanded Drawer Content */}
                  {isExpanded && (
                    <div className="mt-4 space-y-4 pt-4 border-t border-slate-100 text-xs text-slate-600 animate-in fade-in-50 duration-200">
                      
                      {/* Detailed Rates Table */}
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                        <span className="font-bold text-slate-800 block mb-1.5">Pricing Breakdown:</span>
                        <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                          {pkg.pricing.adultRate && <div>Adult: <span className="font-semibold text-slate-900">₹{pkg.pricing.adultRate.toLocaleString("en-IN")}</span></div>}
                          {pkg.pricing.childNoBed && <div>Child (No Bed): <span className="font-semibold text-slate-900">₹{pkg.pricing.childNoBed.toLocaleString("en-IN")}</span></div>}
                          {pkg.pricing.childNoBed5to12 && <div>Child (5-12Y): <span className="font-semibold text-slate-900">₹{pkg.pricing.childNoBed5to12.toLocaleString("en-IN")}</span></div>}
                          {pkg.pricing.childNoBed2to5 && <div>Child (2-5Y): <span className="font-semibold text-slate-900">₹{pkg.pricing.childNoBed2to5.toLocaleString("en-IN")}</span></div>}
                          {pkg.pricing.infantRate && <div>Infant: <span className="font-semibold text-slate-900">₹{pkg.pricing.infantRate.toLocaleString("en-IN")}</span></div>}
                        </div>
                      </div>

                      {/* Hotels Breakdown */}
                      {pkg.hotels && pkg.hotels.length > 0 && (
                        <div>
                          <span className="font-bold text-slate-800 flex items-center gap-1 mb-1">
                            <Hotel className="w-3.5 h-3.5 text-slate-500" /> Accommodations:
                          </span>
                          <ul className="space-y-1 pl-1">
                            {pkg.hotels.map((h, i) => (
                              <li key={i} className="text-[11px] text-slate-600">
                                <span className="font-medium text-slate-800">{h.city}:</span> {h.nights} Nights at {h.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Inclusions */}
                      {pkg.inclusions && pkg.inclusions.length > 0 && (
                        <div>
                          <span className="font-bold text-slate-800 block mb-1">What&apos;s Included:</span>
                          <ul className="space-y-1">
                            {pkg.inclusions.map((inc, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-[11px]">
                                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Exclusions */}
                      {pkg.exclusions && pkg.exclusions.length > 0 && (
                        <div>
                          <span className="font-bold text-slate-800 block mb-1">Exclusions:</span>
                          <ul className="space-y-1">
                            {pkg.exclusions.map((exc, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-500">
                                <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                                <span>{exc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Itinerary Day-by-Day */}
                      {pkg.itineraryOverview && pkg.itineraryOverview.length > 0 && (
                        <div>
                          <span className="font-bold text-slate-800 flex items-center gap-1 mb-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" /> Day-by-Day Itinerary:
                          </span>
                          <div className="space-y-1.5 pl-1 border-l-2 border-slate-200">
                            {pkg.itineraryOverview.map((item) => (
                              <div key={item.day} className="pl-2">
                                <span className="font-semibold text-slate-900 text-[11px]">Day {item.day}:</span>{" "}
                                <span className="text-[11px]">{item.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* PDF Download Button if available */}
                      {pkg.flyerHref && (
                        <a
                          href={pkg.flyerHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 w-full py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-[11px] font-semibold transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5" /> Download Full PDF Flyer
                        </a>
                      )}
                    </div>
                  )}

                  {/* Actions Bar */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/${agencyPhone.replace(/[^0-9]/g, "")}?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                    >
                      WhatsApp
                    </a>
                    <Link
                      href={`/contact?package=${pkg.slug}`}
                      className="py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5" /> Get Quote
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};