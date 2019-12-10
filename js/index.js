  // GLOBAL

 
  let masterBachelor = document.getElementById(`macBacFld`);
  let calculate = document.getElementById(`calcBtn`);

  const regularMinWorkHourMonthly = 160;
  const taxBreakPoint = 2500;
  const masterSalaryPerHour = 175;
  const bachelorSalaryPerHour = 100;
  const masterAllowance = 1500;
  const bachelorAllowance = 600; 
  const incomeTax = 0.25;
  const healthFeeBreakPoint = 3000;
  const highHealthSurcharge = 33;
  const lowHealthSurcharge = 19.20;


  // FUNCTION
function isRegularFacultyChecked(){
  let regular = document.getElementById(`regularRdo`);
  let faculty = document.getElementById(`facultyRdo`);

  if (regular.checked == true){
    // console.log(`Regular is checked `);
    // calculateRegularSalary();
    return {type: regular.value, grossSalary: calculateRegularSalary()};
  }else{
    // console.log(`Faculty is checked `);
    return {type: faculty.value, grossSalary: calculateFacultySalary()};
  }
  // return facultyRegular;
}

function calculateFacultySalary() {
  const qualificationCode = document.querySelector(`input[name="radioOnOrOff1"]:checked`).value;
  if (qualificationCode == 0) {
    return calculateFacultyBachelorGrossSalary();
  } else {
    return calculateFacultyMasterGrossSalary();
  }
}

const domRadios = document.querySelectorAll('[name="radioOnOrOff"]')
domRadios.forEach(radioBtn => {
  radioBtn.addEventListener('change', event => {
    
    // console.log(event.target.value);
    if (event.target.value == "Faculty") {
      renderMasterBachelorRadio();
    } else {
      masterBachelor.innerHTML =
        `<fieldset id="macBacFld" hidden>
    <ul>
      <li>
        <label class="option">
          <input type="radio" name="macBacRdo" value="1" id="masterRdo" class="radio" checked> 
          <span class="faculty">Master</span>
        </label>                  
        <div class="option">
          <input type="radio" name="macBacRdo" value="0" id="bachelorRdo" class="radio">
          <label class="radio-btn">Bachelor</label>
        </div>
      </li>
    </ul>
  </fieldset>`;
    }
  })
})

function renderMasterBachelorRadio(){

  masterBachelor.innerHTML =
    `<fieldset id="macBacFld">
  <label class="option">
      <input type="radio" name="radioOnOrOff1" value="0" id="bachelorRdo" class="radio" checked>
      <label for="bachelorRdo" class="radio-btn">Bachelor</label>
  </label>                  
  <label class="option">
    <input type="radio" name="radioOnOrOff1" value="1" id="masterRdo" class="radio"> 
    <span class="radio-btn">Master</span>
  </label></fieldset>
`;
}

function calculateProratedRegular(){
  let proratedRegular = taxBreakPoint / regularMinWorkHourMonthly;
  // console.log(`Hourly Rate ${proratedRegular}`);
  return proratedRegular;

}

function calculateProratedRegularGrossSalary(){
  let hours = document.getElementById(`hoursTxt`).value;
  // let result = document.getElementById(`resultArt`);
  let proratedRegular = calculateProratedRegular();
  // let allowance1 = generatePaySlip();
 
  let proratedRegularSalary = (hours * proratedRegular);
  // allowance1 = proratedRegularSalary;
  return proratedRegularSalary;
  console.log(`Regular prorated no tax ${proratedRegularSalary}`);
  // return proratedRegularSalary;
}



function calculateDoubleProratedRegularGrossSalary(){
  let hours = document.getElementById(`hoursTxt`).value;
  let proratedRegular = calculateProratedRegular();
  let proratedRegularSalary = calculateProratedRegularGrossSalary();
  let doubleProratedRegularGrossSalary = ((hours-regularMinWorkHourMonthly) * proratedRegular) + proratedRegularSalary;
  // let taxDoubleProratedRegularGrossSalary = doubleProratedRegularGrossSalary * incomeTax;
  let taxDoubleProratedRegularGrossSalary = calculateTax(doubleProratedRegularGrossSalary);//doubleProratedRegularGrossSalary
  if (doubleProratedRegularGrossSalary >= taxBreakPoint){
    
    console.log(`Regular Double Prorated Tax ${taxDoubleProratedRegularGrossSalary}`); //taxDoubleProratedRegularGrossSalary
    return taxDoubleProratedRegularGrossSalary;
  } else{

    console.log(`Regular Double Prorated NO tax ${doubleProratedRegularGrossSalary}`);
  }
}

function calculateRegularSalary(){
  let hours = document.getElementById(`hoursTxt`).value;
  
  if(hours <= regularMinWorkHourMonthly){
    return calculateProratedRegularGrossSalary(); //ok
    // return {tax: calculateTax(), grossSalary: calculateProratedRegularGrossSalary()};
    //console.log(` Gross Salary${regularGrossSalary.toFixed(2)} Net Salary ${regularNetSalary.toFixed(2)}`);
  }else { 
    return calculateDoubleProratedRegularGrossSalary();
    // console.log(` Gross Salary double prorated ${doubleProratedRegularGrossSalary.toFixed(2)} Net Salary double prorated ${doubleProratedRegularNetSalary.toFixed(2)}`);
    // return doubleProratedRegularGrossSalary;
  }
}

function calculateFacultyMasterGrossSalary(){
  let hours = document.getElementById(`hoursTxt`).value; 
  let facultyMasterGrossSalary = masterAllowance + (masterSalaryPerHour * hours);
  // let taxFacultyMasterGrossSalary = facultyMasterGrossSalary * incomeTax;
  // console.log(`Master Gross Tax${taxFacultyMasterGrossSalary}`);
  let taxFacultyMasterGrossSalary = calculateTax(facultyMasterGrossSalary);
  if (facultyMasterGrossSalary >= taxBreakPoint){
    console.log(`Master Pay with tax ${taxFacultyMasterGrossSalary}`);
    return taxFacultyMasterGrossSalary;
  } else{
    console.log(`Master Pay no tax ${facultyMasterGrossSalary}`);
    return facultyMasterGrossSalary;
  }

}


function calculateFacultyBachelorGrossSalary(){
  let hours = document.getElementById(`hoursTxt`).value; 
  let facultyBachelorGrossSalary = bachelorAllowance + (bachelorSalaryPerHour * hours);
  // let taxFacultyBachelorGrossSalary = facultyBachelorGrossSalary * incomeTax;
  // console.log(`Bachelor Gross ${facultyBachelorGrossSalary}`);
  let taxFacultyBachelorGrossSalary = calculateTax(facultyBachelorGrossSalary);
  if (facultyBachelorGrossSalary >= taxBreakPoint){
    console.log(`Bachelor Pay with tax ${taxFacultyBachelorGrossSalary}`);
    return taxFacultyBachelorGrossSalary;
  } else{

    console.log(`Bachelor Pay NO tax ${facultyBachelorGrossSalary}`);
    return facultyBachelorGrossSalary;
  }
}

function calculateTax(grossSalary){
  let tax = grossSalary * incomeTax;
  let taxGrossSalary = grossSalary - tax
  console.log(` Tax ${tax}`);
  return taxGrossSalary;
}

function calculateHealthSurcharge(taxGrossSalary){
  // let taxDoubleProratedRegularGrossSalary = calculateDoubleProratedRegularGrossSalary();
  // let taxFacultyBachelorGrossSalary = calculateFacultyBachelorGrossSalary();
  // let taxFacultyMasterGrossSalary = calculateFacultyMasterGrossSalary();
  let highHealthSurchargeFee = taxGrossSalary-highHealthSurcharge;
  let lowHealthSurchargeFee = taxGrossSalary-lowHealthSurcharge;

  if (taxGrossSalary > healthFeeBreakPoint){
    console.log(`Net Salary ${highHealthSurchargeFee} after HIGH Health Surcharge`);
    
  }else{
    console.log(`Net Salary ${lowHealthSurchargeFee} after LOW Health Surcharge`);
    
  }
}

function generatePaySlip(){
  let result = document.getElementById(`resultArt`);
  let number = document.getElementById(`numberTxt`).value;
  let name = document.getElementById(`nameTxt`).value;
  let department = document.getElementById(`departmentSlct`).value;
  let hours = document.getElementById(`hoursTxt`).value;
  let employeeType = isRegularFacultyChecked();
 
  
  // console.log(taxSalary);
result.innerHTML = 
`<ul class="col1">
<li><label>Employee Number</label></li>
<li><label>Name</label></li>
<li class="sub-header"><label>Description</label></li>
<li><label>Number of hours worked</label></li>
<li><label>Salary after tax</label></li>
<li><label>Canadian Income Tax</label></li>
<li><label>Health Surcharge Fee</label></li>
<li><label>Net Salary</label></li>
</ul>
<ul class="col2">
<li><label>&nbsp${number}</label></li>
<li><label>${name}</label></li>
</ul>
<ul class="col3">
<li><label>Department</label></li>
<li><label>Employee Type</label></li>
<li class="sub-header"><label>Earnings</label></li>
<li><label>${hours} hours</label></li>
<li><label>$ ${employeeType.grossSalary.toFixed(2)}</label></li>
<li><label>&nbsp</label></li>
<li><label>&nbsp</label></li>
<li><label>$ net?</label></li>
</ul>
<ul class="col4">
<li><label>${department}</label></li>
<li><label>${employeeType.type}</label></li>
<li class="sub-header"><label>Deduction</label></li>
<li><label>&nbsp</label></li>
<li><label>&nbsp</label></li>
<li><label>$ tax?</label></li>
<li><label>$ health surcharge?</label></li>
<li><label>$ net?</label></li>
</ul>`

}

// EXE
calculate.addEventListener("click",generatePaySlip);
