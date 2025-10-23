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
async function init() {
    try {
        const response = await fetch('data.json');
        useCases = await response.json();
        populateUseCaseSelector();
        attachEventListeners();
    } catch (error) {
        console.error('Error loading data:', error);
        alert('Chyba pri načítaní dát. Skontroluj, či je data.json prístupný.');
    }
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
