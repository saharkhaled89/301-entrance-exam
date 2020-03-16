// Q2) solve the following problem.
// create a javascript file and name it 'q2.js' on 'q2-solution' branch then do the following:
// write a function that will print out the following pattern in the console
// *
// **
// ***
// ****
// *****

var x,y,chr;
for(x=1; x <=6; x++)
{
  for (y=1; y < x; y++)
  {
    chr=chr+('*');
  }
  console.log(chr);
  chr='';
}
