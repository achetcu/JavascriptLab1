const name1 = prompt ("What is the name of the first person?");
const name2 = prompt ("What is the name of the second person?");
const name3 = prompt ("What is the name of the third person?");

const longesttext = "has the longest name."
const tietext = "tie for the longest names."

if (name1.length > name2.length && name1.length > name3.length ) {
console.log(`${name1} ${longesttext}`);
}
else if (name2.length > name3.length && name2.length > name1.length){
  console.log(`${name2} ${longesttext}`);
}
else if (name3.length > name1.length && name3.length > name2.length){
  console.log(`${name3} ${longesttext}`);
}

else if (name1.length === name2.length && name1.length === name3.length){
  console.log(`All three names, ${name1}, ${name2}, and ${name3} are the same length.`);
}
else if (name1.length === name2.length){
  console.log(`${name1} & ${name2} ${tietext}`);
  
}
else if (name1.length === name3.length){
  console.log(`${name1} & ${name3} ${tietext}`);
  
}
else if (name2.length === name3.length){
  console.log(`${name2} & ${name3} ${tietext}`);

}
else if (name1.length === name2.length){
  console.log(`${name1} & ${name2} ${tietext}`);
}

else {
      console.log("No name");
  
}