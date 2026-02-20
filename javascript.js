const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el");
let count = 0;

incrementBtn.onclick = () => {
	count += 1;

	countEl.textContent = String(count);
};

saveBtn.onclick = () => {
	let saved = ` ${count} - `;

	saveEl.textContent += saved;

	countEl.textContent = "0";
	count = 0;
};
