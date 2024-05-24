document.getElementById('dataForm').addEventListener('submit', function(e){
    e.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const userMsg = document.getElementById("msgbox").value;
    const allData = {
            fullName: fullName,
            email: email,
            subject: subject,
            msg: userMsg,
        }
    
    let dataList = JSON.parse(localStorage.getItem('dataList')) || [];
    dataList.push(allData);
    localStorage.setItem('dataList', JSON.stringify(dataList));
    document.getElementById("fullName").value = '';
    document.getElementById("email").value = '';
    document.getElementById("subject").value = '';
    document.getElementById("msgbox").value = '';
})