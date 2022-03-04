function changeinformationtoeducation(){
    document.getElementById("txteducation").style.opacity="1";
    document.getElementById("txtlanguage").style.opacity="0";
    document.getElementById("txtaboutMe").style.opacity="0";
    document.getElementById("question").style.opacity="0";
    document.getElementById("statusbuttoneducation").style.background = "red";
    document.getElementById("statusbuttonskills").style.background = "white";
    document.getElementById("statusbuttonMe").style.background = "white";
    document.getElementById("progressbar").style.marginLeft="-200";
}

function changeinformationtoskills(){
    document.getElementById("txteducation").style.opacity="0";
    document.getElementById("txtlanguage").style.opacity="1";
    document.getElementById("txtaboutMe").style.opacity="0";
    document.getElementById("question").style.opacity="0";
    document.getElementById("statusbuttoneducation").style.background = "white";
    document.getElementById("statusbuttonskills").style.background = "red";
    document.getElementById("statusbuttonMe").style.background = "white";
    document.getElementById("progressbar").style.marginLeft="-200";
}

function changeinformationtoMe(){
    document.getElementById("txteducation").style.opacity="0";
    document.getElementById("txtlanguage").style.opacity="0";
    document.getElementById("txtaboutMe").style.opacity="1";
    document.getElementById("question").style.opacity="0";
    document.getElementById("statusbuttoneducation").style.background = "white";
    document.getElementById("statusbuttonskills").style.background = "white";
    document.getElementById("statusbuttonMe").style.background = "red";
    document.getElementById("progressbar").style.marginLeft="-200";
}

function closeall(){
    document.getElementById("txteducation").style.opacity="0";
    document.getElementById("txtlanguage").style.opacity="0";
    document.getElementById("txtaboutMe").style.opacity="0";
    document.getElementById("statusbuttoneducation").style.background = "white";
    document.getElementById("statusbuttonskills").style.background = "white";
    document.getElementById("statusbuttonMe").style.background = "white";
}

function showquestion(){
    document.getElementById("question").style.opacity="1";
}