students_list=[];
function submit()
{
    var display_list=[];

    for (var x=1; x <=4; x++);
    {
        var name_of_the_student=document.getElementById("name_of_the_student_"+x).value;
        console.log(name_of_the_student);
        students_list.push(name_of_the_student);
    }
        console.log(students_list);
        var length_of_students_list=students_list.length;
        console.log(length_of_students_list);

    for (var y=0; y<length_of_students_list; y++);
    {
        display_list.push("<h4>Name-"+ students_list[y] + "</h4>" )
        console.log(display_list);
    }
    console.log(display_list);
    document.getElementById("display_name_with_commas").innerHTML=display_list;
    var remove_commas=display_list.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}