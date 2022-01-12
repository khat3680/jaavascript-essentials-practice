const navcontent = {
  option1: "op1",
  option2: "op2",
  option3: "op3",
  option4: "op4",
};

const nav = `

<ul>
<li><span>${navcontent.option1}</span></li>
<li><span>${navcontent.option2}</span></li>
<li><span>${navcontent.option3}</span></li>
<li><span>${navcontent.option4}</span></li>
</ul>`;

const newnav = document.createElement("navigation");

newnav.const.add("backpack");
newnav.setAttribute("id", "everyday");
newnav.innerHTML = nav;

main.append(newnav);
