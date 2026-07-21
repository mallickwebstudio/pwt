"use client";

import { getEnrichedTourPackages } from "@/lib/tourMapper";
import React, { useState, useMemo } from "react";

type DetailTab =
  | "pricing"
  | "dates"
  | "itinerary"
  | "hotels"
  | "highlights"
  | "inclusions"
  | "seo_media";

export default function TourOverviewTable() {
  const tours = useMemo(() => getEnrichedTourPackages(), []);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"ALL" | "International" | "Domestic">("ALL");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "PUBLISHED" | "DRAFT">("ALL");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<DetailTab>("pricing");

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchesCategory =
        categoryFilter === "ALL" || tour.category === categoryFilter;
      const matchesStatus =
        statusFilter === "ALL" || tour.status === statusFilter;
      const query = search.toLowerCase();
      const matchesSearch =
        tour.title.toLowerCase().includes(query) ||
        tour.slug.toLowerCase().includes(query) ||
        tour.destinations.some((d) => d.toLowerCase().includes(query));

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [tours, search, categoryFilter, statusFilter]);

  const toggleRow = (slug: string) => {
    if (expandedSlug === slug) {
      setExpandedSlug(null);
    } else {
      setExpandedSlug(slug);
      setActiveTab("pricing");
    }
  };

  const formatCurrency = (amount?: number, currency = "INR") => {
    if (amount === undefined) return "N/A";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="w-full space-y-4 font-sans text-slate-800 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      {/* Search & Filter Control Bar */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <input
            type="text"
            placeholder="Search by title, slug, or destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-96 rounded-md border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
            {filteredTours.length} {filteredTours.length === 1 ? "tour" : "tours"}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
          {/* Category Filter */}
          <div className="flex rounded-md bg-slate-100 p-1">
            {(["ALL", "International", "Domestic"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`rounded px-2.5 py-1 transition-all ${
                  categoryFilter === cat
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex rounded-md bg-slate-100 p-1">
            {(["ALL", "PUBLISHED", "DRAFT"] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`rounded px-2 py-1 transition-all ${
                  statusFilter === st
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Primary Data Grid */}
      <div className="overflow-x-auto rounded-md border border-slate-200">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 uppercase tracking-wider text-slate-500">
            <tr>
              <th className="p-3">ID & Slug</th>
              <th className="p-3">Title & Meta</th>
              <th className="p-3">Starting Price</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Destinations</th>
              <th className="p-3">Route & Capacity</th>
              <th className="p-3">Next Departure</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredTours.length === 0 ? (
              <tr>
                <td colSpan={8} className="p-8 text-center text-slate-400">
                  No tour packages match your current search/filter parameters.
                </td>
              </tr>
            ) : (
              filteredTours.map((tour) => {
                const isExpanded = expandedSlug === tour.slug;
                const nextDate = tour.routeMeta?.dates?.[0];

                return (
                  <React.Fragment key={tour.slug}>
                    <tr
                      onClick={() => toggleRow(tour.slug)}
                      className={`cursor-pointer transition-colors hover:bg-slate-50/80 ${
                        isExpanded ? "bg-blue-50/40" : ""
                      }`}
                    >
                      {/* ID & Slug */}
                      <td className="p-3 font-mono">
                        <div className="font-semibold text-slate-900">{tour.slug}</div>
                        <div className="text-[11px] text-slate-400">{tour.slug}</div>
                      </td>

                      {/* Title & Metadata Badges */}
                      <td className="p-3 max-w-xs">
                        <div className="font-medium text-slate-900 truncate" title={tour.title}>
                          {tour.title}
                        </div>
                        <div className="mt-1 flex flex-wrap gap-1">
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                              tour.category === "International"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            {tour.category}
                          </span>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                              tour.status === "PUBLISHED"
                                ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {tour.status}
                          </span>
                          {tour.isFeatured && (
                            <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700">
                              Featured
                            </span>
                          )}
                          {tour.flyerHref && (
                            <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-semibold text-blue-700">
                              Flyer PDF
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Starting Price */}
                      <td className="p-3 whitespace-nowrap font-semibold text-slate-900">
                        {tour.pricing ? (
                          formatCurrency(tour.pricing.startingPrice, tour.pricing.currency)
                        ) : (
                          <span className="text-slate-400 font-normal">Unpriced</span>
                        )}
                      </td>

                      {/* Duration */}
                      <td className="p-3 whitespace-nowrap">
                        <span className="font-medium text-slate-700">
                          {tour.duration.nights}N / {tour.duration.days}D
                        </span>
                      </td>

                      {/* Destinations */}
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {tour.destinations.map((d, i) => (
                            <span
                              key={i}
                              className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Route & Total Capacity */}
                      <td className="p-3 whitespace-nowrap">
                        {tour.routeMeta ? (
                          <div>
                            <div className="text-slate-700">
                              {tour.routeMeta.departureCity} &rarr; {tour.routeMeta.returnCity}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              Cap: {tour.routeMeta.defaultTotalSeats} seats
                            </div>
                          </div>
                        ) : (
                          <span className="text-slate-400">N/A</span>
                        )}
                      </td>

                      {/* Next Departure Status */}
                      <td className="p-3 whitespace-nowrap">
                        {nextDate ? (
                          <div>
                            <div className="font-mono text-slate-700">{nextDate.departureDate}</div>
                            <span
                              className={`text-[10px] font-semibold ${
                                nextDate.status === "SOLD_OUT"
                                  ? "text-red-500"
                                  : nextDate.status === "FILLING_FAST"
                                  ? "text-amber-600"
                                  : "text-emerald-600"
                              }`}
                            >
                              {nextDate.status.replace("_", " ")} ({nextDate.availableSeats} left)
                            </span>
                          </div>
                        ) : (
                          <span className="text-slate-400">No dates</span>
                        )}
                      </td>

                      {/* Action */}
                      <td className="p-3 text-right whitespace-nowrap">
                        <button className="rounded px-2.5 py-1 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">
                          {isExpanded ? "Hide ▲" : "Inspect ▼"}
                        </button>
                      </td>
                    </tr>

                    {/* Detailed Accordion Drawer */}
                    {isExpanded && (
                      <tr>
                        <td colSpan={8} className="bg-slate-50/90 p-4 border-b border-slate-200">
                          <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
                            {/* Drawer Nav Tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-200 pb-2 gap-4 text-xs font-semibold">
                              <button
                                onClick={() => setActiveTab("pricing")}
                                className={`pb-1 whitespace-nowrap transition-colors ${
                                  activeTab === "pricing"
                                    ? "border-b-2 border-blue-600 text-blue-600"
                                    : "text-slate-500 hover:text-slate-800"
                                }`}
                              >
                                Pricing Breakdown
                              </button>
                              <button
                                onClick={() => setActiveTab("dates")}
                                className={`pb-1 whitespace-nowrap transition-colors ${
                                  activeTab === "dates"
                                    ? "border-b-2 border-blue-600 text-blue-600"
                                    : "text-slate-500 hover:text-slate-800"
                                }`}
                              >
                                Dates & Departure ({tour.routeMeta?.dates?.length || 0})
                              </button>
                              <button
                                onClick={() => setActiveTab("itinerary")}
                                className={`pb-1 whitespace-nowrap transition-colors ${
                                  activeTab === "itinerary"
                                    ? "border-b-2 border-blue-600 text-blue-600"
                                    : "text-slate-500 hover:text-slate-800"
                                }`}
                              >
                                Itinerary ({tour.itinerary?.length || 0} Days)
                              </button>
                              <button
                                onClick={() => setActiveTab("hotels")}
                                className={`pb-1 whitespace-nowrap transition-colors ${
                                  activeTab === "hotels"
                                    ? "border-b-2 border-blue-600 text-blue-600"
                                    : "text-slate-500 hover:text-slate-800"
                                }`}
                              >
                                Hotels ({tour.hotels?.length || 0})
                              </button>
                              <button
                                onClick={() => setActiveTab("highlights")}
                                className={`pb-1 whitespace-nowrap transition-colors ${
                                  activeTab === "highlights"
                                    ? "border-b-2 border-blue-600 text-blue-600"
                                    : "text-slate-500 hover:text-slate-800"
                                }`}
                              >
                                Highlights & Activities
                              </button>
                              <button
                                onClick={() => setActiveTab("inclusions")}
                                className={`pb-1 whitespace-nowrap transition-colors ${
                                  activeTab === "inclusions"
                                    ? "border-b-2 border-blue-600 text-blue-600"
                                    : "text-slate-500 hover:text-slate-800"
                                }`}
                              >
                                Inclusions & Exclusions
                              </button>
                              <button
                                onClick={() => setActiveTab("seo_media")}
                                className={`pb-1 whitespace-nowrap transition-colors ${
                                  activeTab === "seo_media"
                                    ? "border-b-2 border-blue-600 text-blue-600"
                                    : "text-slate-500 hover:text-slate-800"
                                }`}
                              >
                                SEO & Media ({tour.media?.length || 0})
                              </button>
                            </div>

                            {/* Tab Contents */}
                            <div className="pt-4 text-xs">
                              {/* 1. PRICING TAB */}
                              {activeTab === "pricing" && (
                                <div className="space-y-3">
                                  {tour.pricing ? (
                                    <div>
                                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        <div className="rounded border border-slate-200 bg-slate-50 p-2.5">
                                          <div className="text-[10px] text-slate-500 uppercase font-semibold">
                                            Starting Price
                                          </div>
                                          <div className="text-sm font-bold text-slate-900 mt-0.5">
                                            {formatCurrency(tour.pricing.startingPrice, tour.pricing.currency)}
                                          </div>
                                        </div>
                                        <div className="rounded border border-slate-200 bg-slate-50 p-2.5">
                                          <div className="text-[10px] text-slate-500 uppercase font-semibold">
                                            Adult Rate
                                          </div>
                                          <div className="text-sm font-bold text-slate-900 mt-0.5">
                                            {formatCurrency(tour.pricing.adultRate, tour.pricing.currency)}
                                          </div>
                                        </div>
                                        <div className="rounded border border-slate-200 bg-slate-50 p-2.5">
                                          <div className="text-[10px] text-slate-500 uppercase font-semibold">
                                            Child (No Bed 5-12)
                                          </div>
                                          <div className="text-sm font-bold text-slate-900 mt-0.5">
                                            {formatCurrency(tour.pricing.childNoBed5to12, tour.pricing.currency)}
                                          </div>
                                        </div>
                                        <div className="rounded border border-slate-200 bg-slate-50 p-2.5">
                                          <div className="text-[10px] text-slate-500 uppercase font-semibold">
                                            Child (No Bed 2-5)
                                          </div>
                                          <div className="text-sm font-bold text-slate-900 mt-0.5">
                                            {formatCurrency(tour.pricing.childNoBed2to5, tour.pricing.currency)}
                                          </div>
                                        </div>
                                        <div className="rounded border border-slate-200 bg-slate-50 p-2.5">
                                          <div className="text-[10px] text-slate-500 uppercase font-semibold">
                                            Child No Bed (General)
                                          </div>
                                          <div className="text-sm font-bold text-slate-900 mt-0.5">
                                            {formatCurrency(tour.pricing.childNoBed, tour.pricing.currency)}
                                          </div>
                                        </div>
                                        <div className="rounded border border-slate-200 bg-slate-50 p-2.5">
                                          <div className="text-[10px] text-slate-500 uppercase font-semibold">
                                            Infant Rate
                                          </div>
                                          <div className="text-sm font-bold text-slate-900 mt-0.5">
                                            {formatCurrency(tour.pricing.infantRate, tour.pricing.currency)}
                                          </div>
                                        </div>
                                        <div className="col-span-2 rounded border border-slate-200 bg-slate-50 p-2.5">
                                          <div className="text-[10px] text-slate-500 uppercase font-semibold">
                                            Taxes & Surcharges
                                          </div>
                                          <div className="text-xs font-medium text-slate-800 mt-0.5">
                                            {tour.pricing.taxes || "Included / Not Specified"}
                                          </div>
                                        </div>
                                      </div>
                                      {tour.pricing.note && (
                                        <p className="mt-2 text-[11px] text-slate-500 italic">
                                          Note: {tour.pricing.note}
                                        </p>
                                      )}
                                    </div>
                                  ) : (
                                    <p className="text-slate-400 italic">No pricing record configured for this slug.</p>
                                  )}
                                </div>
                              )}

                              {/* 2. DATES & SCHEDULE TAB */}
                              {activeTab === "dates" && (
                                <div className="space-y-3">
                                  {tour.routeMeta?.dates?.length ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                      {tour.routeMeta.dates.map((d) => (
                                        <div
                                          key={d.id}
                                          className="rounded border border-slate-200 p-2.5 bg-slate-50"
                                        >
                                          <div className="flex justify-between items-center">
                                            <span className="font-mono font-semibold text-slate-800">
                                              {d.departureDate} &rarr; {d.returnDate}
                                            </span>
                                            <span
                                              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                                d.status === "SOLD_OUT"
                                                  ? "bg-red-100 text-red-700"
                                                  : d.status === "FILLING_FAST"
                                                  ? "bg-amber-100 text-amber-700"
                                                  : "bg-emerald-100 text-emerald-700"
                                              }`}
                                            >
                                              {d.status}
                                            </span>
                                          </div>
                                          <div className="mt-2 text-[11px] text-slate-600 flex justify-between">
                                            <span>ID: <code className="font-mono text-slate-500">{d.id}</code></span>
                                            <span>Available Seats: <strong>{d.availableSeats}</strong></span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <p className="text-slate-400 italic">No departure schedule entries recorded.</p>
                                  )}
                                </div>
                              )}

                              {/* 3. ITINERARY TAB */}
                              {activeTab === "itinerary" && (
                                <div className="space-y-2">
                                  {tour.itinerary?.length ? (
                                    <div className="divide-y divide-slate-100 rounded border border-slate-200 bg-slate-50/50">
                                      {tour.itinerary.map((day) => (
                                        <div key={day.day} className="p-2.5 flex items-start gap-3">
                                          <span className="shrink-0 font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[11px]">
                                            Day {day.day}
                                          </span>
                                          <span className="font-medium text-slate-800 text-xs mt-0.5">
                                            {day.title}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <p className="text-slate-400 italic">No daily itinerary configured.</p>
                                  )}
                                </div>
                              )}

                              {/* 4. HOTELS TAB */}
                              {activeTab === "hotels" && (
                                <div className="space-y-2">
                                  {tour.hotels?.length ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                      {tour.hotels.map((h, i) => (
                                        <div key={i} className="rounded border border-slate-200 p-2.5 bg-slate-50">
                                          <div className="font-semibold text-slate-800">{h.city}</div>
                                          <div className="text-slate-600 mt-0.5">{h.name}</div>
                                          <div className="mt-1 text-[10px] text-slate-400 font-medium">
                                            Duration: {h.nights} {h.nights === 1 ? "Night" : "Nights"}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <p className="text-slate-400 italic">No hotel assignments assigned.</p>
                                  )}
                                </div>
                              )}

                              {/* 5. HIGHLIGHTS & ACTIVITIES TAB */}
                              {activeTab === "highlights" && (
                                <div className="space-y-4">
                                  {/* Bullet Highlights */}
                                  <div>
                                    <h5 className="font-semibold text-slate-800 mb-1">Key Tour Highlights</h5>
                                    {tour.highlights?.highlights?.length ? (
                                      <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1">
                                        {tour.highlights.highlights.map((h, i) => (
                                          <li key={i}>{h}</li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <p className="text-slate-400 italic">No textual highlights listed.</p>
                                    )}
                                  </div>

                                  {/* Activity Cards */}
                                  <div>
                                    <h5 className="font-semibold text-slate-800 mb-2">Activities & Media Icons</h5>
                                    {tour.highlights?.activities?.length ? (
                                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                                        {tour.highlights.activities.map((act, i) => (
                                          <div key={i} className="rounded border border-slate-200 p-2 bg-slate-50 text-center">
                                            <div className="text-[10px] text-slate-400 font-mono truncate mb-1">
                                              {act.imageSrc}
                                            </div>
                                            <div className="font-medium text-slate-800 text-[11px] leading-tight">
                                              {act.label}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      <p className="text-slate-400 italic">No activities entries.</p>
                                    )}
                                  </div>
                                </div>
                              )}

                              {/* 6. INCLUSIONS & EXCLUSIONS TAB */}
                              {activeTab === "inclusions" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="rounded border border-emerald-200 bg-emerald-50/30 p-3">
                                    <h5 className="font-bold text-emerald-800 mb-2">Inclusions</h5>
                                    {tour.inclusionsExclusions?.inclusions?.length ? (
                                      <ul className="list-disc list-inside space-y-1 text-slate-700">
                                        {tour.inclusionsExclusions.inclusions.map((inc, i) => (
                                          <li key={i}>{inc}</li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <p className="text-slate-400 italic">No inclusions defined.</p>
                                    )}
                                  </div>

                                  <div className="rounded border border-rose-200 bg-rose-50/30 p-3">
                                    <h5 className="font-bold text-rose-800 mb-2">Exclusions</h5>
                                    {tour.inclusionsExclusions?.exclusions?.length ? (
                                      <ul className="list-disc list-inside space-y-1 text-slate-700">
                                        {tour.inclusionsExclusions.exclusions.map((exc, i) => (
                                          <li key={i}>{exc}</li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <p className="text-slate-400 italic">No exclusions defined.</p>
                                    )}
                                  </div>
                                </div>
                              )}

                              {/* 7. SEO & MEDIA TAB */}
                              {activeTab === "seo_media" && (
                                <div className="space-y-4">
                                  {/* SEO Metadata */}
                                  <div className="rounded border border-slate-200 bg-slate-50 p-3">
                                    <h5 className="font-bold text-slate-800 mb-1">SEO Metadata</h5>
                                    {tour.seo ? (
                                      <div className="space-y-1">
                                        <div>
                                          <strong className="text-slate-600">Meta Title:</strong>{" "}
                                          <span className="text-slate-900">{tour.seo.metaTitle}</span>
                                        </div>
                                        <div>
                                          <strong className="text-slate-600">Meta Description:</strong>{" "}
                                          <span className="text-slate-800">{tour.seo.metaDescription}</span>
                                        </div>
                                      </div>
                                    ) : (
                                      <p className="text-slate-400 italic">No SEO metadata configured.</p>
                                    )}
                                  </div>

                                  {/* Flyer Link & Assets */}
                                  <div className="flex items-center justify-between rounded border border-slate-200 p-2.5 bg-slate-50">
                                    <div>
                                      <span className="font-semibold text-slate-800">Flyer PDF Document:</span>{" "}
                                      <code className="text-slate-500">{tour.flyerHref || "None attached"}</code>
                                    </div>
                                    {tour.flyerHref && (
                                      <a
                                        href={tour.flyerHref}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-600 hover:underline font-semibold"
                                      >
                                        Download PDF &rarr;
                                      </a>
                                    )}
                                  </div>

                                  {/* Media Items */}
                                  <div>
                                    <h5 className="font-bold text-slate-800 mb-2">Media Gallery Items</h5>
                                    {tour.media?.length ? (
                                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                        {tour.media.map((item, i) => (
                                          <div key={i} className="rounded border border-slate-200 p-2 bg-slate-50">
                                            <div className="flex items-center justify-between mb-1">
                                              <span className="font-mono text-[10px] text-slate-400 truncate max-w-[180px]">
                                                {item.url}
                                              </span>
                                              {item.isHero && (
                                                <span className="rounded bg-amber-100 px-1 py-0.2 text-[9px] font-bold text-amber-800">
                                                  HERO
                                                </span>
                                              )}
                                            </div>
                                            <div className="text-slate-700 italic text-[11px]">
                                              Alt: &quot;{item.altText}&quot;
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      <p className="text-slate-400 italic">No media items registered.</p>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}