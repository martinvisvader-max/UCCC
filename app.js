// Data embedded directly to avoid CORS issues when running locally
const USE_CASES_DATA = [
  {
    "id": 1,
    "name": "Personalized Abandoned Cart Email",
    "description": "When customers abandon their shopping basket, a personalized message is sent with items they left in the cart to encourage conversion",
    "primaryGoals": "Conversion and Revenue",
    "benchmark": {
      "description": "Conversion Rate of AC",
      "value": 1.74,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "count customers_with cart_update in the last 14 days that have no purchase in the last 14 days and are email subscribed",
        "defaultValue": 15000,
        "label": "Number of customers with abandoned carts"
      },
      {
        "id": "metric2",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x metric2 x benchmark x coefficient",
    "period": "14 days",
    "story": "In the last 14 days, around {metric1} email-subscribed customers added items to their shopping cart but didn't complete the purchase.\nBased on Bloomreach and industry benchmarks, personalized abandoned cart emails typically achieve an average conversion rate of around 1.7%.\nThat means approximately {conversions} customers could be converted directly through this campaign.\nWith an average order value of ${metric2}, this represents about ${result} in recovered revenue every 14 days — or roughly ${annualRevenue} annually, generated automatically through triggered, personalized messages.\nBeyond the immediate conversion impact, these campaigns also tend to lift average order value by ~15%, as customers often complete larger purchases when reminded of their cart.\nThis makes the abandoned cart flow not just a recovery tactic, but a consistent driver of incremental margin and improved customer experience.\nOne simple reminder email can recover lost revenue, boost AOV, and strengthen purchase intent — all without additional marketing spend.\n(Source: Bluecore Retail Email Benchmark Report)"
  },
  {
    "id": 2,
    "name": "Abandoned Cart Email with Recommendations",
    "description": "When customers abandon their shopping basket, a personalized message is sent with items they left in the cart + reco items to encourage conversion.",
    "primaryGoals": "Conversion and Revenue",
    "benchmark": {
      "description": "Conversion Rate of AC",
      "value": 1.74,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "count customers_with cart_update in the last 14 days that have no purchase in the last 14 days and are email subscribed",
        "defaultValue": 15000,
        "label": "Number of customers with abandoned carts"
      },
      {
        "id": "metric2",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1.08,
    "formula": "metric1 x metric2 x benchmark x coefficient",
    "period": "14 days",
    "story": "In the last 14 days, around {metric1} customers added products to their cart but didn't complete the purchase.\nBased on Bloomreach benchmarks, abandoned cart emails that include a product recommendation block perform on average ~8% better than those without recommendations.\nThat means your existing abandoned cart flow could generate 8% more conversions and recovered revenue, translating into approximately ${result} in additional sales every 14 days — or about ${annualRevenue} annually.\nWith an average order value of ${metric2}, the uplift comes entirely from smarter personalization — not higher media spend.\nBy adding relevant product recommendations, you help customers rediscover interest, reduce drop-off, and turn abandoned sessions into completed checkouts.\nA small creative upgrade — one recommendation block — can lift conversion by 8% and unlock hundreds of thousands in incremental revenue."
  },
  {
    "id": 3,
    "name": "Abandoned Browse Flow",
    "description": "By sending personalized emails to customers who've browsed at least 1 item in the last X days but have not added to cart nor have purchased, this flow re-engages visitors and reminds them of viewed products.",
    "primaryGoals": "Conversion and Revenue",
    "benchmark": {
      "description": "Conversion Rate of Abandoned Browse campaign",
      "value": 0.92,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "count customers with at least 1 view item in the last 14 days that have no purchase in the last 90 days and are email subscribed",
        "defaultValue": 45000,
        "label": "Number of customers who browsed but didn't purchase"
      },
      {
        "id": "metric2",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x metric2 x benchmark x coefficient",
    "period": "14 days",
    "story": "In the last 90 days, around {metric1} email-subscribed visitors viewed at least one product but didn't add anything to their cart or complete a purchase.\nBased on Bloomreach benchmarks, personalized abandoned-browse emails convert about 0.4% of these visitors into buyers.\nThat means approximately {conversions} additional purchases directly attributed to this flow.\nWith an average order value of ${metric2}, this represents roughly ${result} in incremental recovered revenue — achieved automatically through personalized follow-ups.\nA gentle reminder about viewed items can re-ignite interest, recover lost opportunities, and drive incremental sales — with no added media spend."
  },
  {
    "id": 4,
    "name": "Welcome Flow",
    "description": "A sequence of personalized welcome communications sent to new subscribers or customers, introducing the brand and driving initial engagement.",
    "primaryGoals": "Drive new subscribers to first purchase - Conversion and Revenue",
    "benchmark": {
      "description": "Welcome flow Conversion rate",
      "value": 4.20,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "Count customers that had their first consent event accept for emailing in the last 90 days but did not purchase",
        "defaultValue": 490,
        "label": "Number of new subscribers without purchase"
      },
      {
        "id": "metric2",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x metric2 x benchmark x coefficient",
    "period": "90 days",
    "story": "In the last 90 days, around {metric1} new subscribers gave consent to receive marketing emails but haven't yet made their first purchase.\nBased on Bloomreach benchmarks and case studies such as DFS, brands implementing a personalized welcome flow typically achieve an average conversion rate of around 3.9–4.2% from new subscribers to first purchase.\nThat means approximately {conversions} new customers converting directly through this flow.\nWith an average order value of ${metric2}, this represents roughly ${result} in incremental revenue every 90 days — and more importantly, builds a foundation for long-term engagement and higher lifetime value.\nA well-designed welcome flow doesn't just convert new subscribers — it sets the tone for loyalty and repeat behavior from day one."
  },
  {
    "id": 5,
    "name": "Post-Purchase Email With Recommendations",
    "description": "14 days after a purchase, this email sends relevant product recommendations and an voucher incentive to increase repeat purchase rate and customer lifetime value.",
    "primaryGoals": "Conversion and Revenue + purchase frequency",
    "benchmark": {
      "description": "Increase of RPR (repurchase rate) with post-purchase email",
      "value": 10.00,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "Number of total unique buyers in the last 90 days and are subscribers",
        "defaultValue": 10000,
        "label": "Total unique buyers (subscribed)"
      },
      {
        "id": "metric2",
        "description": "Number of buyers with 2+ purchases in the last 90 days",
        "defaultValue": 2000,
        "label": "Repeat buyers"
      },
      {
        "id": "metric3",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1,
    "formula": "repeat customers / total buyers * benchmark * AOV",
    "period": "90 days",
    "story": "In the last 90 days, you had around {metric1} buyers, of which {metric2} (20%) made at least one repeat purchase.\nBased on Bloomreach and industry benchmarks, post-purchase emails with personalized product recommendations typically drive a ~10% uplift in repurchase rate — with ranges observed between 10–25%.\nThat means roughly +{conversions} additional returning buyers.\nWith an average order value of ${metric3}, this translates into approximately ${result} in incremental revenue every 90 days, or close to $90–100K per year — achieved automatically through triggered personalization.\nOne simple follow-up after purchase can meaningfully lift repeat behavior and customer lifetime value — without additional media spend."
  },
  {
    "id": 6,
    "name": "Post-Purchase NPS Flow",
    "description": "An automated NPS survey email sent after a purchase to capture customer feedback and enhance loyalty while the experience is fresh.",
    "primaryGoals": "Retention and CX",
    "benchmark": {
      "description": "Submission rate of post-purchase NPS emails",
      "value": 15.00,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "Number of total unique buyers in the last 90 days and are subscribers",
        "defaultValue": 10000,
        "label": "Total unique buyers (subscribed)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x benchmark",
    "period": "90 days",
    "story": "In the last 90 days, around {metric1} buyers completed a purchase and are active email subscribers — each representing an opportunity to capture valuable post-purchase insights.\nWhen brands implement an automated post-purchase NPS survey email, they typically see an average submission rate of around 15% (with benchmarks ranging between 12–25%).\nThat means roughly {result} customers sharing direct feedback while their experience is still fresh — providing a steady stream of zero-party data.\nThis information goes far beyond a satisfaction score: it gives you explicit customer preferences, sentiment, and motivation signals that can feed directly into your personalization engine.\nWith every response, you enrich customer profiles and gain new datapoints for targeting, segmentation, and tailored messaging, which in turn drive better customer experiences and higher engagement across future campaigns.\nA simple NPS email doesn't just measure satisfaction — it builds your zero-party data foundation and fuels smarter personalization."
  },
  {
    "id": 7,
    "name": "Birthday Campaign",
    "description": "A timed campaign around a customer's birthday, often including a greeting and special offer to boost loyalty and engagement.",
    "primaryGoals": "Conversion and Revenue",
    "benchmark": {
      "description": "Conversion rate of birthday campaign",
      "value": 0.72,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "Count customers with birthday in the last 90 days that are email subscribers",
        "defaultValue": 2153,
        "label": "Number of customers with birthdays"
      },
      {
        "id": "metric2",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x metric2 x benchmark x coefficient",
    "period": "90 days",
    "story": "In the last 90 days, around {metric1} email-subscribed customers had their birthday recorded in your database — each representing a chance to create a personalized, emotional touchpoint.\nBased on Bloomreach and industry benchmarks, birthday campaigns typically achieve an average conversion rate of around 0.7%, turning celebration moments into incremental revenue.\nThat means roughly {conversions} customers converting directly through this campaign.\nWith an average order value of ${metric2}, this represents about ${result} in incremental revenue every 90 days, driven entirely by automated, personalized messages.\nBeyond direct conversions, birthday emails also strengthen emotional connection and brand loyalty, helping you retain high-value customers and collect additional engagement data for future personalization.\nA simple 'happy birthday' email can generate incremental revenue, strengthen loyalty, and expand your zero-party data foundation — all at zero extra cost."
  },
  {
    "id": 8,
    "name": "Purchase Anniversary Recommendations",
    "description": "A campaign timed to the anniversary of a past purchase, offering personalized product recommendations to re-engage the customer.",
    "primaryGoals": "Conversion and Revenue",
    "benchmark": {
      "description": "Conversion rate of purchase anniversary campaign",
      "value": 0.80,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "Count customers that are email subscribers and have purchased for the first time last year (last 30 days before 335 days)",
        "defaultValue": 6990,
        "label": "Customers with purchase anniversary"
      },
      {
        "id": "metric2",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x metric2 x benchmark x coefficient",
    "period": "90 days",
    "story": "In the last 90 days, around {metric1} email-subscribed customers reached the anniversary of their first purchase — a perfect moment to reconnect with personalized product recommendations.\nBased on Bloomreach and industry benchmarks, purchase anniversary campaigns typically achieve an average conversion rate of around 0.8% (with results often ranging between 0.8–1.5%).\nThat means approximately {conversions} customers converting directly through this campaign.\nWith an average order value of ${metric2}, this represents roughly ${result} in incremental revenue every 90 days — or about ${annualRevenue} annually, generated automatically through personalized, emotionally timed communication.\nBeyond the immediate sales impact, these messages help reignite customer relationships, reminding past buyers of your brand and driving long-term loyalty and repeat purchases.\nA simple anniversary message can reawaken lapsed customers, strengthen brand affinity, and deliver measurable incremental revenue — with zero additional acquisition cost."
  },
  {
    "id": 9,
    "name": "Reactivation Campaign for 'Lapsing' and 'Lapsed' Subscribers",
    "description": "A campaign targeting subscribers who are becoming inactive (lapsing) or already inactive (lapsed) to win them back with relevant offers.",
    "primaryGoals": "Get customers to active subs + Conversion and Revenue",
    "benchmark": {
      "description": "Conversion rate of reengagement email campaign",
      "value": 0.21,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "Number of lapsing and lapsed subscribers",
        "defaultValue": 16580,
        "label": "Lapsing/Lapsed subscribers"
      },
      {
        "id": "metric2",
        "description": "Average revenue of Lapsing/Lapsed subscriber in 90 days",
        "defaultValue": 81,
        "label": "Avg revenue - Lapsing/Lapsed ($)"
      },
      {
        "id": "metric3",
        "description": "Average revenue of active subscriber in 90 days",
        "defaultValue": 145,
        "label": "Avg revenue - Active ($)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x benchmark x (metric3 - metric2) x coefficient",
    "period": "90 days",
    "story": "In the last 90 days, around {metric1} subscribers have been identified as lapsing or lapsed — meaning they're at risk of completely disengaging from your brand.\nBased on industry benchmarks, reengagement email campaigns typically achieve a conversion rate of around 0.21%, bringing a portion of these inactive subscribers back into the active fold.\nThat means approximately {conversions} reactivated subscribers.\nThe difference in average revenue between an active subscriber (${metric3}) and a lapsing/lapsed one (${metric2}) is ${revenueDiff} per subscriber over 90 days.\nBy reactivating these subscribers, you unlock approximately ${result} in incremental revenue every 90 days — or roughly ${annualRevenue} annually.\nThis campaign not only recovers lost revenue but also improves list health, engagement metrics, and long-term customer lifetime value."
  },
  {
    "id": 10,
    "name": "Reactivation Campaign for Disengaged Email Subscribers",
    "description": "A targeted email campaign aimed at subscribers who haven't engaged with recent emails, to re-activate their interest.",
    "primaryGoals": "Repurchase rate of churning customers LTV + Conversion and Revenue",
    "benchmark": {
      "description": "Conversion rate of repurchase/antichurn email campaign",
      "value": 0.17,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "Customers that have not purchased in the last 180 days but purchased in the last 180 before 270 days and are email subscribers",
        "defaultValue": 16872,
        "label": "Disengaged email subscribers"
      },
      {
        "id": "metric2",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x metric2 x benchmark x coefficient",
    "period": "180 days",
    "story": "In the last 180 days, around {metric1} email subscribers have not made a purchase — but they did purchase in the prior period, making them ideal candidates for a win-back campaign.\nBased on Bloomreach and industry benchmarks, repurchase/antichurn email campaigns typically achieve a conversion rate of around 0.17% (with ranges between 0.17–0.3%).\nThat means approximately {conversions} customers re-engaging and making a purchase.\nWith an average order value of ${metric2}, this represents roughly ${result} in incremental recovered revenue every 180 days — or about ${annualRevenue} annually.\nBeyond the immediate sales impact, reactivating disengaged subscribers helps improve list health, reduce churn, and rebuild long-term customer relationships.\nA well-timed win-back campaign can turn dormant subscribers into active buyers again — with minimal cost and maximum ROI."
  },
  {
    "id": 11,
    "name": "Automated Favorite Brand Newsletter With New Items",
    "description": "An automated newsletter sent when new items from a customer's favourite brand become available, to drive engagement and sales.",
    "primaryGoals": "Conversion and Revenue",
    "benchmark": {
      "description": "Conversion of personalized newsletter with recommendations (new items)",
      "value": 0.25,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "Count email subscribers that have viewed or purchased something in the last 180 days",
        "defaultValue": 19200,
        "label": "Active email subscribers"
      },
      {
        "id": "metric2",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x metric2 x benchmark x coefficient",
    "period": "14 days",
    "story": "In the last 180 days, around {metric1} email subscribers have actively viewed or purchased products — making them highly engaged and receptive to personalized content.\nWhen you send an automated newsletter featuring new items from each customer's favorite brand, benchmarks suggest a conversion rate of around 0.25% (with typical ranges between 0.3–0.6%).\nThat means approximately {conversions} customers converting directly through this campaign.\nWith an average order value of ${metric2}, this represents about ${result} in incremental revenue every 14 days — or roughly ${annualRevenue} annually.\nBeyond the immediate sales impact, this approach strengthens brand affinity, keeps your catalog top-of-mind, and positions your emails as valuable rather than interruptive.\nA personalized newsletter that delivers exactly what customers want to see can drive consistent incremental revenue and deepen long-term engagement."
  },
  {
    "id": 12,
    "name": "Automated Newsletter for New Items of Interest",
    "description": "An automated newsletter that delivers new product items tailored to each customer's interests or browsing/purchase history.",
    "primaryGoals": "Conversion and Revenue",
    "benchmark": {
      "description": "Conversion of personalized newsletter with recommendations (new items)",
      "value": 0.25,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "Count email subscribers that have viewed or purchased something in the last 180 days",
        "defaultValue": 19200,
        "label": "Active email subscribers"
      },
      {
        "id": "metric2",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x metric2 x benchmark x coefficient",
    "period": "14 days",
    "story": "In the last 180 days, around {metric1} email subscribers have actively viewed or purchased products — signaling strong interest and engagement.\nWhen you send an automated newsletter featuring new items tailored to each customer's browsing and purchase history, benchmarks suggest a conversion rate of around 0.25%.\nThat means approximately {conversions} customers converting directly through this personalized campaign.\nWith an average order value of ${metric2}, this represents about ${result} in incremental revenue every 14 days — or roughly ${annualRevenue} annually.\nBy delivering content that feels handpicked for each subscriber, you increase relevance, drive higher engagement, and position your brand as deeply customer-centric.\nA smart, automated newsletter can consistently generate incremental sales while building long-term loyalty and trust."
  },
  {
    "id": 13,
    "name": "Bi-Weekly Product Recommendation Newsletter",
    "description": "A newsletter sent every two weeks featuring personalized product recommendations based on browsing and purchase behaviour.",
    "primaryGoals": "Conversion and Revenue",
    "benchmark": {
      "description": "Conversion of personalized newsletter with recommendations (general recommendations)",
      "value": 0.19,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "Count email subscribers",
        "defaultValue": 45000,
        "label": "Total email subscribers"
      },
      {
        "id": "metric2",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x metric2 x benchmark x coefficient",
    "period": "14 days",
    "story": "You currently have around {metric1} email subscribers — each representing a potential conversion opportunity through personalized communication.\nWhen you send a bi-weekly newsletter with personalized product recommendations based on browsing and purchase behavior, benchmarks suggest a conversion rate of around 0.19%.\nThat means approximately {conversions} customers converting directly through each campaign.\nWith an average order value of ${metric2}, this represents about ${result} in incremental revenue every 14 days — or roughly ${annualRevenue} annually.\nBeyond immediate sales, regular personalized newsletters keep your brand top-of-mind, drive repeat engagement, and create a consistent revenue stream without additional acquisition costs.\nA simple bi-weekly touchpoint can generate substantial incremental revenue while deepening customer relationships and loyalty."
  },
  {
    "id": 14,
    "name": "Retention Campaign for Repeat Purchasers",
    "description": "A campaign focused on customers who already purchase repeatedly, aimed at enhancing loyalty, increasing frequency and value of purchases.",
    "primaryGoals": "Conversion and Revenue + purchase frequency",
    "benchmark": {
      "description": "Conversion Rate of repurchase campaign",
      "value": 0.22,
      "unit": "%"
    },
    "metrics": [
      {
        "id": "metric1",
        "description": "Count buyers that have purchased 2+ times in the last 365 days that have not purchased in the last 90 days and are email subscribers",
        "defaultValue": 32210,
        "label": "Repeat buyers (not purchased recently)"
      },
      {
        "id": "metric2",
        "description": "AOV of email subscribers for the last 90 days",
        "defaultValue": 115,
        "label": "Average Order Value ($)"
      }
    ],
    "coefficient": 1,
    "formula": "metric1 x metric2 x benchmark x coefficient",
    "period": "90 days",
    "story": "In the last 365 days, around {metric1} email-subscribed customers have made 2+ purchases but haven't bought anything in the last 90 days — making them high-value targets for a retention campaign.\nBased on industry benchmarks, repurchase campaigns aimed at repeat buyers typically achieve a conversion rate of around 0.22%.\nThat means approximately {conversions} customers re-engaging and making another purchase.\nWith an average order value of ${metric2}, this represents about ${result} in incremental revenue every 90 days — or roughly ${annualRevenue} annually.\nRetaining repeat purchasers is far more cost-effective than acquiring new customers, and these campaigns help prevent valuable customers from slipping away.\nA timely, personalized retention campaign can reactivate high-value buyers, boost purchase frequency, and significantly increase customer lifetime value."
  }
];

// Global variables
let useCases = [];
let selectedUseCase = null;
let metricValues = {};

// DOM Elements
const useCaseSelect = document.getElementById('useCaseSelect');
const useCaseDescription = document.getElementById('useCaseDescription');
const useCaseDescriptionText = document.getElementById('useCaseDescriptionText');
const useCasePrimaryGoal = document.getElementById('useCasePrimaryGoal');
const useCasePeriod = document.getElementById('useCasePeriod');
const metricsForm = document.getElementById('metricsForm');

// Buttons
const nextToMetrics = document.getElementById('nextToMetrics');
const backToSelection = document.getElementById('backToSelection');
const calculateResults = document.getElementById('calculateResults');
const backToMetrics = document.getElementById('backToMetrics');
const startOver = document.getElementById('startOver');

// Steps
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

// Initialize app
function init() {
    // Use embedded data instead of fetch to avoid CORS issues
    useCases = USE_CASES_DATA;
    populateUseCaseSelector();
    attachEventListeners();
}

// Populate use case selector
function populateUseCaseSelector() {
    useCases.forEach(useCase => {
        const option = document.createElement('option');
        option.value = useCase.id;
        option.textContent = useCase.name;
        useCaseSelect.appendChild(option);
    });
}

// Attach event listeners
function attachEventListeners() {
    useCaseSelect.addEventListener('change', handleUseCaseSelection);
    nextToMetrics.addEventListener('click', goToMetricsStep);
    backToSelection.addEventListener('click', goToStep1);
    calculateResults.addEventListener('click', calculateAndShowResults);
    backToMetrics.addEventListener('click', goToStep2);
    startOver.addEventListener('click', resetApp);
}

// Handle use case selection
function handleUseCaseSelection() {
    const selectedId = parseInt(useCaseSelect.value);

    if (!selectedId) {
        useCaseDescription.classList.add('hidden');
        nextToMetrics.disabled = true;
        selectedUseCase = null;
        return;
    }

    selectedUseCase = useCases.find(uc => uc.id === selectedId);

    if (selectedUseCase) {
        useCaseDescriptionText.textContent = selectedUseCase.description;
        useCasePrimaryGoal.textContent = selectedUseCase.primaryGoals;
        useCasePeriod.textContent = selectedUseCase.period;
        useCaseDescription.classList.remove('hidden');
        nextToMetrics.disabled = false;
    }
}

// Navigation functions
function goToStep1() {
    setActiveStep(1);
}

function goToStep2() {
    setActiveStep(2);
}

function goToStep3() {
    setActiveStep(3);
}

function setActiveStep(stepNumber) {
    // Update step visibility
    [step1, step2, step3].forEach(step => step.classList.remove('active'));

    if (stepNumber === 1) step1.classList.add('active');
    if (stepNumber === 2) step2.classList.add('active');
    if (stepNumber === 3) step3.classList.add('active');

    // Update progress bar
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index + 1 === stepNumber) {
            step.classList.add('active');
        } else if (index + 1 < stepNumber) {
            step.classList.add('completed');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Go to metrics step
function goToMetricsStep() {
    if (!selectedUseCase) return;

    generateMetricsForm();
    goToStep2();
}

// Generate metrics form dynamically
function generateMetricsForm() {
    metricsForm.innerHTML = '';
    metricValues = {};

    selectedUseCase.metrics.forEach(metric => {
        const metricGroup = document.createElement('div');
        metricGroup.className = 'metric-group';

        const label = document.createElement('label');
        label.textContent = metric.label;
        label.htmlFor = metric.id;

        const description = document.createElement('div');
        description.className = 'metric-description';
        description.textContent = metric.description;

        const input = document.createElement('input');
        input.type = 'number';
        input.id = metric.id;
        input.name = metric.id;
        input.value = metric.defaultValue;
        input.placeholder = `Zadaj ${metric.label.toLowerCase()}`;
        input.required = true;
        input.min = 0;

        metricGroup.appendChild(label);
        metricGroup.appendChild(description);
        metricGroup.appendChild(input);
        metricsForm.appendChild(metricGroup);
    });
}

// Calculate results
function calculateAndShowResults() {
    // Gather metric values
    selectedUseCase.metrics.forEach(metric => {
        const input = document.getElementById(metric.id);
        metricValues[metric.id] = parseFloat(input.value) || 0;
    });

    // Calculate based on formula
    const result = calculateFormula();

    // Display results
    displayResults(result);
    goToStep3();
}

// Calculate formula
function calculateFormula() {
    const formula = selectedUseCase.formula.toLowerCase();
    const benchmark = selectedUseCase.benchmark.value / 100; // Convert percentage to decimal
    const coefficient = selectedUseCase.coefficient;

    let result = 0;
    let conversions = 0;
    let revenueDiff = 0;

    // Handle different formula types
    if (formula.includes('metric1 x metric2 x benchmark x coefficient')) {
        const metric1 = metricValues.metric1 || 0;
        const metric2 = metricValues.metric2 || 0;
        result = metric1 * metric2 * benchmark * coefficient;
        conversions = Math.round(metric1 * benchmark);
    }
    else if (formula.includes('repeat customers / total buyers')) {
        // Post-Purchase formula: (metric2 / metric1) * benchmark * metric3 * coefficient
        const metric1 = metricValues.metric1 || 0; // total buyers
        const metric2 = metricValues.metric2 || 0; // repeat buyers
        const metric3 = metricValues.metric3 || 0; // AOV
        const repeatRate = metric1 > 0 ? (metric2 / metric1) : 0;
        result = metric2 * benchmark * metric3 * coefficient;
        conversions = Math.round(metric2 * benchmark);
    }
    else if (formula.includes('metric1 x benchmark x (metric3 - metric2)')) {
        // Reactivation formula
        const metric1 = metricValues.metric1 || 0;
        const metric2 = metricValues.metric2 || 0;
        const metric3 = metricValues.metric3 || 0;
        revenueDiff = metric3 - metric2;
        result = metric1 * benchmark * revenueDiff * coefficient;
        conversions = Math.round(metric1 * benchmark);
    }
    else if (formula.includes('metric1 x benchmark')) {
        // NPS formula (no revenue, just count)
        const metric1 = metricValues.metric1 || 0;
        result = Math.round(metric1 * benchmark);
        conversions = result;
    }
    else {
        // Default formula
        const metric1 = metricValues.metric1 || 0;
        const metric2 = metricValues.metric2 || 0;
        result = metric1 * metric2 * benchmark * coefficient;
        conversions = Math.round(metric1 * benchmark);
    }

    return {
        revenue: result,
        conversions: conversions,
        revenueDiff: revenueDiff
    };
}

// Display results
function displayResults(calculatedResult) {
    const revenue = calculatedResult.revenue;
    const conversions = calculatedResult.conversions;

    // Calculate annual revenue based on period
    let multiplier = 1;
    const period = selectedUseCase.period.toLowerCase();

    if (period.includes('14 days') || period.includes('14 day')) {
        multiplier = 365 / 14;
    } else if (period.includes('90 days') || period.includes('90 day')) {
        multiplier = 365 / 90;
    } else if (period.includes('180 days') || period.includes('180 day')) {
        multiplier = 365 / 180;
    } else if (period.includes('365 days') || period.includes('365 day') || period.includes('year')) {
        multiplier = 1;
    }

    const annualRevenue = revenue * multiplier;

    // Update result cards
    document.getElementById('resultRevenue').textContent = formatCurrency(revenue);
    document.getElementById('resultPeriod').textContent = `za ${selectedUseCase.period}`;
    document.getElementById('resultConversions').textContent = formatNumber(conversions);
    document.getElementById('resultAnnual').textContent = formatCurrency(annualRevenue);

    // Generate and display story
    const story = generateStory(revenue, conversions, annualRevenue, calculatedResult.revenueDiff);
    document.getElementById('storyContent').textContent = story;
}

// Generate story with placeholders replaced
function generateStory(revenue, conversions, annualRevenue, revenueDiff) {
    let story = selectedUseCase.story;

    // Replace metric placeholders
    selectedUseCase.metrics.forEach(metric => {
        const value = metricValues[metric.id] || 0;
        const regex = new RegExp(`\\{${metric.id}\\}`, 'g');
        story = story.replace(regex, formatNumber(value));
    });

    // Replace calculated values
    story = story.replace(/\{result\}/g, formatCurrency(revenue));
    story = story.replace(/\{conversions\}/g, formatNumber(conversions));
    story = story.replace(/\{annualRevenue\}/g, formatCurrency(annualRevenue));

    if (revenueDiff > 0) {
        story = story.replace(/\{revenueDiff\}/g, formatCurrency(revenueDiff));
    }

    return story;
}

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(Math.round(value));
}

// Format number
function formatNumber(value) {
    return new Intl.NumberFormat('en-US').format(Math.round(value));
}

// Reset app
function resetApp() {
    selectedUseCase = null;
    metricValues = {};
    useCaseSelect.value = '';
    useCaseDescription.classList.add('hidden');
    nextToMetrics.disabled = true;
    metricsForm.innerHTML = '';
    goToStep1();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
