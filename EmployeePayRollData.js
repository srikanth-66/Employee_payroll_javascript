class EmployeeData{
    name;
    profilePic;
    gender;
    department;
    salary;
    note;
    startDate;

    setName(name){
        this.name=name;

    }

    getName(){
        return this.name;
    }

    setProfilePic(profilePic){
        this.profilePic=profilePic;

    }

    getProfilePic(){
        return this.profilePic;
    }

    setGender(gender){
        this.gender=gender;
    }

    getGender(){
        return this.gender;
    }

    setDepartment(department){
        this.department=department;
    }

    getDepartment(){
        return this.department;
    }

    setSalary(salary){
        this.salary=salary;
    }

    getSalary(){
        return this.salary;
    }

    setNote(note){
        this.note=note;
    }

    getNote(){
        return this.note;
    }

    setStartDate(date){
        this.startDate=date;
    }

    getStartDate(){
        return this.startDate;
    }

}


function show(d1,d2,d3,d4,d5,d6,d7){
    let list=JSON.parse(localStorage.getItem("objList"));
    var name=d1;
    var gender=d3;
    var department=d4;
    var note=d7;
    var salary=d5;
    var pic=d2;
    var date=d6;

    let obj={
        "name":name,
        "gender":gender,
        "department":department,
        "note":note,
        "salary":salary,
        "pic":pic,
        "date":date
    }

    if(list != undefined){
        list.push(obj);
    }else{
        list=[obj];
    }

    console.log(list);
    localStorage.setItem("objList",JSON.stringify(list));
}



