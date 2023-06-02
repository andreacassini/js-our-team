//MILESTONE 0
const team = [
    {
        'name' : 'Wayne Barnett',
        'role' : 'Founder & CEO',
        'image' : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'image' : 'angela-caroll-chief-editor.jpg'
    },
    {
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'image' : 'walter-gordon-office-manager.jpg'
    },
    {
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'image' : 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'image' : 'scott-estrada-developer.jpg'
    },
    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'image' : 'barbara-ramos-graphic-designer.jpg'
    }
];

//MILESTONE 1
for(let i=0; i<team.length; i++){
    console.log(team[i].name)
    console.log(team[i].role)
    console.log(team[i].image)
}

//MILESTONE 2 ==> BONUS 1
const info = document.getElementById("info");

for(let i=0; i<team.length; i++){
   info.innerHTML += `<img src="./img/${team[i].image}"><br>`;
   info.innerHTML += team[i].name+'<br>';
   info.innerHTML += team[i].role+'<br><br>'
}