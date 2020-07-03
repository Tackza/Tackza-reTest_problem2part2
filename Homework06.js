let S1 = "bath"
let S2 = "htax"
function testAnagram (S1, S2){
  S1 = S1.split('').sort().join('');
  S2 = S2.split('').sort().join('');
 console.log(S1)
 console.log(S2)
 return S1 === S2;
}
let result = testAnagram(S1, S2);
console.log(result) 