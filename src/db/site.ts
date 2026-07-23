

export const departuresCalendar = [
    {
        routeSlug: "singapore-malaysia-7d",
        dates: ["June 17", "July 15", "Aug 14", "Sep 16"]
    },
    {
        routeSlug: "singapore-malaysia-cruise-9d",
        dates: ["July 8", "July 22", "Aug 12", "Aug 26", "Sep 23", "Oct 7", "Oct 21"]
    },
    {
        routeSlug: "singapore-malaysia-thailand-11d",
        dates: ["June 17", "July 15", "Aug 14", "Sep 16"]
    },
    {
        routeSlug: "vietnam-signature-9d",
        dates: ["June 5", "June 10", "June 21", "July 10", "July 24", "Aug 14", "Aug 28", "Sep 25", "Oct 9", "Oct 23"]
    }
];

export const agencyGlobalConfig = {
    mandatoryPolicySurcharges: {
        seasonalBlackouts: [
            "Chinese New Year Peak Period",
            "Christmas Week Holiday Window",
            "Diwali Festival Week Travel Window"
        ],
        mandatoryDirectCruiseFees: {
            gratuityPerPerson: { value: 40, currency: "USD", paymentMethod: "Payable directly on-board" },
            fuelSurchargePerPerson: { value: 30, currency: "SGD", paymentMethod: "Payable directly on-board", notes: "Subject to crude oil volatility" }
        }
    }
};

export const visaComplianceChecklists = {
    singapore: {
        passportValidityMonths: 9,
        requiresAgentVideoCall: true,
        bankStatement: {
            minimumBalancePerPerson: 80000,
            requiresSignatureOnEveryPage: true,
            requiresStampOnEveryPage: true
        },
        photoSpecifications: {
            dimensionsMM: "35x45",
            faceCoveragePercentage: 80,
            background: "White",
            finish: "Matt Finish",
            restrictions: ["Without Specks", "Dark Clothes", "No Open Hair"]
        }
    },
    vietnam: {
        passportValidityMonths: 6,
        requiresAgentVideoCall: false,
        bankStatement: null,
        photoSpecifications: {
            dimensionsMM: "35x45",
            faceCoveragePercentage: 80,
            background: "White",
            finish: "Standard",
            restrictions: []
        }
    },
    domestic: null
};

export const globalBlackouts = {
    international: [
        "Chinese New Year Peak Period",
        "Christmas Week Holiday Window",
        "Diwali Festival Week Travel Window"
    ],
    domestic: [
        "Diwali Festival Week Travel Window",
        "Christmas & New Year Peak Window",
        "Local School Summer Vacation Peak"
    ]
};

export const specificCruisePackage = [
    {
        id: "pkg-singapore-malaysia-cruise",
        surcharges: {
            hasCruiseFees: true,
            items: [
                { value: 40, currency: "USD", label: "Cruise Gratuity", type: "ONBOARD" },
                { value: 30, currency: "SGD", label: "Fuel Surcharge", type: "ONBOARD", dynamic: true }
            ]
        }
    },
];