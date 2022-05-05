'use district';



const personalPlanPeter = {
    name: "Peter",
    age: "30",
    skills: {
        languages: ['ru', 'ua'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }, 
    showAgeAndLangs(){
        let result = "";
        result += `Мне ${this.age} и я владею языками: `;
        this.skills.languages.forEach(item => {
            result += `${item.toUpperCase()} `;
        });

        return result;
    }
};

function showExperience(plan) {
    let result = "";

    function distruct(outputObj){
        let obj = {};
        for (const [key, value] of Object.entries(outputObj)) {
            if(typeof(value) == 'object'){
                obj = Object.assign(obj, distruct(value));
            }else{
                obj[key] = value;
            }
            
      }
      return obj;
    }
    
    result = distruct(plan).exp;
    return result;
}

function showProgrammingLangs(plan) {
    let result = "";

    for (const key in plan.skills.programmingLangs) {
        result += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
    }

    return result;
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs());