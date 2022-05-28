const URL = "https://type.fit/api/quotes";

const message_box = document.querySelector("#msg");

const get_random_element = (quoteArray) => {
	const randomizer = Math.floor(Math.random() * quoteArray.length);
	return randomizer;
};

export const fetch_quotes = async () => {
	try {
		let req = await fetch(URL);
		let res = await req.json();

		let index = get_random_element(res);
		let current_quote = res[index];
		if (current_quote.author == null) {
			message_box.textContent = `${current_quote.text} ~~ by Unknown`;
		} else {
			message_box.textContent = `${current_quote.text} ~~ by ${current_quote.author}`;
		}

	} catch (error) {
		throw error;
	}
};
