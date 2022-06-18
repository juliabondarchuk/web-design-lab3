
class Model
{

   constructor() {}
   m_or_w(a){
    if(a==1){m_w="Man"}
    if(a==2){m_w="Woman"}
   }
   was_vhid(a){
    if(a=="1"){
        return 1;
    }else{return 0;}
   }
   authentication(em_l, pw_l,em,pw){
    if((em_l==em)&&(pw_l==pw)){
        return 1;
    }else{
        return 0;
    }
   }

   score_counter(cd,ss,ic){
       score=0;
       if(cd=="Cats"){
        score+=1;
       }
       if(cd=="Dogs"){
        score+=2;
       }
       if(ss=="Summer"){
        score+=3;
       }
       if(ss=="Winter"){
        score+=2;
       }
       if(ss=="Autumn"){
        score+=1;
       }
       if(ss=="Spring"){
        score+=4;
       }
       if(ic=="Chocolate"){
        score+=1;
       }
       if(ic=="Salted caramel"){
        score+=2;
       }
       if(ic=="Mint chocolate chip"){
        score+=4;
       }
       if(ic=="Pistachio"){
        score+=3;
       }
   }
}




class View 
{
    constructor() {}
    
    sign_up(){
        window.localStorage.setItem("cd","0");
        window.localStorage.setItem("ss","0");
        window.localStorage.setItem("ic","0");
        email = document.getElementById('email').value;
        window.localStorage.setItem("email",email);
        fname = document.getElementById('name').value;
        window.localStorage.setItem("name",fname);
        var mdl = new Model();
        mdl.m_or_w(document.getElementById('m_w').value);
        window.localStorage.setItem("m_w",m_w);
        birth = document.getElementById('birth').value;
        window.localStorage.setItem("birth",birth);
        password = document.getElementById('password').value;
        window.localStorage.setItem("password",password);
        vhid="1";
        window.localStorage.setItem("vhid",vhid);

        const data = {email, password, name: fname };

        fetch('https://localhost:8000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });


    }


    log_in(){
        var mdl = new Model();
        vhid=window.localStorage.getItem("vhid");
        if(mdl.was_vhid(vhid)==0){
            var email_log = document.getElementById('email').value;
            var password_log = document.getElementById('password').value;
            email=window.localStorage.getItem("email");
            password=window.localStorage.getItem("password");
            if(mdl.authentication(email_log, password_log,email,password)){
                vhid="1";
                window.localStorage.setItem("vhid",vhid);
            }
        }

    }
    
    update(){
        function print_profile(em,nm,br,ps){
            
        }
        var mdl = new Model();
        vhid=window.localStorage.getItem("vhid");
        if(mdl.was_vhid(vhid)){
        email=window.localStorage.getItem("email");
        fname=window.localStorage.getItem("name");
        m_w=window.localStorage.getItem("m_w");
        birth=window.localStorage.getItem("birth");
        password=window.localStorage.getItem("password");
        cd=window.localStorage.getItem("cd");
        ss=window.localStorage.getItem("ss");
        ic=window.localStorage.getItem("ic");
        document.getElementById("email").innerHTML=email;
        document.getElementById("name").innerHTML=fname;
        document.getElementById("m_w").innerHTML=m_w;
        document.getElementById("birth").innerHTML=birth;
        document.getElementById("cd").innerHTML=cd;
        document.getElementById("ss").innerHTML=ss;
        document.getElementById("ic").innerHTML=ic;
        mdl.score_counter(cd,ss,ic);
        document.getElementById("score").innerHTML=score;
        }
    }


    log_out(){
        vhid="0";
        window.localStorage.setItem("vhid",vhid);
    }


    cat_dog(){
        cd=document.getElementById('cd').value;
        window.localStorage.setItem("cd",cd);
    }

    season(){
        ss=document.getElementById('ss').value
        window.localStorage.setItem("ss",ss);
    }

    ice_cream(){
        ic=document.getElementById('ic').value
        window.localStorage.setItem("ic",ic);
    }
}






class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
}


let email;
let fname;
let m_w;
let birth;
let password;
let vhid="0";
let ic;
let ss;
let cd;
let score;
const app = new Controller(new Model(), new View());

