// GLOBAL

// let result = document.getElementById(`resultArt`);
let magisterBachelor = document.getElementById(`magBacFld`);
// let number = document.getElementById(`numberTxt`).value;
//let name = document.getElementById(`nameTxt`).value;
//let department = document.getElementById(`departmentTxt`).value;
//let hours = document.getElementById(`hoursTxt`).value;
// let month = document.getElementById(`monthSlct`).value;
// let type = document.getElementById(`typeRdo`).value;
let calculate = document.getElementById(`calcBtn`);
// let regular = document.getElementById(`regularRdo`);
// let faculty = document.getElementById(`facultyRdo`);
let magister = document.getElementById(`magisterRdo`);
let bachelor = document.getElementById(`bachelorRdo`);


// FUNCTION
function isRegularFacultyChecked(){
  let regular = document.getElementById(`regularRdo`);
  let faculty = document.getElementById(`facultyRdo`);

  if (regular.checked == true){
    console.log(`Regular is checked`);
  }else{
    console.log(`Faculty is checked`);
  }
}



const domRadios = document.querySelectorAll('[name="radioOnOrOff"]')
domRadios.forEach(radioBtn => {
  radioBtn.addEventListener('change', event => {
    
    // console.log(event.target.value);
    if (event.target.value == "1") {
      renderMagisterBachelorRadio();
    } else {
      magisterBachelor.innerHTML =
        `<fieldset id="magBacFld" hidden>
    <ul>
      <li>
        <label class="option">
          <input type="radio" name="magBacRdo" value="1" id="magisterRdo" class="radio" checked> 
          <span class="faculty">Magister</span>
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

function renderMagisterBachelorRadio(){
  magisterBachelor.innerHTML =
    `<li>
  <label class="option">
      <input type="radio" name="radioOnOrOff1" value="0" id="bachelorRdo" class="radio">
      <label for="bachelorRdo" class="radio-btn">Bachelor</label>
  </label>                  
  <label class="option">
    <input type="radio" name="radioOnOrOff1" value="1" id="magisterRdo" class="radio"> 
    <span class="radio-btn">Magister</span>
  </label>
</li>`;
  const domRadios1 = document.querySelectorAll('[name="radioOnOrOff1"]')
  domRadios1.forEach(radioBtn => {
    radioBtn.addEventListener('change', event => {
      console.log(event.target.value);
      if (event.target.value == "0") {
      alert(`Bachelor is checked`);

      } else {
  
        alert(`Magister is checked`);

      }
    })
  })
 
}



function calculateSalary(){
  let result = document.getElementById(`resultArt`);
  let number = document.getElementById(`numberTxt`).value;
  let name = document.getElementById(`nameTxt`).value;
  let department = document.getElementById(`departmentTxt`).value;
  let hours = document.getElementById(`hoursTxt`).value;



  let month = document.getElementById(`monthSlct`).value;
  let regular = document.getElementById(`regularRdo`);
  let faculty = document.getElementById(`facultyRdo`);
  const domRadios = document.querySelectorAll('[name="radioOnOrOff"]');
  result.innerHTML = `Number ${number} Month${month} `;


result.innerHTML = `Number :${number} Name :${name} Dept ${department} Hours ${hours} Month :${month}`;
// document.getElementById(`resultArt`).innerHTML = number;

 
//alert(`numb ${number.value}`);

}

// EXE
calculate.addEventListener("click",calculateSalary)
