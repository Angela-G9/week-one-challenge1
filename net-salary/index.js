document.getElementById('salaryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);

    // Check if inputs are valid numbers
    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert('Please enter valid numbers for both Basic Salary and Benefits.');
        return;
    }

    // 1. Calculate Gross Salary
    const grossSalary = basicSalary + benefits;

    // 2. Calculate Tax (PAYE) based on progressive rates
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1; // 10% tax on up to 24,000
    } else if (grossSalary <= 40000) {
        tax = (grossSalary - 24000) * 0.15 + 2400; // 15% tax on the amount over 24,000
    } else if (grossSalary <= 80000) {
        tax = (grossSalary - 40000) * 0.2 + 4800; // 20% tax on the amount over 40,000
    } else if (grossSalary <= 120000) {
        tax = (grossSalary - 80000) * 0.25 + 12800; // 25% tax on the amount over 80,000
    } else {
        tax = (grossSalary - 120000) * 0.3 + 20800; // 30% tax on the amount over 120,000
    }

    // 3. Calculate NHIF Deduction based on gross salary ranges
    let nhifDeduction = 0;
    if (grossSalary <= 5999) nhifDeduction = 150;
    else if (grossSalary <= 7999) nhifDeduction = 300;
    else if (grossSalary <= 11999) nhifDeduction = 400;
    else if (grossSalary <= 14999) nhifDeduction = 500;
    else if (grossSalary <= 19999) nhifDeduction = 600;
    else if (grossSalary <= 24999) nhifDeduction = 750;
    else nhifDeduction = 800; // Deduction for salaries above 24,999

    // 4. Calculate NSSF Deduction (6% of gross salary)
    const nssfDeduction = grossSalary * 0.06;

    // 5. Calculate Net Salary after deductions
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    // Format numbers with commas for readability
    const formatCurrency = (amount) => amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Display results on the page
    document.getElementById('grossSalary').textContent = formatCurrency(grossSalary);
    document.getElementById('kraTax').textContent = formatCurrency(tax);
    document.getElementById('nhifDeduction').textContent = formatCurrency(nhifDeduction);
    document.getElementById('nssfDeduction').textContent = formatCurrency(nssfDeduction);
    document.getElementById('netSalary').textContent = formatCurrency(netSalary);

    // Show the result section
    document.getElementById('results').style.display = 'block';
});
