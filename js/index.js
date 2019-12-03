  // GLOBAL

  // let result = document.getElementById(`resultArt`);
  let masterBachelor = document.getElementById(`macBacFld`);
  // let number = document.getElementById(`numberTxt`).value;
  //let name = document.getElementById(`nameTxt`).value;
  //let department = document.getElementById(`departmentTxt`).value;
  //let hours = document.getElementById(`hoursTxt`).value;
  // let month = document.getElementById(`monthSlct`).value;
  // let type = document.getElementById(`typeRdo`).value;
  let calculate = document.getElementById(`calcBtn`);
  // let regular = document.getElementById(`regularRdo`);
  // let faculty = document.getElementById(`facultyRdo`);
  // let magister = document.getElementById(`masterRdo`);
  // let bachelor = document.getElementById(`bachelorRdo`);
  const regularMinWorkHourMonthly = 160;
  const regularAllowance = 2500;
  const masterSalaryPerHour = 175;
  const bachelorSalaryPerHour = 100;
  const masterAllowance = 1500;
  const bachelorAllowance = 600; 
  const incomeTax = 0.25;


  // FUNCTION
function calculateWorkDay(){
  let startWork = document.getElementById(`workStartDate`).value;
  let endWork = document.getElementById(`workEndDate`).value;
  let subDayStart = startWork.substring(8,10);
  let subDayEnd = endWork.substring(8,10);
  let subMonthStart = startWork.substring(5,7);
  let subMonthEnd = endWork.substring(5,7);
  let subYearStart = startWork.substring(0,4);
  let subYearEnd = endWork.substring(0,4);

  let numberWorkDays = subDayEnd-subDayStart;
  let numberWorkMonths = subMonthEnd-subMonthStart;
  let numberWorkYears = subYearEnd-subYearStart;
 
// console.log(`Working Days ${subYearStart} working days ${subYearEnd}`);
  // if (test1>test2){
  //   console.log(`>`);
  // } else {
  //   console.log(`<`);
  // }
}

function isRegularFacultyChecked(){
  let regular = document.getElementById(`regularRdo`);
  // let faculty = document.getElementById(`facultyRdo`);

  if (regular.checked == true){
    console.log(`Regular is checked `);
  }else{
    // console.log(`Faculty is checked `);
  }
}

const domRadios = document.querySelectorAll('[name="radioOnOrOff"]')
domRadios.forEach(radioBtn => {
  radioBtn.addEventListener('change', event => {
    
    // console.log(event.target.value);
    if (event.target.value == "1") {
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
      <input type="radio" name="radioOnOrOff1" value="0" id="bachelorRdo" class="radio">
      <label for="bachelorRdo" class="radio-btn">Bachelor</label>
  </label>                  
  <label class="option">
    <input type="radio" name="radioOnOrOff1" value="1" id="masterRdo" class="radio"> 
    <span class="radio-btn">Master</span>
  </label></fieldset>
`;
  const domRadios1 = document.querySelectorAll('[name="radioOnOrOff1"]')
  domRadios1.forEach(radioBtn => {
    radioBtn.addEventListener('change', event => {
      console.log(event.target.value);
      if (event.target.value == "0") {
      // alert(`Bachelor is checked`);
      let facultyBachelorNetSalary = calculateFacultyBachelorSalary();
      console.log(`Bachelor Net Salary ${facultyBachelorNetSalary.toFixed(2)}`);

      } else {
  
        // alert(`Master is checked`);
        let facultyMasterNetSalary = calculateFacultyMasterSalary();
        console.log (`Master Net Salary ${facultyMasterNetSalary.toFixed(2)}`);

      }
    })
  })

}


function calculateSalary(){
  let result = document.getElementById(`resultArt`);
  let number = document.getElementById(`numberTxt`).value;
  let name = document.getElementById(`nameTxt`).value;
  let department = document.getElementById(`departmentSlct`).value;
  // let hours = document.getElementById(`hoursTxt`).value;
  let month = document.getElementById(`monthSlct`).value;
  // let regular = document.getElementById(`regularRdo`);
  // let faculty = document.getElementById(`facultyRdo`);

  isRegularFacultyChecked();
  // const domRadios = document.querySelectorAll('[name="radioOnOrOff"]');



result.innerHTML = `Number :${number} Name :${name} Dept :${department} Hours ${hours} Month :${month} `;
// document.getElementById(`resultArt`).innerHTML = number;


//alert(`numb ${number.value}`);

}

function calculateRegularProrated(){
  let regularProrated = regularAllowance / regularMinWorkHourMonthly;
  // console.log(`Hourly Rate ${regularProrated}`); $15.625
  return regularProrated;
}

function calculateRegularSalary(){
  let hours = document.getElementById(`hoursTxt`).value;
  let regularProrated = calculateRegularProrated();
  let regularGrossSalary = (hours * regularProrated);
  let regularNetSalary = regularGrossSalary-(regularGrossSalary * incomeTax);
  let doubleProratedRegularGrossSalary = (hours-regularMinWorkHourMonthly)*(regularProrated * 1)+regularGrossSalary; 
  let doubleProratedRegularNetSalary = doubleProratedRegularGrossSalary-(doubleProratedRegularGrossSalary * incomeTax);

  if(hours <= regularMinWorkHourMonthly){
    console.log(` Gross Salary${regularGrossSalary.toFixed(2)} Net Salary ${regularNetSalary.toFixed(2)}`);
  }else { 
    console.log(` Gross Salary double prorated ${doubleProratedRegularGrossSalary.toFixed(2)} Net Salary double prorated ${doubleProratedRegularNetSalary.toFixed(2)}`);
  }
}

function calculateFacultyMasterSalary(){
  let hours = document.getElementById(`hoursTxt`).value; 
  let facultyMasterGrossSalary = masterAllowance + (masterSalaryPerHour * hours);
  let facultyMasterNetSalary = facultyMasterGrossSalary - (facultyMasterGrossSalary * incomeTax);
  //console.log(facultyMasterNetSalary);
  return facultyMasterNetSalary;
}

function calculateFacultyBachelorSalary(){
  let hours = document.getElementById(`hoursTxt`).value; 
  let facultyBachelorGrossSalary = bachelorAllowance + (bachelorSalaryPerHour * hours);
  let facultyBachelorNetSalary = facultyBachelorGrossSalary - (facultyBachelorGrossSalary * incomeTax);
  // console.log(facultyBachelorNetSalary);
  return facultyBachelorNetSalary;
}


// EXE
calculate.addEventListener("click",isRegularFacultyChecked);
