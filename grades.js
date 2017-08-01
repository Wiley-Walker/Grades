 var scores = [82, 72, 95, 99, 98, 69, 72, 78, 84, 64, 28, 58, 87];

 var highestGrade = 0;
 var lowestGrade = 100;
 var aGrades = 0;
 var bGrades = 0;
 var cGrades = 0;
 var dGrades = 0;
 var fGrades = 0;



 for (var i = 0; i < scores.length; i++) {
 	var point = scores[i];
 		if (scores[i] >= 91) { 
 			aGrades += 1; 
 			console.log(scores[i] + " A");
 				if (scores[i] < lowestGrade) {
 					lowestGrade = scores[i];
 				}
 			} 

 			if (scores[i] > highestGrade){
 				highestGrade = scores[i];
 		}
 		if (scores[i] < 91 && point > 80 ) { 
 			console.log(scores[i] +" B");
 			bGrades += 1; 
 				if (scores[i] < lowestGrade) {
 					lowestGrade = scores[i];
 				}
 			} 

 			if (scores[i] > highestGrade){
 				highestGrade = scores[i];
 		}
 		if (scores[i] > 70 && point < 81) { 
 			console.log(scores[i] + " C");
 			cGrades += 1; 
 				if (scores[i] < lowestGrade) {
 					lowestGrade = scores[i];
 				}
 			} 

 			if (scores[i] > highestGrade){
 				highestGrade = scores[i];
 		}
 		if (scores[i] > 60 && point < 71 ) { 
 			console.log(scores[i] + " D");
 			dGrades += 1; 
 				if (scores[i] < lowestGrade) {
 					lowestGrade = scores[i];
 				}
 			} 

 			if (scores[i] > highestGrade){
 				highestGrade = scores[i];
 		}

 		if (scores[i] < 60) { 
 			console.log(scores[i] + " F");
 			fGrades += 1; 
 				if (scores[i] < lowestGrade) {
 					lowestGrade = scores[i];
 				}
 			} 

 			if (scores[i] > highestGrade){
 				highestGrade = scores[i];
 		}

 		
};

 		
console.log("highestGrade =", highestGrade);
console.log("lowestGrade =", lowestGrade);
console.log("There where " + aGrades + " A's");
console.log("There where " + bGrades + " B's");
console.log("There where " + cGrades + " C's");
console.log("There where " + dGrades + " D's");
console.log("There where " + fGrades + " F's");
 		











// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A