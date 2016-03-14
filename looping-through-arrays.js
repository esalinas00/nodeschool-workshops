var pets = ['cat', 'dog', 'rat'], len = pets.length, i = 0;

for(; i < len; i+=1){
	pets[i] = pets[i] + 's';
}
console.log(pets);