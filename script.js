// Generate OTP
const generateOtp = document.getElementById("generate-pin");
generateOtp.addEventListener('click', function () {
    let num = '1234567890';
    let generate = '';
    let length = 4;
    for (let i = 0; i < length; i++) {
        generate += num[Math.floor(Math.random() * 10)];
    }
    document.getElementById("show-otp").value = generate;
});

// screen handeler
function inputValue(btntxt) {
    document.getElementById('show-input').value += btntxt;
}

// remove one by one
function isClear(){
    const clearLast = document.getElementById('show-input').value;
    document.getElementById('show-input').value = clearLast.substring(0, clearLast.length - 1);
}

// remove All
function isAllClear(){
    document.getElementById('show-input').value = "";
}

// OTP matching
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
    const generateOtp = document.getElementById('show-otp').value;
    const inputNumber = document.getElementById('show-input').value;
    if ( inputNumber == generateOtp) {
        document.getElementById('match').style.display = "block";
        document.getElementById('dont-match').style.display = "none";
    } 
    if (inputNumber !== generateOtp) {
        document.getElementById('match').style.display = "none";
        document.getElementById('dont-match').style.display = "block";
    }
});

