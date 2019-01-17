let contacts = [
{
	name: "Shama",
	image: "vellage.jpg",
	lastMsg: "blah blah blah blah blah blah...",
	lastMsgTime: "Yesterday",
	lastMsgStatus: "sent",
	status: "So many books,so little time",
	email: "shamababul2000@gmail.com",
	phoneNo: "03337734701"
},
{
	name: "Noreen",
	image: "doll.jpg",
	lastMsg: "blah blah blah blah blah blah...",
	lastMsgTime: "Yesterday",
	lastMsgStatus: "seen",
	status: "So many books,so little time",
	email: "noreennaz2000@gmail.com",
	phoneNo: "03337734702"
},
{
	name: "Inshal",
	image: "butterfly.jpg",
	lastMsg: "blah blah blah blah blah blah...",
	lastMsgTime: "Yesterday",
	lastMsgStatus: "not sent",
	status: "So many books,so little time",
	email: "inshal2000@gmail.com",
	phoneNo: "03337734703"
},
{
	name: "Nazia",
	image: "cinderella.jpg",
	lastMsg: "blah blah blah blah blah blah...",
	lastMsgTime: "Yesterday",
	lastMsgStatus: "sent",
	status: "So many books,so little time",
	email: "nazia2000@gmail.com",
	phoneNo: "03337734704"
},
{
	name: "Jaweriya",
	image: "best.jpg",
	lastMsg: "blah blah blah blah blah blah...",
	lastMsgTime: "Yesterday",
	lastMsgStatus: "seen",
	status: "So many books,so little time",
	email: "jaweriya2000@gmail.com",
	phoneNo: "03337734705"
},
{
	name: "Suman",
	image: "face.jpg",
	lastMsg: "blah blah blah blah blah blah...",
	lastMsgTime: "Yesterday",
	lastMsgStatus: "not sent",
	status: "So many books,so little time",
	email: "suman2000@gmail.com",
	phoneNo: "03337734706"
},
{
	name: "Syeda",
	image: "flower.jpg",
	lastMsg: "blah blah blah blah blah blah...",
	lastMsgTime: "Yesterday",
	lastMsgStatus: "sent",
	status: "So many books,so little time",
	email: "syeda2000@gmail.com",
	phoneNo: "03337734707"
},
{
	name: "Hadia Khan",
	image: "juice.jpg",
	lastMsg: "blah blah blah blah blah blah...",
	lastMsgTime: "Yesterday",
	lastMsgStatus: "seen",
	status: "So many books,so little time",
	email: "hadia2000@gmail.com",
	phoneNo: "03337734708"
},
{
	name: "Jiya",
	image: "night.jpg",
	lastMsg: "blah blah blah blah blah blah...",
	lastMsgTime: "Yesterday",
	lastMsgStatus: "not sent",
	status: "So many books,so little time",
	email: "jiya2000@gmail.com",
	phoneNo: "03337734709"
},
{
	name: "Kiran",
	image: "snowwhite.jpg",
	lastMsg: "blah blah blah blah blah blah...",
	lastMsgTime: "Yesterday",
	lastMsgStatus: "sent",
	status: "So many books,so little time",
	email: "kiran2000@gmail.com",
	phoneNo: "033377347035"
}

]

function initialize() {
	const contactsListEl = document.querySelector("#contacts-list");
	for (let i = 0; i < contacts.length; i++) {

		let icon;
		if (contacts[i].lastMsgStatus === "seen") {
			icon = "check-double";
		} else if (contacts[i].lastMsgStatus === "sent") {
			icon = "check";
		} else {
			icon = "clock";
		}

		contactsListEl.innerHTML += 

		`
		<section class="person-item">
		<div class="person-img" style="background-image: url('images/${contacts[i].image}')">
		</div>
		<div class="after-person-img" onclick="changeCeleb(${i})">
		<div class="content-center">
		<h4 class="name">${ contacts[i].name }</h4>
		<div class="msg-container">
		<i class="fas fa-${icon}"></i>
		<p class="msg">${ contacts[i].lastMsg }</p>
		</div>
		</div>
		<p class="time">${ contacts[i].lastMsgTime}</p>
		</div>
		</section>
		`
	}
}

function changeCeleb(celebIndex) {
	console.log(contacts[celebIndex].name);
	document.querySelector("#celeb-img").style["display"] = `block`;
	document.querySelector("#celeb-img").style["background-image"] = `url(images/${contacts[celebIndex].image})`;
	document.querySelector("#celeb-name").innerHTML = contacts[celebIndex].name;
	document.querySelector("#celeb-phoneNo").innerHTML = `<i id="celeb-phone" class="fas fa-phone"></i>`;
	document.querySelector("#celeb-phoneNo").innerHTML += contacts[celebIndex].phoneNo;
	document.querySelector("#celeb-email").innerHTML = `<i id="celeb-envelope" class="far fa-envelope"></i>`;
	document.querySelector("#celeb-email").innerHTML += contacts[celebIndex].email;
	document.querySelector("#celeb-status").innerHTML = contacts[celebIndex].status;
}