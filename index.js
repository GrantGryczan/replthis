const repl = require("repl");
module.exports = myEval => {
	if(!(myEval instanceof Function)) {
		myEval = eval;
	}
	repl.start({
		prompt: "",
		eval: (cmd, context, filename, callback) => {
			let value;
			try {
				value = myEval(cmd);
			} catch(err) {
				value = err;
			}
			callback(null, value);
		},
		useColors: true
	}).once("exit", process.exit);
};
