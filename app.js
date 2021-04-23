const FIRSTNAME = document.querySelector("#firstname");
const LASTNAME = document.querySelector("#lastname");
const CITY = document.querySelector("#city");
const CARD = document.querySelector("#card");
const CVC = document.querySelector("#cvc");
const AMOUNT = document.querySelector("#amount");
const STATE = document.querySelector("#state");
const POSTAL = document.querySelector("#postal");
const RADIO = document.querySelector("#radio");
const CANCEL = document.querySelector("#cancel");
const OKEY = document.querySelector("#okey");

window.onload = () => {
    isValidName();
    isValidLastName();
    isValidCity();
    isValidPostal();
    isValidCVC();
    isValidCARD();
    isValidAMOUNT();

};
// validar first name 
const isValidName = () => {
    const FIRSTNAME = document.querySelector("#firstname");
    FIRSTNAME.addEventListener("focusout", event => {
        checkOnlyString(FIRSTNAME.value)
            ? validInputStyle(FIRSTNAME)
            : invalidInputStyle(FIRSTNAME);
    });
};

//[0-9a-zA-Z]{0,500} Será unos numeros de longitud mínima 0 y máxima 500 BOX
// VALIDAR QUE NO ENTREN NUMEROS
//(?!.*[0-9]) Que no existan números 

const isValidLastName = () => {
    const LASTNAME = document.querySelector("#lastname");
    LASTNAME.addEventListener("focusout", event => {
        checkOnlyString(LASTNAME.value)
            ? validInputStyle(LASTNAME)
            : invalidInputStyle(LASTNAME);
    });
};

// validar city ?!.*[0-9]) Que no existan números
const isValidCity = () => {
    const CITY = document.querySelector("#city");
    CITY.addEventListener("focusout", event => {
        checkOnlyString(CITY.value)
            ? validInputStyle(CITY)
            : invalidInputStyle(CITY);

    });
};

// (?=.*[0-9]{2}) En lo que siga a esta expresión, se va a validar que exista un número de al menos dos dígitos
const isValidPostal = () => {
    const POSTAL = document.querySelector("#postal");
    POSTAL.addEventListener("focusout", event => {
        checkOnlyNumberPostal(POSTAL.value)
            ? validInputStyle(POSTAL)
            : invalidInputStyle(POSTAL);
    });
};

// ------- CVC -------
const isValidCVC = () => {
    const CVC = document.querySelector("#cvc");
    CVC.addEventListener("focusout", event => {
        checkOnlyNumberCVC(CVC.value)
            ? validInputStyle(CVC)
            : invalidInputStyle(CVC);
    });
};
// ------- CARD -------
const isValidCARD = () => {
    const CARD = document.querySelector("#card");
    CARD.addEventListener("focusout", event => {
        checkOnlyNumberCARD(CARD.value)
            ? validInputStyle(CARD)
            : invalidInputStyle(CARD);
    });
};
// ------- AMOUNT -------
const isValidAMOUNT = () => {
    const AMOUNT = document.querySelector("#amount");
    console.log(AMOUNT.value);
    AMOUNT.addEventListener("focusout", event => {
        checkOnlyNumberCARD(AMOUNT.value)
            ? validInputStyle(AMOUNT)
            : invalidInputStyle(AMOUNT);
    });

};


const invalidInputStyle = input => {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
};
const validInputStyle = input => {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
};
const checkOnlyString = text => {
    return /^[a-zA-Z]+$/.test(text);
};

// numeros en la postal de 2-9
const checkOnlyNumberPostal = number => {
    return /^[0-9]{2,9}$/.test(number);
};

// numeros en la CVC de 3-5
const checkOnlyNumberCVC = number => {
    return /^[0-9]{3,5}$/.test(number);
};

// numeros en la CARD de 13-18
const checkOnlyNumberCARD = number => {
    return /^[0-9]{13,18}$/.test(number);
};

//funcion que no existan numeros
const notNumber = number => {
    return /^?!.*[0-9])$/.test(number);
};

// numeros en la AMOUNT de 1-9
const checkOnlyNumberAMOUNT = number => {

    return /^[0-9]{1,9  }$/.test(number);
};

/*
function replace (){

}*///^[0-9]+(,[0-9]+)?$    return /^[a-zA-Z]+$/.test(text);


function botonFunction() {
    console.log("Soy el boton ton ton ")
    const OKEY = document.querySelector("#okey");
    console.log("SIGO SIENDO EL BOTON ")
    OKEY = document.querySelector("okey").value;

    if (11 || x > 10) {

        document.getElementById("okey").innerHTML = text;
    }
}
/*
const AMOUNT = document.querySelector("#amount");
    console.log(AMOUNT.value);
    AMOUNT.addEventListener("focusout", event => {
        checkOnlyNumberCARD(AMOUNT.value)
            ? validInputStyle(AMOUNT)
            : invalidInputStyle(AMOUNT);
    });

};*/