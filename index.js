// console.log("OK....")


fetch('https://api.github.com/users/virragrn')
    .then(res => res.json())
    .then(data => {
        console.log(data)

        document.getElementById('username').innerHTML = data.login
        document.getElementById('type').innerHTML = data.type
        

        // style css
        document.getElementById('avatar').style.width = "200px";
        document.getElementById('avatar').style.borderRadius = "20px";
        document.getElementById('avatar').style.display = "block";
        document.getElementById('avatar').style.marginLeft = "auto";
        document.getElementById('avatar').style.marginRight = "auto";
 
        document.getElementById('username').style.textAlign = "center";
        document.getElementById('username').style.marginLeft = "auto";

        document.getElementById('type').style.textAlign = "center";
        document.getElementById('type').style.marginLeft = "auto";

        document.getElementById('submit').style.display = "block";
        document.getElementById('submit').style.marginLeft = "auto";
        document.getElementById('submit').style.marginRight = "auto";
        document.getElementById('submit').style.marginTop = "30px";
        document.getElementById('submit').style.backgroundColor = "#BA55D3";
        document.getElementById('submit').style.width = "200px";
        document.getElementById('submit').style.height = "45px";
        

        document.getElementById('idAkun').style.display = "block";
        document.getElementById('idAkun').style.marginLeft = "auto";
        document.getElementById('idAkun').style.marginRight = "auto";
        document.getElementById('idAkun').style.marginTop = "20px";

        // document.getElementById('submit').style.display = "block";
        // document.getElementById('submit').style.marginLeft = "auto";
        // document.getElementById('submit').style.marginRight = "auto";
        // document.getElementById('submit').style.marginTop = "20px";


        
        document.getElementById('idAkun').addEventListener('click', displayAlert);
        function displayAlert() {
        alert("id = 88821524");

        
    }


})

