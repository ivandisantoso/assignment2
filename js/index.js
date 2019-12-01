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
const regularWorkingHourMonthly = 160;
const regularAllowance = 2500;
const masterSalaryPerHour = 175;
const bachelorSalaryPerHour = 100;
const masterAllowance = 1500;
const bachelorAllowance = 600; 
const incomeTax = 0.25;


// FUNCTION
function isRegularFacultyChecked(){
  let regular = document.getElementById(`regularRdo`);
  let faculty = document.getElementById(`facultyRdo`);

  if (regular.checked == true){
    console.log(`Regular is checked `);
  }else{
    console.log(`Faculty is checked `);
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
        `<fieldset id="maBacFld" hidden>
    <ul>
      <li>
        <label class="option">
          <input type="radio" name="magBacRdo" value="1" id="masterRdo" class="radio" checked> 
          <span class="faculty">Master</span>
        </label>                  
        <div class="option">
          <input type="radio" name="magBacRdo" value="0" id="bachelorRdo" class="radio">
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
      alert(`Bachelor is checked`);

      } else {
  
        alert(`Master is checked`);

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
function getHourlyRate(){

}

function calculateFacultyMasterGrossSalary(){
  let hours = document.getElementById(`hoursTxt`).value; 
  let facultyMasterGrossSalary = masterAllowance + (masterSalaryPerHour * hours);
  console.log(facultyMasterGrossSalary);
}

function calculateFacultyBachelorGrossSalary(){
  let hours = document.getElementById(`hoursTxt`).value; 
  let facultyBachelorGrossSalary = bachelorAllowance + (bachelorSalaryPerHour * hours);
  console.log(facultyBachelorGrossSalary);
}

function calculateRegularGrossSalary(){
  let hours = document.getElementById(`hoursTxt`).value;
  
}

function calculateTax(){
  let hours = document.getElementById(`hoursTxt`).value;
  let salaryTax = regularGrossSalaryHour-(regularGrossSalaryHour * incomeTax);  
  console.log (salaryTax);
}

function calculateSalaryHour(){
  // let hours = document.getElementById(`hoursTxt`).value;
  // calculateTax();
  // let salaryHour = hours*salaryTax;
  //console.log()
}

// EXE
calculate.addEventListener("click",calculateFacultyMasterGrossSalary);
