export const tomato = [];

export const steps = [
    {
        id: "Greet",
        message: "Hello, Welcome to our shop",
        trigger: "Done",
    },
    {
        id: "Done",
        message: "Please enter your name!",
        trigger: "waiting1",
    },
    {
        id: "waiting1",
        user: true,
        trigger: "Name",
    },
    {
        id: "Name",
        message: "Hi {previousValue}, Please select your issue",
        trigger: "issues",
    },
    {
        id: "issues",
        options: [
            {
                value: "Tomato",
                label: "Tomato",
                trigger: "Tomato",
            },
            {
                value: "Pepper",
                label: "Pepper",
                trigger: "Pepper",
            },
            {
                value: "Potato",
                label: "Potato",
                trigger: "Potato",
            },
        ],
    },
    {
        id: "Tomato",
        message: "Thanks for letting us know about your Tomato issue. Please select the specific disease:",
        trigger: "TomatoDisease",
    },
    {
        id: "Pepper",
        message: "Thanks for letting us know about your Pepper issue. Please select the specific disease:",
        trigger: "PepperDisease",
    },
    {
        id: "Potato",
        message: "Thanks for letting us know about your Potato issue. Please select the specific disease:",
        trigger: "PotatoDisease",
    },
    {
        id: "TomatoDisease",
        options: [
            {
                value: "SeptoriaLeaf",
                label: "Septoria Leaf",
                trigger: "SeptoriaLeaf",
            },
            {
                value: "TargetSpot",
                label: "Target Spot",
                trigger: "TargetSpot",
            },
            {
                value: "YellowLeafCurlVirus",
                label: "Yellow Leaf Curl Virus",
                trigger: "YellowLeafCurlVirus",
            },
            {
                value: "MosaicVirus",
                label: "Mosaic Virus",
                trigger: "MosaicVirus",
            },
            {
                value: "TwoSpottedSpiderMites",
                label: "Two-Spotted Spider Mites",
                trigger: "TwoSpottedSpiderMites",
            },
        ],
    },
    {
        id: "PepperDisease",
        options: [
            {
                value: "BacterialSpot",
                label: "Bacterial Spot",
                trigger: "BacterialSpot",
            },
        ],
    },
    {
        id: "PotatoDisease",
        options: [
            {
                value: "EarlyBlight",
                label: "Early Blight",
                trigger: "EarlyBlight",
            },
            {
                value: "LateBlight",
                label: "Late Blight",
                trigger: "LateBlight",
            },
        ],
    },
    {
        id: "SeptoriaLeaf",
        message: "Thanks for reporting Septoria Leaf in your Tomato plants. Our team will address this issue promptly.",
        end: true,
    },
    {
        id: "TargetSpot",
        message: "Thanks for reporting Target Spot in your Tomato plants. Our team will address this issue promptly.",
        end: true,
    },
    {
        id: "YellowLeafCurlVirus",
        message: "Thanks for reporting Yellow Leaf Curl Virus in your Tomato plants. Our team will address this issue promptly.",
        end: true,
    },
    {
        id: "MosaicVirus",
        message: "Thanks for reporting Mosaic Virus in your Tomato plants. Our team will address this issue promptly.",
        end: true,
    },
    {
        id: "TwoSpottedSpiderMites",
        message: "Thanks for reporting Two-Spotted Spider Mites in your Tomato plants. Our team will address this issue promptly.",
        end: true,
    },
    {
        id: "BacterialSpot",
        message: "Thanks for reporting Bacterial Spot in your Pepper plants. Our team will address this issue promptly.",
        end: true,
    },
    {
        id: "EarlyBlight",
        message: "Thanks for reporting Early Blight in your Potato plants. Our team will address this issue promptly.",
        end: true,
    },
    {
        id: "LateBlight",
        message: "Thanks for reporting Late Blight in your Potato plants. Our team will address this issue promptly.",
        end: true,
    },
];