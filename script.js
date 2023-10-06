function confirmReset() {
    var confirmReset = confirm("Are you sure you want to remove all entries?");
    if (confirmReset) {
        document.getElementById("form").reset();
    }
}

function lazyFill(){
    document.getElementById("studName").value = "User 1";
    document.getElementById("birthday").value = "2000-01-01";
    document.getElementById("male").checked = true;
    document.getElementById("studClass").value = "L1ABC";
    document.getElementById("studID").value = "2702331234";
    document.getElementById("binusEmail").value = "user1@binus.ac.id";
    document.getElementById("phoneNum").value = "081234567890";
    document.getElementById("opt1").checked = true;
    document.getElementById("opt2").checked = true;
    document.getElementById("opt3").checked = true;
    document.getElementById("opt4").checked = true;

    alert("Filled")
}

function confirmResults(){
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const studClass = params.get('class')
    const gender = params.get('gender')
    const birthday = params.get('birthday');
    const studID = params.get('studID');
    const email = params.get('email');
    const phone = params.get('phone');
    
    const session1 = params.get('session1');
    const session2 = params.get('session2');
    const session3 = params.get('session3');
    const session4 = params.get('session4');

    document.getElementById('name').textContent = name;
    document.getElementById('class').textContent = studClass;   
    document.getElementById('birthday').textContent = birthday;
    document.getElementById('studid').textContent = studID;
    document.getElementById('email').textContent = email;
    document.getElementById('phone').textContent = phone;
    document.getElementById('gender').textContent = gender;

    if(session1 && session2 && session3 && session4 === "on"){
        document.getElementById('sessionAttended').textContent = "Congratulations, you attended all HCI sessions";
    } else {
        document.getElementById('sessionAttended').textContent = "Try to join every session ya  ";
    }
}   

window.onload = confirmResults;