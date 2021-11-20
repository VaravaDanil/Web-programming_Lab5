const find = (num =[], arr_user = ['user1', 'user2', 'user3', 'user4']) => {
let min = num[0], max = num[0], multi = 1, out = ''
	for (const value of num){

		if (value < min) min = value
		if (value > max) max = value
	}
	index = num.indexOf(max)
	document.writeln(`${arr_user[index]} : ${max}`)
}

let arr = new Array(4)
let arr_user = ['user_1', 'user_2', 'user_3', 'user_4']

var step;
for (step = 0; step < 4; step++) {
	arr[step] =+prompt(`Enter num for: ${arr_user[step]}`, '0')
}

find(arr, arr_user)

