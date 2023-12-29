export const Fertilizers = []

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
      message: "Fertilizer : liquid fungicide fertilizers with a higher potassium content, like a 10-10-20 NPK mix. Potassium boosts plant immunity. Reason :-To treat Tomato Septoria leaf spot, start by removing infected leaves, ensuring good air circulation, and avoiding overhead watering. Use fungicides containing copper or chlorothalonil. Rotate crops yearly and mulch to reduce soil splash..",
      end: true,
    },
    {
      id: "TargetSpot",
      message: "Reason ; Tomato Target Spot is a fungal disease that causes dark spots with concentric rings on tomato leaves. To treat it, remove affected leaves, ensure good air circulation, and avoid overhead watering. Use fungicides if necessary.Fertilizer: All purpose  fertilizer For fertilizer, choose one with balanced nutrients like a 10-10-10 or 14-14-14 mix. Ensure it contains essential elements like nitrogen, phosphorus, and potassium for overall plant health. Apply according to package instructions.",
      end: true,
    },
    {
      id: "YellowLeafCurlVirus",
      message: "Resaon :Tomato Yellow Leaf Curl Virus (TYLCV) is mainly managed through preventive measures. Use disease-resistant tomato varieties, control whiteflies (virus carriers), and promptly remove infected plants. Fertilizer : fertilizers, choose a balanced fertilizer with slightly higher potassium, like a 10-10-20 mix, to support plant health and resilience. Ensure proper watering and soil health for overall disease prevention.",
      end: true,
    },
    {
      id: "MosaicVirus",
      message: "Reason : The Tomato Mosaic Virus (ToMV) is mainly managed through prevention. To prevent its occurrence, practice good hygiene, use disease-resistant tomato varieties, and control insect vectors. Unfortunately, there's no cure once a plant is infected.Fertilizer : NPK 19-19-19 For fertilizer, focus on balanced options like a complete fertilizer with equal parts nitrogen, phosphorus, and potassium. Additionally, ensure your plants get sufficient micronutrients like boron and zinc. Adjust based on soil test results for specific nutrient needs.",
      end: true,
    },
    {
      id: "TwoSpottedSpiderMites",
      message: "Fertilizer :Happy plant  fertilizer For fertilizing tomatoes, a balanced fertilizer with a ratio like 10-10-10 or 14-14-14 works well. Ensure it contains essential nutrients like nitrogen, phosphorus, and potassium.Reson :To treat Two-Spotted Spider Mites on tomatoes, try using insecticidal soap or neem oil, which are effective against these pests. Apply it to the affected plants according to the product instructions.",
      end: true,
    },
    {
      id: "BacterialSpot",
      message: "Fertilizer:Copper sprays can be used to control bacterial leaf spot.Reason :caused by Xanthomonas campestris pv. vesicatoria, is the most common foliar disease of pepper",
      end: true,
    },
    {
      id: "EarlyBlight",
      message: "Fertilizer: High nitrogen and low phosphorous fertilizer levels result in reduced early blight severity (1,13).Reason:primarily a disease of stressed or senescing plants.",
      end: true,
    },
    {
      id: "LateBlight",
      message: "Fertilizer: Dithane (mancozeb) .Reason: Late blight is caused by the fungal-like oomycete pathogen Phytophthora infestans",
      end: true,
    },
  ];