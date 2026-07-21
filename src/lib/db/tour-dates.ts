import { PackageRouteMeta, TourSlug } from "@/types";

// Keyed dictionary for zero-redundancy O(1) slug lookup
export const tourDatesData: Partial<Record<TourSlug, PackageRouteMeta>> = {
    "singapore-malaysia-7d": {
        departureCity: "Ahmedabad",
        returnCity: "Ahmedabad",
        defaultTotalSeats: 30,
        dates: [
            { id: "sm-2026-06-17", departureDate: "2026-06-17", returnDate: "2026-06-23", availableSeats: 0, status: "SOLD_OUT" },
            { id: "sm-2026-07-15", departureDate: "2026-07-15", returnDate: "2026-07-21", availableSeats: 4, status: "FILLING_FAST" },
            { id: "sm-2026-08-14", departureDate: "2026-08-14", returnDate: "2026-08-20", availableSeats: 12, status: "AVAILABLE" },
            { id: "sm-2026-09-16", departureDate: "2026-09-16", returnDate: "2026-09-22", availableSeats: 22, status: "AVAILABLE" }
        ]
    },

    "singapore-malaysia-cruise-9d": {
        departureCity: "Ahmedabad",
        returnCity: "Ahmedabad",
        defaultTotalSeats: 25,
        dates: [
            { id: "smc-2026-07-08", departureDate: "2026-07-08", returnDate: "2026-07-16", availableSeats: 0, status: "SOLD_OUT" },
            { id: "smc-2026-07-22", departureDate: "2026-07-22", returnDate: "2026-07-30", availableSeats: 3, status: "FILLING_FAST" },
            { id: "smc-2026-08-12", departureDate: "2026-08-12", returnDate: "2026-08-20", availableSeats: 8, status: "AVAILABLE" },
            { id: "smc-2026-08-26", departureDate: "2026-08-26", returnDate: "2026-09-03", availableSeats: 15, status: "AVAILABLE" },
            { id: "smc-2026-09-23", departureDate: "2026-09-23", returnDate: "2026-10-01", availableSeats: 18, status: "AVAILABLE" },
            { id: "smc-2026-10-07", departureDate: "2026-10-07", returnDate: "2026-10-15", availableSeats: 20, status: "AVAILABLE" },
            { id: "smc-2026-10-21", departureDate: "2026-10-21", returnDate: "2026-10-29", availableSeats: 25, status: "AVAILABLE" }
        ]
    },

    "singapore-malaysia-thailand-11d": {
        departureCity: "Ahmedabad",
        returnCity: "Ahmedabad",
        defaultTotalSeats: 30,
        dates: [
            { id: "smt-2026-06-17", departureDate: "2026-06-17", returnDate: "2026-06-27", availableSeats: 0, status: "SOLD_OUT" },
            { id: "smt-2026-07-15", departureDate: "2026-07-15", returnDate: "2026-07-25", availableSeats: 2, status: "FILLING_FAST" },
            { id: "smt-2026-08-14", departureDate: "2026-08-14", returnDate: "2026-08-24", availableSeats: 11, status: "AVAILABLE" },
            { id: "smt-2026-09-16", departureDate: "2026-09-16", returnDate: "2026-09-26", availableSeats: 24, status: "AVAILABLE" }
        ]
    },

    "singapore-malaysia-thailand-cruise-13d": {
        departureCity: "Ahmedabad",
        returnCity: "Ahmedabad",
        defaultTotalSeats: 20,
        dates: [
            { id: "smtc-2026-07-08", departureDate: "2026-07-08", returnDate: "2026-07-20", availableSeats: 0, status: "SOLD_OUT" },
            { id: "smtc-2026-08-12", departureDate: "2026-08-12", returnDate: "2026-08-24", availableSeats: 5, status: "FILLING_FAST" },
            { id: "smtc-2026-09-23", departureDate: "2026-09-23", returnDate: "2026-10-05", availableSeats: 14, status: "AVAILABLE" }
        ]
    },

    "vietnam-signature-9d": {
        departureCity: "Ahmedabad",
        returnCity: "Ahmedabad",
        defaultTotalSeats: 25,
        dates: [
            { id: "vn-2026-06-05", departureDate: "2026-06-05", returnDate: "2026-06-13", availableSeats: 0, status: "SOLD_OUT" },
            { id: "vn-2026-06-10", departureDate: "2026-06-10", returnDate: "2026-06-18", availableSeats: 0, status: "SOLD_OUT" },
            { id: "vn-2026-06-21", departureDate: "2026-06-21", returnDate: "2026-06-29", availableSeats: 1, status: "FILLING_FAST" },
            { id: "vn-2026-07-10", departureDate: "2026-07-10", returnDate: "2026-07-18", availableSeats: 3, status: "FILLING_FAST" },
            { id: "vn-2026-07-24", departureDate: "2026-07-24", returnDate: "2026-08-01", availableSeats: 7, status: "AVAILABLE" },
            { id: "vn-2026-08-14", departureDate: "2026-08-14", returnDate: "2026-08-22", availableSeats: 10, status: "AVAILABLE" },
            { id: "vn-2026-08-28", departureDate: "2026-08-28", returnDate: "2026-09-05", availableSeats: 16, status: "AVAILABLE" },
            { id: "vn-2026-09-25", departureDate: "2026-09-25", returnDate: "2026-10-03", availableSeats: 21, status: "AVAILABLE" },
            { id: "vn-2026-10-09", departureDate: "2026-10-09", returnDate: "2026-10-17", availableSeats: 22, status: "AVAILABLE" },
            { id: "vn-2026-10-23", departureDate: "2026-10-23", returnDate: "2026-10-31", availableSeats: 25, status: "AVAILABLE" }
        ]
    },

    "dubai-abu-dhabi-yas-island": {
        departureCity: "Ahmedabad",
        returnCity: "Ahmedabad",
        defaultTotalSeats: 20,
        dates: [
            { id: "dxb-2026-08-10", departureDate: "2026-08-10", returnDate: "2026-08-16", availableSeats: 6, status: "AVAILABLE" },
            { id: "dxb-2026-09-05", departureDate: "2026-09-05", returnDate: "2026-09-11", availableSeats: 14, status: "AVAILABLE" }
        ]
    }
};