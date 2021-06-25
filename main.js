var studentarray=[];

function submit(){
    var name_1=document.getElementById("name_student1").value;
    var name_2=document.getElementById("name_student2").value;
    var name_3=document.getElementById("name_student3").value;
    var name_4=document.getElementById("name_student4").value;

    studentarray.push(name_1);
    studentarray.push(name_2);
    studentarray.push(name_3);
    studentarray.push(name_4);

    document.getElementById("display_name").innerHTML=studentarray;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    studentarray.sort();
    document.getElementById("display_name").innerHTML=studentarray;
}
