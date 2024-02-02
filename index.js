/**   Homewrok
 *  Matter N1:
 * let arr=  [0, 32, 456, 35, 75, 2345, 1, 24, 2];
     function NewArr(arr) {
       let result = arr.filter((num) => num > 10);
       return result;
     }
     console.log(NewArr(arr))
 *
 *
 *  Matter N2:
 *       let arr = [1, 243, 235, 0, 4, 323, 25];
      function CubeNumber(arr) {
        let result = arr.map((Number) => Number ** 3);
        return result;
      }
      console.log(CubeNumber(arr));
 *
 *  Matter N3:
 *  let arr = [3, 14, 15, 80, 30, 90, 101];
   let NewArr = function NewArr(arr) {
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      NewArr.concat(arr[i]);
       return true;
     }
   }
   return false;
  };
  console.log(NewArr);
 * 
 *      Matter N5:
 *
 *     let arr = [12, 34, 124, 124, 547, 3];
    function oppositeArray(arr) {
      return arr.reverse();
    }
    console.log(oppositeArray(arr));
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

let arr = [12, 34, 124, 124, 547, 3];
function oppositeArray(arr) {
  return arr.reverse();
}
console.log(oppositeArray(arr));
