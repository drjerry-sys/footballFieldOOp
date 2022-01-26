let current_player;
let store = {'4-2-4':{
    'btn1':[176, 336],
    'btn2':[224, 520],
    'btn3':[226, 169],
    'btn4':[523, 441],
    'btn5':[240, 417],
    'btn6':[240, 256],
    'btn7':[676, 587],
    'btn8':[675, 389],
    'btn9':[675, 274],
    'btn10':[523, 216],
    'btn11':[676, 124],
}, '4-4-2':{
    'btn1':[176, 336],
    'btn2':[224, 520],
    'btn3':[226, 169],
    'btn4':[676, 441],
    'btn5':[240, 417],
    'btn6':[240, 256],
    'btn7':[523, 587],
    'btn8':[523, 389],
    'btn9':[523, 274],
    'btn10':[676, 216],
    'btn11':[523, 124],
}, '4-3-3':{
    'btn1':[176, 336],
    'btn2':[260, 520],
    'btn3':[260, 169],
    'btn4':[523, 341],
    'btn5':[240, 417],
    'btn6':[240, 256],
    'btn7':[676, 537],
    'btn8':[900, 450],
    'btn9':[900, 335],
    'btn10':[676, 216],
    'btn11':[900, 185],
}};
localStorage.players = JSON.stringify(
    {
    "player 9":{role:'striker',name:'Adedeji Jeremiah', age:'45 years old', height:'45ft 15\'', speed:'84%', acceleration:'80%', balance:'80%', attack:'70%', defense:'25%', dribble:'55%', jump:'45%', response:'45%', 'keeper skill':'45%', power:'12%', header:'60%', aggression:'80%', 'pass accuracy':'74%', curling:'80%'},

    'player 8':{role:'supporting striker',name:'Olalode Jeremiah', age:'25 years old', height:'41ft 03\'', speed:'80%', acceleration:'79%', balance:'80%', attack:'70%', defense:'25%', dribble:'58%', jump:'45%', response:'45%', 'keeper skill':'45%', power:'12%', header:'70%', aggression:'82%', 'pass accuracy':'74%', curling:'80%'},

    // defender:{name:'Abolade Elijah', age:'40 years old', height:'35ft 05\'', speed:'79%', acceleration:'60%', balance:'70%', attack:'75%', defense:'80%', dribble:'75%', jump:'45%', response:'45%', 'keeper skill':'25%', power:'80%', header:'75%', aggression:'80%', 'pass accuracy':'74%', curling:'80%'},

    'player 4':{role:'defensive mid fielder', name:'Daniel Williams', age:'20 years old', height:'30ft 05\'', speed:'72%', acceleration:'50%', balance:'60%', attack:'71%', defense:'80%', dribble:'75%', jump:'45%', response:'45%', 'keeper skill':'25%', power:'80%', header:'70%', aggression:'63%', 'pass accuracy':'84%', curling:'65%'},

    'player 10':{role:'attacking mid fielder', name:'Bolade Funmisho', age:'28 years old', height:'30ft 25\'', speed:'78%', acceleration:'70%', balance:'65%', attack:'89%', defense:'70%', dribble:'72%', jump:'85%', response:'70%', 'keeper skill':'85%', power:'80%', header:'70%', aggression:'83%', 'pass accuracy':'94%', curling:'75%'},

    'player 7':{role:'right winger',name:'Funsho Ola', age:'27 years old', height:'33ft 00\'', speed:'75%', acceleration:'58%', balance:'68%', attack:'71%', defense:'87%', dribble:'80%', jump:'45%', response:'45%', 'keeper skill':'35%', power:'80%', header:'70%', aggression:'68%', 'pass accuracy':'89%', curling:'55%'},

    'player 11':{role:'left winger', name:'Oke Favour', age:'30 years old', height:'35ft 00\'', speed:'65%', acceleration:'60%', balance:'68%', attack:'71%', defense:'87%', dribble:'80%', jump:'45%', response:'45%', 'keeper skill':'35%', power:'80%', header:'70%', aggression:'68%', 'pass accuracy':'89%', curling:'55%'},

    'player 1':{role:'keeper', name:'Fola Jude', age:'27 years old', height:'33ft 00\'', speed:'75%', acceleration:'58%', balance:'68%', attack:'51%', defense:'87%', dribble:'80%', jump:'45%', response:'45%', 'keeper skill':'95%', power:'80%', header:'70%', aggression:'68%', 'pass accuracy':'89%', curling:'35%'},

    'player 6':{role:'center back', name:'Saviour Peters', age:'25 years old', height:'27ft 15\'', speed:'88%', acceleration:'80%', balance:'79%', attack:'60%', defense:'25%', dribble:'55%', jump:'45%', response:'45%', 'keeper skill':'45%', power:'12%', header:'60%', aggression:'80%', 'pass accuracy':'74%', curling:'65%'},

    'player 5':{role:'center back', name:'John Bull', age:'30 years old', height:'27ft 15\'', speed:'86%', acceleration:'80%', balance:'79%', attack:'60%', defense:'25%', dribble:'55%', jump:'45%', response:'45%', 'keeper skill':'45%', power:'12%', header:'60%', aggression:'80%', 'pass accuracy':'74%', curling:'65%'},

    'player 3':{role:'left full back', name:'Arora Opeyemi', age:'30 years old', height:'30ft 15\'', speed:'81%', acceleration:'80%', balance:'79%', attack:'60%', defense:'25%', dribble:'55%', jump:'45%', response:'45%', 'keeper skill':'45%', power:'12%', header:'60%', aggression:'80%', 'pass accuracy':'74%', curling:'65%'},

    'player 2':{role:'right full back', name:'Opeyemi Ojo', age:'30 years old', height:'30ft 15\'', speed:'81%', acceleration:'80%', balance:'79%', attack:'60%', defense:'25%', dribble:'55%', jump:'45%', response:'45%', 'keeper skill':'45%', power:'12%', header:'60%', aggression:'80%', 'pass accuracy':'74%', curling:'65%'},
    }
)
if (localStorage.builtPlayers) {
    let built = JSON.parse(localStorage.builtPlayers);
    for (let i in built) {
        formation_div.innerHTML += `<button class="btn btn-primary ml-2" onclick="">${i}</button>`
    }
} else {localStorage.builtPlayers = JSON.stringify({})}
formation_div.innerHTML += `<button class="btn btn-info btn-md my-4 ml-5" data-toggle="modal" data-target="#createModal" onclick="build_player('first')">Create Player</button>`


class Players {
    constructor(age, height, name, others) {
        this.name = name, this.age = age, this.height = height, this.others = others;
        this.assging()
    }
    assging() {
        player_name.innerHTML = this.name, player_height.innerHTML = this.height, player_age.innerHTML=this.age;
        for (let i=0; i<document.getElementsByClassName('progress-bar').length; i++) {
            let v = i+1;
            document.getElementById('pro'+v).style.width = this.others[i];
            document.getElementById('pro'+v).innerHTML = this.others[i];
        }
    }
}
const check = (e)=> {
    current_player = e.target.innerHTML.toLowerCase();
    let from_local = JSON.parse(localStorage.players)[e.target.innerHTML.toLowerCase()];
    m_head.innerHTML = `${from_local.role.toUpperCase()} (${e.target.innerHTML})`;

    cc = new Players(from_local.age, from_local.height, from_local.name, [from_local.speed, from_local.acceleration, from_local.balance, from_local.attack, from_local.defense, from_local.dribble, from_local.jump, from_local['pass accuracy'], from_local.response, from_local['keeper skill'], from_local.power, from_local.header, from_local.aggression, from_local.curling])
}
const update = val=> {
    if (val == 'player') {
        under.style.display = 'block';
        underpl.style.display = 'none';
        edit.style.display = 'none';
        editrole.style.display = 'none';
        for (let i = 1; i < document.getElementsByTagName('input').length+1; i++) {
            document.getElementById('inp'+i).style.display = 'inline';
        }
    } else if (val == 'role') {
        under.style.display = 'none';
        underpl.style.display = 'block';
        edit.style.display = 'none';
        editrole.style.display = 'none';
        role.style.display = 'block';
    }
}
const done = val=> {
    if (val == '1') {
        let ll = JSON.parse(localStorage.players);
        let from_local = ll[current_player];
        under.style.display = 'none';
        underpl.style.display = 'none';
        editrole.style.display = 'block';
        edit.style.display = 'block';
        for (let i = 1; i < document.getElementsByTagName('input').length+1; i++) {
            let v = document.getElementById('inp'+i).value;
            document.getElementById('inp'+i).style.display = 'none';
            if (v=='') {continue};
            let ability = document.getElementById('abi'+i).innerHTML.toLowerCase();
            from_local[ability] = v;
            document.getElementById('pro'+i).style.width = `${v}%`;
            document.getElementById('pro'+i).innerHTML = `${v}%`;
            document.getElementById('inp'+i).value = '';
        }
        ll[current_player] = from_local;
        localStorage.players = JSON.stringify(ll);
    } else if (val == '2') {
        let from_local = JSON.parse(localStorage.players)
        let new_role = role.value;
        underpl.style.display = 'none';
        under.style.display = 'none';
        role.style.display = 'none';
        editrole.style.display = 'block';
        edit.style.display = 'block';
        for (let i in from_local) {
            if (from_local[i].role == new_role) {
                for (let j in from_local[current_player]) {
                    let k = 1;
                    if ((j == 'name') || (j == 'age') || (j == 'height')) {continue};
                    from_local[current_player][j] = from_local[i][j];
                    document.getElementById('pro'+k).style.width = from_local[i][document.getElementById('abi'+k).innerHTML.toLowerCase()];
                    document.getElementById('pro'+k).innerHTML = from_local[i][document.getElementById('abi'+k).innerHTML.toLowerCase()];
                    k++;
                };
                m_head.innerHTML = `${new_role.toUpperCase()} (${i})`
            }
        }
    }
}
const remove_edit = ()=> {
    for (let i = 1; i<document.getElementsByTagName('input').length+1; i++) {
        document.getElementById('inp'+i).style.display = 'none';
        role.style.display = 'none';
    }
    under.style.display = 'none';
    edit.style.display = 'block';
    editrole.style.display = 'block';
}
const for_formation = ()=>{
    for (let i in store[formation.value]) {
        document.getElementById(i).style.position = 'absolute';
        document.getElementById(i).style.left = `${store[formation.value][i][0]}px`;
        document.getElementById(i).style.top = `${store[formation.value][i][1]}px`;
    }
}
for_formation()

const build_player = val=> {
    let from_local = JSON.parse(localStorage.players);
    let from_local2 = from_local;
    let built_players = JSON.parse(localStorage.builtPlayers)
    let last_player=0;
    let pass = true;
    if (val == 'first') {
    } else if (val == 'fromModal') {
        if (Object.keys(built_players).length > 0) {from_local2 = built_players};
        for (let i in from_local2) {
            let num = i.split(' ')[1];
            if (parseInt(num) > last_player) {last_player=num};
        };
        last_player++;
        for (let i = 1; i < 20; i++) {
            if (document.getElementById('npt'+i).value == '') {pass = false};
        }
        if (pass == true) {
            built_players[`player ${last_player}`] = {role:create_role.value, name: `${npt1.value} ${npt2.value}`, age:`${npt3.value} years old`, height:`${npt4.value}ft ${npt5.value}\'`, speed:`${npt7.value}%`, acceleration:`${npt6.value}%`, balance:`${npt8.value}%`, attack:`${npt10.value}%`, defense:`${npt11.value}%`, dribble:`${npt12.value}%`, jump:`${npt13.value}%`, response:`${npt15.value}%`, 'keeper skill':`${npt17.value}%`, power:`${npt16.value}%`, header:`${npt18.value}%`,aggression:`${npt19.value}%`, 'pass accuracy':`${npt14.value}%`, curling:`${npt9.value}%`};
    
            localStorage.builtPlayers = JSON.stringify(built_players);
            for (let i = 1; i < 20; i++) {
                document.getElementById('npt'+i).value = '';
            }
            alert('successfully created!')
        } else {alert('Fill all entries!')};
    }
}