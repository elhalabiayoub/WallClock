const move = (classname, value) => {
	const el = document.querySelector(`[${classname}]`);
	el.style.setProperty("--rotation", `${value}deg`);
};

const changeState = () => {
	const date = new Date();
	const seconds = date.getSeconds();
	const minutes = seconds / 60 + date.getMinutes();
	const hours = minutes / 60 + date.getHours();
	move("seconds", seconds * 6);

	move("minutes", minutes * 6);
	move("hours", hours * 30);
};

setInterval(changeState, 1000);
