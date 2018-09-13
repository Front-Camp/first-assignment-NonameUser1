/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  if(typeof str === "string"){
  	var reversed='';
  	for(let i = str.length -1; i >=0; i--){
  		reversed+=str[i];
  	}
  	return reversed;
  }else{
  	throw new Error();
  }

};

export default turnMeBaby;
